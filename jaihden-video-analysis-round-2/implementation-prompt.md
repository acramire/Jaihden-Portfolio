# Agent Prompt: Jaihden Round 2 Feedback

You are implementing the second round of Jaihden Torres website feedback.

Context:
- First-round implementation is already committed and pushed as `d9f2176 Rebuild homepage as mobile-first coaching funnel`.
- Source video: `New Videos 06212026/RPReplay_Final1782079485.MP4`
- Debrief site: `jaihden-video-analysis-round-2/index.html`
- Raw Gemini implementation pass: `jaihden-video-analysis-round-2/gemini/RPReplay_Final1782079485.json`
- Transcript alignment pass: `jaihden-video-analysis-round-2/transcripts/RPReplay_Final1782079485-transcript-review.md`

Implement only the second-round deltas below. Preserve the first-round mobile funnel structure unless a specific item below says to change it.

## Required Changes

1. Hero questionnaire overlay
- Make the questionnaire/card overlays more transparent so Jaihden's face and physique remain visible behind the card.
- Keep text readable with a gradient, blur, text shadow, or overlay treatment if needed.

2. Questionnaire copy
- Change `Weight loss` to `Fat loss`.
- Use this description: `Lean down and stay lean enjoying your favorite foods year round.`
- Keep `Build muscle`, but update the description to: `Add quality tissue and reshape your aesthetics around your week.`
- Change `Healthy lifestyle` to `Balanced lifestyle`.
- Use this description: `Energy, sleep, and routine optimizations built around your benders.`

3. Transformations / coaching proof
- Reposition or replace transformation imagery so Jaihden's head and physique are not hidden by the crop.
- Add copy that communicates clients do not need trial and error.
- Include this idea: `There is no second-guessing with me as your coach.`

4. Pump University hero copy
- Change `building a culture of young, ambitious people` to `building a culture of ambitious people`.
- Do not narrow this to only young clients. The target audience is 25+ professionals.

5. More Than a Coach / YouTube visual
- Improve the YouTube/background thumbnail so it feels higher quality and more professional.

6. The Fit section
- Update the ideal-client copy to explicitly say `25+ years old`.
- Prefer `business owners` and `professionals` over `socialite`.
- Add or integrate this positioning: `Fitness first, partying second.`
- Remove raw `degen` branding. Jaihden explicitly rejected attracting unreliable party-goers.
- Change `cheapest app subscription` to `cheapest fitness app subscription`.
- Add or modify a negative-fit bullet explaining this is a long-term commitment, not an overnight fix, and that the program is a 360-degree lifestyle transformation using a correct fitness-based approach.
- Keep the humorous line about not expecting the coach to cook every meal or watch every rep.

7. Premium 1-on-1 coaching carousel
- Workout Plans: add an icon or premium workout app mockup visual.
- Meal Plans: emphasize flexible customization around height, weight, macros, and blood work.
- Tracking: add `24-hour access to me, zero second-guessing`.
- Replace or retitle the communication card as `Bio-optimization tools & blood work`.
- Include the idea that blood work helps identify hormone and vitamin deficiencies and informs custom genetic or bio-optimization recommendations.

8. Bio-Optimization section
- Replace the pink-shirt placeholder/model image with an image of Jaihden.
- Add an external resource/link area for recommended bio-optimization tools.
- Show discount code `FRATLETE`.
- If the exact destination URL is unknown, use a clearly named config constant or placeholder href that can be swapped later.

9. Pump University brand pillar
- Do not reuse the same Jaihden photo here.
- Replace it with high-aesthetic photos of other Pump University athletes training or representing the brand.

10. Footer and final CTA
- Add Snapchat to the social links alongside Instagram, TikTok, and YouTube.
- Indicate Snapchat is for daily updates if there is supporting caption space.
- Add this closing hook near the final apply CTA: `It's now or never. How long are you going to keep telling yourself you're going to change when you don't?`

## Cautions

- Do not reintroduce `degen` as a positive audience label. The new positioning is high-performing, fitness-first professionals who still value a balanced social life.
- Be careful making overlays transparent. The background should become more visible without making questionnaire text illegible.
- The blood work flow is not fully specified. Avoid claiming Jaihden orders labs unless the current code/content already supports that. Safer wording: review blood work, use lab insights, or tailor recommendations around available markers.
- The `FRATLETE` link destination was not provided in the video. Treat the URL as a content/config follow-up unless it already exists in the codebase.

## Verification

- Test mobile viewport first. The feedback video is a mobile review.
- Confirm hero cards, fit checklists, carousel cards, social footer, and final CTA all reflect the new copy.
- Confirm image crops preserve faces/physiques and do not hide the subject under dark cards.
- Confirm no visible raw `degen` positioning remains.
