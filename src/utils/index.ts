/**
 * Central export point for all utility modules
 */

export * from './analytics';
export * from './performanceOptimizer';
export * from './cache';
export * from './logger';
export * from './api';
export * from './hooks';

// Export specific items from security and validation to avoid conflicts
export {
  sanitizeHtml,
  isValidUrl as isSecureUrl,
  isValidEmail as isSecureEmail,
  isInternalUrl,
  escapeHtml,
  generateCSP,
  isValidPhone,
  RateLimiter,
  CSRFProtection,
  SecureStorage,
} from './security';

export {
  validateEmail,
  validatePhone,
  validateURL,
  validateLength,
  validateRequired,
  validateNumberRange,
  validatePassword,
  validateDate,
  validateCreditCard,
  validateJSON,
  validateComposite,
  validateAsync,
  sanitizeHTML,
  sanitizeInput,
  type ValidationResult,
} from './validation';

// Export errorHandler module items individually
export {
  ErrorSeverity,
  ErrorCategory,
  type ErrorInfo,
  default as ErrorHandler,
} from './errorHandler';

// Default exports
export { default as analytics } from './analytics';
export { default as performanceOptimizer } from './performanceOptimizer';
export { default as securityUtils } from './security';
export { default as cacheUtils } from './cache';
export { default as logger } from './logger';
export { default as apiUtils } from './api';
export { default as hooksUtils } from './hooks';