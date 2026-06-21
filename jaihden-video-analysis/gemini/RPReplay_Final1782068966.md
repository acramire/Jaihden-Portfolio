You are a coding agent implementing website/app feedback from a screen recording.

Source video: /Users/alejandroramirez/Desktop/projects/JAI portfolio website/New Videos 06212026/RPReplay_Final1782068966__feedback_prepped.mp4
Video analysis model: gemini-3.5-flash

Use the analysis below as the user's implementation request. First inspect the target codebase, then make the smallest coherent code changes that satisfy the user's feedback. Preserve uncertainty from the analysis; if a requested behavior is ambiguous, state the assumption before implementing or ask for clarification when necessary.

Video-derived implementation brief:

### Summary

Jaihden likes the **"Who this is for. Who it isn't"** qualifying section from the reference website (`OBHealth`) and wants to adapt this framework for his own coaching brand. He wants to borrow this specific two-part layout to define his Ideal Customer Profile (ICP)—specifically targeting "dialed-in party animals" or high-functioning, high-earning professionals who want to balance an active social/nightlife lifestyle with peak physical performance.

---

### Observed UI/Workflow

*   **Reference Page Section:** A two-part qualifying questionnaire/list on a dark-themed mobile landing page.
    *   **Header:** "Who this is for. Who it isn't."
    *   **Positive List:** "This is for you if:" featuring blue checkmark bullet points.
    *   **Negative List:** "It isn't for you if:" featuring grey 'X' bullet points.
    *   **CTAs:** A sticky footer banner with "Ready to start? ->" and a primary button labeled "Book my fit-check call" (or similar scheduling action).

---

### User Intent and Requested Changes

Jaihden wants to adapt this section to his specific niche ("dialed de-gens" / high-performing socialites). Below is the mapped copy he wants implemented:

#### 1. "This is for you if:" (Positive ICP)
*   **Target Age/Demographic:** You are a 25+ high-functioning breadwinner, professional, or socialite (typically living in major nightlife hubs like Miami, New York, or Las Vegas).
*   **The Problem:** You are tired of cookie-cutter diets or restrictive coaching programs that don't feel truly 1-on-1 and expect you to completely sacrifice your social life.
*   **The Desire:** You want to feel like you're in your prime again (your "college self")—having the energy to socialize, drink/network 3 times a week, and still crush the gym to be fully optimized by Monday morning.
*   **The Aesthetic Goal:** You want to look phenomenal, feel confident, and attract your dream partner.
*   **The Approach:** You want to leverage bio-optimization tools and data-driven methods (rather than just being handed a generic meal plan) so food and alcohol don't hold you back from enjoying your weekends.

#### 2. "It isn't for you if:" (Negative ICP Filter)
*   **Effort Level:** You are looking for a quick 12-week "shred and out" fix, are unwilling to put in real effort, or constantly make excuses.
*   **Hand-holding:** You expect extreme hand-holding (e.g., expecting a coach to cook your meals or stand next to you at the gym watching every single rep).
*   **Budget Alignment:** Your budget is limited to cheap, automated app subscriptions, yet you easily spend thousands on weekends (bars, buying drinks, recreational partying, festival tickets).
*   **Lifestyle Priority:** Fitness is not a core pillar of your identity. (Jaihden wants "dialed-in" clients who believe a six-pack actively enhances their lifestyle and partying experience).

---

### Implementation Guidance

#### Component Architecture
*   Create a clean, dark-themed responsive layout (matching the slate-blue/dark background of the portfolio/coaching theme).
*   Build a **Qualification Checklist Component** split into two distinct card containers:
    *   **Card A ("This is for you if"):** Styled with positive accents (e.g., green or neon blue checkmarks).
    *   **Card B ("It isn't for you if"):** Styled with negative accents (e.g., muted red or grey 'X' marks).

#### Draft Copy to Insert in the Codebase:

```html
<!-- Container styling should use CSS Grid or Flex-col on mobile, Flex-row on desktop -->
<div class="qualification-section">
  <h2>Who this is for. Who it isn't.</h2>
  
  <div class="qualification-grid">
    <!-- Card 1: Positive Fit -->
    <div class="fit-card positive">
      <h3>This is for you if:</h3>
      <ul>
        <li>You are a 25+ high-performing professional or business owner who loves to work hard and play hard.</li>
        <li>You want to feel like you're in your absolute prime—having the stamina to socialize and network on weekends, yet stay completely optimized to crush the gym and office by Monday morning.</li>
        <li>You've tried restrictive, unrealistic diets before and are sick of programs that force you to sacrifice your lifestyle, relationships, and social life.</li>
        <li>You want to learn how to master bio-optimization and smart nutrition, rather than just being handed another generic, strict meal plan.</li>
        <li>You have the budget for premium, serious 1-on-1 coaching.</li>
      </ul>
    </div>

    <!-- Card 2: Negative Fit -->
    <div class="fit-card negative">
      <h3>It isn't for you if:</h3>
      <ul>
        <li>You are looking for a cheap, automated workout app or a quick 12-week "shred and out" fix.</li>
        <li>You want extreme hand-holding and expect a coach to cook your meals or count every single rep for you.</li>
        <li>Your budget is limited to cheap subscriptions, even though you easily spend thousands of dollars on tables, drinks, festivals, and weekend nightlife.</li>
        <li>You are unwilling to put in the actual effort and prefer to make excuses instead of taking ownership.</li>
      </ul>
    </div>
  </div>
</div>
```

---

### Ambiguities and Cautions

*   **Tone Dialing:** Jaihden uses casual/slang terminology in the recording (e.g., "dialed de-gens", "drinks for girls", "recreational drugs"). While this defines his targeting strategy, the actual copy pushed to production should be polished to remain highly professional, premium, and clean, while still retaining the "work hard, play hard" sentiment. 
*   **Mobile Call to Action:** The reference site features a prominent sticky bottom call-to-action button ("Book my fit-check call"). Ensure this CTA aligns with the portfolio's existing booking flow (e.g., Calendly link or questionnaire form).

