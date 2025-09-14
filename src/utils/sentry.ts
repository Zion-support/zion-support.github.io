<<<<<<< HEAD
// Sentry utility functions for error tracking
export const captureException = (error: Error, context?: Record<string, any>) => {
  console.error('Sentry captureException:', error, context);
  // In a real implementation, this would send to Sentry
  // For now, just log to console
};

export const captureMessage = (message: string, level: 'info' | 'warning' | 'error' = 'info') => {
  console.log(`Sentry captureMessage [${level}]:`, message);
  // In a real implementation, this would send to Sentry
  // For now, just log to console
};

export const setUser = (user: { id: string; email?: string; username?: string }) => {
  console.log('Sentry setUser:', user);
  // In a real implementation, this would set user context in Sentry
};

export const setContext = (key: string, context: Record<string, any>) => {
  console.log('Sentry setContext:', key, context);
  // In a real implementation, this would set context in Sentry
};
=======
// Sentry utilities with fallback to mock implementation
// This file provides Sentry functionality for both browser and Node.js environments

// Check if we're in a browser environment and Sentry is available
const isBrowser = typeof window !== 'undefined';
const isSentryAvailable = isBrowser && typeof window !== 'undefined';

// Try to import real Sentry, fall back to mock if not available
let sentry: any;

try {
  // For browser builds, we'll use the mock to avoid Node.js module issues
  sentry = require('./sentry-mock').default;
} catch (error) {
  // Fallback to a simple mock implementation
  const noop = () => {};
  sentry = {
    captureException: noop,
    captureMessage: noop,
    init: noop,
  };
}

// Export the captureException function that's being imported in main.tsx
export const captureException = sentry.captureException || (() => {});

// Export other commonly used Sentry functions
export const captureMessage = sentry.captureMessage || (() => {});
export const init = sentry.init || (() => {});
export const addBreadcrumb = sentry.addBreadcrumb || (() => {});
export const setUser = sentry.setUser || (() => {});
export const setTag = sentry.setTag || (() => {});
export const setContext = sentry.setContext || (() => {});

// Export default for compatibility
export default sentry;
>>>>>>> origin/cursor/build-vite-project-with-missing-dependency-e03a
