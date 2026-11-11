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
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-[1.12]">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p>}
    </div>
  )
}
