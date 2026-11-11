import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Container } from '../components/Container'

import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { toolDetails } from '../data/details'

const categories = ['All', 'Extraction & OCR', 'Verification & Matching', 'Accounting Schedules']

export function Tools() {
  const [filter, setFilter] = useState('All')
  const [activeTool, setActiveTool] = useState(toolDetails[0].name)
  const filtered = filter === 'All' ? toolDetails : toolDetails.filter((t) => t.category === filter)

  return (
    <>
      <section className="relative overflow-hidden pt-12 pb-24">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue/20 via-purple/15 to-teal/20 blur-3xl" />
        <Container className="relative">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-teal">Enterprise product category B</p>
              <h1 className="text-balance text-5xl font-semibold leading-[0.98] text-navy sm:text-6xl">
                Standalone financial <span className="text-gradient">automation tools.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                Focused, modular utilities designed to solve a single acute financial friction point. Deploy them
                individually into your existing audit toolkit, or connect via API directly to your ERP and general
                ledger systems.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-navy">
                <span className="rounded-full bg-surface px-4 py-2">6 purpose-built standalone tools</span>
                <span className="rounded-full bg-surface px-4 py-2">Zero black-box AI hallucinations</span>
                <span className="rounded-full bg-surface px-4 py-2">ERP and Excel interoperable</span>
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
              Need API integration? Talk to our architects
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="space-y-20">
            {filtered.map((t) => (
              <Reveal key={t.name}>
                <div className="rounded-[2rem] border border-line bg-white p-8 shadow-card sm:p-12">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                        {t.category} · Tool
                      </p>
                      <h2 className="mt-3 text-3xl font-semibold text-navy">{t.name}</h2>
                      <p className="mt-2 text-muted">{t.summary}</p>
                    </div>
                    <div className="flex flex-col items-start gap-3 lg:items-end">
                      <span className="rounded-full bg-green/10 px-4 py-2 text-sm font-semibold text-green">{t.metric}</span>
                      <Button to={`/contact?tool=${encodeURIComponent(t.name)}`} variant="secondary" size="sm">
                        Request tool access
                      </Button>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-6 lg:grid-cols-2">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-navy">Core functionality</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{t.core}</p>
                      <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-navy">Key capabilities and controls</h3>
                      <ul className="mt-3 space-y-2 text-sm text-muted">
                        {t.capabilities.map((c) => (
                          <li key={c} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-green" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-navy">Supported input ingestion formats</h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {t.inputs.map((i) => (
                            <span key={i} className="rounded-full bg-surface px-3 py-1 text-xs text-muted">
                              {i}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-navy">Export and output destinations</h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {t.outputs.map((o) => (
                            <span key={o} className="rounded-full bg-surface px-3 py-1 text-xs text-muted">
                              {o}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-muted">
                        <span className="font-semibold text-navy">Audit trail guarantee: </span>
                        Every extracted line item links to its source coordinate bounding box for click-through validation.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 rounded-2xl border border-line bg-surface p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-navy">Interactive preview</h3>
                      <button
                        onClick={() => setActiveTool(t.name)}
                        className="rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white"
                      >
                        Load preview
                      </button>
                    </div>
                    {activeTool === t.name && (
                      <div className="mt-5 grid gap-6 lg:grid-cols-2">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted">Extracted key-values</p>
                          <div className="mt-3 space-y-2">
                            {t.preview.map(([k, v]) => (
                              <div key={k} className="flex items-center justify-between rounded-xl bg-white px-4 py-2 text-sm">
                                <span className="text-muted">{k}</span>
                                <span className="font-medium text-navy">{v}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted">Rule validation engine</p>
                          <div className="mt-3 space-y-2">
                            {t.rules.map((r) => (
                              <div
                                key={r.title}
                                className={`rounded-xl px-4 py-3 text-sm ${
                                  r.status === 'pass' ? 'bg-green/5' : 'bg-purple/5'
                                }`}
                              >
                                <p className={`font-semibold ${r.status === 'pass' ? 'text-green' : 'text-purple'}`}>
                                  {r.title}
                                </p>
                                <p className="mt-1 text-xs text-muted">{r.text}</p>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 rounded-xl bg-white px-4 py-3 text-xs text-muted">
                            <span className="font-semibold text-navy">Generated draft output: </span>
                            {t.draft}
                          </div>
                        </div>
                      </div>
                    )}
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
                Want to test one of these tools with your actual documents?
              </h2>
              <p className="mt-4 max-w-2xl text-white/75">
                We will run a confidential sample batch of your invoices, POs or bank statements through our extraction
                engine and present the structured working papers.
              </p>
              <div className="mt-8">
                <Button to="/contact" variant="secondary">
                  Schedule file test run <ArrowRight size={16} />
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
