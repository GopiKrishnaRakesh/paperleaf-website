import { Nav, Footer } from '@/site'
import type { ReactNode } from 'react'

// Keep in sync with docs/privacy-policy.md in the app repo.
const UPDATED = '30 September 2026'
const CONTACT = 'contact@rakeshkode.co.uk'

function H({ children }: { children: ReactNode }) {
  return <h2 className="mt-12 font-display text-xl font-semibold tracking-tight">{children}</h2>
}

export default function Privacy() {
  return (
    <>
      <Nav />
      <main id="main" className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm font-medium text-leaf">Privacy policy</p>
        <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight">Your data stays yours.</h1>
        <p className="mt-3 text-sm text-subtle">Last updated {UPDATED}</p>

        <div className="mt-8 space-y-4 text-[17px] leading-relaxed text-muted [&_strong]:text-ink [&_li]:pl-1">
          <p><strong>The short version:</strong> Paperleaf does not collect, sell or share any personal data.
            Everything you enter stays on your Mac — and, only if you turn on iCloud sync, in your own private
            iCloud account. We have no servers that receive your information and we can never see your data.</p>

          <H>Who we are</H>
          <p>Paperleaf (“we”) is an invoicing app for macOS. This policy covers the Paperleaf app and this website.
            Questions: <a className="text-ink underline underline-offset-4" href={`mailto:${CONTACT}`}>{CONTACT}</a>.</p>

          <H>What the app stores, and where</H>
          <p>To create invoices, you enter business details (name, address, contact details, tax and bank details,
            logo), client details, invoice lines, payments, templates and print settings. All of this is stored
            <strong> only on your Mac</strong>, inside the app’s sandboxed container. We cannot see it.</p>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>No other connections.</strong> The app runs in Apple’s App Sandbox. Its only network use is
              optional iCloud sync to your own private iCloud database.</li>
            <li><strong>Optional iCloud sync.</strong> Off by default. When you turn it on, your data is mirrored to the
              private iCloud database of the Apple ID your Mac is signed into, so it’s available on your other devices.
              It’s governed by Apple’s iCloud terms and encrypted by Apple in transit and at rest; we have no access to
              it. You can turn sync off at any time in Settings › iCloud Sync.</li>
            <li><strong>No analytics, tracking, advertising or crash-reporting SDKs.</strong> We don’t know who uses the
              app or how.</li>
            <li><strong>No account.</strong> There is nothing to sign up for.</li>
          </ul>

          <H>Features that touch your files or devices</H>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Scan invoice.</strong> Documents you choose are analysed on your Mac with Apple’s Vision
              framework. They are not uploaded. A small thumbnail is kept with a template you create from a scan.</li>
            <li><strong>Printing.</strong> Invoices are sent through macOS printing to the printer you choose.</li>
            <li><strong>Export.</strong> PDFs, images and CSV files are saved only where you choose.</li>
            <li><strong>Payment links.</strong> If you add a payment link, it is printed on your invoices as text.
              The app never opens or contacts it.</li>
            <li><strong>App lock.</strong> If you turn on Touch ID or password lock, macOS handles authentication.
              The app never receives your fingerprint or password.</li>
          </ul>

          <H>This website</H>
          <p>This site uses no cookies, no analytics and no third-party scripts, fonts or embeds. Like any website,
            the server that hosts it may briefly record technical request data (such as IP address and browser type)
            in its logs to keep the service running securely. We don’t use these logs to identify you.</p>

          <H>Your rights</H>
          <p>Because we don’t hold any personal data about you or your clients, there is nothing for us to access,
            correct or delete on our side. You are in full control: you can edit or export your data in the app, and
            deleting the app and its container removes it from your Mac. You are responsible for handling your
            clients’ personal data lawfully, for example under the UK GDPR or EU GDPR.</p>

          <H>Children</H>
          <p>Paperleaf is a business tool and is not directed at children.</p>

          <H>Future features</H>
          <p>New optional features will be off by default, and this policy will be updated before they ship.</p>

          <H>Changes to this policy</H>
          <p>We’ll update this page if anything changes and revise the date above.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
