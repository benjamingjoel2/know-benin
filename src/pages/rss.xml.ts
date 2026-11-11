import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE, categoryName } from '../data/site';
import { getPosts, postUrl } from '../lib/posts';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site ?? SITE.url,
    trailingSlash: true,
    items: posts.map((p) => ({
      title: p.data.sponsored ? `Advertisement feature: ${p.data.title}` : p.data.title,
      description: p.data.description,
      link: postUrl(p),
      pubDate: p.data.publishDate,
      categories: [categoryName(p.data.category)],
      author: `${SITE.email} (Know Benin editors)`,
    })),
    customData: `<language>en-gb</language><copyright>Tourground</copyright>`,
  });
}
