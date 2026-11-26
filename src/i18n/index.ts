import en from './en';
import de from './de';
import fr from './fr';
import type { Dict } from './en';

export const locales = ['en', 'de', 'fr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
};

const dicts: Record<Locale, Dict> = { en, de, fr };

export function t(locale: Locale): Dict {
  return dicts[locale];
}

/** Builds a path inside a locale, e.g. path('de', 'donate') → '/de/donate/'. */
export function path(locale: Locale, page = ''): string {
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  const clean = page.replace(/^\/|\/$/g, '');
  return `${prefix}/${clean}${clean && !clean.includes('#') ? '/' : ''}`;
}

/** getStaticPaths for pages under src/pages/[...lang]/. */
export function localePaths() {
  return locales.map((locale) => ({
    params: { lang: locale === defaultLocale ? undefined : locale },
    props: { locale },
  }));
}
