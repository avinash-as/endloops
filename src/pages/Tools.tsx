import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { tools } from '../data/products'

export function Tools() {
  const [selected, setSelected] = useState(tools[0])

  return (
    <>
      <PageHero
        eyebrow="Standalone tools"
        title="Focused tools. Each one useful on its own."
        description="Every tool solves one specific need and can be adopted without changing the rest of your process. Mix and match as you grow."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal>
              <div className="space-y-2">
                {tools.map((t) => (
                  <button
                    key={t.name}
                    onClick={() => setSelected(t)}
                    className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-4 text-left transition-all ${
                      selected.name === t.name
                        ? 'border-navy bg-navy text-white shadow-soft'
                        : 'border-line bg-white text-navy hover:border-navy/40 hover:bg-surface'
                    }`}
                    aria-pressed={selected.name === t.name}
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                        selected.name === t.name ? 'bg-white/15 text-white' : 'bg-surface text-navy'
                      }`}
                    >
                      <t.icon size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold">{t.name}</p>
                      <p className={`truncate text-xs ${selected.name === t.name ? 'text-white/70' : 'text-muted'}`}>
                        {t.outcome}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-line bg-white p-8 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green to-teal text-white">
                    <selected.icon size={22} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-navy">{selected.name}</h2>
                    <p className="text-sm text-muted">{selected.status}</p>
                  </div>
                </div>
                <p className="mt-6 text-lg leading-relaxed text-muted">{selected.description}</p>
                <div className="mt-6 rounded-xl bg-surface px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-teal">Outcome</p>
                  <p className="mt-1 text-navy">{selected.outcome}</p>
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[
                    'Works on its own',
                    'No change to your wider process',
                    'Output ready for review',
                    'Evidence linked to source',
                  ].map((t) => (
                    <div key={t} className="flex items-center gap-2 text-sm text-slate">
                      <CheckCircle2 size={16} className="text-green" />
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="How one tool works"
                title="Purchase-order extraction, end to end."
                description="A single tool, walking from raw documents to a reviewed schedule."
              />
              <ol className="mt-8 space-y-4">
                {[
                  'Upload invoices and purchase orders.',
                  'Extract supplier, totals, line items and references.',
                  'Match against the purchase order and ledger.',
                  'Flag mismatches, duplicates and missing items.',
                  'Hand over a schedule ready for review.',
                ].map((step, i) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
                      {i + 1}
                    </span>
                    <span className="pt-1 text-muted">{step}</span>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={0.1}>
              <ExtractionVisual />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="All standalone tools"
              title="Six tools, ready to use on their own."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.05}>
                <Card className="h-full">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface text-navy">
                      <t.icon size={18} />
                    </div>
                    <h3 className="font-semibold text-navy">{t.name}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{t.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/contact" variant="secondary" size="lg">
              Request a demo <ArrowRight size={18} />
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

function PageHero({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden bg-radial">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
      <Container className="relative py-20 lg:py-24">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-teal">{eyebrow}</p>
          <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-tight text-navy sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
        </Reveal>
      </Container>
    </section>
  )
}

function ExtractionVisual() {
  const rows = [
    ['Invoice 001', 'AED 12,400', 'Matched'],
    ['Invoice 002', 'AED 8,920', 'Matched'],
    ['Invoice 003', 'AED 3,180', 'Variance'],
    ['Invoice 004', 'AED 14,750', 'Matched'],
  ]
  return (
    <div className="rounded-3xl border border-line bg-white p-6 shadow-soft">
      <div className="flex items-center justify-between">
        <p className="font-semibold text-navy">Extraction run</p>
        <span className="rounded-full bg-green/10 px-3 py-1 text-xs font-semibold text-green">4 documents</span>
      </div>
      <div className="mt-5 space-y-3">
        {rows.map(([name, amount, status]) => (
          <div key={name} className="flex items-center justify-between rounded-xl bg-surface px-4 py-3">
            <div>
              <p className="text-sm font-medium text-navy">{name}</p>
              <p className="text-xs text-muted">{amount}</p>
            </div>
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                status === 'Matched' ? 'bg-green/10 text-green' : 'bg-purple/10 text-purple'
              }`}
            >
              {status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
