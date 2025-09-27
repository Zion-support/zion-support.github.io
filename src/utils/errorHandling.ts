/**
 * Enhanced error handling utilities
 * Provides comprehensive error management functions
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
  sessionId?: string;
}

export interface ErrorContext {
  componentName?: string;
  action?: string;
  props?: Record<string, any>;
  state?: Record<string, any>;
  userId?: string;
  sessionId?: string;
}

// Error severity levels
export enum ErrorSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}

// Error categories
export enum ErrorCategory {
  NETWORK = 'network',
  VALIDATION = 'validation',
  AUTHENTICATION = 'authentication',
  AUTHORIZATION = 'authorization',
  RUNTIME = 'runtime',
  UNKNOWN = 'unknown'
}

// Enhanced error class
export class EnhancedError extends Error {
  public readonly severity: ErrorSeverity;
  public readonly category: ErrorCategory;
  public readonly context?: ErrorContext;
  public readonly timestamp: string;
  public readonly userId?: string;
  public readonly sessionId?: string;

  constructor(
    message: string,
    severity: ErrorSeverity = ErrorSeverity.MEDIUM,
    category: ErrorCategory = ErrorCategory.UNKNOWN,
    context?: ErrorContext
  ) {
    super(message);
    this.name = 'EnhancedError';
    this.severity = severity;
    this.category = category;
    this.context = context;
    this.timestamp = new Date().toISOString();
    this.userId = context?.userId;
    this.sessionId = context?.sessionId;
  }
}

// Error logging utility
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
  if (process.env.NODE_ENV === 'development') {
    console.error('Error logged:', errorInfo);
  }

  // In production, send to error tracking service
  if (process.env.NODE_ENV === 'production') {
    // Send to error tracking service (e.g., Sentry, LogRocket, etc.)
    // This is a placeholder - implement your preferred error tracking service
    console.error('Production error:', errorInfo);
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

// Retry utility for failed operations
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

      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, delay * attempt));
    }
  }

  throw lastError!;
};

// Global error handling setup
export const setupGlobalErrorHandling = () => {
  if (typeof window !== 'undefined') {
    window.addEventListener('error', (event) => {
      logError(event.error, {
        componentName: 'Global',
        action: 'unhandled_error'
      });
    });

    window.addEventListener('unhandledrejection', (event) => {
      logError(new Error(event.reason), {
        componentName: 'Global',
        action: 'unhandled_promise_rejection'
      });
    });
  }
};