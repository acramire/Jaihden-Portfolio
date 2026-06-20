# Jaihden Connect Rebuild Specification

Audit date: 2026-06-20  
Audited URL: https://jaihdentorres.base44.app/  
Site title: Jaihden Connect

## 1. Site Overview

### Purpose

Jaihden Connect is a personal creator and fitness coaching hub for Jaihden Torres. It promotes his 1:1 fitness coaching, brand/content collaboration services, social content, client results, and paid discovery-call booking.

### Target Audience

Primary audiences:

- College-age fitness clients who want coaching that fits a social/college lifestyle.
- Followers of Jaihden's Instagram, YouTube, and Pump University content.
- Brands seeking fitness, lifestyle, college, or Gen-Z creator partnerships.
- Prospective collaborators who need a fast contact path.

### Site Type and Structure

Confirmed structure:

- Single-page landing site / creator hub / contact and booking portal.
- Root route `/` contains all primary content.
- Navigation uses hash anchors: `#about`, `#services`, `#content`, `#testimonials`, `#book`, `#contact`.
- Non-hash routes such as `/about`, `/services`, `/content`, `/book`, and `/contact` render a Base44 404 screen.
- Booking is handled by an embedded Calendly iframe, not a native site form.

## 2. Page and Section Inventory

### Root Page: `/`

#### Fixed Navigation

Where it appears: Top of all root-page sections; fixed header.

Content:

- Logo image with alt text `JT Logo`.
- Brand text: `JAIHDEN.`
- Desktop nav links: `About`, `Services`, `Content`, `Reviews`, `Book`, `Contact`.
- Desktop CTA: `Book a Call`.
- Mobile hamburger button that toggles to an X icon when open.

Interactions:

| Element | Destination / Behavior | Type |
|---|---|---|
| `JAIHDEN.` logo | `#`; returns to top/root | Internal anchor |
| `About` | `#about` | Internal anchor scroll |
| `Services` | `#services` | Internal anchor scroll |
| `Content` | `#content` | Internal anchor scroll |
| `Reviews` | `#testimonials` | Internal anchor scroll |
| `Book` | `#book` | Internal anchor scroll |
| `Contact` | `#contact` | Internal anchor scroll |
| `Book a Call` | `#book` | Internal anchor scroll |
| Mobile hamburger | Opens full-width mobile menu overlay | Toggle |
| Mobile X | Closes mobile menu overlay | Toggle |

Observed behavior:

- Desktop anchor clicks scroll correctly.
- Mobile menu opens with vertical links and a full-width `Book a Call` CTA.
- Selecting the tested mobile `Services` link closed the overlay and changed the hash to `#services`; in that test run, the scroll position did not move. Rebuild should verify and preferably implement reliable smooth scrolling.

#### Mobile Menu Overlay

Where it appears: Mobile viewport after tapping hamburger.

Content:

- Same brand/logo row.
- Vertical menu links: `About`, `Services`, `Content`, `Reviews`, `Book`, `Contact`.
- Full-width rounded CTA: `Book a Call`.
- Semi-transparent dark blurred overlay over the hero background.

Interactions:

All mobile links are internal anchor links. The CTA navigates to `#book`.

#### Hero Section

Where it appears: First viewport of root page.

Content:

- Full-bleed background image of Jaihden Torres.
- Eyebrow: `Fitness Coach · Content Creator · Athlete`
- H1: `Helping Party Animals Stay in Shape`
- Supporting copy: `Pump University CEO · 1:1 Coaching built for the college lifestyle. Build muscle, burn fat, and balance your benders.`
- CTA: `Book a Free Call`
- Secondary CTA: `Follow Me`
- Stats:
  - `8.2K+` / `Instagram Followers`
  - `50+` / `Clients Coached`
  - `29K` / `Most Viewed Short`
- Down-chevron link to next section.

Interactions:

| Element | Destination / Behavior | Type |
|---|---|---|
| `Book a Free Call` | `#book` | Internal anchor |
| `Follow Me` | `https://www.instagram.com/jaihdentorres` | External link, new tab |
| Down chevron | `#about` | Internal anchor |

Images/icons:

- Hero image: `https://media.base44.com/images/public/69f96773db33d258bdbde69e/66d023a0f_IMG_0002.jpg`
- Instagram icon.
- Chevron-down icon.

#### About Section

Anchor: `#about`

Content:

- Eyebrow: `About Me`
- H2: `From the Gym to the Screen`
- Subheading: `Entrepreneur · Pump University CEO`
- Body copy:
  - `Helping Party Animals stay in shape 🍾`
  - `Build Muscle | Burn Fat | Balance Benders 🍺`
  - `DM "Fratlete" on Instagram for 1:1 coaching 🥩`
- CTA: `Book a Discovery Call`
- Four attribute cards:
  - `Fitness Coach` / `Transformation specialist`
  - `Content Creator` / `College lifestyle & fitness`
  - `Martial Artist` / `ESPN+ featured athlete`
  - `Community Builder` / `Pump University CEO`

Interactions:

| Element | Destination / Behavior | Type |
|---|---|---|
| `Book a Discovery Call` | `#book` | Internal anchor |

Icons:

- Dumbbell, flame, trophy, users.

#### Services Section

Anchor: `#services`

Content:

- Eyebrow: `What I Offer`
- H2: `Services`
- Three service cards.

Service card 1:

- Badge: `Most Popular`
- Title: `1:1 Fitness Coaching`
- Description: `Personalized training and nutrition plans built for the college lifestyle. DM "Fratlete" on Instagram to get started with a custom program designed around your schedule, goals, and social life.`
- Feature list:
  - `Custom workout plan`
  - `Nutrition guidance`
  - `Weekly check-ins`
  - `Fratlete lifestyle protocol`
- CTA: `Get Started`

Service card 2:

- Badge: `For Brands`
- Title: `Content & Brand Collabs`
- Description: `Authentic college lifestyle and fitness content that resonates. With 8.2K+ engaged followers and viral reach, let's create content that connects with the Gen-Z fitness audience.`
- Feature list:
  - `Instagram Reels & Posts`
  - `YouTube integrations`
  - `Authentic storytelling`
  - `Gen-Z audience reach`
- CTA: `Let's Collab`

Service card 3:

- Badge: `Partnerships`
- Title: `Brand Partnerships`
- Description: `Looking for an authentic ambassador for your fitness, lifestyle, or college brand? I partner with brands I genuinely believe in to create real, engaging promotions.`
- Feature list:
  - `Long-term ambassador deals`
  - `Product reviews`
  - `Event appearances`
  - `Co-branded content`
- CTA: `Partner Up`

Interactions:

| Element | Destination / Behavior | Type |
|---|---|---|
| `Get Started` | `https://www.instagram.com/jaihdentorres` | External Instagram link, new tab |
| `Let's Collab` | `#contact` | Internal anchor |
| `Partner Up` | `#contact` | Internal anchor |

Icons:

- Dumbbell, camera, handshake, check-circle, arrow-right.

#### Content Section

Anchor: `#content`

Content:

- Eyebrow: `Latest Content`
- H2: `Catch the Vibe`

Subsection: YouTube Shorts

- Heading: `YouTube Shorts`
- Channel/profile link: `El Flacusho →`
- Four vertical video cards:
  - `Beer Tastes Better With Abs` / `86 views`
  - `CEO vs Frat Formal Part 2` / `557 views`
  - `STFU NERD` / `536 views`
  - `April 22, 2026` / `1.2K views`

Subsection: Instagram

- Heading: `Instagram`
- Profile link: `@jaihdentorres →`
- Three text cards:
  - `YES, I'M AN INFLUENCER — I INFLUENCE PEOPLE TO DRINK HEAVILY WITH ME 🏖️` / `#college #frat #party`
  - `Yea not happening 😂` / `#college #frat #lifestyle`
  - `Shout Out Tacos el Gordo 🌮` / `#college #frat #lifestyle`

Subsection: Pump University

- Heading: `Pump University — Wuts Pumpn Podcast`
- Channel/profile link: `@PumpUniversity →`
- Three horizontal video cards:
  - `Wuts Pumpn EP 9: Los Carpones` / `296 views`
  - `Wuts Pumpn EP 8: Catching Up With My Childhood Bully` / `401 views`
  - `Wuts Pumpn EP 7: Business vs. Premed` / `421 views`

Interactions:

| Element | Destination / Behavior | Type |
|---|---|---|
| `El Flacusho →` | `https://www.youtube.com/@jaihdentorres` | External YouTube link, new tab |
| `Beer Tastes Better With Abs` card | `https://youtu.be/KDCu5OTG0QE` | External YouTube link, new tab |
| `CEO vs Frat Formal Part 2` card | `https://youtu.be/5-L0a4QDAVk` | External YouTube link, new tab |
| `STFU NERD` card | `https://www.youtube.com/shorts/a2REjRE7G5c` | External YouTube Shorts link, new tab |
| `April 22, 2026` card | `https://www.youtube.com/shorts/Y3YZecys5rI` | External YouTube Shorts link, new tab |
| `@jaihdentorres →` | `https://www.instagram.com/jaihdentorres` | External Instagram link, new tab |
| First Instagram card | `https://www.instagram.com/reel/DX5bmnEh1Hf/` | External Instagram link, new tab |
| Second Instagram card | `https://www.instagram.com/p/DXmvzItj_5T/` | External Instagram link, new tab |
| Third Instagram card | `https://www.instagram.com/reel/DXcNpA8AfYP/` | External Instagram link, new tab |
| `@PumpUniversity →` | `https://www.youtube.com/@PumpUniversity` | External YouTube link, new tab |
| EP 9 card | `https://www.youtube.com/watch?v=Ol_POeufc5o` | External YouTube link, new tab |
| EP 8 card | `https://www.youtube.com/watch?v=bVgxoZSHVUg` | External YouTube link, new tab |
| EP 7 card | `https://www.youtube.com/watch?v=Sx9FDTlzmSQ` | External YouTube link, new tab |

Media:

- YouTube thumbnail images from `i.ytimg.com`.
- No embedded video players; all content cards are external links.
- Hover treatment on video cards shows a centered play button overlay.

#### Testimonials Section

Anchor: `#testimonials`

Content:

- Eyebrow: `Client Results`
- H2: `Real People. Real Gains.`
- Supporting copy: `50+ clients transformed. Here's what they're saying.`
- Six testimonial cards.

Testimonials:

| Result Badge | Quote | Client | Detail |
|---|---|---|---|
| `−18 lbs in 10 weeks` | `"Jaihden's program is the real deal. I dropped 18 lbs in 10 weeks without giving up my social life. He actually understands the college lifestyle."` | `Marcus D.` | `College Junior, UNLV` |
| `5x/week consistency` | `"I went from skipping the gym to hitting it 5x a week. The custom plan he built around my schedule made all the difference. Best investment I've made."` | `Tyler R.` | `Fraternity Member, ASU` |
| `+12 lbs muscle in 3 months` | `"Gained 12 lbs of muscle in 3 months. Jaihden's coaching is legit — he knows his stuff and keeps you accountable without being annoying about it."` | `Carlos M.` | `Student Athlete, SDSU` |
| `−25 lbs, abs showing` | `"I was skeptical at first but the results speak for themselves. Down 25 lbs, abs finally showing, and I still go out on weekends. 10/10."` | `Jake P.` | `Recent Grad, Las Vegas` |
| `Stronger through finals` | `"Crazy how much he fit into a program that works around my insane schedule. I feel stronger and more focused than ever — even during finals."` | `Diego V.` | `Pre-Med Student, UCLA` |
| `2 months > 1 year alone` | `"Didn't know anything about lifting when I started. Jaihden broke everything down simply and I've made more progress in 2 months than in a whole year alone."` | `Nate K.` | `Gym Beginner, Phoenix AZ` |

Footer strip inside section:

- Five-star icon row.
- `5.0`
- `· Average client rating`
- CTA: `Join the 50+ Clients →`

Interactions:

| Element | Destination / Behavior | Type |
|---|---|---|
| `Join the 50+ Clients →` | `#book` | Internal anchor |

#### Booking Section

Anchor: `#book`

Content:

- Eyebrow: `Book a Session`
- H2: `Ready to Get Started?`
- Body copy: `Book a 30-minute discovery call. We'll build a custom protocol around your goals — burn fat, build muscle, and optimize your results.`
- Info cards:
  - `30 Minutes` / `Discovery Call`
  - `$25 USD` / `One-time fee`
  - `Video Call` / `Details on confirmation`
- `What to Expect`
  - `Review your current fitness level & goals`
  - `Build a protocol around your college schedule`
  - `Discuss nutrition strategy that fits your lifestyle`
  - `Get a clear next step — no pressure`
- Fallback copy: `Can't book online? DM @jaihdentorres on Instagram instead.`
- Calendly iframe.

Calendly embed:

- Iframe title: `Select a Date & Time - Calendly`
- Iframe src: `https://calendly.com/tjaihden14/30min?embed_domain=jaihdentorres.base44.app&embed_type=Inline&hide_event_type_details=0&hide_gdpr_banner=1&background_color=111111&text_color=f5f5f5&primary_color=60a5fa`
- Visible Calendly details:
  - Host/brand shown as `El Flacusho`
  - Event title: `30 Minute Meeting`
  - `30 min`
  - `Web conferencing details provided upon confirmation.`
  - `$25 USD`
  - Description begins: `If you’re here, you’re ready to stop second-guessing yourself and start following a customized protocol built around your goals.`
  - `SHOW MORE`
  - `Select a Date & Time`
  - Calendar month observed during audit: `June 2026`
  - `Powered by Calendly` ribbon.

Interactions:

| Element | Destination / Behavior | Type |
|---|---|---|
| `@jaihdentorres` fallback link | `https://www.instagram.com/jaihdentorres` | External Instagram link, new tab |
| Calendly date/time controls | Calendly-controlled selection flow | External embedded booking |
| Calendly `SHOW MORE` | Expands additional Calendly event description | External embedded widget |

No native site form fields are present outside Calendly.

#### Contact Section

Anchor: `#contact`

Content:

- Eyebrow: `Get In Touch`
- H2: `Let's Build Something Together`
- Body copy: `Whether you're looking for 1:1 coaching, a brand collaboration, or just want to connect — hit me up. The fastest way to reach me is through Instagram DMs.`
- Tip card:
  - `Quick Tip`
  - `DM "Fratlete" on Instagram for the fastest response on coaching inquiries.`
- CTA: `Book a Discovery Call`
- Contact cards:
  - `Instagram` / `@jaihdentorres · DM for coaching & collabs`
  - `YouTube` / `@jaihdentorres · Lifestyle & fitness content`
  - `Email` / `jaihdentorres@gmail.com · Brand deals & partnerships`

Interactions:

| Element | Destination / Behavior | Type |
|---|---|---|
| `Book a Discovery Call` | `#book` | Internal anchor |
| Instagram card | `https://www.instagram.com/jaihdentorres` | External link, new tab |
| YouTube card | `https://www.youtube.com/@jaihdentorres` | External link, new tab |
| Email card | `mailto:jaihdentorres@gmail.com` | Email client link, currently target `_blank` |

#### Footer

Content:

- Logo image with alt text `JT Logo`.
- Text: `JAIHDEN TORRES`
- Social icon links for Instagram and YouTube.
- Copyright: `© 2026 Jaihden Torres. All rights reserved.`

Interactions:

| Element | Destination / Behavior | Type |
|---|---|---|
| Instagram icon | `https://www.instagram.com/jaihdentorres` | External link, new tab |
| YouTube icon | `https://www.youtube.com/@jaihdentorres` | External link, new tab |

### 404 Screen

Where it appears:

- Direct paths such as `/about`, `/services`, `/content`, `/book`, `/contact`.

Content observed on `/contact`:

- H1: `404`
- H2: `Page Not Found`
- Message: `The page "contact" could not be found in this application.`
- Button: `Go Home`

Interactions:

| Element | Destination / Behavior | Type |
|---|---|---|
| `Go Home` | Navigates back to `/` | Internal app navigation |

Title pattern:

- Example: `/contact` page title becomes `contact | Jaihden Connect`.

## 3. Navigation and User Flows

### Initial Landing Experience

As a visitor, I want to immediately understand who Jaihden is and what he offers so that I can decide whether to follow him, book a call, or explore more.

Flow:

1. User lands on `/`.
2. Hero displays background image, headline, positioning, two CTAs, and proof metrics.
3. User can click `Book a Free Call`, `Follow Me`, the down arrow, or top nav links.

### Section Discovery Flow

As a visitor, I want to jump to sections from the navigation so that I can quickly find services, reviews, content, booking, or contact information.

Flow:

1. User selects a nav item.
2. URL hash updates.
3. Page scrolls to the corresponding section on desktop.
4. On mobile, the overlay closes after selecting a link; rebuild should make the scroll behavior reliable.

### Coaching Conversion Flow

As a potential coaching client, I want to understand the program and book a discovery call so that I can start a coaching inquiry.

Flow:

1. User reads hero/about/services.
2. User clicks `Book a Free Call`, `Book a Discovery Call`, `Join the 50+ Clients →`, or `Book a Call`.
3. Page scrolls to the booking section.
4. User selects a date/time in Calendly.
5. Calendly handles details, payment, confirmation, and video-call information.

### Instagram DM Flow

As a potential client, I want to DM Jaihden on Instagram so that I can ask about coaching quickly.

Flow:

1. User clicks `Follow Me`, `Get Started`, fallback `@jaihdentorres`, Instagram contact card, or footer Instagram icon.
2. Browser opens Instagram in a new tab.
3. User continues the DM flow on Instagram.

### Brand Collaboration Flow

As a brand representative, I want to review creator reach and contact options so that I can propose a partnership.

Flow:

1. User reviews services, content examples, and social proof.
2. User clicks `Let's Collab` or `Partner Up`.
3. Page scrolls to Contact.
4. User chooses Instagram, YouTube, email, or booking.

### Content Discovery Flow

As a fan or prospective partner, I want to preview recent content so that I can evaluate Jaihden's style and audience fit.

Flow:

1. User navigates to `Content`.
2. User reviews YouTube Shorts, Instagram post links, and Pump University podcast links.
3. User clicks any content card to open the original platform in a new tab.

## 4. Functional Requirements

### Navigation

- FR-001: The site shall provide a fixed top navigation bar on the root page.
- FR-002: The navigation shall include the logo/brand link, section links, and a primary `Book a Call` CTA.
- FR-003: Desktop section links shall update the URL hash and scroll to the correct section.
- FR-004: Mobile shall replace desktop nav links with a hamburger toggle.
- FR-005: The mobile hamburger shall open a menu overlay containing all section links and a `Book a Call` CTA.
- FR-006: The mobile menu toggle shall change from hamburger icon to close icon when open.
- FR-007: Mobile menu links shall close the menu after selection.
- FR-008: Rebuild shall implement reliable mobile anchor scrolling when a mobile menu item is selected.
- FR-009: Unknown non-root routes shall render a 404 screen with `Go Home`.

### Content Display

- FR-010: The homepage shall display a hero with background image, eyebrow, headline, supporting copy, two CTAs, and three stats.
- FR-011: The About section shall display the current biography copy and four attribute cards.
- FR-012: The Services section shall display three service cards with badges, icons, descriptions, feature lists, and CTAs.
- FR-013: The Content section shall display YouTube Shorts, Instagram posts, and Pump University podcast content groups.
- FR-014: The Testimonials section shall display six testimonial cards and a rating CTA strip.
- FR-015: The Booking section shall display event details, expectations, fallback Instagram link, and Calendly embed.
- FR-016: The Contact section shall display intro copy, quick tip, booking CTA, and three contact cards.
- FR-017: The footer shall display brand identity, social icon links, and copyright.

### Calls to Action and External Links

- FR-018: All external social/video links shall open in a new tab.
- FR-019: External links shall include `rel="noopener noreferrer"`.
- FR-020: Internal CTAs shall use hash anchors and not reload the page.
- FR-021: Email contact shall use `mailto:jaihdentorres@gmail.com`.
- FR-022: All video and social content cards shall be clickable across the full card area.

### Booking and Forms

- FR-023: The booking section shall embed Calendly using the confirmed URL and visual parameters.
- FR-024: The site shall load Calendly's external widget script when the booking embed is used.
- FR-025: The booking embed shall have a minimum height sufficient for date/time selection, currently 700px on desktop.
- FR-026: The site shall provide a fallback Instagram DM link if Calendly does not work.
- FR-027: No native contact form is required for faithful v1 rebuild.
- FR-028: If a native form is added later, it shall validate required fields, show success/error messages, and store or forward submissions.

### Media and Assets

- FR-029: The site shall use the existing hero photo asset or a client-provided replacement.
- FR-030: The site shall use the current JT logo image or a client-provided replacement.
- FR-031: YouTube content cards shall use YouTube thumbnail images.
- FR-032: Icons shall match the current Lucide-style line icons.
- FR-033: Images shall include descriptive alt text.

### Loading, Empty, and Error States

- FR-034: Calendly embed shall show a visually acceptable loading state while the iframe loads.
- FR-035: If Calendly fails to load, the fallback Instagram DM link shall remain visible.
- FR-036: Missing content items shall not leave broken cards; CMS-driven cards should hide when inactive or show a configured empty state.
- FR-037: Broken external thumbnails shall use a fallback background or placeholder.
- FR-038: The 404 screen shall remain accessible from invalid paths.

### Accessibility

- FR-039: The page shall use one H1 and logical H2/H3 hierarchy.
- FR-040: Navigation shall be wrapped in semantic `nav`.
- FR-041: Main page content shall be wrapped in semantic `main`.
- FR-042: Footer shall be wrapped in semantic `footer`.
- FR-043: Mobile menu button shall have an accessible label such as `Open menu` / `Close menu`.
- FR-044: Icon-only social links shall have accessible labels.
- FR-045: All interactive elements shall be reachable by keyboard.
- FR-046: Focus states shall be visible on links, buttons, and Calendly fallback controls.
- FR-047: Color contrast shall meet WCAG AA for body copy, nav links, card copy, and buttons.
- FR-048: Animations shall respect `prefers-reduced-motion`.

### SEO and Metadata

- FR-049: The root page shall use title `Jaihden Connect`.
- FR-050: The meta description shall match or intentionally improve the existing description.
- FR-051: Open Graph and Twitter metadata shall be present.
- FR-052: Canonical URL shall point to the production domain.
- FR-053: Structured data shall be corrected to use the final production URL.
- FR-054: Content sections shall be crawlable without requiring user interaction.

### Admin / Content Update Needs

- FR-055: Rebuild should allow non-developers to update profile copy, stats, services, testimonials, content links, booking URL, and contact links.
- FR-056: CMS/admin content updates should not require redeploying the full app when possible.
- FR-057: Content items should support active/inactive state and sort order.

## 5. Content Specification

### Metadata

| Field | Current Value |
|---|---|
| Page title | `Jaihden Connect` |
| Meta description | `Your centralized hub for all things Jaihden Torres. Discover latest content, exclusive updates, and contact information.` |
| OG title | `Jaihden Connect` |
| OG description | Same as meta description |
| OG image | `https://media.base44.com/images/public/69f96773db33d258bdbde69e/faf302e45_logo.png/v1/fill/w_1200,h_630/faf302e45_logo.png` |
| Canonical | `https://jaihdentorres.base44.app` |

### Primary Visible Copy

All visible page copy is captured in the section inventory above. Exact strings include:

- `JAIHDEN.`
- `Fitness Coach · Content Creator · Athlete`
- `Helping Party Animals Stay in Shape`
- `Pump University CEO · 1:1 Coaching built for the college lifestyle. Build muscle, burn fat, and balance your benders.`
- `Book a Free Call`
- `Follow Me`
- `About Me`
- `From the Gym to the Screen`
- `What I Offer`
- `Services`
- `Latest Content`
- `Catch the Vibe`
- `Client Results`
- `Real People. Real Gains.`
- `Book a Session`
- `Ready to Get Started?`
- `Get In Touch`
- `Let's Build Something Together`
- `© 2026 Jaihden Torres. All rights reserved.`

### Button and Link Labels

- `About`
- `Services`
- `Content`
- `Reviews`
- `Book`
- `Contact`
- `Book a Call`
- `Book a Free Call`
- `Follow Me`
- `Book a Discovery Call`
- `Get Started`
- `Let's Collab`
- `Partner Up`
- `El Flacusho →`
- `@jaihdentorres →`
- `@PumpUniversity →`
- `Join the 50+ Clients →`
- `Go Home`

### Form Labels / Error / Success Messages

Confirmed:

- No native form labels, placeholders, validation messages, success messages, or error messages are present on the parent site.
- Calendly controls are embedded externally and should be treated as Calendly-managed.

## 6. Visual and UI Specification

### Overall Visual Style

- Dark, high-contrast creator/fitness landing page.
- Dominant background: near black (`rgb(10, 10, 10)` / HSL `0 0% 4%`).
- Primary accent: bright sky blue (`hsl(210 100% 70%)`).
- Foreground text: off-white (`hsl(0 0% 96%)`).
- Muted text: gray (`hsl(0 0% 55%)`).
- Cards: dark charcoal (`hsl(0 0% 7%)`).
- Borders: subtle dark gray (`hsl(0 0% 14%)`).

### Typography

Confirmed CSS variables:

- Heading font: `Space Grotesk`, sans-serif.
- Body font: `Inter`, sans-serif.

Observed usage:

- Large bold heading typography.
- Accent words in headings use blue, italic styling.
- Eyebrows use small uppercase text, tracking, blue color.
- Body copy uses muted gray, 16-18px approximate on desktop.

### Layout

- Max content width: approximately `max-w-7xl` / 1280px container.
- Horizontal padding: 32px desktop, 16px mobile.
- Sections use large vertical padding: approximately 96-128px desktop.
- Navigation height: 64-80px, fixed.
- Desktop sections use 2-column or 3-column grids.
- Mobile sections collapse to single-column vertical stacking.

### Cards

- Service cards: rounded large corners, dark border, hover border treatment. First card is filled blue and marked most popular.
- Testimonial cards: dark background, subtle border, rounded corners, star/quote icons, hover border/shadow.
- Contact cards: dark card rows with colored icon squares, arrow icon, hover border/shadow.
- Instagram cards: text-only dark cards with border and hover accent.
- Video cards: image thumbnails with rounded corners, overlay gradient, title/views at bottom, hover scale and play overlay.

### Buttons

- Primary buttons: blue pill shape, dark text, bold heading font, subtle blue shadow.
- Secondary hero button: transparent/dark pill with border, white text, Instagram icon.
- Card CTAs: full-width rounded rectangle/pill; first service card uses white button with blue text.
- Active/hover states: opacity reduction, border color change, subtle shadow, and small active scale on hero CTA.

### Backgrounds and Effects

- Hero uses full-bleed photo with dark overlays/gradient, image object position near upper center.
- Decorative blurred blue/primary glow circles appear in About, Services, and Book sections.
- Some sections use semi-transparent card background band (`bg-card/40`).
- Calendly area sits in a large bordered dark iframe container.

### Icons

Current icon style is Lucide line icons:

- Menu, X, Instagram, YouTube, Mail, Dumbbell, Flame, Trophy, Users, Camera, Handshake, CircleCheck, ArrowRight, Clock, DollarSign, Video, Star, Quote, ChevronDown.

### Imagery

Required assets:

- JT logo: `https://media.base44.com/images/public/69f96773db33d258bdbde69e/723b88db1_generated_e60a7593.png`
- Favicon/OG logo: `https://media.base44.com/images/public/69f96773db33d258bdbde69e/faf302e45_logo.png`
- Hero photo: `https://media.base44.com/images/public/69f96773db33d258bdbde69e/66d023a0f_IMG_0002.jpg`
- YouTube thumbnails listed in section inventory.

## 7. Technical Behavior

### Confirmed

- Site is built as a bundled client app with Vite-style assets:
  - `/assets/index-DQ1Edez_.js`
  - `/assets/index-Dh_eOmNc.css`
- Styling uses Tailwind-like utility classes and CSS variables.
- Icons are inline SVGs consistent with Lucide.
- Fonts are loaded from Google Fonts:
  - Inter weights 300-900
  - Space Grotesk weights 400-700
- Media is hosted by Base44 and YouTube thumbnail CDN.
- Calendly script is loaded:
  - `https://assets.calendly.com/assets/external/widget.js`
- Calendly iframe is embedded with custom dark colors.
- Base44 app logging is present through inline script:
  - POST `/api/app-logs/69f96773db33d258bdbde69e/log-user-in-app/home`
- Observed API/resource endpoints include:
  - `/api/apps/69f96773db33d258bdbde69e/entities/User/me`
  - `/api/apps/public/prod/public-settings/by-id/69f96773db33d258bdbde69e`
  - `/api/apps/69f96773db33d258bdbde69e/analytics/track/batch`
- No native forms are present.
- No chat widget was observed.
- No authentication UI or admin-only feature was visible to public visitors.

### Reasonable Assumptions

- The app is likely React/Vite running on Base44.
- Page content appears hardcoded or fetched from app configuration rather than a public CMS visible in the DOM.
- Analytics are handled by Base44's built-in app logging and tracking endpoints.
- Calendly handles payment, scheduling, confirmation, and video conferencing details.

## 8. Data Model / CMS Needs

### Profile

Fields:

- `name`
- `brandName`
- `logoImage`
- `faviconImage`
- `heroImage`
- `heroAltText`
- `eyebrow`
- `headline`
- `headlineAccentRanges`
- `bioShort`
- `aboutHeadline`
- `aboutSubheading`
- `aboutBodyLines`
- `primaryInstagramUrl`
- `youtubeUrl`
- `email`

### Stats

Fields:

- `label`
- `value`
- `sortOrder`
- `isActive`

### Navigation Item

Fields:

- `label`
- `href`
- `type` (`anchor`, `external`, `mailto`)
- `sortOrder`
- `isPrimaryCta`

### Service

Fields:

- `badge`
- `title`
- `description`
- `icon`
- `features[]`
- `ctaLabel`
- `ctaHref`
- `ctaType`
- `isFeatured`
- `sortOrder`

### Content Group

Fields:

- `title`
- `platform`
- `profileLabel`
- `profileUrl`
- `layout` (`verticalVideoGrid`, `textCardGrid`, `horizontalVideoGrid`)
- `sortOrder`

### Content Item

Fields:

- `groupId`
- `title`
- `description`
- `hashtags`
- `viewCountLabel`
- `url`
- `thumbnailUrl`
- `thumbnailAlt`
- `platform`
- `publishedDate`
- `sortOrder`
- `isActive`

### Testimonial

Fields:

- `resultBadge`
- `quote`
- `clientName`
- `clientInitials`
- `clientDetail`
- `rating`
- `sortOrder`
- `isActive`

### Booking Config

Fields:

- `headline`
- `description`
- `durationLabel`
- `priceLabel`
- `formatLabel`
- `expectations[]`
- `calendlyUrl`
- `fallbackLabel`
- `fallbackUrl`
- `embedTheme`

### Contact Method

Fields:

- `label`
- `description`
- `url`
- `type`
- `icon`
- `opensInNewTab`
- `sortOrder`

### SEO Settings

Fields:

- `title`
- `description`
- `canonicalUrl`
- `ogTitle`
- `ogDescription`
- `ogImage`
- `twitterCardType`
- `structuredDataJson`

## 9. Accessibility and SEO Requirements

### Current Accessibility Notes

Confirmed issues / risks:

- Mobile menu button has no accessible label.
- Footer icon-only links have no visible text and need accessible labels.
- Several decorative icons are inline SVGs and should be hidden from assistive tech if decorative.
- Parent page cannot fully control Calendly iframe accessibility.
- Hash navigation and focus management should be improved so keyboard/screen-reader users land in the selected section.

### Rebuild Accessibility Requirements

- Use semantic `header`, `nav`, `main`, `section`, and `footer`.
- Keep one H1 on the root page.
- Preserve H2/H3 hierarchy for sections and cards.
- Add `aria-label` to the mobile menu toggle.
- Add `aria-expanded` and `aria-controls` to the mobile menu toggle.
- Add accessible names for icon-only footer links.
- Add skip link to main content.
- Ensure all cards that are links have useful accessible names.
- Use `alt=""` for decorative images/icons and descriptive alt text for content images.
- Ensure focus styles are visible on all interactive elements.
- Move keyboard focus appropriately when mobile menu opens/closes.
- Prevent background tabbing when mobile menu is open if it behaves like an overlay.
- Respect `prefers-reduced-motion`.

### Current SEO Notes

Confirmed:

- Basic title, description, OG, Twitter, canonical, and JSON-LD are present.
- Structured data URLs currently reference `https://jaihden-social-hub.base44.app`, while the audited site is `https://jaihdentorres.base44.app`. This should be corrected in rebuild.

SEO requirements:

- Use a production domain canonical URL.
- Add person/creator or local business/person structured data if appropriate.
- Ensure all visible content is server-rendered or otherwise crawlable where possible.
- Add descriptive page title and meta description for root page.
- Add OG/Twitter image with correct dimensions.
- Avoid indexing the 404 page as normal content.

## 10. Responsive Behavior

### Desktop

Observed at 1280px width:

- Fixed horizontal nav with centered section links and right-aligned CTA.
- Hero fills viewport with text on left over full-bleed image.
- About uses two-column layout: copy left, feature cards right.
- Services uses three-column card grid.
- Content YouTube Shorts uses four-column vertical cards.
- Instagram and Pump University use three-column grids.
- Testimonials use three-column grid.
- Booking uses left details column and right Calendly iframe.
- Contact uses left copy column and right contact-card column.
- Footer aligns brand left, social icons center, copyright right.

### Tablet

Inferred:

- Layout should transition between desktop multi-column and mobile single-column.
- Services likely becomes fewer columns or stacked around the `md` breakpoint.
- Content grids likely reduce from four columns to two columns for shorts.
- Maintain readable card widths and avoid clipping long content titles.

### Mobile

Observed at 390px width:

- Desktop nav links and desktop CTA are hidden.
- Hamburger menu appears top right.
- Hero remains full-screen; text overlays the image and wraps into multiple lines.
- Hero stats appear in three columns near bottom.
- Sections are single-column and much taller.
- Services cards stack vertically.
- Content grids collapse; YouTube Shorts use two columns (`grid-cols-2`) and other groups stack or reduce columns.
- Testimonials stack into one column.
- Booking details stack above Calendly iframe.
- Contact content stacks above contact cards.

Mobile rebuild requirements:

- Keep top nav fixed and avoid covering section headings after anchor jumps.
- Ensure hero copy remains readable over the image.
- Ensure mobile menu links scroll correctly.
- Ensure Calendly iframe is usable on mobile without horizontal overflow.

## 11. Rebuild Scope

### Must-have for v1

- Root single-page layout with all current sections.
- Fixed responsive navigation and mobile menu.
- Exact current copy, links, stats, services, content cards, testimonials, booking details, contact cards, and footer.
- Current visual system: dark theme, blue accent, Space Grotesk/Inter typography, card styles, icons, hover treatments.
- Calendly embed with confirmed URL and fallback Instagram link.
- External links opening in new tabs with safe rel attributes.
- 404 screen for non-root paths.
- Basic SEO metadata and social sharing metadata.
- Accessibility fixes for labels, icon links, focus states, and semantic layout.

### Should-have

- CMS/admin editing for services, content links, testimonials, stats, booking URL, and contact methods.
- Correct structured data domain.
- Reliable smooth scrolling and focus management after anchor navigation.
- Loading/error fallback for Calendly iframe and thumbnails.
- Analytics abstraction that can support GA4, Meta Pixel, or server analytics if needed.
- Better mobile menu behavior and tested anchor offsets.

### Could-have

- Native lead/contact form for coaching and brand inquiries.
- Newsletter or SMS signup.
- Embedded social feeds instead of manually curated content cards.
- Content auto-sync from YouTube/Instagram APIs.
- Booking alternatives or direct payment integration.
- Case-study pages for client transformations.
- Media kit download for brands.

## 12. Developer Handoff

### Pages / Routes to Build

- `/` root landing page.
- Hash anchors:
  - `#about`
  - `#services`
  - `#content`
  - `#testimonials`
  - `#book`
  - `#contact`
- 404 route for all unmatched paths.

### Components to Build

- `SiteHeader`
- `MobileMenu`
- `HeroSection`
- `StatsStrip`
- `SectionEyebrow`
- `AboutSection`
- `FeatureCard`
- `ServicesSection`
- `ServiceCard`
- `ContentSection`
- `VideoCard`
- `SocialPostCard`
- `TestimonialsSection`
- `TestimonialCard`
- `RatingCtaStrip`
- `BookingSection`
- `BookingInfoCard`
- `CalendlyEmbed`
- `ContactSection`
- `ContactCard`
- `Footer`
- `NotFoundPage`

### Content / Data Needed From Client

- Confirm preferred production domain.
- Confirm logo/favicons and whether current Base44 media URLs should be retained.
- Confirm hero photo rights and whether the current image should be used.
- Confirm all social links.
- Confirm Calendly account/event URL and whether `$25 USD` fee remains accurate.
- Confirm testimonials are approved for public use.
- Confirm content cards and view counts should remain static or be updated.
- Confirm whether email should open in same tab or new tab.

### Integrations Needed

- Calendly inline embed.
- Google Fonts or self-hosted fonts.
- Optional analytics provider.
- Optional CMS/admin if implemented.
- External links to Instagram, YouTube, and mailto.

### Assets Needed

- JT logo PNG.
- Favicon / OG image.
- Hero photo.
- YouTube thumbnail URLs or downloaded thumbnail assets.
- Icon library such as Lucide.

### QA Test Cases

- Root page loads with correct title and metadata.
- Header is fixed and does not obscure content unexpectedly.
- Desktop nav links scroll to correct sections.
- Mobile hamburger opens and closes menu.
- Mobile menu links close overlay and scroll to correct sections.
- All CTAs route to correct internal/external destinations.
- All external links open in new tabs and use `noopener noreferrer`.
- Calendly iframe loads and displays the 30-minute paid meeting.
- Calendly failure state leaves fallback Instagram link usable.
- `mailto:` link opens email client.
- Content thumbnails render and preserve aspect ratios.
- Testimonials render in correct order.
- 404 page appears on `/about`, `/services`, `/content`, `/book`, `/contact`, and other invalid routes.
- `Go Home` returns user to `/`.
- Keyboard tab order is logical.
- Focus states are visible.
- Screen reader labels exist for menu toggle and icon-only links.
- Mobile layout has no horizontal overflow at 320px, 390px, and 430px widths.
- Tablet layout has no card overlap at 768px and 1024px widths.
- Desktop layout matches current section structure at 1280px and wider.

## Open Questions for Client

1. Should the rebuilt site keep the Base44-hosted media URLs or migrate assets into the new codebase/CMS?
2. What is the final production domain, and should structured data use that domain instead of the current Base44 URLs?
3. Should content cards and view counts be manually curated or synced from YouTube/Instagram?
4. Is `$25 USD` still the correct discovery-call fee?
5. Should `Book a Free Call` remain the hero label even though Calendly shows `$25 USD`?
6. Are all six testimonials approved and accurate?
7. Should the mobile menu preserve the current overlay style or be simplified during rebuild?
8. Should brand inquiries go to email, Instagram DM, a native form, or all three?
9. Should a CMS/admin dashboard be included in v1 or deferred?
10. Should the site add analytics such as GA4, Meta Pixel, TikTok Pixel, or continue with platform-only analytics?
