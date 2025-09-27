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
}

export const createErrorReport = (error: Error, errorInfo?: any): ErrorInfo => {
  return {
    message: error.message,
    stack: error.stack,
    componentStack: errorInfo?.componentStack,
    timestamp: new Date().toISOString(),
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'Unknown',
    url: typeof window !== 'undefined' ? window.location.href : 'Unknown',
    userId: 'anonymous'
  };
};

export const logError = (error: Error, errorInfo?: any) => {
  const errorReport = createErrorReport(error, errorInfo);
  console.error('Error Report:', errorReport);
  
  // In production, send to error reporting service
  if (process.env.NODE_ENV === 'production') {
    // Send to external error reporting service
    fetch('/api/error-reporting', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(errorReport),
    }).catch(console.error);
  }
};

export const handleAsyncError = (error: Error) => {
  console.error('Async Error:', error);
  logError(error);
};

export const createErrorBoundaryFallback = (error: Error, errorInfo?: any) => {
  logError(error, errorInfo);
  
  return {
    title: 'Something went wrong',
    message: 'An unexpected error occurred. Please try refreshing the page.',
    action: 'Refresh Page'
  };
};