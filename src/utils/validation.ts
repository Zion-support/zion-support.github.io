/**
 * Enhanced validation utilities
 */

export const validateEmail = (email: string): { isValid: boolean; message?: string } => {
  if (email.length > 254) {
    return { isValid: false, message: 'Email address is too long' };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, message: 'Invalid email format' };
  }
  return { isValid: true };
};

export const validatePhone = (phone: string): { isValid: boolean; message?: string } => {
  const phoneRegex = /^[\+]?[1-9][\d]{7,15}$/;
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
  if (!phoneRegex.test(cleanPhone)) {
    return { isValid: false, message: 'Invalid phone number format' };
  }
  return { isValid: true };
};

export const validateURL = (url: string, requireProtocol: boolean = true): { isValid: boolean; message?: string } => {
  try {
    if (!requireProtocol && !url.includes('://')) {
      url = 'http://' + url;
    }
    const urlObj = new URL(url);
    if (requireProtocol && !['http:', 'https:'].includes(urlObj.protocol)) {
      return { isValid: false, message: 'Only HTTP and HTTPS protocols are allowed' };
    }
    return { isValid: true };
  } catch {
    return { isValid: false, message: 'Invalid URL format' };
  }
};

export const validateLength = (value: string, min: number, max: number, fieldName?: string): { isValid: boolean; message?: string; error?: string } => {
  if (value.length < min) {
    const message = fieldName ? `${fieldName} must be at least ${min} characters` : `Must be at least ${min} characters`;
    return { isValid: false, message, error: message };
  }
  if (value.length > max) {
    const message = fieldName ? `${fieldName} must be no more than ${max} characters` : `Must be no more than ${max} characters`;
    return { isValid: false, message, error: message };
  }
  return { isValid: true };
};

export const validateRequired = (value: any): { isValid: boolean; message?: string } => {
  if (typeof value === 'string') {
    if (value.trim().length === 0) {
      return { isValid: false, message: 'This field is required' };
    }
  } else if (value === null || value === undefined) {
    return { isValid: false, message: 'This field is required' };
  }
  return { isValid: true };
};

export const validateNumberRange = (value: any, min: number, max: number): { isValid: boolean; message?: string } => {
  const numValue = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(numValue) || !isFinite(numValue)) {
    return { isValid: false, message: 'Must be a valid number' };
  }
  if (numValue < min) {
    return { isValid: false, message: `Must be at least ${min}` };
  }
  if (numValue > max) {
    return { isValid: false, message: `Must be no more than ${max}` };
  }
  return { isValid: true };
};

export const validatePassword = (password: string): { isValid: boolean; message?: string; strength: 'weak' | 'medium' | 'strong' } => {
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
  if (password.length < 8) {
    return { isValid: false, message: 'Password must be at least 8 characters', strength: 'weak' };
  }
  
  if (password.length > 128) {
    return { isValid: false, message: 'Password must be no more than 128 characters', strength: 'weak' };
  }
  
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[@$!%*?&]/.test(password);
  
  const score = [hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;
  
  let strength: 'weak' | 'medium' | 'strong' = 'weak';
  if (score >= 4) strength = 'strong';
  else if (score >= 2) strength = 'medium';
  
  if (strongPasswordRegex.test(password)) {
    return { isValid: true, strength: 'strong' };
  }
  
  return { isValid: false, message: 'Password must contain uppercase, lowercase, number, and special character', strength };
};

export const sanitizeHTML = (html: string): string => {
  if (typeof document === 'undefined') {
    // Server-side fallback
    return html
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  }
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML
    .replace(/"/g, '&quot;')
    .replace(/\//g, '&#x2F;');
};

export const sanitizeInput = (input: string, maxLength?: number): string | null => {
  if (!input || input.trim() === '') {
    return null;
  }
  
  let sanitized = input
    .trim()
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .replace(/\x00/g, ''); // Remove null bytes
  
  if (maxLength && sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength);
  }
  
  return sanitized;
};

export const validateDate = (date: string | Date): { isValid: boolean; message?: string } => {
  if (!date) {
    return { isValid: false, message: 'Invalid date format' };
  }
  
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  if (isNaN(dateObj.getTime())) {
    return { isValid: false, message: 'Invalid date format' };
  }
  
  // Check for valid date ranges
  const year = dateObj.getFullYear();
  if (year < 1900 || year > 2100) {
    return { isValid: false, message: 'Date must be between 1900 and 2100' };
  }
  
  // Check for invalid dates like 2025-13-01 or 2025-02-30
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const originalMonth = typeof date === 'string' ? parseInt(date.split('-')[1]) : month;
  const originalDay = typeof date === 'string' ? parseInt(date.split('-')[2]) : day;
  
  if (originalMonth !== month || originalDay !== day) {
    return { isValid: false, message: 'Invalid date format' };
  }
  
  return { isValid: true };
};

export const validateCreditCard = (cardNumber: string): { isValid: boolean; message?: string; type?: string } => {
  const cleanCard = cardNumber.replace(/[\s-]/g, '');
  
  // Card type detection
  const cardTypes: Record<string, RegExp> = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$/,
    amex: /^3[47][0-9]{13}$/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
  };
  
  let detectedType = '';
  for (const [type, pattern] of Object.entries(cardTypes)) {
    if (pattern.test(cleanCard)) {
      detectedType = type;
      break;
    }
  }
  
  // Luhn algorithm
  const luhnCheck = (num: string): boolean => {
    let sum = 0;
    let isEven = false;
    
    for (let i = num.length - 1; i >= 0; i--) {
      let digit = parseInt(num.charAt(i), 10);
      
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
  };
  
  if (!/^\d{13,19}$/.test(cleanCard)) {
    return { isValid: false, message: 'Invalid card number format' };
  }
  
  if (!luhnCheck(cleanCard)) {
    return { isValid: false, message: 'Invalid card number' };
  }
  
  return { isValid: true, type: detectedType };
};

export const validateJSON = (jsonString: string): { isValid: boolean; message?: string; data?: any } => {
  try {
    const data = JSON.parse(jsonString);
    return { isValid: true, data };
  } catch (error) {
    return { isValid: false, message: 'Invalid JSON format' };
  }
};

export interface ValidationRule {
  validator: (value: any) => { isValid: boolean; message?: string };
  field: string;
}

export const validateComposite = (data: Record<string, any>, rules: ValidationRule[]): { isValid: boolean; errors: Record<string, string[]> } => {
  const errors: Record<string, string[]> = {};
  let isValid = true;
  
  rules.forEach(rule => {
    const result = rule.validator(data[rule.field]);
    if (!result.isValid) {
      if (!errors[rule.field]) {
        errors[rule.field] = [];
      }
      errors[rule.field].push(result.message || 'Invalid value');
      isValid = false;
    }
  });
  
  return { isValid, errors };
};

export const validateAsync = async (value: any, asyncValidator: (value: any) => Promise<{ isValid: boolean; message?: string; error?: string }>): Promise<{ isValid: boolean; message?: string; error?: string }> => {
  try {
    const result = await asyncValidator(value);
    return result;
  } catch (error) {
    return { isValid: false, message: 'Validation error occurred', error: 'Validation failed' };
  }
};