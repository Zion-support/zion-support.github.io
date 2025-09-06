<<<<<<< HEAD
export const supportedLocales = ["en", "pt", "es", "ar"] as const;

=======
  return ['ar', 'he', 'fa', 'ur'].includes(locale);
}
export const i18n = {
  language: 'en'
  resolvedLanguage: 'en'
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}
}
export const supportedLocales = ['en', 'pt', 'es', 'ar'] as const;
export function isRtl(locale: string): boolean {
  return ["ar", "he", "fa", "ur"].includes(locale);
}
export const i18n = {
  language: "en",
  resolvedLanguage: "en",
};
}
}
}
