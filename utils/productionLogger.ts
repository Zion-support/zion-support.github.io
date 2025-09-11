interface LogData {
  [key: string]: any;
}

export function logInfo(message: string, data?: LogData) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[INFO] ${message}`, data);
  }
  // In production, you might want to send this to a logging service
}

export function logErrorToProduction(
  message: string,
  error?: Error,
  data?: LogData
) {
  console.error(`[ERROR] ${message}`, error, data);
  // In production, you might want to send this to an error tracking service
}

export function logWarning(message: string, data?: LogData) {
  if (process.env.NODE_ENV === 'development') {
    console.warn(`[WARNING] ${message}`, data);
  }
}
