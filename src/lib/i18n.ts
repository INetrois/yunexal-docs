export const docsLocales = [
  { locale: 'en', name: 'English' },
  { locale: 'uk', name: 'Українська' },
] as const;

export type DocsLocale = (typeof docsLocales)[number]['locale'];

export const defaultDocsLocale: DocsLocale = 'en';

export function isDocsLocale(value: string): value is DocsLocale {
  return docsLocales.some((item) => item.locale === value);
}
