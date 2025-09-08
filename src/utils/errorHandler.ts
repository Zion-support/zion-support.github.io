<<<<<<< HEAD
import React from 'react';

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  timestamp: number;
  userAgent: string;
  url: string;
=======
/**
 * Comprehensive Error Handling Utility
 * Provides centralized error handling, logging, and user feedback
 */

export interface ErrorInfo {
  message: string;
  code?: string;
  status?: number;
  timestamp: string;
  userId?: string;
  sessionId?: string;
  url?: string;
  userAgent?: string;
  stack?: string;
}

export interface ErrorContext {
  component?: string;
  action?: string;
  data?: Record<string, unknown>;
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
  userId?: string;
  sessionId?: string;
}

<<<<<<< HEAD
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
      // console.error('Error captured:', fullErrorInfo);
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
      // console.error('Failed to report errors:', error);
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
        // console.error('Failed to report errors after retries:', error);
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
  _hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallback?: React.ComponentType<{ error: Error; retry: () => void }> }>,
  ErrorBoundaryState
> {
  private _errorHandler: ErrorHandler;

  constructor(props: React.PropsWithChildren<{ fallback?: React.ComponentType<{ error: Error; retry: () => void }> }>) {
    super(props);
    this.state = { hasError: false };
    this.errorHandler = new ErrorHandler();
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
=======
class ErrorHandler {
  private static instance: ErrorHandler;
  private errorLog: ErrorInfo[] = [];
  private maxLogSize = 100;

  private constructor() {}

  public static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  /**
   * Handle and log errors with context
   */
  public handleError(
    error: Error | string,
    context?: ErrorContext,
    showToast = true
  ): void {
    const errorInfo = this.createErrorInfo(error, context);
    
    // Log error
    this.logError(errorInfo);
    
    // Show user-friendly message
    if (showToast) {
      this.showUserMessage(errorInfo);
    }
    
    // Send to monitoring service (if configured)
    this.sendToMonitoring(errorInfo);
  }

  /**
   * Handle API errors specifically
   */
  public handleApiError(
    error: any,
    context?: ErrorContext
  ): void {
    const errorInfo = this.createErrorInfo(error, {
      ...context,
      action: context?.action || 'API_REQUEST'
    });

    // Determine user message based on error type
    let userMessage = 'An error occurred while processing your request.';
    
    if (error?.response?.status === 401) {
      userMessage = 'Please log in to continue.';
    } else if (error?.response?.status === 403) {
      userMessage = 'You do not have permission to perform this action.';
    } else if (error?.response?.status === 404) {
      userMessage = 'The requested resource was not found.';
    } else if (error?.response?.status >= 500) {
      userMessage = 'Server error. Please try again later.';
    } else if (error?.code === 'NETWORK_ERROR') {
      userMessage = 'Network error. Please check your connection.';
    }

    this.handleError(error, context, true);
  }

  /**
   * Handle React component errors
   */
  public handleComponentError(
    error: Error,
    errorInfo: React.ErrorInfo,
    componentName?: string
  ): void {
    const context: ErrorContext = {
      component: componentName || 'Unknown',
      action: 'RENDER',
      data: {
        componentStack: errorInfo.componentStack,
        errorBoundary: true
      }
    };

    this.handleError(error, context, true);
  }

  /**
   * Create standardized error info
   */
  private createErrorInfo(
    error: Error | string,
    context?: ErrorContext
  ): ErrorInfo {
    const errorMessage = typeof error === 'string' ? error : error.message;
    const errorStack = typeof error === 'string' ? undefined : error.stack;

    return {
      message: errorMessage,
      code: this.extractErrorCode(error),
      status: this.extractStatusCode(error),
      timestamp: new Date().toISOString(),
      userId: context?.userId,
      sessionId: context?.sessionId,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      stack: errorStack
    };
  }

  /**
   * Extract error code from error object
   */
  private extractErrorCode(error: any): string | undefined {
    if (typeof error === 'string') return undefined;
    
    return error?.code || 
           error?.response?.data?.code || 
           error?.response?.status?.toString() ||
           'UNKNOWN_ERROR';
  }

  /**
   * Extract HTTP status code from error object
   */
  private extractStatusCode(error: any): number | undefined {
    if (typeof error === 'string') return undefined;
    
    return error?.response?.status || 
           error?.status || 
           undefined;
  }

  /**
   * Log error to console and internal log
   */
  private logError(errorInfo: ErrorInfo): void {
    // Console logging
    console.error('Error Handler:', errorInfo);

    // Internal log
    this.errorLog.unshift(errorInfo);
    
    // Maintain log size
    if (this.errorLog.length > this.maxLogSize) {
      this.errorLog = this.errorLog.slice(0, this.maxLogSize);
    }
  }

  /**
   * Show user-friendly error message
   */
  private showUserMessage(errorInfo: ErrorInfo): void {
    // This would integrate with your toast/notification system
    // For now, we'll use a simple alert
    if (typeof window !== 'undefined') {
      // You can replace this with your preferred notification system
      console.warn('User notification:', this.getUserFriendlyMessage(errorInfo));
    }
  }

  /**
   * Get user-friendly error message
   */
  private getUserFriendlyMessage(errorInfo: ErrorInfo): string {
    const { code, status } = errorInfo;

    switch (code) {
      case 'NETWORK_ERROR':
        return 'Network error. Please check your connection and try again.';
      case 'VALIDATION_ERROR':
        return 'Please check your input and try again.';
      case 'AUTHENTICATION_ERROR':
        return 'Please log in to continue.';
      case 'AUTHORIZATION_ERROR':
        return 'You do not have permission to perform this action.';
      default:
        if (status === 404) {
          return 'The requested resource was not found.';
        } else if (status && status >= 500) {
          return 'Server error. Please try again later.';
        }
        return 'An unexpected error occurred. Please try again.';
    }
  }

  /**
   * Send error to monitoring service
   */
  private sendToMonitoring(errorInfo: ErrorInfo): void {
    // This would integrate with services like Sentry, LogRocket, etc.
    // For now, we'll just log it
    console.log('Sending to monitoring service:', errorInfo);
  }

  /**
   * Get error log for debugging
   */
  public getErrorLog(): ErrorInfo[] {
    return [...this.errorLog];
  }

  /**
   * Clear error log
   */
  public clearErrorLog(): void {
    this.errorLog = [];
  }

  /**
   * Get error statistics
   */
  public getErrorStats(): {
    total: number;
    byCode: Record<string, number>;
    byStatus: Record<string, number>;
    recent: ErrorInfo[];
  } {
    const byCode: Record<string, number> = {};
    const byStatus: Record<string, number> = {};

    this.errorLog.forEach(error => {
      if (error.code) {
        byCode[error.code] = (byCode[error.code] || 0) + 1;
      }
      if (error.status) {
        byStatus[error.status.toString()] = (byStatus[error.status.toString()] || 0) + 1;
      }
    });

    return {
      total: this.errorLog.length,
      byCode,
      byStatus,
      recent: this.errorLog.slice(0, 10)
    };
  }
}

// Export singleton instance
export const errorHandler = ErrorHandler.getInstance();

// Export utility functions
export const handleError = (error: Error | string, context?: ErrorContext, showToast = true) => {
  errorHandler.handleError(error, context, showToast);
};

export const handleApiError = (error: any, context?: ErrorContext) => {
  errorHandler.handleApiError(error, context);
};

export const handleComponentError = (error: Error, errorInfo: React.ErrorInfo, componentName?: string) => {
  errorHandler.handleComponentError(error, errorInfo, componentName);
};

// React Error Boundary component
export class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ComponentType<{ error: Error }> },
  { hasError: boolean; error?: Error }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
<<<<<<< HEAD
    this.setState({ _errorInfo });
    this.errorHandler.handleReactError(error, errorInfo);
=======
    errorHandler.handleComponentError(error, errorInfo, this.constructor.name);
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
<<<<<<< HEAD
      return React.createElement(FallbackComponent, {
        error: this.state.error!,
        _retry: () => this.setState({ hasError: false, error: undefined, errorInfo: undefined })
      });
=======
      return <FallbackComponent error={this.state.error!} />;
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
    }

    return this.props.children;
  }
}

// Default error fallback component
<<<<<<< HEAD
const _DefaultErrorFallback: React.FC<{ error: Error; retry: () => void }> = ({ _error, _retry }) => 
  React.createElement('div', { className: 'min-h-screen flex items-center justify-center bg-gray-50' },
    React.createElement('div', { className: 'max-w-md w-full bg-white shadow-lg rounded-lg p-6' },
      React.createElement('div', { className: 'flex items-center mb-4' },
        React.createElement('svg', { 
          className: 'h-8 w-8 text-red-500 mr-3', 
          fill: 'none', 
          viewBox: '0 0 24 24', 
          stroke: 'currentColor' 
        },
          React.createElement('path', { 
            strokeLinecap: 'round', 
            strokeLinejoin: 'round', 
            strokeWidth: 2, 
            d: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z' 
          })
        ),
        React.createElement('h1', { className: 'text-xl font-semibold text-gray-900' }, 'Something went wrong')
      ),
      React.createElement('p', { className: 'text-gray-600 mb-4' },
        'We\'re sorry, but something unexpected happened. Please try refreshing the page.'
      ),
      React.createElement('div', { className: 'flex space-x-3' },
        React.createElement('button', {
          onClick: retry,
          className: 'flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors'
        }, 'Try Again'),
        React.createElement('button', {
          _onClick: () => window.location.reload(),
          className: 'flex-1 bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors'
        }, 'Refresh Page')
      ),
      process.env.NODE_ENV === 'development' && React.createElement('details', { className: 'mt-4' },
        React.createElement('summary', { className: 'cursor-pointer text-sm text-gray-500' }, 'Error Details'),
        React.createElement('pre', { className: 'mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto' }, error.stack)
      )
    )
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
      errorInfo.message = `${_context}: ${errorInfo.message}`;
    }

    errorHandler.current.handleError(errorInfo);
  }, []);

  return { _handleError };
};

// Utility functions
export const createError = (message: string, code?: string): Error => {
  const error = new Error(message);
  if (code) {
    (error as any).code = code;
  }
  return error;
};

export const isNetworkError = (error: unknown): boolean => {
  return error.name === 'NetworkError' || 
         error.message?.includes('fetch') || 
         error.message?.includes('network');
};

export const isTimeoutError = (error: unknown): boolean => {
  return error.name === 'TimeoutError' || 
         error.message?.includes('timeout');
};

export default ErrorHandler;
=======
const DefaultErrorFallback: React.FC<{ error: Error }> = ({ error }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0">
          <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-medium text-gray-900">Something went wrong</h3>
        </div>
      </div>
      <div className="text-sm text-gray-500 mb-4">
        We're sorry, but something unexpected happened. Please try refreshing the page.
      </div>
      <button
        onClick={() => window.location.reload()}
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Refresh Page
      </button>
    </div>
  </div>
);

export default errorHandler;
>>>>>>> 97898c1e8ff6077b3b3a3ca38c9422c9b60de8e3
