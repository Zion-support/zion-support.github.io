/**
 * Comprehensive validation utilities
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

// Email validation
export const validateEmail = (email: string, fieldName = 'Email'): ValidationResult => {
  if (!email || typeof email !== 'string') {
    return { isValid: false, error: `${fieldName} is required` };
  }

  if (email.length > 254) {
    return { isValid: false, error: `${fieldName} is too long` };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: `${fieldName} format is invalid` };
  }

  return { isValid: true };
};

// Phone validation
export const validatePhone = (phone: string, fieldName = 'Phone'): ValidationResult => {
  if (!phone || typeof phone !== 'string') {
    return { isValid: false, error: `${fieldName} is required` };
  }

  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '');
  
  if (digits.length < 10 || digits.length > 15) {
    return { isValid: false, error: `${fieldName} must be between 10 and 15 digits` };
  }

  return { isValid: true };
};

// URL validation
export const validateURL = (url: string, requireProtocol = true, fieldName = 'URL'): ValidationResult => {
  if (!url || typeof url !== 'string') {
    return { isValid: false, error: `${fieldName} is required` };
  }

  try {
    const urlObj = new URL(requireProtocol ? url : `https://${url}`);
    if (!['http:', 'https:'].includes(urlObj.protocol)) {
      return { isValid: false, error: `${fieldName} must use HTTP or HTTPS protocol` };
    }
    return { isValid: true };
  } catch {
    return { isValid: false, error: `${fieldName} format is invalid` };
  }
};

// String length validation
export const validateLength = (value: string, min: number, max: number, fieldName = 'Field'): ValidationResult => {
  if (typeof value !== 'string') {
    return { isValid: false, error: `${fieldName} must be a string` };
  }

  if (value.length < min) {
    return { isValid: false, error: `${fieldName} must be at least ${min} characters long` };
  }

  if (value.length > max) {
    return { isValid: false, error: `${fieldName} must be no more than ${max} characters long` };
  }

  return { isValid: true };
};

// Required field validation
export const validateRequired = (value: any, fieldName = 'Field'): ValidationResult => {
  if (value === null || value === undefined) {
    return { isValid: false, error: `${fieldName} is required` };
  }

  if (typeof value === 'string' && value.trim() === '') {
    return { isValid: false, error: `${fieldName} is required` };
  }

  if (Array.isArray(value) && value.length === 0) {
    return { isValid: false, error: `${fieldName} is required` };
  }

  return { isValid: true };
};

// Number range validation
export const validateNumberRange = (value: number, min: number, max: number, fieldName = 'Number'): ValidationResult => {
  if (typeof value !== 'number' || isNaN(value)) {
    return { isValid: false, error: `${fieldName} must be a valid number` };
  }

  if (value < min) {
    return { isValid: false, error: `${fieldName} must be at least ${min}` };
  }

  if (value > max) {
    return { isValid: false, error: `${fieldName} must be no more than ${max}` };
  }

  return { isValid: true };
};

// Password validation
export const validatePassword = (password: string, fieldName = 'Password'): ValidationResult => {
  if (!password || typeof password !== 'string') {
    return { isValid: false, error: `${fieldName} is required` };
  }

  if (password.length < 8) {
    return { isValid: false, error: `${fieldName} must be at least 8 characters long` };
  }

  if (password.length > 128) {
    return { isValid: false, error: `${fieldName} is too long` };
  }

  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (!hasUpperCase) {
    return { isValid: false, error: `${fieldName} must contain at least one uppercase letter` };
  }

  if (!hasLowerCase) {
    return { isValid: false, error: `${fieldName} must contain at least one lowercase letter` };
  }

  if (!hasNumbers) {
    return { isValid: false, error: `${fieldName} must contain at least one number` };
  }

  if (!hasSpecialChar) {
    return { isValid: false, error: `${fieldName} must contain at least one special character` };
  }

  return { isValid: true };
};

// HTML sanitization
export const sanitizeHTML = (html: string): string => {
  if (!html || typeof html !== 'string') {
    return '';
  }

  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };

  return html.replace(/[&<>"'/]/g, (s) => map[s]);
};

// Input sanitization
export const sanitizeInput = (input: string, maxLength = 1000): string | null => {
  if (!input || typeof input !== 'string') {
    return null;
  }

  // Remove null bytes and control characters
  let sanitized = input.replace(/[\x00-\x1F\x7F]/g, '');
  
  // Trim whitespace
  sanitized = sanitized.trim();
  
  if (sanitized === '') {
    return null;
  }

  // Enforce maximum length
  if (sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength);
  }

  return sanitized;
};

// Date validation
export const validateDate = (dateString: string, fieldName = 'Date'): ValidationResult => {
  if (!dateString || typeof dateString !== 'string') {
    return { isValid: false, error: `${fieldName} is required` };
  }

  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return { isValid: false, error: `${fieldName} format is invalid` };
  }

  // Check if the date string matches the parsed date (prevents dates like "2025-13-01")
  const isoString = date.toISOString().split('T')[0];
  if (isoString !== dateString) {
    return { isValid: false, error: `${fieldName} format is invalid` };
  }

  return { isValid: true };
};

// Credit card validation using Luhn algorithm
export const validateCreditCard = (cardNumber: string, fieldName = 'Credit Card'): ValidationResult => {
  if (!cardNumber || typeof cardNumber !== 'string') {
    return { isValid: false, error: `${fieldName} is required` };
  }

  // Remove all non-digit characters
  const digits = cardNumber.replace(/\D/g, '');
  
  if (digits.length < 13 || digits.length > 19) {
    return { isValid: false, error: `${fieldName} must be between 13 and 19 digits` };
  }

  // Luhn algorithm
  let sum = 0;
  let isEven = false;
  
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i]);
    
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
    return { isValid: false, error: `${fieldName} number is invalid` };
  }

  return { isValid: true };
};

// JSON validation
export const validateJSON = (jsonString: string, fieldName = 'JSON'): ValidationResult => {
  if (!jsonString || typeof jsonString !== 'string') {
    return { isValid: false, error: `${fieldName} is required` };
  }

  try {
    JSON.parse(jsonString);
    return { isValid: true };
  } catch {
    return { isValid: false, error: `${fieldName} format is invalid` };
  }
};

// Composite validation
export const validateComposite = (value: any, validators: Array<(val: any) => ValidationResult>): ValidationResult => {
  for (const validator of validators) {
    const result = validator(value);
    if (!result.isValid) {
      return result;
    }
  }
  return { isValid: true };
};

// Async validation
export const validateAsync = async (validator: (val: any) => Promise<ValidationResult>, value: any): Promise<ValidationResult> => {
  try {
    return await validator(value);
  } catch (error) {
    return {
      isValid: false,
      error: error instanceof Error ? error.message : 'Validation failed'
    };
  }
};