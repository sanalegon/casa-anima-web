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
});
