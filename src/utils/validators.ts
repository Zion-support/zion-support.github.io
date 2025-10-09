'use client';
/**
 * Validation Utilities
 * Provides common validation functions for forms and data
 */
export interface ValidationResult {
  isValid: boolean;
  error?: string;
  errors?: string[];
}
/**
 * Email validation regex pattern
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/**
 * Phone number validation regex (US format)
 */
const PHONE_REGEX = /^(\+1\s?)?(\([0-9]{3}\)|[0-9]{3})[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/;
/**
 * URL validation regex
 */
const URL_REGEX = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-?=&]*)*\/?$/;
/**
 * Validate email address
 */
export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.trim());
}
/**
 * Validate phone number
 */
export function isValidPhone(phone: string): boolean {
  return PHONE_REGEX.test(phone.trim());
}
/**
 * Validate URL
 */
export function isValidUrl(url: string): boolean {
  return URL_REGEX.test(url.trim());
}
/**
 * Validate required field
 */
export function isRequired(value: string | null | undefined): boolean {
  if (value === null || value === undefined) {
    return false;
  }
  return value.toString().trim().length > 0;
}
/**
 * Validate minimum length
 */
export function minLength(value: string, min: number): boolean {
  return value.trim().length >= min;
}
/**
 * Validate maximum length
 */
export function maxLength(value: string, max: number): boolean {
  return value.trim().length <= max;
}
/**
 * Validate string contains only alphanumeric characters
 */
export function isAlphanumeric(value: string): boolean {
  return /^[a-zA-Z0-9]+$/.test(value);
}
/**
 * Validate string contains only letters
 */
export function isAlpha(value: string): boolean {
  return /^[a-zA-Z]+$/.test(value);
}
/**
 * Validate string contains only numbers
 */
export function isNumeric(value: string): boolean {
  return /^[0-9]+$/.test(value);
}
/**
 * Validate password strength
 * Requirements: at least 8 characters, 1 uppercase, 1 lowercase, 1 number
 */
export function isStrongPassword(password: string): boolean {
  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  return hasMinLength && hasUpperCase && hasLowerCase && hasNumber;
}
/**
 * Get password strength score (0-4)
 */
export function getPasswordStrength(password: string): number {
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;
  return Math.min(score, 4);
}
/**
 * Validate credit card number using Luhn algorithm
 */
export function isValidCreditCard(cardNumber: string): boolean {
  const cleaned = cardNumber.replace(/\s/g, '');
  if (!/^\d{13,19}$/.test(cleaned)) {
    return false;
  }
  let sum = 0;
  let isEven = false;
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned.charAt(i), 10);
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    isEven = !isEven;
  }
  return sum % 10 === 0;
}
/**
 * Validate US ZIP code
 */
export function isValidZipCode(zipCode: string): boolean {
  return /^\d{5}(-\d{4})?$/.test(zipCode);
}
/**
 * Sanitize HTML to prevent XSS
 */
export function sanitizeHtml(html: string): string {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
}
/**
 * Validate object against schema
 */
export function validateObject<T extends Record<string, unknown>>(
  obj: T,
  schema: Record<keyof T, (value: unknown) => boolean>
): ValidationResult {
  const errors: string[] = [];
  for (const key in schema) {
    const validator = schema[key];
    const value = obj[key];
    if (!validator(value)) {
      errors.push(`Invalid value for field: ${String(key)}`);
    }
  }
  return {
    isValid: errors.length === 0,
    errors
  };
}
/**
 * Validate form data
 */
export interface FormField {
  value: string;
  validators: Array<{
    validate: (value: string) => boolean;
    message: string;
  }>;
}
export function validateForm(
  fields: Record<string, FormField>
): Record<string, string[]> {
  const errors: Record<string, string[]> = {};
  for (const fieldName in fields) {
    const field = fields[fieldName];
    const fieldErrors: string[] = [];
    for (const validator of field.validators) {
      if (!validator.validate(field.value)) {
        fieldErrors.push(validator.message);
      }
    }
    if (fieldErrors.length > 0) {
      errors[fieldName] = fieldErrors;
    }
  }
  return errors;
}
/**
 * Common form validators
 */
export const validators = {
  required: (message = 'This field is required') => ({
    validate: isRequired,
    message
  }),
  email: (message = 'Please enter a valid email address') => ({
    validate: isValidEmail,
    message
  }),
  phone: (message = 'Please enter a valid phone number') => ({
    validate: isValidPhone,
    message
  }),
  minLength: (min: number, message = `Minimum length is ${min} characters`) => ({
    validate: (value: string) => minLength(value, min),
    message
  }),
  maxLength: (max: number, message = `Maximum length is ${max} characters`) => ({
    validate: (value: string) => maxLength(value, max),
    message
  }),
  password: (message = 'Password must be at least 8 characters with uppercase, lowercase, and number') => ({
    validate: isStrongPassword,
    message
  })
};

// Additional validation functions for tests
export function validateEmail(email: string): ValidationResult {
  if (!email || email.length > 254) {
    return { isValid: false, error: 'Email is too long' };
  }
  return { isValid: isValidEmail(email), error: isValidEmail(email) ? undefined : 'Invalid email format' };
}

export function validateURL(url: string): ValidationResult {
  return { isValid: isValidUrl(url), error: isValidUrl(url) ? undefined : 'Invalid URL format' };
}

export function validateLength(value: string, min: number, max: number, fieldName = 'Field'): ValidationResult {
  if (value.length < min) {
    return { isValid: false, error: `${fieldName} must be at least ${min} characters long` };
  }
  if (value.length > max) {
    return { isValid: false, error: `${fieldName} must be no more than ${max} characters long` };
  }
  return { isValid: true };
}

export function validatePassword(password: string): ValidationResult {
  if (password.length < 8) {
    return { isValid: false, error: 'Password must be at least 8 characters long' };
  }
  if (password.length > 128) {
    return { isValid: false, error: 'Password must be no more than 128 characters long' };
  }
  if (!/[A-Z]/.test(password)) {
    return { isValid: false, error: 'Password must contain at least one uppercase letter' };
  }
  if (!/[a-z]/.test(password)) {
    return { isValid: false, error: 'Password must contain at least one lowercase letter' };
  }
  if (!/[0-9]/.test(password)) {
    return { isValid: false, error: 'Password must contain at least one number' };
  }
  if (!/[^a-zA-Z0-9]/.test(password)) {
    return { isValid: false, error: 'Password must contain at least one special character' };
  }
  return { isValid: true };
}

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

export function sanitizeInput(input: string | null | undefined, maxLength = 1000): string | null {
  if (input === null || input === undefined) return null;
  if (typeof input !== 'string') return null;
  
  // Trim whitespace
  let sanitized = input.trim();
  
  // Return null for empty strings
  if (sanitized.length === 0) return null;
  
  // Remove null bytes and other control characters
  sanitized = sanitized.replace(/\x00/g, '');
  
  // Enforce maximum length
  if (sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength);
  }
  
  return sanitized;
}

export function validateDate(dateString: string): ValidationResult {
  if (!dateString) {
    return { isValid: false, error: 'Date is required' };
  }
  // Check if it's a valid ISO date format (YYYY-MM-DD)
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    return { isValid: false, error: 'Date must be in YYYY-MM-DD format' };
  }
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return { isValid: false, error: 'Invalid date format' };
  }
  // Check if the date is valid (e.g., 2025-02-30 should be invalid)
  const [year, month, day] = dateString.split('-').map(Number);
  const testDate = new Date(year, month - 1, day);
  if (testDate.getFullYear() !== year || testDate.getMonth() !== month - 1 || testDate.getDate() !== day) {
    return { isValid: false, error: 'Invalid date' };
  }
  return { isValid: true };
}

export function validateCreditCard(cardNumber: string): ValidationResult {
  // Remove spaces and dashes for validation
  const cleaned = cardNumber.replace(/[\s-]/g, '');
  return { isValid: isValidCreditCard(cleaned), error: isValidCreditCard(cleaned) ? undefined : 'Invalid credit card number' };
}

export function validateJSON(jsonString: string): ValidationResult {
  if (!jsonString) {
    return { isValid: false, error: 'JSON string is required' };
  }
  try {
    JSON.parse(jsonString);
    return { isValid: true };
  } catch {
    return { isValid: false, error: 'Invalid JSON format' };
  }
}

export function validateComposite(value: unknown, validators: Array<(val: unknown) => ValidationResult>): ValidationResult {
  for (const validator of validators) {
    const result = validator(value);
    if (!result.isValid) {
      return result;
    }
  }
  return { isValid: true };
}

export function validateRequired(value: unknown, fieldName = 'Field'): ValidationResult {
  if (value === null || value === undefined) {
    return { isValid: false, error: `${fieldName} is required` };
  }
  if (typeof value === 'string' && value.trim().length === 0) {
    return { isValid: false, error: `${fieldName} is required` };
  }
  return { isValid: true };
}

export async function validateAsync(validator: (value: unknown) => Promise<ValidationResult>, value: unknown): Promise<ValidationResult> {
  try {
    return await validator(value);
  } catch (error) {
    return { isValid: false, error: error instanceof Error ? error.message : 'Validation failed' };
  }
}