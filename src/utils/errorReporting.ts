/**
 * Comprehensive Error Reporting System
 */

export interface ErrorReport {
  id: string;
  timestamp: number;
  type: 'javascript' | 'network' | 'performance' | 'security' | 'user' | 'system';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  stack?: string;
  url: string;
  userAgent: string;
  userId?: string;
  sessionId: string;
  context: Record<string, unknown>;
  resolved: boolean;
}

export function initializeErrorReporting(config?: any): void {
  console.log('Error reporting initialized');
}

export interface ErrorMetrics {
  totalErrors: number;
  errorsByType: Record<string, number>;
  errorsBySeverity: Record<string, number>;
  errorRate: number;
  lastErrorTime: number;
}

class ErrorReportingSystem {
  private errors: Map<string, ErrorReport> = new Map();
  private metrics: ErrorMetrics = {
    totalErrors: 0,
    errorsByType: {},
    errorsBySeverity: {},
    errorRate: 0,
    lastErrorTime: 0
  };
  private maxErrors = 1000;
  private reportEndpoint = '/api/error-reporting';

  constructor() {
    this.initializeErrorHandling();
  }

  private initializeErrorHandling(): void {
    // Global error handlers
    window.addEventListener('error', (event) => {
      this.reportError({
        type: 'javascript',
        severity: 'high',
        message: event.message,
        stack: event.error?.stack,
        context: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno
        }
      });
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.reportError({
        type: 'javascript',
        severity: 'medium',
        message: `Unhandled Promise Rejection: ${event.reason}`,
        stack: event.reason?.stack,
        context: {
          reason: event.reason
        }
      });
    });

    // Performance error monitoring
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation' && entry.duration > 10000) {
            this.reportError({
              type: 'performance',
              severity: 'medium',
              message: `Slow page load: ${entry.duration}ms`,
              context: {
                duration: entry.duration,
                loadTime: (entry as PerformanceNavigationTiming).loadEventEnd - (entry as PerformanceNavigationTiming).fetchStart
              }
            });
          }
        });
      });

      observer.observe({ entryTypes: ['navigation'] });
    }

    // Network error monitoring
    this.monitorNetworkErrors();
  }

  private monitorNetworkErrors(): void {
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      try {
        const response = await originalFetch(...args);
        if (!response.ok && response.status >= 400) {
          this.reportError({
            type: 'network',
            severity: response.status >= 500 ? 'high' : 'medium',
            message: `HTTP ${response.status}: ${response.statusText}`,
            context: {
              url: args[0],
              status: response.status,
              statusText: response.statusText
            }
          });
        }
        return response;
      } catch (error) {
        this.reportError({
          type: 'network',
          severity: 'high',
          message: `Network request failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
          context: {
            url: args[0],
            error: error instanceof Error ? error.message : String(error)
          }
        });
        throw error;
      }
    };
  }

  public reportError(errorInfo: {
    type: ErrorReport['type'];
    severity: ErrorReport['severity'];
    message: string;
    stack?: string;
    context?: Record<string, unknown>;
  }): void {
    const errorReport: ErrorReport = {
      id: this.generateErrorId(),
      timestamp: Date.now(),
      type: errorInfo.type,
      severity: errorInfo.severity,
      message: errorInfo.message,
      stack: errorInfo.stack,
      url: window.location.href,
      userAgent: navigator.userAgent,
      userId: this.getUserId(),
      sessionId: this.getSessionId(),
      context: errorInfo.context || {},
      resolved: false
    };

    this.errors.set(errorReport.id, errorReport);
    this.updateMetrics(errorReport);

    // Clean up old errors if we exceed the limit
    if (this.errors.size > this.maxErrors) {
      const oldestError = Array.from(this.errors.entries())
        .sort(([, a], [, b]) => a.timestamp - b.timestamp)[0];
      this.errors.delete(oldestError[0]);
    }

    // Log to console for development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Report:', errorReport);
    }

    // Send to server in production
    if (process.env.NODE_ENV === 'production') {
      this.sendErrorReport(errorReport);
    }

    // Trigger error recovery if available
    this.triggerErrorRecovery(errorReport);
  }

  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private getUserId(): string | undefined {
    // This would integrate with your authentication system
    return localStorage.getItem('userId') || undefined;
  }

  private getSessionId(): string {
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  }

  private updateMetrics(errorReport: ErrorReport): void {
    this.metrics.totalErrors++;
    this.metrics.errorsByType[errorReport.type] = (this.metrics.errorsByType[errorReport.type] || 0) + 1;
    this.metrics.errorsBySeverity[errorReport.severity] = (this.metrics.errorsBySeverity[errorReport.severity] || 0) + 1;
    this.metrics.lastErrorTime = errorReport.timestamp;

    // Calculate error rate (errors per minute)
    const now = Date.now();
    const oneMinuteAgo = now - 60000;
    const recentErrors = Array.from(this.errors.values()).filter(
      error => error.timestamp > oneMinuteAgo
    ).length;
    this.metrics.errorRate = recentErrors;
  }

  private async sendErrorReport(errorReport: ErrorReport): Promise<void> {
    try {
      await fetch(this.reportEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport),
      });
    } catch (error) {
      console.error('Failed to send error report:', error);
    }
  }

  private triggerErrorRecovery(errorReport: ErrorReport): void {
    // Implement error recovery strategies based on error type and severity
    switch (errorReport.type) {
      case 'network':
        if (errorReport.severity === 'high') {
          this.attemptNetworkRecovery();
        }
        break;
      case 'performance':
        if (errorReport.severity === 'high' || errorReport.severity === 'critical') {
          this.attemptPerformanceRecovery();
        }
        break;
      case 'javascript':
        if (errorReport.severity === 'critical') {
          this.attemptJavaScriptRecovery();
        }
        break;
    }
  }

  private attemptNetworkRecovery(): void {
    // Implement network recovery strategies
    console.log('Attempting network recovery...');
    // Could include retry logic, offline mode, etc.
  }

  private attemptPerformanceRecovery(): void {
    // Implement performance recovery strategies
    console.log('Attempting performance recovery...');
    // Could include reducing animations, disabling heavy features, etc.
  }

  private attemptJavaScriptRecovery(): void {
    // Implement JavaScript recovery strategies
    console.log('Attempting JavaScript recovery...');
    // Could include reloading the page, clearing caches, etc.
  }

  public getErrorMetrics(): ErrorMetrics {
    return { ...this.metrics };
  }

  public getErrorsByType(type: ErrorReport['type']): ErrorReport[] {
    return Array.from(this.errors.values()).filter(error => error.type === type);
  }

  public getErrorsBySeverity(severity: ErrorReport['severity']): ErrorReport[] {
    return Array.from(this.errors.values()).filter(error => error.severity === severity);
  }

  public getAllErrors(): ErrorReport[] {
    return Array.from(this.errors.values()).sort((a, b) => b.timestamp - a.timestamp);
  }

  public markErrorAsResolved(errorId: string): void {
    const error = this.errors.get(errorId);
    if (error) {
      error.resolved = true;
      this.errors.set(errorId, error);
    }
  }

  public clearErrors(): void {
    this.errors.clear();
    this.metrics = {
      totalErrors: 0,
      errorsByType: {},
      errorsBySeverity: {},
      errorRate: 0,
      lastErrorTime: 0
    };
  }

  public exportErrorReport(): string {
    return JSON.stringify({
      timestamp: Date.now(),
      metrics: this.metrics,
      errors: this.getAllErrors()
    }, null, 2);
  }
}

// Singleton instance
export const errorReportingSystem = new ErrorReportingSystem();

// Convenience functions
export const reportError = (errorInfo: Parameters<ErrorReportingSystem['reportError']>[0]) => {
  errorReportingSystem.reportError(errorInfo);
};

export const getErrorMetrics = () => errorReportingSystem.getErrorMetrics();

export const getAllErrors = () => errorReportingSystem.getAllErrors();

export const markErrorAsResolved = (errorId: string) => {
  errorReportingSystem.markErrorAsResolved(errorId);
};

export const clearErrors = () => errorReportingSystem.clearErrors();

export const exportErrorReport = () => errorReportingSystem.exportErrorReport();