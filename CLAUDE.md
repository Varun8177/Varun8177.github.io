# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # dev server at http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build locally
npm run deploy     # build + push to gh-pages (deploys to https://varun8177.github.io)
```

## Architecture

Single-page portfolio app. `src/App.jsx` is the root — it composes all sections in order: `<Navbar>`, `<Home>`, `<About>`, `<Skills>`, `<Experience>`, `<Projects>`, `<GithubStats>`, `<Contact>`. Each section has a matching `id` attribute used by scroll-nav links.

**Providers (main.jsx):** `DarkModeProvider` (from `src/context/DarkModeContext.jsx`) wraps everything; `BrowserRouter` enables `NavLink` usage.

**Theming:** Tailwind CSS with `class`-based dark mode. `DarkModeContext` adds/removes the `dark` class on `<html>` and persists to `localStorage`. Use `useDarkMode()` hook to access `isDark` and `toggle`. All dark variants use Tailwind's `dark:` prefix.

**Navbar:** `src/components/Navbar.jsx` uses Tailwind `hidden md:flex` / `flex md:hidden` to conditionally show `DefaultNavbar` vs `MobileNavbar`. Both are lazy-loaded.

**Contact form:** Uses `@emailjs/browser`. Credentials are read from env vars:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

Create a `.env` file at the project root with these values for the contact form to work locally.

**Animations:** AOS (scroll-triggered, initialized with `once: true` in `App.jsx`) for scroll-in effects; CSS keyframes (`animate-fade-in-down`) for the Home heading entrance. No framer-motion.

**Deployment:** `npm run deploy` uses the `gh-pages` package to push the `dist/` folder to the `gh-pages` branch, which is what GitHub Pages serves.
