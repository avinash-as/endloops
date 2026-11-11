import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Container } from '../components/Container'

import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { solutionDetails } from '../data/details'

const categories = ['All', 'Audit & Assurance', 'Corporate Finance', 'Real Estate & Property']

export function Solutions() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? solutionDetails : solutionDetails.filter((s) => s.category === filter)

  return (
    <>
      <section className="relative overflow-hidden pt-12 pb-24">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-br from-green/20 via-teal/15 to-blue/20 blur-3xl" />
        <Container className="relative">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-teal">Enterprise product category A</p>
              <h1 className="text-balance text-5xl font-semibold leading-[0.98] text-navy sm:text-6xl">
                End-to-end <span className="text-gradient">financial solutions.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                Complete platforms designed to run entire multi-week financial processes from start to finish. Software
                prepares every lead schedule, trial balance cross-cast and vouching pack, keeping statutory sign-off with
                registered professionals.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-navy">
                <span className="rounded-full bg-surface px-4 py-2">5 comprehensive platforms</span>
                <span className="rounded-full bg-surface px-4 py-2">GCC statutory compliance pre-configured</span>
                <span className="rounded-full bg-surface px-4 py-2">Zero black-box hallucinations</span>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                    filter === c ? 'bg-navy text-white shadow-soft' : 'bg-surface text-muted hover:bg-line/60 hover:text-navy'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <Button to="/contact" variant="outline" size="sm">
              Custom solution architecture? Talk to us
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="space-y-20">
            {filtered.map((s, i) => (
              <Reveal key={s.name}>
                <div className="rounded-[2rem] border border-line bg-white p-8 shadow-card sm:p-12">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                        {s.category} · Solution #{i + 1}
                      </p>
                      <h2 className="mt-3 text-3xl font-semibold text-navy">{s.name} solution</h2>
                      <p className="mt-2 text-muted">{s.summary}</p>
                    </div>
                    <Button to={`/contact?solution=${encodeURIComponent(s.name + ' Solution')}`} variant="secondary" size="sm">
                      Request solution demo
                    </Button>
                  </div>

                  <div className="mt-8 grid gap-6 lg:grid-cols-2">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-navy">Target audience</h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {s.audience.map((a) => (
                          <span key={a} className="rounded-full bg-surface px-3 py-1 text-xs text-muted">
                            {a}
                          </span>
                        ))}
                      </div>
                      <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-navy">The problem it solves</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{s.problem}</p>
                      <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-navy">Statutory regulatory alignment</h3>
                      <ul className="mt-3 space-y-2 text-sm text-muted">
                        {s.regulatory.map((r) => (
                          <li key={r} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-teal" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-navy">Full platform overview</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{s.overview}</p>
                      <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-navy">Key system capabilities</h3>
                      <ul className="mt-3 space-y-2 text-sm text-muted">
                        {s.capabilities.map((c) => (
                          <li key={c} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-green" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wide text-navy">
                      Process workflow (software prepares ↔ professional reviews)
                    </h3>
                    <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                      {s.workflow.map((w, idx) => (
                        <div key={w.title} className="rounded-2xl bg-surface p-5">
                          <span className="text-xs font-bold text-teal">0{idx + 1}</span>
                          <h4 className="mt-2 text-sm font-semibold text-navy">{w.title}</h4>
                          <p className="mt-2 text-xs text-muted">
                            <span className="font-semibold text-navy">Software: </span>
                            {w.software}
                          </p>
                          <p className="mt-1 text-xs text-muted">
                            <span className="font-semibold text-navy">Human: </span>
                            {w.human}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {s.metrics.map((m) => (
                      <div key={m.label} className="rounded-2xl bg-navy p-5 text-white">
                        <p className="text-2xl font-bold">{m.value}</p>
                        <p className="mt-1 text-xs text-white/70">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3 text-xs text-muted">
                    <span className="rounded-full bg-surface px-3 py-1 font-semibold text-navy">Sample output</span>
                    {s.sampleOutput}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24">
        <Container>
          <Reveal>
            <div className="rounded-[2rem] bg-gradient-to-br from-navy via-navy-soft to-purple p-10 text-white shadow-soft sm:p-16">
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Need a tailored solution for your firm's audit or accounting workflow?
              </h2>
              <p className="mt-4 max-w-2xl text-white/75">
                Our engineering team configures custom working paper templates, chart of accounts mappings and regulatory
                rule sets to match your exact practice guidelines.
              </p>
              <div className="mt-8">
                <Button to="/contact" variant="secondary">
                  Schedule technical consultation <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <div className="rounded-[2rem] border border-line bg-white p-8 text-center shadow-card sm:p-12">
              <h2 className="text-3xl font-semibold text-navy">Software prepares the work. Financial professionals review and decide.</h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted">
                Endloops never acts as an unmonitored black-box. Automated extraction and rule validation feed directly
                into structured draft working papers, keeping final sign-off with registered accountants and auditors.
              </p>
              <div className="mt-8">
                <Button to="/contact" variant="secondary">
                  Schedule platform walkthrough
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
