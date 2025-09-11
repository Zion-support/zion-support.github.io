
export const supported_locales = ['en', 'pt', 'es', 'ar'] as const;
;
export function is_rtl (locale: string): boolean {
  return ['ar', 'he', 'fa', 'ur'].includes (locale);
}
export const i18n = {
=======


export function isRtl(locale: string): boolean {;

  return ['ar', 'he', 'fa', 'ur'].includes(locale);
}
export const i18n = {



=======

  language: 'en',
  resolved_language: 'en';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
