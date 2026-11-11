import { cn } from '../lib/cn'
import type { ReactNode } from 'react'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div className={cn(align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl', className)}>
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-teal">{eyebrow}</p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy leading-tight">{title}</h2>
      {description && <p className="mt-5 text-lg text-muted leading-relaxed">{description}</p>}
    </div>
  )
}
