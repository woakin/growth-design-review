# 🧠 Growth Design Architect

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Turn your AI assistant into a **Senior Growth Designer**. This skill audits UI designs, components, and frontend code against proven **Product Psychology**, **Behavioral Economics**, and **Conversion Rate Optimization (CRO)** frameworks to maximize conversion and user delight.

---

## 🚀 Overview

Most UI reviews are subjective. This skill makes them objective by using the same frameworks employed by top growth teams (inspired by the behavioral case studies at [Growth.design](https://growth.design/)). It analyzes your components, pages, and copy to calculate and maximize the **Net Perceived Value (NPV)**.

> **NPV = Motivation - Friction**

---

## 🛠 Included Frameworks

This skill applies five complementary diagnostic layers to your code:

- **Psych Framework** – Assessing cognitive fuel ($P = \text{Motivation} \times \text{Ability}$), minimizing "Psych subtractions" (redundant fields, jargon), and leveraging the *Labor Illusion*.
- **B.I.A.S. Audit** – A behavioral check on how users *Block, Interpret, Act, and Store* information.
- **C.L.E.A.R. Scorecard** – A rigorous 1–5 quantitative scoring system for *Copy, Layout, Emphasis, Accessibility, and Reward* (up to 25 pts).
- **UI Rules of Thumb** – Heuristics for Landing Pages, E-commerce (PDP), Cart & Checkout, Pricing Tables, Onboarding flows, Dashboards, and Mobile UX.
- **Psychological Triggers** – Applied cognitive biases: *IKEA Effect, Zeigarnik Effect, Endowed Progress, Social Proof, Decoy Effect, Loss Aversion, Authentic Urgency, and Default Effect*.

For deep dives into these frameworks, check out the files in the [`reference/`](./reference/) directory:
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

This will make the skill available globally across your compatible AI editors (e.g., Cursor, Windsurf, GitHub Copilot, Antigravity).

---

## 💬 Usage Examples

Simply ask your AI assistant:

- *"Review my `LandingPage.tsx` using the Psych framework."*
- *"Run a B.I.A.S. audit on our new checkout flow."*
- *"Check this product detail page (PDP) component against the C.L.E.A.R. scorecard."*
- *"Audit our pricing table using the Decoy and Default effects."*
- *"Propose a development plan to increase conversion on this onboarding screen."*

### Example Output Preview

**3. C.L.E.A.R. Scorecard**

| Dimension | Score (1-5) | Finding |
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
├── README.md                 # Project documentation
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
