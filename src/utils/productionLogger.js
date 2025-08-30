// Simple production logger utility
export const logErrorToProduction = (message, error) => {
  // In production, you might want to send this to a logging service
  // For now, we'll just log to console in development
  if (process.env.NODE_ENV === 'development') {
<<<<<<< HEAD
<<<<<<< HEAD
    // // // // // // // // // // console.error(message, error);
=======
    // // // // // // // // // // // // // // console.error(message, error);
  }
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
    // // // // // // // // // // // console.error(message, error);
  }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

  // You can add production logging here:
  // - Sentry
  // - LogRocket
  // - Custom logging service
  // - Analytics service
};
}