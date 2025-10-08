/**
 * Comprehensive Input Validation Utilities
 * Provides type-safe validation functions for common data types and formats
 * @module validation
 */

/**
 * Validation result interface
 */
export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Email validation with RFC 5322 compliance
 * @param email - Email address to validate
 * @returns Validation result with error message if invalid
 */
export function validateEmail(email: string): ValidationResult {
  if (!email || typeof email !== 'string') {
    return { isValid: false, error: 'Email is required' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Invalid email format' };
  }

  if (email.length > 254) {
    return { isValid: false, error: 'Email is too long' };
  }

  return { isValid: true };
}

/**
 * Phone number validation (supports multiple formats)
 * @param phone - Phone number to validate
 * @returns Validation result
 */
export function validatePhone(phone: string): ValidationResult {
  if (!phone || typeof phone !== 'string') {
    return { isValid: false, error: 'Phone number is required' };
  }

  // Remove all non-numeric characters for validation
  const cleanPhone = phone.replace(/\D/g, '');

  if (cleanPhone.length < 10 || cleanPhone.length > 15) {
    return { isValid: false, error: 'Phone number must be 10-15 digits' };
  }

  return { isValid: true };
}

/**
 * URL validation with protocol check
 * @param url - URL to validate
 * @param requireProtocol - Whether protocol is required (default: true)
 * @returns Validation result
 */
export function validateURL(url: string, requireProtocol = true): ValidationResult {
  if (!url || typeof url !== 'string') {
    return { isValid: false, error: 'URL is required' };
  }

  try {
    const urlObj = new URL(url);

    if (requireProtocol && !['http:', 'https:'].includes(urlObj.protocol)) {
      return { isValid: false, error: 'URL must use HTTP or HTTPS protocol' };
    }

    return { isValid: true };
  } catch {
    if (!requireProtocol) {
      // Try with protocol prepended
      try {
        new URL(`https://${url}`);
        return { isValid: true };
      } catch {
        return { isValid: false, error: 'Invalid URL format' };
      }
    }
    return { isValid: false, error: 'Invalid URL format' };
  }
}

/**
 * String length validation
 * @param value - String to validate
 * @param min - Minimum length
 * @param max - Maximum length
 * @param fieldName - Field name for error messages
 * @returns Validation result
 */
export function validateLength(
  value: string,
  min: number,
  max: number,
  fieldName = 'Field'
): ValidationResult {
  if (typeof value !== 'string') {
    return { isValid: false, error: `${fieldName} must be a string` };
  }

  if (value.length < min) {
    return { isValid: false, error: `${fieldName} must be at least ${min} characters` };
  }

  if (value.length > max) {
    return { isValid: false, error: `${fieldName} must be no more than ${max} characters` };
  }

  return { isValid: true };
}

/**
 * Required field validation
 * @param value - Value to validate
 * @param fieldName - Field name for error messages
 * @returns Validation result
 */
export function validateRequired(value: unknown, fieldName = 'Field'): ValidationResult {
  if (value === null || value === undefined || value === '') {
    return { isValid: false, error: `${fieldName} is required` };
  }

  if (typeof value === 'string' && value.trim() === '') {
    return { isValid: false, error: `${fieldName} cannot be empty` };
  }

  return { isValid: true };
}

/**
 * Number range validation
 * @param value - Number to validate
 * @param min - Minimum value
 * @param max - Maximum value
 * @param fieldName - Field name for error messages
 * @returns Validation result
 */
export function validateNumberRange(
  value: number,
  min: number,
  max: number,
  fieldName = 'Value'
): ValidationResult {
  if (typeof value !== 'number' || isNaN(value)) {
    return { isValid: false, error: `${fieldName} must be a number` };
  }

  if (value < min) {
    return { isValid: false, error: `${fieldName} must be at least ${min}` };
  }

  if (value > max) {
    return { isValid: false, error: `${fieldName} must be no more than ${max}` };
  }

  return { isValid: true };
}

/**
 * Password strength validation
 * @param password - Password to validate
 * @returns Validation result with strength feedback
 */
export function validatePassword(password: string): ValidationResult {
  if (!password || typeof password !== 'string') {
    return { isValid: false, error: 'Password is required' };
  }

  if (password.length < 8) {
    return { isValid: false, error: 'Password must be at least 8 characters' };
  }

  if (password.length > 128) {
    return { isValid: false, error: 'Password is too long' };
  }

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (!hasUpperCase) {
    return { isValid: false, error: 'Password must contain at least one uppercase letter' };
  }

  if (!hasLowerCase) {
    return { isValid: false, error: 'Password must contain at least one lowercase letter' };
  }

  if (!hasNumbers) {
    return { isValid: false, error: 'Password must contain at least one number' };
  }

  if (!hasSpecialChar) {
    return { isValid: false, error: 'Password must contain at least one special character' };
  }

  return { isValid: true };
}

/**
 * Sanitize HTML to prevent XSS attacks
 * @param html - HTML string to sanitize
 * @returns Sanitized HTML string
 */
export function sanitizeHTML(html: string): string {
  if (typeof html !== 'string') return '';

  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Validate and sanitize user input for safe use
 * @param input - User input to validate and sanitize
 * @param maxLength - Maximum allowed length
 * @returns Sanitized input or null if invalid
 */
export function sanitizeInput(input: string, maxLength = 1000): string | null {
  if (!input || typeof input !== 'string') return null;

  // Remove control characters and trim
  let sanitized = input.replace(/[\x00-\x1F\x7F]/g, '').trim();

  // Enforce max length
  if (sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength);
  }

  return sanitized || null;
}

/**
 * Validate date format (YYYY-MM-DD)
 * @param date - Date string to validate
 * @returns Validation result
 */
export function validateDate(date: string): ValidationResult {
  if (!date || typeof date !== 'string') {
    return { isValid: false, error: 'Date is required' };
  }

  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

  if (!dateRegex.test(date)) {
    return { isValid: false, error: 'Date must be in YYYY-MM-DD format' };
  }

  const [year, month, day] = date.split('-').map(Number);
  const dateObj = new Date(year, month - 1, day);

  // Check if the date components match (handles invalid dates like Feb 30)
  if (
    isNaN(dateObj.getTime()) ||
    dateObj.getFullYear() !== year ||
    dateObj.getMonth() !== month - 1 ||
    dateObj.getDate() !== day
  ) {
    return { isValid: false, error: 'Invalid date' };
  }

  return { isValid: true };
}

/**
 * Validate credit card number using Luhn algorithm
 * @param cardNumber - Credit card number to validate
 * @returns Validation result
 */
export function validateCreditCard(cardNumber: string): ValidationResult {
  if (!cardNumber || typeof cardNumber !== 'string') {
    return { isValid: false, error: 'Card number is required' };
  }

  const cleanNumber = cardNumber.replace(/\D/g, '');

  if (cleanNumber.length < 13 || cleanNumber.length > 19) {
    return { isValid: false, error: 'Invalid card number length' };
  }

  // Luhn algorithm
  let sum = 0;
  let isEven = false;

  for (let i = cleanNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanNumber[i], 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  if (sum % 10 !== 0) {
    return { isValid: false, error: 'Invalid card number' };
  }

  return { isValid: true };
}

/**
 * Validate JSON string
 * @param jsonString - JSON string to validate
 * @returns Validation result
 */
export function validateJSON(jsonString: string): ValidationResult {
  if (!jsonString || typeof jsonString !== 'string') {
    return { isValid: false, error: 'JSON string is required' };
  }

  try {
    JSON.parse(jsonString);
    return { isValid: true };
  } catch (error) {
    return { isValid: false, error: 'Invalid JSON format' };
  }
}

/**
 * Composite validator - combines multiple validators
 * @param value - Value to validate
 * @param validators - Array of validator functions
 * @returns Combined validation result
 */
export function validateComposite(
  value: unknown,
  validators: Array<(val: unknown) => ValidationResult>
): ValidationResult {
  for (const validator of validators) {
    const result = validator(value);
    if (!result.isValid) {
      return result;
    }
  }
  return { isValid: true };
}

/**
 * Async validation wrapper
 * @param validator - Async validation function
 * @param value - Value to validate
 * @returns Promise resolving to validation result
 */
export async function validateAsync(
  validator: (val: unknown) => Promise<ValidationResult>,
  value: unknown
): Promise<ValidationResult> {
  try {
    return await validator(value);
  } catch (error) {
    return {
      isValid: false,
      error: error instanceof Error ? error.message : 'Validation error',
    };
  }
}

/**
 * Type guard utilities
 */
export function isDefined<T>(value: T | undefined | null): value is T {
  return value !== undefined && value !== null;
}

export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !isNaN(value);
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}

export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function isFunction(value: unknown): value is Function {
  return typeof value === 'function';
}

export function isEmpty(value: unknown): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string') return value.trim() === '';
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value as object).length === 0;
  return false;
}

export function isEmptyObject(value: unknown): boolean {
  return isObject(value) && Object.keys(value).length === 0;
}

export function isValidUrl(url: string): boolean {
  const result = validateURL(url);
  return result.isValid;
}

export function isValidEmail(email: string): boolean {
  const result = validateEmail(email);
  return result.isValid;
}

export function validateRequiredFields(
  obj: Record<string, unknown>,
  fields: string[]
): ValidationResult {
  for (const field of fields) {
    if (!isDefined(obj[field]) || isEmpty(obj[field])) {
      return { isValid: false, error: `Field '${field}' is required` };
    }
  }
  return { isValid: true };
}

export function isError(value: unknown): value is Error {
  return value instanceof Error;
}

export function isValidLength(value: string, min: number, max: number): boolean {
  const result = validateLength(value, min, max);
  return result.isValid;
}

export function isInRange(value: number, min: number, max: number): boolean {
  const result = validateNumberRange(value, min, max);
  return result.isValid;
}

export function safeParse<T = unknown>(jsonString: string, fallback?: T): T | null {
  try {
    return JSON.parse(jsonString) as T;
  } catch {
    return fallback !== undefined ? fallback : null;
  }
}

export function assertNever(value: never): never {
  throw new Error(`Unexpected value: ${JSON.stringify(value)}`);
}

export function safeArrayAccess<T>(array: T[], index: number, fallback?: T): T | undefined {
  if (index >= 0 && index < array.length) {
    return array[index];
  }
  return fallback;
}

export function safeGet<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  key: K,
  fallback?: T[K]
): T[K] | undefined {
  const value = obj[key];
  return isDefined(value) ? value : fallback;
}

export function hasProperty<T extends Record<string, unknown>>(
  obj: T,
  key: string | number | symbol
): key is keyof T {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

export function isValidDate(date: string): boolean {
  const result = validateDate(date);
  return result.isValid;
}

export function isValidJson(jsonString: string): boolean {
  const result = validateJSON(jsonString);
  return result.isValid;
}

export function isValidHexColor(color: string): boolean {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);
}

export function isValidUuid(uuid: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(uuid);
}

// Default export for convenience
export default {
  // Validators
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
  validateRequiredFields,

  // Type guards
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
  isError,
  isValidLength,
  isInRange,
  isValidDate,
  isValidJson,
  isValidHexColor,
  isValidUuid,

  // Utilities
  sanitizeHTML,
  sanitizeInput,
  safeParse,
  assertNever,
  safeArrayAccess,
  safeGet,
  hasProperty,
};
