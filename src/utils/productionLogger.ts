/**
 * Production logging utility for safe error handling and logging
 */

interface LogLevel {
  level: 'info' | 'warn' | 'error';
  message: string;
  data?: any;
  timestamp: string;
}

// Production-safe logging functions
export const logInfo = (message: string, data?: any): void => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[INFO] ${message}`, data);
  }
  // In production, you might want to send to a logging service
  // logToService('info', message, data);
};

export const logWarn = (message: string, data?: any): void => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`[WARN] ${message}`, data);
  }
  // In production, you might want to send to a logging service
  // logToService('warn', message, data);
};

export const logError = (message: string, error?: any): void => {
  if (process.env.NODE_ENV === 'development') {
    console.error(`[ERROR] ${message}`, error);
  }
  // In production, you might want to send to a logging service
  // logToService('error', message, error);
};

export const logErrorToProduction = (message: string, error?: any): void => {
  // Always log errors in production for monitoring
  if (process.env.NODE_ENV === 'production') {
    // In production, you might want to send to a logging service
    // logToService('error', message, error);
    
    // For now, just log to console in production
    console.error(`[PROD_ERROR] ${message}`, error);
  } else {
    // In development, use regular error logging
    logError(message, error);
  }
};

// Helper function to safely stringify objects for logging
export const safeStringify = (obj: any): string => {
  try {
    return JSON.stringify(obj, (key, value) => {
      if (value instanceof Error) {
        return {
          name: value.name,
          message: value.message,
          stack: value.stack
        };
      }
      return value;
    }, 2);
  } catch (error) {
    return '[Unable to stringify object]';
  }
};

// Production-safe error boundary logging
export const logErrorBoundary = (error: Error, errorInfo: any): void => {
  logErrorToProduction('React Error Boundary caught an error', {
    error: error.message,
    stack: error.stack,
    componentStack: errorInfo?.componentStack
  });
};

// Performance logging
export const logPerformance = (operation: string, duration: number): void => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[PERF] ${operation} took ${duration}ms`);
  }
  // In production, you might want to send to a monitoring service
  // logToMonitoringService('performance', operation, duration);
};