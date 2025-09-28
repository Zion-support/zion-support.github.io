/**
 * Comprehensive error handling utilities
 */

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  timestamp: string;
  userAgent: string;
  url: string;
  userId?: string;
}

export class ErrorHandler {
  private static instance: ErrorHandler;
  private errorLog: ErrorInfo[] = [];
  private maxLogSize = 100;

  public static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  public logError(
    error: Error,
    errorInfo?: { componentStack?: string; errorBoundary?: string },
  ): void {
    const errorData: ErrorInfo = {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo?.componentStack,
      errorBoundary: errorInfo?.errorBoundary,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      userId: this.getUserId(),
    };

    this.errorLog.push(errorData);

    // Keep only the most recent errors
    if (this.errorLog.length > this.maxLogSize) {
      this.errorLog = this.errorLog.slice(-this.maxLogSize);
    }

    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("Error logged:", errorData);
    }

    // Send to external service in production
    if (process.env.NODE_ENV === "production") {
      this.sendErrorToService(errorData);
    }
  }

  public getErrorLog(): ErrorInfo[] {
    return [...this.errorLog];
  }

  public clearErrorLog(): void {
    this.errorLog = [];
  }

  private getUserId(): string | undefined {
    // Try to get user ID from localStorage or other sources
    try {
      return localStorage.getItem("userId") || undefined;
    } catch {
      return undefined;
    }
  }

  private async sendErrorToService(errorData: ErrorInfo): Promise<void> {
    try {
      // Send to your error tracking service
      await fetch("/api/error-reporting", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(errorData),
      });
    } catch (error) {
      console.error("Failed to send error to service:", error);
    }
  }
}

export const errorHandler = ErrorHandler.getInstance();

// Global error handlers
export const setupGlobalErrorHandlers = (): void => {
  // Unhandled promise rejections
  window.addEventListener("unhandledrejection", (event) => {
    errorHandler.logError(new Error(event.reason));
  });

  // Global JavaScript errors
  window.addEventListener("error", (event) => {
    errorHandler.logError(event.error || new Error(event.message));
  });
};

// React Error Boundary helper
export const createErrorBoundaryHandler = (errorBoundaryName: string) => {
  return (error: Error, errorInfo: { componentStack: string }) => {
    errorHandler.logError(error, {
      componentStack: errorInfo.componentStack,
      errorBoundary: errorBoundaryName,
    });
  };
};
