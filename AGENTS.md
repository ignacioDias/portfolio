# AGENTS.md

Personal portfolio site for Ignacio Dias Gundin (job-hunting). Content is in **Spanish** — keep descriptions professional.

## Stack / no tooling

- Pure static site: vanilla HTML, CSS, and JS modules. **No package.json, no build step, no tests, no linter.**
- No `npm install`/`build`/`test`/`lint` commands exist. Verify changes by validating the data files and checking in a browser.
- Preview must be served over HTTP, not `file://`: `projects.js` does `fetch("./src/json/projects.json")`, which fails from `file://`.
  - `python3 -m http.server` from the repo root, then open the printed localhost URL.

## Data / architecture

- Projects live in `src/json/projects.json`; rendered by `scripts/projects.js`.
- Each project's `tags` array uses IDs that **must match keys** in the `TAGS` object in `scripts/tags.js`. Unknown IDs render as broken badges.
- Tech filter buttons in `index.html` use `data-tech` and are matched in `scripts/script.js` against `.tag-badge[data-tech]` (the `TAGS` key).
- Images: `src/*.webp`; downloadable CV is `src/cv.pdf`.
- `fonts/` holds `onest-*.ttf` files that are **unused** — the site loads Space Grotesk + Manrope from Google Fonts via `@import` in `style/style.css`.

## Deployment

- GitHub Pages, auto-deployed on push to `main` (two redundant workflows: `.github/workflows/deploy.yml` and `static.yml` — both upload the whole repo).
- Custom domain `idias.me` is set in `CNAME`. SEO artifacts (`robots.txt`, `sitemap.xml`, `canonical`, JSON-LD) reference `https://idias.me/`.

## Skills

- Repo-local skills under `.agents/skills/` for **seo**, **accessibility**, and **frontend-design**. Use them when doing SEO/a11y/design work.
