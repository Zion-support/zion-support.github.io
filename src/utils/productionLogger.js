// Simple production logger utility
export const logErrorToProduction = (message, error) => {
  // In production, you might want to send this to a logging service
  // For now, we'll just log to console in development
  if (process.env.NODE_ENV === 'development') {
    // // // // // // // // // // // // // // // // // // // // // // // // // // // // console.error(message, error);
  }
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    // // // // // // // // // // // // // // // // // // // // // // // // // console.error(message, error);
  }
  // You can add production logging here:
  // - Sentry
  // - LogRocket
  // - Custom logging service
  // - Analytics service
};
}