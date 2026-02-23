# 🧠 Growth Design Architect

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Turn your AI assistant into a **Senior Growth Designer**. This skill audits UI designs and code against proven **Product Psychology** and **Behavioral Economics** frameworks to maximize conversion and user delight.

---

## 🚀 Overview

Most UI reviews are subjective. This skill makes them objective by using the same frameworks employed by top growth teams (inspired by the case studies at [Growth.design](https://growth.design/)). It analyzes your components, pages, and copy to calculate and improve the **Net Perceived Value (NPV)**.

> **NPV = Motivation - Friction**

---

## 🛠 Included Frameworks

This skill applies five distinct diagnostic layers to your code:

- **Psych Framework** – Assessing cognitive fuel and minimizing "Psych subtractions" (redundant fields, jargon).
- **B.I.A.S. Audit** – A behavioral check on how users *Block, Interpret, Act, and Store* information.
- **C.L.E.A.R. Scorecard** – A quantitative 1–5 scoring system for *Copy, Layout, Emphasis, Accessibility, and Reward*.
- **UI Rules of Thumb** – Best practices for Landing Pages, Dashboards, and Onboarding flows.
- **Psychological Triggers** – Implementation of the IKEA Effect, Zeigarnik Effect, and Loss Aversion.

For deep dives into these frameworks, check out the [`reference/frameworks.md`](./reference/frameworks.md) file.

---

## 📦 Installation & Setup

To install this skill for your AI assistants, use the `skills` CLI:

```bash
npx skills add woakin/growth-design-review
```

This will make the skill available globally across your compatible AI editors (e.g., Cursor, Windsurf, GitHub Copilot, Replit).

---

## 💬 Usage Examples

Simply ask your AI assistant:

- *"Review my `LandingPage.tsx` using the Psych framework."*
- *"Run a B.I.A.S. audit on our new onboarding flow."*
- *"Check this checkout component against the C.L.E.A.R. scorecard."*
- *"Propose a development plan to increase the NPV of this dashboard."*

### Example Output Preview

**3. C.L.E.A.R. Scorecard**

| Dimension | Score (1-5) | Finding |
| :--- | :---: | :--- |
| **C** - Copywriting | 2/5 | Headlines focus on features, not outcomes. |
| **L** - Layout | 4/5 | Strong Z-pattern usage. |
| **E** - Emphasis | 2/5 | "Skittles Effect" detected—too many primary buttons. |

---

## 📂 Repository Structure

```text
├── SKILL.md                # The core AI instruction set
├── README.md               # Project documentation
├── LICENSE                 # MIT License
├── CONTRIBUTING.md         # Contribution guidelines
└── reference/
    └── frameworks.md       # Deep-dive definitions of growth frameworks
```

---

## 🤝 Contributing

We love contributions! If you have a new Psychological Trigger or a UI Rule of Thumb to add:

1. **Fork** the repo.
2. **Update** `reference/frameworks.md`.
3. Open a **Pull Request**.

See [CONTRIBUTING.md](./CONTRIBUTING.md) for more details.

---

## ⚖️ License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.

> **Disclaimer**: This project is an independent implementation of growth principles and is not officially affiliated with Growth.design.