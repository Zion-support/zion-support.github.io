/**
 * Development Utilities
 * Tools and helpers for development and debugging
 */

export const devLog = (message: string, data?: any) => {
  if (process.env['NODE_ENV'] === 'development') {
    console.log(`[DEV] ${message}`, data || '');
  }
};

export const devError = (message: string, error?: any) => {
  if (process.env['NODE_ENV'] === 'development') {
    console.error(`[DEV ERROR] ${message}`, error || '');
  }
};

export const devWarn = (message: string, data?: any) => {
  if (process.env['NODE_ENV'] === 'development') {
    console.warn(`[DEV WARN] ${message}`, data || '');
  }
};

export const measurePerformance = (name: string, fn: () => void) => {
  if (process.env['NODE_ENV'] === 'development') {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`[PERF] ${name}: ${(end - start).toFixed(2)}ms`);
  } else {
    fn();
  }
};

export const createDebugger = (componentName: string) => ({
  log: (message: string, data?: any) =>
    devLog(`[${componentName}] ${message}`, data),
  error: (message: string, error?: any) =>
    devError(`[${componentName}] ${message}`, error),
  warn: (message: string, data?: any) =>
    devWarn(`[${componentName}] ${message}`, data),
  measure: (name: string, fn: () => void) =>
    measurePerformance(`[${componentName}] ${name}`, fn),
});

export default {
  devLog,
  devError,
  devWarn,
  measurePerformance,
  createDebugger,
};
