# Claude CLI Prompt: HYF Final Project Collaboration SPA

Paste this entire prompt into Claude Code (CLI) in VS Code to scaffold the project.

---

## PROMPT START

Build a single-page React application (SPA) to be hosted on GitHub Pages. This is an outreach page for HackYourFuture (HYF) Denmark — specifically for the Aarhus chapter — calling on companies to collaborate on the frontend program's final project.

---

## PROJECT CONTEXT

HackYourFuture (HYF) Denmark is a non-profit that trains people with refugee or international backgrounds in web development. The Aarhus chapter runs a Frontend track. At the end of the program, trainees (teams of 4–5 near-graduation developers) build a real product for a real company over 4–5 weeks. This page is a direct call to companies: we are looking for a client partner for the next cohort's final project.

The tone is peer-level and direct — we are offering real product development, not a student exercise. The page should reflect professionalism, warmth, and HYF's social mission without being overly idealistic or charity-coded.

---

## TECH STACK

- **Vite + React** (latest stable)
- **CSS Modules** for styling (no external CSS frameworks)
- **No React Router needed** — this is a true single-page scroll layout
- **gh-pages** package for GitHub Pages deployment
- Configure `vite.config.js` with `base: '/[REPO-NAME]/'` for GitHub Pages — leave a clear `// TODO: replace with your GitHub repo name` comment
- Add a `deploy` script in `package.json`: `"deploy": "gh-pages -d dist"`
- Google Fonts import for **Space Grotesk** (use as a substitute for Space Mono — better readability at body scale) and **Work Sans**

---

## DESIGN SYSTEM

Implement CSS custom properties (variables) in a global `:root` block. Use these exactly:

```css
--color-primary: #293A7D;
--color-secondary: #126AB2;
--color-tertiary: #333368;
--color-accent-light-blue: #C7DCE3;
--color-bg-warm: #F2EAE1;
--color-bg-white: #FFFFFF;
--color-black: #000000;
--color-grey: #ECECEC;

--font-display: 'Space Grotesk', monospace;
--font-body: 'Work Sans', sans-serif;

--radius-sm: 4px;
--radius-md: 8px;
--spacing-section: clamp(4rem, 8vw, 8rem);
```

**Typography scale:**
- H1: 3.5rem–5rem, `--font-display`, weight 700, color `--color-primary`
- H2: 2rem–2.75rem, `--font-display`, weight 600, color `--color-primary`
- H3: 1.25rem, `--font-body`, weight 600
- Body: 1rem / 1.6 line-height, `--font-body`, color `--color-black`
- Small/label: 0.875rem, weight 500, uppercase, letter-spacing 0.08em

**Buttons:**

Primary button:
- Background `--color-primary`, white text, no border, `--radius-sm`
- Padding: `0.875rem 2rem`
- On hover: background `--color-secondary`, subtle box-shadow
- Transition: 200ms ease

Secondary button:
- Transparent background, border `2px solid --color-primary`, `--color-primary` text
- Hover: background `--color-primary`, white text

**Navigation interactions:**
- Nav links: on hover, show an underline that animates in from left (width: 0 → 100%, transition 200ms)
- Active/current section: persistent underline using an `::after` pseudo-element

**Page background:** Use `--color-bg-warm` (#F2EAE1) for the overall page background. Section alternates: warm → white → warm → white.

---

## PAGE STRUCTURE

Build the following sections as separate React components. Implement smooth scroll behavior (`scroll-behavior: smooth` on `html`).

### 1. `<Navbar />`
- HYF logo (text-based SVG or bold text: "HYF" with "Denmark" subscript) on the left, links on the right
- Links: "About", "What We're Building", "What We Need", "Timeline", "Get In Touch"
- All links are in-page anchor scroll links
- Sticky, background `--color-primary`, text white
- On scroll, add a subtle box-shadow
- Mobile: hamburger menu that opens a full-width dropdown

### 2. `<Hero />`
- Full-viewport-height section, background `--color-primary`
- Large headline (H1): **"Build Something Real. With Developers Who Mean It."**
- Subheadline (body large): "HackYourFuture Aarhus is looking for a company partner for our next frontend final project. A real brief, a real team, a real result."
- Two CTAs side by side: Primary button "Get In Touch" (anchor to contact section) + Secondary button (white outline) "See How It Works" (anchor to timeline section)
- Small badge/label below headline: "Frontend Track · Aarhus · 2025" — styled with `--color-accent-light-blue` as background, `--color-primary` text
- Decorative element: a subtle geometric pattern or grid using `--color-tertiary` at low opacity — keep it minimal

### 3. `<WhatWeAreBuildingSection />` id="about"
- Background `--color-bg-warm`
- H2: "What the Final Project Is"
- Three columns (responsive: stack on mobile) with icon + heading + text:
  1. **A real product** — "Trainees build a working frontend application based on your design brief. Not a tutorial. Not a sandbox. Something deployable."
  2. **Frontend-first** — "The tech stack is React, React Router, external API integration, and responsive design. Teams have covered this for 7+ months before the final project."
  3. **Yours to keep** — "The codebase lives in a public GitHub repo. You own the IP. Trainees can reference the work in their portfolios — that's the deal."
- Below the three columns: a "Tech stack the team brings" row of pill-shaped tags: React · React Router · JavaScript (ES6+) · HTML/CSS · Git · Responsive Design · REST APIs · Component Architecture · Agile/Scrum

### 4. `<WhatWeNeedSection />` id="what-we-need"
- Background `--color-bg-white`
- H2: "What We're Looking For in a Partner"
- Two-column layout (left: what you bring, right: what is flexible/optional):

  **You bring:**
  - A real product idea or an existing project that needs a frontend
  - A Figma design (or willingness to define one early)
  - One point of contact who can review pull requests or give feedback
  - Attendance at kick-off (half-day) and final presentation (half-day)

  **Flexible:**
  - Exact tech decisions (agreed at kick-off with the team)
  - The scope — we help define what's achievable in 4–5 weeks
  - No payment required. This is a collaboration, not a commission.

- Add a callout box (background `--color-accent-light-blue`, border-left `4px solid --color-primary`): "We've done this before. Past teams have built for Tantakuy — a competition platform — and other Aarhus-based companies. The work speaks for itself."

### 5. `<WhatTeamBringsSection />` id="the-team"
- Background `--color-bg-warm`
- H2: "The Team You Get"
- Short paragraph: "A team of 4–5 trainees who are weeks away from finishing a 7-month intensive frontend program. They've been coding full-time on weekends for months. Most have professional or academic backgrounds before HYF — they're not beginners who happen to code."
- Four horizontal stat cards (responsive: 2×2 on tablet, stack on mobile):
  - "4–5 developers per team"
  - "7 months of training before final project"
  - "Agile workflow — daily stand-ups, weekly sprints, PR reviews"
  - "Mentors available throughout"
- Below: "The team follows Agile methods. They run their own stand-ups, manage a Trello board, submit pull requests, and do code reviews. You don't need to manage them — just stay available for feedback."

### 6. `<TimelineSection />` id="timeline"
- Background `--color-bg-white`
- H2: "How It Works"
- Vertical timeline component with 5 steps, alternating left/right on desktop, single column on mobile. Each step: step number (circle, `--color-primary` background), label, and description.

  1. **Kick-off** (Week 1, Sunday) — "You meet the team. Roles are assigned, the brief is confirmed, the Trello board is set up, and the team aligns on what 'done' means."
  2. **Weekly stand-ups** — "Every Sunday (in-person) and Tuesday (online). The team reports progress, flags blockers, and plans the next sprint. Mentor-supported."
  3. **Midpoint check-in** — "A natural checkpoint around week 3. Good moment to review direction and give early feedback before code freeze."
  4. **Code freeze** (Week 4) — "No major new features. The team focuses on bug fixes, polish, and deployment. The product is nearly final."
  5. **Final presentation** (Week 5, Sunday) — "The team presents the deployed product to you. You give feedback. This is the handover."

- Below the timeline: a horizontal "commitment summary" bar: **Kick-off: ~4 hours · Weekly availability: async, light · Final presentation: ~4 hours**

### 7. `<ContactSection />` id="get-in-touch"
- Background `--color-primary`
- White text throughout
- H2 (white): "Let's Talk"
- Subtext: "If this sounds like a fit — or if you're just curious — reach out. We're happy to explain the process, answer questions, or set up a quick call."
- A simple `<form>` with:
  - Company name (text input)
  - Contact name (text input)
  - Email (email input)
  - Short message / project idea (textarea)
  - Primary button (white bg, `--color-primary` text): "Send Message"
  - Note below button (small, white, 70% opacity): "We'll get back within 2–3 working days."
- Form should use controlled inputs with React state. On submit (no backend needed for now): show an inline success message "Thanks! We'll be in touch." and reset the form. Add a `// TODO: wire up to Formspree, Netlify Forms, or email provider` comment.
- Alternatively, provide a direct email link as fallback: show the HYF Aarhus contact email as a mailto link styled as a secondary CTA.

### 8. `<Footer />`
- Background `--color-black`
- White text
- Three columns: HYF logo + tagline | Quick links (same as nav) | "HackYourFuture Denmark · Aarhus · Non-profit"
- Social icons: LinkedIn, GitHub (SVG icons, accessible with aria-labels)
- Bottom bar: "© 2025 HackYourFuture Denmark. Content on this page is for partner outreach purposes."

---

## RESPONSIVE DESIGN

- Mobile-first breakpoints: `480px`, `768px`, `1024px`, `1280px`
- All sections must be fully usable and well-proportioned on a 375px viewport
- The hero headline should scale with `clamp(2rem, 5vw, 5rem)` so it never breaks on small screens
- The Navbar collapses to hamburger at `768px`
- Timeline switches from alternating (desktop) to single left-aligned column (mobile)
- Section padding: `clamp(3rem, 6vw, 7rem)` vertical, `clamp(1.5rem, 5vw, 8rem)` horizontal container

---

## ACCESSIBILITY

- Semantic HTML throughout: `<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`, `<article>` where appropriate
- All images/icons: `alt` attributes or `aria-label`
- Color contrast: white on `--color-primary` and black on `--color-bg-warm` must both pass WCAG AA
- Focus states on all interactive elements (visible outline using `--color-secondary`)
- Form inputs: proper `<label>` elements associated via `htmlFor`
- Skip-to-content link at top of page

---

## FILE STRUCTURE

```
src/
  components/
    Navbar/
      Navbar.jsx
      Navbar.module.css
    Hero/
      Hero.jsx
      Hero.module.css
    WhatWeAreBuilding/
      WhatWeAreBuilding.jsx
      WhatWeAreBuilding.module.css
    WhatWeNeed/
      WhatWeNeed.jsx
      WhatWeNeed.module.css
    WhatTeamBrings/
      WhatTeamBrings.jsx
      WhatTeamBrings.module.css
    Timeline/
      Timeline.jsx
      Timeline.module.css
    Contact/
      Contact.jsx
      Contact.module.css
    Footer/
      Footer.jsx
      Footer.module.css
  styles/
    global.css       (CSS variables, reset, body, html styles)
  App.jsx
  main.jsx
```

---

## IMPORTANT CONSTRAINTS

- Do not use any external UI libraries (no MUI, no Chakra, no Tailwind)
- Do not use any animation libraries (no Framer Motion) — CSS transitions only
- Keep bundle size lean. No heavy dependencies beyond React + Vite
- All copy in the components should be realistic, concrete, and free of filler phrases like "Join us on this exciting journey" or "passionate team of learners". Keep it professional and specific
- The page is audience-specific: the reader is a company, product owner, or startup founder in Aarhus or wider Denmark. Write for them
- Avoid any language that frames trainees as charity cases or the company as a donor. This is a mutual collaboration. The company gets a real product. The trainees get real experience
- Do not include any placeholder images (no Lorem Picsum). Use SVG illustrations or icon-based decorative elements only
- Add a `README.md` with: project description, how to run locally (`npm install && npm run dev`), how to deploy to GitHub Pages (`npm run deploy`), and a `// TODO: add your deployed URL here` line

---

## DELIVERABLE

Generate the complete working codebase. Every file listed in the file structure above should be created and functional. The app should run without errors with `npm install && npm run dev`. The form submit handler and the GitHub Pages `base` config are the only two items left as clearly marked TODOs.

## PROMPT END
