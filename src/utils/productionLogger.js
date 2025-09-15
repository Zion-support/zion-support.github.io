<<<<<<< HEAD
<<<<<<< HEAD
// Production logger utility
export const productionLogger = {
  log: (message, ...args) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(message, ...args);
    }
  },
  
  error: (message, ...args) => {
    if (process.env.NODE_ENV === 'development') {
      console.error(message, ...args);
    }
  },
  
  warn: (message, ...args) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn(message, ...args);
    }
  },
  
  info: (message, ...args) => {
    if (process.env.NODE_ENV === 'development') {
      console.info(message, ...args);
=======
// Production logger utility for safe logging in production environments

const isDevelopment = process.env.NODE_ENV === 'development';

=======
// Production-safe logging utility
>>>>>>> origin/cursor/create-and-deploy-new-content-7d6d
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
<<<<<<< HEAD
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
>>>>>>> cursor/create-and-deploy-new-content-d952
    }
=======
>>>>>>> origin/cursor/create-and-deploy-new-content-7d6d
  }
};

export default productionLogger;