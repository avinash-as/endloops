import { ArrowRight, Building2, ShieldCheck, Users } from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'

export function About() {
  return (
    <>
      <PageHero
        eyebrow="About Endloops"
        title="A technology department that became a company."
        description="Endloops began inside Alkazim, an accounting and audit firm in Dubai. The software it built to automate financial work is now a company in its own right."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <SectionHeading
                eyebrow="Our story"
                title="Built by people who understand the work."
                description="Because Endloops grew out of an accounting and audit firm, its products are shaped by the people who actually do the work — not by assumptions about it."
              />
              <p className="mt-6 text-muted leading-relaxed">
                The technology department at Alkazim spent years automating financial work. That
                experience became Endloops: a company dedicated to building automation for accountants,
                auditors, finance teams and property management companies.
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

      <section className="bg-surface py-20">
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
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green/15 to-teal/15 text-teal">
                    <v.icon size={22} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-navy">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Where we are heading"
              title="Growing engineering, design and quality to serve the GCC and beyond."
              description="Endloops is a young company with a clear ambition: to become the trusted automation partner for accounting, audit and property finance teams in the GCC region and beyond."
            />
          </Reveal>
          <div className="mt-10">
            <Button to="/contact" variant="secondary">
              Talk to us <ArrowRight size={16} />
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
