# HYF Aarhus — Final Project Partner Outreach Page

A single-page React application for HackYourFuture Denmark (Aarhus chapter) calling on companies to collaborate on the frontend program's final project.

## Project description

This outreach page explains the HYF final project program to potential company partners. It covers what the project involves, what the company needs to bring, what the team provides, how the timeline works, and how to get in touch.

Built with Vite + React. Styled with CSS Modules. No external UI frameworks.

## Run locally

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173/[REPO-NAME]/` (replace with your actual repo name configured in `vite.config.js`).

## Deploy to GitHub Pages

1. Set the correct repo name in `vite.config.js`:

```js
const repoName = 'your-repo-name' // TODO: replace with your GitHub repo name
```

2. Build and deploy:

```bash
npm run build
npm run deploy
```

This uses the `gh-pages` package to push the `dist/` folder to the `gh-pages` branch.

Make sure your GitHub repository has GitHub Pages enabled and set to serve from the `gh-pages` branch.

Deployed URL: <!-- TODO: add your deployed URL here -->

## Tech stack

- [Vite](https://vitejs.dev/) — build tool
- [React 18](https://react.dev/) — UI library
- CSS Modules — scoped component styles
- [gh-pages](https://www.npmjs.com/package/gh-pages) — deployment to GitHub Pages
- Google Fonts: Space Grotesk + Work Sans

## Form integration

The contact form currently logs submissions without a backend. To wire it up:

- [Formspree](https://formspree.io/) — add your form endpoint to `Contact.jsx`
- [Netlify Forms](https://www.netlify.com/products/forms/) — add `data-netlify="true"` to the form element
- Custom email provider — replace the TODO comment in `Contact.jsx`
