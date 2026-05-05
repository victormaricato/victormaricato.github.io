# victormaricato.github.io

Personal site, live at **https://victormaricato.me**.

## Stack

Astro + Tailwind. Static export. No JS at runtime.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve dist/
```

## Content

Markdown lives under `src/content/`, typed by `src/content/config.ts`:

- `publications/` — papers
- `experience/` — CV entries (`order` controls position; lower = newer)
- `projects/` — side projects
- `talks/` — talks and media

Pages under `src/pages/` consume those collections directly. To add a publication, drop a markdown file with the right frontmatter.

## Deploy

Push to `main` → `.github/workflows/deploy.yml` builds and publishes to GitHub Pages. Custom domain is wired via `public/CNAME`.
