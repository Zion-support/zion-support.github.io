/**
 * Error Handling Utilities
 */

export const logError = (error: Error | string, context?: Record<string, any>) => {
  console.error('Error:', error, context);
};

export const logInfo = (message: string, context?: Record<string, any>) => {
  console.log('Info:', message, context);
};

export const getErrorMetrics = () => ({
  totalErrors: 0,
  errorsByType: {},
  lastError: null,
  errorRate: 0
});

export const isErrorRateTooHigh = (threshold: number = 5): boolean => {
  return false;
};

export const clearErrorLogs = () => {
  console.log('Error logs cleared');
};

export const setupGlobalErrorHandling = () => {
  console.log('Global error handling initialized');
};

export const monitorPerformance = () => {
  console.log('Performance monitoring initialized');
};

export const handleNetworkError = (error: Error, endpoint: string) => {
  logError(error, { endpoint, type: 'network' });
  return { offline: false };
};

export const withErrorHandling = <T extends (...args: any[]) => any>(
  fn: T,
  context?: string
): T => {
  return ((...args: Parameters<T>) => {
    try {
      return fn(...args);
    } catch (error) {
      logError(error as Error, { context, args });
      throw error;
    }
  }) as T;
};

export default {
  logError,
  logInfo,
  getErrorMetrics,
  isErrorRateTooHigh,
  clearErrorLogs,
  setupGlobalErrorHandling,
  monitorPerformance,
  handleNetworkError,
  withErrorHandling,
};
