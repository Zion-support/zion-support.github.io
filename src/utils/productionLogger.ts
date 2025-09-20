// Production logging utility
export function logErrorToProduction(message: string, data?: any) {
  // In a real application, this would send logs to a service like Sentry, LogRocket, etc.
  console.error('Production Error:', message, data);
  
  // Example integration with Sentry
  if (typeof window !== 'undefined' && (window as any).Sentry) {
    (window as any).Sentry.captureException(new Error(message), {
      extra: data,
    });
  }
  
  // Example integration with LogRocket
  if (typeof window !== 'undefined' && (window as any).LogRocket) {
    (window as any).LogRocket.captureException(new Error(message), {
      extra: data,
    });
  }
}

export function logInfoToProduction(message: string, data?: any) {
  console.info('Production Info:', message, data);
}

export function logWarningToProduction(message: string, data?: any) {
  console.warn('Production Warning:', message, data);
}