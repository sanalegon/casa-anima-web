import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://casaanima.co",
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Playfair Display",
      cssVariable: "--font-heading",
      fallbacks: ["Georgia", "serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Nunito Sans",
      cssVariable: "--font-body",
      fallbacks: ["Arial", "sans-serif"],
    },
  ],
});
