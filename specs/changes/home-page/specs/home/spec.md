# Delta: home

## Requirement Deltas
### ADDED
- HOME-01 — The system MUST serve the Home page at `/` in Spanish (`lang="es-CO"`) with the title "Casa Ánima | Terapia psicológica en Medellín" | test: ✅
  - GIVEN a visitor | WHEN they open `/` | THEN the document language is `es-CO`
  - GIVEN a visitor | WHEN they open `/` | THEN the document title is "Casa Ánima | Terapia psicológica en Medellín"
- HOME-02 — The system MUST show a hero with the quote "En Casa Ánima, cada proceso es un viaje de autoconocimiento y cuidado desde la calidez y el respeto." and a photo of two members of the team | test: ✅
  - GIVEN the Home page | WHEN it loads | THEN the main heading is the quote
  - GIVEN the Home page | WHEN it loads | THEN the hero shows a photo with a non-empty description
- HOME-03 — The system MUST show three highlight cards, in this order, each with a photo: "Servicios de terapia psicológica Online y Presencial", "Alquiler de consultorios para profesionales en salud mental", "Servicios de acompañamiento psicológico grupal" | test: ✅
  - GIVEN the Home page | WHEN it loads | THEN the three card titles appear in that order
  - GIVEN the Home page | WHEN it loads | THEN each card shows a photo with a non-empty description
- HOME-04 — The system MUST show the section "Detrás de Casita" (anchor `quienes-somos`) with the team description of the mockup and a group photo of the team | test: ✅
  - GIVEN the Home page | WHEN it loads | THEN a section headed "Detrás de Casita" has the id `quienes-somos`
  - GIVEN the Home page | WHEN it loads | THEN that section shows the text starting "En Casa Ánima somos un equipo de psicólogos y psicólogas" and ending "Creemos que cada historia merece un espacio propio para ser escuchada y comprendida."
  - GIVEN the Home page | WHEN it loads | THEN that section shows a group photo with a non-empty description
- HOME-05 — The system MUST show the section "Tu proceso puede comenzar con una conversación" with the link "Isa te asesora" that opens WhatsApp in a new tab | test: ✅
  - GIVEN the Home page | WHEN it loads | THEN a section headed "Tu proceso puede comenzar con una conversación" shows the text "Encuentra al profesional que haga match contigo en menos de 3 minutos haciendo el test que creamos para ti"
  - GIVEN that section | WHEN it loads | THEN the link "Isa te asesora" points to `https://wa.me/573018639351` and opens in a new tab
- HOME-06 — The system MUST show the section "Cómo iniciar tu proceso" as an ordered list of five steps, each with its title and text from the mockup: 1. Hablemos · 2. Encuentra tu terapeuta · 3. Diligencia el formulario · 4. Recibe la confirmación · 5. Agenda tu primer encuentro | test: ✅
  - GIVEN the Home page | WHEN it loads | THEN the section shows an ordered list whose five items start with those titles, in that order
  - GIVEN the Home page | WHEN it loads | THEN each step shows its text from the mockup
- HOME-07 — The system MUST show the section "Conoce nuestros servicios" (anchor `servicios`) with six services, in this order, each with a photo: Servicios de terapia psicológica Online y Presencial · Alquiler de consultorios para profesionales en salud mental · Talleres y servicios de acompañamiento grupal a organizaciones · Certificado de perro de apoyo emocional · Convenios organizacionales de atención en salud mental · Formación continua para terapeutas | test: ✅
  - GIVEN the Home page | WHEN it loads | THEN a section headed "Conoce nuestros servicios" has the id `servicios`
  - GIVEN that section | WHEN it loads | THEN it lists the six services in that order
  - GIVEN that section | WHEN it loads | THEN each service shows a photo with a non-empty description
- HOME-08 — The system MUST show the section "Equipo Casita" (anchor `equipo`) with five team portraits, in this order, each described with the member's name: Santiago Zuñiga · Luisa Gómez · Manuela Navarro · Maria Camila González · Santiago Osorio — with no visible names, roles or descriptions, as in the mockup | test: ✅
  - GIVEN the Home page | WHEN it loads | THEN a section headed "Equipo Casita" has the id `equipo`
  - GIVEN that section | WHEN it loads | THEN it shows five portraits described with those names, in that order
  - GIVEN that section | WHEN it loads | THEN it shows no visible name, role or description text besides the heading
- HOME-09 — The system MUST show the section "¿Dónde nos vemos?" (anchor `contacto`) with the address, "Virtual en todo el mundo", a map of the location and a WhatsApp link | test: ✅
  - GIVEN the Home page | WHEN it loads | THEN a section headed "¿Dónde nos vemos?" has the id `contacto`
  - GIVEN that section | WHEN it loads | THEN it shows "Cra. 71 # 32B-83 Belén, Rosales" and "Virtual en todo el mundo"
  - GIVEN that section | WHEN it loads | THEN it shows a map frame titled "Mapa de Casa Ánima"
  - GIVEN that section | WHEN it loads | THEN a link "Escríbenos por WhatsApp" points to `https://wa.me/573018639351`
