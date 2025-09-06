
export const supported_locales = ['en', 'pt', 'es', 'ar'] as const;
;
export function is_rtl (locale: string): boolean {
  return ['ar', 'he', 'fa', 'ur'].includes (locale);
}
export const i18n = {


export function isRtl(locale: string): boolean {;

  return ['ar', 'he', 'fa', 'ur'].includes(locale);
}
export const i18n = {




  language: 'en',
  resolved_language: 'en';
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}
=======
}
export const supportedLocales = ['en', 'pt', 'es', 'ar'] as const;
export function isRtl(locale: string): boolean {

export function isRtl(locale: string): boolean {;
  return ['ar', 'he', 'fa', 'ur'].includes(locale);
}
export const i18n = {
  language: 'en'
  resolvedLanguage: 'en'
}

  language: 'en',
  resolvedLanguage: 'en';
};

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
