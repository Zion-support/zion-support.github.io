export const logErrorToProduction = (message: string, error?: any) => {
  // In production, you might want to send errors to a logging service
  // For now, we'll just console.log in development
  if (process.env.NODE_ENV === 'development') {
    console.error(message, error);
  }
  
  // TODO: Implement production logging service (e.g., Sentry, LogRocket, etc.)
  // if (process.env.NODE_ENV === 'production') {
  //   // Send to production logging service
  // }
};