import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { remarkPhotos } from './src/lib/remark-photos.mjs';

export default defineConfig({
  site: 'https://knowbenin.tourground.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
  prefetch: false,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  markdown: {
    remarkPlugins: [remarkPhotos],
    smartypants: true,
  },
});
