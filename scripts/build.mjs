// Builds each page separately, then makes the HTML load plain (non-module) scripts.
import { execSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'

for (const page of ['index', 'privacy', 'terms']) {
  execSync('npx vite build', { stdio: 'inherit', env: { ...process.env, PAGE: page } })
  const file = `dist/${page}.html`
  const html = readFileSync(file, 'utf8')
    .replace(/<script type="module" crossorigin/g, '<script defer')
    .replace(/ crossorigin/g, '')
  writeFileSync(file, html)
}
