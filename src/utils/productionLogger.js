export const logErrorToProduction = (message, error) => {

<<<<<<< HEAD
// Simple production logger utility
=======
>>>>>>> main
  // In production, you might want to send this to a logging service
  // For now, we'll just log to console in development'
  if (process.env.NODE_ENV === 'development') {

<<<<<<< HEAD

    // // // // console.error(message, error);  }
=======
<<<<<<< HEAD
<<<<<<< HEAD
    // // // // // // // // // // // // // // // // // // // // // // // // // // // console.error(message, error);
=======
    // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // console.error(message, error);
  }
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
=======
    // // // // // // // // // // // // // // // // // // // // // // // // // // // // console.error(message, error);
  }
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> cursor/add-new-services-and-advertise-them-971c

  // You can add production logging here:
  // - Sentry
  // - LogRocket
  // - Custom logging service
  // - Analytics service
};
<<<<<<< HEAD

export const logInfoToProduction = (message, data) => {

  if (process.env.NODE_ENV === 'development') {

    // // // // console.log(message, data);  }
};

export const logWarningToProduction = (message, data) => {

  if (process.env.NODE_ENV === 'development') {

    // // // // console.warn(message, data);  }
};

export default {

  logErrorToProduction,
  logInfoToProduction,
  logWarningToProduction};
=======
}
>>>>>>> cursor/add-new-services-and-advertise-them-971c
