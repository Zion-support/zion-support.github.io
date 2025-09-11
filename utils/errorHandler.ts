interface ErrorContext {
  component?: string;
  action?: string;
  userId?: string;
  timestamp: number;
  userAgent?: string;
  url?: string;
}

interface ErrorReport {
  message: string;
  stack?: string;
  context: ErrorContext;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

class ErrorHandler {
  private static instance: ErrorHandler;
  private errorQueue: ErrorReport[] = [];
  private maxQueueSize = 50;

  private constructor() {
    // Set up global error handlers
    if (typeof window !== 'undefined') {
      window.addEventListener('error', this.handleGlobalError.bind(this));
      window.addEventListener(
        'unhandledrejection',
        this.handleUnhandledRejection.bind(this)
      );
    }
  }

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  private handleGlobalError(event: ErrorEvent): void {
    this.reportError({
      message: event.message,
      stack: event.error?.stack,
      context: {
        component: 'Global',
        action: 'JavaScript Error',
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      },
      severity: 'high',
    });
  }

  private handleUnhandledRejection(event: PromiseRejectionEvent): void {
    this.reportError({
      message: `Unhandled Promise Rejection: ${event.reason}`,
      stack: event.reason?.stack,
      context: {
        component: 'Global',
        action: 'Promise Rejection',
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      },
      severity: 'medium',
    });
  }

  reportError(error: ErrorReport): void {
    // Add to queue
    this.errorQueue.push(error);

    // Maintain queue size
    if (this.errorQueue.length > this.maxQueueSize) {
      this.errorQueue.shift();
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error reported:', error);
    }

    // Send to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToMonitoringService(error);
    }
  }

  private async sendToMonitoringService(error: ErrorReport): Promise<void> {
    try {
      // This would typically send to a service like Sentry, LogRocket, etc.
      // For now, we'll just log to console
      console.error('Production error report:', error);

      // Example of sending to an API endpoint
      // await fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(error)
      // });
    } catch (err) {
      console.error('Failed to send error report:', err);
    }
  }

  // Utility method to create error context
  createContext(
    component: string,
    action: string,
    additionalData?: Record<string, any>
  ): ErrorContext {
    return {
      component,
      action,
      timestamp: Date.now(),
      userAgent:
        typeof window !== 'undefined' ? navigator.userAgent : undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      ...additionalData,
    };
  }

  // Method to report React component errors
  reportComponentError(error: Error, errorInfo: any, component: string): void {
    this.reportError({
      message: error.message,
      stack: error.stack,
      context: this.createContext(component, 'Component Error', { errorInfo }),
      severity: 'high',
    });
  }

  // Method to report API errors
  reportApiError(error: Error, endpoint: string, statusCode?: number): void {
    this.reportError({
      message: error.message,
      stack: error.stack,
      context: this.createContext('API', 'Request Error', {
        endpoint,
        statusCode,
      }),
      severity: statusCode && statusCode >= 500 ? 'critical' : 'medium',
    });
  }

  // Get error statistics
  getErrorStats(): { total: number; bySeverity: Record<string, number> } {
    const bySeverity = this.errorQueue.reduce(
      (acc, error) => {
        acc[error.severity] = (acc[error.severity] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    return {
      total: this.errorQueue.length,
      bySeverity,
    };
  }

  // Clear error queue
  clearErrors(): void {
    this.errorQueue = [];
  }
}

export const errorHandler = ErrorHandler.getInstance();
export default errorHandler;
