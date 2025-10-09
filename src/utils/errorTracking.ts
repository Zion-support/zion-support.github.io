// Error tracking utility for reporting errors
export const reportError = (error: Error, context?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error reported:', error, context);
    }

    // Send to error reporting service
    if ((window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: context,
      });
    }

    // Send to custom error reporting service
    if ((window as any).errorReportingService) {
      (window as any).errorReportingService.report(error, context);
    }
  }
};

export const initErrorReporting = (config?: Record<string, any>) => {
  if (typeof window !== 'undefined') {
    // Initialize global error handlers
    window.addEventListener('error', (event) => {
      reportError(event.error, {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        type: 'javascript_error',
      });
    });

    window.addEventListener('unhandledrejection', (event) => {
      reportError(new Error(event.reason), {
        type: 'unhandled_promise_rejection',
        reason: event.reason,
      });
    });

    // Initialize error reporting service
    if (config?.serviceUrl) {
      (window as any).errorReportingService = {
        report: (error: Error, context: Record<string, any>) => {
          fetch(config.serviceUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              error: {
                message: error.message,
                stack: error.stack,
                name: error.name,
              },
              context,
              timestamp: new Date().toISOString(),
              userAgent: navigator.userAgent,
              url: window.location.href,
            }),
          }).catch(console.error);
        },
      };
    }
  }
};

export default {
  reportError,
  initErrorReporting,
};