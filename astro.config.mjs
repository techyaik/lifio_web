// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://lifio.app',
  integrations: [sitemap()],
  // The old address of the privacy policy; the app and the store listing link to /privacy.
  redirects: {
    '/privacy-policy': '/privacy',
  },
  // Figtree, the app's typeface. Downloaded at build time and served from the site itself,
  // so visitors' browsers never contact a font service.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Figtree',
      cssVariable: '--font-figtree',
      weights: ['400 800'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
