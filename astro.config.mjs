import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://game-camp.gdscyu.com",
  integrations: [tailwind(), prefetch(), sitemap()],
});
