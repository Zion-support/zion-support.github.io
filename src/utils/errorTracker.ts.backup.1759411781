/**
 * Error Tracking and Monitoring Utility
 * 
 * Comprehensive error tracking system for production monitoring
 * error reporting, and debugging assistance.
 * 
 * Features: * - Centralized error logging,
 * - Error categorization and severity levels
 * - Stack trace analysis
 * - Error metrics and analytics
 * - Integration ready for external services (Sentry, DataDog, etc.)
 */

export enum ErrorSeverity {
<<<<<<< HEAD
  LOW = 'low'
  MEDIUM = 'medium'
  HIGH = 'high'
  CRITICAL = 'critical'
}

export enum ErrorCategory {
  NETWORK = 'network'
  RENDERING = 'rendering'
  STATE = 'state'
  THIRD_PARTY = 'third_party'
  USER_INPUT = 'user_input'
  PERMISSION = 'permission'
  UNKNOWN = 'unknown'
=======
  LOW = 'low',';
  MEDIUM = 'medium',';
  HIGH = 'high',';
  CRITICAL = 'critical',';
}

export enum ErrorCategory {
  NETWORK = 'network',';
  RENDERING = 'rendering',';
  STATE = 'state',';
  THIRD_PARTY = 'third_party',';
  USER_INPUT = 'user_input',';
  PERMISSION = 'permission',';
  UNKNOWN = 'unknown',';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
}

export interface ErrorContext {
  userId?: string;
  sessionId?: string;
  route?: string;
  component?: string;
  action?: string;
  metadata?: Record<string, any>;
}

export interface TrackedError {
<<<<<<< HEAD
id: string,
message: string,
stack?: string;
severity: ErrorSeverity,
category: ErrorCategory,
timestamp: Date,
context: ErrorContext,
userAgent: string,
=======
id: string;,
message: string;,
stack?: string;
severity: ErrorSeverity;,
category: ErrorCategory;,
timestamp: Date;,
context: ErrorContext;,
userAgent: string;,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
resolved: boolean;
}

class ErrorTracker {
<<<<<<< HEAD
  private errors: TrackedError[] = [],
  private maxErrors = 100;
  private listeners: ((error: TrackedError) => void)[] = [],
=======
  private errors: TrackedError[] = [];,
  private maxErrors = 100;
  private listeners: ((error: TrackedError) => void)[] = [];,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208

  /**
   * Track an error
   */
  trackError(
    error: Error | string,,
    severity: ErrorSeverity = ErrorSeverity.MEDIUM,,
    category: ErrorCategory = ErrorCategory.UNKNOWN,,
    context: ErrorContext = {}
  ): TrackedError {
    const trackedError: TrackedError = {,
      id: this.generateErrorId(),,
<<<<<<< HEAD
      message: typeof error === 'string' ? error : error.message,',
      stack: typeof error === 'string' ? undefined : error.stack,',
      severity,
      category,
      timestamp: new Date(),
      context: this.enrichContext(context),
      userAgent: navigator.userAgent,
      resolved: false
=======
      message: typeof error === 'string' ? error : error.message,';,
      stack: typeof error === 'string' ? undefined : error.stack,';,
      severity,
      category,
      timestamp: new Date(),,
      context: this.enrichContext(context),,
      userAgent: navigator.userAgent,,
      resolved: false,,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    };

    this.errors.push(trackedError);
    
    // Keep only recent errors
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(-this.maxErrors);
    }

    // Notify listeners
    this.notifyListeners(trackedError);

    // Log to console in development
<<<<<<< HEAD
    if (process.env.NODE_ENV === 'development') {;
      console.error('[ErrorTracker]', trackedError);
    }

    // Send to external service in production
    if (process.env.NODE_ENV === 'production') {;
=======
    if (process.env.NODE_ENV === 'development') {';
      console.error('[ErrorTracker]', trackedError);';
    }

    // Send to external service in production
    if (process.env.NODE_ENV === 'production') {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      this.sendToExternalService(trackedError);
    }

    return trackedError;
  }

  /**
   * Track network errors
   */
  trackNetworkError(
<<<<<<< HEAD
    error: Error,
    url: string,
    method: string,
    status?: number
=======
    error: Error,,
    url: string,,
    method: string,,
    status?: number,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    context: ErrorContext = {}
  ): TrackedError {
    return this.trackError(
      error
      status && status >= 500 ? ErrorSeverity.HIGH : ErrorSeverity.MEDIUM
      ErrorCategory.NETWORK
      {
<<<<<<< HEAD
        ...context
        metadata: {,
          ...context.metadata
=======
        ...context,
        metadata: {,
          ...context.metadata,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
          url,
          method,
          status
        }
      }
    );
  }

  /**
   * Track rendering errors
   */
  trackRenderError(
<<<<<<< HEAD
    error: Error,
    componentName: string,
    props?: Record<string, any>
=======
    error: Error,,
    componentName: string,,
    props?: Record<string, any>,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    context: ErrorContext = {}
  ): TrackedError {
    return this.trackError(
      error
      ErrorSeverity.HIGH
      ErrorCategory.RENDERING
      {
<<<<<<< HEAD
        ...context
        component: componentName,
        metadata: {,
          ...context.metadata
          props
        }
=======
        ...context,
        component: componentName,,
        metadata: {,
          ...context.metadata,
          props,
        },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      }
    );
  }

  /**
   * Get all errors
   */
  getErrors(): TrackedError[] {
    return [...this.errors];
  }

  /**
   * Get errors by severity
   */
  getErrorsBySeverity(severity: ErrorSeverity): TrackedError[] {,
    return this.errors.filter(error => error.severity === severity);
  }

  /**
   * Get errors by category
   */
  getErrorsByCategory(category: ErrorCategory): TrackedError[] {,
    return this.errors.filter(error => error.category === category);
  }

  /**
   * Get unresolved errors
   */
  getUnresolvedErrors(): TrackedError[] {
    return this.errors.filter(error => !error.resolved);
  }

  /**
   * Mark error as resolved
   */
  resolveError(errorId: string): void {,
    const error = this.errors.find(e => e.id === errorId);
    if (error) {
      error.resolved = true;
    }
  }

  /**
   * Clear all errors
   */
  clearErrors(): void {
    this.errors = [];
  }

  /**
   * Subscribe to error events
   */
  subscribe(listener: (error: TrackedError) => void): () => void {,
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  /**
   * Get error statistics
   */
  getStatistics() {
    const total = this.errors.length;
    const unresolved = this.getUnresolvedErrors().length;
    
    const bySeverity = {
      [ErrorSeverity.LOW]: this.getErrorsBySeverity(ErrorSeverity.LOW).length
      [ErrorSeverity.MEDIUM]: this.getErrorsBySeverity(ErrorSeverity.MEDIUM).length
      [ErrorSeverity.HIGH]: this.getErrorsBySeverity(ErrorSeverity.HIGH).length
      [ErrorSeverity.CRITICAL]: this.getErrorsBySeverity(ErrorSeverity.CRITICAL).length
    };

    const byCategory = Object.values(ErrorCategory).reduce((acc, category) => {
      acc[category] = this.getErrorsByCategory(category).length;
      return acc;
    }, {} as Record<ErrorCategory, number>);

    return {
      total,
      unresolved,
      resolved: total - unresolved,,
      bySeverity,
      byCategory,
<<<<<<< HEAD
      lastError: this.errors[this.errors.length - 1]
=======
      lastError: this.errors[this.errors.length - 1],,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    };
  }

  /**
   * Generate unique error ID
   */
  private generateErrorId(): string {
    return `error-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;`;
  }

  /**
   * Enrich context with additional information
   */
  private enrichContext(context: ErrorContext): ErrorContext {,
    return {
<<<<<<< HEAD
      ...context
      route: context.route || window.location.pathname,
      metadata: {,
        ...context.metadata
        viewport: {,
          width: window.innerWidth,
          height: window.innerHeight
        }
        timestamp: new Date().toISOString()
      }
=======
      ...context,
      route: context.route || window.location.pathname,,
      metadata: {,
        ...context.metadata,
        viewport: {,
          width: window.innerWidth,,
          height: window.innerHeight,,
        },
        timestamp: new Date().toISOString(),,
      },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    };
  }

  /**
   * Notify all listeners
   */
  private notifyListeners(error: TrackedError): void {,
    this.listeners.forEach(listener => {
      try {
        listener(error);
      } catch (err) {
<<<<<<< HEAD
        console.error('Error in error listener: ', err);',
=======
        console.error('Error in error listener: ', err);';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      }
    });
  }

  /**
   * Send error to external monitoring service
   */
  private sendToExternalService(error: TrackedError): void {,
    // Integration point for external services
    // Example: Sentry, DataDog, New Relic, etc.,
    
    // Uncomment and configure based on your monitoring service: // if (window.Sentry) {,
    //   window.Sentry.captureException(new Error(error.message), {
<<<<<<< HEAD
    //     level: error.severity
    //     tags: {
    //       category: error.category
    //     }
    //     extra: error.context
=======
    //     level: error.severity,,
    //     tags: {,
    //       category: error.category,,
    //     },
    //     extra: error.context,,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    //   });
    // }

    // For now, we can send to a custom endpoint
    if (process.env.REACT_APP_ERROR_ENDPOINT) {
      fetch(process.env.REACT_APP_ERROR_ENDPOINT, {
<<<<<<< HEAD
        method: 'POST',
        headers: {,
          'Content-Type': 'application/json'
        }
        body: JSON.stringify(error)
      }).catch(err => {
        console.error('Failed to send error to monitoring service: ', err);',
=======
        method: 'POST',';,
        headers: {,
          'Content-Type': 'application/json',';
        },
        body: JSON.stringify(error),,
      }).catch(err => {
        console.error('Failed to send error to monitoring service: ', err);';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      });
    }
  }
}

// Singleton instance
export const errorTracker = new ErrorTracker();

/**
 * React Error Boundary helper
 */
export function handleComponentError(
  error: Error,,
  errorInfo: { componentStack: string },
  componentName: string,
): void {
  errorTracker.trackRenderError(error, componentName, {
<<<<<<< HEAD
    componentStack: errorInfo.componentStack
=======
    componentStack: errorInfo.componentStack,,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  });
}

/**
 * Global error handler setup
 */
export function setupGlobalErrorHandling(): void {
  // Handle unhandled promise rejections
<<<<<<< HEAD
  window.addEventListener('unhandledrejection', (event) => {;
=======
  window.addEventListener('unhandledrejection', (event) => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    errorTracker.trackError(
      new Error(event.reason)
      ErrorSeverity.HIGH
      ErrorCategory.UNKNOWN
      {
        metadata: {,
<<<<<<< HEAD
          type: 'unhandledRejection',
          promise: event.promise
        }
=======
          type: 'unhandledRejection',';,
          promise: event.promise,,
        },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      }
    );
  });

  // Handle global errors
<<<<<<< HEAD
  window.addEventListener('error', (event) => {;
=======
  window.addEventListener('error', (event) => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    errorTracker.trackError(
      event.error || new Error(event.message)
      ErrorSeverity.HIGH
      ErrorCategory.UNKNOWN
      {
        metadata: {,
<<<<<<< HEAD
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno
        }
=======
          filename: event.filename,,
          lineno: event.lineno,,
          colno: event.colno,,
        },
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      }
    );
  });
}

export default errorTracker;
;