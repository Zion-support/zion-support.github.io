// Error handling utilities
export const errorHandler = {
  log: (error: Error, context?: string) => {
    console.error(`Error${context ? ` in ${context}` : ''}:`, error);
  },
  
  report: (error: Error, context?: string) => {
    // In a real application, this would send errors to a monitoring service
    console.error(`Reported error${context ? ` in ${context}` : ''}:`, error);
  }
};