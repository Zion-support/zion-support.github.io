/**
 * Enhanced error handling utilities for the application
 * Combines comprehensive error management with advanced features
 */

import React from 'react';

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  timestamp: string;
  url?: string;
  userAgent?: string;
  userId?: string;
  sessionId?: string;
}

export enum ErrorSeverity {
  LOW = "low",
  MEDIUM = "medium", 
  HIGH = "high",
  CRITICAL = "critical"
}

export enum ErrorCategory {
  NETWORK = "network",
  VALIDATION = "validation",
  AUTHENTICATION = "authentication",
  AUTHORIZATION = "authorization",
  RUNTIME = "runtime",
  UNKNOWN = "unknown"
}

export interface ErrorContext {
  userId?: string;
  sessionId?: string;
  componentName?: string;
  action?: string;
}

export class EnhancedError extends Error {
  public severity: ErrorSeverity;
  public category: ErrorCategory;
  public context?: ErrorContext;
  
  constructor(
    message: string,
    severity: ErrorSeverity = ErrorSeverity.MEDIUM,
    category: ErrorCategory = ErrorCategory.UNKNOWN,
    context?: ErrorContext
  ) {
    super(message);
    this.name = "EnhancedError";
    this.severity = severity;
    this.category = category;
    this.context = context;
  }
}

export class ErrorHandler {
  private static instance: ErrorHandler;
  private errors: ErrorInfo[] = [];

  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }

  reportError(error: Error, errorInfo?: Partial<ErrorInfo>) {
    const errorData: ErrorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : undefined,
      ...errorInfo,
    };

    this.errors.push(errorData);

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error reported:', errorData);
    }

    // Send to error reporting service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToErrorService(errorData);
    }
  }

  private sendToErrorService(errorData: ErrorInfo) {
    // In a real implementation, this would send to a service like Sentry
    fetch('/api/error-reporting', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(errorData),
    }).catch((err) => {
      console.error('Failed to send error to service:', err);
    });
  }

  getErrors(): ErrorInfo[] {
    return [...this.errors];
  }

  clearErrors(): void {
    this.errors = [];
  }
}

export const errorHandler = ErrorHandler.getInstance();

export const logError = (error: Error | EnhancedError, context?: ErrorContext): void => {
  const errorInfo: ErrorInfo = {
    message: error.message,
    stack: error.stack,
    timestamp: new Date().toISOString(),
    userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
    url: typeof window !== 'undefined' ? window.location.href : undefined,
    userId: context?.userId,
    sessionId: context?.sessionId
  };

  // Log to console in development
  if (process.env.NODE_ENV === "development") {
    console.error("Error logged:", errorInfo);
  }

  // In production, send to error tracking service
  if (process.env.NODE_ENV === "production") {
    console.error("Production error:", errorInfo);
  }
};

// Error boundary helper
export const createErrorInfo = (error: Error, errorInfo: React.ErrorInfo): ErrorInfo => {
  return {
    message: error.message,
    stack: error.stack,
    componentStack: errorInfo.componentStack,
    timestamp: new Date().toISOString(),
    userAgent: typeof window !== 'undefined' ? navigator.userAgent : undefined,
    url: typeof window !== 'undefined' ? window.location.href : undefined
  };
};

// Retry mechanism with exponential backoff
export const withRetry = async <T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000
): Promise<T> => {
  let lastError: Error;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error as Error;
      
      if (attempt === maxRetries) {
        throw new EnhancedError(
          `Operation failed after ${maxRetries} attempts: ${lastError.message}`,
          ErrorSeverity.HIGH,
          ErrorCategory.RUNTIME
        );
      }
      
      // Exponential backoff
      const waitTime = delay * Math.pow(2, attempt - 1);
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
  }
  
  throw lastError!;
};

// Safe async wrapper
export const safeAsync = async <T>(
  operation: () => Promise<T>,
  fallback?: T,
  context?: ErrorContext
): Promise<T | undefined> => {
  try {
    return await operation();
  } catch (error) {
    logError(error as Error, context);
    return fallback;
  }
};

// Safe sync wrapper
export const safeSync = <T>(
  operation: () => T,
  fallback?: T,
  context?: ErrorContext
): T | undefined => {
  try {
    return operation();
  } catch (error) {
    logError(error as Error, context);
    return fallback;
  }
};

// Error reporting for React components
export const reportComponentError = (
  error: Error,
  errorInfo: React.ErrorInfo,
  componentName: string
): void => {
  const enhancedError = new EnhancedError(
    `Component error in ${componentName}: ${error.message}`,
    ErrorSeverity.MEDIUM,
    ErrorCategory.RUNTIME,
    {
      componentName,
      action: "component_error"
    }
  );
  
  logError(enhancedError);
};

export function setupGlobalErrorHandling() {
  if (typeof window !== 'undefined') {
    window.addEventListener('error', (event) => {
      const error = new EnhancedError(
        event.message,
        ErrorSeverity.HIGH,
        ErrorCategory.RUNTIME,
        {
          componentName: "Global",
          action: "unhandled_error"
        }
      );
      logError(error);
    });

    window.addEventListener('unhandledrejection', (event) => {
      const error = new EnhancedError(
        `Unhandled promise rejection: ${event.reason}`,
        ErrorSeverity.HIGH,
        ErrorCategory.RUNTIME,
        {
          componentName: "Global",
          action: "unhandled_promise_rejection"
        }
      );
      logError(error);
    });
  }
}

export function createErrorBoundary(errorCallback?: (error: Error, errorInfo: ErrorInfo) => void) {
  return class ErrorBoundary extends React.Component<
    { children: React.ReactNode },
    { hasError: boolean; error?: Error }
  > {
    constructor(props: { children: React.ReactNode }) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
      return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: any) {
      const errorData: ErrorInfo = {
        message: error.message,
        stack: error.stack,
        componentStack: errorInfo.componentStack,
        timestamp: new Date().toISOString(),
      };

      errorHandler.reportError(error, errorData);
      errorCallback?.(error, errorData);
    }

    render() {
      if (this.state.hasError) {
        return React.createElement('div', { className: 'error-boundary' },
          React.createElement('h2', null, 'Something went wrong.'),
          React.createElement('button', { onClick: () => this.setState({ hasError: false }) }, 'Try again')
        );
      }

      return this.props.children;
    }
  };
}
