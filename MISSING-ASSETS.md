# Missing & Problem Assets — Jaihden Torres Website v1

Generated from the v1 design/copy audit. This lists every image asset the site needs
before launch, what's wrong with the current one, and an exact spec so you can either
**provide** a real photo or **generate** one.

All image paths live in [`src/data/site.ts`](src/data/site.ts) under `media` and
`featuredContent`. Today **every image is hot-linked** to YouTube/Shopify CDNs — there
are no local image files. Recommendation: download/produce finals into
`public/images/` and reference them locally (e.g. `/images/hero.jpg`) for reliability,
control, and performance.

---

## TL;DR — what's actually broken

- **One YouTube thumbnail is used 4 times** (hero background, story image, and content
  cards 1 & 2). It also has the video's own title text ("ATHLETE / FITNESS" in green)
  baked into the photo.
- The two **UofPump product photos** (Shopify) are fine and can stay.
- The **favicon** is already a custom JT mark — keep it.
- **Proof section** needs real testimonial content (text + photos), not images per se.

---

## Asset checklist

| # | Asset | Used where | Current source | Status | Action |
|---|-------|-----------|----------------|--------|--------|
| 1 | Hero background | Hero section bg | YouTube thumb `KDCu5OTG0QE/maxresdefault.jpg` | ❌ Reused + baked-in text | Provide/Generate |
| 2 | Story image | "Coach fit" story section | Same YouTube thumb | ❌ Reused + baked-in text | Provide/Generate |
| 3 | Content card 1 — "Beer Tastes Better With Abs" | Content grid | Same YouTube thumb | ❌ Reused | Provide/Generate |
| 4 | Content card 2 — "Jaihden on Instagram" | Content grid | Same YouTube thumb (`media.hero`) | ❌ Duplicate of #1 | Provide/Generate |
| 5 | Content card 3 — "Shop UofPump" | Content grid | Shopify `DSC03184…jpg` | ✅ OK | Keep (optional swap) |
| 6 | UofPump section image | UofPump section | Shopify `DSC03071…jpg` | ✅ OK | Keep |
| 7 | Proof assets (×3) | Proof section | None (placeholder cards) | ❌ Missing content | Provide |
| 8 | Open Graph / social share image | `<head>` og:image, twitter:image | Falls back to `media.hero` | ⚠️ Inherits hero problem | Provide/Generate |
| 9 | Favicon | Browser tab | `public/favicon.svg` (JT mark) | ✅ OK | Keep |

---

## Detailed specs

### 1. Hero background  → `media.hero`
- **Job:** full-bleed backdrop behind the H1 "Real results without giving up your social life."
- **Reference:** [`site.ts:21`](src/data/site.ts:21), rendered at [`index.astro:31`](src/pages/index.astro:31).
- **Layout facts:** `min-height: 100svh`, `object-fit: cover`. A dark gradient overlays
  the **left ~50%** (where the text sits) and the bottom. So the subject can live in the
  **center/right** and the left third should be visually quieter.
- **Spec:** landscape, **2400×1600 (3:2) or larger**, JPG or WebP, < ~500 KB ideal.
  High contrast, **no text baked into the image**, works when darkened.
- **Content:** Jaihden — confident, lifestyle/gym, on-brand with Instagram + UofPump.
- **Provide or generate:** Best as a **real photo of Jaihden**. If generating a
  placeholder, avoid any embedded words/logos.

### 2. Story image  → `media.story`
- **Job:** portrait image for the "Built from the same tension…" story block; links to the
  YouTube video.
- **Reference:** [`site.ts:22`](src/data/site.ts:22), rendered at [`index.astro:136`](src/pages/index.astro:136).
- **Layout facts:** `aspect-ratio: 4 / 5` (portrait), `object-fit: cover`, has a "Watch" badge overlaid bottom-right.
- **Spec:** **1080×1350 (4:5)**, JPG/WebP. Should read as a clean video still or custom
  thumbnail — **no auto-generated title text**.
- **Provide or generate:** Ideally a **clean custom thumbnail / still** from the
  "Beer Tastes Better With Abs" video.

### 3 & 4. Content cards 1 and 2  → `featuredContent[].image`
- **Job:** two tappable cards: "Beer Tastes Better With Abs" (→ YouTube) and
  "Jaihden on Instagram" (→ IG). They currently use the **same** thumbnail.
- **Reference:** [`site.ts:131`](src/data/site.ts:131) and [`site.ts:137`](src/data/site.ts:137), rendered at [`index.astro:202`](src/pages/index.astro:202).
- **Layout facts:** 3-up grid, card `min-height: 360px`, image fills the card via `object-fit: cover` with a dark bottom gradient (text sits on top).
- **Spec:** **1080×1350 (4:5) portrait** each, JPG/WebP. Must be **two visually distinct
  images** — they sit side by side.
  - Card 1: a video still / thumbnail.
  - Card 2: a lifestyle / Instagram-style shot of Jaihden.
- **Provide or generate:** Provide real photos; both must differ from the hero and each other.

### 5 & 6. UofPump images  → `media.uofpumpHero`, `media.uofpumpAlt`
- **Status:** ✅ Real Shopify product photography. Keep as-is. Optional: download locally
  so the site doesn't depend on Shopify's CDN staying stable.

### 7. Proof section assets (×3)
- **Job:** real social proof. Cards currently show developer placeholders
  ("Approved testimonial needed", etc.) that are visible to live visitors.
- **Reference:** `proofPlaceholders` in [`site.ts:105`](src/data/site.ts:105), rendered at [`index.astro:163`](src/pages/index.astro:163).
- **What's needed (per card):** a **client-approved quote**, the client's first
  name/initials, and optionally a **before/after or progress photo** (~1080×1350, 4:5).
- **Important:** do not fabricate. Until at least one real testimonial exists, the
  recommendation is to **hide this section** rather than ship placeholders.
- **Provide or generate:** **Provide only** — this is real client content, not generatable.

### 8. Open Graph / social share image
- **Job:** the preview image when the site is shared (iMessage, IG DM, X, etc.).
- **Reference:** [`BaseLayout.astro:29,33`](src/layouts/BaseLayout.astro:29) — currently
  reuses `media.hero`, so it inherits the baked-in-text problem.
- **Spec:** dedicated **1200×630 (1.91:1)**, JPG/PNG. Name + simple value line is fine here
  (this is the one place text-on-image is appropriate).
- **Provide or generate:** Either; can be composed from the new hero photo + wordmark.

---

## Suggested file layout (once assets exist)

```
public/images/
  hero.jpg              # asset 1
  story.jpg             # asset 2 (4:5)
  content-video.jpg     # asset 3 (4:5)
  content-instagram.jpg # asset 4 (4:5)
  uofpump-hero.jpg      # asset 6 (optional local copy)
  uofpump-shop.jpg      # asset 5 (optional local copy)
  proof-1.jpg ...       # asset 7, as approved
  og.jpg                # asset 8 (1200×630)
```

Then point `media` / `featuredContent` in [`src/data/site.ts`](src/data/site.ts) at the
local paths. I can wire all of that up once you drop the files in.
