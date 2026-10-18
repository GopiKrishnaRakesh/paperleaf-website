import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { Logo } from '@/components/ui/logo'
import { ButtonLink } from '@/components/ui/button'

export const DOWNLOAD_URL = './downloads/Paperleaf.dmg'
export const WINDOWS_DOWNLOAD_URL = './downloads/Paperleaf-Setup.exe'

// Light / Dark theme toggle (shared Mac Upgraded behaviour, key: mu-theme).
// The no-flash <script> in each page's <head> sets the initial data-theme.
function currentTheme(): 'light' | 'dark' {
  const forced = document.documentElement.getAttribute('data-theme')
  if (forced === 'light' || forced === 'dark') return forced
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    typeof document === 'undefined' ? 'light' : currentTheme(),
  )
  const toggle = () => {
    const next = currentTheme() === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    try { localStorage.setItem('mu-theme', next) } catch { /* ignore */ }
    setTheme(next)
  }
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      title="Toggle theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-ink hover:text-ink"
    >
      {theme === 'dark' ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
    </button>
  )
}

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6" aria-label="Main">
        <div className="flex items-center gap-3">
          <a href="../" className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper-deep px-3 py-1 text-xs font-semibold text-muted hover:border-ink hover:text-ink transition-colors" title="Back to Mac Upgraded Portfolio">
            ← Mac Upgraded
          </a>
          <a href="./index.html" className="flex items-center gap-2 font-semibold tracking-tight">
            <Logo /> Paperleaf
          </a>
        </div>
        <div className="hidden items-center gap-7 text-sm text-muted md:flex">
          <a className="hover:text-ink" href="./index.html#features">Features</a>
          <a className="hover:text-ink" href="./index.html#pos">Inventory &amp; POS</a>
          <a className="hover:text-ink" href="./index.html#templates">Templates</a>
          <a className="hover:text-ink" href="./index.html#platforms">Mac &amp; Windows</a>
          <a className="hover:text-ink" href="./index.html#privacy">Privacy</a>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink href={DOWNLOAD_URL} className="min-h-10 px-4">Download</ButtonLink>
        </div>
      </nav>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-2 text-ink">
          <Logo className="h-6 w-6" /> <span className="font-medium">Paperleaf</span>
          <span className="text-subtle">· Private invoicing for Mac &amp; Windows</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a className="hover:text-ink font-medium" href="../">← All Apps</a>
          <a className="hover:text-ink" href="./privacy.html">Privacy Policy</a>
          <a className="hover:text-ink" href="./terms.html">Terms of Service</a>
          <a className="hover:text-ink" href="./index.html#faq">FAQ</a>
          <a className="hover:text-ink text-leaf font-medium" href="mailto:contact@rakeshkode.co.uk">contact@rakeshkode.co.uk</a>
          <span>© 2026 Paperleaf</span>
        </div>
      </div>
      <p className="mx-auto max-w-6xl px-4 pb-10 text-xs text-subtle sm:px-6">
        Paperleaf helps you create invoices and keep tidy records. It does not give tax or legal advice —
        check tax rates and invoicing rules for your country with a qualified adviser. Part of the native software suite by <a href="../" className="underline font-medium hover:text-ink">Mac Upgraded</a>.
      </p>
    </footer>
  )
}
