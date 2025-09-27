/**
 * Enhanced Error Handling Utilities
 * Advanced error handling and recovery mechanisms for the Zion Tech Group website
 */

import React from 'react';

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  timestamp: number;
  userAgent: string;
  url: string;
  userId?: string;
  sessionId?: string;
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
  private maxQueueSize = 50;
  private isReporting = false;

  static getInstance(): EnhancedErrorHandler {
    if (!EnhancedErrorHandler.instance) {
      EnhancedErrorHandler.instance = new EnhancedErrorHandler();
    }
    return EnhancedErrorHandler.instance;
  }

  /**
   * Capture and process an error
   */
  captureError(
    error: Error,
    errorInfo?: React.ErrorInfo,
    options: Partial<ErrorRecoveryOptions> = {}
  ): void {
    const errorData: ErrorInfo = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo?.componentStack,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      sessionId: this.getSessionId(),
    };

    this.addToQueue(errorData);
    this.logError(error, errorInfo);
    this.reportError(errorData);

    // Attempt recovery if configured
    if (options.retryable) {
      this.attemptRecovery(error, options);
    }
  }

  /**
   * Add error to queue for batch reporting
   */
  private addToQueue(errorInfo: ErrorInfo): void {
    this.errorQueue.push(errorInfo);
    
    // Maintain queue size
    if (this.errorQueue.length > this.maxQueueSize) {
      this.errorQueue.shift();
    }

    // Report errors in batches
    if (this.errorQueue.length >= 10 && !this.isReporting) {
      this.reportBatch();
    }
  }

  /**
   * Log error to console with enhanced formatting
   */
  private logError(error: Error, errorInfo?: React.ErrorInfo): void {
    console.group('🚨 Enhanced Error Handler');
    console.error('Error:', error.message);
    console.error('Stack:', error.stack);
    
    if (errorInfo) {
      console.error('Component Stack:', errorInfo.componentStack);
    }
    
    console.error('Timestamp:', new Date().toISOString());
    console.error('URL:', window.location.href);
    console.groupEnd();
  }

  /**
   * Report error to external service
   */
  private async reportError(errorInfo: ErrorInfo): Promise<void> {
    try {
      // In a real application, you would send this to your error reporting service
      // For now, we'll just log it
      console.log('Reporting error:', errorInfo);
      
      // Example: Send to external service
      // await fetch('/api/errors', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(errorInfo)
      // });
    } catch (reportingError) {
      console.error('Failed to report error:', reportingError);
    }
  }

  /**
   * Report batch of errors
   */
  private async reportBatch(): Promise<void> {
    if (this.isReporting || this.errorQueue.length === 0) return;
    
    this.isReporting = true;
    const batch = [...this.errorQueue];
    this.errorQueue = [];

    try {
      console.log('Reporting error batch:', batch);
      // In a real application, send batch to your error reporting service
      // await fetch('/api/errors/batch', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(batch)
      // });
    } catch (error) {
      console.error('Failed to report error batch:', error);
      // Re-add errors to queue if reporting failed
      this.errorQueue.unshift(...batch);
    } finally {
      this.isReporting = false;
    }
  }

  /**
   * Attempt error recovery
   */
  private attemptRecovery(
    error: Error,
    options: Partial<ErrorRecoveryOptions>
  ): void {
    const maxRetries = options.maxRetries || 3;
    const retryDelay = options.retryDelay || 1000;
    
    console.log(`Attempting error recovery (${maxRetries} retries, ${retryDelay}ms delay)`);
    
    // Implement retry logic based on error type
    if (error.name === 'NetworkError' || error.message.includes('fetch')) {
      this.retryNetworkOperation(error, maxRetries, retryDelay);
    } else if (error.name === 'ChunkLoadError') {
      this.retryChunkLoad(error, maxRetries, retryDelay);
    }
  }

  /**
   * Retry network operations
   */
  private retryNetworkOperation(
    error: Error,
    maxRetries: number,
    retryDelay: number
  ): void {
    let retryCount = 0;
    
    const retry = () => {
      if (retryCount >= maxRetries) {
        console.error('Max retries exceeded for network operation');
        return;
      }
      
      retryCount++;
      console.log(`Retrying network operation (attempt ${retryCount}/${maxRetries})`);
      
      setTimeout(() => {
        // Reload the page for network errors
        window.location.reload();
      }, retryDelay * retryCount);
    };
    
    retry();
  }

  /**
   * Retry chunk loading
   */
  private retryChunkLoad(
    error: Error,
    maxRetries: number,
    retryDelay: number
  ): void {
    let retryCount = 0;
    
    const retry = () => {
      if (retryCount >= maxRetries) {
        console.error('Max retries exceeded for chunk load');
        // Fallback: reload the page
        window.location.reload();
        return;
      }
      
      retryCount++;
      console.log(`Retrying chunk load (attempt ${retryCount}/${maxRetries})`);
      
      setTimeout(() => {
        // Try to reload the specific chunk
        const chunkMatch = error.message.match(/Loading chunk (\d+) failed/);
        if (chunkMatch) {
          const chunkId = chunkMatch[1];
          // Clear the chunk from cache and reload
          if ('caches' in window) {
            caches.keys().then(cacheNames => {
              cacheNames.forEach(cacheName => {
                caches.open(cacheName).then(cache => {
                  cache.keys().then(requests => {
                    requests.forEach(request => {
                      if (request.url.includes(`chunk-${chunkId}`)) {
                        cache.delete(request);
                      }
                    });
                  });
                });
              });
            });
          }
        }
        
        window.location.reload();
      }, retryDelay * retryCount);
    };
    
    retry();
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
    recentErrors: ErrorInfo[];
    errorTypes: Record<string, number>;
  } {
    const recentErrors = this.errorQueue.slice(-10);
    const errorTypes: Record<string, number> = {};
    
    this.errorQueue.forEach(error => {
      const type = error.message.split(':')[0] || 'Unknown';
      errorTypes[type] = (errorTypes[type] || 0) + 1;
    });

    return {
      totalErrors: this.errorQueue.length,
      recentErrors,
      errorTypes,
    };
  }

  /**
   * Clear error queue
   */
  clearErrors(): void {
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
    const { onError, maxRetries = 3 } = this.props;
    
    this.setState({ errorInfo });
    
    // Capture error with enhanced handler
    this.errorHandler.captureError(error, errorInfo, {
      retryable: this.state.retryCount < maxRetries,
      maxRetries,
      retryDelay: 1000,
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

// Default error fallback component
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
    React.createElement(EnhancedErrorBoundary, { fallback, children: React.createElement(Component, props) });
  
  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  return WrappedComponent;
};

// Export singleton instance
export const enhancedErrorHandler = EnhancedErrorHandler.getInstance();