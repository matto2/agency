import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://mattoleary.design",
  integrations: [tailwind(), icon(), sitemap()],
  experimental: {
    viewTransitions: true
  }
});