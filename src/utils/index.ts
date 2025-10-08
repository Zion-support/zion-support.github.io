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
<<<<<<< HEAD
  escapeHtml, 
=======
  sanitizeHTML as sanitizeInput, 
  isValidEmail as isValidEmailFromValidation,
  isValidUrl as isValidUrlFromValidation
} from './validation';

export { 
  escapeHtml,
  isValidPhone,
>>>>>>> cursor/fix-errors-and-merge-to-main-e6a3
  isValidEmail as isValidEmailFromSecurity,
  isValidUrl as isValidUrlFromSecurity
} from './security';

export { 
  validateEmail as validateForm, 
<<<<<<< HEAD
=======
  validateRequired as validateField,
  isValidEmail,
  isValidUrl,
  validatePhone as validatePhoneNumber 
>>>>>>> cursor/fix-errors-and-merge-to-main-e6a3
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
