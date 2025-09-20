import React from 'react';

/**
 * Enhanced Error Handler Utilities
 * Comprehensive error handling and reporting system
 */

export interface ErrorInfo {
  error: Error;
  errorInfo: React.ErrorInfo;
  componentStack?: string;
  timestamp: string;
  userAgent: string;
  url: string;
  userId?: string;
  sessionId?: string;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

// Error severity levels
export enum ErrorSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}

// Error categories
export enum ErrorCategory {
  NETWORK = 'network',
  VALIDATION = 'validation',
  AUTHENTICATION = 'authentication',
  PERMISSION = 'permission',
  SYSTEM = 'system',
  USER_INPUT = 'user_input',
  EXTERNAL_API = 'external_api',
  UNKNOWN = 'unknown'
}

export class AppError extends Error {
  public severity: ErrorSeverity;
  public category: ErrorCategory;
  public code: string;
  public timestamp: string;
  public context?: Record<string, any>;

  constructor(
    message: string,
    severity: ErrorSeverity = ErrorSeverity.MEDIUM,
    category: ErrorCategory = ErrorCategory.UNKNOWN,
    code: string = 'APP_ERROR',
    context?: Record<string, any>
  ) {
    super(message);
    this.name = 'AppError';
    this.severity = severity;
    this.category = category;
    this.code = code;
    this.timestamp = new Date().toISOString();
    this.context = context;

    // Maintain proper stack trace
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }
  }
}

// Error reporting service
export class ErrorReporter {
  private static instance: ErrorReporter;
  private errors: ErrorInfo[] = [];
  private maxErrors = 100;

  private constructor() {}

  public static getInstance(): ErrorReporter {
    if (!ErrorReporter.instance) {
      ErrorReporter.instance = new ErrorReporter();
    }
    return ErrorReporter.instance;
  }

  public reportError(errorInfo: ErrorInfo): void {
    // Add to local storage
    this.errors.push(errorInfo);
    
    // Keep only the latest errors
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(-this.maxErrors);
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error reported:', errorInfo);
    }

    // Send to external service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToExternalService(errorInfo);
    }

    // Store in localStorage for debugging
    this.storeInLocalStorage();
  }

  private sendToExternalService(errorInfo: ErrorInfo): void {
    // Implementation for sending errors to external service
    // This could be Sentry, LogRocket, or any other error tracking service
    try {
      // Example: Send to external API
      fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...errorInfo,
          environment: process.env.NODE_ENV,
          version: process.env.REACT_APP_VERSION || '1.0.0'
        })
      }).catch(err => {
        console.error('Failed to send error to external service:', err);
      });
    } catch (err) {
      console.error('Error sending to external service:', err);
    }
  }

  private storeInLocalStorage(): void {
    try {
      localStorage.setItem('app_errors', JSON.stringify(this.errors.slice(-10)));
    } catch (err) {
      console.error('Failed to store errors in localStorage:', err);
    }
  }

  public getErrors(): ErrorInfo[] {
    return [...this.errors];
  }

  public clearErrors(): void {
    this.errors = [];
    localStorage.removeItem('app_errors');
  }
}

// Enhanced Error Boundary Component
export class EnhancedErrorBoundary extends React.Component<
  React.PropsWithChildren<{
    fallback?: React.ComponentType<{ error: Error; retry: () => void }>;
    onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  }>,
  ErrorBoundaryState
> {
  private errorReporter = ErrorReporter.getInstance();

  constructor(props: React.PropsWithChildren<{
    fallback?: React.ComponentType<{ error: Error; retry: () => void }>;
    onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  }>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    const errorDetails: ErrorInfo = {
      error,
      errorInfo,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.getUserId(),
      sessionId: this.getSessionId()
    };

    this.errorReporter.reportError(errorDetails);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    this.setState({ errorInfo });
  }

  private getUserId(): string | undefined {
    // Get user ID from context, localStorage, or cookies
    try {
      return localStorage.getItem('userId') || undefined;
    } catch {
      return undefined;
    }
  }

  private getSessionId(): string | undefined {
    // Generate or retrieve session ID
    try {
      let sessionId = sessionStorage.getItem('sessionId');
      if (!sessionId) {
        sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        sessionStorage.setItem('sessionId', sessionId);
      }
      return sessionId;
    } catch {
      return undefined;
    }
  }

  private retry = (): void => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render(): React.ReactNode {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error!} retry={this.retry} />;
    }

    return this.props.children;
  }
}

// Default error fallback component
const DefaultErrorFallback: React.FC<{ error: Error; retry: () => void }> = ({ error, retry }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
    <div className="max-w-md mx-auto text-center p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
      <div className="w-16 h-16 mx-auto mb-6 bg-red-500/20 rounded-full flex items-center justify-center">
        <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1>
      <p className="text-gray-300 mb-6">
        We're sorry, but something unexpected happened. Our team has been notified and is working on a fix.
      </p>
      {process.env.NODE_ENV === 'development' && (
        <details className="text-left mb-6">
          <summary className="cursor-pointer text-blue-400 mb-2">Error Details</summary>
          <pre className="text-xs text-red-300 bg-black/20 p-3 rounded overflow-auto">
            {error.message}
            {error.stack}
          </pre>
        </details>
      )}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={retry}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
        >
          Try Again
        </button>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
        >
          Reload Page
        </button>
      </div>
    </div>
  </div>
);

// Error handler hook
export const useErrorHandler = () => {
  const errorReporter = ErrorReporter.getInstance();

  const handleError = React.useCallback((error: Error, context?: Record<string, any>) => {
    const errorInfo: ErrorInfo = {
      error,
      errorInfo: { componentStack: '' },
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      ...context
    };

    errorReporter.reportError(errorInfo);
  }, [errorReporter]);

  return { handleError, reportError: errorReporter.reportError.bind(errorReporter) };
};

// Async error handler
export const withErrorHandler = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: {
    fallback?: React.ComponentType<{ error: Error; retry: () => void }>;
    onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  }
) => {
  return React.forwardRef<any, P>((props, ref) => (
    <EnhancedErrorBoundary {...errorBoundaryProps}>
      <Component {...props} ref={ref} />
    </EnhancedErrorBoundary>
  ));
};

export default {
  AppError,
  ErrorReporter,
  EnhancedErrorBoundary,
  useErrorHandler,
  withErrorHandler,
  ErrorSeverity,
  ErrorCategory
};