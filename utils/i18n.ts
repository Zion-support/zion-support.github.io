<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return ['ar', 'he', 'fa', 'ur'].includes(locale);
}
export const i18n = {
  language: 'en'
  resolvedLanguage: 'en'
=======
export const supportedLocales = ["en", "pt", "es", "ar"] as const;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
}
<<<<<<< HEAD
=======
export const supportedLocales = ["en", "pt", "es", "ar"] as const;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  language: 'en',
  resolvedLanguage: 'en';
};


export const supported_locales = ['en', 'pt', 'es', 'ar'] as const;
;
export function is_rtl (locale: string): boolean {
  return ['ar', 'he', 'fa', 'ur'].includes (locale);
}
export const i18n = {
=======


export function isRtl(locale: string): boolean {;

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return ['ar', 'he', 'fa', 'ur'].includes(locale);
}
export const i18n = {
  language: 'en'
  resolvedLanguage: 'en'
}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}
export const supportedLocales = ['en', 'pt', 'es', 'ar'] as const;
export function isRtl(locale: string): boolean {
=======
export function isRtl(locale: string): boolean {";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return ["ar", "he", "fa", "ur"].includes(locale);
}
export const i18n = {"
  language: "en","
  resolvedLanguage: "en",;
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
}
}
}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> main
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}
}
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
