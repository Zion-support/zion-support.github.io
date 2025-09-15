// Production logger utility for safe logging in production environments

const isDevelopment = process.env.NODE_ENV === 'development';

export const productionLogger = {
  log: (message, ...args) => {
    if (isDevelopment) {
      console.log(message, ...args);
    }
  },
  
  warn: (message, ...args) => {
    if (isDevelopment) {
      console.warn(message, ...args);
    }
  },
  
  error: (message, ...args) => {
    if (isDevelopment) {
      console.error(message, ...args);
    }
  },
  
  info: (message, ...args) => {
    if (isDevelopment) {
      console.info(message, ...args);
    }
  },
  
  debug: (message, ...args) => {
    if (isDevelopment) {
      console.debug(message, ...args);
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
>>>>>>> 764f38a25b6ac8e639cc80767ab314d644c44287
    }
  }
};

export default productionLogger;