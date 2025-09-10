// Error reporting and analytics utilities

export interface ErrorReport {
  message: string;
  stack?: string;
  componentStack?: string;
  timestamp: string;
  url: string;
  userAgent: string;
  userId?: string;
  sessionId?: string;
  errorBoundary?: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  context?: Record<string, unknown>;
  line?: number;
  column?: number;
}

export class ErrorReporter {
  private static instance: ErrorReporter;
  private sessionId: string;
  private userId?: string;
  private errorQueue: ErrorReport[] = [];
  private maxQueueSize = 50;

  static getInstance(): ErrorReporter {
    if (!ErrorReporter.instance) {
      ErrorReporter.instance = new ErrorReporter();
    }
    return ErrorReporter.instance;
  }

  private constructor() {
    this.sessionId = this.generateSessionId();
    this.initializeErrorHandling();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeErrorHandling() {
    if (typeof window === 'undefined') return;

    // Global error handler
    window.addEventListener('error', (event) => {
      this.reportError({
        message: event.message,
        stack: event.error?.stack,
        url: event.filename,
        severity: 'high',
        context: {
          line: event.lineno,
          column: event.colno,
        },
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.reportError({
        message: event.reason?.message || 'Unhandled Promise Rejection',
        stack: event.reason?.stack,
        severity: 'high',
      });
    });
  }

  public setUserId(userId: string) {
    this.userId = userId;
  }

  public reportError(error: Partial<ErrorReport> & { message: string; severity: ErrorReport['severity'] }) {
    const errorReport: ErrorReport = {
      message: error.message,
      stack: error.stack,
      componentStack: error.componentStack,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      userId: this.userId,
      sessionId: this.sessionId,
      errorBoundary: error.errorBoundary,
      severity: error.severity,
      context: error.context,
    };

    // Add to queue
    this.errorQueue.push(errorReport);

    // Maintain queue size
    if (this.errorQueue.length > this.maxQueueSize) {
      this.errorQueue.shift();
    }

    // Log to console in development
    if (import.meta.env.MODE === 'development') {
      console.group('🚨 Error Reported');
      // // // console.error('Message:', errorReport.message);
      // // // console.error('Stack:', errorReport.stack);
      // // // console.error('Component Stack:', errorReport.componentStack);
      // // // console.error('Severity:', errorReport.severity);
      // // // console.error('Context:', errorReport.context);
      console.groupEnd();
    }

    // Send to error reporting service (implement based on your service)
    this.sendErrorReport(errorReport);
  }

  private async sendErrorReport(errorReport: ErrorReport) {
    try {
      // In a real application, you would send this to your error reporting service
      // For now, we'll just log it
      // // // console.log('Sending error report:', errorReport);
      
      // Example: Send to your error reporting service
      await new Promise(resolve => setTimeout(resolve, 0)); // Add await to fix async warning
      // await fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorReport),
      // });
    } catch (error) {
      // // // console.error('Failed to send error report:', error);
    }
  }

  public getErrorQueue(): ErrorReport[] {
    return [...this.errorQueue];
  }

  public clearErrorQueue() {
    this.errorQueue = [];
  }

  public getErrorStats() {
    const errors = this.errorQueue;
    const severityCounts = errors.reduce((acc, error) => {
      acc[error.severity] = (acc[error.severity] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      totalErrors: errors.length,
      severityCounts,
      lastError: errors[errors.length - 1],
      sessionId: this.sessionId,
    };
  }
}

// Export singleton instance
export const errorReporter = ErrorReporter.getInstance();

// Utility functions for common error scenarios
export const reportComponentError = (
  error: Error,
  errorInfo: { componentStack: string },
  componentName: string
) => {
  errorReporter.reportError({
    message: error.message,
    stack: error.stack,
    componentStack: errorInfo.componentStack,
    errorBoundary: componentName,
    severity: 'high',
    context: {
      component: componentName,
      timestamp: Date.now(),
    },
  });
};

export const reportAsyncError = (error: Error, context: string) => {
  errorReporter.reportError({
    message: error.message,
    stack: error.stack,
    severity: 'medium',
    context: {
      asyncContext: context,
      timestamp: Date.now(),
    },
  });
};

export const reportNetworkError = (error: Error, url: string, status?: number) => {
  errorReporter.reportError({
    message: error.message,
    stack: error.stack,
    severity: status && status >= 500 ? 'high' : 'medium',
    context: {
      url,
      status,
      timestamp: Date.now(),
    },
  });
};