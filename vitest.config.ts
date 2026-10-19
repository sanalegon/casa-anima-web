import { getViteConfig } from "astro/config";
import astroConfig from "./astro.config.mjs";

export default getViteConfig(
  { test: { environment: "node", env: { BASE_URL: astroConfig.base ?? "/" } } },
  astroConfig,
);
