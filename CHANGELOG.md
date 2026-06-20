# Changelog

## 2026-06-20 — Pre-launch fixes (audit follow-up)

Implemented the no-asset **must-fix** items from the v1 design/copy audit. These were
applied directly to the front end and verified against the running dev server. Items that
require new image assets are tracked separately in [`MISSING-ASSETS.md`](MISSING-ASSETS.md).

### 1. Removed leaked internal/meta copy
Developer-facing scaffolding text was rendering as live, public body copy.

- **Deliverables intro** — replaced *"This section is intentionally specific without
  publishing unconfirmed pricing, medical-adjacent claims, or support promises"* with
  customer-facing copy about training/travel/recovery/weekends.
  ([`src/pages/index.astro`](src/pages/index.astro))
- **Apply panel** — replaced *"The v1 flow is built for a Tally application first, then
  Calendly…"* with *"Start with a few questions about your goals and schedule. If it's a
  fit, you'll book a 30-minute call…"* ([`src/pages/index.astro`](src/pages/index.astro))

### 2. Gated the Proof section
The Proof section was shipping placeholder cards ("Approved testimonial needed", "Do not
invent results or names") to live visitors.

- Replaced the `proofPlaceholders` data with a typed, **empty** `proof` array intended for
  real, client-approved testimonials only. ([`src/data/site.ts`](src/data/site.ts))
- The Proof `<section>` now renders **only when `proof.length > 0`**, and the "Proof" nav
  link is filtered out until then (`visibleNav`). Both reappear automatically once real
  entries are added — no markup changes needed. ([`src/pages/index.astro`](src/pages/index.astro))
- Added testimonial-appropriate styles (`.proof-quote`, `.proof-card img`) for when the
  section is populated. ([`src/styles/global.css`](src/styles/global.css))

### 3. Added an accessible mobile navigation
At ≤980px the primary nav was hidden with no replacement — links were unreachable on phones.

- Added a hamburger toggle button with `aria-expanded` / `aria-controls` and a label that
  flips between "Open/Close navigation menu". ([`src/pages/index.astro`](src/pages/index.astro))
- At ≤980px the nav now renders as a full-width dropdown panel (hidden until opened);
  the toggle appears only at that breakpoint. Nav links have ≥48px tap targets.
  ([`src/styles/global.css`](src/styles/global.css))
- Vanilla JS toggle (no framework): opens/closes on tap, closes on link click and on
  Escape. ([`src/pages/index.astro`](src/pages/index.astro) `<script>`)
- The "Apply" CTA stays visible at all widths, so the primary action is always reachable.

### Bonus: reduced-motion support
Added a `prefers-reduced-motion: reduce` guard that disables smooth scroll and trims
transitions/animations — part of the accessibility quality floor. ([`src/styles/global.css`](src/styles/global.css))

### Verification
- Dev server compiled all changes with **no console errors** on load.
- Functional check (via page JS): hamburger toggle flips `data-open`/`aria-expanded`
  correctly and closes on link/Escape; the ≤980px media-query rules are present in the
  CSSOM; the Proof nav link and Proof section are absent while `proof` is empty.
- Visual check (desktop): nav reads "Coaching · Pump University · Content · Apply"; deliverables
  and apply copy are customer-facing; Story flows directly into Pump University (no Proof gap).

---

## 2026-06-20 — Design polish (audit should-fixes)

Second pass: the no-asset **should-fix** design items from the audit.

### 4. Typography — replaced Inter
Inter (a generic default) was swapped for a deliberate pairing that tells the dual-brand
story: a loud athletic display + a clean professional body.

- **Display: Anton** — used for `h1`, `h2`, and the hero stat numbers; poster energy for
  the Pump University/streetwear side. Set at weight 400 (Anton's natural weight) to avoid
  faux-bold. ([`src/styles/global.css`](src/styles/global.css), `--display` token)
- **Body/UI: Archivo** — everything else; a professional grotesque for the coaching side.
- Fonts loaded via Google Fonts with `preconnect` + `display=swap`.
  ([`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro))

### 5. Method pillars — dropped decorative numbering, reflowed grid
The `01–05` markers implied a sequence, but the five pillars are *parallel*, not ordered.

- Removed the numerals from the method cards (the problem/"cycle" section keeps `01→02→03`
  because that *is* a real sequence). ([`src/pages/index.astro`](src/pages/index.astro))
- Replaced the cramped 5-across grid with **3 columns** (3 + 2), stepping to **2** at
  ≤980px and **1** at ≤640px — titles no longer wrap awkwardly.
  ([`src/styles/global.css`](src/styles/global.css))
- Added a red top-edge accent to each pillar card so it keeps a branded marker without
  implying order.

### 6. Hero CTA — demoted the third button
"Watch the Story" was a third ghost button competing with the two real CTAs.

- Removed the `.button-ghost` and turned it into a quiet "Watch the story" play-link
  (circular ▶ affordance) beneath the Apply / Shop buttons.
  ([`src/pages/index.astro`](src/pages/index.astro), [`src/styles/global.css`](src/styles/global.css))

### 7. Navbar redesign
The header read as placeholder-y and unbalanced.

- Replaced the boxed "JT" monogram with a **Jaihden Torres** wordmark.
  ([`src/pages/index.astro`](src/pages/index.astro), [`src/styles/global.css`](src/styles/global.css))
- Removed the duplicate "Apply" (it was both a nav link and the CTA button) by also
  filtering `#apply` out of the text nav. ([`src/pages/index.astro`](src/pages/index.astro))
- Refined the nav links: uppercase, letter-spaced, lighter weight, dim → white on hover
  with an animated red underline; grouped beside the CTA.
  ([`src/styles/global.css`](src/styles/global.css))
- Toned down the chunky CTA (weight 900 → 700, uppercase/tracked, hover state).
- Mobile: hamburger pushed right, dropdown margins reset, wordmark scaled down.

### Verification (design pass)
- `document.fonts.check` confirms **Anton and Archivo loaded**; `h1` computes to Anton,
  body to Archivo. No console errors.
- Pillar grid columns read from the CSSOM: `3 → 2 (≤980) → 1 (≤640)`.
- Pillar cards have no number span; the problem/cycle cards still do. Ghost button gone;
  hero play-link present.

---

## Still open (not done here)

**Blocked on assets** — see [`MISSING-ASSETS.md`](MISSING-ASSETS.md):
- One YouTube thumbnail reused 4× (hero, story, content cards 1 & 2) with baked-in text.
- Dedicated Open Graph / social share image.
- Real Proof content (quotes + photos) to populate the now-gated section.

The no-asset should-fix design items are now complete (see the Design polish pass above).
