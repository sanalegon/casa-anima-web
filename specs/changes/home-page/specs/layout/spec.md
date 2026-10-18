# Delta: layout

## Requirement Deltas
### ADDED
- LAYOUT-01 — The system MUST show, on every page, a header with the Casa Ánima logo and a navigation with the links Inicio, Quiénes somos, Servicios, Equipo and Contáctanos, in that order, pointing to `/`, `/#quienes-somos`, `/#servicios`, `/#equipo` and `/#contacto` | test: ✅
  - GIVEN any page | WHEN it loads | THEN a banner shows an image named "Casa Ánima"
  - GIVEN any page | WHEN it loads | THEN a navigation lists the five links in that order with those targets
- LAYOUT-02 — The system MUST show, on every page, a footer with "¡Nos vemos en Casita!", the WhatsApp number, the email and the address | test: ✅
  - GIVEN any page | WHEN it loads | THEN the footer shows the heading "¡Nos vemos en Casita!"
  - GIVEN any page | WHEN it loads | THEN the footer shows a link "(+57) 301 8639351" to `https://wa.me/573018639351`
  - GIVEN any page | WHEN it loads | THEN the footer shows a link "casa.anima.consultorios@gmail.com" to `mailto:casa.anima.consultorios@gmail.com`
  - GIVEN any page | WHEN it loads | THEN the footer shows the address "Cra. 71 # 32B-83 Belén, Rosales"
