// Error handling utilities
export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
}

export const logError = (error: Error, errorInfo?: ErrorInfo) => {
  console.error('Error:', error.message, errorInfo);
};

export const handleError = (error: Error, errorInfo?: ErrorInfo) => {
  logError(error, errorInfo);
  // Additional error handling logic can be added here
};

export const getErrorMetrics = () => {
  return {
    errorCount: 0,
    errorRate: 0,
    lastError: null,
    totalErrors: 0
  };
};

export const isErrorRateTooHigh = () => {
  return false;
};

export const setupGlobalErrorHandling = () => {
  console.log('Global error handling setup');
};

export const monitorPerformance = () => {
  console.log('Performance monitoring setup');
};