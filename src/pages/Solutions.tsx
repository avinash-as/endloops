import { CheckCircle2 } from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { solutions } from '../data/products'

export function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="End-to-end solutions"
        title="Complete software for a complete financial service."
        description="Each solution runs a whole process from start to finish, with extraction, matching, checking and drafting working together inside it."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {solutions.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.06}>
                <Card className="h-full">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
                        <s.icon size={20} />
                      </div>
                      <h3 className="text-xl font-semibold text-navy">{s.name}</h3>
                    </div>
                    <StatusBadge status={s.status} />
                  </div>
                  <p className="mt-4 text-muted leading-relaxed">{s.description}</p>
                  <div className="mt-5 rounded-xl bg-surface px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-teal">Outcome</p>
                    <p className="mt-1 text-sm text-navy">{s.outcome}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How a solution runs"
              title="One workspace, one audit trail, one sign-off."
              description="Whether it is a budget review or an escrow audit, the rhythm is the same."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              ['Scope', 'Define the engagement, periods and materiality.'],
              ['Prepare', 'Ingest documents and draft working papers automatically.'],
              ['Review', 'Inspect exceptions, evidence and conclusions.'],
              ['Deliver', 'Finalise reports and archive the audit trail.'],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.08}>
                <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
                  <span className="text-sm font-semibold text-teal">0{i + 1}</span>
                  <h3 className="mt-3 text-lg font-semibold text-navy">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-line bg-white p-8 shadow-card sm:p-12">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <SectionHeading
                    eyebrow="Solutions and tools together"
                    title="Solutions are built from the same tools."
                    description="A solution orchestrates standalone tools into one process. You can adopt the whole service, or start with a single tool and grow."
                  />
                </div>
                <ul className="space-y-3">
                  {[
                    'Start with one tool and add more as your process matures.',
                    'Graduate to an end-to-end solution when you want one workspace.',
                    'Keep the same data, evidence and audit trail throughout.',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3 text-muted">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-teal" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to="/tools" variant="outline">Browse standalone tools</Button>
                <Button to="/contact" variant="secondary">Talk to us</Button>
              </div>
            </div>
          </Reveal>
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

function StatusBadge({ status }: { status?: string }) {
  const live = status === 'Live'
  return (
    <span
      className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
        live ? 'bg-green/10 text-green' : 'bg-purple/10 text-purple'
      }`}
    >
      {status}
    </span>
  )
}
