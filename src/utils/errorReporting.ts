/**
 * Enhanced error reporting and monitoring utilities
 */

interface PerformanceMemory {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

interface PerformanceWithMemory extends Performance {
  memory?: PerformanceMemory;
}

export interface ErrorContext {
  userId?: string;
  sessionId: string;
  timestamp: string;
  userAgent: string;
  url: string;
  referrer: string;
  viewport: {
    width: number;
    height: number;
  };
  performance?: {
    memory?: PerformanceMemory;
    timing?: PerformanceNavigationTiming;
  };
  customData?: Record<string, unknown>;
}

export interface ErrorReport {
  id: string;
  error: {
    name: string;
    message: string;
    stack?: string;
    cause?: Error | unknown;
  };
  context: ErrorContext;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'javascript' | 'network' | 'security' | 'performance' | 'user';
  tags: string[];
}

class ErrorReporter {
  private static instance: ErrorReporter;
  private reports: ErrorReport[] = [];
  private maxReports = 100;
  private sessionId: string;
  private isInitialized = false;

  private constructor() {
    this.sessionId = this.generateSessionId();
  }

  public static getInstance(): ErrorReporter {
    if (!ErrorReporter.instance) {
      ErrorReporter.instance = new ErrorReporter();
    }
    return ErrorReporter.instance;
  }

  public initialize() {
    if (this.isInitialized) return;

    // Global error handler
    window.addEventListener('error', this.handleGlobalError.bind(this));
    
    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', this.handleUnhandledRejection.bind(this));

    // Network error monitoring
    this.setupNetworkErrorMonitoring();

    // Performance monitoring
    this.setupPerformanceMonitoring();

    this.isInitialized = true;
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private getErrorContext(customData?: Record<string, unknown>): ErrorContext {
    const context: ErrorContext = {
      sessionId: this.sessionId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      referrer: document.referrer,
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    };

    // Add performance data if available
    if (window.performance) {
      context.performance = {};
      
      if ((window.performance as PerformanceWithMemory).memory) {
        context.performance.memory = (window.performance as PerformanceWithMemory).memory;
      }

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        context.performance.timing = navigation;
      }
    }

    // Add custom data
    if (customData) {
      context.customData = customData;
    }

    // Add user ID from localStorage if available
    try {
      const userId = localStorage.getItem('userId');
      if (userId) {
        context.userId = userId;
      }
    } catch {
      // Ignore localStorage errors
    }

    return context;
  }

  private handleGlobalError(event: ErrorEvent) {
    this.reportError(
      event.error || new Error(event.message),
      {
        category: 'javascript',
        severity: 'high',
        tags: ['global-error'],
        customData: {
          filename: event.filename,
          lineno: event.lineno,
          colno: event.colno
        }
      }
    );
  }

  private handleUnhandledRejection(event: PromiseRejectionEvent) {
    const error = event.reason instanceof Error 
      ? event.reason 
      : new Error(`Unhandled Promise Rejection: ${event.reason}`);

    this.reportError(error, {
      category: 'javascript',
      severity: 'high',
      tags: ['promise-rejection'],
      customData: {
        reason: event.reason
      }
    });
  }

  private setupNetworkErrorMonitoring() {
    // Monitor fetch failures
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      try {
        const response = await originalFetch(...args);
        if (!response.ok) {
          this.reportError(
            new Error(`Network Error: ${response.status} ${response.statusText}`),
            {
              category: 'network',
              severity: response.status >= 500 ? 'high' : 'medium',
              tags: ['fetch-error'],
              customData: {
                url: args[0],
                status: response.status,
                statusText: response.statusText
              }
            }
          );
        }
        return response;
      } catch (error) {
        this.reportError(error as Error, {
          category: 'network',
          severity: 'high',
          tags: ['fetch-failure'],
          customData: {
            url: args[0]
          }
        });
        throw error;
      }
    };
  }

  private setupPerformanceMonitoring() {
    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.duration > 50) { // Tasks longer than 50ms
              this.reportError(
                new Error(`Long Task: ${entry.duration}ms`),
                {
                  category: 'performance',
                  severity: entry.duration > 100 ? 'medium' : 'low',
                  tags: ['long-task'],
                  customData: {
                    duration: entry.duration,
                    startTime: entry.startTime
                  }
                }
              );
            }
          });
        });

        observer.observe({ entryTypes: ['longtask'] });
      } catch {
        // PerformanceObserver not supported
      }
    }
  }

  public reportError(
    error: Error,
    options: {
      category?: ErrorReport['category'];
      severity?: ErrorReport['severity'];
      tags?: string[];
      customData?: Record<string, unknown>;
    } = {}
  ) {
    const report: ErrorReport = {
      id: this.generateErrorId(),
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack,
        cause: (error as Error & { cause?: unknown }).cause
      },
      context: this.getErrorContext(options.customData),
      category: options.category || 'javascript',
      severity: options.severity || 'medium',
      tags: options.tags || []
    };

    // Add to reports array
    this.reports.push(report);

    // Keep only the most recent reports
    if (this.reports.length > this.maxReports) {
      this.reports = this.reports.slice(-this.maxReports);
    }

    // Send to monitoring service
    this.sendToMonitoringService(report);

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group(`🚨 Error Report [${report.severity}]`);
      console.error('Error:', error);
      console.log('Report:', report);
      console.groupEnd();
    }
  }

  private async sendToMonitoringService(report: ErrorReport) {
    try {
      // Send to your error monitoring service
      await fetch('/api/error-reporting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(report),
      });
    } catch {
      // Fallback: store in localStorage for later retry
      try {
        const storedReports = JSON.parse(localStorage.getItem('errorReports') || '[]');
        storedReports.push(report);
        localStorage.setItem('errorReports', JSON.stringify(storedReports.slice(-10)));
      } catch {
        // Ignore localStorage errors
      }
    }
  }

  public getReports(): ErrorReport[] {
    return [...this.reports];
  }

  public clearReports(): void {
    this.reports = [];
  }

  public getStats() {
    const stats = {
      total: this.reports.length,
      bySeverity: {} as Record<string, number>,
      byCategory: {} as Record<string, number>,
      byTag: {} as Record<string, number>
    };

    this.reports.forEach(report => {
      // Count by severity
      stats.bySeverity[report.severity] = (stats.bySeverity[report.severity] || 0) + 1;
      
      // Count by category
      stats.byCategory[report.category] = (stats.byCategory[report.category] || 0) + 1;
      
      // Count by tags
      report.tags.forEach(tag => {
        stats.byTag[tag] = (stats.byTag[tag] || 0) + 1;
      });
    });

    return stats;
  }
}

// Export singleton instance
export const errorReporter = ErrorReporter.getInstance();

// Convenience functions
export const reportError = (error: Error, options?: Parameters<typeof errorReporter.reportError>[1]) => {
  errorReporter.reportError(error, options);
};

export const initializeErrorReporting = () => {
  errorReporter.initialize();
};

export const getErrorStats = () => {
  return errorReporter.getStats();
};