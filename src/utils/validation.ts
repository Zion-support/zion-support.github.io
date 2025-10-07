/**
 * Type guards and validation utilities
 */

/**
 * Check if value is defined (not null or undefined)
 */
export const isDefined = <T>(value: T | null | undefined): value is T => {
  return value !== null && value !== undefined;
};

/**
 * Check if value is a string
 */
export const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

/**
 * Check if value is a number
 */
export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number' && !isNaN(value);
};

/**
 * Check if value is a boolean
 */
export const isBoolean = (value: unknown): value is boolean => {
  return typeof value === 'boolean';
};

/**
 * Check if value is an object (not null or array)
 */
export const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
};

/**
 * Check if value is an array
 */
export const isArray = <T = unknown>(value: unknown): value is T[] => {
  return Array.isArray(value);
};

/**
 * Check if value is a function
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const isFunction = (value: unknown): value is Function => {
  return typeof value === 'function';
};

/**
 * Check if string is empty or only whitespace
 */
export const isEmpty = (value: string): boolean => {
  return !value || value.trim().length === 0;
};

/**
 * Check if object has no properties
 */
export const isEmptyObject = (value: Record<string, unknown>): boolean => {
  return Object.keys(value).length === 0;
};

/**
 * Validate required fields in an object
 */
export const validateRequiredFields = <T extends Record<string, unknown>>(
  obj: T,
  requiredFields: (keyof T)[]
): { valid: boolean; missing: (keyof T)[] } => {
  const missing = requiredFields.filter(field => !isDefined(obj[field]));
  return {
    valid: missing.length === 0,
    missing,
  };
};

/**
 * Type guard for Error objects
 */
export const isError = (value: unknown): value is Error => {
  return value instanceof Error;
};

/**
 * Validate string length
 */
export const isValidLength = (
  value: string,
  min: number,
  max: number
): boolean => {
  const length = value.length;
  return length >= min && length <= max;
};

/**
 * Validate numeric range
 */
export const isInRange = (value: number, min: number, max: number): boolean => {
  return value >= min && value <= max;
};

/**
 * Type-safe JSON parse
 */
export const safeParse = <T>(
  json: string,
  fallback: T
): T => {
  try {
    const parsed = JSON.parse(json);
    return parsed as T;
  } catch {
    return fallback;
  }
};

/**
 * Assert never (for exhaustive checks in switch/if statements)
 */
export const assertNever = (value: never): never => {
  throw new Error(`Unexpected value: ${JSON.stringify(value)}`);
};

/**
 * Safe array access with fallback
 */
export const safeArrayAccess = <T>(
  array: T[],
  index: number,
  fallback: T
): T => {
  return array[index] ?? fallback;
};

/**
 * Safe object property access
 */
export const safeGet = <T, K extends keyof T>(
  obj: T,
  key: K,
  fallback: T[K]
): T[K] => {
  return obj[key] ?? fallback;
};

/**
 * Validate email format with RFC 5322 compliance
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
};

/**
 * Validate URL format
 */
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Type guard for checking if value has a specific property
 */
export const hasProperty = <T extends object, K extends PropertyKey>(
  obj: T,
  key: K
): obj is T & Record<K, unknown> => {
  return key in obj;
};

/**
 * Validate date string
 */
export const isValidDate = (dateString: string): boolean => {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date.getTime());
};

/**
 * Check if value is a valid JSON string
 */
export const isValidJson = (str: string): boolean => {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
};

/**
 * Validate hex color code
 */
export const isValidHexColor = (color: string): boolean => {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
};

/**
 * Validate UUID
 */
export const isValidUuid = (uuid: string): boolean => {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(uuid);
};

export const validationUtils = {
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
  isValidEmail,
  isValidUrl,
  hasProperty,
  isValidDate,
  isValidJson,
  isValidHexColor,
  isValidUuid,
};

export default validationUtils;
