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
- HOME-04 — The system MUST show the section "Detrás de Casita" (anchor `quienes-somos`) with the team description of the mockup, its closing sentence emphasized, and a group photo of the team | test: ✅
  - GIVEN the Home page | WHEN it loads | THEN a section headed "Detrás de Casita" has the id `quienes-somos`
  - GIVEN the Home page | WHEN it loads | THEN that section shows the text "En Casa Ánima somos un equipo de psicólogos y psicólogas con diferentes enfoques y formas de acompañar. Nos une una mirada humana, cálida y respetuosa, en la que integramos la psicoterapia y, cuando es pertinente, recursos artísticos y vivenciales para acompañarte en tu proceso de autoconocimiento y transformación. Creemos que cada historia merece un espacio propio para ser escuchada y comprendida."
  - GIVEN the Home page | WHEN it loads | THEN the sentence "Creemos que cada historia merece un espacio propio para ser escuchada y comprendida." is emphasized
  - GIVEN the Home page | WHEN it loads | THEN that section shows a group photo with a non-empty description
- HOME-05 — The system MUST show the section "Tu proceso puede comenzar con una conversación" after the steps section, with the link "Empezar mi match" that opens the match test in a new tab and the link "Isa te asesora" that opens WhatsApp in a new tab with a prefilled message | test: ✅
  - GIVEN the Home page | WHEN it loads | THEN a section headed "Tu proceso puede comenzar con una conversación" shows the text "Encuentra al profesional que haga match contigo en menos de 3 minutos haciendo el test que creamos para ti o escribiéndonos directamente"
  - GIVEN the Home page | WHEN it loads | THEN that section comes after the section "Conoce el paso a paso"
  - GIVEN that section | WHEN it loads | THEN the link "Empezar mi match" points to `https://tally.so/r/o96ZO1` and opens in a new tab
  - GIVEN that section | WHEN it loads | THEN the link "Isa te asesora" points to `https://wa.me/573018639351?text=%C2%A1Hola%20Isa%21%20Vengo%20de%20la%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20preguntar%20sobre%20c%C3%B3mo%20comenzar%20mi%20proceso%20psicoterap%C3%A9utico%20con%20Casa%20%C3%81nima` — WhatsApp with the prefilled message "¡Hola Isa! Vengo de la página web y me gustaría preguntar sobre cómo comenzar mi proceso psicoterapéutico con Casa Ánima" — and opens in a new tab
- HOME-06 — The system MUST show the section "Conoce el paso a paso" as an ordered list of five steps, each with its title and text from the mockup: 1. Hablemos · 2. Encuentra tu terapeuta · 3. Diligencia el formulario · 4. Recibe la confirmación · 5. Agenda tu primer encuentro | test: ✅
  - GIVEN the Home page | WHEN it loads | THEN a section headed "Conoce el paso a paso" shows an ordered list whose five items start with those titles, in that order
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
