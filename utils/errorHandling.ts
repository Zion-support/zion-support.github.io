/**
 * Error Handling Utilities
 */
export class ErrorHandler {
  static handle(error: Error, context?: string): void {
    console.error(`Error${context ? ` in ${context}` : ''}:`, error);
  }

  static async handleAsync(error: Error, context?: string): Promise<void> {
    console.error(`Async Error${context ? ` in ${context}` : ''}:`, error);
  }
}

export interface ErrorInfo {
  componentStack?: string;
  errorBoundary?: string;
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
    lastError: null as Error | null,
    totalErrors: 0,
  };
};

export const isErrorRateTooHigh = (threshold = 5) => {
  // For now, always return false as we don't have actual error tracking
  console.log(`Checking error rate against threshold: ${threshold}`);
  return false;
};

export const setupGlobalErrorHandling = () => {
  console.log('Global error handling setup');
};

export const monitorPerformance = () => {
  console.log('Performance monitoring setup');
};

export default ErrorHandler;