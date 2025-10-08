/**
 * Error handling utilities
 * Enhanced with retry logic, error categorization, and better reporting
 */

export enum ErrorCategory {
  NETWORK = 'NETWORK',
  VALIDATION = 'VALIDATION',
  API = 'API',
  UI = 'UI',
  RUNTIME = 'RUNTIME',
  UNKNOWN = 'UNKNOWN',
}

export enum ErrorSeverity {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  CRITICAL = 'CRITICAL',
}

export interface ErrorInfo {
  id: string;
  message: string;
  stack?: string;
  category: ErrorCategory;
  severity: ErrorSeverity;
  timestamp: string;
  url: string;
  userAgent: string;
  userId?: string;
}

class ErrorHandler {
  private static instance: ErrorHandler;
  private errorQueue: ErrorInfo[] = [];
  private maxQueueSize = 50;

  private constructor() {
    this.setupGlobalErrorHandlers();
  }

  public static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  private setupGlobalErrorHandlers(): void {
    if (typeof window === 'undefined') return;

    // Global error handler
    window.addEventListener('error', (event) => {
      this.handleError({
        message: event.message,
        stack: event.error?.stack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
        stack: event.reason?.stack,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
      });
    });
  }

  public handleError(errorInfo: Partial<ErrorInfo>): void {
    const error = new Error(errorInfo.message || 'Unknown error');
    if (errorInfo.stack) {
      error.stack = errorInfo.stack;
    }

    const fullErrorInfo: ErrorInfo = {
      id: this.generateErrorId(),
      message: errorInfo.message || 'Unknown error',
      stack: errorInfo.stack,
      category: errorInfo.category || this.categorizeError(error),
      severity: errorInfo.severity || this.determineSeverity(error, errorInfo.category || ErrorCategory.UNKNOWN),
      timestamp: errorInfo.timestamp || new Date().toISOString(),
      url: errorInfo.url || (typeof window !== 'undefined' ? window.location.href : ''),
      userAgent: errorInfo.userAgent || (typeof window !== 'undefined' ? navigator.userAgent : ''),
      userId: errorInfo.userId,
    };

    // Add to queue
    this.errorQueue.push(fullErrorInfo);

    // Maintain queue size
    if (this.errorQueue.length > this.maxQueueSize) {
      this.errorQueue.shift();
    }

    // Log to console in development
    if (typeof process !== 'undefined' && process.env?.NODE_ENV === 'development') {
      console.error('Error captured:', fullErrorInfo);
    }

    // Send to error reporting service in production
    if (typeof process !== 'undefined' && process.env?.NODE_ENV === 'production') {
      this.sendToErrorService(fullErrorInfo);
    }
  }

  /**
   * Categorize error based on message and stack
   */
  private categorizeError(error: Error): ErrorCategory {
    const message = error.message.toLowerCase();
    const stack = error.stack?.toLowerCase() || '';

    if (message.includes('network') || message.includes('fetch') || message.includes('xhr')) {
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
    if (category === ErrorCategory.NETWORK) {
      return ErrorSeverity.MEDIUM;
    }
    if (category === ErrorCategory.VALIDATION) {
      return ErrorSeverity.LOW;
    }
    if (category === ErrorCategory.RUNTIME) {
      return ErrorSeverity.HIGH;
    }
    if (category === ErrorCategory.API) {
      return ErrorSeverity.MEDIUM;
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
   * Report error to external service
   */
  private async sendToErrorService(errorInfo: ErrorInfo): Promise<void> {
    try {
      // You can integrate with services like Sentry, LogRocket, etc.
      // For now we'll just log to console
      console.error('Production error:', errorInfo);
      
      // Example integration with external service:
      // await fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorInfo)
      // });
    } catch (error) {
      console.error('Failed to send error to service:', error);
    }
  }

  /**
   * Get all errors
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

  public getErrorStats(): { total: number; recent: number } {
    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
    const recent = this.errorQueue.filter(
      error => new Date(error.timestamp) > oneHourAgo
    ).length;

    return {
      total: this.errorQueue.length,
      recent,
    };
  }
}

export default ErrorHandler.getInstance();