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
    }
  }
};

export default productionLogger;