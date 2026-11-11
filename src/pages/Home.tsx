import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Layers3, Wrench, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { solutions, tools, capabilities } from '../data/products'

const tabs = [
  {
    id: 'extract',
    label: 'Extract',
    title: 'Pull every figure out of unstructured documents.',
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
    title: 'Match documents against ledgers and purchase orders.',
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
    title: 'Flag missing items, duplicates and out-of-limit values.',
    rows: [
      ['Missing receipt', '3 items', 'Flagged'],
      ['Duplicate invoice', '1 found', 'Flagged'],
      ['Over limit', 'AED 2,100', 'Flagged'],
      ['Approved items', '41 of 44', 'Clear'],
    ],
  },
]

export function Home() {
  const [active, setActive] = useState(tabs[0].id)
  const tab = tabs.find((t) => t.id === active)!

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-green/20 blur-3xl animate-pulse-soft" />
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-blue/15 blur-3xl animate-pulse-soft" />
        <div className="pointer-events-none absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-purple/15 blur-3xl animate-pulse-soft" />

        <Container className="relative grid items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal shadow-card backdrop-blur">
              <Sparkles size={14} />
              Automation for financial professionals
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.02] text-navy sm:text-5xl lg:text-6xl">
              Finance work, <span className="text-gradient">prepared by software.</span>
              <br />
              Decisions, made by people.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Endloops takes the repetitive, time-sensitive work out of accounting, audit and property
              finance — extraction, matching, checking and drafting — so professionals can spend their
              time on judgement, and on clients.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/solutions" variant="secondary" size="lg">
                Explore solutions <ArrowRight size={18} />
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Talk to us
              </Button>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              {[
                ['5', 'end-to-end solutions'],
                ['6', 'standalone tools'],
                ['100s', 'documents at once'],
              ].map(([n, l]) => (
                <div key={l} className="rounded-2xl border border-line bg-white/70 p-4 backdrop-blur">
                  <p className="text-2xl font-bold text-navy">{n}</p>
                  <p className="mt-1 text-xs text-muted">{l}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <HeroPreview />
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

      {/* Problem */}
      <section className="py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="The need we address"
                title="Too much of a finance professional's day goes to work software can handle."
                description="It is repetitive and time-sensitive, leaves room for error, and pulls attention away from judgement and from clients."
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ['Repetitive', 'The same extraction, matching and checking, repeated across hundreds of documents.'],
                  ['Time-sensitive', 'Deadlines do not move, even when the volume does.'],
                  ['Error-prone', 'Manual work leaves room for missed items and mismatched totals.'],
                  ['Distracting', 'It takes attention away from the judgement only people can provide.'],
                ].map(([title, text]) => (
                  <Card key={title} className="h-full">
                    <h3 className="text-lg font-semibold text-navy">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                  </Card>
                ))}
              </div>
            </Reveal>
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

      {/* Capabilities */}
      <section className="bg-surface py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What our technology can do"
              title="Five capabilities behind every product."
              description="The same building blocks, applied to different financial workflows."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <Card className="h-full text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green/15 via-teal/15 to-blue/15 text-teal">
                    <c.icon size={24} />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-navy">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Interactive demo */}
      <section className="py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="See it work"
                title="From a pile of documents to a reviewed schedule."
                description="Pick a capability and watch how Endloops turns unstructured documents into structured, checked output."
              />
              <div className="mt-8 flex flex-wrap gap-2">
                {tabs.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActive(t.id)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                      active === t.id
                        ? 'bg-navy text-white shadow-soft'
                        : 'bg-surface text-muted hover:bg-line/60 hover:text-navy'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              <p className="mt-6 text-muted leading-relaxed">{tab.title}</p>
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

function HeroPreview() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-md"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-green/25 via-teal/15 to-purple/25 blur-2xl animate-pulse-soft" />
      <div className="relative rounded-[2rem] border border-line bg-white/90 p-6 shadow-soft backdrop-blur">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
              <Layers3 size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-navy">Purchase order extraction</p>
              <p className="text-xs text-muted">Live · 12 documents</p>
            </div>
          </div>
          <span className="rounded-full bg-green/10 px-3 py-1 text-xs font-semibold text-green">Live</span>
        </div>
        <div className="mt-5 rounded-2xl bg-surface p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-white">
              <Layers3 size={18} />
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
        <motion.div
          className="mt-5 flex items-center gap-2 rounded-2xl border border-green/20 bg-green/5 px-4 py-3 text-sm font-medium text-green"
          animate={{ opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <CheckCircle2 size={18} /> Ready for review
        </motion.div>
        <div className="absolute -right-4 top-10 rounded-2xl border border-line bg-white px-4 py-3 shadow-card animate-float">
          <p className="text-xs text-muted">Processing time</p>
          <p className="text-lg font-bold text-navy">1.8s</p>
        </div>
        <div className="absolute -left-4 bottom-16 rounded-2xl border border-line bg-white px-4 py-3 shadow-card animate-float" style={{ animationDelay: '1.5s' }}>
          <p className="text-xs text-muted">Accuracy</p>
          <p className="text-lg font-bold text-navy">99.2%</p>
        </div>
      </div>
    </motion.div>
  )
}
