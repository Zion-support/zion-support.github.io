/**
 * Comprehensive validation utilities
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

// Email validation
export function validateEmail(email: string): ValidationResult {
  if (!email || typeof email !== 'string') {
    return { isValid: false, error: 'Email is required' };
  }
  
  if (email.length > 254) {
    return { isValid: false, error: 'Email is too long' };
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Invalid email format' };
  }
  
  return { isValid: true };
}

// URL validation
export function validateURL(url: string): ValidationResult {
  if (!url || typeof url !== 'string') {
    return { isValid: false, error: 'URL is required' };
  }
  
  try {
    new URL(url);
    return { isValid: true };
  } catch {
    return { isValid: false, error: 'Invalid URL format' };
  }
}

// String length validation
export function validateLength(
  value: string, 
  minLength: number, 
  maxLength: number, 
  fieldName: string = 'Field'
): ValidationResult {
  if (!value || typeof value !== 'string') {
    return { isValid: false, error: `${fieldName} is required` };
  }
  
  if (value.length < minLength) {
    return { isValid: false, error: `${fieldName} must be at least ${minLength} characters long` };
  }
  
  if (value.length > maxLength) {
    return { isValid: false, error: `${fieldName} must be no more than ${maxLength} characters long` };
  }
  
  return { isValid: true };
}

// Password validation
export function validatePassword(password: string): ValidationResult {
  if (!password || typeof password !== 'string') {
    return { isValid: false, error: 'Password is required' };
  }
  
  if (password.length < 8) {
    return { isValid: false, error: 'Password must be at least 8 characters long' };
  }
  
  if (password.length > 128) {
    return { isValid: false, error: 'Password must be no more than 128 characters long' };
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

// HTML sanitization
export function sanitizeHTML(input: any): string {
  if (!input || typeof input !== 'string') {
    return '';
  }
  
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// Date validation
export function validateDate(dateString: string): ValidationResult {
  if (!dateString || typeof dateString !== 'string') {
    return { isValid: false, error: 'Date is required' };
  }
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return { isValid: false, error: 'Invalid date format' };
  }
  
  // Check if the date string matches YYYY-MM-DD format
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateString)) {
    return { isValid: false, error: 'Date must be in YYYY-MM-DD format' };
  }
  
  return { isValid: true };
}

// Credit card validation (Luhn algorithm)
export function validateCreditCard(cardNumber: string): ValidationResult {
  if (!cardNumber || typeof cardNumber !== 'string') {
    return { isValid: false, error: 'Credit card number is required' };
  }
  
  // Remove spaces and non-digits
  const cleaned = cardNumber.replace(/\D/g, '');
  
  if (cleaned.length < 13 || cleaned.length > 19) {
    return { isValid: false, error: 'Invalid credit card number length' };
  }
  
  // Luhn algorithm
  let sum = 0;
  let isEven = false;
  
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i]);
    
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
    return { isValid: false, error: 'Invalid credit card number' };
  }
  
  return { isValid: true };
}

// JSON validation
export function validateJSON(jsonString: string): ValidationResult {
  if (!jsonString || typeof jsonString !== 'string') {
    return { isValid: false, error: 'JSON string is required' };
  }
  
  try {
    JSON.parse(jsonString);
    return { isValid: true };
  } catch {
    return { isValid: false, error: 'Invalid JSON format' };
  }
}

// Composite validation
export function validateComposite(
  value: string, 
  validators: Array<(value: string) => ValidationResult>
): ValidationResult {
  for (const validator of validators) {
    const result = validator(value);
    if (!result.isValid) {
      return result;
    }
  }
  return { isValid: true };
}

// Async validation
export async function validateAsync(
  validator: (value: string) => Promise<ValidationResult>,
  value: string
): Promise<ValidationResult> {
  try {
    return await validator(value);
  } catch (error) {
    return { isValid: false, error: 'Validation failed' };
  }
}

// Legacy function names for backward compatibility
export const isValidEmail = (email: string) => validateEmail(email).isValid;
export const isValidPhone = (phone: string) => phone && phone.length >= 10;
export const isValidUrl = (url: string) => validateURL(url).isValid;
export const isRequired = (value: any) => value !== null && value !== undefined && value !== '';
export const isValidPassword = (password: string) => validatePassword(password).isValid;
export const isValidLength = (value: string, min: number, max: number) => 
  validateLength(value, min, max).isValid;
export const sanitizeInput = sanitizeHTML;
export const isValidDate = (date: string) => validateDate(date).isValid;
export const isValidCreditCard = (card: string) => validateCreditCard(card).isValid;
export const isValidJSON = (json: string) => validateJSON(json).isValid;