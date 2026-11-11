import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
const Home = lazy(() => import('./pages/Home').then((m) => ({ default: m.Home })))
const Solutions = lazy(() => import('./pages/Solutions').then((m) => ({ default: m.Solutions })))
const Tools = lazy(() => import('./pages/Tools').then((m) => ({ default: m.Tools })))
const About = lazy(() => import('./pages/About').then((m) => ({ default: m.About })))
const Contact = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })))
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })))

function PageFallback() {
  return <div className="min-h-[40vh]" aria-busy="true" />
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<PageFallback />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/solutions"
          element={
            <Suspense fallback={<PageFallback />}>
              <Solutions />
            </Suspense>
          }
        />
        <Route
          path="/tools"
          element={
            <Suspense fallback={<PageFallback />}>
              <Tools />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<PageFallback />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<PageFallback />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<PageFallback />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}
