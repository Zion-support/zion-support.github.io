export const setupGlobalErrorHandling = () => {
  // Global error handler for unhandled errors
  window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
    // In production, send to error reporting service
    if (process.env.NODE_ENV === 'production') {
      // Example: errorReportingService.captureException(event.error);
    }
  });

  // Global handler for unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    // In production, send to error reporting service
    if (process.env.NODE_ENV === 'production') {
      // Example: errorReportingService.captureException(event.reason);
    }
  });
};

export const monitorPerformance = () => {
  // Monitor Core Web Vitals
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Monitor page load performance
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        console.log('Page load time:', navigation.loadEventEnd - navigation.loadEventStart, 'ms');
      }
    });
  }
};