/**
 * Enhanced Error Handling Utilities
 * Advanced error handling and recovery mechanisms for the Zion Tech Group website
 */

import React from 'react';

// Extended XMLHttpRequest interface for error tracking
interface ExtendedXMLHttpRequest extends XMLHttpRequest {
  _method?: string;
  _url?: string;
}

// Error object interface for better type safety
interface ErrorLike {
  message?: string;
  stack?: string;
  toString(): string;
}

export interface ErrorContext {
  userId?: string;
  sessionId?: string;
  url: string;
  userAgent: string;
  timestamp: number;
  component?: string;
  action?: string;
  additionalData?: Record<string, unknown>;
}

export interface ErrorReport {
  id: string;
  message: string;
  stack?: string;
  componentStack?: string;
  timestamp: number;
  userAgent: string;
  url: string;
  userId?: string;
  sessionId?: string;
  context?: ErrorContext;
  severity?: 'low' | 'medium' | 'high' | 'critical';
  category?: 'javascript' | 'resource' | 'network';
  resolved?: boolean;
  occurrences?: number;
  firstSeen?: number;
  lastSeen?: number;
}

export interface ErrorRecoveryOptions {
  retryable: boolean;
  maxRetries: number;
  retryDelay: number;
  fallbackComponent?: React.ComponentType<{ error: Error; retry: () => void }>;
}

export class EnhancedErrorHandler {
  private static instance: EnhancedErrorHandler;
  private errorQueue: ErrorReport[] = [];
  private errors: Map<string, ErrorReport> = new Map();
  private maxQueueSize = 50;
  private maxErrors = 1000;
  private isReporting = false;
  private reportEndpoint = '/api/errors';

  static getInstance(): EnhancedErrorHandler {
    if (!EnhancedErrorHandler.instance) {
      EnhancedErrorHandler.instance = new EnhancedErrorHandler();
    }
    return EnhancedErrorHandler.instance;
  }

  public initialize(): void {
    // Global error handlers
    window.addEventListener('error', this.handleGlobalError.bind(this));
    window.addEventListener('unhandledrejection', this.handleUnhandledRejection.bind(this));
    
    // Resource loading errors
    window.addEventListener('error', this.handleResourceError.bind(this), true);
    
    // Network errors
    this.interceptFetch();
    this.interceptXMLHttpRequest();
  }

  private handleGlobalError(event: ErrorEvent): void {
    const errorReport: ErrorReport = {
      id: this.generateErrorId(event.error),
      message: event.message,
      stack: event.error?.stack,
      context: this.getErrorContext(),
      severity: this.determineSeverity(event.error),
      category: 'javascript',
      resolved: false,
      occurrences: 1,
      firstSeen: Date.now(),
      lastSeen: Date.now(),
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    this.processError(errorReport);
  }

  private handleUnhandledRejection(event: PromiseRejectionEvent): void {
    const errorReport: ErrorReport = {
      id: this.generateErrorId(event.reason),
      message: event.reason?.message || 'Unhandled Promise Rejection',
      stack: event.reason?.stack,
      context: this.getErrorContext(),
      severity: this.determineSeverity(event.reason),
      category: 'javascript',
      resolved: false,
      occurrences: 1,
      firstSeen: Date.now(),
      lastSeen: Date.now(),
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    this.processError(errorReport);
  }

  private handleResourceError(event: ErrorEvent): void {
    if (event.target !== window) {
      const errorReport: ErrorReport = {
        id: this.generateErrorId(event),
        message: `Resource loading error: ${(event.target as HTMLImageElement)?.src || (event.target as HTMLLinkElement)?.href}`,
        context: this.getErrorContext({
          resourceType: (event.target as HTMLElement)?.tagName,
          resourceUrl: (event.target as HTMLImageElement)?.src || (event.target as HTMLLinkElement)?.href
        }),
        severity: 'medium',
        category: 'resource',
        resolved: false,
        occurrences: 1,
        firstSeen: Date.now(),
        lastSeen: Date.now(),
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      };

      this.processError(errorReport);
    }
  }

  private interceptFetch(): void {
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      try {
        const response = await originalFetch(...args);
        
        if (!response.ok) {
          const errorReport: ErrorReport = {
            id: this.generateErrorId(response),
            message: `Network error: ${response.status} ${response.statusText}`,
            context: this.getErrorContext({
              url: args[0].toString(),
              method: args[1]?.method || 'GET',
              status: response.status,
              statusText: response.statusText
            }),
            severity: response.status >= 500 ? 'high' : 'medium',
            category: 'network',
            resolved: false,
            occurrences: 1,
            firstSeen: Date.now(),
            lastSeen: Date.now(),
            timestamp: Date.now(),
            userAgent: navigator.userAgent,
            url: window.location.href,
          };

          this.processError(errorReport);
        }

        return response;
      } catch (error) {
        const errorReport: ErrorReport = {
          id: this.generateErrorId(error),
          message: `Fetch error: ${error instanceof Error ? error.message : 'Unknown error'}`,
          context: this.getErrorContext({
            url: args[0].toString(),
            method: args[1]?.method || 'GET'
          }),
          severity: 'high',
          category: 'network',
          resolved: false,
          occurrences: 1,
          firstSeen: Date.now(),
          lastSeen: Date.now(),
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          url: window.location.href,
        };

        this.processError(errorReport);
        throw error;
      }
    };
  }

  private interceptXMLHttpRequest(): void {
    const originalXHR = window.XMLHttpRequest;
    const originalOpen = originalXHR.prototype.open;
    const originalSend = originalXHR.prototype.send;

    originalXHR.prototype.open = function(method: string, url: string, ...args: unknown[]) {
      (this as ExtendedXMLHttpRequest)._method = method;
      (this as ExtendedXMLHttpRequest)._url = url;
      return originalOpen.apply(this, [method, url, ...args] as Parameters<typeof originalOpen>);
    };

    originalXHR.prototype.send = function(data?: unknown) {
      this.addEventListener('error', () => {
        const errorReport: ErrorReport = {
          id: EnhancedErrorHandler.getInstance().generateErrorId(this),
          message: `XHR error: ${(this as ExtendedXMLHttpRequest)._method} ${(this as ExtendedXMLHttpRequest)._url}`,
          context: EnhancedErrorHandler.getInstance().getErrorContext({
            url: (this as ExtendedXMLHttpRequest)._url,
            method: (this as ExtendedXMLHttpRequest)._method,
            status: this.status,
            statusText: this.statusText
          }),
          severity: 'medium',
          category: 'network',
          resolved: false,
          occurrences: 1,
          firstSeen: Date.now(),
          lastSeen: Date.now(),
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          url: window.location.href,
        };

        EnhancedErrorHandler.getInstance().processError(errorReport);
      });

      return originalSend.apply(this, [data] as Parameters<typeof originalSend>);
    };
  }

  private processError(errorReport: ErrorReport): void {
    const existingError = this.errors.get(errorReport.id);
    
    if (existingError) {
      existingError.occurrences = (existingError.occurrences || 1) + 1;
      existingError.lastSeen = Date.now();
      this.errors.set(errorReport.id, existingError);
    } else {
      this.errors.set(errorReport.id, errorReport);
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error captured:', errorReport);
    }

    // Report to server in production
    if (process.env.NODE_ENV === 'production') {
      this.reportToServer(errorReport);
    }

    // Cleanup old errors
    if (this.errors.size > this.maxErrors) {
      const oldestErrors = Array.from(this.errors.entries())
        .sort(([, a], [, b]) => (a.firstSeen || 0) - (b.firstSeen || 0))
        .slice(0, 100);
      
      oldestErrors.forEach(([id]) => this.errors.delete(id));
    }
  }

  private async reportToServer(errorReport: ErrorReport): Promise<void> {
    try {
      await fetch(this.reportEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport)
      });
    } catch (error) {
      console.warn('Failed to report error to server:', error);
    }
  }

  private generateErrorId(error: Error | Event | unknown): string {
    const message = (error as ErrorLike)?.message || error?.toString() || 'unknown';
    const stack = (error as ErrorLike)?.stack || '';
    return btoa(message + stack).replace(/[^a-zA-Z0-9]/g, '').substring(0, 16);
  }

  private getErrorContext(additionalData?: Record<string, unknown>): ErrorContext {
    return {
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: Date.now(),
      ...additionalData
    };
  }

  private determineSeverity(error: Error | Event | unknown): 'low' | 'medium' | 'high' | 'critical' {
    const message = (error as ErrorLike)?.message || error?.toString() || '';
    
    if (message.includes('ChunkLoadError') || message.includes('Loading chunk')) {
      return 'medium'; // Chunk loading errors are usually recoverable
    }
    
    if (message.includes('NetworkError') || message.includes('fetch')) {
      return 'high'; // Network errors are more serious
    }
    
    if (message.includes('TypeError') && message.includes('Cannot read property')) {
      return 'high'; // Property access errors can break functionality
    }
    
    if (message.includes('ReferenceError')) {
      return 'critical'; // Reference errors usually indicate serious issues
    }
    
    return 'medium';
  }

  public captureError(error: Error, context?: Partial<ErrorContext>): void {
    const errorReport: ErrorReport = {
      id: this.generateErrorId(error),
      message: error.message,
      stack: error.stack,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      sessionId: this.getSessionId(),
      context: this.getErrorContext(context),
    };

    this.processError(errorReport);
  }

  /**
   * Get session ID for error tracking
   */
  private getSessionId(): string {
    let sessionId = sessionStorage.getItem('sessionId');
    if (!sessionId) {
      sessionId = Math.random().toString(36).substring(2, 15);
      sessionStorage.setItem('sessionId', sessionId);
    }
    return sessionId;
  }

  /**
   * Get error statistics
   */
  getErrorStats(): {
    totalErrors: number;
    recentErrors: ErrorReport[];
    errorTypes: Record<string, number>;
  } {
    const recentErrors = Array.from(this.errors.values()).slice(-10);
    const errorTypes: Record<string, number> = {};
    
    this.errors.forEach(error => {
      const type = error.message.split(':')[0] || 'Unknown';
      errorTypes[type] = (errorTypes[type] || 0) + 1;
    });

    return {
      totalErrors: this.errors.size,
      recentErrors,
      errorTypes,
    };
  }

  /**
   * Clear error queue
   */
  clearErrors(): void {
    this.errors.clear();
    this.errorQueue = [];
  }
}

/**
 * Enhanced Error Boundary Component
 */
interface EnhancedErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
  retryCount: number;
}

interface EnhancedErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{
    error: Error;
    errorInfo?: React.ErrorInfo;
    retry: () => void;
    retryCount: number;
  }>;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  maxRetries?: number;
}

export class EnhancedErrorBoundary extends React.Component<
  EnhancedErrorBoundaryProps,
  EnhancedErrorBoundaryState
> {
  private errorHandler = EnhancedErrorHandler.getInstance();

  constructor(props: EnhancedErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      retryCount: 0,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<EnhancedErrorBoundaryState> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    const { onError } = this.props;
    
    this.setState({ errorInfo });
    
    // Capture error with enhanced handler
    this.errorHandler.captureError(error, {
      component: errorInfo.componentStack,
      action: 'componentDidCatch'
    });

    // Call custom error handler
    onError?.(error, errorInfo);
  }

  handleRetry = (): void => {
    const { maxRetries = 3 } = this.props;
    
    if (this.state.retryCount < maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: undefined,
        errorInfo: undefined,
        retryCount: prevState.retryCount + 1,
      }));
    } else {
      // Max retries exceeded, reload page
      window.location.reload();
    }
  };

  render(): React.ReactNode {
    const { hasError, error, errorInfo, retryCount } = this.state;
    const { children, fallback: FallbackComponent } = this.props;

    if (hasError && error) {
      if (FallbackComponent) {
        return (
          <FallbackComponent
            error={error}
            errorInfo={errorInfo}
            retry={this.handleRetry}
            retryCount={retryCount}
          />
        );
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
              <svg
                className="w-6 h-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            
            <h2 className="text-lg font-medium text-gray-900 text-center mb-2">
              Something went wrong
            </h2>
            
            <p className="text-sm text-gray-500 text-center mb-6">
              We&apos;re sorry, but something unexpected happened. Please try again.
            </p>
            
            <div className="flex space-x-3">
              <button
                onClick={this.handleRetry}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Try Again ({retryCount}/3)
              </button>
              
              <button
                onClick={() => window.location.reload()}
                className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Reload Page
              </button>
            </div>
            
            {process.env.NODE_ENV === 'development' && error && (
              <details className="mt-4">
                <summary className="text-sm text-gray-600 cursor-pointer">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">
                  {error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return children;
  }
}

// Utility functions
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  fallback?: React.ComponentType<{ error: Error }>
) => {
  const WrappedComponent = (props: P) => (
    <EnhancedErrorBoundary fallback={fallback}>
      <Component {...props} />
    </EnhancedErrorBoundary>
  );
  
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  return WrappedComponent;
};

export const enhancedErrorHandler = EnhancedErrorHandler.getInstance();