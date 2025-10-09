/**
 * Console Cleanup Utility
 * Removes console statements in production builds
 */

export const cleanupConsole = () => {
  if (process.env.NODE_ENV === 'production') {
    // Override console methods in production
    const noop = () => {};
    
    console.log = noop;
    console.warn = noop;
    console.error = noop;
    console.info = noop;
    console.debug = noop;
    console.trace = noop;
    console.table = noop;
    console.group = noop;
    console.groupEnd = noop;
    console.groupCollapsed = noop;
    console.time = noop;
    console.timeEnd = noop;
    console.timeLog = noop;
    console.count = noop;
    console.countReset = noop;
    console.clear = noop;
    console.dir = noop;
    console.dirxml = noop;
    console.assert = noop;
  }
};

// Initialize console cleanup
if (typeof window !== 'undefined') {
  cleanupConsole();
}