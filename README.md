# Paperleaf — Official Website

Landing page, product showcase, and documentation website for **Paperleaf** — private invoicing, inventory, Goods-In intake, and point-of-sale for macOS and Windows.

## Tech Stack
- **Framework**: React 19 + TypeScript + Vite 8
- **Styling**: Tailwind CSS 4 + Lucide Icons
- **Design System**: Harmonious light/dark themes with zero-flash pre-paint loader
- **Downloads**: Includes native signed macOS (`.dmg`) and Windows (`.exe`) installers

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

Outputs static pre-rendered HTML/JS bundles to `dist/`.

## Automated Hosting

Pushing to `main` triggers the automated GitHub Pages deployment workflow (`.github/workflows/deploy.yml`).
