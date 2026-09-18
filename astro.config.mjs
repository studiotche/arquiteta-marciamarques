import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Base do deploy. Suporta subpaths configurados via variável de ambiente PAGES_BASE ou raiz por padrão.
const pagesBase = process.env.PAGES_BASE ?? "/";

export default defineConfig({
  site: "https://koplan.com.br",
  base: pagesBase,
  output: "static",
  integrations: [sitemap()],
  build: { format: "directory" },
});
