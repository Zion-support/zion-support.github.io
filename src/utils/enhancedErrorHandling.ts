/**
 * Enhanced Error Handling Utility
 * Provides comprehensive error tracking and reporting
 */

export interface ErrorContext {
  userId?: string;
  sessionId?: string;
  url: string;
  userAgent: string;
  timestamp: string;
  component?: string;
  action?: string;
  metadata?: Record<string, unknown>;
}

export interface ErrorReport {
  id: string;
  message: string;
  stack?: string;
  context: ErrorContext;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'javascript' | 'network' | 'performance' | 'user' | 'system';
  resolved: boolean;
  createdAt: string;
  lastOccurrence: string;
  occurrenceCount: number;
}

class EnhancedErrorHandler {
  private errorReports: Map<string, ErrorReport> = new Map();
  private maxReports = 100;
  private sessionId: string;
  private userId?: string;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.initializeErrorTracking();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeErrorTracking(): void {
    // Global error handler
    window.addEventListener('error', (event) => {
      this.handleError(event.error, {
        component: 'global',
        action: 'unhandled_error',
        metadata: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno
        }
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError(event.reason, {
        component: 'promise',
        action: 'unhandled_rejection',
        metadata: {
          reason: event.reason?.toString()
        }
      });
    });

    // Performance observer for errors
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'resource') {
              const resourceEntry = entry as PerformanceResourceTiming;
              if (resourceEntry.transferSize === 0 && resourceEntry.decodedBodySize === 0) {
                this.handleError(new Error(`Failed to load resource: ${resourceEntry.name}`), {
                  component: 'resource',
                  action: 'load_failure',
                  metadata: {
                    url: resourceEntry.name,
                    duration: resourceEntry.duration,
                    startTime: resourceEntry.startTime
                  }
                });
              }
            }
          });
        });
        observer.observe({ entryTypes: ['resource'] });
      } catch (error) {
        console.warn('Failed to initialize performance observer for errors:', error);
      }
    }
  }

  public setUserId(userId: string): void {
    this.userId = userId;
  }

  public handleError(error: Error, context: Partial<ErrorContext> = {}): void {
    const errorId = this.generateErrorId(error);
    const fullContext: ErrorContext = {
      userId: this.userId,
      sessionId: this.sessionId,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      ...context
    };

    const severity = this.determineSeverity(error, fullContext);
    const category = this.categorizeError(error, fullContext);

    // Check if this error already exists
    const existingReport = this.errorReports.get(errorId);
    if (existingReport) {
      // Update existing report
      existingReport.lastOccurrence = fullContext.timestamp;
      existingReport.occurrenceCount += 1;
      
      // Increase severity if it occurs frequently
      if (existingReport.occurrenceCount > 10 && existingReport.severity !== 'critical') {
        existingReport.severity = 'critical';
      }
    } else {
      // Create new report
      const report: ErrorReport = {
        id: errorId,
        message: error.message,
        stack: error.stack,
        context: fullContext,
        severity,
        category,
        resolved: false,
        createdAt: fullContext.timestamp,
        lastOccurrence: fullContext.timestamp,
        occurrenceCount: 1
      };

      this.errorReports.set(errorId, report);
      this.cleanupOldReports();
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Enhanced Error Handler:', {
        error,
        context: fullContext,
        severity,
        category
      });
    }

    // Report to external service
    this.reportToExternalService(error, fullContext, severity, category);
  }

  private generateErrorId(error: Error): string {
    const message = error.message.replace(/\d+/g, 'X'); // Replace numbers with X
    const stack = error.stack?.split('\n')[0] || '';
    return `error_${this.hashCode(message + stack)}`;
  }

  private hashCode(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(36);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private determineSeverity(error: Error, _context: ErrorContext): ErrorReport['severity'] {
    // Critical errors
    if (error.message.includes('ChunkLoadError') || 
        error.message.includes('Loading chunk') ||
        error.message.includes('Network Error')) {
      return 'critical';
    }

    // High severity errors
    if (error.message.includes('TypeError') ||
        error.message.includes('ReferenceError') ||
        error.message.includes('SyntaxError')) {
      return 'high';
    }

    // Medium severity errors
    if (error.message.includes('Warning') ||
        error.message.includes('Deprecated')) {
      return 'medium';
    }

    // Default to low severity
    return 'low';
  }

  private categorizeError(error: Error, context: ErrorContext): ErrorReport['category'] {
    if (context.component === 'network' || error.message.includes('fetch') || error.message.includes('HTTP')) {
      return 'network';
    }

    if (context.component === 'performance' || error.message.includes('timeout') || error.message.includes('slow')) {
      return 'performance';
    }

    if (context.component === 'user' || error.message.includes('validation') || error.message.includes('input')) {
      return 'user';
    }

    if (context.component === 'system' || error.message.includes('memory') || error.message.includes('storage')) {
      return 'system';
    }

    return 'javascript';
  }

  private cleanupOldReports(): void {
    if (this.errorReports.size > this.maxReports) {
      const reports = Array.from(this.errorReports.values());
      reports.sort((a, b) => new Date(b.lastOccurrence).getTime() - new Date(a.lastOccurrence).getTime());
      
      const reportsToKeep = reports.slice(0, this.maxReports);
      this.errorReports.clear();
      
      reportsToKeep.forEach(report => {
        this.errorReports.set(report.id, report);
      });
    }
  }

  private reportToExternalService(
    error: Error, 
    context: ErrorContext, 
    severity: ErrorReport['severity'], 
    category: ErrorReport['category']
  ): void {
    // In a real application, you would send this to your error reporting service
    // Examples: Sentry, Bugsnag, LogRocket, etc.
    
    const errorData = {
      message: error.message,
      stack: error.stack,
      context,
      severity,
      category,
      timestamp: new Date().toISOString()
    };

    // Example: Send to analytics
    if (typeof window !== 'undefined' && (window as Window & { gtag?: (event: string, data: Record<string, unknown>) => void }).gtag) {
      (window as Window & { gtag: (event: string, data: Record<string, unknown>) => void }).gtag('event', 'exception', {
        description: error.message,
        fatal: severity === 'critical',
        custom_map: {
          severity,
          category,
          component: context.component
        }
      });
    }

    // Example: Send to custom endpoint
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorData)
      }).catch(err => {
        console.warn('Failed to report error to external service:', err);
      });
    }
  }

  public getErrorReports(): ErrorReport[] {
    return Array.from(this.errorReports.values());
  }

  public getCriticalErrors(): ErrorReport[] {
    return this.getErrorReports().filter(report => report.severity === 'critical');
  }

  public markErrorAsResolved(errorId: string): void {
    const report = this.errorReports.get(errorId);
    if (report) {
      report.resolved = true;
    }
  }

  public clearResolvedErrors(): void {
    for (const [id, report] of this.errorReports) {
      if (report.resolved) {
        this.errorReports.delete(id);
      }
    }
  }

  public getErrorStats(): {
    total: number;
    bySeverity: Record<string, number>;
    byCategory: Record<string, number>;
    unresolved: number;
  } {
    const reports = this.getErrorReports();
    
    return {
      total: reports.length,
      bySeverity: reports.reduce((acc, report) => {
        acc[report.severity] = (acc[report.severity] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byCategory: reports.reduce((acc, report) => {
        acc[report.category] = (acc[report.category] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      unresolved: reports.filter(report => !report.resolved).length
    };
  }
}

// Create singleton instance
export const enhancedErrorHandler = new EnhancedErrorHandler();

// Export convenience functions
export const handleError = (error: Error, context?: Partial<ErrorContext>) => {
  enhancedErrorHandler.handleError(error, context);
};

export const setUserId = (userId: string) => {
  enhancedErrorHandler.setUserId(userId);
};

export const getErrorReports = () => {
  return enhancedErrorHandler.getErrorReports();
};

export const getErrorStats = () => {
  return enhancedErrorHandler.getErrorStats();
};