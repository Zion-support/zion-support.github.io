// Simple production logger utility
export function logErrorToProduction(message, error) {
  // In production, you might want to send this to a logging service
  // For now, we'll just use console.error as a fallback
  if (typeof console !== 'undefined' && console.error) {
    console.error(message, error);
  }
  
  // You can add production logging here, such as:
  // - Sentry
  // - LogRocket
  // - Custom logging service
  // - Analytics service
}