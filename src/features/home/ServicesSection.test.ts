import { getAllByRole, getByRole } from "@testing-library/dom";
import { beforeEach, describe, expect, test } from "vitest";
import { renderToDocument } from "../../shared/render-to-document";
import ServicesSection from "./ServicesSection.astro";

const titles = [
  "Servicios de terapia psicológica Online y Presencial",
  "Alquiler de consultorios para profesionales en salud mental",
  "Talleres y servicios de acompañamiento grupal a organizaciones",
  "Certificado de perro de apoyo emocional",
  "Convenios organizacionales de atención en salud mental",
  "Formación continua para terapeutas",
];

describe("ServicesSection", () => {
  let page: Document;

  beforeEach(async () => {
    page = await renderToDocument(ServicesSection);
  });

  test("HOME-07 should show Conoce nuestros servicios with the id servicios when the Home page loads", () => {
    const heading = getByRole(page.body, "heading", {
      name: "Conoce nuestros servicios",
    });

    expect(heading.closest("section")?.id).toBe("servicios");
  });

  test("HOME-07 should list the six services in order when the Home page loads", () => {
    const headings = getAllByRole(page.body, "heading", { level: 3 });

    expect(headings.map((heading) => heading.textContent?.trim())).toEqual(
      titles,
    );
  });

  test("HOME-07 should show a described photo for each service when the Home page loads", () => {
    const photos = getAllByRole(page.body, "img");

    expect(photos).toHaveLength(6);
    photos.forEach((photo) => {
      expect(photo.getAttribute("alt")?.trim()).toBeTruthy();
    });
  });
});
