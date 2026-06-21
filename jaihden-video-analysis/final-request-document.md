# Jaihden Video Request Document

Generated: 2026-06-21

## Source Material

Videos provided in `New Videos 06212026/`:

- `RPReplay_Final1782068578.MOV` - Pump University mobile shop reference, 1:54.
- `RPReplay_Final1782068966.MOV` - OBHealth fit-check funnel reference, 2:24.
- `RPReplay_Final1782069061.MOV` - Legally Jacked Coaching funnel reference, 1:07.

Processed outputs:

- Gemini skill briefs: `jaihden-video-analysis/gemini/`
- Contact sheets: `jaihden-video-analysis/frames/`
- Extracted keyframes: `jaihden-video-analysis/keyframes/`

The videos were processed with the `website-feedback-video` skill using Gemini after explicit approval.

## Executive Summary

Jaihden is asking for the current site to become a compact, mobile-first coaching and personal-brand funnel that borrows from three reference experiences:

- Pump University: editorial, minimalist, full-screen image carousel with strong brand copy.
- OBHealth: direct "Who this is for / who it is not" qualification section with sticky booking CTA.
- Legally Jacked Coaching: fast conversion page with an interactive hero questionnaire, "What do you get?" slider, app-style coaching mockups, concise mission/about section, and social links.

The site should not become a long portfolio page. It should feel quick, direct, premium, and conversion-focused.

## Main Requested Structure

### 1. Hero Carousel

Build a mobile-first hero carousel inspired by Pump University.

Jaihden wants roughly four slides:

1. Goal discovery slide
   - Strong profile/flexing photo of Jaihden.
   - Inline questionnaire over the image.
   - 3-4 initial options for visitor goals.
   - Reference options include `Weight loss`, `Build muscle`, and `Healthy lifestyle`.

2. Social proof / experience slide
   - Before-and-after transformation visuals.
   - Copy around `7+ years of experience`.
   - Should lead naturally into testimonials.

3. Pump University / CEO slide
   - Position Pump University as a real brand pillar.
   - Introduce Jaihden as CEO/founder.
   - Copy direction: building a culture of young, ambitious people.

4. Entertainment / YouTube slide
   - Promote the entertainment side of Jaihden.
   - Add a YouTube-forward card or CTA.
   - This should show personality without distracting from coaching conversion.

Design direction:

- Minimal, editorial, image-led.
- Full-screen mobile feel.
- Strong overlaid text and clean CTAs.
- Avoid clutter and excessive scroll depth.

### 2. Interactive Coaching Questionnaire

Borrow the Legally Jacked hero pattern: a visual hero with a card asking how the coach can help.

Initial options Jaihden specifically wants to borrow:

- `Weight loss`
- `Build muscle`
- `Healthy lifestyle`

Expected behavior:

- The questionnaire should appear at or near the top of the site.
- It should feel interactive, not like a static form.
- Include a visible progress indicator if it becomes multi-step.
- The final destination is still ambiguous: it could collect lead data, route into a Tally/Calendly flow, or scroll to booking.

### 3. "Who This Is For. Who It Isn't."

Adapt the OBHealth qualification section for Jaihden's niche.

Section heading:

```text
Who this is for. Who it isn't.
```

Positive fit direction:

- 25+ high-performing professionals, business owners, breadwinners, or socialites.
- People who work hard and play hard.
- People in nightlife-heavy cities or social scenes, such as Miami, New York, Las Vegas, or similar.
- People who want energy, confidence, and physique while still socializing, networking, drinking, and enjoying weekends.
- People tired of restrictive diets and generic coaching that do not account for real lifestyle.
- People who want smart nutrition, bio-optimization, and data-driven methods rather than another rigid meal plan.
- People with budget for premium 1-on-1 coaching.

Negative fit direction:

- People looking for a cheap app subscription.
- People looking for a quick 12-week "shred and out" fix.
- People who want extreme hand-holding.
- People who expect the coach to cook meals or watch every rep in person.
- People who spend heavily on nightlife but claim they cannot invest in serious coaching.
- People unwilling to put in effort or take ownership.

Production copy should polish the slang. The video analysis notes that Jaihden uses raw language like "dialed de-gens" and nightlife/drinking references. Keep the sentiment, but present it as premium and professional.

### 4. What You Get Slider

Borrow the Legally Jacked `What do you get?` carousel/slider.

Required slide structure:

1. `Workout plans made for you`
2. `Your own meal plan`
3. `We track your progress together`
4. `Continuous communication`

Implementation expectations:

- Mobile-first slider.
- `1/4` style progress indicator.
- Left/right arrow controls.
- Clear CTA below or inside the section.
- Can use app-style mockups if real app screenshots are unavailable.

### 5. Bio-Optimization Tools

Add a dedicated card/link/section for bio-optimization resources.

Strict copy rule:

- Use `Bio-optimization tools`.
- Do not use `peptides` anywhere in public-facing copy, metadata, or source content intended for the site.

This instruction is compliance-sensitive and should be treated as a hard rule.

### 6. Testimonials And Proof

Jaihden wants testimonials close to the top, likely directly below the hero/social-proof slide.

Expected treatment:

- Minimal quote carousel or compact testimonial list.
- Use real testimonials only.
- Do not invent client names, quotes, or transformation claims.
- If before/after photos are used, permission status needs confirmation.

### 7. Mission / About Section

Add a concise mission and personal background section, inspired by Legally Jacked.

Content direction:

- Keep it short.
- Do not turn the page into a long autobiography.
- Include why Jaihden coaches this audience.
- Connect his story to the client transformation: fitness, social life, confidence, ambition, and standards.

Possible heading/copy direction from the reference:

```text
Become the best version of yourself.
```

### 8. Social Links

Add or preserve social links with emphasis on:

- Instagram
- TikTok
- YouTube

Gemini specifically called out that Jaihden wants YouTube added alongside the usual social icons.

### 9. Sticky CTA

Borrow the reference pattern of a sticky bottom mobile CTA.

Potential labels:

- `Book a Call`
- `Start Now`
- `Book my fit-check call`
- `Apply for Coaching`

The final label should match the chosen funnel. Current strongest direction from the videos is a direct booking/application CTA that routes back to the hero questionnaire or Calendly/application flow.

## Visual Direction

Jaihden is not asking for a generic landing page. The references imply:

- Mobile-first, not desktop-first.
- High-impact photography and video.
- Full-bleed visual sections.
- Short sections with strong CTAs.
- Minimal navigation.
- Carousels/sliders where they reduce page length.
- Dark/premium coaching sections can coexist with bright Pump University brand visuals.
- Avoid long scroll, dense paragraphs, and over-explaining.

## Implementation Priorities

Recommended build order:

1. Hero carousel with questionnaire slide.
2. Sticky mobile CTA.
3. `Who this is for / who it isn't` qualification section.
4. `What do you get?` four-slide benefits carousel.
5. Testimonials/proof block.
6. Bio-optimization tools card with safe language.
7. Mission/about section.
8. Social links, including YouTube.

## Open Questions

- What exact assets should be used for the flexing profile photo, transformation photos, and Pump University CEO slide?
- Should the questionnaire submit on-site, route to Tally, or route directly to Calendly?
- What final CTA label should be used: `Book a Call`, `Start Now`, `Apply for Coaching`, or `Book my fit-check call`?
- Are the `7+ years of experience` claim and any transformation claims approved for public use?
- Which testimonials are approved and can be quoted?
- Should the public audience be 25+ professionals/socialites, college men, or both?
- What exact YouTube URL should be linked?
- Should TikTok be included publicly alongside Instagram and YouTube?

## Cautions

- Do not publish the word `peptides`.
- Do not publish unverified pricing, guarantees, refund claims, or medical-adjacent claims.
- Keep raw nightlife language polished. The brand can be social and direct without sounding reckless.
- Do not copy competitor/reference site text verbatim. Use the structure and intent, then write original Jaihden-specific copy.
