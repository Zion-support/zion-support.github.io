/**
 * Advanced Error Handler
 * Comprehensive error handling and recovery system for the Zion Tech Group website
 */

interface ErrorConfig {
  enableErrorReporting: boolean;
  enableErrorRecovery: boolean;
  enableErrorAnalytics: boolean;
  enableUserNotification: boolean;
  enableAutoRetry: boolean;
  enableErrorBoundary: boolean;
  enablePerformanceImpact: boolean;
  enableSecurityMonitoring: boolean;
}

interface ErrorInfo {
  id: string;
  type: string;
  message: string;
  stack?: string;
  component?: string;
  timestamp: Date;
  userId?: string;
  sessionId?: string;
  url: string;
  userAgent: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'javascript' | 'network' | 'resource' | 'security' | 'performance' | 'unknown';
  metadata?: Record<string, any>;
  resolved: boolean;
  retryCount: number;
  maxRetries: number;
}

interface ErrorMetrics {
  totalErrors: number;
  errorsByType: Record<string, number>;
  errorsBySeverity: Record<string, number>;
  errorsByCategory: Record<string, number>;
  averageResolutionTime: number;
  errorRate: number;
  criticalErrors: number;
  resolvedErrors: number;
  lastErrorTime?: Date;
}

class AdvancedErrorHandler {
  private config: ErrorConfig;
  private errors: ErrorInfo[] = [];
  private metrics: ErrorMetrics;
  private isInitialized = false;
  private retryQueue: ErrorInfo[] = [];
  private errorBoundary: ((error: Error, errorInfo: any) => void) | null = null;

  constructor(config: Partial<ErrorConfig> = {}) {
    this.config = {
      enableErrorReporting: true,
      enableErrorRecovery: true,
      enableErrorAnalytics: true,
      enableUserNotification: true,
      enableAutoRetry: true,
      enableErrorBoundary: true,
      enablePerformanceImpact: true,
      enableSecurityMonitoring: true,
      ...config
    };

    this.metrics = {
      totalErrors: 0,
      errorsByType: {},
      errorsBySeverity: {},
      errorsByCategory: {},
      averageResolutionTime: 0,
      errorRate: 0,
      criticalErrors: 0,
      resolvedErrors: 0
    };
  }

  /**
   * Initialize the error handler
   */
  public async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Initialize global error handlers
      this.initializeGlobalErrorHandlers();

      // Initialize error boundary
      if (this.config.enableErrorBoundary) {
        this.initializeErrorBoundary();
      }

      // Initialize error recovery
      if (this.config.enableErrorRecovery) {
        this.initializeErrorRecovery();
      }

      // Initialize error analytics
      if (this.config.enableErrorAnalytics) {
        this.initializeErrorAnalytics();
      }

      // Initialize user notifications
      if (this.config.enableUserNotification) {
        this.initializeUserNotifications();
      }

      // Initialize auto retry
      if (this.config.enableAutoRetry) {
        this.initializeAutoRetry();
      }

      this.isInitialized = true;
      console.log('🚨 Advanced Error Handler initialized');
    } catch (error) {
      console.error('Error initializing error handler:', error);
    }
  }

  /**
   * Initialize global error handlers
   */
  private initializeGlobalErrorHandlers(): void {
    if (typeof window === 'undefined') return;

    // JavaScript errors
    window.addEventListener('error', (event) => {
      this.handleError({
        type: 'JavaScriptError',
        message: event.message,
        stack: event.error?.stack,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        severity: this.determineSeverity(event.error),
        category: 'javascript'
      });
    });

    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError({
        type: 'UnhandledPromiseRejection',
        message: event.reason?.message || 'Unhandled promise rejection',
        stack: event.reason?.stack,
        severity: 'medium',
        category: 'javascript'
      });
    });

    // Resource loading errors
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        this.handleError({
          type: 'ResourceError',
          message: `Failed to load resource: ${(event.target as any)?.src || (event.target as any)?.href}`,
          severity: 'low',
          category: 'resource',
          metadata: {
            tagName: (event.target as any)?.tagName,
            src: (event.target as any)?.src,
            href: (event.target as any)?.href
          }
        });
      }
    }, true);

    // Network errors
    this.interceptFetch();
    this.interceptXMLHttpRequest();
  }

  /**
   * Intercept fetch requests for error handling
   */
  private interceptFetch(): void {
    if (typeof window === 'undefined' || !window.fetch) return;

    const originalFetch = window.fetch;
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      try {
        const response = await originalFetch(input, init);
        
        if (!response.ok) {
          this.handleError({
            type: 'NetworkError',
            message: `HTTP ${response.status}: ${response.statusText}`,
            severity: response.status >= 500 ? 'high' : 'medium',
            category: 'network',
            metadata: {
              url: response.url,
              status: response.status,
              statusText: response.statusText
            }
          });
        }
        
        return response;
      } catch (error) {
        this.handleError({
          type: 'NetworkError',
          message: error instanceof Error ? error.message : 'Network request failed',
          stack: error instanceof Error ? error.stack : undefined,
          severity: 'high',
          category: 'network',
          metadata: {
            url: typeof input === 'string' ? input : input.toString()
          }
        });
        throw error;
      }
    };
  }

  /**
   * Intercept XMLHttpRequest for error handling
   */
  private interceptXMLHttpRequest(): void {
    if (typeof window === 'undefined' || !window.XMLHttpRequest) return;

    const originalXHR = window.XMLHttpRequest;
    window.XMLHttpRequest = function() {
      const xhr = new originalXHR();
      const originalOpen = xhr.open;
      const originalSend = xhr.send;

      xhr.open = function(method: string, url: string | URL, ...args: any[]) {
        this._method = method;
        this._url = url;
        return originalOpen.apply(this, [method, url, ...args]);
      };

      xhr.send = function(data?: any) {
        this.addEventListener('error', () => {
          this.handleError({
            type: 'XHRError',
            message: 'XMLHttpRequest failed',
            severity: 'medium',
            category: 'network',
            metadata: {
              method: this._method,
              url: this._url
            }
          });
        });

        this.addEventListener('load', () => {
          if (this.status >= 400) {
            this.handleError({
              type: 'XHRError',
              message: `HTTP ${this.status}: ${this.statusText}`,
              severity: this.status >= 500 ? 'high' : 'medium',
              category: 'network',
              metadata: {
                method: this._method,
                url: this._url,
                status: this.status,
                statusText: this.statusText
              }
            });
          }
        });

        return originalSend.apply(this, [data]);
      };

      return xhr;
    } as any;
  }

  /**
   * Initialize error boundary
   */
  private initializeErrorBoundary(): void {
    this.errorBoundary = (error: Error, errorInfo: any) => {
      this.handleError({
        type: 'ReactErrorBoundary',
        message: error.message,
        stack: error.stack,
        severity: 'critical',
        category: 'javascript',
        metadata: {
          componentStack: errorInfo.componentStack,
          errorBoundary: errorInfo.errorBoundary
        }
      });
    };
  }

  /**
   * Initialize error recovery
   */
  private initializeErrorRecovery(): void {
    // Auto-recovery for common errors
    setInterval(() => {
      this.processRetryQueue();
    }, 5000); // Check every 5 seconds
  }

  /**
   * Initialize error analytics
   */
  private initializeErrorAnalytics(): void {
    // Track error patterns and trends
    setInterval(() => {
      this.updateMetrics();
    }, 30000); // Update every 30 seconds
  }

  /**
   * Initialize user notifications
   */
  private initializeUserNotifications(): void {
    // Show user-friendly error messages
    // This would integrate with the notification system
  }

  /**
   * Initialize auto retry
   */
  private initializeAutoRetry(): void {
    // Implement exponential backoff for retryable errors
  }

  /**
   * Handle an error
   */
  public handleError(errorData: {
    type: string;
    message: string;
    stack?: string;
    filename?: string;
    lineno?: number;
    colno?: number;
    severity?: 'low' | 'medium' | 'high' | 'critical';
    category?: 'javascript' | 'network' | 'resource' | 'security' | 'performance' | 'unknown';
    metadata?: Record<string, any>;
  }): void {
    const error: ErrorInfo = {
      id: this.generateErrorId(),
      type: errorData.type,
      message: errorData.message,
      stack: errorData.stack,
      component: errorData.filename,
      timestamp: new Date(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      severity: errorData.severity || 'medium',
      category: errorData.category || 'unknown',
      metadata: errorData.metadata,
      resolved: false,
      retryCount: 0,
      maxRetries: this.getMaxRetries(errorData.type)
    };

    this.errors.push(error);
    this.updateMetrics();

    // Log error
    console.error('Error captured:', error);

    // Send to error reporting service
    if (this.config.enableErrorReporting) {
      this.reportError(error);
    }

    // Attempt recovery
    if (this.config.enableErrorRecovery) {
      this.attemptRecovery(error);
    }

    // Notify user if critical
    if (this.config.enableUserNotification && error.severity === 'critical') {
      this.notifyUser(error);
    }

    // Add to retry queue if retryable
    if (this.config.enableAutoRetry && this.isRetryable(error)) {
      this.retryQueue.push(error);
    }
  }

  /**
   * Generate unique error ID
   */
  private generateErrorId(): string {
    return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * Determine error severity
   */
  private determineSeverity(error: Error): 'low' | 'medium' | 'high' | 'critical' {
    if (error.name === 'ChunkLoadError' || error.name === 'Loading chunk') {
      return 'medium'; // Chunk loading errors are usually recoverable
    }
    
    if (error.message.includes('Network') || error.message.includes('fetch')) {
      return 'medium';
    }
    
    if (error.message.includes('Security') || error.message.includes('CORS')) {
      return 'high';
    }
    
    if (error.message.includes('ReferenceError') || error.message.includes('TypeError')) {
      return 'high';
    }
    
    return 'medium';
  }

  /**
   * Get max retries for error type
   */
  private getMaxRetries(type: string): number {
    const retryConfig: Record<string, number> = {
      'NetworkError': 3,
      'ResourceError': 2,
      'JavaScriptError': 0,
      'UnhandledPromiseRejection': 0,
      'ReactErrorBoundary': 0
    };
    
    return retryConfig[type] || 1;
  }

  /**
   * Check if error is retryable
   */
  private isRetryable(error: ErrorInfo): boolean {
    return error.maxRetries > 0 && 
           (error.type === 'NetworkError' || error.type === 'ResourceError');
  }

  /**
   * Attempt error recovery
   */
  private attemptRecovery(error: ErrorInfo): void {
    switch (error.type) {
      case 'NetworkError':
        this.retryNetworkRequest(error);
        break;
      case 'ResourceError':
        this.retryResourceLoad(error);
        break;
      case 'ChunkLoadError':
        this.reloadPage();
        break;
      default:
        // No specific recovery for this error type
        break;
    }
  }

  /**
   * Retry network request
   */
  private retryNetworkRequest(error: ErrorInfo): void {
    // Implement network request retry logic
    console.log('Retrying network request for error:', error.id);
  }

  /**
   * Retry resource load
   */
  private retryResourceLoad(error: ErrorInfo): void {
    // Implement resource retry logic
    console.log('Retrying resource load for error:', error.id);
  }

  /**
   * Reload page for critical errors
   */
  private reloadPage(): void {
    if (typeof window !== 'undefined') {
      console.log('Reloading page due to critical error');
      window.location.reload();
    }
  }

  /**
   * Process retry queue
   */
  private processRetryQueue(): void {
    const now = Date.now();
    const retryableErrors = this.retryQueue.filter(error => 
      !error.resolved && 
      error.retryCount < error.maxRetries &&
      (now - error.timestamp.getTime()) > (error.retryCount * 1000) // Exponential backoff
    );

    retryableErrors.forEach(error => {
      error.retryCount++;
      this.attemptRecovery(error);
      
      if (error.retryCount >= error.maxRetries) {
        error.resolved = true;
        this.retryQueue = this.retryQueue.filter(e => e.id !== error.id);
      }
    });
  }

  /**
   * Report error to external service
   */
  private reportError(error: ErrorInfo): void {
    // In production, this would send to an error reporting service
    console.log('Reporting error:', error);
  }

  /**
   * Notify user of critical error
   */
  private notifyUser(error: ErrorInfo): void {
    // Show user-friendly error message
    if (typeof window !== 'undefined') {
      const notification = {
        type: 'error' as const,
        title: 'An error occurred',
        message: 'We apologize for the inconvenience. Our team has been notified.',
        duration: 5000
      };
      
      // Dispatch custom event for notification system
      window.dispatchEvent(new CustomEvent('show-notification', { detail: notification }));
    }
  }

  /**
   * Update error metrics
   */
  private updateMetrics(): void {
    const now = new Date();
    const last24Hours = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    
    const recentErrors = this.errors.filter(error => error.timestamp > last24Hours);
    
    this.metrics.totalErrors = this.errors.length;
    this.metrics.criticalErrors = this.errors.filter(e => e.severity === 'critical').length;
    this.metrics.resolvedErrors = this.errors.filter(e => e.resolved).length;
    this.metrics.lastErrorTime = this.errors.length > 0 ? this.errors[this.errors.length - 1].timestamp : undefined;
    
    // Calculate error rate (errors per hour)
    this.metrics.errorRate = recentErrors.length / 24;
    
    // Count errors by type
    this.metrics.errorsByType = {};
    this.errors.forEach(error => {
      this.metrics.errorsByType[error.type] = (this.metrics.errorsByType[error.type] || 0) + 1;
    });
    
    // Count errors by severity
    this.metrics.errorsBySeverity = {};
    this.errors.forEach(error => {
      this.metrics.errorsBySeverity[error.severity] = (this.metrics.errorsBySeverity[error.severity] || 0) + 1;
    });
    
    // Count errors by category
    this.metrics.errorsByCategory = {};
    this.errors.forEach(error => {
      this.metrics.errorsByCategory[error.category] = (this.metrics.errorsByCategory[error.category] || 0) + 1;
    });
  }

  /**
   * Get error metrics
   */
  public getMetrics(): ErrorMetrics {
    return { ...this.metrics };
  }

  /**
   * Get all errors
   */
  public getErrors(): ErrorInfo[] {
    return [...this.errors];
  }

  /**
   * Get recent errors
   */
  public getRecentErrors(hours: number = 24): ErrorInfo[] {
    const cutoff = new Date(Date.now() - hours * 60 * 60 * 1000);
    return this.errors.filter(error => error.timestamp > cutoff);
  }

  /**
   * Get error boundary function
   */
  public getErrorBoundary(): ((error: Error, errorInfo: any) => void) | null {
    return this.errorBoundary;
  }

  /**
   * Clear resolved errors
   */
  public clearResolvedErrors(): void {
    this.errors = this.errors.filter(error => !error.resolved);
    this.updateMetrics();
  }

  /**
   * Generate error report
   */
  public generateReport(): string {
    const metrics = this.getMetrics();
    const recentErrors = this.getRecentErrors(24);
    
    const report = `
Error Report (Last 24 Hours):
============================
Total Errors: ${metrics.totalErrors}
Critical Errors: ${metrics.criticalErrors}
Resolved Errors: ${metrics.resolvedErrors}
Error Rate: ${metrics.errorRate.toFixed(2)} errors/hour
Last Error: ${metrics.lastErrorTime?.toISOString() || 'None'}

Errors by Type:
${Object.entries(metrics.errorsByType).map(([type, count]) => `  ${type}: ${count}`).join('\n')}

Errors by Severity:
${Object.entries(metrics.errorsBySeverity).map(([severity, count]) => `  ${severity}: ${count}`).join('\n')}

Errors by Category:
${Object.entries(metrics.errorsByCategory).map(([category, count]) => `  ${category}: ${count}`).join('\n')}

Recent Errors (${recentErrors.length}):
${recentErrors.slice(-10).map(error => 
  `  ${error.timestamp.toISOString()} - ${error.type}: ${error.message} (${error.severity})`
).join('\n')}
    `;

    return report.trim();
  }

  /**
   * Cleanup resources
   */
  public cleanup(): void {
    this.errors = [];
    this.retryQueue = [];
    this.errorBoundary = null;
    this.isInitialized = false;
  }
}

// Export singleton instance
export const advancedErrorHandler = new AdvancedErrorHandler();

// Export class for custom instances
export { AdvancedErrorHandler };
export type { ErrorConfig, ErrorInfo, ErrorMetrics };