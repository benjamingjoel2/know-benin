// Photos are real Wikimedia Commons images, served from our own domain through
// Vercel Image Optimization (/_vercel/image), which resizes and converts them to AVIF/WebP.
export const WIDTHS = [640, 1024, 1280];

export const optimized = (photo, w) =>
  `/_vercel/image?url=${encodeURIComponent(photo.src)}&w=${w}&q=72`;

export function srcset(_key, photo) {
  return WIDTHS.filter((w) => w <= photo.width || w === WIDTHS[0])
    .map((w) => `${optimized(photo, w)} ${Math.min(w, photo.width)}w`)
    .join(', ');
}

export const defaultSrc = (photo) => optimized(photo, 1024);

export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function creditHtml(photo) {
  const lic = photo.licenseUrl
    ? `<a href="${esc(photo.licenseUrl)}" rel="license noopener">${esc(photo.license)}</a>`
    : esc(photo.license);
  return `Photo: <a href="${esc(photo.source)}" rel="noopener">${esc(photo.author)}</a>, ${lic}, via Wikimedia Commons`;
}
