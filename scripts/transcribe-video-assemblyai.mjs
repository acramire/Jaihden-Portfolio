#!/usr/bin/env node

import { spawn } from 'node:child_process';
import { mkdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

async function loadLocalEnv() {
  const candidates = [
    path.resolve('scripts/.env'),
    path.resolve('.env'),
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

async function pathExists(filePath) {
  try {
    await stat(filePath);
    return true;
  } catch {
    return false;
  }
}

await loadLocalEnv();

const API_BASE_URL = process.env.ASSEMBLYAI_BASE_URL || 'https://api.assemblyai.com';
const API_KEY = process.env.ASSEMBLYAI_API_KEY;
const YT_DLP_BIN = process.env.YT_DLP_BIN || 'yt-dlp';
const POLL_MS = Number(process.env.ASSEMBLYAI_POLL_MS || 5000);

const input = process.argv[2];
const outputDir = process.argv[3] || 'transcripts';

if (!input) {
  console.error('Usage: ASSEMBLYAI_API_KEY=... node scripts/transcribe-video-assemblyai.mjs <video-url-or-local-media-file> [output-dir]');
  process.exit(1);
}

if (!API_KEY) {
  console.error('Missing ASSEMBLYAI_API_KEY. Export it before running this script.');
  process.exit(1);
}

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
      Authorization: API_KEY,
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

async function submitTranscript(uploadUrl) {
  console.log('Submitting transcription job...');

  const result = await assemblyFetch('/v2/transcript', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      audio_url: uploadUrl,
      language_code: 'en_us',
      punctuate: true,
      format_text: true,
      speaker_labels: true,
      auto_chapters: true,
      auto_highlights: true,
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

function formatTranscriptText(transcript) {
  const parts = [];

  parts.push(`# Transcript: ${transcript.id}`);
  parts.push('');
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

  parts.push('## Full Text');
  parts.push('');
  parts.push(transcript.text || '');
  parts.push('');

  return parts.join('\n');
}

async function main() {
  await mkdir(outputDir, { recursive: true });

  const mediaPath = isHttpUrl(input)
    ? await downloadAudio(input, outputDir)
    : path.resolve(input);

  if (!(await pathExists(mediaPath))) {
    throw new Error(`Media file not found: ${mediaPath}`);
  }

  const uploadUrl = await uploadMedia(mediaPath);
  const transcriptId = await submitTranscript(uploadUrl);
  const transcript = await waitForTranscript(transcriptId);

  const outputBase = path.join(outputDir, `assemblyai-${transcriptId}`);
  const jsonPath = `${outputBase}.json`;
  const txtPath = `${outputBase}.md`;

  await writeFile(jsonPath, `${JSON.stringify(transcript, null, 2)}\n`);
  await writeFile(txtPath, formatTranscriptText(transcript));

  console.log('');
  console.log('Done.');
  console.log(`Media file: ${mediaPath}`);
  console.log(`Transcript JSON: ${jsonPath}`);
  console.log(`Transcript Markdown: ${txtPath}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
