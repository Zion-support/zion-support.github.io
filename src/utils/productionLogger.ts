// Production logger utility
export const productionLogger = {
  log: (message: string, ...args: any[]): void => {
    if (process.env.NODE_ENV === 'development') {
      console.log(message, ...args);
    }
  },

  error: (message: string, ...args: any[]): void => {
    if (process.env.NODE_ENV === 'development') {
      console.error(message, ...args);
    }
  },

  warn: (message: string, ...args: any[]): void => {
    if (process.env.NODE_ENV === 'development') {
      console.warn(message, ...args);
    }
  },

  info: (message: string, ...args: any[]): void => {
    if (process.env.NODE_ENV === 'development') {
      console.info(message, ...args);
    }
  }
};

// Export the specific function that's being imported
export const logErrorToProduction = (error: Error | string, context?: string): void => {
  const errorMessage = error instanceof Error ? error.message : error;
  const fullMessage = context ? `${context}: ${errorMessage}` : errorMessage;
  
  if (process.env.NODE_ENV === 'development') {
    console.error('[PRODUCTION LOGGER]', fullMessage);
  }
  
  // In production, you might want to send this to an error tracking service
  // like Sentry, LogRocket, etc.
};

export default productionLogger;