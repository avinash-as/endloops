import { cn } from '../lib/cn'

type LogoProps = {
  className?: string
  markOnly?: boolean
  tone?: 'dark' | 'light'
}

export function Logo({ className, markOnly = false, tone = 'dark' }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)} aria-label="Endloops">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="loopA" x1="6" y1="8" x2="26" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#12b76a" />
            <stop offset="1" stopColor="#0ea5a4" />
          </linearGradient>
          <linearGradient id="loopB" x1="14" y1="8" x2="34" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2563eb" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        <path
          d="M12 20c0-5.5 4-10 9-10 2.6 0 4.8 1 6.4 2.7"
          stroke="url(#loopA)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M28 20c0 5.5-4 10-9 10-2.6 0-4.8-1-6.4-2.7"
          stroke="url(#loopA)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M20 12c5.5 0 10 4 10 9 0 2.6-1 4.8-2.7 6.4"
          stroke="url(#loopB)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M20 28c-5.5 0-10-4-10-9 0-2.6 1-4.8 2.7-6.4"
          stroke="url(#loopB)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <circle cx="20" cy="20" r="2.4" fill={tone === 'light' ? '#ffffff' : '#0b1f3a'} />
      </svg>
      {!markOnly && (
        <span className={`text-lg font-semibold tracking-tight ${tone === 'light' ? 'text-white' : 'text-navy'}`}>
          End<span className="text-teal">loops</span>
        </span>
      )}
    </span>
  )
}
