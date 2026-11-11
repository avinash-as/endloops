import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { Container } from './Container'
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
      <Container className="relative grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo tone="light" />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
            Endloops builds automation for accounting, audit and property finance teams. The software
            prepares the work; the professional reviews and decides.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white">
            <span className="h-2 w-2 rounded-full bg-green animate-pulse-soft" />
            Trusted automation partner for the GCC
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {[
              ['/solutions', 'End-to-end solutions'],
              ['/tools', 'Standalone tools'],
              ['/about', 'About Endloops'],
              ['/contact', 'Talk to us'],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="group inline-flex items-center gap-1 hover:text-white">
                  {label}
                  <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-teal" /> Dubai, United Arab Emirates</li>
            <li className="flex items-center gap-2"><Mail size={16} className="shrink-0 text-teal" /> hello@endloops.com</li>
            <li className="flex items-center gap-2"><Phone size={16} className="shrink-0 text-teal" /> +971 4 000 0000</li>
          </ul>
        </div>
      </Container>
      <Container className="relative flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Endloops. Built for finance teams who value judgement.</p>
        <p>Reliability first. Human sign-off always.</p>
      </Container>
    </footer>
  )
}
