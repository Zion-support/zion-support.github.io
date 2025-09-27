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

// Error object interface for better type safety (currently unused but may be needed later)
// interface ErrorLike {
//   message?: string;
//   stack?: string;
//   toString(): string;
// }

export interface ErrorContext {
  userId?: string;
  sessionId?: string;
  url: string;
  userAgent: string;
  timestamp: number;
  component?: string;
  action?: string;
  additionalData?: Record<string, unknown>;
  securityViolation?: boolean;
  accessibilityViolation?: boolean;
  performanceIssue?: boolean;
  violationType?: string;
  severity?: string;
  metric?: string;
  element?: string;
  value?: number;
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
  category?: string;
  occurrences?: number;
  firstSeen?: number;
  lastSeen?: number;
  resolved?: boolean;
}

export interface ErrorInfo {
  componentStack?: string;
  errorBoundary?: string;
  errorBoundaryStack?: string;
  message?: string;
}

export interface ErrorRecoveryOptions {
  retryable: boolean;
  maxRetries: number;
  retryDelay: number;
  fallbackComponent?: React.ComponentType<{ error: Error; retry: () => void }>;
}

export class EnhancedErrorHandler {
  private static instance: EnhancedErrorHandler;
  private errorQueue: ErrorInfo[] = [];
  private errors: Map<string, ErrorReport> = new Map();
  private maxQueueSize = 50;
  private maxErrors = 100;
  private reportEndpoint = '/api/error-reporting';
  private isReporting = false;

  static getInstance(): EnhancedErrorHandler {
    if (!EnhancedErrorHandler.instance) {
      EnhancedErrorHandler.instance = new EnhancedErrorHandler();
    }
    return EnhancedErrorHandler.instance;
  }

  private constructor() {
    this.initializeErrorHandling();
  }

  private initializeErrorHandling(): void {
    // Global error handlers
    window.addEventListener('error', (event) => this.handleGlobalError(event));
    window.addEventListener('unhandledrejection', (event) => this.handleUnhandledRejection(event));
    window.addEventListener('error', (event) => this.handleResourceError(event), true);
    
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
      url: window.location.href
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
      url: window.location.href
    };

    this.processError(errorReport);
  }

  private handleResourceError(event: ErrorEvent): void {
    if (event.target !== window) {
      const errorReport: ErrorReport = {
        id: this.generateErrorId(event),
        message: `Failed to load resource: ${(event.target as HTMLElement & { src?: string; href?: string })?.src || (event.target as HTMLElement & { src?: string; href?: string })?.href}`,
        context: this.getErrorContext(),
        severity: 'medium',
        category: 'resource',
        resolved: false,
        occurrences: 1,
        firstSeen: Date.now(),
        lastSeen: Date.now(),
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href
      };

      this.processError(errorReport);
    }
  }

  private interceptFetch(): void {
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const url = typeof args[0] === 'string' ? args[0] : (args[0] as Request).url;
      
      try {
        const response = await originalFetch(...args);
        if (!response.ok) {
          const errorReport: ErrorReport = {
            id: this.generateErrorId(response),
            message: `Network request failed: ${url}`,
            context: this.getErrorContext(),
            severity: response.status >= 500 ? 'high' : 'medium',
            category: 'network',
            resolved: false,
            occurrences: 1,
            firstSeen: Date.now(),
            lastSeen: Date.now(),
            timestamp: Date.now(),
            userAgent: navigator.userAgent,
            url: window.location.href
          };
          this.processError(errorReport);
        }
        return response;
      } catch (error) {
        const errorReport: ErrorReport = {
          id: this.generateErrorId(error),
          message: `Fetch request failed: ${url}`,
          context: this.getErrorContext(),
          severity: 'high',
          category: 'network',
          resolved: false,
          occurrences: 1,
          firstSeen: Date.now(),
          lastSeen: Date.now(),
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          url: window.location.href
        };
        this.processError(errorReport);
        throw error;
      }
    };
  }

  private interceptXMLHttpRequest(): void {
    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;

    XMLHttpRequest.prototype.open = function(method: string, url: string | URL, ...args: unknown[]) {
      (this as ExtendedXMLHttpRequest)._method = method;
      (this as ExtendedXMLHttpRequest)._url = url.toString();
      return originalOpen.call(this, method, url, ...(args as [boolean, string]));
    };

    XMLHttpRequest.prototype.send = function(data?: unknown) {
      this.addEventListener('error', () => {
        const errorReport: ErrorReport = {
          id: EnhancedErrorHandler.getInstance().generateErrorId(this),
          message: `XHR error: ${(this as ExtendedXMLHttpRequest)._method} ${(this as ExtendedXMLHttpRequest)._url}`,
          context: EnhancedErrorHandler.getInstance().getErrorContext({
            method: (this as ExtendedXMLHttpRequest)._method,
            url: (this as ExtendedXMLHttpRequest)._url
          }),
          severity: 'medium',
          category: 'network',
          resolved: false,
          occurrences: 1,
          firstSeen: Date.now(),
          lastSeen: Date.now(),
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          url: window.location.href
        };
        EnhancedErrorHandler.getInstance().processError(errorReport);
      });

      return originalSend.call(this, data as Document | XMLHttpRequestBodyInit | null | undefined);
    };
  }

  private processError(errorReport: ErrorReport): void {
    const existingError = this.errors.get(errorReport.id);
    
    if (existingError) {
      existingError.occurrences = (existingError.occurrences || 0) + 1;
      existingError.lastSeen = Date.now();
      this.errors.set(errorReport.id, existingError);
    } else {
      this.errors.set(errorReport.id, errorReport);
    }

    if (process.env.NODE_ENV === 'development') {
      console.error('Enhanced Error Handler:', errorReport);
    }

    this.reportToServer(errorReport);
  }

  private async reportToServer(errorReport: ErrorReport): Promise<void> {
    try {
      await fetch(this.reportEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(errorReport)
      });
    } catch (error) {
      console.error('Failed to report error to server:', error);
    }
  }

  private generateErrorId(error: Error | Event | unknown): string {
    const message = error instanceof Error ? error.message : String(error);
    return btoa(message).slice(0, 16);
  }

  private getErrorContext(additionalData?: Record<string, unknown>): ErrorContext {
    return {
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: Date.now(),
      sessionId: this.getSessionId(),
      ...additionalData
    };
  }

  private determineSeverity(error: Error | Event | unknown): 'low' | 'medium' | 'high' | 'critical' {
    if (error instanceof Error) {
      if (error.message.includes('ChunkLoadError') || error.message.includes('Loading chunk')) {
        return 'medium';
      }
      if (error.message.includes('Network') || error.message.includes('fetch')) {
        return 'high';
      }
    }
    return 'low';
  }

  public captureError(error: Error, context?: Partial<ErrorContext>): void {
    const errorReport: ErrorReport = {
      id: this.generateErrorId(error),
      message: error.message || 'Unknown error',
      stack: error.stack,
      context: this.getErrorContext(context),
      severity: this.determineSeverity(error),
      category: 'javascript',
      resolved: false,
      occurrences: 1,
      firstSeen: Date.now(),
      lastSeen: Date.now(),
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    this.errors.set(errorReport.id, errorReport);
  }

  private addToQueue(errorInfo: ErrorInfo): void {
    this.errorQueue.push(errorInfo);
    
    if (this.errorQueue.length > this.maxQueueSize) {
      this.errorQueue.shift();
    }

    if (!this.isReporting) {
      this.reportBatch();
    }
  }

  private async reportError(errorInfo: ErrorInfo): Promise<void> {
    try {
      await fetch('/api/error-reporting', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...errorInfo,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      });
    } catch (reportingError) {
      console.error('Failed to report error:', reportingError);
    }
  }

  private async reportBatch(): Promise<void> {
    if (this.isReporting || this.errorQueue.length === 0) return;
    
    this.isReporting = true;
    
    try {
      const batch = this.errorQueue.splice(0, 10);
      await Promise.all(batch.map(error => this.reportError(error)));
    } catch (error) {
      console.error('Batch error reporting failed:', error);
    } finally {
      this.isReporting = false;
      
      if (this.errorQueue.length > 0) {
        setTimeout(() => this.reportBatch(), 5000);
      }
    }
  }

  private getSessionId(): string {
    let sessionId = sessionStorage.getItem('error-session-id');
    if (!sessionId) {
      sessionId = Date.now().toString(36) + Math.random().toString(36).substr(2);
      sessionStorage.setItem('error-session-id', sessionId);
    }
    return sessionId;
  }

  getErrorStats(): {
    totalErrors: number;
    errorTypes: Record<string, number>;
    recentErrors: ErrorInfo[];
  } {
    const recentErrors = this.errorQueue.slice(-10);
    const errorTypes: Record<string, number> = {};
    
    this.errorQueue.forEach(error => {
      const type = error.message?.split(':')[0] || 'Unknown';
      errorTypes[type] = (errorTypes[type] || 0) + 1;
    });

    return {
      totalErrors: this.errorQueue.length,
      errorTypes,
      recentErrors
    };
  }

  clearErrors(): void {
    this.errorQueue = [];
    this.errors.clear();
  }

  initialize(): void {
    // Initialize error handling
    this.initializeErrorHandling();
  }

  getErrors(): Map<string, ErrorReport> {
    return this.errors;
  }

  cleanup(): void {
    this.clearErrors();
    this.isReporting = false;
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
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  fallback?: React.ComponentType<{ error: Error; retry: () => void }>;
  maxRetries?: number;
}

export class EnhancedErrorBoundary extends React.Component<
  EnhancedErrorBoundaryProps,
  EnhancedErrorBoundaryState
> {
  private errorHandler: EnhancedErrorHandler;

  constructor(props: EnhancedErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, retryCount: 0 };
    this.errorHandler = EnhancedErrorHandler.getInstance();
  }

  static getDerivedStateFromError(error: Error): { hasError: boolean; error: Error } {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    const { onError } = this.props;
    
    this.setState({ errorInfo });
    
    // Capture error with enhanced handler
    this.errorHandler.captureError(error, {
      url: window.location.href,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      component: errorInfo.componentStack || undefined
    });

    // Call custom error handler
    onError?.(error, errorInfo);
  }

  private handleRetry = (): void => {
    this.setState(prevState => ({
      hasError: false,
      error: undefined,
      errorInfo: undefined,
      retryCount: prevState.retryCount + 1
    }));
  };

  render(): React.ReactNode {
    if (this.state.hasError) {
      const { fallback: FallbackComponent } = this.props;
      const { error, retryCount } = this.state;

      if (FallbackComponent && error) {
        return <FallbackComponent error={error} retry={this.handleRetry} />;
      }

      return (
        <div className="error-boundary" style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Something went wrong</h2>
          <p>We&apos;re sorry, but something unexpected happened.</p>
          {process.env.NODE_ENV === 'development' && error && (
            <details style={{ marginTop: '1rem', textAlign: 'left' }}>
              <summary>Error Details</summary>
              <pre style={{ 
                background: '#f5f5f5', 
                padding: '1rem', 
                borderRadius: '4px',
                overflow: 'auto'
              }}>
                {error.message}
                {error.stack}
              </pre>
            </details>
          )}
          {retryCount < 3 && (
            <button 
              onClick={this.handleRetry}
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Try Again ({retryCount}/3)
            </button>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Higher-order component for error boundary
 */
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: React.ComponentType<{ error: Error; retry: () => void }>
) {
  const WrappedComponent = (props: P) => (
    <EnhancedErrorBoundary fallback={fallback}>
      <Component {...props} />
    </EnhancedErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;

  return WrappedComponent;
}

// Simple error boundary for basic use cases
export class SimpleErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ComponentType<{ error: Error }> },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ComponentType<{ error: Error }> }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): { hasError: boolean; error: Error } {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error('Simple Error Boundary caught an error:', error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      const { fallback: FallbackComponent } = this.props;
      
      if (FallbackComponent && this.state.error) {
        return <FallbackComponent error={this.state.error} />;
      }

      return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Something went wrong</h2>
          <p>Please refresh the page and try again.</p>
        </div>
      );
    }

    return this.props.children;
  }
}