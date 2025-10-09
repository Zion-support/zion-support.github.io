'use client';
/**
 * Validation Utilities
 * Provides common validation functions for forms and data
 */
export interface ValidationResult {
  // TODO: Add content
}
  isValid: boolean;
  errors: string[];
}
/**
 * Email validation regex pattern
 */
const _EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/**
 * Phone number validation regex (US format)
 */
const PHONE_REGEX = /^(\+1\s?)?(\([0-9]{3}\)|[0-9]{3})[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/;
/**
 * URL validation regex
 */
const URL_REGEX = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
/**
 * Validate email address
 */
export function isValidEmail(email: string): boolean {
  // TODO: Add content
}
  return EMAIL_REGEX.test(email.trim());
}
/**
 * Validate phone number
 */
export function isValidPhone(phone: string): boolean {
  // TODO: Add content
}
  return PHONE_REGEX.test(phone.trim());
}
/**
 * Validate URL
 */
export function isValidUrl(url: string): boolean {
  // TODO: Add content
}
  return URL_REGEX.test(url.trim());
}
/**
 * Validate required field
 */
export function isRequired(value: string | null | undefined): boolean {
  // TODO: Add content
}
  if (value === null || value === undefined) {
  // TODO: Add content
}
    return false;
  }
  return value.toString().trim().length > 0;
}
/**
 * Validate minimum length
 */
export function minLength(value: string, min: number): boolean {
  // TODO: Add content
}
  return value.trim().length >= min;
}
/**
 * Validate maximum length
 */
export function maxLength(value: string, max: number): boolean {
  // TODO: Add content
}
  return value.trim().length <= max;
}
/**
 * Validate string contains only alphanumeric characters
 */
export function isAlphanumeric(value: string): boolean {
  // TODO: Add content
}
  return /^[a-zA-Z0-9]+$/.test(value);
}
/**
 * Validate string contains only letters
 */
export function isAlpha(value: string): boolean {
  // TODO: Add content
}
  return /^[a-zA-Z]+$/.test(value);
}
/**
 * Validate string contains only numbers
 */
export function isNumeric(value: string): boolean {
  // TODO: Add content
}
  return /^[0-9]+$/.test(value);
}
/**
 * Validate password strength
 * Requirements: at least 8 characters, 1 uppercase, 1 lowercase, 1 number
 */
export function isStrongPassword(password: string): boolean {
  // TODO: Add content
}
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
  // TODO: Add content
}
  let _score = 0;
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
  // TODO: Add content
}
  const cleaned = cardNumber.replace(/\s/g, '');
  if (!/^\d{13,19}$/.test(cleaned)) {
  // TODO: Add content
}
    return false;
  }
  let sum = 0;
  let isEven = false;
  for (let i = cleaned.length - 1; i >= 0; i--) {
  // TODO: Add content
}
    let digit = parseInt(cleaned.charAt(i), 10);
    if (isEven) {
  // TODO: Add content
}
      digit *= 2;
      if (digit > 9) {
  // TODO: Add content
}
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
  // TODO: Add content
}
  return /^\d{5}(-\d{4})?$/.test(zipCode);
}
/**
 * Sanitize HTML to prevent XSS
 */
export function sanitizeHtml(html: string): string {
  // TODO: Add content
}
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
}
/**
 * Validate object against schema
 */
export function validateObject<T extends Record<string, unknown>>(
  // TODO: Add parameters,
)
  obj: T,
  schema: Record<keyof T, (value: unknown) => boolean>
): ValidationResult {
  // TODO: Add content
}
  const errors: string[] = [];
  for (const key in schema) {
  // TODO: Add content
}
    const validator = schema[key];
    const value = obj[key];
    if (!validator(value)) {
  // TODO: Add content
}
      errors.push(`Invalid value for field: ${String(key)}`);
    }
  }
  return {
  // TODO: Add content
}
    isValid: errors.length === 0,
//     errors
  };
}
/**
 * Validate form data
 */
export interface FormField {
  // TODO: Add content
}
  value: string;
  validators: Array<{
  // TODO: Add content
}
    validate: (value: string) => boolean;
    message: string;
  }>;
}
export function validateForm(
  // TODO: Add parameters,
)
  fields: Record<string, FormField>
): Record<string, string[]> {
  // TODO: Add content
}
  const errors: Record<string, string[]> = {};
  for (const fieldName in fields) {
  // TODO: Add content
}
    const field = fields[fieldName];
    const fieldErrors: string[] = [];
    for (const validator of field.validators) {
  // TODO: Add content
}
      if (!validator.validate(field.value)) {
  // TODO: Add content
}
        fieldErrors.push(validator.message);
      }
    }
    if (fieldErrors.length > 0) {
  // TODO: Add content
}
      errors[fieldName] = fieldErrors;
    }
  }
  return errors;
}
/**
 * Common form validators
 */
export const validators = {
  // TODO: Add content
}
  required: (message = 'This field is required') => ({
  // TODO: Add content
}
    validate: isRequired,
//     message
  }),
  email: (message = 'Please enter a valid email address') => ({
  // TODO: Add content
}
    validate: isValidEmail,
//     message
  }),
  phone: (message = 'Please enter a valid phone number') => ({
  // TODO: Add content
}
    validate: isValidPhone,
//     message
  }),
  minLength: (min: number, message = `Minimum length is ${min} characters`) => ({
  // TODO: Add content
}
    validate: (value: string) => minLength(value, min),
//     message
  }),
  maxLength: (max: number, message = `Maximum length is ${max} characters`) => ({
  // TODO: Add content
}
    validate: (value: string) => maxLength(value, max),
//     message
  }),
  password: (message = 'Password must be at least 8 characters with uppercase, lowercase, and number') => ({
  // TODO: Add content
}
    validate: isStrongPassword,
//     message
  })
};