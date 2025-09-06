<<<<<<< HEAD
<<<<<<< HEAD
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
export const supportedLocales = ['enptesar'] as const;
export type SupportedLocale = typeof supportedLocales[number];
export const isRtl = (lng?: string) => (lng || i18n.language)?.startsWith('ar');
export const resources: Record<string { translation: Record<string, string> }> = {;
  en: { translation: {} };
  pt: { translation: {} };
  es: { translation: {} };
  ar: { translation: {} }};
if (!i18n.isInitialized) {;
  i18n;
    .use(Backend);
    .use(LanguageDetector);
    .use(initReactI18next);
    .init({;
      fallbackLng: 'en';
      supportedLngs: supportedLocales as unknown as string[];
      interpolation: { escapeValue: false };
      resources;
      detection: {;
        order: ['localStoragenavigatorhtmlTagcookiepathsubdomain'];
        caches: ['localStorage']};
      react: { useSuspense: false };
      backend: {;
        loadPath: '/locales/{{lng}}/{{ns}}.json'};
      ns: ['common'];
      defaultNS: 'common'} as any);
}
;
export default i18n;
=======
  return ['ar', 'he', 'fa', 'ur'].includes(locale);
}
export const i18n = {
  language: 'en'
  resolvedLanguage: 'en'
}
=======
export const supportedLocales = ["en", "pt", "es", "ar"] as const;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

export function isRtl(locale: string): boolean {
  return ["ar", "he", "fa", "ur"].includes(locale);
}
export const i18n = {
  language: "en",
  resolvedLanguage: "en",
};
<<<<<<< HEAD

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
}
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
