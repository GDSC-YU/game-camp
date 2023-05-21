import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://game-camp-2023.netlify.app",
  integrations: [tailwind(), svelte(), prefetch(), sitemap()],
});
