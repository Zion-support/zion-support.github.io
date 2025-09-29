import React, { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo, errorId: string) => void;
  level?: "page" | "component" | "critical";
}

/**
 * Enhanced Error Boundary with advanced error handling, reporting, and recovery
 */
export class EnhancedErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  private retryCount = 0;
  private maxRetries = 3;
  private errorTimeout: NodeJS.Timeout | null = null;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: "",
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    return {
      hasError: true,
      error,
      errorId,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { level = "component", onError } = this.props;
    const { errorId } = this.state;

    // Update state with error info
    this.setState({ errorInfo });

    // Report error to external service
    this.reportError(error, errorInfo, errorId, level);

    // Call custom error handler
    if (onError) {
      onError(error, errorInfo, errorId);
    }

    // Log error details for debugging
    console.group(`🚨 Error Boundary [${level}]`);
    console.error("Error:", error);
    console.error("Error Info:", errorInfo);
    console.error("Error ID:", errorId);
    console.error("Component Stack:", errorInfo.componentStack);
    console.groupEnd();

    // Set up automatic retry for non-critical errors
    if (level !== "critical" && this.retryCount < this.maxRetries) {
      this.setupRetry();
    }
  }

  private reportError = async (
    error: Error,
    errorInfo: ErrorInfo,
    errorId: string,
    level: string,
  ) => {
    try {
      const errorReport = {
        id: errorId,
        level,
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        userId: this.getUserId(),
        sessionId: this.getSessionId(),
        retryCount: this.retryCount,
        memoryUsage: this.getMemoryUsage(),
        performanceMetrics: this.getPerformanceMetrics(),
      };

      // Send to error reporting service
      await fetch("/api/error-reporting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(errorReport),
      });

      // Store locally for offline analysis
      this.storeErrorLocally(errorReport);
    } catch (reportingError) {
      console.error("Failed to report error:", reportingError);
    }
  };

  private storeErrorLocally = (errorReport: Record<string, unknown>) => {
    try {
      const errors = JSON.parse(localStorage.getItem("errorReports") || "[]");
      errors.push(errorReport);

      // Keep only last 50 errors
      if (errors.length > 50) {
        errors.splice(0, errors.length - 50);
      }

      localStorage.setItem("errorReports", JSON.stringify(errors));
    } catch (error) {
      console.error("Failed to store error locally:", error);
    }
  };

  private setupRetry = () => {
    this.errorTimeout = setTimeout(
      () => {
        this.setState({
          hasError: false,
          error: null,
          errorInfo: null,
          errorId: "",
        });
        this.retryCount++;
      },
      2000 * (this.retryCount + 1),
    ); // Exponential backoff
  };

  private handleRetry = () => {
    if (this.errorTimeout) {
      clearTimeout(this.errorTimeout);
      this.errorTimeout = null;
    }

    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: "",
    });
  };

  private handleReload = () => {
    window.location.reload();
  };

  private getUserId = (): string => {
    return localStorage.getItem("userId") || "anonymous";
  };

  private getSessionId = (): string => {
    return sessionStorage.getItem("sessionId") || "unknown";
  };

  private getMemoryUsage = (): {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  } | null => {
    if ("memory" in performance) {
      const memory = (
        performance as Performance & {
          memory: {
            usedJSHeapSize: number;
            totalJSHeapSize: number;
            jsHeapSizeLimit: number;
          };
        }
      ).memory;
      return {
        usedJSHeapSize: memory.usedJSHeapSize,
        totalJSHeapSize: memory.totalJSHeapSize,
        jsHeapSizeLimit: memory.jsHeapSizeLimit,
      };
    }
    return null;
  };

  private getPerformanceMetrics = (): Record<string, number> => {
    const navigation = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming;
    return {
      loadTime: navigation?.loadEventEnd - navigation?.loadEventStart,
      domContentLoaded:
        navigation?.domContentLoadedEventEnd -
        navigation?.domContentLoadedEventStart,
      firstPaint: performance.getEntriesByName("first-paint")[0]?.startTime,
      firstContentfulPaint: performance.getEntriesByName(
        "first-contentful-paint",
      )[0]?.startTime,
    };
  };

  componentWillUnmount() {
    if (this.errorTimeout) {
      clearTimeout(this.errorTimeout);
    }
  }

  render() {
    const { hasError, error, errorId } = this.state;
    const { children, fallback, level = "component" } = this.props;

    if (hasError) {
      if (fallback) {
        return fallback;
      }

      return (
        <div className="error-boundary" role="alert" aria-live="assertive">
          <div className="error-boundary-content">
            <div className="error-icon">⚠️</div>
            <h2 className="error-title">
              {level === "critical" ? "Critical Error" : "Something went wrong"}
            </h2>
            <p className="error-message">
              {level === "critical"
                ? "A critical error has occurred. Please reload the page."
                : "An unexpected error occurred. We're working to fix it."}
            </p>
            <div className="error-details">
              <p>
                <strong>Error ID:</strong> {errorId}
              </p>
              {error && (
                <details className="error-stack">
                  <summary>Technical Details</summary>
                  <pre>{error.message}</pre>
                </details>
              )}
            </div>
            <div className="error-actions">
              {level !== "critical" && (
                <button
                  onClick={this.handleRetry}
                  className="retry-button"
                  aria-label="Retry loading this component"
                >
                  Try Again
                </button>
              )}
              <button
                onClick={this.handleReload}
                className="reload-button"
                aria-label="Reload the entire page"
              >
                Reload Page
              </button>
            </div>
            {this.retryCount > 0 && (
              <p className="retry-info">
                Retry attempt {this.retryCount} of {this.maxRetries}
              </p>
            )}
          </div>

          <style>{`
            .error-boundary {
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 200px;
              padding: 2rem;
              background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
              border-radius: 12px;
              border: 2px dashed #dc3545;
              margin: 1rem;
            }
            
            .error-boundary-content {
              text-align: center;
              max-width: 500px;
            }
            
            .error-icon {
              font-size: 3rem;
              margin-bottom: 1rem;
            }
            
            .error-title {
              color: #dc3545;
              margin-bottom: 0.5rem;
              font-size: 1.5rem;
              font-weight: 600;
            }
            
            .error-message {
              color: #6c757d;
              margin-bottom: 1rem;
              line-height: 1.5;
            }
            
            .error-details {
              background: #f8f9fa;
              padding: 1rem;
              border-radius: 8px;
              margin-bottom: 1rem;
              text-align: left;
            }
            
            .error-stack pre {
              background: #fff;
              padding: 0.5rem;
              border-radius: 4px;
              font-size: 0.875rem;
              overflow-x: auto;
              margin-top: 0.5rem;
            }
            
            .error-actions {
              display: flex;
              gap: 1rem;
              justify-content: center;
              flex-wrap: wrap;
            }
            
            .retry-button, .reload-button {
              padding: 0.75rem 1.5rem;
              border: none;
              border-radius: 6px;
              font-weight: 500;
              cursor: pointer;
              transition: all 0.2s ease;
            }
            
            .retry-button {
              background: #007bff;
              color: white;
            }
            
            .retry-button:hover {
              background: #0056b3;
              transform: translateY(-1px);
            }
            
            .reload-button {
              background: #6c757d;
              color: white;
            }
            
            .reload-button:hover {
              background: #545b62;
              transform: translateY(-1px);
            }
            
            .retry-info {
              margin-top: 1rem;
              color: #6c757d;
              font-size: 0.875rem;
            }
            
            @media (max-width: 640px) {
              .error-boundary {
                margin: 0.5rem;
                padding: 1rem;
              }
              
              .error-actions {
                flex-direction: column;
                align-items: center;
              }
              
              .retry-button, .reload-button {
                width: 100%;
                max-width: 200px;
              }
            }
          `}</style>
        </div>
      );
    }

    return children;
  }
}

/**
 * Hook for error handling in functional components
 */
export const useErrorHandler = () => {
  const handleError = React.useCallback((error: Error, context?: string) => {
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    console.group(`🚨 Error Handler [${context || "Unknown"}]`);
    console.error("Error:", error);
    console.error("Error ID:", errorId);
    console.error("Context:", context);
    console.groupEnd();

    // Report error
    fetch("/api/error-reporting", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: errorId,
        message: error.message,
        stack: error.stack,
        context,
        timestamp: new Date().toISOString(),
        url: window.location.href,
      }),
    }).catch((reportingError) => {
      console.error("Failed to report error:", reportingError);
    });

    return errorId;
  }, []);

  return { handleError };
};

/**
 * Higher-order component for error boundary
 */
export const withErrorBoundary = <P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<ErrorBoundaryProps, "children">,
) => {
  const WrappedComponent = (props: P) => (
    <EnhancedErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </EnhancedErrorBoundary>
  );

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName || Component.name})`;
  return WrappedComponent;
};

export default EnhancedErrorBoundary;
