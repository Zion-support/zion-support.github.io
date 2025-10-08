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
  isDefined,
  isString,
  isNumber,
  isBoolean,
  isArray,
  isObject,
  isFunction,
  isEmpty,
  isEmptyObject,
  isValidUrl,
  isValidEmail,
  validateRequiredFields,
  isError,
  isValidLength,
  isInRange,
  safeParse,
  assertNever,
  safeArrayAccess,
  safeGet,
  hasProperty,
  isValidDate,
  isValidJson,
  isValidHexColor,
  isValidUuid,
} from './validation';

// Export errorHandler module items individually
export {
  ErrorSeverity,
  ErrorCategory,
  type ErrorInfo,
} from './errorHandler';
export { default as errorHandler } from './errorHandler';
export { default as ErrorHandler } from './errorHandler';

// Default exports
export { default as analytics } from './analytics';
export { default as performanceOptimizer } from './performanceOptimizer';
export { default as securityUtils } from './security';
export { default as validationUtils } from './validation';
export { default as cacheUtils } from './cache';
export { default as logger } from './logger';
export { default as apiUtils } from './api';
export { default as hooksUtils } from './hooks';
