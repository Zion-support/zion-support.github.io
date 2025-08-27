// Simple production logger
export const logErrorToProduction = (message, error) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(message, error);
  }
  // In production, this could send to a logging service
  // For now, just console.error in development
};
=======
export const logErrorToProduction = (message, error) => {
    // In production, you might want to send this to a logging service
    // For now, we'll just console.error in development
    if (process.env.NODE_ENV === 'development') {
        console.error(message, error);
    }
};
