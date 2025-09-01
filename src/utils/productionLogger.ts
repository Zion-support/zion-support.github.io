<<<<<<< HEAD
export function logErrorToProduction(message: string, error?: Error: unknown): void {
  // In production, we might want to send errors to a logging service

  // For now, just console.error in development
  if (process.env.NODE_ENV === 'development') {

    // console.error(message, error)}  // TODO: Implement production error logging service
}
=======
export function logErrorToProduction(message: string, error?: ): void {
  // In production, we might want to send errors to a logging service
<<<<<<< HEAD
  // For now, just console.error in development
  if (process.env.NODE_ENV === 'development') {
<<<<<<< HEAD
    // // // console.error(message, error);

=======
    // // // // // // // console.error(message, error);
=======
  // For now, just // // // // console.error in development
  if (process.env.NODE_ENV = == 'development') {;
    // // // // console.error(message, error);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
  }
>>>>>>> cursor/enhance-pm2-automations-for-app-development-edf2
  // TODO: Implement production error logging service
}}
>>>>>>> cursor/add-new-services-and-advertise-them-971c
