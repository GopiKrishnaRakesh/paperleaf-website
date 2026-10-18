import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export function Section({ id, eyebrow, title, intro, children, className }: {
  id?: string; eyebrow?: string; title: string; intro?: ReactNode; children?: ReactNode; className?: string
}) {
  return (
    <section id={id} className={cn('mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28', className)}>
      <div className="max-w-2xl">
        {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
      </div>
      {children}
    </section>
  )
}
