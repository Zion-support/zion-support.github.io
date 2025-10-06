/**
 * Enhanced Error Handler
 * Comprehensive error handling and reporting utilities
 */

export interface ErrorContext {
  component?: string;
  action?: string;
  userId?: string;
  timestamp: number;
  userAgent?: string | undefined;
  url?: string | undefined;
}

export interface ErrorReport {
  message: string;
  stack?: string | undefined;
  context: ErrorContext;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

class ErrorHandler {
  private static instance: ErrorHandler;
  private errorQueue: ErrorReport[] = [];
  private maxQueueSize = 100;

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  /**
   * Report an error with context
   */
  reportError(error: Error, context: Partial<ErrorContext> = {}): void {
    const errorReport: ErrorReport = {
      message: error.message,
      stack: error.stack,
      context: {
        timestamp: Date.now(),
        userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
        url: typeof window !== 'undefined' ? window.location.href : undefined,
        ...context
      },
      severity: this.determineSeverity(error)
    };

    this.addToQueue(errorReport);
    this.logError(errorReport);
  }

  /**
   * Determine error severity based on error type and context
   */
  private determineSeverity(error: Error): 'low' | 'medium' | 'high' | 'critical' {
    if (error.name === 'ChunkLoadError' || error.name === 'Loading chunk') {
      return 'low'; // Network-related chunk loading errors
    }
    
    if (error.message.includes('ResizeObserver loop limit exceeded')) {
      return 'low'; // Common browser quirk
    }
    
    if (error.name === 'TypeError' && error.message.includes('Cannot read property')) {
      return 'medium'; // Common JavaScript errors
    }
    
    if (error.name === 'ReferenceError') {
      return 'high'; // Undefined variable errors
    }
    
    if (error.name === 'SyntaxError') {
      return 'critical'; // Syntax errors are critical
    }
    
    return 'medium';
  }

  /**
   * Add error to queue for batch processing
   */
  private addToQueue(errorReport: ErrorReport): void {
    this.errorQueue.push(errorReport);
    
    // Keep queue size manageable
    if (this.errorQueue.length > this.maxQueueSize) {
      this.errorQueue.shift();
    }
  }

  /**
   * Log error to console and external service
   */
  private logError(errorReport: ErrorReport): void {
    // Console logging
    console.error('Error Report:', errorReport);
    
    // Send to external service (if available)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'error', {
        error_message: errorReport.message,
        error_severity: errorReport.severity,
        error_component: errorReport.context.component,
        error_action: errorReport.context.action,
        non_interaction: true
      });
    }
  }

  /**
   * Get error statistics
   */
  getErrorStats(): {
    total: number;
    bySeverity: Record<string, number>;
    recent: ErrorReport[];
  } {
    const bySeverity = this.errorQueue.reduce((acc, error) => {
      acc[error.severity] = (acc[error.severity] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      total: this.errorQueue.length,
      bySeverity,
      recent: this.errorQueue.slice(-10) // Last 10 errors
    };
  }

  /**
   * Clear error queue
   */
  clearErrors(): void {
    this.errorQueue = [];
  }
}

// Export singleton instance
export const errorHandler = ErrorHandler.getInstance();

// Global error handler setup
if (typeof window !== 'undefined') {
  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    errorHandler.reportError(
      new Error(event.reason),
      { component: 'global', action: 'unhandledrejection' }
    );
  });

  // Handle uncaught errors
  window.addEventListener('error', (event) => {
    errorHandler.reportError(
      event.error || new Error(event.message),
      { 
        component: 'global', 
        action: 'uncaught',
        url: event.filename,
        timestamp: event.timeStamp
      }
    );
  });
}

export default errorHandler;