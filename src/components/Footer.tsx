import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { Container } from './Container'
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <Container className="relative grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            Endloops builds automation for accounting, audit and property finance teams. The software
            prepares the work; the professional reviews and decides.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-xs font-semibold text-navy">
            <span className="h-2 w-2 rounded-full bg-green animate-pulse-soft" />
            Trusted automation partner for the GCC
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-navy">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {[
              ['/solutions', 'End-to-end solutions'],
              ['/tools', 'Standalone tools'],
              ['/about', 'About Endloops'],
              ['/contact', 'Talk to us'],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="group inline-flex items-center gap-1 hover:text-navy">
                  {label}
                  <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-navy">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-teal" /> Dubai, United Arab Emirates</li>
            <li className="flex items-center gap-2"><Mail size={16} className="shrink-0 text-teal" /> hello@endloops.com</li>
            <li className="flex items-center gap-2"><Phone size={16} className="shrink-0 text-teal" /> +971 4 000 0000</li>
          </ul>
        </div>
      </Container>
      <Container className="relative flex flex-col gap-3 border-t border-line py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Endloops. Built for finance teams who value judgement.</p>
        <p>Reliability first. Human sign-off always.</p>
      </Container>
    </footer>
  )
}
