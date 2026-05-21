import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://columbiasoftwaresolutions.com",
  output: "static",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [tailwind({ applyBaseStyles: false })],
  vite: {
    server: {
      // Allow dev preview via the host the user opens locally.
      host: true,
    },
  },
});
