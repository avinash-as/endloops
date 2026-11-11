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
    <div className={cn('rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-slate-300 hover:shadow-md', className)}>
      {children}
    </div>
  )
}
