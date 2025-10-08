/**
 * Error handling utility
 * Centralized error logging and reporting
 */

interface ErrorContext {
  componentStack?: string;
  errorId?: string;
  [key: string]: any;
}

interface ErrorLog {
  error: Error;
  context?: ErrorContext;
  timestamp: number;
  userAgent?: string;
  url?: string;
}

export class ErrorHandler {
  private errors: ErrorLog[] = [];
  private maxErrors: number = 100;

  /**
   * Log an error with context
   */
  logError(error: Error, context?: ErrorContext): void {
    try {
      const errorLog: ErrorLog = {
        error,
        context,
        timestamp: Date.now(),
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
        url: typeof window !== 'undefined' ? window.location.href : undefined,
      };

      // Add to internal log
      this.errors.push(errorLog);

      // Keep only the most recent errors
      if (this.errors.length > this.maxErrors) {
        this.errors = this.errors.slice(-this.maxErrors);
      }

      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.error('[ErrorHandler] Error logged:', {
          message: error.message,
          stack: error.stack,
          context,
        });
      }

      // In production, send to error tracking service (Sentry, Rollbar, etc.)
      this.sendToErrorService(errorLog);
    } catch (loggingError) {
      console.error('[ErrorHandler] Failed to log error:', loggingError);
    }
  }

  /**
   * Log a warning
   */
  logWarning(message: string, context?: ErrorContext): void {
    const warning = new Error(message);
    warning.name = 'Warning';
    this.logError(warning, { ...context, severity: 'warning' });
  }

  /**
   * Send error to external service
   */
  private sendToErrorService(_errorLog: ErrorLog): void {
    // In production, integrate with error tracking service
    if (process.env.NODE_ENV === 'production' && typeof fetch !== 'undefined') {
      // Example: Send to your error tracking endpoint
      // fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(_errorLog),
      // }).catch(() => {});
    }
  }

  /**
   * Get all logged errors
   */
  getErrors(): ErrorLog[] {
    return [...this.errors];
  }

  /**
   * Clear all logged errors
   */
  clearErrors(): void {
    this.errors = [];
  }

  /**
   * Get error summary
   */
  getErrorSummary(): {
    total: number;
    recent: ErrorLog[];
    byType: Record<string, number>;
  } {
    const byType: Record<string, number> = {};
    
    this.errors.forEach((log) => {
      const type = log.error.name || 'Unknown';
      byType[type] = (byType[type] || 0) + 1;
    });

    return {
      total: this.errors.length,
      recent: this.errors.slice(-10),
      byType,
    };
  }
}

export default ErrorHandler;