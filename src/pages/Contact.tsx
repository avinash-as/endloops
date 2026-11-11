import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeading } from '../components/SectionHeading'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { Reveal } from '../components/Reveal'
import { Accordion } from '../components/Accordion'
import { faq } from '../data/faq'

type FormState = {
  name: string
  company: string
  email: string
  phone: string
  interest: string
  message: string
}

type Errors = Partial<Record<keyof FormState, string>>

const initial: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  interest: 'Demo request',
  message: '',
}

export function Contact() {
  const [form, setForm] = useState<FormState>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }))
    setErrors((e) => ({ ...e, [key]: undefined }))
  }

  function validate(): Errors {
    const next: Errors = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email.'
    if (!form.message.trim()) next.message = 'Please tell us a little about your needs.'
    if (form.message.trim().length > 0 && form.message.trim().length < 10) next.message = 'A bit more detail helps us prepare.'
    return next
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 900))
    setSubmitting(false)
    setSubmitted(true)
    setForm(initial)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to us about your process."
        description="Request a demo, ask about a product, or tell us where automation could help. We reply within one business day."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <Card className="p-8">
                {submitted ? (
                  <div className="py-10 text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green/10 text-green">
                      <Send size={24} />
                    </div>
                    <h2 className="mt-5 text-2xl font-semibold text-navy">Message received</h2>
                    <p className="mt-3 text-muted">
                      Thank you. We will be in touch within one business day.
                    </p>
                    <Button className="mt-6" onClick={() => setSubmitted(false)} variant="outline">
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate>
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Name" error={errors.name}>
                        <input
                          value={form.name}
                          onChange={(e) => update('name', e.target.value)}
                          className={inputClass(errors.name)}
                          autoComplete="name"
                          required
                        />
                      </Field>
                      <Field label="Company" error={errors.company}>
                        <input
                          value={form.company}
                          onChange={(e) => update('company', e.target.value)}
                          className={inputClass(errors.company)}
                          autoComplete="organization"
                        />
                      </Field>
                      <Field label="Email" error={errors.email}>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => update('email', e.target.value)}
                          className={inputClass(errors.email)}
                          autoComplete="email"
                          required
                        />
                      </Field>
                      <Field label="Phone" error={errors.phone}>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => update('phone', e.target.value)}
                          className={inputClass(errors.phone)}
                          autoComplete="tel"
                        />
                      </Field>
                    </div>

                    <div className="mt-5">
                      <Field label="I am interested in">
                        <select
                          value={form.interest}
                          onChange={(e) => update('interest', e.target.value)}
                          className={inputClass()}
                        >
                          <option>Demo request</option>
                          <option>End-to-end solution</option>
                          <option>Standalone tool</option>
                          <option>Partnership</option>
                          <option>Other</option>
                        </select>
                      </Field>
                    </div>

                    <div className="mt-5">
                      <Field label="Message" error={errors.message}>
                        <textarea
                          value={form.message}
                          onChange={(e) => update('message', e.target.value)}
                          className={inputClass(errors.message)}
                          rows={5}
                          required
                        />
                      </Field>
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-4">
                      <p className="text-xs text-muted">
                        By submitting, you agree we may contact you about this enquiry.
                      </p>
                      <Button type="submit" variant="secondary" disabled={submitting}>
                        {submitting ? 'Sending…' : 'Send message'}
                      </Button>
                    </div>
                  </form>
                )}
              </Card>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-6">
                <Card>
                  <h3 className="text-lg font-semibold text-navy">Contact details</h3>
                  <ul className="mt-4 space-y-4 text-sm text-muted">
                    <li className="flex items-start gap-3">
                      <MapPin size={18} className="mt-0.5 shrink-0 text-teal" />
                      Dubai, United Arab Emirates
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail size={18} className="shrink-0 text-teal" />
                      hello@endloops.com
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone size={18} className="shrink-0 text-teal" />
                      +971 4 000 0000
                    </li>
                  </ul>
                </Card>
                <Card>
                  <h3 className="text-lg font-semibold text-navy">Response time</h3>
                  <p className="mt-2 text-sm text-muted">
                    We aim to reply within one business day. For urgent audit support, mention your
                    deadline in the message.
                  </p>
                </Card>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Questions"
              title="Frequently asked."
              align="center"
            />
          </Reveal>
          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion items={faq} />
          </div>
        </Container>
      </section>
    </>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-navy">{label}</span>
      {children}
      {error && <span className="mt-2 block text-xs text-purple">{error}</span>}
    </label>
  )
}

function inputClass(error?: string) {
  return `w-full rounded-xl border px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20 ${
    error ? 'border-purple bg-purple/5' : 'border-line bg-white'
  }`
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
