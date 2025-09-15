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
=======
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
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
<<<<<<< HEAD
>>>>>>> cursor/create-and-deploy-new-content-d952
=======
>>>>>>> 2ad069e84825dabaf46d071e81e10e505f57815a
    }
  }
};

export default productionLogger;