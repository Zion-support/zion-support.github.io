// Production logger utility for safe error logging
export function logErrorToProduction(message: string, error?: any): void {
  // In production, we might want to send errors to a logging service
  // For now, we'll just use console.error in a safe way
  
  try {
    // Only log in development or if explicitly enabled
    if (process.env.NODE_ENV === 'development') {
      console.error(`[Production Logger] ${message}`, error);
    }
    
    // In production, you could send to:
    // - Sentry
    // - LogRocket
    // - Custom logging service
    // - Analytics service
    
    // Example: sendToLoggingService(message, error);
    
  } catch (loggingError) {
    // Prevent infinite recursion if logging itself fails
    // Silently fail in production
    if (process.env.NODE_ENV === 'development') {
      console.warn('Failed to log error:', loggingError);
    }
  }
}

// Additional logging utilities
export function logInfoToProduction(message: string, data?: any): void {
  try {
    if (process.env.NODE_ENV === 'development') {
      console.info(`[Production Logger] ${message}`, data);
    }
  } catch {
    // Silent fail
  }
}

export function logWarningToProduction(message: string, data?: any): void {
  try {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[Production Logger] ${message}`, data);
    }
  } catch {
    // Silent fail
  }
}