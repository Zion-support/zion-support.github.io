// i18n utilities
export const supportedLocales = ['en', 'pt', 'es', 'ar'] as const;

export type SupportedLocale = typeof supportedLocales[number];

export function isRtl(locale: string): boolean {
  return ['ar', 'he', 'fa', 'ur'].includes(locale);
}

export function getLocaleFromPathname(pathname: string): string | null {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  if (supportedLocales.includes(firstSegment as SupportedLocale)) {
    return firstSegment;
  }
  
  return null;
}

export function getPathnameWithoutLocale(pathname: string): string {
  const locale = getLocaleFromPathname(pathname);
  if (locale) {
    return pathname.replace(`/${locale}`, '') || '/';
  }
  return pathname;
}

export function addLocaleToPathname(pathname: string, locale: string): string {
  if (locale === 'en') {
    return pathname;
  }
  
  const pathWithoutLocale = getPathnameWithoutLocale(pathname);
  return `/${locale}${pathWithoutLocale}`;
}

export function getBrowserLocale(): string {
  if (typeof window === 'undefined') return 'en';
  
  const browserLocale = navigator.language || 'en';
  const normalized = browserLocale.split('-')[0];
  
  return supportedLocales.includes(normalized as SupportedLocale) ? normalized : 'en';
}

export function getStoredLocale(): string | null {
  if (typeof window === 'undefined') return null;
  
  return localStorage.getItem('preferredLanguage');
}

export function setStoredLocale(locale: string): void {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('preferredLanguage', locale);
}

export function getInitialLocale(): string {
  return getStoredLocale() || getBrowserLocale();
}