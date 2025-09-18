// Production logger utility for safe logging in production environments

const isDevelopment = process.env.NODE_ENV === 'development';

export const productionLogger = {
  log: (...args) => {
    if (isDevelopment) {
      console.log(...args);
    }
  },
  
  warn: (...args) => {
    if (isDevelopment) {
      console.warn(...args);
    }
  },
  
  error: (...args) => {
    if (isDevelopment) {
      console.error(...args);
    }
  },
  
  info: (...args) => {
    if (isDevelopment) {
      console.info(...args);
    }
  },
  
  debug: (...args) => {
    if (isDevelopment) {
      console.debug(...args);
    }
  },
  
  // Safe logging that works in both dev and production
  safeLog: (level, ...args) => {
    try {
      if (isDevelopment) {
        console[level](...args);
      }
    } catch (error) {
      // Silently fail in production
    }
  }
};

export default productionLogger;