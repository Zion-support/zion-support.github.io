'use client'
/**
 * Validation Utilities;
 * Provides common validation functions for forms and data;
 */
<<<<<<< HEAD
export interface ValidationResult {
    // TODO: Add content
  }
=======
export interface ValidationResult {// TODO: Add content;}
};
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
  isValid: boolean;,
    errors: string[]
}
/**
 * Email validation regex pattern;
 */
/**
 * Phone number validation regex (US format)
 */
const PHONE_REGEX = /^(\+1\s?)?(\([0-9]{3}\)|[0-9]{3})[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/
/**
 * URL validation regex;
 */
const URL_REGEX = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*(\?[^#]*)?(#.*)?$/i
/**
 * Validate email address;
 */
<<<<<<< HEAD
export function isValidEmail(email: string): boolean {
    // TODO: Add content
  }
  return EMAIL_REGEX.test(email.trim())
=======
export function isValidEmail(email: string): boolean {// TODO: Add content;}
}
  return EMAIL_REGEX.test(email.trim());
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
}
/**
 * Validate phone number;
 */
<<<<<<< HEAD
export function isValidPhone(phone: string): boolean {
    // TODO: Add content
  }
  return PHONE_REGEX.test(phone.trim())
=======
export function isValidPhone(phone: string): boolean {// TODO: Add content;}
}
  return PHONE_REGEX.test(phone.trim());
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
}
/**
 * Validate URL;
 */
<<<<<<< HEAD
export function isValidUrl(url: string): boolean {
    // TODO: Add content
  }
  return URL_REGEX.test(url.trim())
=======
export function isValidUrl(url: string): boolean {// TODO: Add content;}
}
  return URL_REGEX.test(url.trim());
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
}
/**
 * Validate required field;
 */
<<<<<<< HEAD
export function isRequired(value: string | null | undefined): boolean {
    // TODO: Add content
=======
export function isRequired(value: string | null | undefined): boolean {// TODO: Add content;}
}
  if (value === null || value === undefined) {// TODO: Add content;}
}
    return false;
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
  }
  if (value === null || value === undefined) {
    // TODO: Add content
  }
    return false
  }
  return value.toString().trim().length > 0
}
/**
 * Validate minimum length;
 */
<<<<<<< HEAD
export function minLength(value: string, min: number): boolean {
    // TODO: Add content
  }
  return value.trim().length >= min
=======
export function minLength(value: string, min: number): boolean {// TODO: Add content;}
}
  return value.trim().length >= min;
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
}
/**
 * Validate maximum length;
 */
<<<<<<< HEAD
export function maxLength(value: string, max: number): boolean {
    // TODO: Add content
  }
  return value.trim().length 
          
          
          
          
          
          
          
          
          <= max
=======
export function maxLength(value: string, max: number): boolean {// TODO: Add content;}
}
  return value.trim().length;
          <= max;
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
}
/**
 * Validate string contains only alphanumeric characters;
 */
<<<<<<< HEAD
export function isAlphanumeric(value: string): boolean {
    // TODO: Add content
  }
  return /^[a-zA-Z0-9]+$/.test(value)
=======
export function isAlphanumeric(value: string): boolean {// TODO: Add content;}
}
  return /^[a-zA-Z0-9]+$/.test(value);
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
}
/**
 * Validate string contains only letters;
 */
<<<<<<< HEAD
export function isAlpha(value: string): boolean {
    // TODO: Add content
  }
  return /^[a-zA-Z]+$/.test(value)
=======
export function isAlpha(value: string): boolean {// TODO: Add content;}
}
  return /^[a-zA-Z]+$/.test(value);
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
}
/**
 * Validate string contains only numbers;
 */
<<<<<<< HEAD
export function isNumeric(value: string): boolean {
    // TODO: Add content
  }
  return /^[0-9]+$/.test(value)
=======
export function isNumeric(value: string): boolean {// TODO: Add content;}
}
  return /^[0-9]+$/.test(value);
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
}
/**
 * Validate password strength;
 * Requirements: at least 8 characters, 1 uppercase, 1 lowercase, 1 number;
 */
<<<<<<< HEAD
export function isStrongPassword(password: string): boolean {
    // TODO: Add content
  }
  const hasMinLength = password.length >= 8
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
=======
export function isStrongPassword(password: string): boolean {// TODO: Add content;}
}
  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.
          
          
          
          
          
          
          
          
          <>\/?]/.test(password)
  return hasMinLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar
}
/**
 * Get password strength score (0-4)
 */
<<<<<<< HEAD
export function getPasswordStrength(password: string): number {
  if (password.length >= 8) score++
  if (password.length >= 12) score++
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[^a-zA-Z0-9]/.test(password)) score++
  return Math.min(score, 4)
=======
export function getPasswordStrength(password: string): number {if (password.length >= 8) score++;}
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;
  return Math.min(score, 4);
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
}
/**
 * Validate credit card number using Luhn algorithm;
 */
<<<<<<< HEAD
export function isValidCreditCard(cardNumber: string): boolean {
    // TODO: Add content
  }
  const cleaned = cardNumber.replace(/\s/g, '')
  if (!/^\d{13,19}$/.test(cleaned)) {
    // TODO: Add content
  }
    return false
  }
  let sum = 0
  let isEven = false
  for (let i = cleaned.length - 1; i >= 0; i--) {
    // TODO: Add content
  }
    let digit = parseInt(cleaned.charAt(i), 10)
    if (isEven) {
    // TODO: Add content
  }
      digit *= 2
      if (digit > 9) {
    // TODO: Add content
  }
        digit -= 9
=======
export function isValidCreditCard(cardNumber: string): boolean {// TODO: Add content;}
}
  const cleaned = cardNumber.replace(/\s/g, '');
  if (!/^\d{13,19}$/.test(cleaned)) {// TODO: Add content;}
}
    return false;
  }
  let sum = 0;
  let isEven = false;
  for (let i = cleaned.length - 1; i >= 0; i--) {// TODO: Add content;}
}
    let digit = parseInt(cleaned.charAt(i), 10);
    if (isEven) {// TODO: Add content;}
}
      digit *= 2;
      if (digit > 9) {// TODO: Add content;}
}
        digit -= 9;
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
      }
    }
    sum += digit
    isEven = !isEven
  }
  return sum % 10 === 0
}
/**
 * Validate US ZIP code;
 */
<<<<<<< HEAD
export function isValidZipCode(zipCode: string): boolean {
    // TODO: Add content
  }
  return /^\d{5}(-\d{4})?$/.test(zipCode)
=======
export function isValidZipCode(zipCode: string): boolean {// TODO: Add content;}
}
  return /^\d{5}(-\d{4})?$/.test(zipCode);
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
}
/**
 * Sanitize HTML to prevent XSS;
 */
<<<<<<< HEAD
export function sanitizeHtml(html: string): string {
    // TODO: Add content
  }
  const div = document.createElement('div')
  div.textContent = html
  return div.innerHTML
=======
export function sanitizeHtml(html: string): string {// TODO: Add content;}
}
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
}
/**
 * Validate object against schema;
 */
export function validateObject;
          <T extends Record<string, unknown>>()
  obj: T,
  schema: Record;
          <keyof T, (value: unknown) => boolean>
<<<<<<< HEAD
): ValidationResult {
    // TODO: Add content
  }
  const errors: string[] = []
  for (const key in schema) {
    // TODO: Add content
  }
    const validator = schema[key]
    const value = obj[key]
    if (!validator(value)) {
    // TODO: Add content
  }
      errors.push(`Invalid value for field: ${String(key)}`)
    }
  }
  return {
    // TODO: Add content
  }
  isValid: errors.length === 0,
//     errors
  }
=======
): ValidationResult {// TODO: Add content;}
}
  const errors: string[] = [];
  for (const key in schema) {// TODO: Add content;}
}
    const validator = schema[key];
    const value = obj[key];
    if (!validator(value)) {// TODO: Add content;}
}
      errors.push(`Invalid value for field: ${String(key)}`);
    }
  }
  return {// TODO: Add content;}
};
  isValid: errors.length === 0,
//     errors;
  };
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
}
/**
 * Validate form data;
 */
<<<<<<< HEAD
export interface FormField {
    // TODO: Add content
  }
  value: string;,
    validators: Array
          
          
          
          
          
          
          
          
          <{
    // TODO: Add content
  }
=======
export interface FormField {// TODO: Add content;}
};
  value: string;,
    validators: Array;
          <{// TODO: Add content;}
};
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
  validate: (value: string) => boolean;,
    message: string
  }>
}
export function validateForm()
  fields: Record;
          <string, FormField>
<<<<<<< HEAD
): Record<string, string[]> {
    // TODO: Add content
  }
  const errors: Record
          
          
          
          
          
          
          
          
          <string, string[]> = {}
  for (const fieldName in fields) {
    // TODO: Add content
  }
    const field = fields[fieldName]
    const fieldErrors: string[] = []
    for (const validator of field.validators) {
    // TODO: Add content
  }
      if (!validator.validate(field.value)) {
    // TODO: Add content
  }
        fieldErrors.push(validator.message)
      }
    }
    if (fieldErrors.length > 0) {
    // TODO: Add content
  }
      errors[fieldName] = fieldErrors
=======
): Record<string, string[]> {// TODO: Add content;}
}
  const errors: Record;
          <string, string[]> = {};
  for (const fieldName in fields) {// TODO: Add content;}
}
    const field = fields[fieldName];
    const fieldErrors: string[] = [];
    for (const validator of field.validators) {// TODO: Add content;}
}
      if (!validator.validate(field.value)) {// TODO: Add content;}
}
        fieldErrors.push(validator.message);
      }
    }
    if (fieldErrors.length > 0) {// TODO: Add content;}
}
      errors[fieldName] = fieldErrors;
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
    }
  }
  return errors
}
/**
 * Common form validators;
 */
<<<<<<< HEAD
export const validators = {
    // TODO: Add content
  }
  required: (message = 'This field is required') => ({
    // TODO: Add content
  }
=======
export const validators = {// TODO: Add content;}
}
  required: (message = 'This field is required') => ({// TODO: Add content;}
};
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
  validate: isRequired,
//     message;
  }),
<<<<<<< HEAD
  email: (message = 'Please enter a valid email address') => ({
    // TODO: Add content
  }
=======
  email: (message = 'Please enter a valid email address') => ({// TODO: Add content;}
};
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
  validate: isValidEmail,
//     message;
  }),
<<<<<<< HEAD
  phone: (message = 'Please enter a valid phone number') => ({
    // TODO: Add content
  }
=======
  phone: (message = 'Please enter a valid phone number') => ({// TODO: Add content;}
};
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
  validate: isValidPhone,
//     message;
  }),
<<<<<<< HEAD
  minLength: (min: number, message = `Minimum length is ${min} characters`) => ({
    // TODO: Add content
  }
=======
  minLength: (min: number, message = `Minimum length is ${min} characters`) => ({// TODO: Add content;}
};
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
  validate: (value: string) => minLength(value, min),
//     message;
  }),
<<<<<<< HEAD
  maxLength: (max: number, message = `Maximum length is ${max} characters`) => ({
    // TODO: Add content
  }
=======
  maxLength: (max: number, message = `Maximum length is ${max} characters`) => ({// TODO: Add content;}
};
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
  validate: (value: string) => maxLength(value, max),
//     message;
  }),
<<<<<<< HEAD
  password: (message = 'Password must be at least 8 characters with uppercase, lowercase, and number') => ({
    // TODO: Add content
  }
  validate: isStrongPassword,
//     message
  }
  )
}
// Additional validation functions for tests
export interface ValidationResult {
  isValid: boolean
  error?: string
}
export function validateEmail(email: string): ValidationResult {
  if (!isValidEmail(email)) {
    return { isValid: false, error: 'Invalid email format' }
=======
  password: (message = 'Password must be at least 8 characters with uppercase, lowercase, and number') => ({// TODO: Add content;}
};
  validate: isStrongPassword,
//     message;
  })
};
// Additional validation functions for tests;
export interface ValidationResult {isValid: boolean;}
  error?: string;
}
export function validateEmail(email: string): ValidationResult {if (!isValidEmail(email)) {}
    return { isValid: false, error: 'Invalid email format' };
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
  }
  if (email.length > 254) {
    return { isValid: false, error: 'Email address is too long' }
  }
  return { isValid: true }
}
<<<<<<< HEAD
export function validateURL(url: string): ValidationResult {
  if (!isValidUrl(url)) {
    return { isValid: false, error: 'Invalid URL format' }
=======
export function validateURL(url: string): ValidationResult {if (!isValidUrl(url)) {}
    return { isValid: false, error: 'Invalid URL format' };
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
  }
  return { isValid: true }
}
export function validateLength(value: string, min: number, max: number, fieldName = 'Field'): ValidationResult {if (value.length;}
          < min) {
    return { isValid: false, error: `${fieldName} must be at least ${min} characters long` }
  }
  if (value.length > max) {
    return { isValid: false, error: `${fieldName} must be no more than ${max} characters long` }
  }
  return { isValid: true }
}
<<<<<<< HEAD
export function validatePassword(password: string): ValidationResult {
  if (password.length < 8) {
    return { isValid: false, error: 'Password must be at least 8 characters long' }
=======
export function validatePassword(password: string): ValidationResult {if (password.length < 8) {}
    return { isValid: false, error: 'Password must be at least 8 characters long' };
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
  }
  if (password.length > 128) {
    return { isValid: false, error: 'Password must be no more than 128 characters long' }
  }
  if (!isStrongPassword(password)) {
    return { isValid: false, error: 'Password must contain uppercase, lowercase, number, and special character' }
  }
  return { isValid: true }
}
<<<<<<< HEAD
export function sanitizeHTML(html: string): string {
  if (!html) return ''
  return html
=======
export function sanitizeHTML(html: string): string {if (!html) return '';}
  return html;
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\// g, '&#x2F;')
}
<<<<<<< HEAD
export function validateDate(dateString: string): ValidationResult {
  if (!dateString || dateString.trim() === '') {
    return { isValid: false, error: 'Invalid date format' }
  }
  // Check for YYYY-MM-DD format
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/
=======
export function validateDate(dateString: string): ValidationResult {if (!dateString || dateString.trim() === '') {}
    return { isValid: false, error: 'Invalid date format' };
  }
  // Check for YYYY-MM-DD format;
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
  if (!dateRegex.test(dateString)) {
    return { isValid: false, error: 'Invalid date format' }
  }
  const date = new Date(dateString)
  if (isNaN(date.getTime())) {
    return { isValid: false, error: 'Invalid date format' }
  }
  // Check if the date is valid (e.g., 2025-02-30 should be invalid)
  const [year, month, day] = dateString.split('-').map(Number)
  const actualDate = new Date(year, month - 1, day)
  if (actualDate.getFullYear() !== year || actualDate.getMonth() !== month - 1 || actualDate.getDate() !== day) {
    return { isValid: false, error: 'Invalid date format' }
  }
  return { isValid: true }
}
<<<<<<< HEAD
export function validateCreditCard(cardNumber: string): ValidationResult {
  // Remove spaces and dashes
  const cleanNumber = cardNumber.replace(/[\s-]/g, '')
=======
export function validateCreditCard(cardNumber: string): ValidationResult {// Remove spaces and dashes;}
  const cleanNumber = cardNumber.replace(/[\s-]/g, '');
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
  if (!isValidCreditCard(cleanNumber)) {
    return { isValid: false, error: 'Invalid credit card number' }
  }
  return { isValid: true }
}
<<<<<<< HEAD
export function validateJSON(jsonString: string): ValidationResult {
  try {
    JSON.parse(jsonString)
    return { isValid: true }
=======
export function validateJSON(jsonString: string): ValidationResult {try {}
    JSON.parse(jsonString);
    return { isValid: true };
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
  } catch {
    return { isValid: false, error: 'Invalid JSON format' }
  }
}
export function validateComposite(value: string, validators: Array;
          <{ validate: (v: string) => boolean; message: string }>): ValidationResult {for (const validator of validators) {}
    if (typeof validator.validate === 'function' && !validator.validate(value)) {
      return { isValid: false, error: validator.message }
    }
  }
  return { isValid: true }
}
<<<<<<< HEAD
export async function validateAsync(validator: (value: string) => Promise<boolean>, value: string): Promise<ValidationResult> {
  try {
    const isValid = await validator(value)
    return { isValid, error: isValid ? undefined : 'Validation failed' }
=======
export async function validateAsync(validator: (value: string) => Promise<boolean>, value: string): Promise<ValidationResult> {try {}
    const isValid = await validator(value);
    return { isValid, error: isValid ? undefined : 'Validation failed' };
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
  } catch {
    return { isValid: false, error: 'Validation failed' }
  }
}
<<<<<<< HEAD
// Additional functions for tests
export function isValidPassword(password: string): boolean {
  return isStrongPassword(password)
}
export function sanitizeInput(input: string | null | undefined, maxLength?: number): string | null {
  if (input === null || input === undefined) {
    return null
  }
  let sanitized = input.toString().trim()
  // Remove null bytes and other control characters
  sanitized = sanitized.replace(/[\x00-\x1F\x7F]/g, '')
  if (sanitized.length === 0) {
    return null
  }
  if (maxLength && sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength)
=======
// Additional functions for tests;
export function isValidPassword(password: string): boolean {return isStrongPassword(password);}
}
export function sanitizeInput(input: string | null | undefined, maxLength?: number): string | null {if (input === null || input === undefined) {}
    return null;
  }
  let sanitized = input.toString().trim();
  // Remove null bytes and other control characters;
  sanitized = sanitized.replace(/[\x00-\x1F\x7F]/g, '');
  if (sanitized.length === 0) {return null;}
  }
  if (maxLength && sanitized.length > maxLength) {sanitized = sanitized.substring(0, maxLength);}
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
  }
  return sanitized
}