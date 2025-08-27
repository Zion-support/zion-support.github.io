// Simple production logger
export const logErrorToProduction = (message, error) => {
  if (process.env.NODE_ENV === 'development') {
    console.error(message, error);
  }
  // In production, this could send to a logging service
  // For now, just console.error in development
};