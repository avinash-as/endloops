import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { Container } from './Container'
import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            Endloops builds automation for accounting, audit and property finance teams. The software
            prepares the work; the professional reviews and decides.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-navy">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li><Link to="/solutions" className="hover:text-navy">End-to-end solutions</Link></li>
            <li><Link to="/tools" className="hover:text-navy">Standalone tools</Link></li>
            <li><Link to="/about" className="hover:text-navy">About Endloops</Link></li>
            <li><Link to="/contact" className="hover:text-navy">Talk to us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-navy">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0" /> Dubai, United Arab Emirates</li>
            <li className="flex items-center gap-2"><Mail size={16} className="shrink-0" /> hello@endloops.com</li>
            <li className="flex items-center gap-2"><Phone size={16} className="shrink-0" /> +971 4 000 0000</li>
          </ul>
        </div>
      </Container>
      <Container className="flex flex-col gap-3 border-t border-line py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Endloops. Built for finance teams who value judgement.</p>
        <p>Reliability first. Human sign-off always.</p>
      </Container>
    </footer>
  )
}
