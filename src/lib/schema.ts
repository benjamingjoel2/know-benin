import { SITE } from '../data/site';

export const ORG_ID = `${SITE.url}/#organization`;
export const SITE_ID = `${SITE.url}/#website`;

export const organization = () => ({
  '@type': 'Organization',
  '@id': ORG_ID,
  name: SITE.publisher.name,
  url: SITE.publisher.url,
  email: SITE.email,
  brand: { '@type': 'Brand', name: SITE.name },
});

export const website = () => ({
  '@type': 'WebSite',
  '@id': SITE_ID,
  name: SITE.name,
  url: `${SITE.url}/`,
  description: SITE.description,
  inLanguage: SITE.lang,
  publisher: { '@id': ORG_ID },
});

export type Crumb = { name: string; url: string };

export const breadcrumbList = (crumbs: Crumb[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: new URL(c.url, SITE.url).href,
  })),
});
