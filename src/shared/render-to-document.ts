import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { JSDOM } from "jsdom";

export async function renderToDocument(
  component: Parameters<AstroContainer["renderToString"]>[0],
): Promise<Document> {
  const container = await AstroContainer.create();
  const html = await container.renderToString(component);
  return new JSDOM(html).window.document;
}
