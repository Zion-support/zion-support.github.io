// Simple production logger utility
export function logErrorToProduction(message, error) {
  // In production, you might want to send this to a logging service
  // For now, just console.error in development
  if (process.env.NODE_ENV === 'development') {
    console.error('Production Logger:', message, error);
  }
  
  // In a real production environment, you would send this to:
  // - Sentry
  // - LogRocket
  // - Custom logging service
  // - Error tracking service
}