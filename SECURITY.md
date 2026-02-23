# Security Policy

## Supported Versions

The **Growth Design Architect** skill is an AI prompt and educational reference repository. Since this project does not contain executable application code or dependent software libraries, traditional software vulnerabilities (like RCE, SQLi, or XSS) are generally not applicable to the core prompt text itself.

However, we are committed to maintaining the integrity, accuracy, and safety of the instructions provided to AI models.

| Version | Supported          |
| ------- | ------------------ |
| v1.x    | :white_check_mark: |

## Reporting an Issue

If you discover a prompt injection vector, a manipulation tactic that forces the AI into malicious behavior, or any other structural issue that could be considered a security risk within `skill.md` or the `reference/` files, please report it to us.

**Do not open a public issue.**

Instead, please email the maintainer directly at: **gdr@woakin.com**

### What to include in your report

To help us address the issue quickly, please provide the following:
*   A summary of the issue.
*   The exact prompt or input sequence used to trigger it.
*   The AI model (e.g., Claude 3.5 Sonnet, GPT-4o) where the issue was observed.
*   Any potential impact or suggestions for remediation.

We will review the report within 48 hours and work with you to implement a fix before public disclosure.
