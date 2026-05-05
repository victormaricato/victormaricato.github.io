# victormaricato.github.io

Personal site, deployed to GitHub Pages.

Live at https://victormaricato.github.io/ (custom domain `victormaricato.me` pending).

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

Push to `main` → `.github/workflows/deploy.yml` builds and publishes to GitHub Pages.

## Custom domain

When `victormaricato.me` is registered, re-add `public/CNAME` with that hostname,
set DNS at the registrar, and configure the custom domain in Settings → Pages.

DNS records (Namecheap → Advanced DNS):

| Type  | Host  | Value                          |
|-------|-------|--------------------------------|
| A     | `@`   | `185.199.108.153`              |
| A     | `@`   | `185.199.109.153`              |
| A     | `@`   | `185.199.110.153`              |
| A     | `@`   | `185.199.111.153`              |
| CNAME | `www` | `victormaricato.github.io.`    |
