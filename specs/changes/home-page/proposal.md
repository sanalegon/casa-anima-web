# Change: home-page

## Goal
A visitor opens the Casa Ánima website and sees the Home page of the Canva mockup `DAHYTOAY8e4` (pages 1–6): who Casa Ánima is, its services, how to start a process, the team, where it is and how to contact it.
The project has no code yet — this change also scaffolds the stack named in `CLAUDE.md` → Stack and fills the Quality Gates.

## Scope
- IN:
  - Scaffold: Astro + TypeScript strict, Vitest + Testing Library + jsdom, oxlint, Prettier + `prettier-plugin-astro`, `.nvmrc`, `.gitignore`, `.claude/gates.conf`, `.claude/settings.json` deny for `.astro/**` and `node_modules/**`
  - Site shell: header with logo and navigation, footer with contact data
  - Home page sections: hero quote · three highlight cards · "Detrás de Casita" · "Tu proceso puede comenzar con una conversación" · "Cómo iniciar tu proceso" · "Conoce nuestros servicios" · "Equipo Casita" · "¿Dónde nos vemos?"
  - Photos: pick the Home photos from `src/assets/`, rename them to kebab-case
- OUT:
  - Match test and its "Empezar mi match" button — own feature
  - Pages Quiénes somos, Servicios, Alquiler de consultorios, Organizaciones, Equipo — navigation points to Home sections until they exist
  - Instagram, Facebook and TikTok links — URLs not provided
  - React and `@astrojs/react` — no island in this change; added with the first interactive feature
  - Mobile hamburger menu — navigation wraps on narrow screens
- TDD: ON
- Specs touched: `specs/current/layout/spec.md` (new, prefix `LAYOUT`) · `specs/current/home/spec.md` (new, prefix `HOME`)

## Constraints
- MUST NOT break: nothing — first code in the repo
- MUST respect:
  - Node ≥ 22.12 — the human upgrades to Node 22 LTS before ID-001 (`node -v` today: 18.19.1)
  - Dependencies — none added without approval; versions below are the newest published ≥ 30 days ago:

    | Package | Version | Published | Weekly downloads | Repo |
    |---------|---------|-----------|------------------|------|
    | astro | 7.3.3 | 2026-09-16 | 4.7 M | github.com/withastro/astro |
    | typescript | 6.0.3 | 2026-04-16 | 184 M | github.com/microsoft/TypeScript |
    | @astrojs/check | 0.9.10 | 2026-07-27 | 2.6 M | github.com/withastro/astro |
    | vitest | 5.0.1 | 2026-09-15 | 76.6 M | github.com/vitest-dev/vitest |
    | jsdom | 30.1.0 | 2026-09-17 | 67.9 M | github.com/jsdom/jsdom |
    | @testing-library/dom | 10.4.2 | 2026-09-13 | 50.5 M | github.com/testing-library/dom-testing-library |
    | oxlint | 1.83.0 | 2026-09-14 | 16.1 M | github.com/oxc-project/oxc |
    | prettier | 3.9.8 | 2026-09-17 | 82.3 M | github.com/prettier/prettier |
    | prettier-plugin-astro | 1.0.1 | 2026-09-17 | 0.76 M | github.com/withastro/prettier-plugin-astro |

    TypeScript 7 is excluded: `@astrojs/check` supports only `^5 || ^6`.
  - UI copy in Spanish (es-CO), taken verbatim from the mockup
  - Contact data: WhatsApp `+57 301 8639351` · `casa.anima.consultorios@gmail.com` · `Cra. 71 # 32B-83 Belén, Rosales`
  - Visual style from the mockup: deep teal header and bands, white background, serif headings, terracotta pots and leaf decorations — decorative images have empty `alt`
  - Layout readable from 360 px wide, no horizontal scroll
  - `.HEIC` files and `equipo casita.pdf` are not used — browsers and the Astro image service do not read HEIC; only the photos the site uses are staged
