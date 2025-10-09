/**
 * Comprehensive validation utilities
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

// Email validation
export const validateEmail = (email: string): ValidationResult => {
  if (!email) {
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
};

// URL validation
export const validateURL = (url: string): ValidationResult => {
  if (!url) {
    return { isValid: false, error: 'URL is required' };
  }
  
  try {
    new URL(url);
    return { isValid: true };
  } catch {
    return { isValid: false, error: 'Invalid URL format' };
  }
};

// String length validation
export const validateLength = (str: string, min: number, max: number, fieldName = 'Field'): ValidationResult => {
  if (str.length < min) {
    return { isValid: false, error: `${fieldName} must be at least ${min} characters long` };
  }
  
  if (str.length > max) {
    return { isValid: false, error: `${fieldName} must be no more than ${max} characters long` };
  }
  
  return { isValid: true };
};

// Password validation
export const validatePassword = (password: string): ValidationResult => {
  if (!password) {
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
};

// HTML sanitization
export const sanitizeHTML = (input: any): string => {
  if (input === null || input === undefined) {
    return '';
  }
  
  const str = String(input);
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// Date validation
export const validateDate = (dateStr: string): ValidationResult => {
  if (!dateStr) {
    return { isValid: false, error: 'Date is required' };
  }
  
  // Check if the date string matches YYYY-MM-DD format
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateStr)) {
    return { isValid: false, error: 'Date must be in YYYY-MM-DD format' };
  }
  
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) {
    return { isValid: false, error: 'Invalid date format' };
  }
  
  // Check if the date is valid (e.g., 2025-02-30 should be invalid)
  const [year, month, day] = dateStr.split('-').map(Number);
  const actualDate = new Date(year, month - 1, day);
  if (actualDate.getFullYear() !== year || 
      actualDate.getMonth() !== month - 1 || 
      actualDate.getDate() !== day) {
    return { isValid: false, error: 'Invalid date' };
  }
  
  return { isValid: true };
};

// Credit card validation using Luhn algorithm
export const validateCreditCard = (cardNumber: string): ValidationResult => {
  if (!cardNumber) {
    return { isValid: false, error: 'Credit card number is required' };
  }
  
  // Remove spaces and dashes
  const cleanNumber = cardNumber.replace(/[\s-]/g, '');
  
  // Check if it's all digits
  if (!/^\d+$/.test(cleanNumber)) {
    return { isValid: false, error: 'Credit card number must contain only digits' };
  }
  
  // Check length (13-19 digits)
  if (cleanNumber.length < 13 || cleanNumber.length > 19) {
    return { isValid: false, error: 'Credit card number must be 13-19 digits long' };
  }
  
  // Luhn algorithm
  let sum = 0;
  let isEven = false;
  
  for (let i = cleanNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cleanNumber[i]);
    
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
};

// JSON validation
export const validateJSON = (jsonStr: string): ValidationResult => {
  if (!jsonStr) {
    return { isValid: false, error: 'JSON string is required' };
  }
  
  try {
    JSON.parse(jsonStr);
    return { isValid: true };
  } catch {
    return { isValid: false, error: 'Invalid JSON format' };
  }
};

// Required field validation
export const validateRequired = (value: any, fieldName = 'Field'): ValidationResult => {
  if (value === null || value === undefined || value === '') {
    return { isValid: false, error: `${fieldName} is required` };
  }
  
  return { isValid: true };
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
export const validateAsync = async (
  validator: (value: any) => Promise<ValidationResult>,
  value: any
): Promise<ValidationResult> => {
  try {
    return await validator(value);
  } catch (error) {
    return {
      isValid: false,
      error: error instanceof Error ? error.message : 'Validation failed'
    };
  }
};