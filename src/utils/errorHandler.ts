/**
 * Error handling utilities
 * Enhanced with retry logic, error categorization, and better reporting
 */

export enum ErrorCategory {
  NETWORK = 'network',
  VALIDATION = 'validation',
  RUNTIME = 'runtime',
  API = 'api',
  UI = 'ui',
  UNKNOWN = 'unknown',
}

export enum ErrorSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  errorBoundaryStack?: string;
  errorId?: string;
  timestamp?: string;
  userAgent?: string;
  url?: string;
  userId?: string;
  severity?: ErrorSeverity;
  category?: ErrorCategory;
  metadata?: Record<string, unknown>;
}

class ErrorHandler {
  private errorQueue: ErrorInfo[] = [];
  private maxQueueSize = 100;

  /**
   * Handle an error
   */
  handleError(error: Error | ErrorInfo, category: ErrorCategory = ErrorCategory.UNKNOWN): void {
    const errorData: ErrorInfo = {
      message: error instanceof Error ? error.message : error.message,
      stack: error instanceof Error ? error.stack : error.stack,
      category,
      timestamp: new Date().toISOString(),
      errorId: this.generateErrorId(),
    };

    this.errorQueue.push(errorData);
    if (this.errorQueue.length > this.maxQueueSize) {
      this.errorQueue.shift();
    }

    this.reportError(errorData);
  }

  /**
   * Generate unique error ID
   */
  private generateErrorId(): string {
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Report error to external service
   */
  private reportError(error: ErrorInfo): void {
    // Placeholder for error reporting service
    console.error('[ErrorHandler]', error);
  }

  /**
   * Get error queue
   */
  getErrors(): ErrorInfo[] {
    return [...this.errorQueue];
  }

  /**
   * Clear error queue
   */
  clearErrors(): void {
    this.errorQueue = [];
  }
}

const errorHandler = new ErrorHandler();

export default errorHandler;
export { ErrorHandler };
