import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORIES, PLACES } from './data/site';
import photos from './data/photos.json';

const photoKeys = Object.keys(photos) as [string, ...string[]];

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    category: z.enum(CATEGORIES.map((c) => c.slug) as [string, ...string[]]),
    places: z.array(z.enum(PLACES.map((p) => p.slug) as [string, ...string[]])).default([]),
    author: z.string().default('know-benin-editors'),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    hero: z.enum(photoKeys),
    heroAlt: z.string(),
    featured: z.boolean().default(false),
    startHere: z.boolean().default(false),
    officialInfo: z.boolean().default(false),
    advisory: z.string().optional(),
    sponsored: z.boolean().default(false),
    draft: z.boolean().default(false),
    plan: z.object({
      operator: z.string(),
      url: z.string().url(),
      label: z.string(),
      summary: z.string(),
    }),
    sources: z
      .array(
        z.object({
          title: z.string(),
          publisher: z.string().optional(),
          url: z.string().url(),
          accessed: z.coerce.date().optional(),
        }),
      )
      .default([]),
  }),
});

export const collections = { posts };
