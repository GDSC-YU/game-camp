import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from '@astrojs/react';

import icon from "astro-icon";

export default defineConfig({
  site: "https://game-camp.gdscyu.com",
  integrations: [tailwind(), sitemap(), icon(), react()],
});
