/**
 * Central export point for all utility modules
 */

export * from './analytics';
export * from './errorHandler';
export * from './performanceOptimizer';
export * from './security';
// Export validation utilities explicitly to avoid conflicts with security
export {
  isDefined,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isArray,
  isFunction,
  isEmpty,
  isEmptyObject,
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
  isValidUuid
} from './validation';
export * from './cache';
export * from './logger';
export * from './api';
export * from './hooks';

// Default exports
export { default as analytics } from './analytics';
// Note: errorHandler has no default export, use named import instead
export { default as performanceOptimizer } from './performanceOptimizer';
export { default as securityUtils } from './security';
export { default as validationUtils } from './validation';
export { default as cacheUtils } from './cache';
export { default as logger } from './logger';
export { default as apiUtils } from './api';
export { default as hooksUtils } from './hooks';
