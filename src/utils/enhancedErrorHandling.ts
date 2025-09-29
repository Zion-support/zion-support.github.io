/**
 * Enhanced Error Handling System
 * Comprehensive error tracking, logging, and recovery system
 */

interface ErrorContext {
  userId?: string;
  sessionId?: string;
  url?: string;
  userAgent?: string;
  timestamp?: Date;
  component?: string;
  action?: string;
  metadata?: Record<string, any>;
}

interface ErrorReport {
  id: string;
  message: string;
  stack?: string;
  context: ErrorContext;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'javascript' | 'network' | 'validation' | 'performance' | 'security' | 'unknown';
  resolved: boolean;
  createdAt: Date;
  resolvedAt?: Date;
}

interface ErrorMetrics {
  totalErrors: number;
  errorsByCategory: Record<string, number>;
  errorsBySeverity: Record<string, number>;
  averageResolutionTime: number;
  errorRate: number;
}

class EnhancedErrorHandler {
  private errors: ErrorReport[] = [];
  private maxErrors: number = 1000;
  private isInitialized: boolean = false;
  private sessionId: string;
  private userId?: string;

  constructor() {
    this.sessionId = this.generateSessionId();
  }

  /**
   * Initialize error handling system
   */
  public initialize(): void {
    if (this.isInitialized) {
      console.warn('Enhanced Error Handler is already initialized');
      return;
    }

    this.isInitialized = true;
    console.log('🛡️ Enhanced Error Handler initialized');

    // Setup global error handlers
    this.setupGlobalErrorHandlers();
    
    // Setup unhandled promise rejection handler
    this.setupUnhandledRejectionHandler();
    
    // Setup console error interceptor
    this.setupConsoleErrorInterceptor();
    
    // Setup network error monitoring
    this.setupNetworkErrorMonitoring();
  }

  /**
   * Setup global error handlers
   */
  private setupGlobalErrorHandlers(): void {
    // JavaScript errors
    window.addEventListener('error', (event) => {
      this.handleError(event.error, {
        url: event.filename,
        component: 'window',
        action: 'javascript_error',
        metadata: {
          line: event.lineno,
          column: event.colno,
          message: event.message
        }
      });
    });

    // Resource loading errors
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        const target = event.target as HTMLElement;
        this.handleError(new Error(`Resource loading failed: ${target.tagName}`), {
          url: (target as any).src || (target as any).href,
          component: target.tagName.toLowerCase(),
          action: 'resource_error',
          metadata: {
            tagName: target.tagName,
            id: target.id,
            className: target.className
          }
        });
      }
    }, true);
  }

  /**
   * Setup unhandled promise rejection handler
   */
  private setupUnhandledRejectionHandler(): void {
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError(event.reason, {
        component: 'promise',
        action: 'unhandled_rejection',
        metadata: {
          promise: event.promise,
          type: typeof event.reason
        }
      });
    });
  }

  /**
   * Setup console error interceptor
   */
  private setupConsoleErrorInterceptor(): void {
    const originalConsoleError = console.error;
    console.error = (...args: any[]) => {
      // Call original console.error
      originalConsoleError.apply(console, args);
      
      // Log to error handler
      const message = args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
      ).join(' ');
      
      this.handleError(new Error(`Console Error: ${message}`), {
        component: 'console',
        action: 'console_error',
        metadata: { args }
      });
    };
  }

  /**
   * Setup network error monitoring
   */
  private setupNetworkErrorMonitoring(): void {
    // Monitor fetch requests
    const originalFetch = window.fetch;
    window.fetch = async (...args: any[]) => {
      try {
        const response = await originalFetch.apply(window, args);
        
        if (!response.ok) {
          this.handleError(new Error(`HTTP ${response.status}: ${response.statusText}`), {
            component: 'fetch',
            action: 'http_error',
            metadata: {
              url: args[0],
              status: response.status,
              statusText: response.statusText,
              method: args[1]?.method || 'GET'
            }
          });
        }
        
        return response;
      } catch (error) {
        this.handleError(error as Error, {
          component: 'fetch',
          action: 'network_error',
          metadata: {
            url: args[0],
            method: args[1]?.method || 'GET'
          }
        });
        throw error;
      }
    };
  }

  /**
   * Handle error
   */
  public handleError(error: Error, context: Partial<ErrorContext> = {}): void {
    const errorReport: ErrorReport = {
      id: this.generateErrorId(),
      message: error.message,
      stack: error.stack,
      context: {
        userId: this.userId,
        sessionId: this.sessionId,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: new Date(),
        ...context
      },
      severity: this.determineSeverity(error, context),
      category: this.categorizeError(error, context),
      resolved: false,
      createdAt: new Date()
    };

    // Add to errors array
    this.errors.push(errorReport);
    
    // Keep only the most recent errors
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(-this.maxErrors);
    }

    // Log error
    this.logError(errorReport);
    
    // Send to external service (if configured)
    this.sendToExternalService(errorReport);
    
    // Trigger error recovery
    this.attemptErrorRecovery(errorReport);
  }

  /**
   * Determine error severity
   */
  private determineSeverity(error: Error, context: Partial<ErrorContext>): 'low' | 'medium' | 'high' | 'critical' {
    const message = error.message.toLowerCase();
    
    // Critical errors
    if (message.includes('security') || 
        message.includes('authentication') ||
        message.includes('permission denied') ||
        message.includes('unauthorized')) {
      return 'critical';
    }
    
    // High severity errors
    if (message.includes('network') ||
        message.includes('timeout') ||
        message.includes('connection') ||
        context.action === 'unhandled_rejection') {
      return 'high';
    }
    
    // Medium severity errors
    if (message.includes('validation') ||
        message.includes('format') ||
        message.includes('parse')) {
      return 'medium';
    }
    
    // Low severity errors (default)
    return 'low';
  }

  /**
   * Categorize error
   */
  private categorizeError(error: Error, context: Partial<ErrorContext>): 'javascript' | 'network' | 'validation' | 'performance' | 'security' | 'unknown' {
    const message = error.message.toLowerCase();
    const action = context.action?.toLowerCase() || '';
    
    if (action.includes('network') || action.includes('http') || action.includes('fetch')) {
      return 'network';
    }
    
    if (message.includes('security') || message.includes('auth') || message.includes('permission')) {
      return 'security';
    }
    
    if (message.includes('validation') || message.includes('format') || message.includes('invalid')) {
      return 'validation';
    }
    
    if (message.includes('performance') || message.includes('slow') || message.includes('timeout')) {
      return 'performance';
    }
    
    if (action.includes('javascript') || action.includes('promise') || action.includes('console')) {
      return 'javascript';
    }
    
    return 'unknown';
  }

  /**
   * Log error
   */
  private logError(errorReport: ErrorReport): void {
    const logLevel = this.getLogLevel(errorReport.severity);
    const message = `[${errorReport.category.toUpperCase()}] ${errorReport.message}`;
    
    switch (logLevel) {
      case 'error':
        console.error(message, errorReport);
        break;
      case 'warn':
        console.warn(message, errorReport);
        break;
      case 'info':
        console.info(message, errorReport);
        break;
      default:
        console.log(message, errorReport);
    }
  }

  /**
   * Get log level based on severity
   */
  private getLogLevel(severity: string): 'error' | 'warn' | 'info' | 'log' {
    switch (severity) {
      case 'critical':
      case 'high':
        return 'error';
      case 'medium':
        return 'warn';
      case 'low':
        return 'info';
      default:
        return 'log';
    }
  }

  /**
   * Send to external service
   */
  private sendToExternalService(errorReport: ErrorReport): void {
    // This would typically send to an external error tracking service
    // like Sentry, LogRocket, or a custom API endpoint
    
    if (typeof gtag !== 'undefined') {
      gtag('event', 'exception', {
        description: errorReport.message,
        fatal: errorReport.severity === 'critical' || errorReport.severity === 'high',
        error_category: errorReport.category,
        error_severity: errorReport.severity
      });
    }
    
    // Example: Send to custom API
    // fetch('/api/errors', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(errorReport)
    // }).catch(console.error);
  }

  /**
   * Attempt error recovery
   */
  private attemptErrorRecovery(errorReport: ErrorReport): void {
    // Implement automatic error recovery strategies
    switch (errorReport.category) {
      case 'network':
        this.attemptNetworkRecovery(errorReport);
        break;
      case 'performance':
        this.attemptPerformanceRecovery(errorReport);
        break;
      case 'validation':
        this.attemptValidationRecovery(errorReport);
        break;
      default:
        // No automatic recovery available
        break;
    }
  }

  /**
   * Attempt network error recovery
   */
  private attemptNetworkRecovery(errorReport: ErrorReport): void {
    console.log('🔄 Attempting network error recovery...');
    
    // Implement retry logic, fallback URLs, or offline mode
    // This is a placeholder for actual recovery logic
  }

  /**
   * Attempt performance error recovery
   */
  private attemptPerformanceRecovery(errorReport: ErrorReport): void {
    console.log('⚡ Attempting performance error recovery...');
    
    // Implement performance optimizations, cache clearing, etc.
    // This is a placeholder for actual recovery logic
  }

  /**
   * Attempt validation error recovery
   */
  private attemptValidationRecovery(errorReport: ErrorReport): void {
    console.log('✅ Attempting validation error recovery...');
    
    // Implement data sanitization, format correction, etc.
    // This is a placeholder for actual recovery logic
  }

  /**
   * Set user ID for error tracking
   */
  public setUserId(userId: string): void {
    this.userId = userId;
  }

  /**
   * Get error metrics
   */
  public getMetrics(): ErrorMetrics {
    const errorsByCategory: Record<string, number> = {};
    const errorsBySeverity: Record<string, number> = {};
    let totalResolutionTime = 0;
    let resolvedCount = 0;

    this.errors.forEach(error => {
      errorsByCategory[error.category] = (errorsByCategory[error.category] || 0) + 1;
      errorsBySeverity[error.severity] = (errorsBySeverity[error.severity] || 0) + 1;
      
      if (error.resolved && error.resolvedAt) {
        totalResolutionTime += error.resolvedAt.getTime() - error.createdAt.getTime();
        resolvedCount++;
      }
    });

    return {
      totalErrors: this.errors.length,
      errorsByCategory,
      errorsBySeverity,
      averageResolutionTime: resolvedCount > 0 ? totalResolutionTime / resolvedCount : 0,
      errorRate: this.errors.length / (Date.now() - this.errors[0]?.createdAt.getTime() || 1) * 1000 * 60 // errors per minute
    };
  }

  /**
   * Get recent errors
   */
  public getRecentErrors(limit: number = 10): ErrorReport[] {
    return this.errors.slice(-limit).reverse();
  }

  /**
   * Mark error as resolved
   */
  public resolveError(errorId: string): void {
    const error = this.errors.find(e => e.id === errorId);
    if (error) {
      error.resolved = true;
      error.resolvedAt = new Date();
    }
  }

  /**
   * Generate session ID
   */
  private generateSessionId(): string {
    return 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
  }

  /**
   * Generate error ID
   */
  private generateErrorId(): string {
    return 'error_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
  }

  /**
   * Generate error report
   */
  public generateReport(): string {
    const metrics = this.getMetrics();
    const recentErrors = this.getRecentErrors(5);
    
    let report = `
🛡️ Enhanced Error Handling Report
================================
Total Errors: ${metrics.totalErrors}
Error Rate: ${metrics.errorRate.toFixed(2)} errors/minute

📊 Errors by Category:
`;

    Object.entries(metrics.errorsByCategory).forEach(([category, count]) => {
      report += `- ${category}: ${count}\n`;
    });

    report += `\n📊 Errors by Severity:\n`;
    Object.entries(metrics.errorsBySeverity).forEach(([severity, count]) => {
      report += `- ${severity}: ${count}\n`;
    });

    if (recentErrors.length > 0) {
      report += `\n🚨 Recent Errors:\n`;
      recentErrors.forEach((error, index) => {
        report += `${index + 1}. [${error.severity.toUpperCase()}] ${error.message}\n`;
      });
    }

    return report;
  }

  /**
   * Cleanup
   */
  public cleanup(): void {
    this.errors = [];
    this.isInitialized = false;
  }
}

// Export singleton instance
export const enhancedErrorHandler = new EnhancedErrorHandler();
export { EnhancedErrorHandler, ErrorReport, ErrorContext, ErrorMetrics };
export default EnhancedErrorHandler;