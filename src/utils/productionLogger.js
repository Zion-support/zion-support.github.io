// Production logger utility for Zion Tech Group
// Provides structured logging for production environments

const isProduction = process.env.NODE_ENV === 'production';

/**
 * Log error messages to production logging service
 * @param {string} message - Error message
 * @param {Error|any} error - Error object or additional context
 */
export function error(message, error) {
  if (isProduction) {
    // In production, send to logging service
    try {
      // Structured error logging
      const logData = {
        timestamp: new Date().toISOString(),
        level: 'error',
        message,
        error: error?.message || error,
        stack: error?.stack,
        url: typeof window !== 'undefined' ? window.location.href : 'server',
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'server'
      };
      
      // Send to production logging endpoint
      if (typeof fetch !== 'undefined') {
        fetch('/api/logs/error', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(logData),
          // Don't wait for response to avoid blocking
        }).catch(() => {
          // Silent fail if logging fails
        });
      }
    } catch (logError) {
      // Silent fail if logging fails completely
    }
  } else {
    // In development, use console
    console.error(message, error);
  }
}

/**
 * Log warning messages
 * @param {string} message - Warning message
 * @param {any} data - Additional context data
 */
export function warn(message, data) {
  if (isProduction) {
    // In production, send to logging service
    try {
      const logData = {
        timestamp: new Date().toISOString(),
        level: 'warn',
        message,
        data,
        url: typeof window !== 'undefined' ? window.location.href : 'server'
      };
      
      if (typeof fetch !== 'undefined') {
        fetch('/api/logs/warn', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(logData),
        }).catch(() => {
          // Silent fail
        });
      }
    } catch (logError) {
      // Silent fail
    }
  } else {
    console.warn(message, data);
  }
}

/**
 * Log info messages
 * @param {string} message - Info message
 * @param {any} data - Additional context data
 */
export function info(message, data) {
  if (isProduction) {
    // In production, send to logging service
    try {
      const logData = {
        timestamp: new Date().toISOString(),
        level: 'info',
        message,
        data,
        url: typeof window !== 'undefined' ? window.location.href : 'server'
      };
      
      if (typeof fetch !== 'undefined') {
        fetch('/api/logs/info', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(logData),
        }).catch(() => {
          // Silent fail
        });
      }
    } catch (logError) {
      // Silent fail
    }
  } else {
    console.info(message, data);
  }
}

/**
 * Log debug messages (only in development)
 * @param {string} message - Debug message
 * @param {any} data - Additional context data
 */
export function debug(message, data) {
  if (!isProduction) {
    console.debug(message, data);
  }
}

// Default export for backward compatibility
export default {
  error,
  warn,
  info,
  debug
};