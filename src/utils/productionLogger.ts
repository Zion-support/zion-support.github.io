export function logErrorToProduction(message: string, error?: any): void {
  // In production, we might want to send errors to a logging service
  // For now, just console.error in development
  if (process.env.NODE_ENV === 'development') {
    console.error(message, error);
  }
  // TODO: Implement production error logging service
}