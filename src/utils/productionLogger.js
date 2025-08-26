// Production logger - minimal logging for production builds
export const logger = {
  info: () => {},
  warn: () => {},
  error: () => {},
  debug: () => {},
  log: () => {}
};

export const logErrorToProduction = (error, context = '') => {
  // In production, we might want to send errors to a monitoring service
  // For now, just log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error(`Production Error in ${context}:`, error);
  }
};

export default logger;