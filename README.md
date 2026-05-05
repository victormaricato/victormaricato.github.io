# victormaricato.me

My personal site. Live at **https://victormaricato.me**.

Astro + Tailwind, static export, deployed to GitHub Pages on every push to `main`.

## Pages

| Path | What's there |
|------|--------------|
| `/` | Bio, news, profile photo, dog cameo |
| `/cv` | Experience timeline + education |
| `/publications` | Papers, sourced from `src/content/publications/` |
| `/projects` | Side projects |
| `/med` | The medical thread — biomedical AI, diagnostics, health systems |
| `/talks` | Talks and media |
| `/list-100` | 100-things-before-I-die list, shuffled on every build |

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve dist/
```

## Content

Markdown collections under `src/content/`, schemas in `src/content/config.ts`:

- `publications/` — `title`, `authors`, `venue`, `year`, optional `url` / `pdf`
- `experience/` — `role`, `company`, `start`, `end`, `order` (lower = newer)
- `projects/` — `name`, `url`, `blurb`, `status`
- `talks/` — `title`, `venue`, `date`, `url`

Adding a paper, job, project, or talk = drop a new markdown file with the right frontmatter. The pages re-render from the collection automatically.

## Live data

`/list-100` pulls the running read-count from my [Goodreads](https://www.goodreads.com/user/show/193343086-victor) RSS at build time. Push a new commit and the count refreshes. Letterboxd is linked but not yet read programmatically.

## Deploy

`.github/workflows/deploy.yml` runs on every push to `main`:

1. Astro build via `withastro/action@v3`
2. `actions/deploy-pages@v4` publishes to GitHub Pages
3. `public/CNAME` makes Pages serve at `victormaricato.me`

The Let's Encrypt cert auto-renews. Pages settings: `build_type=workflow`, `https_enforced=true`.

## Layout

```
src/
├── components/   # Nav, Footer
├── content/      # markdown collections + config.ts
├── layouts/      # Base.astro (HTML shell, fonts, meta)
├── pages/        # one .astro per route
└── styles/       # global.css (typography, dark mode)
public/
├── CNAME         # victormaricato.me
├── favicon.svg
└── images/       # profile + Toia
```

## Credits

`/list-100` inspired by [Chip Huyen's List 100](https://huyenchip.com/list-100/).
