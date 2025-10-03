/**
 * Enhanced Error Handling Utility
 * Provides comprehensive error tracking and recovery
 */

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  timestamp: number;
  userAgent: string;
  url: string;
  userId?: string;
  sessionId?: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'javascript' | 'network' | 'resource' | 'promise' | 'react' | 'unknown';
}

export interface ErrorReport {
  errors: ErrorInfo[];
  totalErrors: number;
  criticalErrors: number;
  lastError?: ErrorInfo;
  errorRate: number;
  timestamp: number;
}

class EnhancedErrorHandler {
  private errors: ErrorInfo[] = [];
  private maxErrors = 100; // Limit stored errors to prevent memory issues
  private errorThresholds = {
    low: 10,
    medium: 5,
    high: 3,
    critical: 1
  };
  private isInitialized = false;

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;

    // Global error handler
    window.addEventListener('error', (event) => {
      this.handleError({
        message: event.message || 'Unknown error',
        stack: event.error?.stack,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        severity: this.determineSeverity(event.error),
        category: 'javascript',
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError({
        message: event.reason?.message || 'Unhandled promise rejection',
        stack: event.reason?.stack,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        severity: this.determineSeverity(event.reason),
        category: 'promise',
      });
    });

    this.isInitialized = true;
  }

  private determineSeverity(error: any): 'low' | 'medium' | 'high' | 'critical' {
    if (!error) return 'low';
    const message = error.message?.toLowerCase() || '';
    
    // Critical errors
    if (message.includes('chunk') || message.includes('loading') || message.includes('script error') || message.includes('syntax error')) {
      return 'critical';
    }
    
    // High severity errors
    if (message.includes('network') || message.includes('fetch')) {
      return 'high';
    }
    
    // Medium severity errors
    if (message.includes('warning') || message.includes('deprecated') || message.includes('render') || message.includes('component')) {
      return 'medium';
    }
    
    return 'low';
  }

  private handleError(errorInfo: ErrorInfo): void {
    // Add to errors array
    this.errors.push(errorInfo);
    
    // Keep only the most recent errors
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(-this.maxErrors);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error captured:', errorInfo);
    }

    // Send to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.reportError(errorInfo);
    }
  }

  private async reportError(errorInfo: ErrorInfo): Promise<void> {
    try {
      // Here you would typically send to your error reporting service
      // For now, we'll just log it
      console.log('Reporting error:', errorInfo);
    } catch (error) {
      console.error('Failed to report error:', error);
    }
  }

  public getErrorReport(): ErrorReport {
    const criticalErrors = this.errors.filter(e => e.severity === 'critical').length;
    const errorRate = this.errors.length / 1000; // errors per 1000 page views

    return {
      errors: [...this.errors],
      totalErrors: this.errors.length,
      criticalErrors,
      lastError: this.errors[this.errors.length - 1],
      errorRate,
      timestamp: Date.now(),
    };
  }

  public clearErrors(): void {
    this.errors = [];
  }

  public isHealthy(): boolean {
    const criticalErrors = this.errors.filter(e => e.severity === 'critical').length;
    return criticalErrors === 0;
  }
}

// Export singleton instance
export const errorHandler = new EnhancedErrorHandler();

// Export the class for testing
export { EnhancedErrorHandler };