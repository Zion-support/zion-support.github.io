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