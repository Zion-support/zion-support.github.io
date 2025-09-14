// Sentry utility functions for error tracking
export const captureException = (error: Error, context?: Record<string, any>) => {
  console.error('Sentry captureException:', error, context);
  // In a real implementation, this would send to Sentry
  // For now, just log to console
};

export const captureMessage = (message: string, level: 'info' | 'warning' | 'error' = 'info') => {
  console.log(`Sentry captureMessage [${level}]:`, message);
  // In a real implementation, this would send to Sentry
  // For now, just log to console
};

export const setUser = (user: { id: string; email?: string; username?: string }) => {
  console.log('Sentry setUser:', user);
  // In a real implementation, this would set user context in Sentry
};

export const setContext = (key: string, context: Record<string, any>) => {
  console.log('Sentry setContext:', key, context);
  // In a real implementation, this would set context in Sentry
};