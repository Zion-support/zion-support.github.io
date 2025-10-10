// Validation utility functions
export interface ValidationResult {
}
}
  isValid: boolean;
<<<<<<< HEAD
  error?: string;
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
=======
  error?: string};
// URL Validation
export const isValidUrl = (url: string): boolean => {
  if (!url || typeof url !== 'string') return false;
  try {;
const urlObj = new URL(url);
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:'} catch {
    return false};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
};
export const validateURL = (url: string): ValidationResult => {
  if (!url) {
<<<<<<< HEAD
    return { isValid: false, error: 'URL is required' };
  }
  
  if (!isValidUrl(url)) {
    return { isValid: false, error: 'Invalid URL format' };
  }
  
  return { isValid: true };
};

=======
    return { isValid: false, error: 'URL is required' }};
  if (!isValidUrl(url)) {
    return { isValid: false, error: 'Invalid URL format' }};
  return { isValid: true }};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// String Length Validation
export const validateLength = (
  value: string, 
  min: number, 
  max: number, 
  fieldName: string = 'Field'
): ValidationResult => {
  if (!value) {
<<<<<<< HEAD
    return { isValid: false, error: `${fieldName} is required` };
  }
  
  if (value.length < min) {
    return { isValid: false, error: `${fieldName} must be at least ${min} characters long` };
  }
  
  if (value.length > max) {
    return { isValid: false, error: `${fieldName} must be no more than ${max} characters long` };
  }
  
  return { isValid: true };
};

// Password Validation
export const isValidPassword = (password: string): boolean => {
=======
    return { isValid: false, error: `${fieldName} is required` }};
  if (value.length < min) {
    return { isValid: false, error: `${fieldName} must be at least ${min} characters long` }};
  if (value.length > max) {
    return { isValid: false, error: `${fieldName} must be no more than ${max} characters long` }};
  return { isValid: true }};
// Password Validation
export const isValidPassword = (password: string): boolean => {
return (
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  if (!password || password.length < 8) return false;
  
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
<<<<<<< HEAD
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar;
};

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
  
=======
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<React .Fragment>
);
}]/.test(password);
  return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar};
export const validatePassword = (password: string): ValidationResult => {
  if (!password) {
    return { isValid: false, error: 'Password is required' }};
  if (password.length < 8) {
    return { isValid: false, error: 'Password must be at least 8 characters long' }};
  if (password.length > 128) {
    return { isValid: false, error: 'Password must be no more than 128 characters long' }};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  if (!isValidPassword(password)) {
    return { 
      isValid: false, 
      error: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character' 
<<<<<<< HEAD
    };
  }
  
  return { isValid: true };
};

// HTML Sanitization
export const sanitizeHTML = (input: string | null | undefined): string => {
=======
    }};
  return { isValid: true }};
// HTML Sanitization
export const sanitizeHTML = (input: string | null | undefined): string => {
return (
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  if (!input || typeof input !== 'string') return '';
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
<<<<<<< HEAD
    .replace(/\//g, '&#x2F;');
};

// Date Validation
export const validateDate = (dateString: string): ValidationResult => {
  if (!dateString) {
    return { isValid: false, error: 'Date is required' };
  }
  
  // Check if the date string matches YYYY-MM-DD format
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateString)) {
    return { isValid: false, error: 'Invalid date format. Use YYYY-MM-DD' };
  }
  
  const date = new Date(dateString);
  
  if (isNaN(date.getTime())) {
    return { isValid: false, error: 'Invalid date' };
  }
  
  // Check if the date is valid (e.g., not 2025-13-01)
  const isoString = date.toISOString().split('T')[0];
  if (isoString !== dateString) {
    return { isValid: false, error: 'Invalid date' };
  }
  
  return { isValid: true };
};

// Credit Card Validation (Luhn Algorithm)
export const validateCreditCard = (cardNumber: string): ValidationResult => {
  if (!cardNumber) {
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
};

// JSON Validation
export const validateJSON = (jsonString: string): ValidationResult => {
  if (!jsonString) {
    return { isValid: false, error: 'JSON string is required' };
  }
  
  try {
    JSON.parse(jsonString);
    return { isValid: true };
  } catch (error) {
    return { isValid: false, error: 'Invalid JSON format' };
  }
=======
    .replace(/\//g, '&#x2F;')};
// Date Validation
export const validateDate = (dateString: string): ValidationResult => {
  if (!dateString) {
    return { isValid: false, error: 'Date is required' }};
  // Check if the date string matches YYYY-MM-DD format;
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(dateString)) {
    return { isValid: false, error: 'Invalid date format. Use YYYY-MM-DD' }};
  ;
const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return { isValid: false, error: 'Invalid date' }};
  // Check if the date is valid (e.g., not 2025-13-01);
const isoString = date.toISOString().split('T')[0];
  if (isoString !== dateString) {
    return { isValid: false, error: 'Invalid date' }};
  return { isValid: true }};
// Credit Card Validation (Luhn Algorithm)
export const validateCreditCard = (cardNumber: string): ValidationResult => {
  if (!cardNumber) {
    return { isValid: false, error: 'Credit card number is required' }};
  // Remove spaces and non-digits;
const cleaned = cardNumber.replace(/\D/g, '');
  if (cleaned.length < 13 || cleaned.length > 19) {
    return { isValid: false, error: 'Invalid credit card number length' }};
  // Luhn algorithm;
let sum = 0;
  let isEven = false;
  for (let i = cleaned.length - 1; i >= 0; i--) {;
let digit = parseInt(cleaned[i]);
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9};
    };
    sum += digit;
    isEven = !isEven};
  if (sum % 10 !== 0) {
    return { isValid: false, error: 'Invalid credit card number' }};
  return { isValid: true }};
// JSON Validation
export const validateJSON = (jsonString: string): ValidationResult => {
  if (!jsonString) {
    return { isValid: false, error: 'JSON string is required' }};
  try {
    JSON.parse(jsonString);
    return { isValid: true }} catch (error) {
    return { isValid: false, error: 'Invalid JSON format' }};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
};
// Required Field Validation
export const validateRequired = (value: any, fieldName: string = 'Field'): ValidationResult => {
  if (value === null || value === undefined || value === '') {
<<<<<<< HEAD
    return { isValid: false, error: `${fieldName} is required` };
  }
  
  return { isValid: true };
};

=======
    return { isValid: false, error: `${fieldName} is required` }};
  return { isValid: true }};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Composite Validation
export const validateComposite = (
  value: string, 
  validators: Array<(val: string) => ValidationResult>
): ValidationResult => {
  for (const validator of validators) {
    const result = validator(value);
    if (!result.isValid) {
<<<<<<< HEAD
      return result;
    }
  }
  
  return { isValid: true };
};

=======
      return result};
  };
  return { isValid: true }};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Async Validation Helper
export const asyncValidator = async (val: string): Promise<string> => {
  // Simulate async validation
  await new Promise(resolve => setTimeout(resolve, 100));
  return 'success';
};