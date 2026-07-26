# Jaihden Portfolio Launch Todo

Based on the latest Round 3 feedback recording (`RPReplay_Final1782083472.MOV`) and a comparison against the current site code.

## Priority 0 — Finish before launch

- [ ] Make the mobile questionnaire card reveal more of Jaihden's physique.
  - Reduce or remove the current `34px` backdrop blur on mobile.
  - Keep the card compact and transparent while preserving text contrast.
  - Recheck the first question and confirmation state on a real phone-sized viewport.
- [ ] Validate the transformation/proof crop on mobile.
  - Confirm Jaihden's head and full physique remain visible on the second hero slide.
  - Prefer a better crop or `object-fit` treatment if the current `object-position` adjustment still cuts him off.
- [ ] Replace the placeholder external links with the supplied destinations.
  - Bio-optimization / Peak Peptides: `https://peak.you/`
  - Instagram: `https://www.instagram.com/jaihdentorres?utm_source=qr`
  - YouTube: `https://youtube.com/@jaihdentorres?si=aKdaCWpzUHzW4N-N`
  - Snapchat: `https://www.snapchat.com/add/not.ja1?share_id=nt4fi8_gTcifHZptS5mweg&locale=en_US`
  - TikTok: `https://www.tiktok.com/@tjaihden?_r=1&_t=ZP-98LBWNH0xpe`
- [ ] Consolidate the two “Get to know me” buttons into one CTA.
  - Recommended label: `Watch “Beer Tastes Better With Abs” on YouTube`.
  - Link directly to the featured YouTube video.
- [ ] Finish the Pump University section cleanup.
  - Change “The brand side…” to “The business side…”.
  - Remove the `Visit Pump University` button.
  - Keep `Shop Trademark Collection` as the primary action.
- [ ] Add approved testimonial copy and final client details.
  - Current transformation images are present, but names/details/quotes still need client approval.
  - Do not invent quotes or results.

## Priority 1 — Visual QA and polish

- [ ] Confirm the upgraded “More than a coach” YouTube thumbnail is sharp on mobile and retina displays.
- [ ] Confirm the upgraded bio-optimization physique image is sharp and framed correctly.
- [ ] Test every hero slide at common mobile widths: 320, 375, 390, and 430px.
- [ ] Test the desktop-specific hero image at 1024, 1440, and 1920px.
- [ ] Check questionnaire focus states, back navigation, and the Tally handoff with each goal.
- [ ] Check all external links open the intended destination and add safe new-tab behavior where appropriate.
- [ ] Review bio-optimization wording for conservative, non-medical claims before launch.

## Completed from earlier feedback

- [x] Added separate mobile and desktop questionnaire hero assets.
- [x] Reduced and moved the mobile “Become the best version of yourself” heading.
- [x] Added responsive `<picture>` support for desktop hero sources.
- [x] Added 25+ professional/business-owner qualification language.
- [x] Replaced “Weight loss” with “Fat loss” and updated questionnaire descriptions.
- [x] Removed positive `degen` positioning and clarified “Fitness first, partying second.”
- [x] Added premium coaching details for meal plans, tracking access, and blood-work review.
- [x] Added client transformation image entries and preserved the no-fabricated-testimonials rule.
- [x] Added Snapchat to the social rail.
- [x] Added the final “It’s now or never” application hook.
- [x] Added a higher-quality YouTube thumbnail asset.
- [x] Added the reusable AssemblyAI transcription command and Codex skill workflow.

## Repository cleanup

- [x] Remove the duplicate root-level copies of the two latest feedback videos.
- [ ] Decide whether to keep or delete the unused generated `after-physique-strong-desktop-wide.png`.
- [ ] Decide whether raw photos, source videos, processed videos, keyframes, and Gemini analysis artifacts belong in Git or external storage.
- [ ] Resolve the three previously tracked source-video deletions before the next media commit.
