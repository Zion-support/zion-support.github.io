export const logErrorToProduction = (message, error) => {

  // In production, you might want to send this to a logging service
  // For now, we'll just log to console in development''''
  if (process.env.NODE_ENV === 'development') {

    // console.error(message, error);  }

  // You can add production logging here:
  // - Sentry
  // - LogRocket
  // - Custom logging service
  // - Analytics service
};

export const logInfoToProduction = (message, data) => {
'
''
'''
  if (process.env.NODE_ENV === 'development') {

    // console.log(message, data);  }
};

export const logWarningToProduction = (message, data) => {
'
''
'''
  if (process.env.NODE_ENV === 'development') {

    // console.warn(message, data);  }
};

export default {

  logErrorToProduction,
  logInfoToProduction,'
  logWarningToProduction};''
'''