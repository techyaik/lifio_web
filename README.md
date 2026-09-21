# lifio.app

The official website for **Lifio**, your private daily check-in (Android). It explains what the app does, keeps the privacy policy and terms the app and the store listing link to, and shows the roadmap. It is not a web version of the app.

## Run

```sh
npm install
npm run dev        # http://localhost:4321
npm run check      # type-check (astro check), then a production build into dist/
npm run preview    # serve dist/
```

Node 22.12 or later.

## Pages

| Path | What |
| --- | --- |
| `/` | Home: hero with the real Today screen, how it works, app screenshots, features in 1.0, privacy promises, roadmap teaser, questions |
| `/roadmap` | What's in 1.0, next (1.1 Money & Meds), planned (1.2 Body) and later ideas. No dates |
| `/privacy` | Privacy policy (the URL the app and Google Play use). `/privacy-policy` redirects here |
| `/terms` | Terms of use |
| `/contact` | Support |

## Where things live

- `src/config/site.ts` holds the facts pages repeat: support email, developer, the Google Play link (`null` shows "Coming soon") and the date the legal pages last changed.
- `src/data/` holds the content: `features.ts` (shipped behaviour only), `roadmap.ts` (planned work), `promises.ts`, `faq.ts`.
- `src/styles/global.css` holds the design tokens, the same values as the app's theme (`lifio-app/src/design-system/theme/themes.ts`): white page, grey cards, near-black ink, the sky hero gradient, no shadows, light and dark. Each token is `light-dark(light, dark)`; the header's Light · Dark · System switch sets `data-theme` on the root, and a saved choice is applied before the first paint.
- `src/components/icons/icon-glyphs.ts` maps the site's icon names to Phosphor, the app's icon set.
- `src/components/brand/brand-mark.astro` and `public/favicon.svg` draw the app icon, Habit Steps, from the same geometry as `lifio-app/scripts/generate-icons.py`.

Figtree is downloaded at build time and served from the site, so visitors never contact a font service. The site sets no cookies and has no analytics; keep it that way (the privacy policy says so).

## Images

`public/favicon-32.png`, `public/apple-touch-icon.png` and the social card `public/og-image.png` are generated:

```sh
npm run build && python3 scripts/generate-images.py   # needs Pillow
```

## Screenshots

`src/assets/screens/*.png` are real screenshots of the app (listed in `src/data/screens.ts`); Astro turns them into WebP at build time. To retake one with a phone on USB:

```sh
adb exec-out screencap -p > shot.png
```

Then crop off the phone's status bar and navigation buttons (on a 1080 × 2160 phone: keep y 72–2016) and replace the file under the same name.

## Keeping it honest

When the app changes, update `src/data/features.ts` and move items on `src/data/roadmap.ts`. Only shipped behaviour goes in features. When the privacy behaviour changes, update `/privacy` and `legalUpdatedOn` in `site.ts` first.
