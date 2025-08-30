export function logErrorToProduction(message: string, error?: any): void {
  // In production, we might want to send errors to a logging service
  // For now, just console.error in development
  if (process.env.NODE_ENV === 'development') {
<<<<<<< HEAD
    // // // console.error(message, error);

=======
    // // // // // // // console.error(message, error);
  }
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
  // TODO: Implement production error logging service
}}