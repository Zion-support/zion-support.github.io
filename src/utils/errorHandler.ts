/**
 * Centralized Error Handling Utility
 * Provides comprehensive error handling and reporting for the application
 */

export interface ErrorContext {
  component?: string;
  action?: string;
  userId?: string;
  timestamp: number;
  userAgent?: string;
  url?: string;
}

export interface ErrorReport {
  message: string;
  stack?: string | undefined;
  context: ErrorContext;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

class ErrorHandler {
  private errorQueue: ErrorReport[] = [];
  private maxQueueSize = 100;

  /**
   * Log an error with context
   */
  public logError(
    error: Error | string,
    context: Partial<ErrorContext> = {},
    severity: ErrorReport['severity'] = 'medium'
  ): void {
    const errorReport: ErrorReport = {
      message: typeof error === 'string' ? error : error.message,
      stack: typeof error === 'string' ? undefined : error.stack,
      context: {
        timestamp: Date.now(),
        ...(typeof window !== 'undefined' && { userAgent: window.navigator.userAgent }),
        ...(typeof window !== 'undefined' && { url: window.location.href }),
        ...context,
      },
      severity,
    };

    this.errorQueue.push(errorReport);

    // Keep queue size manageable
    if (this.errorQueue.length > this.maxQueueSize) {
      this.errorQueue.shift();
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error logged:', errorReport);
    }

    // Send to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToErrorService(errorReport);
    }
  }

  /**
   * Send error to external error reporting service
   */
  private async sendToErrorService(errorReport: ErrorReport): Promise<void> {
    try {
      // In a real application, you would send to services like Sentry, LogRocket, etc.
      // For now, we'll just log to console
      console.error('Error report:', errorReport);
    } catch (err) {
      console.error('Failed to send error report:', err);
    }
  }

  /**
   * Get all errors from the queue
   */
  public getErrors(): ErrorReport[] {
    return [...this.errorQueue];
  }

  /**
   * Clear error queue
   */
  public clearErrors(): void {
    this.errorQueue = [];
  }

  /**
   * Get errors by severity
   */
  public getErrorsBySeverity(severity: ErrorReport['severity']): ErrorReport[] {
    return this.errorQueue.filter(error => error.severity === severity);
  }

  /**
   * Setup global error handlers
   */
  public setupGlobalHandlers(): void {
    if (typeof window === 'undefined') return;

    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.logError(
        new Error(event.reason),
        { action: 'unhandledrejection' },
        'high'
      );
    });

    // Handle JavaScript errors
    window.addEventListener('error', (event) => {
      this.logError(
        event.error || new Error(event.message),
        {
          action: 'javascript_error',
          url: event.filename,
          component: 'global',
        },
        'high'
      );
    });
  }
}

// Create singleton instance
export const errorHandler = new ErrorHandler();

// Setup global handlers
if (typeof window !== 'undefined') {
  errorHandler.setupGlobalHandlers();
}

export default errorHandler;