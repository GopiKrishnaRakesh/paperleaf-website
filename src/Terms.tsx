import { Nav, Footer } from '@/site'
import type { ReactNode } from 'react'

const UPDATED = '30 September 2026'
const CONTACT = 'contact@rakeshkode.co.uk'

function H({ children }: { children: ReactNode }) {
  return <h2 className="mt-12 font-display text-xl font-semibold tracking-tight">{children}</h2>
}

export default function Terms() {
  return (
    <>
      <Nav />
      <main id="main" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm font-medium text-leaf">Legal</p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">Terms of Service</h1>
        <p className="mt-3 text-sm text-subtle">Last updated {UPDATED}</p>

        <div className="mt-8 space-y-4 text-[17px] leading-relaxed text-muted [&_strong]:text-ink [&_li]:pl-1">
          <p>These terms govern your use of Paperleaf, the native invoicing application for macOS developed by Rakesh Kode.</p>

          <H>1. License &amp; Usage</H>
          <p>By downloading, installing, or using Paperleaf, you agree to be bound by these terms. Paperleaf grants you a non-exclusive, non-transferable personal and commercial license to create, manage, print, and export invoices on your personal or business Macs.</p>

          <H>2. 100% On-Device Data &amp; Your Responsibility</H>
          <p>Paperleaf operates strictly on your Mac. All client data, invoice lines, tax records, company details, and templates are stored locally in your sandboxed application container or, optionally, in your private Apple iCloud container. We have no access to your data. You are solely responsible for keeping appropriate backups of your invoices and records.</p>

          <H>3. Disclaimer of Warranties</H>
          <p>Paperleaf is provided "as is", without warranty of any kind, express or implied. While we strive to ensure accurate invoice calculations, template layouts, and PDF generation, you are responsible for ensuring that all tax calculations, VAT/GST rates, and invoice line items comply with local laws and fiscal regulations.</p>

          <H>4. Limitation of Liability</H>
          <p>To the maximum extent permitted by applicable law, in no event shall the developer be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use Paperleaf.</p>

          <H>5. Contact</H>
          <p>For questions or support regarding Paperleaf, email <a className="text-ink underline underline-offset-4" href={`mailto:${CONTACT}`}>{CONTACT}</a>.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
