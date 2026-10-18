import { getByRole, getAllByRole } from "@testing-library/dom";
import { beforeEach, describe, expect, test } from "vitest";
import { renderToDocument } from "../../shared/render-to-document";
import StartProcessSection from "./StartProcessSection.astro";

const steps = [
  [
    "Hablemos",
    "Escríbenos por WhatsApp si tienes dudas sobre nuestros servicios, tarifas o modalidades. ¡Estamos aquí para orientarte!",
  ],
  [
    "Encuentra tu terapeuta",
    "Elige la opción Match y responde un breve test para encontrar al profesional que mejor se ajuste a tus necesidades.",
  ],
  [
    "Diligencia el formulario",
    "Completa nuestro formulario de inicio de proceso en Google Forms para compartirnos la información necesaria para comenzar.",
  ],
  [
    "Recibe la confirmación",
    "Te contactaremos por WhatsApp para compartirte los detalles de confirmación, las políticas del servicio y la información importante para tu proceso.",
  ],
  [
    "Agenda tu primer encuentro",
    "En un plazo máximo de dos días hábiles, tu terapeuta se comunicará contigo para coordinar la primera sesión.",
  ],
] as const;

describe("StartProcessSection", () => {
  let page: Document;

  beforeEach(async () => {
    page = await renderToDocument(StartProcessSection);
  });

  test("HOME-05 should show the conversation section with its text when the Home page loads", () => {
    const heading = getByRole(page.body, "heading", {
      name: "Tu proceso puede comenzar con una conversación",
    });

    expect(heading.closest("section")?.textContent).toContain(
      "Encuentra al profesional que haga match contigo en menos de 3 minutos haciendo el test que creamos para ti",
    );
  });

  test("HOME-05 should open Isa te asesora in a new tab when the Home page loads", () => {
    const link = getByRole(page.body, "link", { name: "Isa te asesora" });

    expect(link.getAttribute("href")).toBe("https://wa.me/573018639351");
    expect(link.getAttribute("target")).toBe("_blank");
  });

  test("HOME-06 should list the five step titles in order when the Home page loads", () => {
    const items = getAllByRole(getByRole(page.body, "list"), "listitem");

    expect(items).toHaveLength(5);
    steps.forEach(([title], index) => {
      expect(items[index]?.textContent?.trim().startsWith(title)).toBe(true);
    });
  });

  test("HOME-06 should show the text of each step when the Home page loads", () => {
    const items = getAllByRole(getByRole(page.body, "list"), "listitem");

    steps.forEach(([, text], index) => {
      expect(items[index]?.textContent?.replace(/\s+/g, " ")).toContain(text);
    });
  });

  test("HOME-06 should use an ordered list when the Home page loads", () => {
    expect(getByRole(page.body, "list").tagName).toBe("OL");
  });
});
