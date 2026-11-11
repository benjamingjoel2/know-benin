import { readFileSync } from 'node:fs';
import { srcset, defaultSrc, esc, creditHtml } from './photo-html.mjs';

const photos = JSON.parse(readFileSync(new URL('../data/photos.json', import.meta.url), 'utf8'));

/** Turns a paragraph holding only `![alt](photo:key)` into a credited <figure>. */
export function remarkPhotos() {
  return (tree, file) => {
    const walk = (node) => {
      if (!node.children) return;
      node.children = node.children.map((child) => {
        if (
          child.type === 'paragraph' &&
          child.children.length === 1 &&
          child.children[0].type === 'image' &&
          child.children[0].url.startsWith('photo:')
        ) {
          const img = child.children[0];
          const key = img.url.slice(6);
          const p = photos[key];
          if (!p) throw new Error(`Unknown photo key "${key}" in ${file.path}`);
          const alt = img.alt || p.alt;
          return {
            type: 'html',
            value:
              `<figure class="post-figure"><img src="${esc(defaultSrc(p))}" srcset="${esc(srcset(key, p))}" ` +
              `sizes="(min-width: 760px) 720px, 100vw" width="${p.width}" height="${p.height}" alt="${esc(alt)}" loading="lazy" decoding="async">` +
              `<figcaption>${esc(p.caption)} <span class="credit">${creditHtml(p)}</span></figcaption></figure>`,
          };
        }
        walk(child);
        return child;
      });
    };
    walk(tree);
  };
}
