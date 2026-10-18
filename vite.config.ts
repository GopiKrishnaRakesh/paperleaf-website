import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

// Each page is built on its own as a classic (non-module) script, so the site works both on a
// web host and when index.html is opened straight from disk (file://), where browsers block
// ES modules. `npm run build` builds both pages; see scripts/build.mjs.
const page = process.env.PAGE ?? 'index'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',
  resolve: { alias: { '@': resolve(__dirname, 'src') } },
  build: {
    emptyOutDir: page === 'index',
    modulePreload: false,
    rollupOptions: {
      input: resolve(__dirname, `${page}.html`),
      output: {
        format: 'iife',
        entryFileNames: `assets/${page}.js`,
        assetFileNames: `assets/${page}-[name][extname]`,
      },
    },
  },
})
