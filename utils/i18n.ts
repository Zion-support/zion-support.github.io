<<<<<<< HEAD

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
=======
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

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
  language: 'en',
  resolvedLanguage: 'en';
};
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
