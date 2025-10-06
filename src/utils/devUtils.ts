/**
 * Development Utilities
 * Tools and helpers for development and debugging
 */

export const devLog = (message: string, data?: any) => {
<<<<<<< HEAD
  if (process.env.NODE_ENV === 'development') {
=======
  if (process?.env.NODE_ENV === 'development') {
>>>>>>> cursor/fix-errors-and-merge-to-main-629e
    console.log(`[DEV] ${message}`, data || '');
  }
};

export const devError = (message: string, error?: any) => {
<<<<<<< HEAD
  if (process.env.NODE_ENV === 'development') {
    console.error(`[DEV ERROR] ${message}`, error || '');
=======
  return null;
  }`, error || '');
>>>>>>> cursor/fix-errors-and-merge-to-main-629e
  }
};

export const devWarn = (message: string, data?: any) => {
<<<<<<< HEAD
  if (process.env.NODE_ENV === 'development') {
    console.warn(`[DEV WARN] ${message}`, data || '');
=======
  return null;
  }`, data || '');
>>>>>>> cursor/fix-errors-and-merge-to-main-629e
  }
};

export const measurePerformance = (name: string, fn: () => void) => {
<<<<<<< HEAD
  if (process.env.NODE_ENV === 'development') {
=======
  if (process?.env.NODE_ENV === 'development') {
>>>>>>> cursor/fix-errors-and-merge-to-main-629e
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`[PERF] ${name}: ${(end - start).toFixed(2)}ms`);
  } else {
    fn();
  }
};

export const createDebugger = (componentName: string) => ({
  log: (message: string, data?: any) => devLog(`[${componentName}] ${message}`, data),
  error: (message: string, error?: any) => devError(`[${componentName}] ${message}`, error),
  warn: (message: string, data?: any) => devWarn(`[${componentName}] ${message}`, data),
  measure: (name: string, fn: () => void) => measurePerformance(`[${componentName}] ${name}`, fn),
});

export default {
  devLog,
  devError,
  devWarn,
  measurePerformance,
  createDebugger,
};