// Simple production logger utility
export const logErrorToProduction = (message, error) => {
  // In production, you might want to send this to a logging service
  // For now, we'll just log to console in development
  if (process.env.NODE_ENV === 'development') {
<<<<<<< HEAD
    console.error(message, error);
  }

=======
    // // // // // // // // // // // // // // // // // // // // // // // // // // // // console.error(message, error);
  }
    // // // // // // // // // // // // // // // // // // // // // // // // // console.error(message, error);
  }
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  // You can add production logging here:
  // - Sentry
  // - LogRocket
  // - Custom logging service
  // - Analytics service
};

export const logInfoToProduction = (message, data) => {
  if (process.env.NODE_ENV === 'development') {
    console.info(message, data);
  }
};

export const logWarningToProduction = (message, data) => {
  if (process.env.NODE_ENV === 'development') {
    console.warn(message, data);
  }
};

export default {
  logError: logErrorToProduction,
  logInfo: logInfoToProduction,
  logWarning: logWarningToProduction
};