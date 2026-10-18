import { getByRole, within } from "@testing-library/dom";
import { beforeEach, describe, expect, test } from "vitest";
import { renderToDocument } from "../../shared/render-to-document";
import AboutSection from "./AboutSection.astro";

describe("AboutSection", () => {
  let page: Document;

  beforeEach(async () => {
    page = await renderToDocument(AboutSection);
  });

  test("HOME-04 should show the section Detrás de Casita with the id quienes-somos when the Home page loads", () => {
    const heading = getByRole(page.body, "heading", {
      name: "Detrás de Casita",
    });

    expect(heading.closest("section")?.id).toBe("quienes-somos");
  });

  test("HOME-04 should show the team description when the Home page loads", () => {
    const text =
      page.querySelector("section")?.textContent?.replace(/\s+/g, " ") ?? "";

    expect(text).toContain(
      "En Casa Ánima somos un equipo de psicólogos y psicólogas",
    );
    expect(
      text
        .trim()
        .endsWith(
          "Creemos que cada historia merece un espacio propio para ser escuchada y comprendida.",
        ),
    ).toBe(true);
  });

  test("HOME-04 should show a described group photo when the Home page loads", () => {
    const photo = within(page.body).getByRole("img");

    expect(photo.getAttribute("alt")?.trim()).toBeTruthy();
  });
});
