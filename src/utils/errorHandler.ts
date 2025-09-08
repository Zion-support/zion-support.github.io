import React from 'react';

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
}

export interface ErrorHandlerConfig {
  enableReporting: boolean;
  enableConsoleLogging: boolean;
  enableUserNotification: boolean;
  reportEndpoint?: string;
  maxRetries: number;
  retryDelay: number;
}

class ErrorHandler {
  private config: ErrorHandlerConfig;
  private errorQueue: ErrorInfo[] = [];
  private isReporting = false;

  constructor(config: Partial<ErrorHandlerConfig> = {}) {
    this.config = {
      enableReporting: true,
      enableConsoleLogging: true,
      enableUserNotification: true,
      maxRetries: 3,
      retryDelay: 1000,
      ...config,
    };

    this.setupGlobalErrorHandlers();
  }

  private setupGlobalErrorHandlers() {
    // Handle unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.handleError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
        stack: event.reason?.stack,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      });
    });

    // Handle general errors
    window.addEventListener('error', (event) => {
      this.handleError({
        message: event.message,
        stack: event.error?.stack,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      });
    });
  }

  public handleError(errorInfo: Partial<ErrorInfo>) {
    const fullErrorInfo: ErrorInfo = {
      message: 'Unknown error',
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      ...errorInfo,
    };

    // Log to console if enabled
    if (this.config.enableConsoleLogging) {
      console.error('Error captured:', fullErrorInfo);
    }

    // Add to queue for reporting
    this.errorQueue.push(fullErrorInfo);

    // Notify user if enabled
    if (this.config.enableUserNotification) {
      this.notifyUser(fullErrorInfo);
    }

    // Report errors
    if (this.config.enableReporting) {
      this.reportErrors();
    }
  }

  public handleReactError(error: Error, errorInfo: React.ErrorInfo) {
    this.handleError({
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorBoundary: errorInfo.errorBoundary,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    });
  }

  private notifyUser(errorInfo: ErrorInfo) {
    // Create a user-friendly notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-red-500 text-white p-4 rounded-lg shadow-lg z-50 max-w-md';
    notification.innerHTML = `
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-sm font-medium">Something went wrong</h3>
          <p class="mt-1 text-sm">We've been notified and are working to fix this issue.</p>
          <button onclick="this.parentElement.parentElement.parentElement.remove()" class="mt-2 text-xs underline">
            Dismiss
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(notification);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 5000);
  }

  private async reportErrors() {
    if (this.isReporting || this.errorQueue.length === 0) return;

    this.isReporting = true;

    try {
      const errorsToReport = [...this.errorQueue];
      this.errorQueue = [];

      if (this.config.reportEndpoint) {
        await this.sendErrorsToEndpoint(errorsToReport);
      } else {
        // Fallback to console logging
        console.group('Error Report');
        errorsToReport.forEach(error => console.error(error));
        console.groupEnd();
      }
    } catch (error) {
      console.error('Failed to report errors:', error);
      // Re-queue errors for retry
      this.errorQueue.unshift(...this.errorQueue);
    } finally {
      this.isReporting = false;
    }
  }

  private async sendErrorsToEndpoint(errors: ErrorInfo[], retryCount = 0) {
    try {
      const response = await fetch(this.config.reportEndpoint!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          errors,
          timestamp: Date.now(),
          url: window.location.href,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      if (retryCount < this.config.maxRetries) {
        setTimeout(() => {
          this.sendErrorsToEndpoint(errors, retryCount + 1);
        }, this.config.retryDelay * Math.pow(2, retryCount));
      } else {
        console.error('Failed to report errors after retries:', error);
      }
    }
  }

  public getErrorCount(): number {
    return this.errorQueue.length;
  }

  public clearErrors(): void {
    this.errorQueue = [];
  }
}

// React Error Boundary Component
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallback?: React.ComponentType<{ error: Error; retry: () => void }> }>,
  ErrorBoundaryState
> {
  private errorHandler: ErrorHandler;

  constructor(props: React.PropsWithChildren<{ fallback?: React.ComponentType<{ error: Error; retry: () => void }> }>) {
    super(props);
    this.state = { hasError: false };
    this.errorHandler = new ErrorHandler();
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ errorInfo });
    this.errorHandler.handleReactError(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return (
        <FallbackComponent
          error={this.state.error!}
          retry={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
        />
      );
    }

    return this.props.children;
  }
}

// Default error fallback component
const DefaultErrorFallback: React.FC<{ error: Error; retry: () => void }> = ({ error, retry }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center mb-4">
        <svg className="h-8 w-8 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
        <h1 className="text-xl font-semibold text-gray-900">Something went wrong</h1>
      </div>
      <p className="text-gray-600 mb-4">
        We're sorry, but something unexpected happened. Please try refreshing the page.
      </p>
      <div className="flex space-x-3">
        <button
          onClick={retry}
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
        <button
          onClick={() => window.location.reload()}
          className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
        >
          Refresh Page
        </button>
      </div>
      {process.env.NODE_ENV === 'development' && (
        <details className="mt-4">
          <summary className="cursor-pointer text-sm text-gray-500">Error Details</summary>
          <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto">
            {error.stack}
          </pre>
        </details>
      )}
    </div>
  </div>
);

// Hook for error handling
export const useErrorHandler = () => {
  const errorHandler = React.useRef(new ErrorHandler());

  const handleError = React.useCallback((error: Error | string, context?: string) => {
    const errorInfo: Partial<ErrorInfo> = {
      message: typeof error === 'string' ? error : error.message,
      stack: typeof error === 'string' ? undefined : error.stack,
    };

    if (context) {
      errorInfo.message = `${context}: ${errorInfo.message}`;
    }

    errorHandler.current.handleError(errorInfo);
  }, []);

  return { handleError };
};

// Utility functions
export const createError = (message: string, code?: string): Error => {
  const error = new Error(message);
  if (code) {
    (error as any).code = code;
  }
  return error;
};

export const isNetworkError = (error: any): boolean => {
  return error.name === 'NetworkError' || 
         error.message?.includes('fetch') || 
         error.message?.includes('network');
};

export const isTimeoutError = (error: any): boolean => {
  return error.name === 'TimeoutError' || 
         error.message?.includes('timeout');
};

export default ErrorHandler;