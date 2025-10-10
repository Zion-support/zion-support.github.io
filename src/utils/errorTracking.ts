export const reportError = (error: Error, context?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      description: error.message,
      fatal: false,
      ...context,
    });
  }
  
  // Also log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error('Error reported:', error, context);
  }
};

export const initErrorReporting = () => {
  if (typeof window !== 'undefined') {
    // Global error handler
    window.addEventListener('error', (event) => {
      reportError(event.error, {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      reportError(new Error(event.reason), {
        type: 'unhandledrejection',
      });
    });
  }
};