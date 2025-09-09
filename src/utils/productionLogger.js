// Production logger utility
export const productionLogger = {
  log: (...args) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(...args);
    }
  },
  error: (...args) => {
    if (process.env.NODE_ENV === 'development') {
      console.error(...args);
    }
  },
  warn: (...args) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn(...args);
    }
  },
  info: (...args) => {
    if (process.env.NODE_ENV === 'development') {
      console.info(...args);
    }
  }
};

// Export individual functions for backward compatibility
export const logErrorToProduction = (error, context = '') => {
  if (process.env.NODE_ENV === 'development') {
    console.error('Production Error:', error, context);
  }
  // In production, you could send this to a logging service
};