import { getByRole } from "@testing-library/dom";
import { beforeEach, describe, expect, test } from "vitest";
import { renderToDocument } from "../../shared/render-to-document";
import { SiteHeader } from "./index";

describe("SiteHeader", () => {
  let page: Document;

  beforeEach(async () => {
    page = await renderToDocument(SiteHeader);
  });

  test("LAYOUT-01 should show the Casa Ánima logo in the banner when the page loads", () => {
    const banner = getByRole(page.body, "banner");

    expect(getByRole(banner, "img", { name: "Casa Ánima" })).toBeTruthy();
  });

  test("LAYOUT-01 should link the logo to the site base when the page loads", () => {
    const logoLink = getByRole(page.body, "link", { name: "Casa Ánima" });

    expect(logoLink.getAttribute("href")).toBe("/");
  });

  test("LAYOUT-01 should list the five links in order with their targets when the page loads", () => {
    const links = getByRole(page.body, "navigation").querySelectorAll("a");

    expect(
      Array.from(links, (link) => [
        link.textContent?.trim(),
        link.getAttribute("href"),
      ]),
    ).toEqual([
      ["Inicio", "/"],
      ["Quiénes somos", "/#quienes-somos"],
      ["Servicios", "/#servicios"],
      ["Equipo", "/#equipo"],
      ["Contáctanos", "/#contacto"],
    ]);
  });
});
