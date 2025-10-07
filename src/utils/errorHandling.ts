/**
 * Comprehensive Error Handling and Logging System
 *
 * Provides centralized error handling, logging, and monitoring
 * for production-grade application reliability.
 */

interface ErrorLog {
  timestamp: number;
  level: 'error' | 'warn' | 'info' | 'debug';
  message: string;
  stack?: string;
  context?: Record<string, unknown>;
  userAgent?: string;
  url?: string;
  sessionId?: string;
}

interface ErrorMetrics {
  totalErrors: number;
  errorsByType: Record<string, number>;
  lastError?: ErrorLog;
  errorRate: number; // errors per minute
}

const ERROR_LOG_KEY = 'zion_error_logs';
const MAX_ERROR_LOGS = 100;
// const ERROR_RATE_WINDOW = 60 * 1000; // 1 minute

/**
 * Get session ID
 */
const getSessionId = (): string => {
  if (typeof window === 'undefined') return 'server';

  let sessionId = sessionStorage.getItem('zion_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('zion_session_id', sessionId);
  }
  return sessionId;
};

/**
 * Get error logs from storage
 */
const getErrorLogs = (): ErrorLog[] => {
  if (typeof window === 'undefined') return [];

  try {
    const stored = localStorage.getItem(ERROR_LOG_KEY);
    if (stored) {
      const logs = JSON.parse(stored) as ErrorLog[];
      // Keep only last 24 hours
      const dayAgo = Date.now() - 24 * 60 * 60 * 1000;
      return logs.filter(log => log.timestamp > dayAgo);
    }
  } catch (error) {
    console.error('Error reading error logs:', error);
  }
  return [];
};

/**
 * Save error log
 */
const saveErrorLog = (log: ErrorLog) => {
  if (typeof window === 'undefined') return;

  try {
    const logs = getErrorLogs();
    logs.push(log);

    // Keep only most recent logs
    if (logs.length > MAX_ERROR_LOGS) {
      logs.splice(0, logs.length - MAX_ERROR_LOGS);
    }

    localStorage.setItem(ERROR_LOG_KEY, JSON.stringify(logs));
  } catch (error) {
    console.error('Error saving error log:', error);
  }
};

/**
 * Log error with context
 */
export const logError = (
  error: Error | string,
  context?: Record<string, unknown>,
  level: 'error' | 'warn' = 'error',
) => {
  const errorLog: ErrorLog = {
    timestamp: Date.now(),
    level,
    message: typeof error === 'string' ? error : error.message,
    stack: typeof error === 'object' && error.stack ? error.stack : undefined,
    context,
    userAgent:
      typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
    url: typeof window !== 'undefined' ? window.location.href : undefined,
    sessionId: getSessionId(),
  };

  // Save to local storage
  saveErrorLog(errorLog);

  // Console logging
  if (level === 'error') {
    console.error('Error logged:', errorLog);
  } else {
    console.warn('Warning logged:', errorLog);
  }

  // Send to external monitoring service (if configured)
  sendToMonitoring(errorLog);
};

/**
 * Log info message
 */
export const logInfo = (message: string, context?: Record<string, unknown>) => {
  const errorLog: ErrorLog = {
    timestamp: Date.now(),
    level: 'info',
    message,
    context,
    userAgent:
      typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
    url: typeof window !== 'undefined' ? window.location.href : undefined,
    sessionId: getSessionId(),
  };

  console.log('Info logged:', errorLog);
};

/**
 * Send error to monitoring service
 */
const sendToMonitoring = (_errorLog: ErrorLog) => {
  if (typeof window === 'undefined') return;

  // Log to console for now (_errorLog is used here)
  console.debug('Monitoring service would receive:', _errorLog);

  // Example: Send to Sentry, LogRocket, or custom endpoint
  try {
    // Uncomment and configure your monitoring service
      /*
      if ('Sentry' in window) {
      (window as { Sentry?: { captureException: (error: Error, context: Record<string, unknown>) => void } }).Sentry?.captureException(new Error(errorLog.message), {
        contexts: {
          custom: errorLog.context,
        },
        tags: {
          level: errorLog.level,
          sessionId: errorLog.sessionId,
        },
      });
    }
    */
    // Or send to custom endpoint
    /*
    fetch('/api/log-error', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(errorLog),
    }).catch(console.error);
    */
  } catch (error) {
    console.error('Failed to send to monitoring:', error);
  }
};

/**
 * Get error metrics
 */
export const getErrorMetrics = (): ErrorMetrics => {
  const logs = getErrorLogs();
  const errors = logs.filter(log => log.level === 'error');

  // Count errors by type
  const errorsByType: Record<string, number> = {};
  errors.forEach(error => {
    const type = error.message.split(':')[0] || 'Unknown';
    errorsByType[type] = (errorsByType[type] || 0) + 1;
  });

  // Calculate error rate (errors per minute in last hour)
  const hourAgo = Date.now() - 60 * 60 * 1000;
  const recentErrors = errors.filter(e => e.timestamp > hourAgo);
  const errorRate = recentErrors.length / 60;

  return {
    totalErrors: errors.length,
    errorsByType,
    lastError: errors[errors.length - 1],
    errorRate,
  };
};

/**
 * Check if error rate is too high
 */
export const isErrorRateTooHigh = (threshold: number = 5): boolean => {
  const metrics = getErrorMetrics();
  return metrics.errorRate > threshold;
};

/**
 * Clear error logs
 */
export const clearErrorLogs = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(ERROR_LOG_KEY);
    console.log('Error logs cleared');
  }
};

/**
 * Global error handler setup
 */
export const setupGlobalErrorHandling = () => {
  if (typeof window === 'undefined') return;

  // Handle uncaught errors
  window.addEventListener('error', event => {
    logError(event.error || event.message, {
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
    });
  });

  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', event => {
    logError(event.reason || 'Unhandled Promise Rejection', {
      promise: event.promise,
    });
  });

  // Handle console errors (optional)
  const originalConsoleError = console.error;
  console.error = (...args) => {
    logError(args.join(' '), { type: 'console.error' });
    originalConsoleError.apply(console, args);
  };

  console.log('Global error handling initialized');
};

/**
 * Performance monitoring
 */
export const monitorPerformance = () => {
  if (typeof window === 'undefined' || !('performance' in window)) return;

  // Monitor page load performance
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType(
        'navigation',
      )[0] as PerformanceNavigationTiming;
      if (perfData) {
        const loadTime = perfData.loadEventEnd - perfData.fetchStart;
        if (loadTime > 3000) {
          // Slow page load (>3s)
          logError(
            'Slow page load detected',
            {
              loadTime,
              domContentLoaded:
                perfData.domContentLoadedEventEnd - perfData.fetchStart,
              type: 'performance',
            },
            'warn',
          );
        }

        logInfo('Page load performance', {
          loadTime,
          domContentLoaded:
            perfData.domContentLoadedEventEnd - perfData.fetchStart,
          ttfb: perfData.responseStart - perfData.fetchStart,
        });
      }
    }, 0);
  });

  // Monitor long tasks
  if ('PerformanceObserver' in window) {
    try {
      const longTaskObserver = new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
            // Long task threshold
            logError(
              'Long task detected',
              {
                duration: entry.duration,
                startTime: entry.startTime,
                type: 'performance',
              },
              'warn',
            );
          }
        }
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });
    } catch {
      // Long task API not supported
    }
  }
};

/**
 * Network error handler
 */
export const handleNetworkError = (error: Error, endpoint: string) => {
  logError(error, {
    endpoint,
    type: 'network',
    online: typeof navigator !== 'undefined' ? navigator.onLine : true,
  });

  // Check if offline
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    console.warn('User is offline');
    return { offline: true };
  }

  return { offline: false };
};

/**
 * Try-catch wrapper with automatic error logging
 */
export const withErrorHandling = <T extends (...args: unknown[]) => unknown>(
  fn: T,
  context?: string,
): T => {
  return ((...args: Parameters<T>) => {
    try {
      const result = fn(...args);

      // Handle async functions
      if (result instanceof Promise) {
        return result.catch(error => {
          logError(error, { context, args });
          throw error;
        });
      }

      return result;
    } catch (error) {
      logError(error as Error, { context, args });
      throw error;
    }
  }) as T;
};

export default {
  logError,
  logInfo,
  getErrorMetrics,
  isErrorRateTooHigh,
  clearErrorLogs,
  setupGlobalErrorHandling,
  monitorPerformance,
  handleNetworkError,
  withErrorHandling,
};
