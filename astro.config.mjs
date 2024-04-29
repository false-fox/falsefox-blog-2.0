import { defineConfig } from 'astro/config';
import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
// https://astro.build/config
export default defineConfig({
  integrations: [expressiveCode({
    themes: ['dark-plus'],
    plugins: [pluginLineNumbers()],
    styleOverrides: {
      codeFontFamily: "var(--codeFontFamily)",
      codeFontSize: "var(--codeFontSize)", 
    }
  })]
});