import { Container } from '../components/Container'
import { Button } from '../components/Button'

export function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center py-20">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-teal">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-navy">Page not found</h1>
        <p className="mt-4 text-muted">The page you are looking for does not exist or has moved.</p>
        <div className="mt-8">
          <Button to="/" variant="secondary">Back to home</Button>
        </div>
      </Container>
    </section>
  )
}
