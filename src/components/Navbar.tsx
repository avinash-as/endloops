import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Container } from './Container'
import { Logo } from './Logo'
import { Button } from './Button'
import { cn } from '../lib/cn'

const links = [
  { to: '/', label: 'Home' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/tools', label: 'Tools' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/85 backdrop-blur-xl">
      <Container className="flex h-[4.5rem] items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="Endloops home">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  isActive ? 'text-navy bg-surface' : 'text-muted hover:text-navy hover:bg-surface/70',
                )
              }
              end={l.to === '/'}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/contact" size="sm" variant="secondary">
            Request a demo
          </Button>
        </div>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-navy"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-line bg-white">
          <Container className="flex flex-col gap-1 py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'rounded-xl px-4 py-3 text-sm font-medium',
                    isActive ? 'bg-surface text-navy' : 'text-muted hover:bg-surface/70 hover:text-navy',
                  )
                }
                end={l.to === '/'}
              >
                {l.label}
              </NavLink>
            ))}
            <Button to="/contact" className="mt-2 w-full" variant="secondary" onClick={() => setOpen(false)}>
              Request a demo
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}
