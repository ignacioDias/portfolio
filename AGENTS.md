# AGENTS.md

Personal portfolio site for Ignacio Dias Gundin (job-hunting). Content is in **Spanish** — keep descriptions professional.

## Stack / tooling

- [Astro](https://astro.build/) static site built with `astro build`, plus vanilla JS for client-side behavior. **No UI framework.**
- Commands:
  - `npm install` — install dependencies (Node >= 22.23.4; workflow uses Node 24).
  - `npm run dev` — local dev server.
  - `npm run build` — static output in `dist/`.
  - `npm run preview` — preview the build.
- No tests or linter. Verify changes with `npm run build` and by checking the dev server in a browser.

## Data / architecture

- Projects live in `src/data/projects.json`; rendered at build time by `src/components/Projects.astro` and `ProjectCard.astro`.
- Each project's `tags` array uses IDs that **must match keys** in the `TAGS` object in `src/data/tags.js`. Unknown IDs render as broken badges.
- Tech filter buttons in `src/components/Technologies.astro` use `data-tech` and are matched in `src/scripts/main.js` against `.tag-badge[data-tech]` (the `TAGS` key).
- Translations live in `src/i18n/translations.js`. Astro renders Spanish by default; `src/scripts/i18n.js` handles the client-side ES/EN toggle, including project cards (which carry `data-title-es`/`data-title-en` and `data-description-es`/`data-description-en`).
- Static assets live in `public/`: `images/` (WebP project/profile images), `cv.pdf`, `CNAME`, `robots.txt`, `sitemap.xml`.
- `public/fonts/` holds `onest-*.ttf` files that are **unused** — the site loads Space Grotesk + Manrope from Google Fonts via `@import` in `src/styles/global.css`.

## Deployment

- GitHub Pages, auto-deployed on push to `main` via `.github/workflows/static.yml`, which runs `npm ci`, `npm run build`, and uploads `dist/`.
- Custom domain `ignaciodias.dev` is set in `public/CNAME`. SEO artifacts (`public/robots.txt`, `public/sitemap.xml`, `canonical`, JSON-LD) reference `https://ignaciodias.dev/`.

## Skills

- Repo-local skills under `.agents/skills/` for **seo**, **accessibility**, and **frontend-design**. Use them when doing SEO/a11y/design work.
