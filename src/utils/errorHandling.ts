/**
 * Enhanced error handling utilities for the application
 */

export interface ErrorInfo {
  message: string;
  stack?: string;
  timestamp: string;
  userAgent: string;
  url: string;
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

export const logError = (error: Error | EnhancedError, context?: ErrorContext): void => {
  const errorInfo: ErrorInfo = {
    message: error.message,
    stack: error.stack,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    url: window.location.href,
    userId: context?.userId,
    sessionId: context?.sessionId
  };

  // Log to console in development
  if (process.env.NODE_ENV === "development") {
    console.error("Error logged:", errorInfo);
  }

  // In production, send to error tracking service
  if (process.env.NODE_ENV === "production") {
    // Send to error tracking service (e.g., Sentry, LogRocket, etc.)
    // This is a placeholder - implement your preferred error tracking service
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
    userAgent: navigator.userAgent,
    url: window.location.href
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

// Global error handler
export const setupGlobalErrorHandling = (): void => {
  // Handle uncaught errors
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

  // Handle unhandled promise rejections
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
};