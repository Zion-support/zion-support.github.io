// Production Logger Utility
// Provides logging functionality for production environment

const isDevelopment = process.env.NODE_ENV === 'development';

class ProductionLogger {
  constructor() {
    this.enabled = !isDevelopment;
  }

  log(message, data = null) {
    if (this.enabled) {
      console.log(`[Zion Production] ${message}`, data || '');
    }
  }

  error(message, error = null) {
    if (this.enabled) {
      console.error(`[Zion Production Error] ${message}`, error || '');
      
      // In production, you might want to send this to an error tracking service
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'exception', {
          description: message,
          fatal: false
        });
      }
    }
  }

  warn(message, data = null) {
    if (this.enabled) {
      console.warn(`[Zion Production Warning] ${message}`, data || '');
    }
  }

  info(message, data = null) {
    if (this.enabled) {
      console.info(`[Zion Production Info] ${message}`, data || '');
    }
  }

  // Track user actions for analytics
  track(eventName, parameters = {}) {
    if (this.enabled && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  }

  // Performance monitoring
  measure(name, fn) {
    if (this.enabled) {
      const start = performance.now();
      const result = fn();
      const duration = performance.now() - start;
      
      this.log(`Performance: ${name} took ${duration.toFixed(2)}ms`);
      
      // Track performance metrics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'timing_complete', {
          name: name,
          value: Math.round(duration)
        });
      }
      
      return result;
    }
    return fn();
  }

  // Log error to production (alias for error method)
  logErrorToProduction(message, error = null) {
    this.error(message, error);
  }
}

// Create singleton instance
const productionLogger = new ProductionLogger();

export default productionLogger;

// Export individual methods for convenience
export const log = (message, data) => productionLogger.log(message, data);
export const error = (message, error) => productionLogger.error(message, error);
export const warn = (message, data) => productionLogger.warn(message, data);
export const info = (message, data) => productionLogger.info(message, data);
export const track = (eventName, parameters) => productionLogger.track(eventName, parameters);
export const measure = (name, fn) => productionLogger.measure(name, fn);
export const logErrorToProduction = (message, error) => productionLogger.logErrorToProduction(message, error);