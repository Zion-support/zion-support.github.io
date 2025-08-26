// Production logger utility
export const productionLogger = {
  log: (...args: any[]) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(...args);
    }
  },
  error: (...args: any[]) => {
    if (process.env.NODE_ENV === 'development') {
      console.error(...args);
    }
  },
  warn: (...args: any[]) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn(...args);
    }
  },
  info: (...args: any[]) => {
    if (process.env.NODE_ENV === 'development') {
      console.info(...args);
    }
  }
};

export const logErrorToProduction = (error: any, context?: string) => {
  if (process.env.NODE_ENV === 'development') {
    console.error('Error logged to production:', { error, context });
  }
  // In production, this would send to a logging service
};