import { ArrowRight, Building2, ShieldCheck, Users } from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'

export function About() {
  return (
    <>
      <section className="relative overflow-hidden pt-12 pb-24">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-br from-purple/20 via-blue/15 to-teal/20 blur-3xl" />
        <Container className="relative">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-teal">Our origin and purpose</p>
              <h1 className="text-balance text-5xl font-semibold leading-[0.98] text-navy sm:text-6xl">
                Built by practitioners who lived the <span className="text-gradient">manual grind.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                Endloops was born inside Alkazim, an accounting and audit firm based in Dubai. Having solved our own
                operational bottlenecks in statutory audits and financial reporting, we spun out the technology to
                empower the entire financial profession.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Who we are"
                title="From a Dubai audit firm's internal technology department to an independent automation company."
                description="Alkazim is an established accounting and audit firm based in Dubai. Over years of conducting statutory audits, corporate tax computations and real estate escrow reviews, its internal technology department built proprietary software to automate the tedious mechanical work that consumed its teams."
              />
              <p className="mt-6 text-muted leading-relaxed">
                That department has now evolved into Endloops, an independent technology company building software
                purpose-crafted for financial professionals: accountants, statutory auditors, corporate finance
                departments and property management companies.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                Our users operate in rigorous, high-stakes environments. Their work is deeply detailed, highly
                time-sensitive and legally binding. For them, reliability, mathematical precision and clarity matter as
                much as appearance.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <Card className="p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Headquartered in Dubai, UAE</p>
                <p className="mt-3 text-muted">Operating across the GCC region and international markets.</p>
                <div className="mt-6 rounded-2xl bg-surface p-5">
                  <p className="text-sm font-semibold text-navy">The foundational principle</p>
                  <p className="mt-3 text-lg font-medium text-navy">
                    “The software prepares the work, and the professional reviews and decides.”
                  </p>
                  <p className="mt-3 text-sm text-muted">
                    We take care of the repetitive, mechanical tasks and the final sign-off always stays with qualified
                    people.
                  </p>
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="The need we address"
              title="Freeing financial intellect from mechanical clerical drudgery."
              description="Much of a finance professional's day goes into tasks that software can handle with greater speed and fewer clerical errors."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ['Repetitive and time-consuming', 'Auditors and accountants spend hundreds of billable hours typing invoice figures into spreadsheets and re-casting footnote totals.'],
              ['Leaves room for costly errors', 'Fatigue leads to transposition errors, overlooked price escalations and missed statutory compliance thresholds under tight deadlines.'],
              ['Diverts attention from clients', 'Clerical mechanics steal time from substantive risk evaluation, fraud detection and high-value advisory for clients.'],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.08}>
                <Card className="h-full">
                  <span className="text-sm font-bold text-teal">0{i + 1}</span>
                  <h3 className="mt-3 text-lg font-semibold text-navy">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{d}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Where we are heading"
              title="The trusted automation partner for accounting, audit and property finance in the GCC and beyond."
              description="We are expanding our engineering, design and quality capabilities to shape how modern financial institutions operate."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              ['GCC regional leadership', 'Deep compliance with UAE Corporate Tax, FTA VAT, Saudi ZATCA e-invoicing standards and Dubai RERA Escrow requirements.'],
              ['Uncompromising standards', 'Adherence to International Standards on Auditing and IFRS frameworks so working papers withstand regulatory scrutiny.'],
              ['Regional data sovereignty', 'Hosting data within UAE and regional cloud regions with enterprise encryption and strict zero third-party model training.'],
              ['Growing world-class team', 'Recruiting elite product designers and full-stack engineers to build the next generation of financial intelligence software.'],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.08}>
                <Card className="h-full">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-green/15 via-teal/15 to-blue/15 text-teal">
                      {i === 0 ? <Building2 size={22} /> : i === 1 ? <ShieldCheck size={22} /> : i === 2 ? <Users size={22} /> : <Building2 size={22} />}
                    </div>
                    <h3 className="text-lg font-semibold text-navy">{t}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{d}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <div className="rounded-[2rem] bg-gradient-to-br from-navy via-navy-soft to-purple p-10 text-white shadow-soft sm:p-16">
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                Partner with Endloops for your firm's financial automation.
              </h2>
              <p className="mt-4 max-w-2xl text-white/75">
                Schedule a conversation with our leadership and engineering team in Dubai to see how Endloops can elevate
                your practice.
              </p>
              <div className="mt-8">
                <Button to="/contact" variant="secondary">
                  Connect with our team <ArrowRight size={16} />
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
