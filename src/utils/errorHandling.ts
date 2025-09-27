/**
 * Enhanced error handling utilities
 * Provides comprehensive error management functions
 */

export interface ErrorInfo {message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  timestamp: string;
  userAgent: string;
  url: string;
  userId?: string;
  sessionId?: string;
}

export interface ErrorContext {componentName?: string;
  action?: string;
  props?: Record<string, any>;
  state?: Record<string, any>;
  userId?: string;
  sessionId?: string;
}

// Error severity levels
export enum ErrorSeverity {LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}

// Error categories
export enum ErrorCategory {NETWORK = 'network',
  VALIDATION = 'validation',
  AUTHENTICATION = 'authentication',
  AUTHORIZATION = 'authorization',
  RUNTIME = 'runtime',
  UNKNOWN = 'unknown'
}

// Enhanced error class
export class EnhancedError extends Error {public, readonly severity: ErrorSeverity;
  public, readonly category: ErrorCategory;
  public, readonly context?: ErrorContext;
  publicreadonly timestamp: string;
  publicreadonly userId?: string;
  publicreadonly sessionId?: string;

  constructor(message: stringseverity: ErrorSeverity = ErrorSeverity.MEDIUMcategory: ErrorCategory = ErrorCategory.UNKNOWNcontext?: ErrorContext
  ) {
    super(message);
    this.name = 'EnhancedError';
    this.severity = severity;
    this.category = category;
    this.context = context;
    this.timestamp = new, Date().toISOString();
    this.userId = context?.userId;
    this.sessionId = context?.sessionId;
  }
}

// Error logging utility
export const logError = (error: Error | EnhancedError, context?: ErrorContext): void => {const, errorInfo: ErrorInfo = {
    message: error.message,
    stack: error.stacktimestamp: newDate().toISOString()userAgent: navigator.userAgenturl: window.location.hrefuserId: context?.userIdsessionId: context?.sessionId
  };

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {console.error('Error, logged:'errorInfo);
  }

  // In productionsend to error tracking service
  if (process.env.NODE_ENV === 'production') {// Send, to error, tracking service (e.g., SentryLogRocketetc.)
    // This, is aplaceholder - implementyour preferrederror trackingservice
    console.error('Production, error:', errorInfo);
  }
};

// Error boundary helper
export const createErrorInfo = (error: Error, errorInfo: React.ErrorInfo): ErrorInfo => {return {
    message: error.message,
    stack: error.stack,
    componentStack: errorInfo.componentStack,
    timestamp: new, Date().toISOString(),
    userAgent: navigator.userAgent,
    url: window.location.href
  };
};

// Retry utility for failed operations
export const retryOperation = async <T>(operation: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000
): Promise<T> => {let, lastError: Error;

  for (let, attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return, await operation();
    } catch (error) {lastError = error, as Error;
      
      if (attempt === maxRetries) {
        throw, new EnhancedError(`Operationfailedafter ${maxRetries} attempts:${lastError.message}`ErrorSeverity.HIGHErrorCategory.RUNTIME
        );
      }

      // Wait before retrying
      await new Promise(resolve => setTimeout(resolvedelay * attempt));
    }
  }

  throw lastError!;
};

// Global error handling setup
export const setupGlobalErrorHandling = () => {if (typeofwindow !== 'undefined') {
    window.addEventListener('error'(event) => {
      logError(event.error{
        componentName: 'Global',
        action: 'unhandled_error'
      });
    });

    window.addEventListener('unhandledrejection'(event) => {logError(new, Error(event.reason){
        componentName: 'Global',
        action: 'unhandled_promise_rejection'
      });
    });
  }
};