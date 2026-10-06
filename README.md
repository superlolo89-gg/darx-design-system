# DarX Design System

A GitHub-ready brand and interface system, sourced from the two supplied DarX PDFs. No Claude plugin, runtime framework or external build dependency.

## Start

Requires Node.js 20 or later.

```sh
npm run check
npm run serve
```

Open http://localhost:4173. Alternatively open dist/index.html directly; the generated Design Bible is self-contained. Use its search, theme control, copyable tokens and fit-score specimen.

## Source of truth

Edit brand/*.md for guidelines; src/brand.json and terminology.json for structured facts; tokens/*.json for values; components/index.js for reusable behavior; src/style.css and app.js for the specimen. `npm run build` generates CSS variables and dist/index.html. Both PDFs and page-numbered text are retained in reference/.

v0.1.0 is a working implementation pending brand decisions. Read docs/decisions.md before adopting it. Exact HEX values are grounded in the Visual Identity guide. Font allocation is provisional. Spacing and radii are implementation proposals. Font binaries and production vector logos were not supplied. The logo is a reference crop; demo scores are fictional.

## Use in another project

Import `createFitScore` from components/index.js and load generated `dist/tokens.css` plus `src/components.css`. Pass name, score, confidence, nonempty criteria/reasons/tradeOffs. See examples/product.html and components/index.d.ts. Components use safe textContent, not untrusted HTML.

## Checks

`npm run check` builds and tests tokens, semantic references, contrast of demo text pairs, generated source integration, fit-score validation, and prohibited claims in structured brand copy. CI runs the same command. It does not certify full browser accessibility, fonts, visual regression or every brand claim.

## GitHub

Create an empty repository, then from this folder:

```sh
git init
git add .
git commit -m "Add DarX design system"
git branch -M main
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

GitHub Pages: choose GitHub Actions under Settings → Pages. Run the manual Pages workflow after the repository is ready. This package has not been pushed or publicly published.

Brand assets remain proprietary. Source code licensing is pending owner decision; no open-source grant is implied.
