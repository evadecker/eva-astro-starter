import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://mysite.com",
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
  prefetch: true,
  vite: {
    ssr: {
      noExternal: ["smartypants"],
    },
  },
});
