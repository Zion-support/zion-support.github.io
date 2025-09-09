<<<<<<< HEAD
// Production logger utility for error tracking and monitoring
interface ErrorLogData {
  message: string;
  error?: Error | unknown;
  timestamp: string;
  url?: string;
  userAgent?: string;
  stack?: string;
}

/**
 * Logs errors to production monitoring services
 * In production, this would typically send to services like:
 * - Sentry
 * - LogRocket
 * - DataDog
 * - Custom error tracking API
 */
export function logErrorToProduction(message: string, error?: Error | unknown): void {
  const errorData: ErrorLogData = {
    message,
    error,
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : undefined,
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
    stack: error instanceof Error ? error.stack : undefined,
  };

  // In development, log to console
  if (process.env.NODE_ENV === 'development') {
    console.error('Production Logger:', errorData);
    return;
  }

  // In production, you would typically send to a monitoring service
  // For now, we'll just log to console to avoid build errors
  try {
    // Example: Send to external service
    // await fetch('/api/error-log', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(errorData)
    // });
    
    // For now, just log to console in production
    console.error('Production Error:', errorData);
  } catch (logError) {
    // Silent fail if error logging fails
    console.error('Failed to log error to production:', logError);
  }
}

/**
 * Logs performance metrics to production monitoring
 */
export function logPerformanceMetric(metric: string, value: number, tags?: Record<string, string>): void {
  const metricData = {
    metric,
    value,
    tags,
    timestamp: new Date().toISOString(),
  };

  if (process.env.NODE_ENV === 'development') {
    console.log('Performance Metric:', metricData);
    return;
  }

  try {
    // Example: Send to performance monitoring service
    // await fetch('/api/performance-metric', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(metricData)
    // });
    
    console.log('Performance Metric:', metricData);
  } catch (logError) {
    console.error('Failed to log performance metric:', logError);
  }
}

/**
 * Logs user actions for analytics
 */
export function logUserAction(action: string, properties?: Record<string, any>): void {
  const actionData = {
    action,
    properties,
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : undefined,
  };

  if (process.env.NODE_ENV === 'development') {
    console.log('User Action:', actionData);
    return;
  }

  try {
    // Example: Send to analytics service
    // await fetch('/api/user-action', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(actionData)
    // });
    
    console.log('User Action:', actionData);
  } catch (logError) {
    console.error('Failed to log user action:', logError);
  }
}
