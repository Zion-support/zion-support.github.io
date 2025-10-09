// Enhanced Error Tracking Utility
export const errorTracker = {
  track: (error: Error, context?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error tracked:', error, context);
    }
  }
};