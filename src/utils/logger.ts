// Simple logger utility
export const logger = {
  error: (message: string, context?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.error(`[ERROR] ${message}`, context);
    }
  },
  warn: (message: string, context?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[WARN] ${message}`, context);
    }
  },
  info: (message: string, context?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.info(`[INFO] ${message}`, context);
    }
  },
  debug: (message: string, context?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.debug(`[DEBUG] ${message}`, context);
    }
  }
};