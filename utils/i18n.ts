// Mock i18n implementation - replace with actual i18next setup
const supportedLocales = ['en', 'es', 'fr', 'de'];

const i18n = {
  isInitialized: false,
  use: (plugin: any) => i18n,
  init: (config: any) => {
    i18n.isInitialized = true;
    return i18n;
  },
  t: (key: string, options?: any) => key,
  changeLanguage: (lng: string) => Promise.resolve(),
  language: 'en'
};

// Mock plugins
const Backend = {};
const LanguageDetector = {};
const initReactI18next = {};

if (!i18n.isInitialized) {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      supportedLngs: supportedLocales as unknown as string[],
      interpolation: {
        escapeValue: false
      },
      resources: {},
      ns: ['common'],
      defaultNS: 'common'
    } as any);
}

export default i18n;