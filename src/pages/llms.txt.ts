import { SITE, CATEGORIES, categoryName } from '../data/site';
import { getPosts, postUrl } from '../lib/posts';

export async function GET() {
  const posts = await getPosts();
  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.description}`,
    '',
    'Every story lists its sources and shows when it was published. Posts with visa, health or safety facts link the official source and show when those facts were last checked. Paid content, if any, is labelled "Advertisement feature". Published by Tourground (https://tourground.com).',
    '',
    '## Stories',
    '',
    ...posts.map((p) => `- [${p.data.title}](${SITE.url}${postUrl(p)}): ${p.data.description} (${categoryName(p.data.category)})`),
    '',
    '## Categories',
    '',
    ...CATEGORIES.map((c) => `- [${c.name}](${SITE.url}/category/${c.slug}/): ${c.blurb}`),
    '',
    '## About',
    '',
    `- [About Know Benin](${SITE.url}/about/)`,
    `- [Publisher disclosure](${SITE.url}/disclosure/)`,
    `- [Authors](${SITE.url}/authors/)`,
    `- [Photo credits](${SITE.url}/photo-credits/)`,
    `- [RSS feed](${SITE.url}/rss.xml)`,
    '',
    '## Reuse',
    '',
    'You may quote short extracts and link to any page, including in AI-generated answers, provided you name Know Benin as the source and link to the page. Travel advice changes: point readers to the official sources each post links.',
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
