import { getAllByRole, getByRole } from "@testing-library/dom";
import { beforeEach, describe, expect, test } from "vitest";
import { renderToDocument } from "../../shared/render-to-document";
import TeamSection from "./TeamSection.astro";

const names = [
  "Santiago Zuñiga",
  "Luisa Gómez",
  "Manuela Navarro",
  "Maria Camila González",
  "Santiago Osorio",
];

describe("TeamSection", () => {
  let page: Document;

  beforeEach(async () => {
    page = await renderToDocument(TeamSection);
  });

  test("HOME-08 should show Equipo Casita with the id equipo when the Home page loads", () => {
    const heading = getByRole(page.body, "heading", { name: "Equipo Casita" });

    expect(heading.closest("section")?.id).toBe("equipo");
  });

  test("HOME-08 should show five portraits described with the names of the members in order when the Home page loads", () => {
    const portraits = getAllByRole(page.body, "img");

    expect(portraits.map((portrait) => portrait.getAttribute("alt"))).toEqual(
      names,
    );
  });

  test("HOME-08 should show no visible text besides the heading when the Home page loads", () => {
    const section = page.querySelector("section");

    expect(section?.textContent?.replace(/\s+/g, " ").trim()).toBe(
      "Equipo Casita",
    );
  });
});
