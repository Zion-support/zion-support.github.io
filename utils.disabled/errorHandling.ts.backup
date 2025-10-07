/**
 * Error Handling Utilities
 */
<<<<<<< HEAD:utils/errorHandling.ts

interface ErrorInfo {
  componentStack?: string;
  errorBoundary?: string;
export interface ErrorInfo {
  componentStack?: string;
  errorBoundary?: string;
  errorBoundaryName?: string;
  errorBoundaryStack?: string;
}

export class ErrorHandler {
  static handle(error: Error, context?: string): void {
    console.error(`Error${context ? ` in ${context}` : ''}:`, error);
  }

  static async handleAsync(error: Error, context?: string): Promise<void> {
    console.error(`Async Error${context ? ` in ${context}` : ''}:`, error);
  }
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

<<<<<<< HEAD:utils/errorHandling.ts
export const isErrorRateTooHigh = (threshold = 5) => {
  // For now, always return false as we don't have actual error tracking
  console.log(`Checking error rate against threshold: ${threshold}`);
  return false;
export const clearErrorMetrics = () => {
  // Clear error metrics
  console.log('Error metrics cleared');
};

export const reportError = (error: Error, errorInfo?: ErrorInfo) => {
  // Report error to external service
  console.log('Error reported:', error.message, errorInfo);
};

<<<<<<< HEAD:utils/errorHandling.ts
export const monitorPerformance = () => {
  console.log('Performance monitoring setup');
};

export default ErrorHandler;