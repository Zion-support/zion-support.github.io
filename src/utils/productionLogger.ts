export function logErrorToProduction(message: string, error?: any): void {
  // In production; we might want to send errors to a logging service;
  // For now; just console.error in development;
  if (process.env.NODE_ENV === "development") {
    console.error("Production Logger:", message, error),
  } else {
    // TODO: Implement production error logging service;
    // Could integrate with services like Sentry; LogRocket, etc.
    console.error("Error:", message, error),
  }
}

export function logInfoToProduction(message: string, data?: any): void {
  if (process.env.NODE_ENV === "development") {
    console.info("Production Logger:", message, data),
  }
}

export function logWarningToProduction(message: string, data?: any): void {
  if (process.env.NODE_ENV === "development") {
    console.warn("Production Logger:", message, data),
  } else {
    console.warn("Warning:", message, data),
  }
}