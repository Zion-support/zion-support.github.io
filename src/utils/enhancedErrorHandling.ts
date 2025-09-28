/**
 * Enhanced Error Handling System
 * Provides comprehensive error tracking, recovery, and user feedback
 */

export interface ErrorInfo {
  message: string;
  stack?: string;
  component?: string;
  timestamp: number;
  userId?: string;
  sessionId?: string;
  userAgent?: string;
  url?: string;
  lineNumber?: number;
  columnNumber?: number;
}

export interface ErrorRecoveryOptions {
  retryable: boolean;
  maxRetries: number;
  retryDelay: number;
  fallbackAction?: () => void;
}

class EnhancedErrorHandler {
  private errorLog: ErrorInfo[] = [];
  private maxLogSize = 100;
  private isReportingEnabled = true;

  /**
   * Initialize the error handler
   */
  initialize(): void {
    // Capture unhandled promise rejections
    window.addEventListener('unhandledrejection', this.handleUnhandledRejection.bind(this));
    
    // Capture global JavaScript errors
    window.addEventListener('error', this.handleGlobalError.bind(this));
    
    console.log('✅ Enhanced Error Handler initialized');
  }

  /**
   * Handle global JavaScript errors
   */
  private handleGlobalError(event: ErrorEvent): void {
    const errorInfo: ErrorInfo = {
      message: event.message,
      stack: event.error?.stack,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: event.filename,
      lineNumber: event.lineno,
      columnNumber: event.colno,
    };

    this.logError(errorInfo);
    this.reportError(errorInfo);
  }

  /**
   * Handle unhandled promise rejections
   */
  private handleUnhandledRejection(event: PromiseRejectionEvent): void {
    const errorInfo: ErrorInfo = {
      message: `Unhandled Promise Rejection: ${event.reason}`,
      stack: event.reason?.stack,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    this.logError(errorInfo);
    this.reportError(errorInfo);
  }

  /**
   * Log error to local storage
   */
  private logError(errorInfo: ErrorInfo): void {
    this.errorLog.unshift(errorInfo);
    
    // Keep only the most recent errors
    if (this.errorLog.length > this.maxLogSize) {
      this.errorLog = this.errorLog.slice(0, this.maxLogSize);
    }

    // Store in localStorage for persistence
    try {
      localStorage.setItem('errorLog', JSON.stringify(this.errorLog));
    } catch (error) {
      console.warn('Failed to store error log:', error);
    }
  }

  /**
   * Report error to external service
   */
  private async reportError(errorInfo: ErrorInfo): Promise<void> {
    if (!this.isReportingEnabled) return;

    try {
      // In a real application, you would send this to your error reporting service
      console.error('Error reported:', errorInfo);
      
      // Example: Send to external service
      // await fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorInfo)
      // });
    } catch (error) {
      console.warn('Failed to report error:', error);
    }
  }

  /**
   * Handle component errors with recovery options
   */
  handleComponentError(
    error: Error,
    component: string,
    options: ErrorRecoveryOptions = { retryable: false, maxRetries: 0, retryDelay: 1000 }
  ): void {
    const errorInfo: ErrorInfo = {
      message: error.message,
      stack: error.stack,
      component,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    this.logError(errorInfo);
    this.reportError(errorInfo);

    // Attempt recovery if retryable
    if (options.retryable && options.maxRetries > 0) {
      this.attemptRecovery(error, component, options);
    } else if (options.fallbackAction) {
      options.fallbackAction();
    }
  }

  /**
   * Attempt error recovery
   */
  private attemptRecovery(
    error: Error,
    component: string,
    options: ErrorRecoveryOptions
  ): void {
    let retryCount = 0;
    
    const retry = () => {
      if (retryCount < options.maxRetries) {
        retryCount++;
        console.log(`Retrying ${component} (attempt ${retryCount}/${options.maxRetries})`);
        
        setTimeout(() => {
          try {
            // Attempt to recover by reloading the component or reinitializing
            window.location.reload();
          } catch (retryError) {
            console.error('Recovery attempt failed:', retryError);
            retry();
          }
        }, options.retryDelay);
      } else if (options.fallbackAction) {
        console.log('Max retries reached, executing fallback action');
        options.fallbackAction();
      }
    };

    retry();
  }

  /**
   * Get error statistics
   */
  getErrorStats(): {
    totalErrors: number;
    recentErrors: ErrorInfo[];
    errorFrequency: Record<string, number>;
  } {
    const recentErrors = this.errorLog.slice(0, 10);
    const errorFrequency: Record<string, number> = {};

    this.errorLog.forEach(error => {
      const key = error.message.split(':')[0]; // Group by error type
      errorFrequency[key] = (errorFrequency[key] || 0) + 1;
    });

    return {
      totalErrors: this.errorLog.length,
      recentErrors,
      errorFrequency,
    };
  }

  /**
   * Clear error log
   */
  clearErrorLog(): void {
    this.errorLog = [];
    try {
      localStorage.removeItem('errorLog');
    } catch (error) {
      console.warn('Failed to clear error log:', error);
    }
  }

  /**
   * Enable/disable error reporting
   */
  setReportingEnabled(enabled: boolean): void {
    this.isReportingEnabled = enabled;
  }
}

// Export singleton instance
export const enhancedErrorHandler = new EnhancedErrorHandler();

// Initialize automatically
if (typeof window !== 'undefined') {
  enhancedErrorHandler.initialize();
}