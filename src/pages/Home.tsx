import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Layers3, Wrench } from 'lucide-react'
import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { solutions, tools, capabilities } from '../data/products'

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-radial">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
        <Container className="relative grid items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <Reveal>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-teal">
              Automation for financial professionals
            </p>
            <h1 className="text-balance text-4xl font-semibold leading-[1.05] text-navy sm:text-5xl lg:text-6xl">
              The software prepares the work. You review and decide.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Endloops takes the repetitive, time-sensitive work out of accounting, audit and property
              finance — extraction, matching, checking and drafting — so professionals can spend their
              time on judgement and on clients.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/solutions" variant="secondary" size="lg">
                Explore solutions <ArrowRight size={18} />
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Talk to us
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green" /> Accountants and auditors
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green" /> Finance and property teams
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-green" /> Built in Dubai, for the GCC
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <ProcessingVisual />
          </Reveal>
        </Container>
      </section>

      {/* Problem */}
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="The need we address"
                title="Too much of a finance professional's day is spent on work software can handle."
                description="It is repetitive and time-consuming, leaves room for error, and pulls attention away from judgement and from clients."
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
      <section className="bg-surface py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What we build"
              title="Two kinds of products, one consistent approach."
              description="Complete services that run a whole process, and focused tools that solve one need and stand on their own."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <OfferingCard
                icon={Layers3}
                title="End-to-end solutions"
                copy="Complete software that runs an entire process or financial service from start to finish — budget review, escrow audit, financial audit, interim audit and property budgeting."
                items={solutions.map((s) => s.name)}
                to="/solutions"
                cta="See all solutions"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <OfferingCard
                icon={Wrench}
                title="Standalone tools"
                copy="Focused tools that solve one specific need and can be used on their own — extraction, vouching, expense workings, report review, tender verification and reconciliation."
                items={tools.map((t) => t.name)}
                to="/tools"
                cta="See all tools"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What our technology can do"
              title="Five capabilities behind every product."
              description="The same building blocks, applied to different financial workflows."
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <Card className="h-full text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green/15 to-teal/15 text-teal">
                    <c.icon size={22} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-navy">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-navy py-20 text-white">
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
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              ['01', 'Ingest', 'Bring in documents, ledgers and prior work.'],
              ['02', 'Prepare', 'Extract, match, check and draft the working papers.'],
              ['03', 'Review', 'The professional inspects every figure and exception.'],
              ['04', 'Sign off', 'Final decisions and approval stay with people.'],
            ].map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <span className="text-sm font-semibold text-teal">{n}</span>
                  <h3 className="mt-3 text-xl font-semibold">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Visual demo */}
      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="See one tool work"
                title="From a pile of invoices to a matched, reviewed schedule."
                description="Purchase-order extraction turns unstructured documents into structured data, then checks them against the purchase order and flags exceptions."
              />
              <div className="mt-8">
                <Button to="/tools" variant="outline">
                  Explore standalone tools <ArrowRight size={16} />
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <ExtractionDemo />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Trust */}
      <section className="bg-surface py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why teams trust us"
              title="Reliability and clarity matter as much as appearance."
              description="Finance work is detailed and time-sensitive. We build tools that are predictable, traceable and easy to review."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ['Traceable', 'Every figure links back to the source document.'],
              ['Reviewable', 'Nothing is finalised until a professional approves it.'],
              ['Predictable', 'Consistent outputs, clear exceptions, no surprises.'],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.08}>
                <Card>
                  <h3 className="text-xl font-semibold text-navy">{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{d}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy-soft to-purple p-10 text-white shadow-soft sm:p-14">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-teal/30 blur-3xl" />
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
                    Request a demo
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
}: {
  icon: typeof Layers3
  title: string
  copy: string
  items: string[]
  to: string
  cta: string
}) {
  return (
    <Card className="h-full">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
          <Icon size={20} />
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
        <Link to={to} className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-teal">
          {cta} <ArrowRight size={16} />
        </Link>
      </div>
    </Card>
  )
}

function ProcessingVisual() {
  return (
    <motion.div
      className="relative mx-auto w-full max-w-md"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-green/20 via-teal/10 to-purple/20 blur-2xl" />
      <div className="relative rounded-3xl border border-line bg-white p-6 shadow-soft">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-navy">Purchase order extraction</span>
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
              <div key={k} className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-sm">
                <span className="text-muted">{k}</span>
                <span className="font-medium text-navy">{v}</span>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          className="mt-5 flex items-center gap-2 rounded-xl border border-green/20 bg-green/5 px-4 py-3 text-sm font-medium text-green"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <CheckCircle2 size={18} /> Ready for review
        </motion.div>
      </div>
    </motion.div>
  )
}

function ExtractionDemo() {
  const rows = [
    { field: 'Supplier', value: 'Al Noor Supplies', status: 'Matched' },
    { field: 'Invoice number', value: 'INV-2418', status: 'Matched' },
    { field: 'Invoice date', value: '12 Nov 2026', status: 'Matched' },
    { field: 'Line items', value: '12 items · AED 48,250', status: 'Checked' },
    { field: 'PO reference', value: 'PO-2418', status: 'Verified' },
    { field: 'Variance', value: 'None', status: 'Clear' },
  ]
  return (
    <div className="rounded-3xl border border-line bg-white p-6 shadow-soft">
      <div className="flex items-center justify-between border-b border-line pb-4">
        <div>
          <p className="text-sm font-semibold text-navy">invoice_2418.pdf</p>
          <p className="text-xs text-muted">Extracted and matched against PO-2418</p>
        </div>
        <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold text-teal">Processing complete</span>
      </div>
      <div className="mt-5 space-y-3">
        {rows.map((r, i) => (
          <motion.div
            key={r.field}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="flex items-center justify-between rounded-xl bg-surface px-4 py-3"
          >
            <div>
              <p className="text-xs text-muted">{r.field}</p>
              <p className="text-sm font-medium text-navy">{r.value}</p>
            </div>
            <span className="rounded-full bg-green/10 px-2.5 py-1 text-xs font-semibold text-green">{r.status}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
