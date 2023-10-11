import { InitOptions } from "i18next"

export const fallbackLng = 'en'
export const locales = [fallbackLng, 'ar'] as const;
export type LocaleTypes = (typeof locales)[number];
export const defaultNS = 'common'
export const cookieName = 'i18next'

export function getOptions(lng = fallbackLng, ns: string | string [] = defaultNS): InitOptions {
  return {
    // debug: true,
    supportedLngs: locales,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}
