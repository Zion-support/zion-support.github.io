/**
 * Central export point for all utility modules
 */

export * from './analytics';
export * from './errorHandler';
export * from './performanceOptimizer';
export * from './cache';
export * from './logger';
export * from './api';
export * from './hooks';

// Export security and validation separately to avoid conflicts
export { 
  sanitizeHtml as sanitizeInput, 
  escapeHtml, 
  isValidEmail as isValidEmailFromSecurity,
  isValidUrl as isValidUrlFromSecurity
} from './security';

export { 
  validateEmail,
  validatePhone,
  isValidEmail,
  isValidUrl
} from './validation';

// Default exports
export { default as analytics } from './analytics';
export { default as performanceOptimizer } from './performanceOptimizer';
export { default as securityUtils } from './security';
export { default as validationUtils } from './validation';
export { default as cacheUtils } from './cache';
export { default as logger } from './logger';
export { default as apiUtils } from './api';
export { default as hooksUtils } from './hooks';
export { default as ErrorHandler } from './errorHandler';
