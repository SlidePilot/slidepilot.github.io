import type { ImageMetadata } from 'astro';
import type { Locale } from '../i18n';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/screens/*.png', { eager: true });

/** Returns the screenshot for a locale, falling back to English. */
export function screen(name: string, locale: Locale): ImageMetadata {
  const pick = (l: string) => files[`../assets/screens/${name}-${l}.png`]?.default;
  const img = pick(locale) ?? pick('en');
  if (!img) throw new Error(`Missing screenshot ${name}`);
  return img;
}
