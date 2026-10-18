# Design: home-page

## Approach
- Slices: `site-header` (LAYOUT-01) · `site-footer` (LAYOUT-02) · `home` (HOME-02 … HOME-09) — all created
- Files:
  - `src/layouts/BaseLayout.astro` — page shell: `<html lang="es-CO">`, `<title>` from a `title` prop, fonts, color tokens, header and footer slots — HOME-01
  - `src/pages/index.astro` — route `/`: BaseLayout + `SiteHeader` + `Home` + `SiteFooter`
  - `src/shared/contact.ts` — `whatsappUrl`, `phoneLabel`, `email`, `address` constants — read by `site-footer` and `home`
  - `src/features/site-header/SiteHeader.astro` · `index.ts` · `SiteHeader.test.ts`
  - `src/features/site-footer/SiteFooter.astro` · `index.ts` · `SiteFooter.test.ts`
  - `src/features/home/Home.astro` — composes the section components in mockup order
  - `src/features/home/Hero.astro` (HOME-02, HOME-03) · `AboutSection.astro` (HOME-04) · `StartProcessSection.astro` (HOME-05, HOME-06) · `ServicesSection.astro` (HOME-07) · `TeamSection.astro` (HOME-08) · `LocationSection.astro` (HOME-09) — one component per mockup page, so each stays small
  - `src/features/home/index.ts` — exports `Home` only · `src/features/home/*.test.ts` — one test file per section component
  - `src/assets/home/*` — renamed photos (`hero.jpg`, `card-terapia.jpg`, `team-group.png`, `team-santiago-zuniga.png`, …) · `src/assets/decor/*` — leaves and terracotta pots
- Types: none shared — section data (services, steps, team) are `const` arrays inside the component that renders them
- State: none — every page is static HTML, no client JavaScript
- Logic: no business rule in this change — no logic-layer file
- Tests: Vitest with `getViteConfig` from `astro/config` · render with `experimental_AstroContainer` → `renderToString` → `document.body.innerHTML` (jsdom) → query with `@testing-library/dom` `screen` by role and accessible name
- Images: `astro:assets` `<Image>` — resized and converted to WebP at build; `alt` = description for content photos, `alt=""` for decor
- Map: `<iframe title="Mapa de Casa Ánima">` with the Google Maps embed URL for the address — no API key
- Fonts: Astro Fonts API with the Google provider — serif for headings, sans-serif for body — no font package
- Decision: header and footer are slices, not part of `layouts/` — they hold content with FRs; layouts hold no feature content — discarded: content in `BaseLayout.astro`
- Decision: one `home` slice with one component per section — the sections are used only on Home today; a section moves to its own slice when a second page needs it — discarded: one slice per section (seven slices with one caller each)
- Decision: navigation links point to Home anchors — the target pages are OUT of scope — discarded: links to pages that do not exist yet
- Decision: no React yet — no interactive part in this change — discarded: installing `@astrojs/react` now (YAGNI)
