/**
 * Advanced Error Handling and Monitoring System
 * Provides comprehensive error tracking, reporting, and recovery mechanisms
 */

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  timestamp: number;
  userId?: string;
  sessionId?: string;
  url: string;
  userAgent: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'javascript' | 'network' | 'resource' | 'promise' | 'react';
}

export interface ErrorMetrics {
  totalErrors: number;
  errorsByCategory: Record<string, number>;
  errorsBySeverity: Record<string, number>;
  averageErrorRate: number;
  lastErrorTime: number;
}

class ErrorHandler {
  private errors: ErrorInfo[] = [];
  private isMonitoring = false;
  private errorBoundaries: Set<string> = new Set();
  private retryAttempts: Map<string, number> = new Map();
  private maxRetries = 3;

  constructor() {
    this.setupGlobalErrorHandlers();
    this.setupUnhandledRejectionHandler();
    this.setupNetworkErrorHandler();
  }

  public startMonitoring(): void {
    if (this.isMonitoring) return;
    
    this.isMonitoring = true;
    console.log('Error monitoring started');
  }

  public stopMonitoring(): void {
    this.isMonitoring = false;
    console.log('Error monitoring stopped');
  }

  private setupGlobalErrorHandlers(): void {
    if (typeof window === 'undefined') return;

    // Global JavaScript errors
    window.addEventListener('error', (event) => {
      this.handleError({
        message: event.message,
        stack: event.error?.stack,
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        severity: this.determineSeverity(event.error),
        category: 'javascript',
      });
    });

    // Unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError({
        message: event.reason?.message || 'Unhandled promise rejection',
        stack: event.reason?.stack,
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        severity: this.determineSeverity(event.reason),
        category: 'promise',
      });
    });
  }

  private setupUnhandledRejectionHandler(): void {
    if (typeof window === 'undefined') return;

    window.addEventListener('unhandledrejection', (event) => {
      // Prevent default browser behavior
      event.preventDefault();
      
      // Log the error
      console.error('Unhandled promise rejection:', event.reason);
      
      // Report to error tracking service
      this.reportError(event.reason);
    });
  }

  private setupNetworkErrorHandler(): void {
    if (typeof window === 'undefined') return;

    // Monitor fetch errors
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      try {
        const response = await originalFetch(...args);
        
        if (!response.ok) {
          this.handleError({
            message: `HTTP ${response.status}: ${response.statusText}`,
            timestamp: Date.now(),
            url: response.url,
            userAgent: navigator.userAgent,
            severity: response.status >= 500 ? 'high' : 'medium',
            category: 'network',
          });
        }
        
        return response;
      } catch (error) {
        this.handleError({
          message: `Network request failed: ${error}`,
          timestamp: Date.now(),
          url: args[0] as string,
          userAgent: navigator.userAgent,
          severity: 'medium',
          category: 'network',
        });
        throw error;
      }
    };
  }

  public handleError(errorInfo: Partial<ErrorInfo>): void {
    const fullErrorInfo: ErrorInfo = {
      message: errorInfo.message || 'Unknown error',
      stack: errorInfo.stack,
      componentStack: errorInfo.componentStack,
      errorBoundary: errorInfo.errorBoundary,
      timestamp: errorInfo.timestamp || Date.now(),
      userId: errorInfo.userId || this.getUserId(),
      sessionId: errorInfo.sessionId || this.getSessionId(),
      url: errorInfo.url || window.location.href,
      userAgent: errorInfo.userAgent || navigator.userAgent,
      severity: errorInfo.severity || 'medium',
      category: errorInfo.category || 'javascript',
    };

    this.errors.push(fullErrorInfo);
    this.logError(fullErrorInfo);
    this.reportError(fullErrorInfo);
    this.attemptRecovery(fullErrorInfo);
  }

  private determineSeverity(error: any): 'low' | 'medium' | 'high' | 'critical' {
    if (!error) return 'medium';
    
    const message = error.message?.toLowerCase() || '';
    
    if (message.includes('network') || message.includes('fetch')) {
      return 'medium';
    }
    
    if (message.includes('memory') || message.includes('out of memory')) {
      return 'high';
    }
    
    if (message.includes('syntax') || message.includes('reference')) {
      return 'high';
    }
    
    return 'medium';
  }

  private logError(errorInfo: ErrorInfo): void {
    const logLevel = this.getLogLevel(errorInfo.severity);
    const logMessage = `[${errorInfo.category.toUpperCase()}] ${errorInfo.message}`;
    
    switch (logLevel) {
      case 'error':
        console.error(logMessage, errorInfo);
        break;
      case 'warn':
        console.warn(logMessage, errorInfo);
        break;
      case 'info':
        console.info(logMessage, errorInfo);
        break;
      default:
        console.log(logMessage, errorInfo);
    }
  }

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

  private reportError(errorInfo: ErrorInfo): void {
    // In a real application, you would send this to your error tracking service
    // For now, we'll just log it
    console.log('Reporting error to tracking service:', errorInfo);
    
    // Example: Send to external service
    // fetch('/api/errors', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(errorInfo)
    // }).catch(err => console.error('Failed to report error:', err));
  }

  private attemptRecovery(errorInfo: ErrorInfo): void {
    const errorKey = `${errorInfo.category}-${errorInfo.message}`;
    const attempts = this.retryAttempts.get(errorKey) || 0;
    
    if (attempts < this.maxRetries) {
      this.retryAttempts.set(errorKey, attempts + 1);
      
      setTimeout(() => {
        this.executeRecoveryStrategy(errorInfo);
      }, Math.pow(2, attempts) * 1000); // Exponential backoff
    } else {
      console.error('Max retry attempts reached for error:', errorInfo.message);
    }
  }

  private executeRecoveryStrategy(errorInfo: ErrorInfo): void {
    switch (errorInfo.category) {
      case 'network':
        this.recoverFromNetworkError(errorInfo);
        break;
      case 'javascript':
        this.recoverFromJavaScriptError(errorInfo);
        break;
      case 'resource':
        this.recoverFromResourceError(errorInfo);
        break;
      default:
        console.log('No recovery strategy for error category:', errorInfo.category);
    }
  }

  private recoverFromNetworkError(errorInfo: ErrorInfo): void {
    // Implement network error recovery strategies
    console.log('Attempting network error recovery...');
    
    // Example: Retry failed requests, use offline cache, etc.
  }

  private recoverFromJavaScriptError(errorInfo: ErrorInfo): void {
    // Implement JavaScript error recovery strategies
    console.log('Attempting JavaScript error recovery...');
    
    // Example: Reload component, reset state, etc.
  }

  private recoverFromResourceError(errorInfo: ErrorInfo): void {
    // Implement resource error recovery strategies
    console.log('Attempting resource error recovery...');
    
    // Example: Use fallback resources, retry loading, etc.
  }

  private getUserId(): string | undefined {
    // Get user ID from localStorage, session, or authentication system
    return localStorage.getItem('userId') || undefined;
  }

  private getSessionId(): string {
    // Generate or retrieve session ID
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      sessionStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  }

  public getErrorMetrics(): ErrorMetrics {
    const totalErrors = this.errors.length;
    const errorsByCategory = this.errors.reduce((acc, error) => {
      acc[error.category] = (acc[error.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const errorsBySeverity = this.errors.reduce((acc, error) => {
      acc[error.severity] = (acc[error.severity] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const averageErrorRate = totalErrors > 0 ? totalErrors / (Date.now() - this.errors[0].timestamp) * 1000 : 0;
    const lastErrorTime = this.errors.length > 0 ? this.errors[this.errors.length - 1].timestamp : 0;
    
    return {
      totalErrors,
      errorsByCategory,
      errorsBySeverity,
      averageErrorRate,
      lastErrorTime,
    };
  }

  public getRecentErrors(limit = 10): ErrorInfo[] {
    return this.errors
      .sort((a, b) => b.timestamp - a.timestamp)
      .slice(0, limit);
  }

  public clearErrors(): void {
    this.errors = [];
    this.retryAttempts.clear();
  }

  public registerErrorBoundary(name: string): void {
    this.errorBoundaries.add(name);
  }

  public unregisterErrorBoundary(name: string): void {
    this.errorBoundaries.delete(name);
  }
}

// Create singleton instance
export const errorHandler = new ErrorHandler();

// Auto-start monitoring in browser environment
if (typeof window !== 'undefined') {
  errorHandler.startMonitoring();
}

// Export React error boundary hook
export const useErrorHandler = () => {
  const handleError = (error: Error, errorInfo?: any) => {
    errorHandler.handleError({
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo?.componentStack,
      category: 'react',
      severity: 'high',
    });
  };

  return { handleError };
};