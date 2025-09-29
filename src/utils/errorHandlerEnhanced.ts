/**
 * Enhanced Error Handler
 * Comprehensive error handling and recovery system
 */

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  timestamp: Date;
  userAgent: string;
  url: string;
  userId?: string;
  sessionId?: string;
}

export interface ErrorReport {
  id: string;
  error: ErrorInfo;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'network' | 'javascript' | 'react' | 'build' | 'runtime';
  recovery?: RecoveryAction;
  context: Record<string, any>;
}

export interface RecoveryAction {
  type: 'retry' | 'fallback' | 'redirect' | 'reload' | 'none';
  payload?: any;
  success: boolean;
}

class EnhancedErrorHandler {
  private errorReports: ErrorReport[] = [];
  private maxReports = 100;
  private retryAttempts = new Map<string, number>();
  private maxRetries = 3;

  constructor() {
    this.setupGlobalErrorHandling();
    this.setupUnhandledRejectionHandling();
    this.setupReactErrorBoundary();
  }

  private setupGlobalErrorHandling(): void {
    window.addEventListener('error', (event) => {
      this.handleError({
        message: event.message,
        stack: event.error?.stack,
        timestamp: new Date(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      }, 'javascript', 'high');
    });
  }

  private setupUnhandledRejectionHandling(): void {
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
        stack: event.reason?.stack,
        timestamp: new Date(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      }, 'javascript', 'medium');
    });
  }

  private setupReactErrorBoundary(): void {
    // This will be used by React Error Boundary components
    if (typeof window !== 'undefined') {
      (window as any).__errorHandler = this;
    }
  }

  public handleError(
    error: Partial<ErrorInfo>, 
    category: ErrorReport['category'] = 'runtime',
    severity: ErrorReport['severity'] = 'medium',
    context: Record<string, any> = {}
  ): RecoveryAction | null {
    const errorInfo: ErrorInfo = {
      message: error.message || 'Unknown error',
      stack: error.stack,
      componentStack: error.componentStack,
      errorBoundary: error.errorBoundary,
      timestamp: error.timestamp || new Date(),
      userAgent: error.userAgent || navigator.userAgent,
      url: error.url || window.location.href,
      userId: error.userId,
      sessionId: error.sessionId,
    };

    const report: ErrorReport = {
      id: this.generateErrorId(),
      error: errorInfo,
      severity,
      category,
      context,
    };

    this.errorReports.push(report);
    
    // Keep only the latest reports
    if (this.errorReports.length > this.maxReports) {
      this.errorReports = this.errorReports.slice(-this.maxReports);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Enhanced Error Handler:', report);
    }

    // Send to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToMonitoringService(report);
    }

    // Attempt recovery
    const recovery = this.attemptRecovery(report);
    if (recovery) {
      report.recovery = recovery;
    }

    // Emit custom event for external handling
    this.emitErrorEvent(report);

    return recovery;
  }

  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private attemptRecovery(report: ErrorReport): RecoveryAction | null {
    const errorKey = `${report.category}_${report.error.message}`;
    const attempts = this.retryAttempts.get(errorKey) || 0;

    if (attempts >= this.maxRetries) {
      return {
        type: 'fallback',
        success: false,
      };
    }

    this.retryAttempts.set(errorKey, attempts + 1);

    switch (report.category) {
      case 'network':
        return this.handleNetworkError(report);
      case 'javascript':
        return this.handleJavaScriptError(report);
      case 'react':
        return this.handleReactError(report);
      case 'build':
        return this.handleBuildError(report);
      default:
        return {
          type: 'reload',
          success: false,
        };
    }
  }

  private handleNetworkError(report: ErrorReport): RecoveryAction {
    // Implement network error recovery strategies
    if (report.error.message.includes('fetch')) {
      return {
        type: 'retry',
        payload: { delay: 1000 * (this.retryAttempts.get(`${report.category}_${report.error.message}`) || 1) },
        success: true,
      };
    }

    if (report.error.message.includes('timeout')) {
      return {
        type: 'fallback',
        payload: { message: 'Network timeout - using cached data' },
        success: true,
      };
    }

    return {
      type: 'fallback',
      success: false,
    };
  }

  private handleJavaScriptError(report: ErrorReport): RecoveryAction {
    // Implement JavaScript error recovery strategies
    if (report.error.message.includes('Cannot read property')) {
      return {
        type: 'fallback',
        payload: { message: 'Data loading error - showing fallback UI' },
        success: true,
      };
    }

    if (report.error.message.includes('ReferenceError')) {
      return {
        type: 'reload',
        success: false,
      };
    }

    return {
      type: 'none',
      success: false,
    };
  }

  private handleReactError(report: ErrorReport): RecoveryAction {
    // Implement React error recovery strategies
    return {
      type: 'fallback',
      payload: { component: 'ErrorFallback' },
      success: true,
    };
  }

  private handleBuildError(report: ErrorReport): RecoveryAction {
    // Implement build error recovery strategies
    return {
      type: 'fallback',
      payload: { message: 'Build error - using cached version' },
      success: true,
    };
  }

  private sendToMonitoringService(report: ErrorReport): void {
    // Send to external monitoring service (e.g., Sentry, LogRocket)
    try {
      // Example implementation
      if (typeof window !== 'undefined' && (window as any).Sentry) {
        (window as any).Sentry.captureException(new Error(report.error.message), {
          extra: report.context,
          tags: {
            category: report.category,
            severity: report.severity,
          },
        });
      }
    } catch (error) {
      console.warn('Failed to send error to monitoring service:', error);
    }
  }

  private emitErrorEvent(report: ErrorReport): void {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('enhanced-error', {
        detail: report,
      }));
    }
  }

  public getErrorReports(): ErrorReport[] {
    return [...this.errorReports];
  }

  public getErrorStats(): {
    total: number;
    byCategory: Record<string, number>;
    bySeverity: Record<string, number>;
    recentErrors: ErrorReport[];
  } {
    const byCategory = this.errorReports.reduce((acc, report) => {
      acc[report.category] = (acc[report.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const bySeverity = this.errorReports.reduce((acc, report) => {
      acc[report.severity] = (acc[report.severity] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      total: this.errorReports.length,
      byCategory,
      bySeverity,
      recentErrors: this.errorReports.slice(-10),
    };
  }

  public clearErrorReports(): void {
    this.errorReports = [];
    this.retryAttempts.clear();
  }

  public setMaxRetries(maxRetries: number): void {
    this.maxRetries = maxRetries;
  }

  public cleanup(): void {
    this.clearErrorReports();
    // Remove global error handlers if needed
  }
}

// Export singleton instance
export const enhancedErrorHandler = new EnhancedErrorHandler();

// Export class and types
export { EnhancedErrorHandler };
export type { ErrorInfo, ErrorReport, RecoveryAction };