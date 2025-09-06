// Placeholder for i18n utilities
export const supportedLocales = ['en', 'pt', 'es', 'ar'];

export const isRtl = (locale: string) => {
  return locale === 'ar';
};

export default {
  supportedLocales,
  isRtl
};