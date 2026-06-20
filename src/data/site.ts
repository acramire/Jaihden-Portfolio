export const site = {
  name: 'Jaihden Torres',
  shortName: 'JT',
  title: 'Jaihden Torres | Fitness Coaching + UofPump',
  description:
    'Balanced, lifestyle-aware fitness coaching for people who want real results without giving up their social life. Home of Jaihden Torres and UofPump.',
  url: 'https://jaihdentorres.com',
  social: {
    instagram: 'https://www.instagram.com/jaihdentorres/',
    youtube: 'https://www.youtube.com/@jaihdentorres',
    uofpump: 'https://uofpump.com/',
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
    story: '/images/candidates/instagram-story-08-faith-drop.jpg',
    og: '/images/candidates/generated-og-background-alt-01.png',
    uofpumpHero: '/images/candidates/uofpump-hero-01-trademark-gym.jpg',
    uofpumpAlt: '/images/candidates/uofpump-product-02-trademark-tee.jpg',
  },
};

export const navItems = [
  { label: 'Coaching', href: '#method' },
  { label: 'Proof', href: '#proof' },
  { label: 'UofPump', href: '#uofpump' },
  { label: 'Content', href: '#content' },
  { label: 'Apply', href: '#apply' },
];

export const methodPillars = [
  {
    number: '01',
    title: 'Lifestyle-first nutrition',
    text:
      'Custom nutrition targets, grocery guidance, and week-level planning built around training days, social events, travel, and recovery.',
  },
  {
    number: '02',
    title: 'Aesthetic training',
    text:
      'Training built for visible results: shoulders, arms, chest, back, posture, and the look that carries outside the gym.',
  },
  {
    number: '03',
    title: 'Social protocols',
    text:
      'Practical structure for nights out, big weekends, vacations, food choices, hydration, and the next-day reset.',
  },
  {
    number: '04',
    title: 'Identity-level mindset',
    text:
      'A shift from short resets into standards that stick, so consistency becomes part of how you live instead of another phase.',
  },
  {
    number: '05',
    title: 'Bio optimization',
    text:
      'Optional guidance around sleep, recovery, and performance habits, kept practical and compliance-conscious.',
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
    label: 'Fitness, lifestyle, and UofPump updates',
    href: site.social.instagram,
    image: site.media.hero,
  },
  {
    title: 'Shop UofPump',
    label: 'Trademark Collection',
    href: site.social.shop,
    image: site.media.uofpumpAlt,
  },
];
