#!/usr/bin/env node

import { spawn } from 'node:child_process';
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

async function loadLocalEnv() {
  const candidates = [
    path.resolve('scripts/.env'),
    path.resolve('.env'),
    path.join(os.homedir(), '.config', 'transcribe-media', '.env'),
    path.join(os.homedir(), '.assemblyai.env'),
  ];

  for (const envPath of candidates) {
    if (!(await pathExists(envPath))) continue;

    const contents = await readFile(envPath, 'utf8');

    for (const line of contents.split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;

      const match = trimmed.match(/^([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
      if (!match) continue;

      const [, key, rawValue] = match;
      if (process.env[key]) continue;

      process.env[key] = rawValue
        .replace(/^=+/, '')
        .trim()
        .replace(/^['"]|['"]$/g, '')
        .trim();
    }
  }
}

function timestampSlug() {
  return new Date().toISOString().replace(/[:.]/g, '-');
}

function isHttpUrl(value) {
  return /^https?:\/\//i.test(value);
}

function formatMs(ms) {
  if (!Number.isFinite(ms)) return '00:00';

  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const minutePart = String(minutes).padStart(hours ? 2 : 1, '0');
  const secondPart = String(seconds).padStart(2, '0');

  return hours
    ? `${hours}:${minutePart}:${secondPart}`
    : `${minutePart}:${secondPart}`;
}

async function pathExists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

function printHelp() {
  console.log(`Usage:
  transcribe-media <media-file-or-url> [output-dir] [options]
  node scripts/transcribe-video-assemblyai.mjs <media-file-or-url> [output-dir] [options]

Examples:
  transcribe-media ./voice-memo.m4a
  transcribe-media ./interview.mov --out transcripts/client-interview --title "Client interview"
  transcribe-media https://youtu.be/example --language en_us --no-highlights

Options:
  -o, --out <dir>        Output directory. Defaults to ./transcripts
  -l, --language <code>  AssemblyAI language code. Defaults to en_us
  --title <text>         Human-readable title in the Markdown output
  --direct-url           Send an HTTP URL directly to AssemblyAI instead of downloading with yt-dlp
  --no-speakers          Disable speaker labels
  --no-chapters          Disable auto chapters
  --no-highlights        Disable auto highlights
  -h, --help             Show this help

Environment:
  ASSEMBLYAI_API_KEY is required.
  Optional env files are loaded from ./scripts/.env, ./.env, ~/.config/transcribe-media/.env, and ~/.assemblyai.env.`);
}

function readValueArg(args, index, flag) {
  const value = args[index + 1];

  if (!value || value.startsWith('-')) {
    throw new Error(`Missing value for ${flag}`);
  }

  return value;
}

function parseArgs(args) {
  const options = {
    autoChapters: process.env.ASSEMBLYAI_AUTO_CHAPTERS !== '0',
    autoHighlights: process.env.ASSEMBLYAI_AUTO_HIGHLIGHTS !== '0',
    directUrl: false,
    help: false,
    languageCode: process.env.ASSEMBLYAI_LANGUAGE_CODE || 'en_us',
    outputDir: process.env.TRANSCRIBE_OUTPUT_DIR || 'transcripts',
    speakerLabels: process.env.ASSEMBLYAI_SPEAKER_LABELS !== '0',
    title: '',
  };

  const positionals = [];

  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];

    if (arg === '-h' || arg === '--help') {
      options.help = true;
      continue;
    }

    if (arg === '-o' || arg === '--out') {
      options.outputDir = readValueArg(args, index, arg);
      index += 1;
      continue;
    }

    if (arg === '-l' || arg === '--language') {
      options.languageCode = readValueArg(args, index, arg);
      index += 1;
      continue;
    }

    if (arg === '--title') {
      options.title = readValueArg(args, index, arg);
      index += 1;
      continue;
    }

    if (arg === '--direct-url') {
      options.directUrl = true;
      continue;
    }

    if (arg === '--no-speakers') {
      options.speakerLabels = false;
      continue;
    }

    if (arg === '--no-chapters') {
      options.autoChapters = false;
      continue;
    }

    if (arg === '--no-highlights') {
      options.autoHighlights = false;
      continue;
    }

    if (arg.startsWith('-')) {
      throw new Error(`Unknown option: ${arg}`);
    }

    positionals.push(arg);
  }

  if (positionals.length > 2) {
    throw new Error('Expected one input and an optional output directory.');
  }

  if (positionals[0]) {
    options.input = positionals[0];
  }

  if (positionals[1]) {
    options.outputDir = positionals[1];
  }

  return options;
}

await loadLocalEnv();

const API_BASE_URL = process.env.ASSEMBLYAI_BASE_URL || 'https://api.assemblyai.com';
const YT_DLP_BIN = process.env.YT_DLP_BIN || 'yt-dlp';
const POLL_MS = Number(process.env.ASSEMBLYAI_POLL_MS || 5000);

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: ['ignore', 'pipe', 'pipe'],
    });

    let stdout = '';
    let stderr = '';

    child.stdout.on('data', (chunk) => {
      stdout += chunk.toString();
      process.stdout.write(chunk);
    });

    child.stderr.on('data', (chunk) => {
      stderr += chunk.toString();
      process.stderr.write(chunk);
    });

    child.on('error', reject);

    child.on('close', (code) => {
      if (code === 0) {
        resolve({ stdout, stderr });
      } else {
        reject(new Error(`${command} exited with code ${code}\n${stderr}`));
      }
    });
  });
}

async function downloadAudio(url, dir) {
  const stem = `source-${timestampSlug()}`;
  const outputTemplate = path.join(dir, `${stem}.%(ext)s`);

  console.log(`Downloading audio with ${YT_DLP_BIN}...`);

  await run(YT_DLP_BIN, [
    '--extract-audio',
    '--audio-format',
    'mp3',
    '--audio-quality',
    '0',
    '--output',
    outputTemplate,
    url,
  ]);

  const expectedPath = path.join(dir, `${stem}.mp3`);

  if (!(await pathExists(expectedPath))) {
    throw new Error(`Download finished but ${expectedPath} was not found.`);
  }

  return expectedPath;
}

async function assemblyFetch(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      Authorization: process.env.ASSEMBLYAI_API_KEY,
      ...(options.headers || {}),
    },
  });

  const text = await response.text();
  let body;

  try {
    body = text ? JSON.parse(text) : {};
  } catch {
    body = { raw: text };
  }

  if (!response.ok) {
    throw new Error(`AssemblyAI request failed: ${response.status} ${response.statusText}\n${JSON.stringify(body, null, 2)}`);
  }

  return body;
}

async function uploadMedia(filePath) {
  console.log('Uploading media to AssemblyAI...');

  const fileBuffer = await readFile(filePath);

  const result = await assemblyFetch('/v2/upload', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/octet-stream',
    },
    body: fileBuffer,
  });

  if (!result.upload_url) {
    throw new Error('AssemblyAI upload response did not include upload_url.');
  }

  return result.upload_url;
}

async function submitTranscript(audioUrl, options) {
  console.log('Submitting transcription job...');

  const result = await assemblyFetch('/v2/transcript', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      audio_url: audioUrl,
      language_code: options.languageCode,
      punctuate: true,
      format_text: true,
      speaker_labels: options.speakerLabels,
      auto_chapters: options.autoChapters,
      auto_highlights: options.autoHighlights,
    }),
  });

  if (!result.id) {
    throw new Error('AssemblyAI transcript response did not include id.');
  }

  return result.id;
}

async function waitForTranscript(transcriptId) {
  console.log(`Polling transcript ${transcriptId}...`);

  while (true) {
    const transcript = await assemblyFetch(`/v2/transcript/${transcriptId}`);

    if (transcript.status === 'completed') {
      return transcript;
    }

    if (transcript.status === 'error') {
      throw new Error(`AssemblyAI transcription failed: ${transcript.error || 'unknown error'}`);
    }

    console.log(`Status: ${transcript.status}. Waiting ${POLL_MS}ms...`);
    await new Promise((resolve) => setTimeout(resolve, POLL_MS));
  }
}

function formatTranscriptText(transcript, context) {
  const parts = [];

  parts.push(`# ${context.title || `Transcript: ${transcript.id}`}`);
  parts.push('');
  parts.push(`Source: ${context.input}`);
  parts.push(`Generated: ${new Date().toISOString()}`);
  parts.push(`Status: ${transcript.status}`);
  parts.push(`Language: ${transcript.language_code || 'unknown'}`);
  parts.push('');

  if (Array.isArray(transcript.chapters) && transcript.chapters.length > 0) {
    parts.push('## Chapters');
    parts.push('');

    for (const chapter of transcript.chapters) {
      parts.push(`- ${chapter.headline || 'Untitled'}: ${chapter.summary || ''}`.trim());
    }

    parts.push('');
  }

  if (Array.isArray(transcript.auto_highlights_result?.results) && transcript.auto_highlights_result.results.length > 0) {
    parts.push('## Highlights');
    parts.push('');

    for (const highlight of transcript.auto_highlights_result.results) {
      parts.push(`- ${highlight.text}`);
    }

    parts.push('');
  }

  if (Array.isArray(transcript.utterances) && transcript.utterances.length > 0) {
    parts.push('## Speaker Transcript');
    parts.push('');

    for (const utterance of transcript.utterances) {
      const speaker = utterance.speaker ? `Speaker ${utterance.speaker}` : 'Speaker';
      parts.push(`**${formatMs(utterance.start)} ${speaker}:** ${utterance.text || ''}`.trim());
      parts.push('');
    }
  }

  parts.push('## Full Text');
  parts.push('');
  parts.push(transcript.text || '');
  parts.push('');

  return parts.join('\n');
}

async function main() {
  const options = parseArgs(process.argv.slice(2));

  if (options.help) {
    printHelp();
    return;
  }

  if (!options.input) {
    printHelp();
    process.exit(1);
  }

  if (!process.env.ASSEMBLYAI_API_KEY) {
    console.error('Missing ASSEMBLYAI_API_KEY. Export it or add it to one of the supported .env files.');
    process.exit(1);
  }

  const input = options.input;
  const outputDir = path.resolve(options.outputDir);

  await mkdir(outputDir, { recursive: true });

  const mediaPath = isHttpUrl(input) && !options.directUrl
    ? await downloadAudio(input, outputDir)
    : path.resolve(input);

  if (!options.directUrl && !(await pathExists(mediaPath))) {
    throw new Error(`Media file not found: ${mediaPath}`);
  }

  const audioUrl = options.directUrl
    ? input
    : await uploadMedia(mediaPath);
  const transcriptId = await submitTranscript(audioUrl, options);
  const transcript = await waitForTranscript(transcriptId);

  const outputBase = path.join(outputDir, `assemblyai-${transcriptId}`);
  const jsonPath = `${outputBase}.json`;
  const txtPath = `${outputBase}.md`;

  await writeFile(jsonPath, `${JSON.stringify(transcript, null, 2)}\n`);
  await writeFile(txtPath, formatTranscriptText(transcript, { input, title: options.title }));

  console.log('');
  console.log('Done.');
  console.log(`Media file: ${options.directUrl ? input : mediaPath}`);
  console.log(`Transcript JSON: ${jsonPath}`);
  console.log(`Transcript Markdown: ${txtPath}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
