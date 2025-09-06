<<<<<<< HEAD
export const supportedLocales = ['en', 'pt', 'es', 'ar'] as const;
<<<<<<< HEAD
export function isRtl(locale: string): boolean {
=======

export function isRtl(locale: string): boolean {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return ['ar', 'he', 'fa', 'ur'].includes(locale);
}
export const i18n = {
<<<<<<< HEAD
  language: 'en'
  resolvedLanguage: 'en'
}
=======
<<<<<<< HEAD
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
}

export const supportedLocales = ['en', 'pt', 'es', 'ar'] as const;
export type SupportedLocale = (typeof supportedLocales)[number];
}

export const isRtl = (lng?: string) => (lng || i18n.language)?.startsWith('ar');
}

export const resources: Record<
  string,
  { translation: Record<string, string> }
> = {
  en: { translation: {} },
  pt: { translation: {} },
  es: { translation: {} },
  ar: { translation: {} },
};

if (!i18n.isInitialized) {
  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      supportedLngs: supportedLocales as unknown as string[],
      interpolation: { escapeValue: false },
      resources,
      detection: {
        order: [
          'localStorage',
          'navigator',
          'htmlTag',
          'cookie',
          'path',
          'subdomain',
        ],
        caches: ['localStorage'],
      },
      react: { useSuspense: false },
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
      },
      ns: ['common'],
      defaultNS: 'common',
    } as any);
}

export default i18n;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
  language: 'en',
  resolvedLanguage: 'en';
};
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
