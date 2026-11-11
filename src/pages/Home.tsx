import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Layers3, Wrench, Sparkles, ShieldCheck, FileText, GitCompare, PackageCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { solutions, tools } from '../data/products'

const capabilities = [
  { title: 'Read documents', text: 'Extract figures and details from invoices, purchase orders, contracts and statements.', icon: FileText },
  { title: 'Compare and match', text: 'Check documents against ledgers, or quotes against each other.', icon: GitCompare },
  { title: 'Check against rules', text: 'Flag missing items, mismatched totals, duplicates and out-of-limit values.', icon: ShieldCheck },
  { title: 'Prepare drafts', text: 'Produce schedules, working papers and reports ready for review.', icon: Layers3 },
  { title: 'Handle bulk work', text: 'Process hundreds of documents at once, without losing traceability.', icon: PackageCheck },
]

const demoTabs = [
  {
    id: 'extract',
    label: 'Extract',
    rows: [
      ['Supplier', 'Al Noor Supplies', 'Matched'],
      ['Invoice no.', 'INV-2418', 'Matched'],
      ['Total', 'AED 48,250.00', 'Checked'],
      ['PO reference', 'PO-2418', 'Verified'],
    ],
  },
  {
    id: 'match',
    label: 'Match',
    rows: [
      ['Invoice 001', 'AED 12,400', 'Matched'],
      ['Invoice 002', 'AED 8,920', 'Matched'],
      ['Invoice 003', 'AED 3,180', 'Variance'],
      ['Invoice 004', 'AED 14,750', 'Matched'],
    ],
  },
  {
    id: 'check',
    label: 'Check',
    rows: [
      ['Missing receipt', '3 items', 'Flagged'],
      ['Duplicate invoice', '1 found', 'Flagged'],
      ['Over limit', 'AED 2,100', 'Flagged'],
      ['Approved items', '41 of 44', 'Clear'],
    ],
  },
]

export function Home() {
  const [active, setActive] = useState(demoTabs[0].id)
  const tab = demoTabs.find((t) => t.id === active)!

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-24">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-br from-green/25 via-teal/20 to-blue/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-purple/20 blur-3xl animate-pulse-soft" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-green/20 blur-3xl animate-pulse-soft" />

        <Container className="relative">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal shadow-card backdrop-blur">
                <Sparkles size={14} />
                Automation for financial professionals
              </div>
              <h1 className="mt-8 text-balance text-5xl font-semibold leading-[0.98] text-navy sm:text-6xl lg:text-7xl">
                Finance work, <span className="text-gradient">prepared by software.</span>
                <br />
                Decisions, made by people.
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted">
                Endloops takes the repetitive, time-sensitive work out of accounting, audit and property
                finance — extraction, matching, checking and drafting — so professionals can spend their
                time on judgement, and on clients.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button to="/solutions" variant="secondary" size="lg">
                  Explore solutions <ArrowRight size={18} />
                </Button>
                <Button to="/contact" variant="outline" size="lg">
                  Talk to us
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Product mockup */}
          <Reveal delay={0.2}>
            <div className="relative mx-auto mt-20 max-w-5xl" style={{ perspective: '1400px' }}>
              <motion.div
                initial={{ rotateX: 18, opacity: 0, y: 40 }}
                animate={{ rotateX: 8, opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[2rem] border border-line bg-white/80 p-3 shadow-soft backdrop-blur"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-green" />
                  <span className="ml-4 text-xs font-medium text-muted">endloops.app / purchase-order-extraction</span>
                </div>
                <div className="grid gap-4 p-5 lg:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded-2xl bg-surface p-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
                        <Layers3 size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy">invoice_2418.pdf</p>
                        <p className="text-xs text-muted">12 line items detected</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      {[
                        ['Vendor', 'Al Noor Supplies'],
                        ['Invoice no.', 'INV-2418'],
                        ['Total', 'AED 48,250.00'],
                        ['PO match', 'PO-2418 · matched'],
                      ].map(([k, v]) => (
                        <div key={k} className="flex items-center justify-between rounded-xl bg-white px-3 py-2 text-sm">
                          <span className="text-muted">{k}</span>
                          <span className="font-medium text-navy">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="rounded-2xl bg-gradient-to-br from-green/10 to-teal/10 p-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-teal">Processing time</p>
                      <p className="mt-2 text-3xl font-bold text-navy">1.8s</p>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-blue/10 to-purple/10 p-5">
                      <p className="text-xs font-semibold uppercase tracking-wide text-blue">Accuracy</p>
                      <p className="mt-2 text-3xl font-bold text-navy">99.2%</p>
                    </div>
                    <motion.div
                      className="flex items-center gap-2 rounded-2xl border border-green/20 bg-green/5 px-4 py-3 text-sm font-medium text-green"
                      animate={{ opacity: [0.75, 1, 0.75] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <CheckCircle2 size={18} /> Ready for review
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[2.5rem] bg-gradient-to-br from-green/20 via-teal/10 to-purple/20 blur-3xl" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Trust strip */}
      <section className="border-y border-line bg-white/70 backdrop-blur">
        <Container className="flex flex-col items-center justify-between gap-6 py-6 sm:flex-row">
          <p className="text-sm font-medium text-muted">
            Built for accountants, auditors, finance teams and property management companies.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-navy">
            {['Traceable', 'Reviewable', 'Predictable', 'Human sign-off'].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-teal" />
                {t}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Bento capabilities */}
      <section className="py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What our technology can do"
              title="Five capabilities behind every product."
              description="The same building blocks, applied to different financial workflows."
            />
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-6">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <Card
                  className={`h-full ${
                    i === 0 ? 'md:col-span-3' : i === 1 ? 'md:col-span-3' : 'md:col-span-2'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green/15 via-teal/15 to-blue/15 text-teal">
                      <c.icon size={22} />
                    </div>
                    <h3 className="text-lg font-semibold text-navy">{c.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{c.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Offerings */}
      <section className="py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we build"
              title="Two kinds of products, one consistent approach."
              description="Complete services that run a whole process, and focused tools that solve one need and stand on their own."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <OfferingCard
                icon={Layers3}
                title="End-to-end solutions"
                copy="Complete software that runs an entire process or financial service from start to finish."
                items={solutions.map((s) => s.name)}
                to="/solutions"
                cta="See all solutions"
                gradient="from-green via-teal to-blue"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <OfferingCard
                icon={Wrench}
                title="Standalone tools"
                copy="Focused tools that solve one specific need and can be used on their own."
                items={tools.map((t) => t.name)}
                to="/tools"
                cta="See all tools"
                gradient="from-blue via-purple to-teal"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Interactive demo */}
      <section className="bg-surface py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="See it work"
                title="From a pile of documents to a reviewed schedule."
                description="Pick a capability and watch how Endloops turns unstructured documents into structured, checked output."
              />
              <div className="mt-8 flex flex-wrap gap-2">
                {demoTabs.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActive(t.id)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                      active === t.id
                        ? 'bg-navy text-white shadow-soft'
                        : 'bg-white text-muted hover:bg-line/60 hover:text-navy'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <p className="mt-6 text-muted leading-relaxed">
                Extract, match and check documents in one continuous flow.
              </p>
              <div className="mt-8">
                <Button to="/tools" variant="outline">
                  Explore standalone tools <ArrowRight size={16} />
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="p-6">
                <div className="flex items-center justify-between border-b border-line pb-4">
                  <p className="font-semibold text-navy">Extraction run</p>
                  <span className="rounded-full bg-green/10 px-3 py-1 text-xs font-semibold text-green">
                    {tab.rows.length} items
                  </span>
                </div>
                <div className="mt-5 space-y-3">
                  {tab.rows.map(([name, value, status], i) => (
                    <motion.div
                      key={name + value}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.35 }}
                      className="flex items-center justify-between rounded-2xl bg-surface px-4 py-3"
                    >
                      <div>
                        <p className="text-sm font-medium text-navy">{name}</p>
                        <p className="text-xs text-muted">{value}</p>
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                          status === 'Variance' || status === 'Flagged'
                            ? 'bg-purple/10 text-purple'
                            : 'bg-green/10 text-green'
                        }`}
                      >
                        {status}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-navy py-24 text-white">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-teal">How it works</p>
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Software does the preparation. People keep the judgement.
              </h2>
              <p className="mt-5 text-lg text-white/70 leading-relaxed">
                Every product follows the same rhythm: ingest, prepare, review, sign off.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              ['01', 'Ingest', 'Bring in documents, ledgers and prior work.'],
              ['02', 'Prepare', 'Extract, match, check and draft the working papers.'],
              ['03', 'Review', 'The professional inspects every figure and exception.'],
              ['04', 'Sign off', 'Final decisions and approval stay with people.'],
            ].map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 0.08}>
                <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white/10">
                  <span className="text-sm font-semibold text-teal">{n}</span>
                  <h3 className="mt-3 text-xl font-semibold">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Trust */}
      <section className="py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why teams trust us"
              title="Reliability and clarity matter as much as appearance."
              description="Finance work is detailed and time-sensitive. We build tools that are predictable, traceable and easy to review."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              ['Traceable', 'Every figure links back to the source document.'],
              ['Reviewable', 'Nothing is finalised until a professional approves it.'],
              ['Predictable', 'Consistent outputs, clear exceptions, no surprises.'],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.08}>
                <Card className="h-full">
                  <h3 className="text-xl font-semibold text-navy">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{d}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy via-navy-soft to-purple p-10 text-white shadow-soft sm:p-16">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-teal/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-green/20 blur-3xl" />
              <div className="relative max-w-2xl">
                <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                  Ready to take the repetitive work off your team's plate?
                </h2>
                <p className="mt-4 text-white/75">
                  Tell us about your process. We will show you where automation can help, and where a
                  human should stay in charge.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button to="/contact" variant="secondary" size="lg">
                    Request a demo <ArrowRight size={18} />
                  </Button>
                  <Button to="/solutions" variant="ghost" size="lg" className="text-white hover:bg-white/10">
                    Browse solutions
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}

function OfferingCard({
  icon: Icon,
  title,
  copy,
  items,
  to,
  cta,
  gradient,
}: {
  icon: typeof Layers3
  title: string
  copy: string
  items: string[]
  to: string
  cta: string
  gradient: string
}) {
  return (
    <Card className="group h-full overflow-hidden">
      <div className={`-mx-6 -mt-6 mb-6 h-2 bg-gradient-to-r ${gradient}`} />
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white">
          <Icon size={22} />
        </div>
        <h3 className="text-2xl font-semibold text-navy">{title}</h3>
      </div>
      <p className="mt-4 text-muted leading-relaxed">{copy}</p>
      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-slate">
            <CheckCircle2 size={15} className="shrink-0 text-teal" />
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link to={to} className="inline-flex items-center gap-2 text-sm font-semibold text-navy transition-colors group-hover:text-teal">
          {cta} <ArrowRight size={16} />
        </Link>
      </div>
    </Card>
  )
}
