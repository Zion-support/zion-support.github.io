// Validation utilities
export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export function validateEmail(email: string): ValidationResult {
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
}

export function validateURL(url: string): ValidationResult {
  if (!url) {
    return { isValid: false, error: 'URL is required' };
  }
  
  try {
    new URL(url);
    return { isValid: true };
  } catch {
    return { isValid: false, error: 'Invalid URL format' };
  }
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
  if (!password) {
    return { isValid: false, error: 'Password is required' };
  }
  
  if (password.length < 8) {
    return { isValid: false, error: 'Password must be at least 8 characters long' };
  }
  
  if (password.length > 128) {
    return { isValid: false, error: 'Password is too long' };
  }
  
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasSpecialChar) {
    return { isValid: false, error: 'Password must contain uppercase, lowercase, numbers, and special characters' };
  }
  
  return { isValid: true };
}

export function sanitizeHTML(input: any): string {
  if (typeof input !== 'string') {
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

export function validateDate(dateString: string): ValidationResult {
  if (!dateString) {
    return { isValid: false, error: 'Date is required' };
  }
  
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return { isValid: false, error: 'Invalid date format' };
  }
  
  return { isValid: true };
}

export function validateCreditCard(cardNumber: string): ValidationResult {
  if (!cardNumber) {
    return { isValid: false, error: 'Card number is required' };
  }
  
  // Remove spaces and dashes
  const cleaned = cardNumber.replace(/[\s-]/g, '');
  
  if (!/^\d{13,19}$/.test(cleaned)) {
    return { isValid: false, error: 'Invalid card number format' };
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
    return { isValid: false, error: 'Invalid card number' };
  }
  
  return { isValid: true };
}

export function validateJSON(jsonString: string): ValidationResult {
  if (!jsonString) {
    return { isValid: false, error: 'JSON is required' };
  }
  
  try {
    JSON.parse(jsonString);
    return { isValid: true };
  } catch {
    return { isValid: false, error: 'Invalid JSON format' };
  }
}

export function validateComposite(value: string, validators: Array<(val: string) => ValidationResult>): ValidationResult {
  for (const validator of validators) {
    const result = validator(value);
    if (!result.isValid) {
      return result;
    }
  }
  
  return { isValid: true };
}

export async function validateAsync(
  validator: (value: string) => Promise<ValidationResult>,
  value: string
): Promise<ValidationResult> {
  return await validator(value);
}