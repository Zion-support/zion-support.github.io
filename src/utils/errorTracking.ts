/**
 * Enhanced Error Tracking System
 * Provides comprehensive error monitoring with context and severity levels
 */

export enum ErrorSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical',
}

export interface ErrorContext {
  userId?: string;
  sessionId?: string;
  page?: string;
  action?: string;
  timestamp?: number;
  userAgent?: string;
  metadata?: Record<string, any>;
}

export interface TrackedError {
  message: string;
  stack?: string;
  severity: ErrorSeverity;
  context: ErrorContext;
  fingerprint: string;
}

class ErrorTracker {
  private errors: TrackedError[] = [];
  private maxErrors: number = 100;
  private errorCallbacks: Array<(error: TrackedError) => void> = [];

  /**
   * Track an error with context and severity
   */
  trackError(
    error: Error | string,
    severity: ErrorSeverity = ErrorSeverity.MEDIUM,
    context: ErrorContext = {}
  ): void {
    const errorMessage = typeof error === 'string' ? error : error.message;
    const errorStack = typeof error === 'string' ? undefined : error.stack;

    const trackedError: TrackedError = {
      message: errorMessage,
      stack: errorStack,
      severity,
      context: {
        ...context,
        timestamp: Date.now(),
        userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
        page: typeof window !== 'undefined' ? window.location.pathname : undefined,
      },
      fingerprint: this.generateFingerprint(errorMessage, errorStack),
    };

    this.errors.push(trackedError);

    // Keep only the last N errors
    if (this.errors.length > this.maxErrors) {
      this.errors.shift();
    }

    // Notify callbacks
    this.errorCallbacks.forEach(callback => {
      try {
        callback(trackedError);
      } catch (e) {
        //         console.error('Error in error callback:', e);
      }
    });

    // Log to console based on severity
    this.logError(trackedError);

    // Send to external service if critical
    if (severity === ErrorSeverity.CRITICAL) {
      this.reportCriticalError(trackedError);
    }
  }

  /**
   * Register a callback for error notifications
   */
  onError(callback: (error: TrackedError) => void): () => void {
    this.errorCallbacks.push(callback);
    return () => {
      this.errorCallbacks = this.errorCallbacks.filter(cb => cb !== callback);
    };
  }

  /**
   * Get all tracked errors
   */
  getErrors(severity?: ErrorSeverity): TrackedError[] {
    if (severity) {
      return this.errors.filter(error => error.severity === severity);
    }
    return [...this.errors];
  }

  /**
   * Clear all tracked errors
   */
  clearErrors(): void {
    this.errors = [];
  }

  /**
   * Get error statistics
   */
  getStatistics(): {
    total: number;
    bySeverity: Record<ErrorSeverity, number>;
    recentErrors: TrackedError[];
  } {
    const bySeverity = {
      [ErrorSeverity.LOW]: 0,
      [ErrorSeverity.MEDIUM]: 0,
      [ErrorSeverity.HIGH]: 0,
      [ErrorSeverity.CRITICAL]: 0,
    };

    this.errors.forEach(error => {
      bySeverity[error.severity]++;
    });

    return {
      total: this.errors.length,
      bySeverity,
      recentErrors: this.errors.slice(-10),
    };
  }

  /**
   * Generate a unique fingerprint for error deduplication
   */
  private generateFingerprint(message: string, stack?: string): string {
    const content = stack ? `${message}:${stack.split('\n')[0]}` : message;
    let hash = 0;
    for (let i = 0; i < content.length; i++) {
      const char = content.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return hash.toString(36);
  }

  /**
   * Log error to console with appropriate level
   */
  private logError(error: TrackedError): void {
    const logMessage = `[${error.severity.toUpperCase()}] ${error.message}`;

    switch (error.severity) {
      case ErrorSeverity.CRITICAL:
      case ErrorSeverity.HIGH:
        console.error(logMessage, error);
        break;
      case ErrorSeverity.MEDIUM:
        console.warn(logMessage, error);
        break;
      case ErrorSeverity.LOW:
        console.info(logMessage, error);
        break;
    }
  }

  /**
   * Report critical errors to external service
   */
  private reportCriticalError(error: TrackedError): void {
    // In production, this would send to error tracking service
    // e.g., Sentry, Rollbar, LogRocket, etc.
    if (typeof window !== 'undefined' && process.env['NODE_ENV'] === 'production') {
      // Example: Send to error tracking API
      try {
        fetch('/api/errors', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(error),
        }).catch(() => {
          // Fail silently to avoid error loops
        });
      } catch (e) {
        // Fail silently
      }
    }
  }

  /**
   * Set up global error handlers
   */
  setupGlobalHandlers(): void {
    if (typeof window === 'undefined') return;

    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', event => {
      this.trackError(
        new Error(`Unhandled Promise Rejection: ${event.reason}`),
        ErrorSeverity.HIGH,
        { action: 'unhandledrejection' }
      );
    });

    // Handle global errors
    window.addEventListener('error', event => {
      this.trackError(event.error || new Error(event.message), ErrorSeverity.HIGH, {
        action: 'global_error',
        metadata: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
        },
      });
    });
  }
}

// Export singleton instance
export const errorTracker = new ErrorTracker();

// Initialize global handlers
if (typeof window !== 'undefined') {
  errorTracker.setupGlobalHandlers();
}

export default errorTracker;
