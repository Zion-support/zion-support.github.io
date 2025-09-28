/**
 * Advanced Error Reporting System
 * Provides comprehensive error tracking, reporting, and recovery mechanisms
 */

interface ErrorReport {
  id: string;
  timestamp: number;
  level: 'error' | 'warning' | 'info';
  message: string;
  stack?: string;
  context: {
    url: string;
    userAgent: string;
    viewport: {
      width: number;
      height: number;
    };
    sessionId: string;
    userId?: string;
  };
  metadata: Record<string, any>;
  resolved: boolean;
}

interface ErrorAnalytics {
  totalErrors: number;
  errorsByType: Record<string, number>;
  errorsByPage: Record<string, number>;
  errorFrequency: Record<string, number>;
  lastErrorTime: number;
  errorTrend: 'increasing' | 'decreasing' | 'stable';
}

class AdvancedErrorReporter {
  private errors: ErrorReport[] = [];
  private maxErrors = 1000;
  private sessionId: string;
  private analytics: ErrorAnalytics;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.analytics = this.initializeAnalytics();
    this.setupErrorHandlers();
    this.setupPerformanceMonitoring();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeAnalytics(): ErrorAnalytics {
    return {
      totalErrors: 0,
      errorsByType: {},
      errorsByPage: {},
      errorFrequency: {},
      lastErrorTime: 0,
      errorTrend: 'stable'
    };
  }

  private setupErrorHandlers(): void {
    // Global error handler
    window.addEventListener('error', (event) => {
      this.reportError({
        level: 'error',
        message: event.message,
        stack: event.error?.stack,
        context: this.getContext(),
        metadata: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno,
          type: 'javascript'
        }
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.reportError({
        level: 'error',
        message: event.reason?.message || 'Unhandled Promise Rejection',
        stack: event.reason?.stack,
        context: this.getContext(),
        metadata: {
          type: 'promise',
          reason: event.reason
        }
      });
    });

    // React error boundary integration
    if (typeof window !== 'undefined') {
      (window as any).reportReactError = (error: Error, errorInfo: any) => {
        this.reportError({
          level: 'error',
          message: error.message,
          stack: error.stack,
          context: this.getContext(),
          metadata: {
            type: 'react',
            componentStack: errorInfo.componentStack
          }
        });
      };
    }
  }

  private setupPerformanceMonitoring(): void {
    // Monitor performance issues that could lead to errors
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            if (navEntry.loadEventEnd - navEntry.loadEventStart > 3000) {
              this.reportError({
                level: 'warning',
                message: 'Slow page load detected',
                context: this.getContext(),
                metadata: {
                  type: 'performance',
                  loadTime: navEntry.loadEventEnd - navEntry.loadEventStart,
                  domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart
                }
              });
            }
          }
        }
      });

      observer.observe({ entryTypes: ['navigation', 'measure', 'mark'] });
    }
  }

  private getContext() {
    return {
      url: window.location.href,
      userAgent: navigator.userAgent,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      },
      sessionId: this.sessionId,
      userId: this.getUserId()
    };
  }

  private getUserId(): string | undefined {
    // Try to get user ID from various sources
    const stored = localStorage.getItem('userId');
    if (stored) return stored;

    // Generate a temporary ID for anonymous users
    const tempId = `temp_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
    localStorage.setItem('userId', tempId);
    return tempId;
  }

  public reportError(errorData: Partial<ErrorReport>): void {
    const report: ErrorReport = {
      id: this.generateErrorId(),
      timestamp: Date.now(),
      level: errorData.level || 'error',
      message: errorData.message || 'Unknown error',
      stack: errorData.stack,
      context: errorData.context || this.getContext(),
      metadata: errorData.metadata || {},
      resolved: false
    };

    this.errors.push(report);
    this.updateAnalytics(report);

    // Keep only the most recent errors
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(-this.maxErrors);
    }

    // Send to external service (if configured)
    this.sendToExternalService(report);

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error reported:', report);
    }
  }

  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private updateAnalytics(report: ErrorReport): void {
    this.analytics.totalErrors++;
    this.analytics.lastErrorTime = report.timestamp;

    // Update error counts by type
    const errorType = report.metadata?.type || 'unknown';
    this.analytics.errorsByType[errorType] = (this.analytics.errorsByType[errorType] || 0) + 1;

    // Update error counts by page
    const page = report.context.url.split('/').pop() || 'home';
    this.analytics.errorsByPage[page] = (this.analytics.errorsByPage[page] || 0) + 1;

    // Update error frequency
    const errorKey = `${errorType}_${report.message}`;
    this.analytics.errorFrequency[errorKey] = (this.analytics.errorFrequency[errorKey] || 0) + 1;

    // Calculate error trend
    this.calculateErrorTrend();
  }

  private calculateErrorTrend(): void {
    const now = Date.now();
    const oneHourAgo = now - (60 * 60 * 1000);
    const twoHoursAgo = now - (2 * 60 * 60 * 1000);

    const recentErrors = this.errors.filter(e => e.timestamp > oneHourAgo).length;
    const previousErrors = this.errors.filter(e => e.timestamp > twoHoursAgo && e.timestamp <= oneHourAgo).length;

    if (recentErrors > previousErrors * 1.2) {
      this.analytics.errorTrend = 'increasing';
    } else if (recentErrors < previousErrors * 0.8) {
      this.analytics.errorTrend = 'decreasing';
    } else {
      this.analytics.errorTrend = 'stable';
    }
  }

  private async sendToExternalService(report: ErrorReport): Promise<void> {
    try {
      // In a real application, you would send this to your error tracking service
      // For now, we'll just store it locally
      
      // Example: Send to Sentry, LogRocket, or custom endpoint
      // await fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(report)
      // });

      console.debug('Error report would be sent to external service:', report.id);
    } catch (error) {
      console.error('Failed to send error report:', error);
    }
  }

  public getErrors(filter?: Partial<ErrorReport>): ErrorReport[] {
    if (!filter) return [...this.errors];

    return this.errors.filter(error => {
      return Object.entries(filter).every(([key, value]) => {
        return error[key as keyof ErrorReport] === value;
      });
    });
  }

  public getAnalytics(): ErrorAnalytics {
    return { ...this.analytics };
  }

  public markErrorResolved(errorId: string): void {
    const error = this.errors.find(e => e.id === errorId);
    if (error) {
      error.resolved = true;
    }
  }

  public clearErrors(): void {
    this.errors = [];
    this.analytics = this.initializeAnalytics();
  }

  public exportErrorData(): string {
    return JSON.stringify({
      errors: this.errors,
      analytics: this.analytics,
      sessionId: this.sessionId,
      exportTime: Date.now()
    }, null, 2);
  }

  public getErrorSummary(): {
    totalErrors: number;
    unresolvedErrors: number;
    criticalErrors: number;
    recentErrors: number;
    topErrorTypes: Array<{ type: string; count: number }>;
    topErrorPages: Array<{ page: string; count: number }>;
  } {
    const now = Date.now();
    const oneHourAgo = now - (60 * 60 * 1000);

    return {
      totalErrors: this.analytics.totalErrors,
      unresolvedErrors: this.errors.filter(e => !e.resolved).length,
      criticalErrors: this.errors.filter(e => e.level === 'error' && !e.resolved).length,
      recentErrors: this.errors.filter(e => e.timestamp > oneHourAgo).length,
      topErrorTypes: Object.entries(this.analytics.errorsByType)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
        .map(([type, count]) => ({ type, count })),
      topErrorPages: Object.entries(this.analytics.errorsByPage)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
        .map(([page, count]) => ({ page, count }))
    };
  }
}

// Create singleton instance
export const advancedErrorReporter = new AdvancedErrorReporter();

// Export types and utilities
export type { ErrorReport, ErrorAnalytics };
export { AdvancedErrorReporter };