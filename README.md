# Your Name — Portfolio (React + Vite)

A responsive personal portfolio built with React, split into components, with a
dark/light theme toggle, scroll-triggered reveal animations, an animated typewriter
role line, a 3D-tilt code card, and a scroll progress indicator.

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production files are output to `dist/`.

## Project structure

```
src/
  components/     # Navbar, Hero, About, Skills, Projects, Resume, Contact, Footer, ScrollProgress
  context/        # ThemeContext (dark/light toggle, persisted to localStorage)
  hooks/          # useReveal (scroll animations), useTypewriter (role cycling)
  App.jsx         # composes all sections
  index.css       # design tokens + all styles
  main.jsx        # React entry point
```

## Before you submit

1. Replace **"Your Name"** everywhere (Navbar, Hero, index.html `<title>`, Footer).
2. Update `src/components/Projects.jsx` with your real projects and links.
3. Update `src/components/Contact.jsx` with your real email, phone, GitHub, LinkedIn.
4. Add your resume PDF to the `public/` folder as `resume.pdf` (the Download Resume
   button already links to `/resume.pdf`).
5. Adjust skill levels/tags in `src/components/Skills.jsx` to reflect your actual comfort level.
6. Wire the contact form to a real service (e.g. Formspree, EmailJS) if you want it to actually send messages — right now it's a working UI-only demo.

## Deploy

Push this repo to GitHub, then deploy for free on:
- **Vercel** — import the repo, framework preset "Vite", no config needed.
- **Netlify** — build command `npm run build`, publish directory `dist`.
- **GitHub Pages** — run `npm run build` and deploy the `dist` folder (or use the `gh-pages` package).
