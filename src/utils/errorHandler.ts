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
  userId?: string;
  sessionId?: string;
}

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
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    errorHandler.handleComponentError(error, errorInfo, this.constructor.name);
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return <FallbackComponent error={this.state.error!} />;
    }

    return this.props.children;
  }
}

// Default error fallback component
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