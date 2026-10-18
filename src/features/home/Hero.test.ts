import { getAllByRole, getByRole, within } from "@testing-library/dom";
import { beforeEach, describe, expect, test } from "vitest";
import { renderToDocument } from "../../shared/render-to-document";
import Hero from "./Hero.astro";

describe("Hero", () => {
  let page: Document;

  beforeEach(async () => {
    page = await renderToDocument(Hero);
  });

  test("HOME-02 should show the quote as the main heading when the Home page loads", () => {
    const heading = getByRole(page.body, "heading", { level: 1 });

    expect(heading.textContent?.trim()).toBe(
      "En Casa Ánima, cada proceso es un viaje de autoconocimiento y cuidado desde la calidez y el respeto.",
    );
  });

  test("HOME-02 should show a described photo of the team in the hero when the Home page loads", () => {
    expect(getByRole(page.body, "img", { name: /equipo/i })).toBeTruthy();
  });

  test("HOME-03 should show the three card titles in order when the Home page loads", () => {
    const titles = getAllByRole(page.body, "article").map((card) =>
      within(card).getByRole("heading").textContent?.trim(),
    );

    expect(titles).toEqual([
      "Servicios de terapia psicológica Online y Presencial",
      "Alquiler de consultorios para profesionales en salud mental",
      "Servicios de acompañamiento psicológico grupal",
    ]);
  });

  test("HOME-03 should show a described photo in each card when the Home page loads", () => {
    const cards = getAllByRole(page.body, "article");

    expect(cards).toHaveLength(3);
    for (const card of cards) {
      const photo = within(card).getByRole("img");
      expect(photo.getAttribute("alt")?.trim()).toBeTruthy();
    }
  });
});
