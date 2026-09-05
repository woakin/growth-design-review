---
name: growth-design-review
description: Review UI designs and frontend code against Product Psychology, Behavioral Economics, and Growth Design frameworks (Psych, B.I.A.S., C.L.E.A.R., UI Rules of Thumb, Psychological Triggers). Use when asked to "review my design", "audit growth UX", "optimize conversion rate", "review e-commerce page", "audit checkout flow", "review pricing table", "review onboarding", or "propose a development plan for my UI".
license: MIT
---

# 🧠 Growth Design Review Skill

Review UI designs, components, and frontend code against **Product Psychology & Growth Design frameworks**. The review operates as a **Causal Diagnostic Pipeline**, where each framework feeds its findings into the next to produce a prioritized, code-level development plan that maximizes **Net Perceived Value (NPV)** and conversion rate.

---

## 🔄 The Causal Diagnostic Pipeline

Never treat the frameworks as disconnected checklists. Run the audit as an end-to-end causal chain:

```
[1. Psych Framework] ──> [2. B.I.A.S. Audit] ──> [3. C.L.E.A.R. & Rules of Thumb] ──> [4. Psychological Triggers] ──> [5. Development Plan]
  Detects where user       Pinpoints the exact     Identifies the tangible UI/code       Prescribes the proven               Translates into concrete,
  energy depletes.         cognitive phase of      elements responsible for the break.   behavioral antidote for             actionable code edits
                           breakdown (B,I,A,S).                                          that specific friction.             prioritized by ROI.
```

1. **Energy Audit (Psych):** Detect what drains user cognitive fuel ($P = \text{Motivation} \times \text{Ability}$) and where friction peaks.
2. **Breakdown Stage (B.I.A.S.):** Map that friction to the user's mental processing:
   - Did they fail to trust or notice? (**Block**)
   - Did they misunderstand the value? (**Interpret**)
   - Did they suffer decision paralysis? (**Act**)
   - Did the experience end flat without closure? (**Store**)
3. **Tactical UI Drivers (C.L.E.A.R. + Rules of Thumb):** Score the interface and pinpoint the concrete UI culprits causing the breakdown (e.g., weak copy, layout mismatch, Skittles Effect, poor touch target, or violation of page archetype heuristics).
4. **Behavioral Antidotes (Psychological Triggers):** Prescribe the exact cognitive principle needed to repair the breakdown identified in steps 1–3 (e.g., Default Effect for decision fatigue in *Act*, Social Proof for skepticism in *Block*, Endowed Progress for low motivation).
5. **Executable Plan (Development Plan):** Convert the diagnosis and antidotes into prioritized, file-specific code changes.

---

## 📚 Core Frameworks & Context Routing

To optimize context usage, use file reading tools to load ONLY the specific framework files needed for the task from the `reference/` directory:

- **Psych Framework** (`reference/psych.md`) — Cognitive fuel balance ($P = \text{Motivation} \times \text{Ability}$), Psych additions/subtractions, Labor Illusion.
- **B.I.A.S. Behavioral Audit** (`reference/bias.md`) — 4-stage cognitive funnel: Block, Interpret, Act, Store.
- **C.L.E.A.R. Scorecard** (`reference/clear.md`) — Quantitative 1–5 scoring: Copywriting, Layout, Emphasis, Accessibility, Reward.
- **UI Rules of Thumb** (`reference/rules-of-thumb.md`) — Context heuristics for Landing Pages, E-commerce (PDP), Cart & Checkout, Pricing Tables, Onboarding, Dashboards, and Mobile UX.
- **Psychological Triggers** (`reference/psychological-triggers.md`) — Cognitive biases: IKEA Effect, Zeigarnik, Endowed Progress, Social Proof, Decoy Effect, Loss Aversion, Authentic Urgency, Default Effect.

---

## 🛠 Review Process

Whenever a user requests a review, strictly execute these steps:

1. **Context Routing:** Load the required reference files from `reference/` based on the user's request (or load all for a full review).
2. **Context Calibration & Grounding:**
   - **Target Files:** Read the target UI files (JSX/TSX components, HTML templates, CSS/Tailwind classes, page copy). If none are provided, stop and ask the user which file or URL to evaluate.
   - **Primary Conversion Goal:** Infer the primary desired action from the code (e.g., "Add to Cart", "Start Free Trial", "Book Demo", "Complete Step 2"). If ambiguous, state the assumed primary goal clearly in the Diagnostic Summary.
   - **Target Audience (ICP):** Identify the audience context (D2C E-commerce, B2B SaaS, Developer Tool, Consumer App). Calibrate copywriting scrutiny and trust requirements to that specific persona.
3. **Execute the Diagnostic Pipeline:**
   - Measure Psych energy balance.
   - Trace the B.I.A.S. mental failure point.
   - Score the C.L.E.A.R. dimensions (1–5) and check archetype Rules of Thumb.
   - Select the targeted Psychological Triggers.
4. **Synthesize into Required Output:** Format the response using the strict markdown template below.
5. **Immediate Action:** Offer to implement the Priority 1 (Critical) improvements immediately in the user's code.

---

## 📋 Required Output Format

Format the review output as follows:

```markdown
## 📈 Growth Design Audit

### 🔍 Diagnostic Summary
* **Context & Objective:** [Component analyzed, detected target audience (ICP), and primary conversion goal]
* **Primary Cognitive Bottleneck:** [1–2 sentence summary of where and why user energy/conversion breaks down, connecting Psych → B.I.A.S. → C.L.E.A.R.]

---

### 1. Psych Framework Analysis
**Net Perceived Value Assessment:**
- **Motivation signals found:** [Elements that boost user motivation or clarify immediate value]
- **Friction points found:** [Visual, cognitive, or interaction friction depleting energy]
- **Psych Additions present:** [Rewards, progress markers, delighters, tangible benefits]
- **Psych Subtractions to fix:** [Redundant fields, cognitive clutter, confusing jargon]
- **Labor Illusion usage:** [Present/missing, recommendations for loading or processing states]

---

### 2. B.I.A.S. Behavioral Audit
| Dimension | Status | Diagnostic Finding |
| :--- | :---: | :--- |
| **Block** (Visual Hierarchy & Trust) | [Pass/Fail] | [Hierarchy standard? Credibility & human elements visible?] |
| **Interpret** (Clarity over Cleverness) | [Pass/Fail] | [Does headline communicate value within 3 seconds?] |
| **Act** (Decision Simplicity) | [Pass/Fail] | [Is primary CTA singular and prominent? Smart defaults applied?] |
| **Store** (Peak-End Rule) | [Pass/Fail] | [Does completion feel rewarding? Meaningful success state?] |

---

### 3. C.L.E.A.R. Scorecard & UI Rules of Thumb
| Dimension | Score (1-5) | Specific Finding & UI Driver |
| :--- | :---: | :--- |
| **C** - Copywriting | X/5 | [Outcome-oriented vs feature-heavy copy] |
| **L** - Layout | X/5 | [Visual dominance, F/Z scan patterns, mobile thumb zones] |
| **E** - Emphasis | X/5 | [Visual hierarchy, contrast, absence of Skittles Effect] |
| **A** - Accessibility | X/5 | [WCAG contrast (4.5:1), touch targets (44x44px), error states] |
| **R** - Reward | X/5 | [Immediate micro-feedback, state transitions, celebration] |
| **Total Score** | **XX/25** | |

* **Page Archetype Identified:** [Landing / E-commerce PDP / Cart & Checkout / Pricing / Onboarding / Dashboard / Mobile]
* **Archetype Compliance:**
  - *[Rule Name]:* [Compliance status and findings]
  - *[Rule Name]:* [Compliance status and findings]

---

### 4. Behavioral Antidotes (Psychological Triggers)
| Target Breakdown (from B.I.A.S. / C.L.E.A.R.) | Recommended Trigger | Prescribed Application |
| :--- | :--- | :--- |
| [e.g. Decision fatigue in Act] | **Default Effect / Decoy** | [Specific implementation recommendation] |
| [e.g. Skepticism in Block] | **Social Proof** | [Specific implementation recommendation] |
| [e.g. Drop-off in Onboarding] | **Endowed Progress / Zeigarnik** | [Specific implementation recommendation] |

---

## 🏗 Prioritized Development Plan

### 🔴 Priority 1 — Critical (High Impact, Low Effort)
| # | Action | Root Cause & Antidote | Target File(s) | Expected Conversion Impact |
|---|--------|-----------------------|----------------|----------------------------|
| 1 | [Concrete action] | [B.I.A.S. phase + Trigger] | [File path] | [Measurable expected result] |

### 🟡 Priority 2 — Important (High Impact, Higher Effort)
| # | Action | Root Cause & Antidote | Target File(s) | Expected Conversion Impact |
|---|--------|-----------------------|----------------|----------------------------|
| 1 | [Concrete action] | [B.I.A.S. phase + Trigger] | [File path] | [Measurable expected result] |

### 🟢 Priority 3 — Nice to Have (Incremental Polish)
| # | Action | Root Cause & Antidote | Target File(s) | Expected Conversion Impact |
|---|--------|-----------------------|----------------|----------------------------|
| 1 | [Concrete action] | [B.I.A.S. phase + Trigger] | [File path] | [Measurable expected result] |
```
