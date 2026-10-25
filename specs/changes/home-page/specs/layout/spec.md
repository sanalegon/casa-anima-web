# Delta: layout

## Requirement Deltas
### ADDED
- LAYOUT-01 — The system MUST show, on every page, a header with the Casa Ánima logo and a navigation with the links Inicio, Quiénes somos, Servicios, Equipo and Contáctanos, in that order, pointing to `/`, `/#quienes-somos`, `/#servicios`, `/#equipo` and `/#contacto` — the site is served from the root of the custom domain `https://casaanima.co` | test: ✅
  - GIVEN any page | WHEN it loads | THEN a banner shows an image named "Casa Ánima" that links to `/`
  - GIVEN any page | WHEN it loads | THEN a navigation lists the five links in that order with those targets
- LAYOUT-02 — The system MUST show, on every page, a footer with "¡Nos vemos en Casita!", the label "Más información" before the WhatsApp number, the WhatsApp number, the email and the address | test: ✅
  - GIVEN any page | WHEN it loads | THEN the footer shows the heading "¡Nos vemos en Casita!"
  - GIVEN any page | WHEN it loads | THEN the footer shows a link "(+57) 301 8639351" to `https://wa.me/573018639351`
  - GIVEN any page | WHEN it loads | THEN the footer shows the text "Más información" right before the link "(+57) 301 8639351", on the same line
  - GIVEN any page | WHEN it loads | THEN the footer shows a link "casa.anima.consultorios@gmail.com" to `mailto:casa.anima.consultorios@gmail.com`
  - GIVEN any page | WHEN it loads | THEN the footer shows the address "Cra. 71 # 32B-83 Belén, Rosales"
- LAYOUT-03 — The system MUST show, in the footer of every page, above "¡Nos vemos en Casita!", a row of four large brand-color social icons in this order: Instagram, Facebook, TikTok and WhatsApp — Instagram, Facebook and WhatsApp link to their pages, each opening in a new tab; TikTok has no account yet, so its icon is shown but is not a link | test: -
  - GIVEN any page | WHEN it loads | THEN the footer shows a link named "Instagram" to `https://www.instagram.com/casaanima_psicologia` that opens in a new tab
  - GIVEN any page | WHEN it loads | THEN the footer shows a link named "Facebook" to `https://www.facebook.com/p/Casa-Ánima-Consultorios-61568582250827/` that opens in a new tab
  - GIVEN any page | WHEN it loads | THEN the footer shows an image named "TikTok" that is not inside a link
  - GIVEN any page | WHEN it loads | THEN the footer shows a link named "WhatsApp" to the same prefilled-message URL as "Isa te asesora" (HOME-05) that opens in a new tab
  - GIVEN any page | WHEN it loads | THEN the four social icons appear in the order Instagram, Facebook, TikTok, WhatsApp, before the heading "¡Nos vemos en Casita!"
