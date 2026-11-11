export const SITE = {
  name: 'Know Benin',
  url: 'https://knowbenin.tourground.com',
  tagline: 'Travel stories for people planning a trip to Benin',
  description:
    'Story-led, practical travel writing about Benin: history, culture, Vodun, the coast and the north, with official sources and a verified local operator for every trip. Published by Tourground.',
  email: 'knowbenin@tourground.com',
  publisher: { name: 'Tourground', url: 'https://tourground.com' },
  directoryUrl: 'https://tourground.com/#/explore',
  locale: 'en_GB',
  lang: 'en-GB',
  launched: '2026-11-11',
};

export const CATEGORIES = [
  { slug: 'destinations', name: 'Destinations', blurb: 'Cotonou, Porto-Novo, Ouidah, Abomey, Ganvié and the north: what each place is like and how a visit works.' },
  { slug: 'history-heritage', name: 'History & Heritage', blurb: 'The kingdom of Dahomey, the slave route, Afro-Brazilian towns and the architecture of the Atakora.' },
  { slug: 'vodun-festivals', name: 'Vodun & Festivals', blurb: 'Vodun as a living religion, the January celebrations in Ouidah, and how to be a respectful guest.' },
  { slug: 'wildlife', name: 'Wildlife', blurb: 'Pendjari, the W-Arly-Pendjari complex and the savannah of the north, with current travel advice.' },
  { slug: 'itineraries', name: 'Itineraries', blurb: 'Day-by-day routes through Benin, and how to combine it with Togo and Ghana.' },
  { slug: 'travel-tips', name: 'Travel Tips', blurb: 'Visas, health, money, getting around and the questions to ask before you book.' },
] as const;

export const PLACES = [
  { slug: 'cotonou', name: 'Cotonou', blurb: 'The economic capital on the lagoon, and where most trips begin.' },
  { slug: 'porto-novo', name: 'Porto-Novo', blurb: 'The official capital: Afro-Brazilian houses, the Great Mosque and royal palaces.' },
  { slug: 'ouidah', name: 'Ouidah', blurb: 'The Route des Esclaves, the Door of No Return and the centre of Vodun.' },
  { slug: 'abomey', name: 'Abomey', blurb: 'The royal palaces of the kings of Dahomey, a World Heritage site.' },
  { slug: 'ganvie', name: 'Ganvié', blurb: 'The town on stilts in Lake Nokoué, reached by pirogue.' },
  { slug: 'north-pendjari', name: 'The north & Pendjari', blurb: 'The Atakora hills, Tata Somba houses and Pendjari National Park. Check travel advice first.' },
] as const;

export const AUTHORS = [
  {
    slug: 'know-benin-editors',
    name: 'Know Benin editors',
    role: 'Editorial desk, Tourground',
    bio: 'The Know Benin desk researches and writes every story from official and published sources, which are listed at the end of each post. We check safety, visa and health facts against the official source and show the date we last did so.',
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];
export type PlaceSlug = (typeof PLACES)[number]['slug'];

export const categoryName = (s: string) => CATEGORIES.find((c) => c.slug === s)?.name ?? s;
export const placeName = (s: string) => PLACES.find((p) => p.slug === s)?.name ?? s;
