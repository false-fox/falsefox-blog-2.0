import { defineConfig } from 'astro/config';
import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import sitemap from "@astrojs/sitemap";
import playformCompress from "@playform/compress";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://falsefox.dev",
  integrations: [expressiveCode({
    themes: ['dark-plus'],
    plugins: [pluginLineNumbers()],
    styleOverrides: {
      codeFontFamily: "var(--codeFontFamily)",
      codeFontSize: "var(--codeFontSize)"
    }
  }), sitemap(), playformCompress(), robotsTxt()]
});