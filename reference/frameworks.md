# 🧠 Product Psychology & Growth Design Frameworks

This document contains the *source of truth* for all growth frameworks used by the **Growth Design Architect** skill. 

As an AI Audit assistant, your primary objective when reviewing UI and code is to maximize **Net Perceived Value (NPV)** for the user in every interaction.

> **NPV = Motivation - Friction**

---

## 1. The Psych Framework

**Psych (P)** is a unit of measurement for the cognitive fuel required for a user to complete a task or journey:

> **P = Motivation × Ability**

### 🟢 Maximize Psych Additions
Identify opportunities to add cognitive fuel:
- **Rewards**: Intrinsic or extrinsic value given to the user.
- **Progress Markers**: Visual indicators showing how close a user is to completion.
- **Delighters**: Micro-animations, celebratory copy, or unexpected positive interactions.
- **Tangible Value**: Emphasize *why* the action benefits the user right now.

### 🔴 Minimize Psych Subtractions
Identify friction that depletes cognitive fuel:
- **Redundant Fields**: Asking for information the system already has or doesn't strictly need.
- **Cognitive Load**: Complex layouts, unclear next steps, or visual clutter.
- **Jargon**: Internal terminology that the user doesn't use or understand.

### 🪄 The Labor Illusion
When the system is loading or processing data, it should *show the work* being done (e.g., "Optimizing your layout...", "Finding the best matches..."). This increases the perceived value of the output and reduces abandonment during wait times.

---

## 2. The B.I.A.S. Behavioral Audit

A four-step audit to check how users process information on the page.

### 🛑 Block
The human brain filters out noise. If it doesn't look relevant or trustworthy, the user blocks it out.
- **Audit Point**: Is the visual hierarchy standard? (Logo top-left, primary CTA top-right/center).
- **Audit Point**: Are there real human elements (faces, conversational copy) to build trust?

### 🧩 Interpret
Once past the block, users must understand the value immediately. Follow the **"Clarity over Cleverness"** rule.
- **Audit Point**: Do headlines state the value/outcome in the user's language within 3 seconds?

### ⚡ Act
Minimize options to avoid **decision fatigue** (Hick's Law).
- **Audit Point**: Is it completely obvious what the *one* primary action is?
- **Audit Point**: Are there **Smart Defaults** pre-selected to reduce user effort?

### 💾 Store
Optimize for the **Peak-End Rule** (people judge an experience largely based on how they felt at its peak and at its end).
- **Audit Point**: Does the end of the session or task feel like a meaningful victory? Is there a clear success state?

---

## 3. The C.L.E.A.R. Scorecard

A quantitative 1–5 scoring system for evaluating UI components.

### C — Copywriting
- Focuses on the **result** of the action, not the action itself.
- Uses **outcome-based, benefit-driven** language.

### L — Layout
- Primary actions must be **"visible from across the room."**
- Respects scanning patterns:
  - **F-pattern** for text-heavy content (blogs, docs).
  - **Z-pattern** for page-level layouts (landing pages, heroes).

### E — Emphasis
- Uses **color and visual weight** strategically to guide the eye.
- Avoids the **"Skittles Effect"** (too many competing bright colors on primary/secondary buttons).

### A — Accessibility
- Adheres to **WCAG standards** (minimum **4.5:1 color contrast**).
- Keyboard-navigable logic is assumed by default.
- Uses clear error states (not just relying on color borders).

### R — Reward
- Provides **immediate feedback** for every user effort (e.g., button active states, toast notifications).
- Uses subtle animations or "success states" to reinforce positive behaviors.

---

## 4. UI Rules of Thumb

Context-specific heuristics for different page archetypes.

### Landing Pages
- **Rule 1**: Must have *one* primary objective per page.
- **Rule 2**: Use real human faces or product screenshots/videos to build immediate credibility.
- **Rule 3**: Social proof (testimonials, logos) should be visible before the user scrolls deeply.

### Dashboards
- **Rule 1**: Place **"North Star" metrics** at the top.
- **Rule 2**: Eliminate **"chart junk"** (unnecessary grid lines, excessive borders, 3D effects). Let data breathe.
- **Rule 3**: Make anomalies or action-required items visually distinct.

### Onboarding Flows
- **Rule 1**: Prioritize **Time-to-Value (TTV)**.
- **Rule 2**: Get the user to their first **"Aha! moment"** ideally in under 2 minutes.
- **Rule 3**: Defer account creation until *after* the user receives initial value (if possible).

---

## 5. Psychological Triggers

Apply these cognitive biases to gently nudge user behavior.

### 🪑 The IKEA Effect
*Definition*: People attribute disproportionately high value to products they partially created.
- **Application**: Allow users to customize settings, build a profile, or "touch" the output early to increase their sense of ownership before asking for commitment.

### ⏳ The Zeigarnik Effect
*Definition*: People remember uncompleted or interrupted tasks better than completed tasks.
- **Application**: Use **progress bars**, checklists, or "Session Paused" states to create a psychological itch to finish the onboarding or task.

### 📉 Loss Aversion
*Definition*: The pain of losing is psychologically roughly twice as powerful as the pleasure of gaining.
- **Application**: Frame pricing, trials, or commitments as an *investment in growth* or highlight what they lose by not acting (e.g., "Don't lose your progress", "Save 20% by acting now").
