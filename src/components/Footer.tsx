import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { Container } from './Container'
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'

const solutions = [
  'Budget Review',
  'Escrow Audit',
  'Financial Audit',
  'Interim Audit',
  'Property Management Budgeting',
]

const tools = [
  'Purchase Order Extraction',
  'Vouching Automation',
  'Expense Working Automation',
  'Financial Report Review',
  'Tender Verification',
  'Reconciliation Automation',
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
      <Container className="relative grid gap-10 py-16 md:grid-cols-4">
        <div>
          <Logo tone="light" />
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Originating inside Alkazim in Dubai, Endloops builds intelligent financial automation purpose-crafted for
            accountants, statutory auditors and property management finance teams across the GCC.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-teal" /> Alkazim Building, Sheikh Zayed Road, Dubai, UAE</li>
            <li className="flex items-center gap-2"><Mail size={16} className="shrink-0 text-teal" /> contact@endloops.com</li>
            <li className="flex items-center gap-2"><Phone size={16} className="shrink-0 text-teal" /> +971 4 000 0000</li>
          </ul>
          <p className="mt-6 text-xs text-white/50">Enterprise UAE data residency · Zero public AI training</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">End-to-end solutions</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {solutions.map((s) => (
              <li key={s}>
                <Link to="/solutions" className="group inline-flex items-center gap-1 hover:text-white">
                  {s}
                  <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Standalone tools</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {tools.map((t) => (
              <li key={t}>
                <Link to="/tools" className="group inline-flex items-center gap-1 hover:text-white">
                  {t}
                  <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-white">Company and standards</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {[
              ['About Endloops', '/about'],
              ['Born inside Alkazim', '/about'],
              ['Human-in-the-loop ethics', '/about'],
              ['GCC regulatory alignment', '/solutions'],
              ['Request a demo', '/contact'],
            ].map(([label, to]) => (
              <li key={label}>
                <Link to={to} className="group inline-flex items-center gap-1 hover:text-white">
                  {label}
                  <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
      <Container className="relative flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Endloops Technologies FZ-LLC. All rights reserved. · Dubai, United Arab Emirates</p>
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full border border-white/15 px-3 py-1">Audit engine v2.4 (enterprise)</span>
          <span className="rounded-full border border-white/15 px-3 py-1">SOC 2 type II alignment</span>
          <span className="rounded-full border border-white/15 px-3 py-1">ISA 500 audit trail ready</span>
        </div>
      </Container>
    </footer>
  )
}
