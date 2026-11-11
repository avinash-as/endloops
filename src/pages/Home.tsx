import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Layers3,
  Sparkles,
  ShieldCheck,
  FileText,
  GitCompare,
  PackageCheck,
  FileSearch,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { solutions, tools } from '../data/products'

const capabilities = [
  { title: 'Read documents', text: 'Extract figures and metadata from invoices, purchase orders, contracts and statements, with Arabic and English support.', icon: FileText },
  { title: 'Compare and match', text: 'Check documents against ledgers, quotes against each other, and run strict 3-way matching.', icon: GitCompare },
  { title: 'Check against rules', text: 'Flag missing items, mismatched totals, duplicates and transactions outside agreed limits.', icon: ShieldCheck },
  { title: 'Prepare drafts', text: 'Produce schedules, working papers and reports ready for professional review.', icon: Layers3 },
  { title: 'Handle bulk work', text: 'Process hundreds of documents concurrently during month-end and audit closes.', icon: PackageCheck },
  { title: 'Trace every figure', text: 'Link every extracted value back to its source document and coordinates.', icon: FileSearch },
]

const demoPackets = ['Commercial HVAC', 'Dubai RERA', 'Statutory Financial']

const demoStages = [
  {
    id: 1,
    title: 'Document extraction',
    copy: 'Invoices, purchase orders and delivery notes are ingested and every field is extracted with coordinates.',
  },
  {
    id: 2,
    title: '3-way match and rules',
    copy: 'Quantities, rates and totals are compared across PO, GRN and invoice. Discrepancies are flagged.',
  },
  {
    id: 3,
    title: 'Draft working paper',
    copy: 'A structured schedule is prepared with variances, evidence links and audit references.',
  },
  {
    id: 4,
    title: 'Human sign-off',
    copy: 'The professional reviews exceptions, applies judgement and signs off the final paper.',
  },
]

const demoRows = [
  ['Chiller Compressors 25HP', 'AED 198,000.00 (45 pcs)', 'AED 184,800.00 (42 pcs)', 'AED 198,000.00 (45 pcs)', 'AED (13,200.00)'],
  ['Refrigerant R-410A Cylinders', 'AED 23,500.00 (15 pcs)', 'AED 23,500.00 (15 pcs)', 'AED 23,500.00 (15 pcs)', 'AED 0.00'],
  ['5% UAE VAT', 'AED 11,075.00', 'AED 10,415.00', 'AED 11,075.00', 'AED (660.00)'],
]

const workflow = [
  ['Multi-format intake', 'Upload PDFs, scans, Excel or ERP feeds. Files are validated and queued.'],
  ['Intelligent extraction', 'Extract line items, vendors, TRNs, currencies and totals with coordinate links.'],
  ['Comparison and validation', 'Run 3-way matching, ledger checks and statutory rule validation.'],
  ['Draft working paper', 'Generate schedules, variance bridges and vouching binders in audit formats.'],
  ['Professional sign-off', 'Review exceptions, apply judgement and seal the final paper.'],
]

const audiences = [
  {
    title: 'Accounting and bookkeeping firms',
    text: 'Scale client work without linear headcount growth. Automate data ingestion, categorisation and reconciliations.',
    features: ['Multi-client isolation', 'Export to Tally, QuickBooks and Xero', 'Automated expense working papers'],
  },
  {
    title: 'External and internal audit firms',
    text: 'Prepare working papers faster with traceable evidence and deterministic validation.',
    features: ['Vouching automation', 'Financial report review', 'Audit trail ready for ISA 500'],
  },
  {
    title: 'Corporate finance and FP&A teams',
    text: 'Review budgets, reconcile accounts and validate reports with less manual effort.',
    features: ['Budget review', 'Reconciliation', 'Variance analysis'],
  },
  {
    title: 'Property management and owners associations',
    text: 'Automate service charges, escrow audits and property budgets.',
    features: ['Escrow audit', 'Property budgeting', 'RERA compliance'],
  },
]

export function Home() {
  const [packet, setPacket] = useState(0)
  const [stage, setStage] = useState(1)
  const [docs, setDocs] = useState(1500)
  const [team, setTeam] = useState(6)

  const savedHours = Math.round((docs * 12) / 60)
  const annualValue = savedHours * 12 * 120
  const speedup = (savedHours / Math.max(team * 160, 1)).toFixed(1)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 pb-24">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[620px] w-[920px] -translate-x-1/2 rounded-full bg-gradient-to-br from-green/25 via-teal/20 to-blue/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-purple/20 blur-3xl animate-pulse-soft" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-green/20 blur-3xl animate-pulse-soft" />

        <Container className="relative">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal shadow-card backdrop-blur">
                <Sparkles size={14} />
                Born inside Alkazim Dubai
              </div>
              <h1 className="mt-8 text-balance text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.12]">
                Software prepares the work.
                <span className="block mt-2 bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Financial professionals review and decide.
                </span>
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted">
                Eliminate repetitive document extraction, 3-way vouching and working paper preparation. Endloops
                takes care of mechanical financial verification, keeping final judgement and statutory sign-off
                strictly in human hands.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button to="/contact" variant="secondary" size="lg">
                  Request a demo <ArrowRight size={18} />
                </Button>
                <Button to="/solutions" variant="outline" size="lg">
                  Explore end-to-end solutions
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['100% Traceable', 'Every figure links to source PDF coordinates'],
                ['Deterministic rules', 'Zero probabilistic hallucination or guesswork'],
                ['GCC ready', 'UAE Corporate Tax, FTA VAT and RERA Escrow'],
                ['Human sign-off', 'Draft schedules require professional seal'],
              ].map(([t, d]) => (
                <Card key={t} className="text-center">
                  <p className="text-sm font-semibold text-navy">{t}</p>
                  <p className="mt-2 text-xs text-muted">{d}</p>
                </Card>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Interactive demo */}
      <section className="bg-surface py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Interactive product demo"
              title="See how Endloops automates financial work."
              description="Explore a live multi-stage simulation. Inspect extracted fields, view automated 3-way matching, examine draft working papers and test human review sign-off."
              align="center"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="mt-12 overflow-hidden p-0">
              <div className="border-b border-line bg-navy px-6 py-4 text-white">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Endloops engine v2.4</p>
                    <p className="mt-1 text-sm">Active audit file: Al-Habtoor MEP Engineering LLC</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {demoPackets.map((p, i) => (
                      <button
                        key={p}
                        onClick={() => setPacket(i)}
                        className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                          packet === i ? 'bg-white text-navy' : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-0 lg:grid-cols-[260px_1fr]">
                <div className="border-b border-line bg-surface p-5 lg:border-b-0 lg:border-r">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Stages</p>
                  <div className="mt-4 space-y-2">
                    {demoStages.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setStage(s.id)}
                        className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all ${
                          stage === s.id ? 'bg-navy text-white shadow-soft' : 'bg-white text-navy hover:bg-line/40'
                        }`}
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-current/10 text-xs font-bold">
                          {s.id}
                        </span>
                        <span className="text-sm font-semibold">{s.title}</span>
                      </button>
                    ))}
                  </div>
                  <button className="mt-6 w-full rounded-2xl border border-line bg-white px-4 py-3 text-sm font-semibold text-navy hover:border-navy">
                    Re-run extraction
                  </button>
                </div>

                <div className="p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={stage}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.25 }}
                    >
                      <h3 className="text-xl font-semibold text-navy">{demoStages[stage - 1].title}</h3>
                      <p className="mt-2 text-sm text-muted">{demoStages[stage - 1].copy}</p>

                      {stage === 2 && (
                        <div className="mt-6">
                          <div className="rounded-2xl border border-purple/20 bg-purple/5 p-5">
                            <p className="text-sm font-semibold text-purple">Discrepancy</p>
                            <p className="mt-2 text-sm text-navy">
                              Invoice billed for 45 units of chiller compressors; GRN confirms only 42 accepted. 3 units
                              rejected at gate due to transit damage.
                            </p>
                            <p className="mt-2 text-xs text-muted">Impact: over-billing of AED 14,850.00 including VAT.</p>
                          </div>
                          <div className="mt-6 overflow-x-auto">
                            <table className="w-full min-w-[640px] text-sm">
                              <thead>
                                <tr className="border-b border-line text-left text-muted">
                                  <th className="py-3">Item</th>
                                  <th className="py-3">Purchase order</th>
                                  <th className="py-3">Goods received</th>
                                  <th className="py-3">Tax invoice</th>
                                  <th className="py-3">Variance</th>
                                </tr>
                              </thead>
                              <tbody>
                                {demoRows.map((row) => (
                                  <tr key={row[0]} className="border-b border-line/60">
                                    {row.map((cell, i) => (
                                      <td key={i} className="py-3 text-navy">
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {stage === 4 && (
                        <div className="mt-6 rounded-2xl border border-green/20 bg-green/5 p-5">
                          <p className="text-sm font-semibold text-green">Human sign-off required</p>
                          <p className="mt-2 text-sm text-navy">
                            The professional reviews exceptions, applies judgement and seals the working paper with an
                            immutable audit trail.
                          </p>
                          <Button className="mt-4" variant="secondary" size="sm">
                            Approve and sign off
                          </Button>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </Card>
          </Reveal>
        </Container>
      </section>

      {/* Core positioning */}
      <section className="py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Core brand positioning"
              title="Financial decisions demand human accountability."
              description="In statutory audits and financial reporting, errors carry legal liabilities. That is why Endloops rejects autonomous black-box AI in favour of deterministic automation with mandatory professional review."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Card className="h-full border-purple/20">
                <h3 className="text-xl font-semibold text-navy">The “fully autonomous AI” fallacy</h3>
                <p className="mt-3 text-sm text-muted">
                  Generic AI tools make probabilistic guesses without citing source evidence, hallucinate numbers and
                  claim to replace human accountants, creating compliance and audit exposure.
                </p>
                <ul className="mt-5 space-y-3 text-sm text-muted">
                  {[
                    'Black-box hallucinations with no source evidence',
                    'No verifiable audit trail back to source documents',
                    'Displaced responsibility for statutory sign-off',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple" />
                      {t}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="h-full border-green/20">
                <h3 className="text-xl font-semibold text-navy">Software prepares. Professionals decide.</h3>
                <p className="mt-3 text-sm text-muted">
                  Endloops executes high-volume mechanical legwork: ingesting documents, extracting fields,
                  cross-matching records and preparing draft working papers. Every finding requires professional
                  sign-off.
                </p>
                <ul className="mt-5 space-y-3 text-sm text-muted">
                  {[
                    '100% traceable citations to source documents',
                    'Deterministic financial logic with zero hallucination',
                    'Human review sign-off before finalisation',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green" />
                      {t}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Audit-ready documentation', 'Standard lead schedules and vouching binders'],
              ['Zero model training', 'Your data stays in isolated tenant containers'],
              ['GCC rules pre-built', 'UAE Corporate Tax, VAT and RERA Escrow'],
              ['Auditor-grade flags', 'Anomalies with materiality calculations'],
            ].map(([t, d]) => (
              <Card key={t} className="text-center">
                <p className="text-sm font-semibold text-navy">{t}</p>
                <p className="mt-2 text-xs text-muted">{d}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* End-to-end solutions */}
      <section className="bg-surface py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Product offering category A"
              title="End-to-end financial solutions."
              description="Complete platforms that run entire multi-week financial audit cycles and budgeting processes from ingestion to final sign-off."
            />
          </Reveal>
          <div className="mt-8">
            <Button to="/solutions" variant="outline">
              Explore all 5 solutions <ArrowRight size={16} />
            </Button>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.05}>
                <Card className="h-full">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-white">
                      <s.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">{s.name}</h3>
                      <p className="text-xs text-muted">{s.status}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{s.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <Card className="mt-12 p-8">
              <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Featured solution</p>
                  <h3 className="mt-3 text-2xl font-semibold text-navy">Budget review solution</h3>
                  <p className="mt-3 text-muted">
                    Automated historical variance detection and multi-entity budget reconciliation.
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {[
                      ['75%', 'Reduction in budget cycle duration'],
                      ['100%', 'Formula integrity and variance audit trail'],
                      ['0', 'Hidden unbudgeted line items missed'],
                    ].map(([n, l]) => (
                      <div key={l} className="rounded-2xl bg-surface p-4 text-center">
                        <p className="text-xl font-bold text-navy">{n}</p>
                        <p className="mt-1 text-xs text-muted">{l}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    ['Submission ingestion', 'Department heads upload budget sheets across cost centres.'],
                    ['Historical GL comparison', 'System compares proposals against trailing 3-year actuals.'],
                    ['Anomaly screening', 'Flags items breaching limits or sudden spikes.'],
                    ['Draft working schedule', 'Generates the executive budget pack with variance bridges.'],
                  ].map(([t, d]) => (
                    <div key={t} className="rounded-2xl bg-surface p-4">
                      <p className="text-sm font-semibold text-navy">{t}</p>
                      <p className="mt-1 text-xs text-muted">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </Reveal>
        </Container>
      </section>

      {/* Standalone tools */}
      <section className="py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Product offering category B"
              title="Standalone financial automation tools."
              description="Modular tools that solve a single acute financial friction point, deployable independently or integrated into existing stacks."
            />
          </Reveal>
          <div className="mt-8">
            <Button to="/tools" variant="outline">
              Explore tools directory <ArrowRight size={16} />
            </Button>
          </div>
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
                  <p className="mt-4 text-xs font-semibold text-teal">{t.outcome}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Live tool demo */}
      <section className="bg-surface py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Live tool demo"
                title="Purchase order extraction."
                description="High-precision line-item and header parsing from complex multi-page POs and contracts."
              />
              <div className="mt-6 space-y-3 text-sm text-muted">
                {[
                  'Bilingual Arabic and English OCR for GCC documentation',
                  'Automatic UAE TRN validation via checksum',
                  'Dynamic table detection across multi-page sheets',
                ].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-teal" />
                    {t}
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button to="/tools#po-extraction" variant="outline">
                  Full tool specification
                </Button>
                <Button to="/contact" variant="secondary">
                  Request tool access
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="p-6">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-navy">PO-2026-GulfCommercial-4921.pdf</p>
                  <span className="rounded-full bg-green/10 px-3 py-1 text-xs font-semibold text-green">Extracted</span>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    ['PO number', 'PO-4921'],
                    ['Vendor', 'Al-Futtaim Engineering LLC'],
                    ['Vendor TRN', '100234819200003'],
                    ['Subtotal', 'AED 141,190.48'],
                    ['VAT (5%)', 'AED 7,059.52'],
                    ['Total payable', 'AED 148,250.00'],
                  ].map(([k, v]) => (
                    <div key={k} className="rounded-2xl bg-surface px-4 py-3">
                      <p className="text-xs text-muted">{k}</p>
                      <p className="text-sm font-medium text-navy">{v}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 space-y-2">
                  {[
                    ['TRN valid format', 'Valid 15-digit UAE FTA tax registration number'],
                    ['Tax calculation match', '5% VAT matches subtotal within rounding limit'],
                    ['Approved vendor', 'Vendor active in master vendor database'],
                  ].map(([t, d]) => (
                    <div key={t} className="flex items-start gap-3 rounded-2xl bg-surface px-4 py-3">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green" />
                      <div>
                        <p className="text-sm font-semibold text-navy">{t}</p>
                        <p className="text-xs text-muted">{d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Workflow */}
      <section className="py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Workflow architecture"
              title="How Endloops automates financial work."
              description="From raw, messy client paperwork to certified audit schedules."
              align="center"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-5">
            {workflow.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.08}>
                <Card className="h-full text-center">
                  <span className="text-sm font-bold text-teal">0{i + 1}</span>
                  <h3 className="mt-3 text-base font-semibold text-navy">{t}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{d}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology capabilities */}
      <section className="bg-surface py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Core engineering"
              title="Technology capabilities engineered for precision."
              description="Built from the ground up for the demands of high-stakes financial verification."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <Card className="h-full">
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

      {/* Audiences */}
      <section className="py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Target audience"
              title="Who Endloops serves."
              description="Tailored automation workflows built for the distinct operational pressures of modern financial institutions."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <Card className="h-full">
                  <h3 className="text-xl font-semibold text-navy">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{a.text}</p>
                  <ul className="mt-5 space-y-2">
                    {a.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate">
                        <CheckCircle2 size={15} className="text-teal" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Calculator */}
      <section className="bg-surface py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Efficiency estimation"
              title="Estimate your practice's time saved."
              description="See how much manual document processing, vouching and schedule drafting your team can recover each month."
              align="center"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="mx-auto mt-12 max-w-4xl p-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-semibold text-navy">
                    Monthly financial documents: {docs.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min={200}
                    max={10000}
                    step={100}
                    value={docs}
                    onChange={(e) => setDocs(Number(e.target.value))}
                    className="mt-4 w-full accent-teal"
                  />
                  <label className="mt-8 block text-sm font-semibold text-navy">
                    Finance / audit team size: {team}
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={50}
                    value={team}
                    onChange={(e) => setTeam(Number(e.target.value))}
                    className="mt-4 w-full accent-teal"
                  />
                  <p className="mt-6 text-xs text-muted">
                    Estimates based on conservative GCC benchmarks: 12 minutes saved per 3-way matched document.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="rounded-2xl bg-navy p-6 text-white">
                    <p className="text-xs uppercase tracking-[0.2em] text-teal">Estimated monthly recovery</p>
                    <p className="mt-2 text-4xl font-bold">{savedHours} hours</p>
                    <p className="mt-2 text-sm text-white/70">
                      Equivalent to {(savedHours / 160).toFixed(1)} full-time professionals freed from clerical tasks.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-surface p-4 text-center">
                      <p className="text-xs text-muted">Est. annual value</p>
                      <p className="mt-1 text-lg font-bold text-navy">AED {annualValue.toLocaleString()}</p>
                    </div>
                    <div className="rounded-2xl bg-surface p-4 text-center">
                      <p className="text-xs text-muted">Cycle speedup</p>
                      <p className="mt-1 text-lg font-bold text-navy">{speedup}x faster</p>
                    </div>
                  </div>
                  <Button to="/contact" variant="secondary">
                    Book a guided PoC with your files
                  </Button>
                </div>
              </div>
            </Card>
          </Reveal>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy via-navy-soft to-purple p-10 text-white shadow-soft sm:p-16">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-teal/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-green/20 blur-3xl" />
              <div className="relative max-w-2xl">
                <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                  Automate the mechanical work. Keep final review firmly in your hands.
                </h2>
                <p className="mt-4 text-white/75">
                  Join leading accounting firms, statutory auditors and property finance teams across Dubai, Riyadh
                  and the GCC who rely on Endloops for precision automation.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button to="/contact" variant="secondary" size="lg">
                    Schedule a 30-minute demo <ArrowRight size={18} />
                  </Button>
                  <Button to="/solutions" variant="ghost" size="lg" className="text-white hover:bg-white/10">
                    View solutions and use cases
                  </Button>
                </div>
                <p className="mt-6 text-xs text-white/60">
                  No credit card required · Pilot with your sample documents · UAE data residency compliant
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
