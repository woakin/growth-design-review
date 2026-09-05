# 🧠 Growth Design Architect

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Turn your AI assistant into a **Senior Growth Designer**. This skill audits UI designs, components, and frontend code against proven **Product Psychology**, **Behavioral Economics**, and **Conversion Rate Optimization (CRO)** frameworks to maximize conversion and user delight.

---

## 🚀 Overview

Most UI reviews are subjective. This skill makes them objective by using the same frameworks employed by top growth teams (inspired by the behavioral case studies at [Growth.design](https://growth.design/)). It analyzes your components, pages, and copy through a **Causal Diagnostic Pipeline** to calculate and maximize the **Net Perceived Value (NPV)**.

> **NPV = Motivation - Friction**

---

## 🔄 The Causal Diagnostic Pipeline

The skill connects behavioral frameworks into an end-to-end diagnosis:

```
[Psych Framework] ──> [B.I.A.S. Audit] ──> [C.L.E.A.R. & Rules] ──> [Psych Triggers] ──> [Development Plan]
Energy Drain           Mental Breakdown     Tangible UI Root Cause   Behavioral Antidote   Code-Level Implementation
```

1. **Psych Framework** – Assesses cognitive fuel ($P = \text{Motivation} \times \text{Ability}$), Psych subtractions, and the *Labor Illusion*.
2. **B.I.A.S. Audit** – Traces how users *Block, Interpret, Act, and Store* information.
3. **C.L.E.A.R. Scorecard** – A quantitative 1–5 scoring system for *Copy, Layout, Emphasis, Accessibility, and Reward* (up to 25 pts).
4. **UI Rules of Thumb** – Heuristics for Landing Pages, E-commerce (PDP), Cart & Checkout, Pricing Tables, Onboarding flows, Dashboards, and Mobile UX.
5. **Psychological Triggers** – 8 applied cognitive biases (*IKEA Effect, Zeigarnik, Endowed Progress, Social Proof, Decoy Effect, Loss Aversion, Authentic Urgency, Default Effect*).

For deep dives into these frameworks, see the [`reference/`](./reference/) directory:
- [`psych.md`](./reference/psych.md)
- [`bias.md`](./reference/bias.md)
- [`clear.md`](./reference/clear.md)
- [`rules-of-thumb.md`](./reference/rules-of-thumb.md)
- [`psychological-triggers.md`](./reference/psychological-triggers.md)

---

## 📦 Installation & Setup

To install this skill for your AI assistants, use the `skills` CLI:

```bash
npx skills add woakin/growth-design-review
```

This makes the skill available globally across compatible AI editors (e.g., Cursor, Windsurf, GitHub Copilot, Antigravity).

---

## 💬 Usage Examples

Simply prompt your AI assistant naturally:

- *"Review my `LandingPage.tsx` using the Psych framework."*
- *"Run a B.I.A.S. audit on our new checkout flow."*
- *"Check this product detail page (PDP) component against the C.L.E.A.R. scorecard."*
- *"Audit our pricing table using the Decoy and Default effects."*
- *"Propose a development plan to increase conversion on this onboarding screen."*

### 🎯 How to Get 10/10 Results (Context Best Practices)

The skill automatically inspects your code, but providing **three simple context signals** unlocks surgical accuracy:

```text
Review @src/components/PricingTable.tsx using growth-design-review:
- Primary Goal: Upgrade free trial users to the Annual Pro plan.
- Target Audience: B2B team leads and engineering managers.
- Known Friction: Users hesitate between the Starter and Pro tiers.
```

1. **Tag the File(s):** Use `@ComponentName.tsx` so the agent reads actual markup, Tailwind classes, and state transitions.
2. **State the Primary Conversion Action:** Whether it's *Add to Cart*, *Start Trial*, or *Book Demo*, this anchors the hierarchy evaluation.
3. **Specify the Audience (ICP):** D2C shoppers have different trust thresholds than B2B buyers.

---

### 📋 Example Output Preview

**3. C.L.E.A.R. Scorecard**

| Dimension | Score (1-5) | Finding & UI Driver |
| :--- | :---: | :--- |
| **C** - Copywriting | 2/5 | Headlines focus on technical features rather than user outcomes. |
| **L** - Layout | 4/5 | Strong Z-pattern visual hierarchy on desktop. |
| **E** - Emphasis | 2/5 | "Skittles Effect" detected—three competing bright primary buttons. |
| **A** - Accessibility | 3/5 | Low contrast ratio on secondary description copy (under 4.5:1). |
| **R** - Reward | 2/5 | Lack of instant micro-feedback on form submission. |
| **Total Score** | **13/25** | |

### 🎨 Real-World Example (Before & After)

*A visual breakdown of how the skill improves landing page conversion via the Psych framework and C.L.E.A.R. copywriting.*

<table align="center">
  <tr>
    <td align="center"><b>Before</b></td>
    <td align="center"><b>After</b></td>
  </tr>
  <tr>
    <td><img src="./assets/example-before.png" alt="Before Growth Design Review" width="400"/></td>
    <td><img src="./assets/example-after.png" alt="After Growth Design Review" width="400"/></td>
  </tr>
  <tr>
    <td><i>Skittles effect, generic headline, feature-driven copy</i></td>
    <td><i>Clear visual hierarchy, outcome-driven copy, social proof</i></td>
  </tr>
</table>

---

## 📂 Repository Structure

```text
├── SKILL.md                  # The core AI instruction set & orchestrator
├── README.md                 # Project documentation & usage guide
├── LICENSE                   # MIT License
├── CONTRIBUTING.md           # Contribution guidelines
├── assets/                   # Images and media for documentation
└── reference/
    ├── psych.md              # Motivation x Ability framework & Labor Illusion
    ├── bias.md               # Behavioral audit (Block, Interpret, Act, Store)
    ├── clear.md              # Quantitative C.L.E.A.R. scoring guidelines
    ├── rules-of-thumb.md     # Heuristics: Landing, E-com, Checkout, Pricing, Onboarding, Mobile
    └── psychological-triggers.md # 8 Applied behavioral economics triggers
```

---

## 🤝 Contributing

Contributions are welcome! If you have a new Psychological Trigger or a UI Rule of Thumb to add:

1. Fork the repo.
2. Update the appropriate file in the `reference/` directory (e.g., `reference/rules-of-thumb.md`).
3. Open a Pull Request.

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for more details.

---

## ⚖️ License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for more information.

> *Disclaimer: This project is an independent implementation of growth principles and is not officially affiliated with Growth.design.*
