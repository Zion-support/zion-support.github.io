// Enhanced error handling utilities for better debugging and user experience

export interface ErrorInfo {
  message: string;
  stack?: string;
  componentStack?: string;
  errorBoundary?: string;
  timestamp: number;
  userAgent: string;
  url: string;
}

export class AppError extends Error {
  public readonly code: string;
  public readonly statusCode: number;
  public readonly isOperational: boolean;

  constructor(
    message: string,
    code: string = 'UNKNOWN_ERROR',
    statusCode: number = 500,
    isOperational: boolean = true
  ) {
    super(message);
    this.name = 'AppError';
    this.code = code;
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    // Maintains proper stack trace for where our error was thrown
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorCodes = {
  NETWORK_ERROR: 'NETWORK_ERROR',
  VALIDATION_ERROR: 'VALIDATION_ERROR',
  AUTHENTICATION_ERROR: 'AUTHENTICATION_ERROR',
  AUTHORIZATION_ERROR: 'AUTHORIZATION_ERROR',
  NOT_FOUND: 'NOT_FOUND',
  RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  MODULE_RESOLUTION_ERROR: 'MODULE_RESOLUTION_ERROR',
  BUILD_ERROR: 'BUILD_ERROR',
} as const;

export const logError = (error: Error | AppError, errorInfo?: Partial<ErrorInfo>) => {
  const errorData: ErrorInfo = {
    message: error.message,
    stack: error.stack,
    timestamp: Date.now(),
    userAgent: navigator.userAgent,
    url: window.location.href,
    ...errorInfo,
  };

  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error('🚨 Application Error:', errorData);
  }

  // In production, you might want to send this to an error tracking service
  // like Sentry, LogRocket, or your own error reporting endpoint
  if (process.env.NODE_ENV === 'production') {
    // Example: Send to error tracking service
    // sendToErrorService(errorData);
  }
};

export const handleAsyncError = async <T>(
  asyncFn: () => Promise<T>,
  fallback?: T,
  errorCode: string = errorCodes.INTERNAL_SERVER_ERROR
): Promise<T | undefined> => {
  try {
    return await asyncFn();
  } catch (error) {
    const appError = error instanceof AppError 
      ? error 
      : new AppError(
          error instanceof Error ? error.message : 'Unknown error occurred',
          errorCode
        );
    
    logError(appError);
    return fallback;
  }
};

export const createErrorBoundary = (componentName: string) => {
  return (error: Error, errorInfo: any) => {
    logError(error, {
      componentStack: errorInfo.componentStack,
      errorBoundary: componentName,
    });
  };
};

// Global error handler for unhandled promise rejections
export const setupGlobalErrorHandlers = () => {
  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    const error = event.reason instanceof Error 
      ? event.reason 
      : new Error(String(event.reason));
    
    logError(error, {
      errorBoundary: 'GlobalUnhandledRejection',
    });
    
    // Prevent the default browser behavior
    event.preventDefault();
  });

  // Handle general JavaScript errors
  window.addEventListener('error', (event) => {
    const error = event.error instanceof Error 
      ? event.error 
      : new Error(event.message);
    
    logError(error, {
      errorBoundary: 'GlobalErrorHandler',
    });
  });
};

export default {
  AppError,
  errorCodes,
  logError,
  handleAsyncError,
  createErrorBoundary,
  setupGlobalErrorHandlers,
};