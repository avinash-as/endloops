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
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-br from-purple/20 via-blue/15 to-teal/20 blur-3xl" />
        <Container className="relative">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-teal">About Endloops</p>
              <h1 className="text-balance text-5xl font-semibold leading-[0.98] text-navy sm:text-6xl">
                A technology department that became a <span className="text-gradient">company.</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                Endloops began inside Alkazim, an accounting and audit firm in Dubai. The software it built to
                automate financial work is now a company in its own right.
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
                eyebrow="Our story"
                title="Built by people who understand the work."
                description="Because Endloops grew out of an accounting and audit firm, its products are shaped by the people who actually do the work — not by assumptions about it."
              />
              <p className="mt-6 text-muted leading-relaxed">
                The technology department at Alkazim spent years automating financial work. That experience became
                Endloops: a company dedicated to building automation for accountants, auditors, finance teams and
                property management companies.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ['Accounting roots', 'Products shaped by real audit and finance practice.'],
                  ['Software craft', 'Engineering, design and quality built in-house.'],
                  ['Human in charge', 'Preparation is automated; sign-off stays with people.'],
                  ['GCC and beyond', 'Ambition to be the trusted automation partner in the region.'],
                ].map(([t, d]) => (
                  <Card key={t}>
                    <h3 className="font-semibold text-navy">{t}</h3>
                    <p className="mt-2 text-sm text-muted">{d}</p>
                  </Card>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our journey"
              title="From a technology department to a company."
              description="A short history of how Endloops came to be."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              ['2018', 'Automation begins', 'Alkazim’s technology department starts automating financial work.'],
              ['2022', 'Products take shape', 'Budget review and escrow audit tools are used in real engagements.'],
              ['2024', 'Endloops is born', 'The department becomes an independent company.'],
              ['2026', 'GCC and beyond', 'Engineering, design and quality capabilities expand.'],
            ].map(([year, title, text], i) => (
              <Reveal key={year} delay={i * 0.08}>
                <Card className="h-full">
                  <span className="text-sm font-bold text-teal">{year}</span>
                  <h3 className="mt-3 text-lg font-semibold text-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
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
              eyebrow="What we believe"
              title="Principles that shape every product."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: 'Trust first',
                text: 'Finance teams trust us with their data. Reliability and clarity come before novelty.',
              },
              {
                icon: Users,
                title: 'People decide',
                text: 'Software prepares; professionals review and approve. Final sign-off always stays human.',
              },
              {
                icon: Building2,
                title: 'Premium craft',
                text: 'Refined, confident and high quality — in keeping with the firms we serve.',
              },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <Card className="h-full text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green/15 via-teal/15 to-blue/15 text-teal">
                    <v.icon size={24} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-navy">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
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
                Growing engineering, design and quality to serve the GCC and beyond.
              </h2>
              <p className="mt-4 max-w-2xl text-white/75">
                Endloops is a young company with a clear ambition: to become the trusted automation partner for
                accounting, audit and property finance teams in the GCC region and beyond.
              </p>
              <div className="mt-8">
                <Button to="/contact" variant="secondary">
                  Talk to us <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
