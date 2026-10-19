import { beforeEach, describe, expect, test } from "vitest";
import { renderToDocument } from "../shared/render-to-document";
import Index from "./index.astro";

describe("Home page document", () => {
  let page: Document;

  beforeEach(async () => {
    page = await renderToDocument(Index);
  });

  test("HOME-01 should set the document language to es-CO when a visitor opens /", () => {
    expect(page.documentElement.lang).toBe("es-CO");
  });

  test("HOME-01 should set the document title when a visitor opens /", () => {
    expect(page.title).toBe("Casa Ánima | Terapia psicológica en Medellín");
  });
});
