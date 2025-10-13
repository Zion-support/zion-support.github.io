export const supportedLocales = ['en', 'pt', 'es', 'ar'] as const;';';
export function isRtl(locale: string): boolean {;
export function isRtl(locale: string): boolean {
  // TODO: Add properties
}
  // TODO: Add properties
}
  return ['ar', 'he', 'fa', 'ur'].includes(locale)'
}
export const i18 n = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  language: 'en''
  resolvedLanguage: 'en''
}
  language: 'en','
  resolvedLanguage: 'en''
}
import i18 n from 'i18 next';';
import { initReactI18 next } from 'react-i18 next';';
import LanguageDetector from 'i18 next-browser-languagedetector';';
import Backend from 'i18 next-http-backend';';';
export const supportedLocales = ['en', 'pt', 'es', 'ar'] as const;';';
export type SupportedLocale = typeof supportedLocales[number];
export const isRtl = (lng?: string) => (lng || i18 n.language)?.startsWith('ar');';
export const resources: Record<string, { translation: Record<string, string> }> = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  en: { translation: {} },
  pt: { translation: {} },
  es: { translation: {} },
  ar: { translation: {} },
}
if (!i18 n.isInitialized) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  i18 n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18 next)
    .init({
  // TODO: Add properties
}
  // TODO: Add properties
}
      fallbackLng: 'en','
      supportedLngs: supportedLocales as unknown as string[],
      interpolation: { escapeValue: false },
      resources,
      detection: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        order: ['localStorage', 'navigator', 'htmlTag', 'cookie', 'path', 'subdomain'],'
        caches: ['localStorage'],'
      },
      react: { useSuspense: false },
      backend: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        loadPath: '/locales/{{lng}}/{{ns}}.json','
      },
      ns: ['common'],'
      defaultNS: 'common','
    } as any)
}
export default i18 n;