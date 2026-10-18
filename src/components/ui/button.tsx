import { cn } from '@/lib/utils'
import type { AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const styles: Record<Variant, string> = {
  primary: 'bg-ink text-paper hover:bg-leaf hover:text-white shadow-sm',
  secondary: 'bg-surface text-ink ring-1 ring-line-strong hover:ring-ink',
  ghost: 'text-muted hover:text-ink',
}

export function ButtonLink({
  variant = 'primary', className, ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  return (
    <a
      className={cn(
        'inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-leaf',
        styles[variant], className)}
      {...props}
    />
  )
}
