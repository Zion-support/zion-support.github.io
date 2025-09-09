/**
 * Production logger utility for handling errors in production environments
 */

export function logErrorToProduction(message, error) {
  // In production, we might want to send errors to a logging service
  // For now, we'll just use console.error as a fallback
  if (process.env.NODE_ENV === 'production') {
    // In production, you might want to send this to a service like Sentry, LogRocket, etc.
    console.error('[PRODUCTION ERROR]', message, error);
  } else {
    // In development, use regular console.error
    console.error(message, error);
  }
}

export function logInfoToProduction(message, data) {
  if (process.env.NODE_ENV === 'production') {
    console.info('[PRODUCTION INFO]', message, data);
  } else {
    console.info(message, data);
  }
}

export function logWarningToProduction(message, data) {
  if (process.env.NODE_ENV === 'production') {
    console.warn('[PRODUCTION WARNING]', message, data);
  } else {
    console.warn(message, data);
  }
}