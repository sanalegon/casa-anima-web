# casa-anima-web

Website of Casa Ánima — live at https://casaanima.co.

Casa Ánima is a team of psychologists in Belén, Medellín (Colombia) who work from a warm, human and respectful view of each person. They combine psychotherapy with artistic and experiential resources when it helps, to support each person's self-knowledge and change.

What Casa Ánima offers:
- Psychological therapy, online (worldwide) and in person.
- Office rental for mental health professionals.
- Group workshops and support for organizations.
- Emotional support dog certificates.
- Mental health care agreements with organizations.
- Continuing education for therapists.

## Stack
- Astro 7 static site, TypeScript strict.
- Vitest + Testing Library + jsdom for tests.
- oxlint for lint, Prettier (with `prettier-plugin-astro`) for format.
- Fonts through Astro Fonts (Google): Playfair Display, Nunito Sans, Open Sans.

## Requirements
- Node `>=22.12` (`.nvmrc`: 22).

## Run locally
```bash
npm install
npm run dev       # http://localhost:4321
```

## Scripts
| Command | Does |
|---------|------|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Serve `dist/` locally |
| `npm test` | Run the tests once |
| `npm run lint` | Lint with oxlint |
| `npm run check` | Type-check with `astro check` |

## Project layout
```
src/
  features/
    home/          ← Home page sections (hero, about, process, services, team, location)
    site-header/   ← header: logo and navigation
    site-footer/   ← footer: social icons, "¡Nos vemos en Casita!", contact bar
  shared/          ← code used by 2+ slices (contact data, test helper)
  layouts/         ← BaseLayout: fonts, color tokens, global styles
  pages/           ← routes (index.astro composes the slices)
  assets/          ← images: brand/, decor/, home/, social/
specs/             ← behavior as FRs (Spec Driven Development)
docs/              ← architecture and decisions
```

## Change the contact data
Phone, email, address and WhatsApp links live in `src/shared/contact.ts` — the Home sections and the footer read them from there.

## Deploy
Every push to `main` builds and publishes the site to GitHub Pages (`.github/workflows/deploy.yml`). The custom domain `casaanima.co` is set in GitHub → Settings → Pages.

## Contributing
Work follows Spec Driven Development: rules in `CLAUDE.md`, behavior in `specs/`.
