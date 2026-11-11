import { cn } from '../lib/cn'
import type { ReactNode } from 'react'

export function Card({
  className,
  children,
}: {
  className?: string
  children: ReactNode
}) {
  return (
    <div className={cn('rounded-3xl border border-line bg-white/90 p-6 shadow-card backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-teal/40 hover:shadow-soft', className)}>
      {children}
    </div>
  )
}
