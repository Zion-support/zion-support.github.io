// Error tracking utility
export const reportError = (error: Error, context?: Record<string, any>) => {
  console.error('[Error Tracking]', error, context);
  
  // In a real application, you would send this to an error tracking service
  // like Sentry, LogRocket, or Bugsnag
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      description: error.message,
      fatal: false,
      custom_map: context,
    });
  }
};

export const initErrorReporting = () => {
  console.log('[Error Tracking] Initialized');
  
  // Global error handler
  if (typeof window !== 'undefined') {
    window.addEventListener('error', (event) => {
      reportError(event.error, {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      });
    });
    
    window.addEventListener('unhandledrejection', (event) => {
      reportError(new Error(event.reason), {
        type: 'unhandledrejection',
      });
    });
  }
};