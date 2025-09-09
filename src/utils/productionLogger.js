// Simple production logging utility
export const logErrorToProduction = (error, context = '') => {
  if (process.env.NODE_ENV === 'production') {
    // In production, you might want to send this to a logging service
    console.error('Production Error:', { error: error?.message || error, context, timestamp: new Date().toISOString() });
  } else {
    console.error('Development Error:', error, context);
  }
};

export const logInfo = (message, data = {}) => {
  if (process.env.NODE_ENV === 'production') {
    console.info('Production Info:', { message, data, timestamp: new Date().toISOString() });
  } else {
    console.info('Development Info:', message, data);
  }
};

export const logWarn = (message, data = {}) => {
  if (process.env.NODE_ENV === 'production') {
    console.warn('Production Warning:', { message, data, timestamp: new Date().toISOString() });
  } else {
    console.warn('Development Warning:', message, data);
  }
};

export const logError = (error, context = '') => {
  logErrorToProduction(error, context);
};