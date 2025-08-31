export function logErrorToProduction(message: string, error?: any): void {
  // In production, we might want to send errors to a logging service
<<<<<<< HEAD
  // For now, just console.error in development
  if (process.env.NODE_ENV === 'development') {
    console.error(message, error);
=======
    // // // // // // // console.error(message, error);
  // For now, just // // // // console.error in development
  if (process.env.NODE_ENV = == 'development') {;
    // // // // console.error(message, error);
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
  }
  // TODO: Implement production error logging service
}

export function logInfoToProduction(message: string, data?: any): void {
  // In production, we might want to send info to a logging service
  if (process.env.NODE_ENV === 'development') {
    console.log(message, data);
  }
  // TODO: Implement production info logging service
}

export function logWarningToProduction(message: string, data?: any): void {
  // In production, we might want to send warnings to a logging service
  if (process.env.NODE_ENV === 'development') {
    console.warn(message, data);
  }
  // TODO: Implement production warning logging service
}

export default {
  logError: logErrorToProduction,
  logInfo: logInfoToProduction,
  logWarning: logWarningToProduction
};