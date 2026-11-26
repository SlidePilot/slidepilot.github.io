# slidepilotapp.com

The website of [SlidePilot](https://github.com/SlidePilot/SlidePilot-Universal), built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
```

## Structure

- `src/pages/[...lang]/` – pages; English at `/`, German at `/de/`, French at `/fr/`
- `src/i18n/{en,de,fr}.ts` – all UI texts
- `src/components/sections/` – the sections of the landing page
- `src/content/legal/` – imprint, privacy policy and terms (German version is binding)
- `src/assets/screens/` – app screenshots per language (`name-<lang>.png`, English is the fallback)
- `src/config.ts` – App Store, GitHub and PayPal links
- `public/donate.html` – redirect for the donate link used in older app versions
- `scripts/make-icons.mjs` – regenerates favicon, touch icon and social image (`node scripts/make-icons.mjs`)

## Deploy

Every push to `main` builds and deploys via `.github/workflows/deploy.yml`.
In the repository settings, set *Pages → Source* to **GitHub Actions** and the custom domain to `slidepilotapp.com`.
