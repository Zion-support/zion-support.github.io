// Production logging utility
export const logErrorToProduction = (error: Error, context?: string) => {
  // In production, you might want to send errors to a logging service
  // For now, we'll just log to console
  if (process.env.NODE_ENV === 'production') {
    console.error('Production Error:', {
      message: error.message,
      stack: error.stack,
      context,
      timestamp: new Date().toISOString()
    });
  } else {
    console.error('Development Error:', error);
  }
};

export const logInfoToProduction = (message: string, data?: any) => {
  if (process.env.NODE_ENV === 'production') {
    console.log('Production Info:', {
      message,
      data,
      timestamp: new Date().toISOString()
    });
  } else {
    console.log('Development Info:', message, data);
  }
};

export const logWarningToProduction = (message: string, data?: any) => {
  if (process.env.NODE_ENV === 'production') {
    console.warn('Production Warning:', {
      message,
      data,
      timestamp: new Date().toISOString()
    });
  } else {
    console.warn('Development Warning:', message, data);
  }
};