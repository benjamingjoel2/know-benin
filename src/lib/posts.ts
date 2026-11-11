import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'posts'>;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort(
    (a, b) =>
      b.data.publishDate.valueOf() - a.data.publishDate.valueOf() || a.data.title.localeCompare(b.data.title),
  );
}

export const postUrl = (p: Post) => `/stories/${p.id}/`;

export function readingTime(body = ''): number {
  const words = body.replace(/!\[[^\]]*\]\([^)]*\)/g, '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function relatedPosts(post: Post, all: Post[], n = 3): Post[] {
  const score = (o: Post) =>
    (o.data.category === post.data.category ? 3 : 0) +
    o.data.places.filter((pl) => post.data.places.includes(pl)).length * 2;
  return all
    .filter((o) => o.id !== post.id)
    .map((o) => ({ o, s: score(o) }))
    .sort((a, b) => b.s - a.s || b.o.data.publishDate.valueOf() - a.o.data.publishDate.valueOf())
    .slice(0, n)
    .map((x) => x.o);
}

export const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
