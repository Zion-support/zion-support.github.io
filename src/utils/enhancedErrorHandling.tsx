// Enhanced error handling utilities
import React from 'react';

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
  context: ErrorContext;
  severity: 'low' | 'medium' | 'high' | 'critical';
  category: 'javascript' | 'network' | 'resource' | 'security' | 'performance' | 'user';
  resolved: boolean;
  occurrences: number;
  firstSeen: number;
  lastSeen: number;
}

export class EnhancedErrorHandler {
  private static instance: EnhancedErrorHandler;
  private errors: Map<string, ErrorReport> = new Map();
  private maxErrors = 1000;
  private reportEndpoint = '/api/error-reporting';

  public static getInstance(): EnhancedErrorHandler {
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
      lastSeen: Date.now()
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
      lastSeen: Date.now()
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
        lastSeen: Date.now()
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
            lastSeen: Date.now()
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
          lastSeen: Date.now()
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

    originalXHR.prototype.open = function(method: string, url: string, ...args: any[]) {
      (this as any)._method = method;
      (this as any)._url = url;
      return originalOpen.apply(this, [method, url, ...args] as Parameters<typeof originalOpen>);
    };

    originalXHR.prototype.send = function(data?: unknown) {
      this.addEventListener('error', () => {
        const errorReport: ErrorReport = {
          id: EnhancedErrorHandler.getInstance().generateErrorId(this),
          message: `XHR error: ${(this as any)._method} ${(this as any)._url}`,
          context: EnhancedErrorHandler.getInstance().getErrorContext({
            url: (this as any)._url,
            method: (this as any)._method,
            status: this.status,
            statusText: this.statusText
          }),
          severity: 'medium',
          category: 'network',
          resolved: false,
          occurrences: 1,
          firstSeen: Date.now(),
          lastSeen: Date.now()
        };

        EnhancedErrorHandler.getInstance().processError(errorReport);
      });

      return originalSend.apply(this, [data] as Parameters<typeof originalSend>);
    };
  }

  private processError(errorReport: ErrorReport): void {
    const existingError = this.errors.get(errorReport.id);
    
    if (existingError) {
      existingError.occurrences++;
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
        .sort(([, a], [, b]) => a.firstSeen - b.firstSeen)
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
    const message = (error as any)?.message || error?.toString() || 'unknown';
    const stack = (error as any)?.stack || '';
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
    const message = (error as any)?.message || error?.toString() || '';
    
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
      context: { ...this.getErrorContext(), ...context },
      severity: this.determineSeverity(error),
      category: 'javascript',
      resolved: false,
      occurrences: 1,
      firstSeen: Date.now(),
      lastSeen: Date.now()
    };

    this.processError(errorReport);
  }

  public captureCustomError(message: string, category: ErrorReport['category'], context?: Partial<ErrorContext>): void {
    const errorReport: ErrorReport = {
      id: this.generateErrorId({ message }),
      message,
      context: { ...this.getErrorContext(), ...context },
      severity: 'medium',
      category,
      resolved: false,
      occurrences: 1,
      firstSeen: Date.now(),
      lastSeen: Date.now()
    };

    this.processError(errorReport);
  }

  public getErrorStats(): {
    total: number;
    byCategory: Record<string, number>;
    bySeverity: Record<string, number>;
    recent: ErrorReport[];
  } {
    const errors = Array.from(this.errors.values());
    const now = Date.now();
    const last24Hours = 24 * 60 * 60 * 1000;

    const byCategory: Record<string, number> = {};
    const bySeverity: Record<string, number> = {};
    const recent = errors.filter(e => now - e.lastSeen < last24Hours);

    errors.forEach(error => {
      byCategory[error.category] = (byCategory[error.category] || 0) + error.occurrences;
      bySeverity[error.severity] = (bySeverity[error.severity] || 0) + error.occurrences;
    });

    return {
      total: errors.length,
      byCategory,
      bySeverity,
      recent: recent.sort((a, b) => b.lastSeen - a.lastSeen).slice(0, 10)
    };
  }

  public getErrorsByCategory(category: ErrorReport['category']): ErrorReport[] {
    return Array.from(this.errors.values())
      .filter(error => error.category === category)
      .sort((a, b) => b.lastSeen - a.lastSeen);
  }

  public markErrorResolved(errorId: string): void {
    const error = this.errors.get(errorId);
    if (error) {
      error.resolved = true;
      this.errors.set(errorId, error);
    }
  }

  public clearErrors(): void {
    this.errors.clear();
  }

  public exportErrors(): ErrorReport[] {
    return Array.from(this.errors.values());
  }
}

// React Error Boundary integration
export class ReactErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ComponentType<{ error: Error }> },
  { hasError: boolean; error?: Error }
> {
  private errorHandler = EnhancedErrorHandler.getInstance();

  constructor(props: { children: React.ReactNode; fallback?: React.ComponentType<{ error: Error }> }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.errorHandler.captureError(error, {
      component: errorInfo.componentStack || undefined,
      action: 'componentDidCatch'
    });
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return React.createElement(FallbackComponent, { error: this.state.error! });
    }

    return this.props.children;
  }
}

const DefaultErrorFallback: React.FC<{ error: Error }> = ({ error }) => 
  React.createElement('div', { className: 'error-boundary' },
    React.createElement('h2', null, 'Something went wrong'),
    React.createElement('p', null, 'We\'re sorry, but something unexpected happened.'),
    process.env.NODE_ENV === 'development' && React.createElement('details', null,
      React.createElement('summary', null, 'Error Details'),
      React.createElement('pre', null, error.message),
      React.createElement('pre', null, error.stack)
    )
  );

// Utility functions
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  fallback?: React.ComponentType<{ error: Error }>
) => {
  const WrappedComponent = (props: P) => 
    React.createElement(ReactErrorBoundary, { fallback, children: null },
      React.createElement(Component, props)
    );
  
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  return WrappedComponent;
};

export const enhancedErrorHandler = EnhancedErrorHandler.getInstance();