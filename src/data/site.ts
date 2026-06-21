export const site = {
  name: 'Jaihden Torres',
  shortName: 'JT',
  title: 'Jaihden Torres | Fitness Coaching + Pump University',
  description:
    'Balanced, lifestyle-aware fitness coaching for people who want real results without giving up their social life. Home of Jaihden Torres and Pump University.',
  url: 'https://jaihdentorres.com',
  social: {
    instagram: 'https://www.instagram.com/jaihdentorres/',
    // TikTok + Snapchat handles assumed to mirror the others — swap if they differ.
    tiktok: 'https://www.tiktok.com/@jaihdentorres',
    snapchat: 'https://www.snapchat.com/add/jaihdentorres',
    youtube: 'https://www.youtube.com/@jaihdentorres',
    pumpUniversity: 'https://uofpump.com/',
    shop: 'https://uofpump.com/collections/trademark-tee',
    storyVideo: 'https://youtu.be/KDCu5OTG0QE',
  },
  integrations: {
    tallyUrl: 'https://tally.so/r/MePOjM',
    calendlyUrl: 'https://calendly.com/tjaihden14/30min',
    contactEmail: '',
  },
  media: {
    hero: '/images/candidates/instagram-uofpump-07-labor-day.jpg',
    transformationHero: '/images/candidates/transformation-before-after.jpg?v=20260620-crop',
    afterPhysiqueStrong: '/images/candidates/after-physique-strong.jpg',
    flexProfile: '/images/candidates/after-physique-strong.jpg',
    transformation: '/images/candidates/transformation-before-after.jpg?v=20260620-crop',
    story: '/images/candidates/story-portrait-hoodie.jpg',
    og: '/images/candidates/generated-og-background-alt-01.png',
    pumpUniversityHero: '/images/candidates/pump-university-apparel.jpg',
    pumpUniversityAlt: '/images/candidates/pump-university-apparel.jpg',
    // Pump University athletes (not Jaihden) for the brand pillar, so the same
    // Jaihden photo isn't repeated across every major section.
    pumpAthletes: '/images/candidates/uofpump-hero-01-trademark-gym.jpg',
    youtubeThumb: '/images/candidates/instagram-video-03-ceo-frat-formal.jpg',
    // Bio-optimization now uses Jaihden (round-2 request).
    bioOptimization: '/images/candidates/instagram-profile-10-avatar.jpg',
  },
};

// Bio-optimization resource ("FRATLETE" code). Destination URL was not provided
// in the brief — set fratleteUrl when confirmed; until then it falls back to a
// clearly-named placeholder (Instagram, where the code is promoted).
export const resources = {
  fratleteCode: 'FRATLETE',
  fratleteUrl: '',
};

// Sticky CTA + primary funnel actions. Labels live here so the funnel wording
// stays easy to swap once Jaihden confirms the final call-to-action.
export const cta = {
  stickyLabel: 'Book a Call',
  applyLabel: 'Apply for Coaching',
  questionnaireLabel: 'Start with the questionnaire',
};

export const navItems = [
  { label: 'Proof', href: '#proof' },
  { label: 'Fit', href: '#fit' },
  { label: "What you get", href: '#get' },
  { label: 'Pump University', href: '#pump-university' },
  { label: 'Apply', href: '#apply' },
];

export const methodPillars = [
  {
    number: '01',
    icon: 'apple',
    title: 'Lifestyle-first nutrition',
    teaser: 'Flexible targets built around real weeks.',
    text:
      'Custom nutrition targets, grocery guidance, and week-level planning built around training days, social events, travel, and recovery.',
  },
  {
    number: '02',
    icon: 'dumbbell',
    title: 'Aesthetic training',
    teaser: 'Train for a visible, real-world physique.',
    text:
      'Training built for visible results: shoulders, arms, chest, back, posture, and the look that carries outside the gym.',
  },
  {
    number: '03',
    icon: 'glass',
    title: 'Social protocols',
    teaser: 'A playbook for nights out, trips, and the reset.',
    text:
      'Practical structure for nights out, big weekends, vacations, food choices, hydration, and the next-day reset.',
  },
  {
    number: '04',
    icon: 'target',
    title: 'Identity-level mindset',
    teaser: 'Standards that stick, not another short phase.',
    text:
      'A shift from short resets into standards that stick, so consistency becomes part of how you live instead of another phase.',
  },
  {
    number: '05',
    icon: 'moon',
    title: 'Bio optimization',
    teaser: 'Sleep, recovery, and performance, kept practical.',
    text:
      'Optional guidance around sleep, recovery, and performance habits, kept practical and compliance-conscious.',
  },
];

export const cycleSteps = [
  {
    number: '01',
    icon: 'lock',
    title: 'Locked in all week',
    teaser: 'Strict all week, no weekend plan.',
    text:
      'Training, eating clean, and trying to force progress with no plan for the weekend.',
  },
  {
    number: '02',
    icon: 'bolt',
    title: 'The weekend hits',
    teaser: 'Real life unravels the progress.',
    text:
      'Drinks, travel, parties, dinners, and late nights turn into a full reset.',
  },
  {
    number: '03',
    icon: 'loop',
    title: 'Monday starts over',
    teaser: 'Back to zero — on repeat.',
    text:
      'The goal is not to remove your social life. The goal is to build a system that survives it.',
  },
];

export const deliverables = [
  'Custom training plan',
  'Nutrition targets and meal structure',
  'Weekly check-ins',
  'One-on-one coaching call structure',
  'Social-life strategy for nights out and travel',
  'Progress tracking and accountability',
  'Bio optimization guidance',
  'Foundation, momentum, and long-term standards phases',
];

export const storyBeats = [
  {
    title: 'Built from lived experience',
    text:
      'Jaihden has lived the same weekly cycle his audience is trying to solve: locked in during the week, then losing structure when real life starts.',
  },
  {
    title: 'Not a bodybuilding plan',
    text:
      'The goal is a physique and lifestyle that shows up in real life: confidence, photos, shirts, pool days, trips, and everyday performance.',
  },
  {
    title: 'Structure without disappearing',
    text:
      'The system is not about removing social life. It is about creating a plan that survives it.',
  },
  {
    title: 'Fitness as a standard',
    text:
      'The work is designed to become a default standard, not another short challenge or Monday reset.',
  },
];

// Client-approved testimonials only. While this array is empty, the Proof
// section and its "Proof" nav link do not render at all (see index.astro).
// Never fabricate quotes, names, or results. To enable the section, add real
// entries here and the nav link returns automatically.
export const proof: {
  quote: string;
  name: string;
  detail?: string;
  image?: string;
}[] = [];

export const featuredContent = [
  {
    title: 'Beer Tastes Better With Abs',
    label: 'Story + coaching breakdown',
    href: site.social.storyVideo,
    image: '/images/candidates/instagram-video-03-ceo-frat-formal.jpg',
  },
  {
    title: 'Jaihden on Instagram',
    label: 'Fitness, lifestyle, and Pump University updates',
    href: site.social.instagram,
    image: site.media.afterPhysiqueStrong,
  },
  {
    title: 'Shop Pump University',
    label: 'Trademark Collection',
    href: site.social.shop,
    image: site.media.pumpUniversityAlt,
  },
];

// --- Mobile-first coaching funnel content -----------------------------------

// Four-slide hero carousel. Slide 1 carries the goal questionnaire; the rest
// are image-led proof / brand / personality panels.
export const heroSlides = [
  {
    id: 'goal',
    kind: 'questionnaire' as const,
    image: site.media.flexProfile,
    alt: 'Jaihden Torres standing in the gym after a session',
    eyebrow: 'Coaching that fits your life',
    title: 'Become the best version of yourself.',
  },
  {
    id: 'proof',
    kind: 'panel' as const,
    image: site.media.transformation,
    alt: 'Before and after transformation photos',
    eyebrow: '7+ years of experience',
    title: 'Built on real transformations.',
    body:
      'No trial-and-error. No second-guessing. A system refined over 7+ years of lifting and coaching, so you stop wasting years trying to figure it out alone.',
  },
  {
    id: 'pump',
    kind: 'panel' as const,
    image: site.media.pumpUniversityHero,
    alt: 'Jaihden Torres wearing Pump University apparel',
    eyebrow: 'Meet the CEO',
    title: 'Pump University.',
    body:
      'Founder of Pump University — building a culture of ambitious people who train hard, carry themselves well, and raise their standards together.',
  },
  {
    id: 'youtube',
    kind: 'panel' as const,
    image: site.media.youtubeThumb,
    alt: 'Jaihden Torres YouTube thumbnail',
    eyebrow: 'On YouTube',
    title: 'More than a coach.',
    body:
      'The lifestyle, the trips, the brand, and the personality behind the coaching — follow the full story on YouTube.',
  },
];

// Hero questionnaire — three starting goals borrowed from the reference flow.
export const goalOptions = [
  {
    value: 'fat-loss',
    label: 'Fat loss',
    detail: 'Lean down and stay lean enjoying your favorite foods year round.',
  },
  {
    value: 'build-muscle',
    label: 'Build muscle',
    detail: 'Add quality tissue and reshape your aesthetics around your week.',
  },
  {
    value: 'balanced-lifestyle',
    label: 'Balanced lifestyle',
    detail: 'Energy, sleep, and routine optimizations built around your benders.',
  },
];

// OBHealth-style qualification. Polished from raw nightlife language into
// premium, compliance-safe copy.
export const qualification = {
  yes: {
    title: 'This is for you if',
    items: [
      'You are 25+ years old — a high-performing professional, business owner, or breadwinner.',
      'Fitness first, partying second: you want to look and feel your best while still networking, traveling, and enjoying your weekends.',
      'You are tired of restrictive plans that ignore how you actually live.',
      'You want smart nutrition, data-driven methods, and bio-optimization tools — not another rigid meal plan.',
      'You take ownership of your results and have the budget for premium 1-on-1 coaching.',
    ],
  },
  no: {
    title: "This isn't for you if",
    items: [
      'You are shopping for the cheapest fitness app subscription you can find.',
      'You want a quick 12-week "shred and out" fix with no interest in keeping it.',
      'You expect your coach to cook your meals and watch every rep for you.',
      'You spend freely on nightlife but tell yourself you can’t invest in your health.',
      "You aren't ready to commit or take real ownership of a long-term process.",
    ],
  },
};

// Legally Jacked-style "What do you get?" slider — four required items.
export const whatYouGet = [
  {
    icon: 'phone',
    tag: 'In your coaching app',
    title: 'Workout plans made for you',
    text:
      'Training built around your goals, your schedule, and the equipment you have — delivered in a clean workout app you check from your phone.',
  },
  {
    icon: 'apple',
    tag: 'Data-driven',
    title: 'Your own meal plan',
    text:
      'Flexible meal plans built from your height, weight, macros, and blood work — structured for your tastes and the weekends most plans ignore.',
  },
  {
    icon: 'target',
    tag: '24-hour access',
    title: 'We track your progress together',
    text:
      'Progress tracked together with 24-hour access to me, so there is zero second-guessing between check-ins.',
  },
  {
    icon: 'spark',
    tag: 'Blood work',
    title: 'Bio-optimization tools & blood work',
    text:
      'Blood work review to flag hormone and vitamin gaps, plus bio-optimization tools and recommendations customized to you.',
  },
];

// Bio-optimization tools. HARD RULE: keep this copy compliance-safe — no
// references to restricted/medical-adjacent compounds (see brief).
export const bioOptimization = {
  eyebrow: 'Bio-optimization tools & blood work',
  title: 'Optimize the parts of fitness most coaches ignore.',
  body:
    'Coaching goes past training and macros. We dial in the inputs that decide how you actually feel and perform day to day.',
  points: [
    'Sleep, recovery, and stress strategies built for a high-output schedule.',
    'Blood work review — when you have it — to flag hormone or vitamin gaps and tailor recommendations.',
    'Energy, hydration, and supplementation guidance, kept practical and compliance-conscious.',
  ],
};

// Short mission / get-to-know-me section, with YouTube front and center.
export const mission = {
  eyebrow: 'Get to know me',
  title: 'Why I coach the way I do.',
  body:
    "I lived the same cycle my clients are trying to solve — locked in all week, then watching it unravel every weekend. I built a system that keeps the physique, the confidence, and the social life at the same time, and now I help high-performers do the same.",
  videoLabel: 'Watch the story on YouTube',
};

// Footer/social rail. YouTube is intentionally promoted alongside the usual icons.
export const socialLinks = [
  { label: 'Instagram', href: site.social.instagram, handle: '@jaihdentorres' },
  { label: 'TikTok', href: site.social.tiktok, handle: '@jaihdentorres' },
  { label: 'YouTube', href: site.social.youtube, handle: '@jaihdentorres' },
  { label: 'Snapchat', href: site.social.snapchat, handle: '@jaihdentorres' },
];
