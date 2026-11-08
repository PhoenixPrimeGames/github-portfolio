# Tony McJohnston | GitHub Portfolio

**COSC 4272 Senior Seminar | Portfolio website + AI-assisted software development**

A responsive, static portfolio showcasing engineering experience, academic and personal programming work, and a working educational machine-learning prototype.

> **Status:** First working draft, November 8, 2026. The site is not yet published. See [docs/PROJECT_STATUS.md](docs/PROJECT_STATUS.md) for the exact unfinished requirements. Do not present placeholders as completed projects or screenshots.

## Proposed URLs (after you create and publish the repository)

- GitHub repository: `https://github.com/PhoenixPrimeGames/github-portfolio`
- GitHub Pages: `https://PhoenixPrimeGames.github.io/github-portfolio/`
- AI assistant: `https://PhoenixPrimeGames.github.io/github-portfolio/ai-assistant/`

## Run locally

Python 3:

```bash
cd github-portfolio
python -m http.server 8000
```

Open `http://localhost:8000/` in your browser. A local server is needed for the assistant's JavaScript modules. There are no build dependencies or paid services.

Test the classifier with Node.js (version 18 or later):

```bash
node ai-assistant/test.mjs
```

## Repository layout

```text
github-portfolio/
├── index.html                 Portfolio homepage and section navigation
├── assets/                    CSS, site behavior, vector mark
├── resume.pdf                 Draft professional résumé (needs review)
├── ai-assistant/              Browser-based ML classifier and tests
├── screenshots/               Screenshots captured from running project
├── docs/
│   ├── AI_PROJECT.md          AI project goals, design, test method and limitations
│   ├── AI_PROMPT_LOG.md       Development record and AI-assisted work
│   ├── JOB_SEARCH_WORKSHEET.md   Research worksheet (not the required PDF)
│   ├── SKILLS_GAP_WORKSHEET.md   Skills comparison worksheet
│   └── PROJECT_STATUS.md      Open assignment tasks
└── .nojekyll                  Serve the static site without Jekyll processing
```

## Pages and features

- Responsive Home, About Me, Projects, Skills, Resume, Contact sections
- About Me section exceeds the assignment's 250-word minimum
- Downloadable and embedded résumé (currently a **draft**)
- Five software project summaries, including the AI prototype
- Working AI issue classifier and documented limitations
- No trackers, no external JavaScript frameworks, and no API keys

## AI assistant

The [Technical Issue Triage Assistant](ai-assistant/) classifies free-text issue descriptions into seven categories using a multinomial Naive Bayes classifier trained on **72 hand-authored example descriptions**. It generates fixed, category-specific troubleshooting suggestions. It is not a conversational LLM and should not be used for production technical support or safety-critical decisions.

See [AI project documentation](docs/AI_PROJECT.md) and [prompt log](docs/AI_PROMPT_LOG.md).

## How to publish with GitHub Pages

1. On GitHub, create a **public** repository named exactly `github-portfolio`. Do **not** add a README, since this package already contains one.
2. Upload the files and folders from this package **into the repository root**; do not upload the enclosing `github-portfolio/` directory as an extra nesting layer.
3. Commit changes with a meaningful message, such as `Initial responsive portfolio and AI triage prototype`.
4. Open repository **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch** and choose branch `main`, folder `/ (root)`, then **Save**.
6. Visit the published Pages URL. Confirm the homepage, résumé, and `/ai-assistant/` work on desktop and mobile.

Reference: [GitHub Pages publishing documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Credits and authenticity

- Professional history, education, and project statements were adapted from Tony McJohnston's supplied resumes, subject to final owner verification.
- The AI prototype uses original, curated illustrative descriptions and a standard supervised classification algorithm.
- Site and prototype were drafted with ChatGPT assistance; review, tests, changes, and verification are logged in `docs/AI_PROMPT_LOG.md`.
- Project preview illustrations are **not** claimed as photographs or screenshots of the original projects. Replace them with real images before the final submission.
