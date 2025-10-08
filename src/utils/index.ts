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
<<<<<<< HEAD
<<<<<<< HEAD
  sanitizeHtml as sanitizeInput, 
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6ad8
  escapeHtml, 
  isValidEmail as isValidEmailFromSecurity,
  isValidUrl as isValidUrlFromSecurity,
=======
  sanitizeInput, 
=======
  sanitizeHtml as sanitizeInput, 
  escapeHtml, 
>>>>>>> cursor/fix-errors-and-merge-to-main-5f6c
  isValidEmail as isValidEmailFromSecurity,
  isValidUrl as isValidUrlFromSecurity
} from './validation';

export { 
  escapeHtml,
>>>>>>> cursor/fix-errors-and-merge-to-main-b1a4
  isValidPhone
} from './security';

export { 
  validateEmail as validateForm, 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-5f6c
  validateRequired as validateField,
  isValidEmail,
  isValidUrl,
  validatePhone as isValidPhone 
<<<<<<< HEAD
=======
  validateEmail as validateField,
  isValidEmail,
  isValidUrl,
  sanitizeInput
>>>>>>> cursor/fix-errors-and-merge-to-main-6ad8
=======
  validateRequired as validateField,
  isValidEmail,
  isValidUrl
>>>>>>> cursor/fix-errors-and-merge-to-main-b1a4
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-5f6c
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
