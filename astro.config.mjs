// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://debopriyobasu.in',
  integrations: [mdx()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'hi', 'bn'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});