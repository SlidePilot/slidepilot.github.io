// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://slidepilotapp.com',
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr'],
    routing: { prefixDefaultLocale: false },
  },
});
