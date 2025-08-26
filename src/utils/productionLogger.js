// Simple production logger utility
export const logErrorToProduction = (message, error) => {
  // In production, you might want to send this to a logging service
  // For now, we'll just console.log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('Production Logger:', message, error);
  }
  
  // In production, you could send to:
  // - Sentry
  // - LogRocket
  // - Custom logging service
  // - Analytics service
};