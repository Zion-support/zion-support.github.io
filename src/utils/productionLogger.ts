// Production-safe logging utility
export const productionLogger = {
  log: (...args: any[]) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(...args);
    }
  },
  
  error: (...args: any[]) => {
    if (process.env.NODE_ENV !== 'production') {
      console.error(...args);
    }
    // In production, you might want to send errors to a monitoring service
  },
  
  warn: (...args: any[]) => {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(...args);
    }
  },
  
  info: (...args: any[]) => {
    if (process.env.NODE_ENV !== 'production') {
      console.info(...args);
    }
  }
};

export default productionLogger;