/**
 * Error Handling Utilities
 */
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

};

export const reportError = (error: Error, errorInfo?: ErrorInfo) => {
  // Report error to external service
  console.log('Error reported:', error.message, errorInfo);
};

export default ErrorHandler;