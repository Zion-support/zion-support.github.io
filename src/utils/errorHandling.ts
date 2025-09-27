/**
 * Enhanced error handling utilities
 * Provides comprehensive error tracking and reporting
 */

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
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
  public timestamp: string;
  public componentStack?: string;

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
    this.timestamp = new Date().toISOString();
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
    componentStack: errorInfo.componentStack || undefined,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    url: window.location.href
  };
};

// Retry utility with exponential backoff
export const retryOperation = async <T>(
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

// Safe async operation wrapper
export const safeAsync = async <T>(
  operation: () => Promise<T>,
  fallback?: T
): Promise<T | undefined> => {
  try {
    return await operation();
  } catch (error) {
    logError(error as Error);
    return fallback;
  }
};

// Error boundary component props
export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

// Global error handlers
export const setupGlobalErrorHandlers = (): void => {
  // Handle unhandled promise rejections
  window.addEventListener("unhandledrejection", (event) => {
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

  // Handle global JavaScript errors
  window.addEventListener("error", (event) => {
    const error = new EnhancedError(
      `Global error: ${event.message}`,
      ErrorSeverity.HIGH,
      ErrorCategory.RUNTIME,
      {
        componentName: "Global",
        action: "global_error"
      }
    );
    logError(error);
  });
};

// Validation error helper
export const createValidationError = (field: string, message: string): EnhancedError => {
  return new EnhancedError(
    `Validation error for ${field}: ${message}`,
    ErrorSeverity.MEDIUM,
    ErrorCategory.VALIDATION
  );
};

// Network error helper
export const createNetworkError = (url: string, status?: number): EnhancedError => {
  return new EnhancedError(
    `Network error for ${url}${status ? ` (${status})` : ""}`,
    ErrorSeverity.HIGH,
    ErrorCategory.NETWORK
  );
};