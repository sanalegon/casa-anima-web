import {
  getByRole,
  getByText,
  getByTitle,
  queryByRole,
} from "@testing-library/dom";
import { beforeEach, describe, expect, test } from "vitest";
import { renderToDocument } from "../../shared/render-to-document";
import LocationSection from "./LocationSection.astro";

describe("LocationSection", () => {
  let page: Document;

  beforeEach(async () => {
    page = await renderToDocument(LocationSection);
  });

  test("HOME-09 should show ¿Dónde nos vemos? with the id contacto when the Home page loads", () => {
    const heading = getByRole(page.body, "heading", {
      name: "¿Dónde nos vemos?",
    });

    expect(heading.closest("section")?.id).toBe("contacto");
  });

  test("HOME-09 should show the address when the Home page loads", () => {
    expect(
      getByText(page.body, "Cra. 71 # 32B-83 Belén, Rosales"),
    ).toBeTruthy();
  });

  test("HOME-09 should show Virtual en todo el mundo when the Home page loads", () => {
    expect(getByText(page.body, "Virtual en todo el mundo")).toBeTruthy();
  });

  test("HOME-09 should show a map frame titled Mapa de Casa Ánima when the Home page loads", () => {
    const map = getByTitle(page.body, "Mapa de Casa Ánima");

    expect(map.tagName).toBe("IFRAME");
  });

  test("HOME-09 should show no link Escríbenos por WhatsApp when the Home page loads", () => {
    expect(
      queryByRole(page.body, "link", { name: "Escríbenos por WhatsApp" }),
    ).toBeNull();
  });
});
