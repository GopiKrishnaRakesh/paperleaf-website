export function Logo({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect x="5" y="3" width="22" height="26" rx="4" fill="#0f172a" />
      <path d="M11 22c0-6 4-10 11-11-1 7-5 11-11 11Z" fill="#6ee7a8" />
      <path d="M11 22c3-3 5-5 8-8" stroke="#0f172a" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}
