// Validation utility functions

export interface ValidationResult {
  isValid: boolean;
  error?: string;
  errors?: string[];
}

// URL Validation
export const isValidUrl = (url: string): boolean => {
  if (!url || typeof url !== 'string') return false;
  
  try {
    const urlObj = new URL(url);
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch {
    return false;
  }
};

export const validateURL = (url: string): ValidationResult => {
  if (!url || typeof url !== 'string') {
    return { isValid: false, error: 'URL is required' };
  }
  
  if (!isValidUrl(url)) {
    return { isValid: false, error: 'Invalid URL format' };
  }
  
  return { isValid: true };
};

// String Length Validation
export const validateLength = (
  value: string,
  minLength: number,
  maxLength: number,
  fieldName: string = 'Field'
): ValidationResult => {
  if (typeof value !== 'string') {
    return { isValid: false, error: `${fieldName} must be a string` };
  }
  
  if (value.length < minLength) {
    return { isValid: false, error: `${fieldName} must be at least ${minLength} characters long` };
  }
  
  if (value.length > maxLength) {
    return { isValid: false, error: `${fieldName} must be no more than ${maxLength} characters long` };
  }
  
  return { isValid: true };
};

// Password Validation
export const isValidPassword = (password: string): boolean => {
  if (!password || typeof password !== 'string') return false;
  
  // At least 8 characters, max 128 characters
  if (password.length < 8 || password.length > 128) return false;
  
  // At least one uppercase letter
  if (!/[A-Z]/.test(password)) return false;
  
  // At least one lowercase letter
  if (!/[a-z]/.test(password)) return false;
  
  // At least one number
  if (!/\d/.test(password)) return false;
  
  // At least one special character
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) return false;
  
  return true;
};

export const validatePassword = (password: string): ValidationResult => {
  if (!password || typeof password !== 'string') {
    return { isValid: false, error: 'Password is required' };
  }
  
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
  
  if (!/\d/.test(password)) {
    return { isValid: false, error: 'Password must contain at least one number' };
  }
  
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    return { isValid: false, error: 'Password must contain at least one special character' };
  }
  
  return { isValid: true };
};

// HTML Sanitization
export const sanitizeHTML = (input: string | null | undefined): string => {
  if (!input || typeof input !== 'string') return '';
  
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// Date Validation
export const validateDate = (dateString: string): ValidationResult => {
  if (!dateString || typeof dateString !== 'string') {
    return { isValid: false, error: 'Date is required' };
  }
  
  // Check if it's in YYYY-MM-DD format
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateString)) {
    return { isValid: false, error: 'Date must be in YYYY-MM-DD format' };
  }
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return { isValid: false, error: 'Invalid date' };
  }
  
  // Check if the date is valid (not like 2025-13-01)
  const [year, month, day] = dateString.split('-').map(Number);
  const actualDate = new Date(year, month - 1, day);
  
  if (actualDate.getFullYear() !== year || 
      actualDate.getMonth() !== month - 1 || 
      actualDate.getDate() !== day) {
    return { isValid: false, error: 'Invalid date' };
  }
  
  return { isValid: true };
};

// Credit Card Validation (Luhn Algorithm)
export const validateCreditCard = (cardNumber: string): ValidationResult => {
  if (!cardNumber || typeof cardNumber !== 'string') {
    return { isValid: false, error: 'Card number is required' };
  }
  
  // Remove spaces and dashes
  const cleanNumber = cardNumber.replace(/[\s-]/g, '');
  
  // Check if it's all digits
  if (!/^\d+$/.test(cleanNumber)) {
    return { isValid: false, error: 'Card number must contain only digits' };
  }
  
  // Check length (13-19 digits)
  if (cleanNumber.length < 13 || cleanNumber.length > 19) {
    return { isValid: false, error: 'Card number must be 13-19 digits long' };
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
    return { isValid: false, error: 'Invalid card number' };
  }
  
  return { isValid: true };
};

// JSON Validation
export const validateJSON = (jsonString: string): ValidationResult => {
  if (!jsonString || typeof jsonString !== 'string') {
    return { isValid: false, error: 'JSON string is required' };
  }
  
  try {
    JSON.parse(jsonString);
    return { isValid: true };
  } catch {
    return { isValid: false, error: 'Invalid JSON format' };
  }
};

// Required Field Validation
export const validateRequired = (value: unknown, fieldName: string = 'Field'): ValidationResult => {
  if (value === null || value === undefined || value === '') {
    return { isValid: false, error: `${fieldName} is required` };
  }
  
  if (typeof value === 'string' && value.trim() === '') {
    return { isValid: false, error: `${fieldName} is required` };
  }
  
  return { isValid: true };
};

// Composite Validation
export const validateComposite = (
  value: unknown,
  validators: Array<(val: unknown) => ValidationResult>
): ValidationResult => {
  for (const validator of validators) {
    const result = validator(value);
    if (!result.isValid) {
      return result;
    }
  }
  
  return { isValid: true };
};

// Async validation helper
export const asyncFunction = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('success'), 100);
  });
};