# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static single-page portfolio website for atoomic.org, deployed via GitHub Pages. No build system, no dependencies — pure HTML, CSS, and vanilla JavaScript.

## Local Development

```bash
# Start local server (Python HTTP server on port 8000)
python3 -m http.server 8000
```

No build step, linting, or tests exist. Changes are previewed by opening `index.html` in a browser or via the local server.

## Deployment

Push to `master` branch — GitHub Pages serves the site automatically at the custom domain `atoomic.org` (configured via CNAME file).

## Architecture

**Single-page site with three core files:**

- `index.html` — Entire page structure: hero, about, experience timeline, skills, open source, writing, contact sections. Includes Google Analytics (gtag.js) and JSON-LD structured data for SEO.
- `css/styles.css` — All styling. Uses CSS custom properties (e.g. `--orange-primary: #ff6b35`), CSS Grid/Flexbox layout, `clamp()` for fluid typography, backdrop-blur glassmorphism effects, and fade-in/slide-up animations.
- `js/script.js` — Smooth scroll navigation (accounts for sticky header offset), contact form mailto generation, Intersection Observer for scroll-triggered animations, keyboard navigation (Arrow keys between sections, Home/End), and scroll-based header shadow.

**Assets:**
- `images/` — Logo, profile photo, company logos, background patterns
- `css/end2end.*` — Custom font files (SVG, WOFF, TTF)
- `download/perl/` — Perl source distribution tarballs (intentionally tracked in git)
- `n_rochelemagne-resume.pdf` — Downloadable resume

## Key Conventions

- No external CSS/JS frameworks or libraries — everything is hand-written vanilla code
- Accessibility-first: semantic HTML, ARIA labels, keyboard focus indicators, keyboard navigation support
- CSS custom properties defined at `:root` level for theming consistency
- Contact form uses client-side mailto: link generation (no backend)
