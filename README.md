# HYF Aarhus — Final Project Partner Outreach

A single-page React application for HackYourFuture Denmark (Aarhus chapter), inviting companies to collaborate as partners on the frontend program's final project.

Live site: **https://siderdk.github.io/HYF-FP/**

---

## What it is

This outreach page explains the HYF final project program to potential company partners. It covers:

- What the final project involves
- What the company needs to bring
- Who the team is and what they deliver
- How the 5-week timeline works
- A contact form to get in touch

Built with Vite + React. Styled with CSS Modules. No external UI frameworks.

---

## Run locally

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173/HYF-FP/`.

---

## Deploy to GitHub Pages

Build and push to the `gh-pages` branch:

```bash
npm run build
npm run deploy
```

Then in your GitHub repo go to **Settings → Pages**, set source to **Deploy from a branch**, and select the `gh-pages` branch.

The repo name used as the base path is set in `vite.config.js`:

```js
const repoName = 'HYF-FP'
```

---

## Tech stack

| Tool | Purpose |
|---|---|
| [Vite](https://vitejs.dev/) | Build tool |
| [React 18](https://react.dev/) | UI library |
| CSS Modules | Scoped component styles |
| [gh-pages](https://www.npmjs.com/package/gh-pages) | GitHub Pages deployment |
| [Formspree](https://formspree.io/) | Contact form backend |
| Google Fonts | Space Grotesk + Work Sans |

---

## Contact form

The form submits to Formspree. The endpoint is configured in `src/components/Contact/Contact.jsx`:

```js
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeevekjg'
```

To use a different endpoint, replace that value with your own Formspree form ID.

---

## Git workflow

Never commit directly to `main`. Always create a feature branch, push it, and open a pull request for review.

```bash
git checkout -b your-branch-name
# make changes
git push -u origin your-branch-name
gh pr create
```
