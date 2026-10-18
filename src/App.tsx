import { ButtonLink } from '@/components/ui/button'
import { Section } from '@/components/ui/section'
import { Nav, Footer, DOWNLOAD_URL, WINDOWS_DOWNLOAD_URL } from '@/site'
import {
  LayoutTemplate, Printer, ScanLine, ShieldCheck,
  WifiOff, UserX, EyeOff, HardDrive, Check, Boxes, ShoppingCart, Barcode,
  FileSpreadsheet, FileText, RefreshCw, Smartphone, CreditCard, MonitorSmartphone,
  PackagePlus, RotateCcw, Zap,
} from 'lucide-react'

const features = [
  { icon: LayoutTemplate, title: 'Eight polished templates',
    body: 'Classic, Modern Band, Minimal, Bold, Corporate, Elegant, Receipt and Label — tuned to your brand colour and logo.' },
  { icon: Boxes, title: 'Inventory & stock control',
    body: 'Keep products with SKUs, barcodes, categories and prices. Stock counts down automatically as you invoice, with low-stock alerts in the list.' },
  { icon: PackagePlus, title: 'Goods-in & delivery intake',
    body: 'Scan or type barcodes as deliveries arrive, or import supplier delivery notes (CSV) to tally counts and restock in one click.' },
  { icon: ShoppingCart, title: 'Built-in point of sale',
    body: 'Ring up a sale at the counter: add items, pick cash or card, print a receipt and generate the invoice — walk-in sales get their own numbering.' },
  { icon: RotateCcw, title: 'Smart credit notes & returns',
    body: 'Issue credit notes linked to sales with automatic inventory restocking — with a toggle to keep damaged or unsellable returns out of stock.' },
  { icon: Barcode, title: 'Barcode scanning',
    body: 'Use a USB scanner or your phone’s camera over your local network to add items to the cart or find a product instantly.' },
  { icon: FileSpreadsheet, title: 'Spreadsheet import & export',
    body: 'Load your whole catalogue from a CSV (with a ready-made template), and export inventory any time for audits or your accountant.' },
  { icon: Zap, title: 'High-volume performance',
    body: 'Instant checkout lookups and candidate numbering engineered and stress-tested with real 4,000+ item supermarket catalogues.' },
  { icon: ScanLine, title: 'Scan to template',
    body: 'Drop in an invoice you already use. Paperleaf reads it on your device and builds a matching template — layout, columns, colour and logo.' },
  { icon: Printer, title: 'Prints on anything',
    body: 'A4, A5, Letter, Legal, 4×6 labels, 62 mm label rolls, 80 mm and 58 mm receipt rolls, or your own size. Save formats and print your default in a tap.' },
  { icon: FileText, title: 'Client statements',
    body: 'Produce a running statement of invoices and payments for any client as a tidy PDF or CSV — perfect for chasing balances.' },
  { icon: ShieldCheck, title: 'Private by design',
    body: 'No account, no tracking, no servers of ours. Your data stays on your device — with compressed end-to-end encrypted backup.' },
]

const pos = [
  { icon: ShoppingCart, title: 'Fast counter sales',
    body: 'Type-ahead search or scan to build a cart, then turn it into an invoice in one tap.' },
  { icon: Barcode, title: 'Scan with what you have',
    body: 'A USB barcode scanner works out of the box, or point your phone’s camera at the item over your own Wi-Fi.' },
  { icon: PackagePlus, title: 'Fast Goods-In deliveries',
    body: 'Unpack deliveries and scan barcodes directly into active stock, or bulk import supplier delivery notes.' },
  { icon: CreditCard, title: 'Cash or card, your call',
    body: 'Pick the tender at checkout and print an 80 mm receipt for the customer.' },
  { icon: Boxes, title: 'Stock that stays honest',
    body: 'Issuing an invoice decrements stock; voiding or issuing a credit note restores it unless marked as damaged.' },
]

const templates = [
  ['classic', 'Classic'], ['modernBand', 'Modern Band'], ['minimal', 'Minimal'], ['bold', 'Bold'],
  ['corporate', 'Corporate'], ['elegant', 'Elegant'], ['receipt', 'Receipt'], ['label', 'Label'],
]

const papers = [
  ['A4 · A5 · Letter · Legal', 'Full-page invoices with automatic page breaks and page numbers.'],
  ['Label printers', '4×6 in shipping labels and 62 mm rolls, laid out like a shipping label.'],
  ['Receipt printers', '80 mm and 58 mm thermal rolls, cut exactly to the length of the receipt.'],
  ['Custom sizes', 'Any size from 40 mm to 1.2 m, fixed or continuous, portrait or landscape.'],
]

const faqs = [
  ['Do I need an account?', 'No. Open the app and start invoicing. There is nothing to sign up for.'],
  ['How do I receive incoming stock deliveries?', 'Go to Items › Receive Stock. Scan or type product SKUs/barcodes as you unpack, or click “Import Delivery Note…” to load a supplier’s delivery CSV. Counts sum automatically and update your live inventory in one click.'],
  ['What happens to stock when I issue a credit note?', 'When you create and issue a credit note, credited items are automatically put back into your tracked stock. If items were damaged, spoiled, or a service fee, simply toggle off “Return items to stock” so your physical counts stay true.'],
  ['Is there a Windows version?', 'Yes. Paperleaf runs on both macOS and Windows 10/11, and both open the same encrypted data file so you can move between them.'],
  ['How do my Mac and Windows stay in sync?', 'Through your own Google Drive, end-to-end encrypted. Your backup is compressed and encrypted on your device with a passphrase only you know before it ever leaves — Paperleaf has no servers and can’t read it. On a single Mac you can also use private iCloud sync instead.'],
  ['Can I import my product list?', 'Yes. Import a CSV of your inventory — there’s a downloadable template with the right columns, and re-importing an updated file updates items instead of duplicating them. You can export the catalogue any time for audits.'],
  ['Can I scan barcodes?', 'Yes. Use a USB barcode scanner, or your phone’s camera over your local network, to add items to the POS cart or look up a product by SKU.'],
  ['Windows says “Windows protected your PC” — is that safe?', 'That’s SmartScreen flagging the installer because it isn’t code-signed yet, not a problem with the app. Click “More info”, then “Run anyway”. A signed installer that removes the warning is on the way.'],
  ['Where is my data stored?', 'On your device, inside the app’s sandboxed storage. Paperleaf has no servers. If you turn on sync, your data is kept in your own iCloud or Google Drive, end-to-end encrypted — we can’t see it.'],
  ['Can I use my existing invoice design?', 'Yes. Scan or drop in a PDF or photo of an invoice you already use and Paperleaf creates a matching template you can fine-tune.'],
  ['Does Paperleaf file my taxes?', 'No. It keeps clean invoice records and exports CSV for your accountant or your own tools. It doesn’t give tax advice.'],
  ['Can I change an invoice after sending it?', 'Issued invoices are locked so your records stay trustworthy. To correct one, void it and issue a new invoice — Paperleaf duplicates it for you.'],
]

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-surface focus:px-3 focus:py-2">
        Skip to content
      </a>
      <div className="topstrip">
        <div className="topstrip-inner">
          <span>● &nbsp;PAPERLEAF — PRIVATE INVOICING, INVENTORY &amp; POS</span>
          <span className="topstrip-right">macOS · WINDOWS<span className="sep">/</span>NO ACCOUNT<span className="sep">/</span>ON-DEVICE</span>
        </div>
      </div>
      <Nav />
      <main id="main">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 sm:pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-leaf-soft px-3 py-1 text-xs font-medium text-leaf">
              <MonitorSmartphone className="h-3.5 w-3.5" aria-hidden /> Now on Mac and Windows · Private by design
            </p>
            <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
Invoicing, inventory and POS.<br className="hidden sm:block" /> <span className="title-highlight">Nothing to sign up for.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
              Paperleaf is a private invoicing app for Mac and Windows. Create a professional invoice in under a minute,
              receive supplier deliveries, track stock, ring up sales at the counter, and print on A4, Letter, a label or a receipt roll —
              no sign-up, no tracking, and optional end-to-end-encrypted sync you control.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={DOWNLOAD_URL}>Download for macOS</ButtonLink>
              <ButtonLink href={WINDOWS_DOWNLOAD_URL} variant="secondary">Download for Windows</ButtonLink>
            </div>
            <p className="mt-3 text-xs text-subtle">macOS 14 Sonoma or later (Apple silicon &amp; Intel) · Windows 10/11 (64-bit)</p>
          </div>
          <div className="mt-14 sm:mt-20">
            <img src="./renders/hero.jpg" alt="Paperleaf showing an invoice being edited beside a live print preview"
                 className="mx-auto w-full max-w-5xl rounded-2xl" width={2400} height={1500} />
          </div>
        </section>

        {/* Trust strip */}
        <div className="mx-auto mt-16 max-w-6xl px-4 sm:px-6">
          <ul className="grid grid-cols-2 gap-4 rounded-2xl border border-line bg-surface p-6 text-sm sm:grid-cols-4">
            {[[UserX, 'No account'], [EyeOff, 'No tracking'], [WifiOff, 'Works offline'], [HardDrive, 'Stored on your device']].map(([Icon, label]) => {
              const I = Icon as typeof UserX
              return (
                <li key={label as string} className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-leaf-soft text-leaf"><I className="h-4 w-4" aria-hidden /></span>
                  <span className="font-medium">{label as string}</span>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Features */}
        <Section id="features" eyebrow="Features" title="Everything you need to get paid. Nothing you don’t."
                 intro="Set up in a minute: tell Paperleaf what kind of business you run and it suggests templates, column names and fields that fit — then load your products from a spreadsheet and start selling.">
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, body }) => (
              <div key={title} className="bg-surface p-7">
                <Icon className="h-5 w-5 text-leaf" aria-hidden />
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Inventory & POS */}
        <div className="border-y border-line bg-surface">
          <Section id="pos" eyebrow="Inventory & POS" title="Sell from stock, not just on paper."
                   intro="Paperleaf is a point-of-sale and inventory system as well as an invoice app. Import your products once, then scan, sell and keep counts straight — all on the same private, offline app.">
            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {pos.map(({ icon: Icon, title, body }) => (
                <div key={title} className="bg-surface p-7">
                  <Icon className="h-5 w-5 text-leaf" aria-hidden />
                  <h3 className="mt-4 font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
                </div>
              ))}
            </div>
            <ul className="mt-12 grid gap-4 text-muted sm:grid-cols-2">
              {[
                'Import your catalogue from a CSV — a template with the right columns is one click away.',
                'Goods-In receiving: scan barcodes while unpacking or import supplier delivery notes.',
                'Type-ahead item search, so the right product is always a couple of keystrokes away.',
                'Scan barcodes with a USB scanner or your phone camera over your own network.',
                'Receipts on 80 mm rolls, with cash or card recorded against the sale.',
                'Stock decrements when you sell and restores on credit returns — no manual counting.',
                'Export inventory to CSV whenever you need a stocktake or an audit trail.',
                'Compact compressed backups (PLZ1) engineered for shops with thousands of transactions.',
              ].map((t) => (
                <li key={t} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-leaf" aria-hidden />{t}</li>
              ))}
            </ul>
          </Section>
        </div>

        {/* Templates */}
        <Section id="templates" eyebrow="Templates" title="Eight layouts. Your logo, your colour."
                 intro="Every template adapts to your header style — business name, logo, or both — and to every paper size. Customise any of them without touching a line of code.">
          <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {templates.map(([id, name]) => (
              <figure key={id} className="group">
                <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-sm transition group-hover:-translate-y-0.5 group-hover:shadow-md">
                  <img src={`./renders/templates/${id}.jpg`} alt={`${name} invoice template`} loading="lazy"
                       className="aspect-[1/1.414] w-full object-cover object-top" />
                </div>
                <figcaption className="mt-3 text-sm font-medium">{name}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
            <img src="./renders/fields.jpg" alt="Template editor with field toggles and a live preview" loading="lazy"
                 className="w-full rounded-2xl" />
            <ul className="space-y-4 text-muted">
              {['Turn any of 26 details on or off — due date, PO number, bank details, signature line…',
                'Rename columns to match your trade: Hours, Nights, Guests, Labour / parts.',
                'Add custom fields such as Check-in, Table or Vehicle reg.',
                'Tax essentials stay locked on while you’re registered, so invoices stay complete.'].map((t) => (
                <li key={t} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-leaf" aria-hidden />{t}</li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Printing */}
        <div className="border-y border-line bg-surface">
          <Section id="printing" eyebrow="Printing" title="From office printer to receipt roll."
                   intro="Save print formats once — paper, margins, orientation, printer, copies — and print in a tap. What you see in the preview is exactly what prints.">
            <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
              <img src="./renders/printing.jpg" alt="The same invoice on A4 paper, a shipping label and a receipt roll" loading="lazy"
                   className="w-full rounded-2xl" />
              <dl className="space-y-6">
                {papers.map(([t, d]) => (
                  <div key={t}>
                    <dt className="font-semibold">{t}</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-muted">{d}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Section>
        </div>

        {/* Scan */}
        <Section id="scan" eyebrow="Scan to template" title="Already have an invoice you like? Keep it."
                 intro="Drop in a PDF or a photo. Apple’s on-device text recognition finds the title, table columns, totals, colours and your logo, then Paperleaf builds a template to match. Nothing is uploaded.">
          <img src="./renders/scan.jpg" alt="A scanned invoice with detected text beside the template Paperleaf created" loading="lazy"
               className="mt-14 w-full rounded-2xl" />
        </Section>

        {/* Mac & Windows */}
        <div className="border-y border-line bg-surface">
          <Section id="platforms" eyebrow="Mac & Windows" title="One business, both platforms."
                   intro="Run Paperleaf on your Mac and your Windows PC, with the same invoices, clients and inventory on each. The bridge is your own storage — not ours.">
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {[[MonitorSmartphone, 'Mac and Windows', 'A native Mac app and a Windows 10/11 app that open the very same data file.'],
                [RefreshCw, 'Sync through your Drive', 'Changes flow between devices through your own Google Drive — keep-both conflict handling means nothing is ever silently lost.'],
                [ShieldCheck, 'End-to-end encrypted', 'Your backup is encrypted on-device with a passphrase only you know. We have no servers and can’t read it.']].map(([Icon, t, d]) => {
                const I = Icon as typeof RefreshCw
                return (
                  <div key={t as string} className="rounded-2xl border border-line bg-surface p-6">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-leaf-soft text-leaf"><I className="h-5 w-5" aria-hidden /></span>
                    <h3 className="mt-4 font-semibold">{t as string}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{d as string}</p>
                  </div>
                )
              })}
            </div>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={DOWNLOAD_URL}>Download for macOS</ButtonLink>
              <ButtonLink href={WINDOWS_DOWNLOAD_URL} variant="secondary">Download for Windows</ButtonLink>
            </div>
            <p className="mt-3 text-center text-xs text-subtle">
              <Smartphone className="mr-1 inline h-3.5 w-3.5 align-text-bottom" aria-hidden />
              Single-Mac users can sync through private iCloud instead — no Google account needed.
            </p>
            <p className="mx-auto mt-4 max-w-xl text-center text-xs text-subtle">
              <ShieldCheck className="mr-1 inline h-3.5 w-3.5 align-text-bottom" aria-hidden />
              The Windows installer isn’t code-signed yet, so Windows may show a “Windows protected your PC”
              screen on first launch — click <span className="font-medium text-muted">More info → Run anyway</span>.
            </p>
          </Section>
        </div>

        {/* Countries */}
        <Section id="tax" eyebrow="International" title="VAT, GST or sales tax — set up for you."
                 intro="Pick your country and Paperleaf fills in the currency, tax name, registration label and common rates. Every preset is editable.">
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <img src="./renders/tax.jpg" alt="An Indian GST tax invoice with CGST and SGST shown separately" loading="lazy"
                 className="w-full rounded-2xl" />
            <ul className="space-y-4 text-muted">
              {['Per-rate tax summaries with clear, consistent rounding.',
                'Split taxes like CGST + SGST, or IGST for inter-state sales.',
                '“Tax Invoice” titles where they’re customary, such as Australia and India.',
                'Any currency, with the right number of decimals — ¥, £, € or KWD.',
                'Sequential numbering with your own prefix. Numbers are never reused.',
                'CSV export of issued invoices and client statements for your accountant.'].map((t) => (
                <li key={t} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-leaf" aria-hidden />{t}</li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Privacy */}
        <div className="border-y border-line bg-surface">
          <Section id="privacy" eyebrow="Privacy" title="The most private invoicing app you can use."
                   intro="Your clients’ names, your prices and your bank details are nobody else’s business.">
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[['No account', 'There’s nothing to sign up for and no password to leak.'],
                ['Your storage, not ours', 'Optional sync uses your own iCloud or Google Drive, end-to-end encrypted. There are no Paperleaf servers to breach.'],
                ['No analytics', 'No trackers, no crash reporters, no ads. We collect nothing.'],
                ['Locked when you want', 'Optionally require Touch ID or your password to open the app.']].map(([t, d]) => (
                <div key={t} className="rounded-2xl border border-line bg-surface p-6">
                  <h3 className="font-semibold">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-sm text-muted">
              Read the full <a className="font-medium text-ink underline underline-offset-4" href="./privacy.html">privacy policy</a>.
            </p>
          </Section>
        </div>

        {/* FAQ */}
        <div className="border-t border-line bg-surface">
          <Section id="faq" eyebrow="FAQ" title="Questions, answered.">
            <div className="mt-10 divide-y divide-line border-y border-line">
              {faqs.map(([q, a]) => (
                <details key={q} className="group py-5">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 font-medium">
                    {q}
                    <span className="text-subtle transition group-open:rotate-45" aria-hidden>+</span>
                  </summary>
                  <p className="mt-2 max-w-3xl text-muted leading-relaxed">{a}</p>
                </details>
              ))}
            </div>
          </Section>
        </div>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">Send your next invoice in a minute.</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted">Private and offline, now on Mac and Windows.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href={DOWNLOAD_URL}>Download for macOS</ButtonLink>
            <ButtonLink href={WINDOWS_DOWNLOAD_URL} variant="secondary">Download for Windows</ButtonLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
