import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
export const supportedLocales = $2;
export type SupportedLocale = $2;
export const isRtl = (lng?: string) => (lng || i18n.language)?.startsWith($2);
export const resources: Record<string, { translation: Record<string, string> }> = {
  en: { translation: {} },
  pt: { translation: {} },
  es: { translation: {} },
  ar: { translation: {} },

if (!i18n.isInitialized) {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      supportedLngs: supportedLocales as unknown as string[],
      interpolation: { escapeValue: false},
      resources,
      detection: {
        order: ['localStoragenavigatorhtmlTagcookiepathsubdomain'],
        caches: ['localStorage']},
      react: { useSuspense: false},
      backend: {
        loadPath: '/locales/{lng}/{ns}.json'},
      ns: ['common'],
      defaultNS: 'common'} as any)
}

export default i18n,