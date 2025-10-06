/**
 * Error handling utilities
 */

export const errorHandler = {
  log: (error: Error, context?: string) => {
    console.error('Error:', error.message, context ? `Context: ${context}` : '');
    // In a real implementation, this would send error data to monitoring service
  },
  
  report: (error: Error, context?: string) => {
    console.error('Error reported:', error.message, context ? `Context: ${context}` : '');
    // In a real implementation, this would send error data to error reporting service
  }
};
