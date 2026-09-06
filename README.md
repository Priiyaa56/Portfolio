# Priya Hariyale — Portfolio (React + Vite)

A responsive personal portfolio built with React, split into components, with a
dark/light theme toggle, scroll-triggered reveal animations, an animated typewriter
role line, a 3D-tilt code card, and a scroll progress indicator.


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


Live Demo :https://portfolio-rivplw6mi-priya-futureos.vercel.app
