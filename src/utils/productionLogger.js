// Production logger utility
export function logErrorToProduction(message, error) {
  // In production, you might want to send errors to a logging service
  // For now, we'll just use console.error as a fallback
  if (process.env.NODE_ENV === 'development') {
    console.error(message, error);
  }
  
  // TODO: Implement production logging service (e.g., Sentry, LogRocket, etc.)
  // if (process.env.NODE_ENV === 'production') {
  //   // Send to production logging service
  // }
}