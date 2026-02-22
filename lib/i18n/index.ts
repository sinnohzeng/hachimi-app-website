import { en } from "./en";
import { zh } from "./zh";
import type { Translations } from "./types";

export const locales = ["en", "zh"] as const;
export type Locale = (typeof locales)[number];

const translations: Record<Locale, Translations> = { en, zh };

export function getTranslations(locale: string): Translations {
  if (locale in translations) {
    return translations[locale as Locale];
  }
  return translations.en;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export type { Translations };
