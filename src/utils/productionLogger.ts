export const logErrorToProduction = (message: string, error?: Error, context?: Record<string, any>) => {
  console.error('Production Error:', message, error, context);
  // In a real implementation, this would send to a logging service
};