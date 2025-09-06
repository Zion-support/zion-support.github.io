// i18n utilities
export const supportedLocales = ['en', 'pt', 'es', 'ar'] as const;
export type SupportedLocale = typeof supportedLocales[number];

export const defaultLocale: SupportedLocale = 'en';

export const localeNames: Record<SupportedLocale, string> = {
  en: 'English',
  pt: 'Português',
  es: 'Español',
  ar: 'العربية'
};

export const rtlLocales: SupportedLocale[] = ['ar'];

export function isRtl(locale: string): boolean {
  return rtlLocales.includes(locale as SupportedLocale);
}

export function getLocaleFromPathname(pathname: string): SupportedLocale {
  const segments = pathname.split('/');
  const firstSegment = segments[1];
  
  if (supportedLocales.includes(firstSegment as SupportedLocale)) {
    return firstSegment as SupportedLocale;
  }
  
  return defaultLocale;
}

export function getLocalizedPath(pathname: string, locale: SupportedLocale): string {
  const segments = pathname.split('/');
  const currentLocale = getLocaleFromPathname(pathname);
  
  if (currentLocale === locale) {
    return pathname;
  }
  
  if (currentLocale !== defaultLocale) {
    segments.splice(1, 1);
  }
  
  if (locale !== defaultLocale) {
    segments.splice(1, 0, locale);
  }
  
  return segments.join('/');
}

// Mock i18n instance for development
export const i18n = {
  language: defaultLocale,
  changeLanguage: (locale: string) => {
    console.log('Language changed to:', locale);
  },
  t: (key: string, options?: any) => {
    // Mock translation function
    return key;
  }
};