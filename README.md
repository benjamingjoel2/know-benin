# Know Benin

Travel stories for people planning a trip to Benin. Published by Tourground.
Live at https://knowbenin.tourground.com (Vercel project `know-benin`).

- **Stack:** Astro 5, fully static. No client-side JavaScript apart from Vercel Web Analytics.
- **Posts:** `src/content/posts/*.md`. Frontmatter schema in `src/content.config.ts`.
  - `officialInfo: true` shows a "last checked" notice using `updatedDate`. Use it whenever a post states visa, health or safety facts, and link the official source inline.
  - `advisory:` shows a travel-advice warning at the top.
  - `sponsored: true` labels a post "Advertisement feature" everywhere it appears and marks its operator link `rel="sponsored"`.
  - `plan:` is the "Plan this trip" box. `sources:` is the cited list at the end.
  - Body photos: `![Alt text](photo:KEY)` on its own line becomes a credited figure.
- **Photos:** real Wikimedia Commons photos listed in `src/data/photos.json` with author and licence. They are served from our domain via Vercel Image Optimization (`/_vercel/image`, configured in `vercel.json`), so they don't render under `astro dev`/`preview` locally.
- **Site data:** categories, destinations and authors in `src/data/site.ts`.

```bash
npm install
npm run build
```
