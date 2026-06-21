export const site = {
  name: 'Jaihden Torres',
  shortName: 'JT',
  title: 'Jaihden Torres | Fitness Coaching + Pump University',
  description:
    'Balanced, lifestyle-aware fitness coaching for people who want real results without giving up their social life. Home of Jaihden Torres and Pump University.',
  url: 'https://jaihdentorres.com',
  social: {
    instagram: 'https://www.instagram.com/jaihdentorres/',
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
    story: '/images/candidates/story-portrait-hoodie.jpg',
    og: '/images/candidates/generated-og-background-alt-01.png',
    pumpUniversityHero: '/images/candidates/pump-university-apparel.jpg',
    pumpUniversityAlt: '/images/candidates/pump-university-apparel.jpg',
  },
};

export const navItems = [
  { label: 'Coaching', href: '#method' },
  { label: 'Proof', href: '#proof' },
  { label: 'Pump University', href: '#pump-university' },
  { label: 'Content', href: '#content' },
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
