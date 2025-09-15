// Console error toast notifications
// This file provides global error handling with toast notifications

import { toast } from 'react-hot-toast';

// Global error handler for console errors
const originalConsoleError = console.error;

console.error = (...args) => {
  // Call original console.error
  originalConsoleError.apply(console, args);
  
  // Show toast notification for errors in development
  if (process.env.NODE_ENV === 'development') {
    const errorMessage = args.join(' ');
    toast.error(`Error: ${errorMessage}`);
  }
};

// Global unhandled error handler
window.addEventListener('error', (event) => {
  console.error('Unhandled error:', event.error);
  if (process.env.NODE_ENV === 'development') {
    toast.error(`Unhandled Error: ${event.error?.message || 'Unknown error'}`);
  }
});

// Global unhandled promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  if (process.env.NODE_ENV === 'development') {
    toast.error(`Unhandled Promise Rejection: ${event.reason?.message || 'Unknown error'}`);
  }
});

export default console.error;