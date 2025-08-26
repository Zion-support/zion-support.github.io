export const productionLogger = {
  log: (...args: any[]) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(...args);
    }
  },
  warn: (...args: any[]) => {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(...args);
    }
  },
  error: (...args: any[]) => {
    if (process.env.NODE_ENV !== 'production') {
      console.error(...args);
    }
  },
  info: (...args: any[]) => {
    if (process.env.NODE_ENV !== 'production') {
      console.info(...args);
    }
  },
  debug: (...args: any[]) => {
    if (process.env.NODE_ENV !== 'production') {
      console.debug(...args);
    }
  }
};

export const logErrorToProduction = (error: any, context?: string) => {
  if (process.env.NODE_ENV === 'production') {
    // In production, you might want to send errors to a logging service
    console.error('Production Error:', { error, context, timestamp: new Date().toISOString() });
  } else {
    console.error('Development Error:', { error, context });
  }
};