/**
 * Production-safe logging utility
 * Automatically removes console logs in production builds
 */

interface Logger {
  log: (...args: any[]) => void;
  warn: (...args: any[]) => void;
  error: (...args: any[]) => void;
  info: (...args: any[]) => void;
  debug: (...args: any[]) => void;
}

const isDevelopment = process.env.NODE_ENV === 'development';
const isDebugMode = typeof window !== 'undefined' && localStorage.getItem('debug-performance') === 'true';

const createLogger = (): Logger => {
  const shouldLog = isDevelopment || isDebugMode;
  
  return {
    log: shouldLog ? console.log.bind(console) : () => {},
    warn: shouldLog ? console.warn.bind(console) : () => {},
    error: console.error.bind(console), // Always log errors
    info: shouldLog ? console.info.bind(console) : () => {},
    debug: shouldLog ? console.debug.bind(console) : () => {},
  };
};

const logger = createLogger();

export default logger;