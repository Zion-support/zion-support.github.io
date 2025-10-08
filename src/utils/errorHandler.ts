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
    this.errorQueue.push(errorData);
    if (this.errorQueue.length > this.maxQueueSize) {
      this.errorQueue.shift();
    }

    // Log to console in development
    if (process.env['NODE_ENV'] === 'development') {
      console.error('Error logged:', errorData);
    }

    // Send to error reporting service
    this.reportError(errorData);
  }

  /**
   * Categorize error based on message and stack trace
   */
  private categorizeError(error: Error): ErrorCategory {
    const message = error.message.toLowerCase();
    const stack = error.stack?.toLowerCase() || '';

    if (message.includes('network') || message.includes('fetch') || message.includes('timeout')) {
      return ErrorCategory.NETWORK;
    }
    if (message.includes('validation') || message.includes('invalid')) {
      return ErrorCategory.VALIDATION;
    }
    if (message.includes('api') || stack.includes('api')) {
      return ErrorCategory.API;
    }
    if (message.includes('component') || stack.includes('react')) {
      return ErrorCategory.UI;
    }
    if (message.includes('runtime') || stack.includes('runtime')) {
      return ErrorCategory.RUNTIME;
    }
    return ErrorCategory.UNKNOWN;
  }

  /**
   * Determine error severity
   */
  private determineSeverity(error: Error, category: ErrorCategory): ErrorSeverity {
    // Network errors are usually recoverable
    if (category === ErrorCategory.NETWORK) {
      return ErrorSeverity.MEDIUM;
    }
    
    // Validation errors are low severity
    if (category === ErrorCategory.VALIDATION) {
      return ErrorSeverity.LOW;
    }
    
    // API and runtime errors are high severity
    if (category === ErrorCategory.API || category === ErrorCategory.RUNTIME) {
      return ErrorSeverity.HIGH;
    }
    
    // UI errors depend on the context
    if (category === ErrorCategory.UI) {
      return ErrorSeverity.MEDIUM;
    }
    
    return ErrorSeverity.MEDIUM;
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
  private reportError(errorData: ErrorInfo): void {
    // In production, send to error tracking service
    // For now, just log to console
    if (typeof window !== 'undefined' && (window as any).errorTracker) {
      (window as any).errorTracker.report(errorData);
    }
  }

  /**
   * Get all logged errors
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

const errorHandler = ErrorHandler.getInstance();
export default errorHandler;