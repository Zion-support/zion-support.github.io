import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorId?: string;
  retryCount: number;
}

interface ErrorReport {
  id: string;
  message: string;
  stack?: string;
  componentStack: string;
  timestamp: string;
  userAgent: string;
  url: string;
  retryCount: number;
}

class ErrorBoundary extends Component<Props, State> {
  private maxRetries = 3;

  public state: State = {
    hasError: false,
    retryCount: 0,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { 
      hasError: true, 
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      retryCount: 0
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const errorId = this.state.errorId || `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Create comprehensive error report
    const errorReport: ErrorReport = {
      id: errorId,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack || '',
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      retryCount: this.state.retryCount
    };

    // Report error to analytics/monitoring service
    this.reportError(errorReport);
    
    // Store error for debugging
    this.storeError(errorReport);
    
    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  private reportError = (errorReport: ErrorReport) => {
    // Google Analytics
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'exception', {
        description: errorReport.message,
        fatal: false,
        custom_map: {
          error_id: errorReport.id,
          retry_count: errorReport.retryCount
        }
      });
    }

    // Sentry (if available)
    if (typeof window !== 'undefined' && (window as unknown as { Sentry?: { captureException: (error: unknown) => void } }).Sentry) {
      (window as unknown as { Sentry: { captureException: (error: unknown) => void } }).Sentry.captureException(errorReport);
    }

    // Custom error reporting endpoint
    this.sendErrorReport(errorReport);
  };

  private sendErrorReport = async (errorReport: ErrorReport) => {
    try {
      await fetch('/api/error-reporting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport),
      });
    } catch (reportingError) {
      console.warn('Failed to send error report:', reportingError);
    }
  };

  private storeError = (errorReport: ErrorReport) => {
    try {
      const existingErrors = JSON.parse(localStorage.getItem('errorHistory') || '[]');
      existingErrors.unshift(errorReport);
      
      // Keep only last 10 errors
      const recentErrors = existingErrors.slice(0, 10);
      localStorage.setItem('errorHistory', JSON.stringify(recentErrors));
      localStorage.setItem('lastError', JSON.stringify(errorReport));
    } catch (storageError) {
      console.warn('Failed to store error in localStorage:', storageError);
    }
  };

  private handleRetry = () => {
    if (this.state.retryCount < this.maxRetries) {
      this.setState(prevState => ({
        hasError: false,
        error: undefined,
        errorId: undefined,
        retryCount: prevState.retryCount + 1
      }));
    } else {
      // Max retries reached, reload page
      window.location.reload();
    }
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleReset = () => {
    this.setState({
      hasError: false,
      error: undefined,
      errorId: undefined,
      retryCount: 0
    });
  };

  public render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-4">
          <div className="text-center max-w-md">
            <div className="mb-6">
              <div className="text-6xl mb-4">⚠️</div>
              <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
              <p className="text-gray-400 mb-6">
                We&apos;re sorry, but something unexpected happened. 
                {this.state.retryCount < this.maxRetries 
                  ? ' We&apos;ll try to fix this automatically.' 
                  : ' Please try refreshing the page.'
                }
              </p>
            </div>

            {this.props.showDetails && this.state.error && (
              <div className="mb-6 p-4 bg-gray-800 rounded text-left text-sm">
                <h3 className="font-bold mb-2">Error Details:</h3>
                <p className="text-red-400 mb-2">{this.state.error.message}</p>
                <p className="text-gray-500 text-xs">Error ID: {this.state.errorId}</p>
                <p className="text-gray-500 text-xs">Retry: {this.state.retryCount}/{this.maxRetries}</p>
              </div>
            )}

            <div className="space-y-3">
              {this.state.retryCount < this.maxRetries ? (
                <button
                  onClick={this.handleRetry}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition-colors"
                >
                  Try Again ({this.maxRetries - this.state.retryCount} attempts left)
                </button>
              ) : (
                <button
                  onClick={this.handleReload}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition-colors"
                >
                  Refresh Page
                </button>
              )}
              
              <button
                onClick={this.handleReset}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded transition-colors"
              >
                Reset Application
              </button>
            </div>

            <div className="mt-6 text-xs text-gray-500">
              <p>If this problem persists, please contact support.</p>
              <p>Error ID: {this.state.errorId}</p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;