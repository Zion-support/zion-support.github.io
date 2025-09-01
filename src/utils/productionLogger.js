export const logErrorToProduction = (message, error) => {
export const logInfoToProduction = (message, data) => {
export const logWarningToProduction = (message, data) => {
export default {


// Simple production logger utility
  // In production, you might want to send this to a logging service
  // For now, we'll just log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error (message, error) ;
  }

  // You can add production logging here:
  // - Sentry
  // - LogRocket
  // - Custom logging service
  // - Analytics service
};

  if (process.env.NODE_ENV === 'development') {
    console.log (message, data) ;
  }
};

  if (process.env.NODE_ENV === 'development') {
    console.warn (message, data) ;
  }
};

  logErrorToProduction,
  logInfoToProduction,
  logWarningToProduction,
};
