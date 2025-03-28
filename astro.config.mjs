// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://dsquare-io.github.io',
  base: 'helpicon',

  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    locales: ["sv", "en"],
    defaultLocale: "sv",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    }
  },

  integrations: [react()],
  build: {
    inlineStylesheets: 'always'
  }
});
