// Simple production logger utility
export const logErrorToProduction = (message, error) => {
  // In production, you might want to send this to a logging service
  // For now, we'll just log to console in development
  if (process.env.NODE_ENV === 'development') {
<<<<<<< HEAD
    // // // console.error(message, error);
=======
    // // // // // // // console.error(message, error);
  }
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2

  // You can add production logging here:
  // - Sentry
  // - LogRocket
  // - Custom logging service
  // - Analytics service
};
}