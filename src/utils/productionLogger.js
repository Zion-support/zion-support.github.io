// Simple production logger utility
export function logErrorToProduction(message, error) {
  // In production, you might want to send this to a logging service
  // For now, we'll just use console.error in development
  if (process.env.NODE_ENV === 'development') {
    console.error(message, error);
  }
  
  // In production, you could send to:
  // - Sentry
  // - LogRocket
  // - Custom logging service
  // - Analytics service
}