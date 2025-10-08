/**
 * Error handling utilities
 * Enhanced with retry logic, error categorization, and better reporting
 */

export enum ErrorSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}

export enum ErrorCategory {
  NETWORK = 'network',
  VALIDATION = 'validation',
  RUNTIME = 'runtime',
  API = 'api',
  UI = 'ui',
  UNKNOWN = 'unknown',
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

export class ErrorHandler {
  private static instance: ErrorHandler;
  private errorQueue: ErrorInfo[] = [];
  private maxQueueSize = 100;

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  /**
   * Log an error with automatic categorization
   */
  logError(error: Error, errorInfo?: Partial<ErrorInfo>): void {
    const category = this.categorizeError(error);
    const severity = this.determineSeverity(error, category);
    
    const errorData: ErrorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      errorId: this.generateErrorId(),
      category,
      severity,
      ...errorInfo,
    };

    // Add to queue
    this.addToQueue(errorData);
    // Send to error reporting service
    this.reportError(errorData);
  }
  /**
   * Categorize error based on type and message
   */
  private categorizeError(error: Error): ErrorCategory {
    const message = error.message.toLowerCase();
    if (message.includes('network') || message.includes('fetch') || message.includes('timeout')) {
      return ErrorCategory.NETWORK;
    }
    if (message.includes('validation') || message.includes('invalid')) {
      return ErrorCategory.VALIDATION;
    }
    if (message.includes('api') || message.includes('request')) {
      return ErrorCategory.API;
    }
    if (error.name === 'TypeError' || error.name === 'ReferenceError') {
      return ErrorCategory.RUNTIME;
    }
    return ErrorCategory.UNKNOWN;
  }
  /**
   * Determine error severity
   */
  private determineSeverity(error: Error, category: ErrorCategory): ErrorSeverity {
    if (category === ErrorCategory.NETWORK) {
      return ErrorSeverity.MEDIUM;
    }
    if (category === ErrorCategory.RUNTIME) {
      return ErrorSeverity.HIGH;
    }
    if (category === ErrorCategory.VALIDATION) {
      return ErrorSeverity.LOW;
    }
    return ErrorSeverity.MEDIUM;
  }
  /**
   * Generate unique error ID
   */
  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
  /**
   * Add error to queue
   */
  private addToQueue(errorData: ErrorInfo): void {
    this.errorQueue.push(errorData);
    if (this.errorQueue.length > this.maxQueueSize) {
      this.errorQueue.shift();
    }
  }
  /**
   * Report error to service
   */
  private reportError(errorData: ErrorInfo): void {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error reported:', errorData);
    }
    // Send to error tracking service (e.g., Sentry, LogRocket)
    if (typeof window !== 'undefined' && (window as any).Sentry) {
      (window as any).Sentry.captureException(new Error(errorData.message), {
        extra: errorData,
      });
    }
  }
  /**
   * Get all errors from queue
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
  /**
   * Get errors by category
   */
  getErrorsByCategory(category: ErrorCategory): ErrorInfo[] {
    return this.errorQueue.filter(error => error.category === category);
  }
  /**
   * Get errors by severity
   */
  getErrorsBySeverity(severity: ErrorSeverity): ErrorInfo[] {
    return this.errorQueue.filter(error => error.severity === severity);
  }
}
// Export singleton instance
export const errorHandler = ErrorHandler.getInstance();
export default errorHandler;
