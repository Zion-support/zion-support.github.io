/**
 * Enhanced Error Handler
 * Comprehensive error handling and recovery system
 */

import React from "react";
import { analytics } from "./analytics";

export interface ErrorInfo {
  componentStack: string;
  errorBoundary?: string;
  errorBoundaryStack?: string;
}

export interface ErrorDetails {
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  timestamp: string;
  userAgent: string;
  url: string;
  userId?: string;
  sessionId?: string;
}

export class EnhancedErrorHandler {
  private static instance: EnhancedErrorHandler;
  private errorQueue: ErrorDetails[] = [];
  private maxQueueSize = 100;
  private isOnline = navigator.onLine;

  private constructor() {
    this.setupErrorHandlers();
    this.setupNetworkMonitoring();
  }

  public static getInstance(): EnhancedErrorHandler {
    if (!EnhancedErrorHandler.instance) {
      EnhancedErrorHandler.instance = new EnhancedErrorHandler();
    }
    return EnhancedErrorHandler.instance;
  }

  /**
   * Setup global error handlers
   */
  private setupErrorHandlers(): void {
    // Global error handler
    window.addEventListener("error", (event) => {
      this.handleError({
        message: event.message,
        stack: event.error?.stack,
        componentStack: "",
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener("unhandledrejection", (event) => {
      this.handleError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
        stack: event.reason?.stack,
        componentStack: "",
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      });
    });
  }

  /**
   * Setup network monitoring
   */
  private setupNetworkMonitoring(): void {
    window.addEventListener("online", () => {
      this.isOnline = true;
      this.flushErrorQueue();
    });

    window.addEventListener("offline", () => {
      this.isOnline = false;
    });
  }

  /**
   * Handle React error boundary errors
   */
  public handleReactError(error: Error, errorInfo: ErrorInfo): void {
    this.handleError({
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorBoundary: errorInfo.errorBoundary,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    });
  }

  /**
   * Handle general errors
   */
  public handleError(errorDetails: ErrorDetails): void {
    // Add to queue
    this.errorQueue.push(errorDetails);

    // Maintain queue size
    if (this.errorQueue.length > this.maxQueueSize) {
      this.errorQueue.shift();
    }

    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("Error captured:", errorDetails);
    }

    // Send to analytics
    this.sendToAnalytics(errorDetails);

    // Send to external service if online
    if (this.isOnline) {
      this.sendToExternalService(errorDetails);
    }
  }

  /**
   * Send error to analytics
   */
  private sendToAnalytics(errorDetails: ErrorDetails): void {
    try {
      analytics.track("error_occurred", {
        message: errorDetails.message,
        stack: errorDetails.stack?.slice(0, 1000), // Truncate stack trace
        componentStack: errorDetails.componentStack?.slice(0, 1000),
        errorBoundary: errorDetails.errorBoundary,
        timestamp: errorDetails.timestamp,
        url: errorDetails.url,
        userAgent: errorDetails.userAgent,
      });
    } catch (error) {
      console.error("Failed to send error to analytics:", error);
    }
  }

  /**
   * Send error to external service
   */
  private async sendToExternalService(
    errorDetails: ErrorDetails,
  ): Promise<void> {
    try {
      // In a real application, this would send to your error tracking service
      // like Sentry, LogRocket, or Bugsnag
      console.log("Sending error to external service:", errorDetails);

      // Simulate API call
      await fetch("/api/errors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(errorDetails),
      });
    } catch (error) {
      console.error("Failed to send error to external service:", error);
    }
  }

  /**
   * Flush error queue when back online
   */
  private async flushErrorQueue(): Promise<void> {
    if (this.errorQueue.length === 0) return;

    console.log(`Flushing ${this.errorQueue.length} errors from queue`);

    const errorsToFlush = [...this.errorQueue];
    this.errorQueue = [];

    for (const error of errorsToFlush) {
      await this.sendToExternalService(error);
    }
  }

  /**
   * Get error statistics
   */
  public getErrorStats(): any {
    const now = new Date();
    const last24Hours = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const last7Days = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    const recentErrors = this.errorQueue.filter(
      (error) => new Date(error.timestamp) > last24Hours,
    );

    const weeklyErrors = this.errorQueue.filter(
      (error) => new Date(error.timestamp) > last7Days,
    );

    return {
      totalErrors: this.errorQueue.length,
      last24Hours: recentErrors.length,
      last7Days: weeklyErrors.length,
      isOnline: this.isOnline,
      queueSize: this.errorQueue.length,
      maxQueueSize: this.maxQueueSize,
    };
  }

  /**
   * Clear error queue
   */
  public clearErrorQueue(): void {
    this.errorQueue = [];
  }

  /**
   * Get recent errors
   */
  public getRecentErrors(limit: number = 10): ErrorDetails[] {
    return this.errorQueue
      .sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
      )
      .slice(0, limit);
  }
}

/**
 * Error Boundary Component
 */
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; retry: () => void }>;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  private errorHandler = EnhancedErrorHandler.getInstance();

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ errorInfo });

    // Handle the error
    this.errorHandler.handleReactError(error, errorInfo);

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  private retry = (): void => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render(): React.ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return (
          <FallbackComponent error={this.state.error!} retry={this.retry} />
        );
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <svg
                  className="h-8 w-8 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-gray-900">
                  Something went wrong
                </h3>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-4">
                We're sorry, but something unexpected happened. Our team has
                been notified.
              </p>

              <div className="flex space-x-3">
                <button
                  onClick={this.retry}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Try Again
                </button>

                <button
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Reload Page
                </button>
              </div>
            </div>

            {process.env.NODE_ENV === "development" && this.state.error && (
              <details className="mt-4">
                <summary className="text-sm font-medium text-gray-700 cursor-pointer">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-gray-600 bg-gray-100 p-2 rounded overflow-auto">
                  {this.state.error.stack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

/**
 * Default error fallback component
 */
export const DefaultErrorFallback: React.FC<{
  error: Error;
  retry: () => void;
}> = ({ error, retry }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
      <div className="text-center">
        <svg
          className="mx-auto h-12 w-12 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
          />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900">Error</h3>
        <p className="mt-1 text-sm text-gray-500">{error.message}</p>
        <div className="mt-6">
          <button
            onClick={retry}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Export singleton instance
export const errorHandler = EnhancedErrorHandler.getInstance();
