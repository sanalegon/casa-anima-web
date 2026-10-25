import { getByRole, getByText } from "@testing-library/dom";
import { beforeEach, describe, expect, test } from "vitest";
import { renderToDocument } from "../../shared/render-to-document";
import { SiteFooter } from "./index";

describe("SiteFooter", () => {
  let page: Document;

  beforeEach(async () => {
    page = await renderToDocument(SiteFooter);
  });

  test("LAYOUT-02 should show the heading when the page loads", () => {
    expect(
      getByRole(page.body, "heading", { name: "¡Nos vemos en Casita!" }),
    ).toBeTruthy();
  });

  test("LAYOUT-02 should link the WhatsApp number when the page loads", () => {
    const link = getByRole(page.body, "link", { name: "(+57) 301 8639351" });

    expect(link.getAttribute("href")).toBe("https://wa.me/573018639351");
  });

  test("LAYOUT-02 should show the label right before the WhatsApp number when the page loads", () => {
    const link = getByRole(page.body, "link", { name: "(+57) 301 8639351" });
    const label = getByText(page.body, "Más información");

    expect(label.tagName).not.toBe("A");
    expect(label.nextElementSibling).toBe(link);
    expect(label.parentElement).toBe(link.parentElement);
  });

  test("LAYOUT-02 should link the email when the page loads", () => {
    const link = getByRole(page.body, "link", {
      name: "casa.anima.consultorios@gmail.com",
    });

    expect(link.getAttribute("href")).toBe(
      "mailto:casa.anima.consultorios@gmail.com",
    );
  });

  test("LAYOUT-02 should show the address when the page loads", () => {
    expect(
      getByText(page.body, "Cra. 71 # 32B-83 Belén, Rosales"),
    ).toBeTruthy();
  });

  test("LAYOUT-03 should link Instagram in a new tab when the page loads", () => {
    const link = getByRole(page.body, "link", { name: "Instagram" });

    expect(link.getAttribute("href")).toBe(
      "https://www.instagram.com/casaanima_psicologia",
    );
    expect(link.getAttribute("target")).toBe("_blank");
  });

  test("LAYOUT-03 should link Facebook in a new tab when the page loads", () => {
    const link = getByRole(page.body, "link", { name: "Facebook" });

    expect(link.getAttribute("href")).toBe(
      "https://www.facebook.com/p/Casa-Ánima-Consultorios-61568582250827/",
    );
    expect(link.getAttribute("target")).toBe("_blank");
  });

  test("LAYOUT-03 should link WhatsApp with the prefilled message in a new tab when the page loads", () => {
    const link = getByRole(page.body, "link", { name: "WhatsApp" });

    expect(link.getAttribute("href")).toBe(
      "https://wa.me/573018639351?text=%C2%A1Hola%20Isa%21%20Vengo%20de%20la%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20preguntar%20sobre%20c%C3%B3mo%20comenzar%20mi%20proceso%20psicoterap%C3%A9utico%20con%20Casa%20%C3%81nima",
    );
    expect(link.getAttribute("target")).toBe("_blank");
  });
});
