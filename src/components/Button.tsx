import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

type Props = {
  variant?: Variant
  size?: Size
  to?: string
  href?: string
  className?: string
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-navy via-navy-soft to-blue text-white hover:shadow-glow shadow-soft border border-transparent',
  secondary:
    'bg-gradient-to-r from-green via-teal to-blue text-white hover:shadow-glow shadow-soft border border-transparent',
  ghost: 'bg-transparent text-navy hover:bg-surface border border-transparent',
  outline: 'bg-white/80 text-navy border border-line hover:border-teal hover:bg-white backdrop-blur',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-14 px-7 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  className,
  children,
  ...props
}: Props) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal disabled:opacity-60 disabled:pointer-events-none',
    variants[variant],
    sizes[size],
    className,
  )

  if (to) return <Link to={to} className={classes}>{children}</Link>
  if (href) return <a href={href} className={classes}>{children}</a>
  return <button className={classes} {...props}>{children}</button>
}
