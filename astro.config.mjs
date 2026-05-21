import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://columbiasoftwaresolutions.com",
  integrations: [tailwind({ applyBaseStyles: false })],
  vite: {
    server: {
      // Allow dev preview via the host the user opens locally.
      host: true,
    },
  },
});
