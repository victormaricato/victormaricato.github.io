# victormaricato.me

Personal website. Astro + Tailwind, deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
npm run preview
```

## Content

Markdown collections under `src/content/`:

- `publications/` — papers (Scholar mirrors)
- `experience/` — CV timeline (`order` field controls position; lower = newer)
- `projects/` — side projects
- `talks/` — talks and media
- `blog/` — MDX posts (set `draft: true` to hide)
- `gallery/` — photo albums (deferred / not yet rendered)

## Deploy

`main` branch auto-deploys via GitHub Actions to GitHub Pages.
Custom domain `victormaricato.me` is configured via `public/CNAME`.

## Domain (one-time)

1. Claim Namecheap free `.me` from GitHub Student Pack.
2. In Namecheap → Advanced DNS, set 4 A records to GitHub Pages IPs:
   `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
3. Add CNAME `www` → `victormaricato.github.io`.
4. In repo Settings → Pages, set custom domain to `victormaricato.me` and enforce HTTPS.
