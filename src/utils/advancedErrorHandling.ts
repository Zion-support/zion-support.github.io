/**
 * Advanced Error Handling System
 * Comprehensive error tracking and recovery for the Zion Tech Group website
 */

export interface ErrorContext {
  userId?: string;
  sessionId?: string;
  timestamp: Date;
  userAgent: string;
  url: string;
  component?: string;
  action?: string;
  metadata?: Record<string, any>;
}

export interface ErrorReport {
  id: string;
  message: string;
  stack?: string;
  context: ErrorContext;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'runtime' | 'network' | 'build' | 'user' | 'system';
  resolved: boolean;
  createdAt: Date;
  resolvedAt?: Date;
}

class AdvancedErrorHandler {
  private errors: Map<string, ErrorReport> = new Map();
  private maxErrors = 1000;
  private isInitialized = false;

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    if (this.isInitialized) return;
    
    // Global error handlers
    window.addEventListener('error', this.handleGlobalError.bind(this));
    window.addEventListener('unhandledrejection', this.handleUnhandledRejection.bind(this));
    
    // Performance monitoring
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation' && entry.loadEventEnd > 0) {
            const loadTime = entry.loadEventEnd - entry.loadEventStart;
            if (loadTime > 3000) {
              this.reportError(
                new Error(`Slow page load: ${loadTime}ms`),
                {
                  category: 'performance',
                  severity: 'medium',
                  metadata: { loadTime }
                }
              );
            }
          }
        });
      });
      
      observer.observe({ entryTypes: ['navigation'] });
    }
    
    this.isInitialized = true;
    console.log('Advanced error handling initialized');
  }

  private handleGlobalError(event: ErrorEvent): void {
    const error = new Error(event.message);
    error.stack = `${event.filename}:${event.lineno}:${event.colno}`;
    
    this.reportError(error, {
      category: 'runtime',
      severity: 'high',
      metadata: {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error
      }
    });
  }

  private handleUnhandledRejection(event: PromiseRejectionEvent): void {
    const error = event.reason instanceof Error 
      ? event.reason 
      : new Error(String(event.reason));
    
    this.reportError(error, {
      category: 'runtime',
      severity: 'medium',
      metadata: { reason: event.reason }
    });
  }

  public reportError(
    error: Error, 
    options: Partial<Pick<ErrorReport, 'category' | 'severity' | 'metadata'>> & {
      context?: Partial<ErrorContext>;
    } = {}
  ): string {
    const errorId = this.generateErrorId();
    const context: ErrorContext = {
      timestamp: new Date(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      ...options.context
    };

    const report: ErrorReport = {
      id: errorId,
      message: error.message,
      stack: error.stack,
      context,
      severity: options.severity || 'medium',
      category: options.category || 'runtime',
      resolved: false,
      createdAt: new Date(),
      metadata: options.metadata
    };

    // Store error
    this.errors.set(errorId, report);
    this.cleanupOldErrors();

    // Log error
    this.logError(report);

    // Send to external service (if configured)
    this.sendToExternalService(report);

    return errorId;
  }

  private generateErrorId(): string {
    return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private logError(report: ErrorReport): void {
    const logLevel = this.getLogLevel(report.severity);
    const message = `[${report.category.toUpperCase()}] ${report.message}`;
    
    console[logLevel](message, {
      id: report.id,
      context: report.context,
      metadata: report.metadata
    });
  }

  private getLogLevel(severity: ErrorReport['severity']): 'log' | 'warn' | 'error' {
    switch (severity) {
      case 'low': return 'log';
      case 'medium': return 'warn';
      case 'high': 
      case 'critical': return 'error';
      default: return 'warn';
    }
  }

  private cleanupOldErrors(): void {
    if (this.errors.size > this.maxErrors) {
      const sortedErrors = Array.from(this.errors.entries())
        .sort(([, a], [, b]) => a.createdAt.getTime() - b.createdAt.getTime());
      
      const toDelete = sortedErrors.slice(0, this.errors.size - this.maxErrors);
      toDelete.forEach(([id]) => this.errors.delete(id));
    }
  }

  private async sendToExternalService(report: ErrorReport): Promise<void> {
    // In a real application, you would send this to your error tracking service
    // like Sentry, Bugsnag, or your own API
    try {
      if (process.env.NODE_ENV === 'production') {
        // Example: Send to external API
        // await fetch('/api/errors', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(report)
        // });
      }
    } catch (error) {
      console.error('Failed to send error report:', error);
    }
  }

  public getErrors(filter?: Partial<ErrorReport>): ErrorReport[] {
    let errors = Array.from(this.errors.values());
    
    if (filter) {
      errors = errors.filter(error => 
        Object.entries(filter).every(([key, value]) => 
          error[key as keyof ErrorReport] === value
        )
      );
    }
    
    return errors.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  public resolveError(errorId: string): boolean {
    const error = this.errors.get(errorId);
    if (error) {
      error.resolved = true;
      error.resolvedAt = new Date();
      return true;
    }
    return false;
  }

  public getErrorStats(): {
    total: number;
    unresolved: number;
    bySeverity: Record<string, number>;
    byCategory: Record<string, number>;
  } {
    const errors = Array.from(this.errors.values());
    
    return {
      total: errors.length,
      unresolved: errors.filter(e => !e.resolved).length,
      bySeverity: errors.reduce((acc, error) => {
        acc[error.severity] = (acc[error.severity] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byCategory: errors.reduce((acc, error) => {
        acc[error.category] = (acc[error.category] || 0) + 1;
        return acc;
      }, {} as Record<string, number>)
    };
  }

  public clearErrors(): void {
    this.errors.clear();
  }

  // React Error Boundary integration
  public createErrorBoundary(componentName: string) {
    return (error: Error, errorInfo: any) => {
      this.reportError(error, {
        category: 'runtime',
        severity: 'high',
        context: {
          component: componentName,
          action: 'render'
        },
        metadata: {
          componentStack: errorInfo.componentStack
        }
      });
    };
  }
}

// Export singleton instance
export const advancedErrorHandler = new AdvancedErrorHandler();

// Export class for custom instances
export { AdvancedErrorHandler };

// React Hook for error handling
export const useErrorHandler = () => {
  const reportError = (error: Error, options?: Parameters<typeof advancedErrorHandler.reportError>[1]) => {
    return advancedErrorHandler.reportError(error, options);
  };

  const getErrors = (filter?: Partial<ErrorReport>) => {
    return advancedErrorHandler.getErrors(filter);
  };

  const getStats = () => {
    return advancedErrorHandler.getErrorStats();
  };

  return {
    reportError,
    getErrors,
    getStats,
    resolveError: advancedErrorHandler.resolveError.bind(advancedErrorHandler),
    clearErrors: advancedErrorHandler.clearErrors.bind(advancedErrorHandler)
  };
};