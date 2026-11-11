# Endloops Website

Premium, multi-page marketing site for Endloops, built with React, TypeScript, Tailwind CSS v4 and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Project structure

- `src/components` reusable UI, navigation, footer, animations
- `src/pages` Home, Solutions, Tools, About, Contact, NotFound
- `src/data` product catalogue and FAQ content

## Submission note

I built a five-page site (Home, Solutions, Tools, About, Contact) rather than a single landing page, so visitors can explore end-to-end solutions and standalone tools separately and understand how they differ. The most important design decision was to make the product split the organising principle of the whole site: every page reinforces that solutions run a complete process while tools solve one need independently. With more time I would connect the contact form to a real backend, add case studies and screenshots from actual products, and run a full accessibility and performance audit. I used AI assistance for scaffolding, copy drafting and component iteration, and made all architecture, content, interaction and styling decisions myself. The work took roughly 9 hours. The supplied logo asset was not included in the working directory, so a lightweight SVG wordmark is used in `src/components/Logo.tsx` and can be replaced with the supplied logo without changing the layout.