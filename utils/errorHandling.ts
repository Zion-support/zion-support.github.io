/**
 * Error Handling Utilities
 * Simple error handling functions for the application
 */

export interface ErrorLog {
  timestamp: number;
  level: 'error' | 'warn' | 'info' | 'debug';
  message: string;
  stack?: string;
  context?: Record<string, any>;
}

export const logError = (error: Error | string, context?: Record<string, any>) => {
  const errorLog: ErrorLog = {
    timestamp: Date.now(),
    level: 'error',
    message: typeof error === 'string' ? error : error.message,
    stack: typeof error === 'object' && error.stack ? error.stack : undefined,
    context
  };
  
  console.error('Error logged:', errorLog);
};

export const logInfo = (message: string, context?: Record<string, any>) => {
  const errorLog: ErrorLog = {
    timestamp: Date.now(),
    level: 'info',
    message,
    context
  };
  
  console.log('Info logged:', errorLog);
};

export const setupGlobalErrorHandling = () => {
  if (typeof window === 'undefined') return;
  
  window.addEventListener('error', (event) => {
    logError(event.error || event.message, {
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno
    });
  });
  
  window.addEventListener('unhandledrejection', (event) => {
    logError(event.reason || 'Unhandled Promise Rejection', {
      promise: event.promise
    });
  });
  
  console.log('Global error handling initialized');
};

export const monitorPerformance = () => {
  if (typeof window === 'undefined' || !('performance' in window)) return;
  
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (perfData) {
        const loadTime = perfData.loadEventEnd - perfData.fetchStart;
        if (loadTime > 3000) {
          logError('Slow page load detected', {
            loadTime,
            type: 'performance'
          });
        }
      }
    }, 0);
  });
};

export const handleNetworkError = (error: Error, endpoint: string) => {
  logError(error, {
    endpoint,
    type: 'network'
  });
  
  return { offline: false };
};

export const withErrorHandling = <T extends (...args: any[]) => any>(
  fn: T,
  context?: string
): T => {
  return ((...args: Parameters<T>) => {
    try {
      const result = fn(...args);
      if (result instanceof Promise) {
        return result.catch((error) => {
          logError(error, { context, args });
          throw error;
        });
      }
      return result;
    } catch (error) {
      logError(error as Error, { context, args });
      throw error;
    }
  }) as T;
};

export const getErrorMetrics = (): { totalErrors: number; errorRate: number } => {
  return {
    totalErrors: 0,
    errorRate: 0
  };
};

export const isErrorRateTooHigh = (threshold: number = 5): boolean => {
  return false;
};

export default {
  logError,
  logInfo,
  setupGlobalErrorHandling,
  monitorPerformance,
  handleNetworkError,
  withErrorHandling,
  getErrorMetrics,
  isErrorRateTooHigh
};
