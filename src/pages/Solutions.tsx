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
      <section className="relative overflow-hidden pt-12 pb-24">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-green/20 via-teal/15 to-blue/20 blur-3xl" />
        <Container className="relative">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-teal">End-to-end solutions</p>
              <h1 className="text-balance text-5xl font-semibold leading-[0.98] text-navy sm:text-6xl">
                Complete software for a <span className="text-gradient">complete financial service.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                Each solution runs a whole process from start to finish, with extraction, matching, checking and
                drafting working together inside one workspace.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button to="/contact" variant="secondary" size="lg">
                  Request a demo
                </Button>
                <Button to="/tools" variant="outline" size="lg">
                  Browse standalone tools
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative mx-auto mt-16 max-w-5xl rounded-[2rem] border border-line bg-white/80 p-6 shadow-soft backdrop-blur">
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  ['Scope', 'Define the engagement, periods and materiality.'],
                  ['Prepare', 'Ingest documents and draft working papers automatically.'],
                  ['Deliver', 'Finalise reports and archive the audit trail.'],
                ].map(([t, d]) => (
                  <div key={t} className="rounded-2xl bg-surface p-5">
                    <p className="text-sm font-semibold text-navy">{t}</p>
                    <p className="mt-2 text-sm text-muted">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our solutions"
              title="Five services, one consistent experience."
              description="Each one is built from the same capabilities, tuned to a specific financial process."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {solutions.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.06}>
                <Card className="group h-full overflow-hidden">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green to-teal text-white">
                        <s.icon size={22} />
                      </div>
                      <h3 className="text-xl font-semibold text-navy">{s.name}</h3>
                    </div>
                    <StatusBadge status={s.status} />
                  </div>
                  <p className="mt-4 text-muted leading-relaxed">{s.description}</p>
                  <div className="mt-5 rounded-2xl bg-surface px-5 py-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-teal">Outcome</p>
                    <p className="mt-1 text-sm text-navy">{s.outcome}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How a solution runs"
              title="One workspace, one audit trail, one sign-off."
              description="Whether it is a budget review or an escrow audit, the rhythm is the same."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              ['01', 'Scope', 'Define the engagement, periods and materiality.'],
              ['02', 'Prepare', 'Ingest documents and draft working papers automatically.'],
              ['03', 'Review', 'Inspect exceptions, evidence and conclusions.'],
              ['04', 'Deliver', 'Finalise reports and archive the audit trail.'],
            ].map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 0.08}>
                <div className="group rounded-3xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft">
                  <span className="text-sm font-semibold text-teal">{n}</span>
                  <h3 className="mt-3 text-lg font-semibold text-navy">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <div className="rounded-[2rem] border border-line bg-white p-8 shadow-card sm:p-12">
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
