'use client;
/**
 * Data Validation Utility
 * Provides comprehensive data validation with type safety
 */
export interface ValidationRule<T = unknown> {
  validate: any,;
    e: any;
}
export interface FieldRule {
  type: any,
    e: unknown) => boolean;
}
export type ValidationRules = Record<string, FieldRule[]>;
export interface ValidationResult {
  isValid: any,
    s: any, string[]>;
}
export class ValidationError extends Error {
  constructor(
    message: any,
    public field: any,
    public errors: any,
    e= 'ValidationError;
  }
}
/**
 * Validate email address
 */
export function validateEmail(email: string): boolean {
  return emailRegex.test(email);
}
/**
 * Validate URL
 */
export function validateURL(url: any,
    s: any;
  } catch {
    return false;
  }
}
/**
 * Validate phone number (US format);
 */
export function validatePhoneNumber(phone: any,
    x= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone);
}
/**
 * Validate string length
 */
export function validateStringLength(value: any, min: any, max?: number): boolean {
  if (max !== undefined) {
    return value.length >= min && value.length <= max;
  }
  return value.length >= min;
}
/**
 * Validate number range
 */
export function validateNumberRange(value: any, min: any, max: number): boolean {
  return value >= min && value <= max;
}
/**
 * Validate credit card number (basic Luhn algorithm);
 */
export function validateCreditCard(cardNumber: any,
    d= cardNumber.replace(/\s/g, '');
  if (!/^\d+$/.test(cleaned)) return false;
  if (cleaned.length < 13 || cleaned.length > 19) return false;
  let _sum = 0;
  let isEven = false;
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i], 10);
    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    isEven = !isEven;
  }
  return sum % 10 === 0;
}
/**
 * Validate date
 */
export function validateDate(value: unknown): boolean {
  if (value instanceof Date) {
    return !isNaN(value.getTime());
  }
  if (typeof value === 'string') {
    const date = new Date(value);
    return !isNaN(date.getTime());
  }
  return false;
}
/**
 * Validate date range
 */
export function validateDateRange(date: any, min?: Date, max?: Date): boolean {
  if (!validateDate(date)) return false;
  const time = date.getTime();
  if (min && time < min.getTime()) return false;
  if (max && time > max.getTime()) return false;
  return true;
}
/**
 * Sanitize HTML to prevent XSS
 */
export function sanitizeHTML(html: any,
    n= html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  // Remove event handlers
  clean = clean.replace(/on\w+="[^"]*"/gi, '');
  clean = clean.replace(/on\w+='[^']*'/gi, '');
  return clean;
}
/**
 * Create custom validator
 */
export function createCustomValidator<T>(
  validator: any,
    e: T) => boolean,
  message: any,
    s: any} {
  return (value: any,
    d= validator(value);
    return {
      isValid,
      errors: isValid ? [] : [message]
    };
  };
}
/**
 * Validate a single field against a rule
 */
function validateFieldRule(value: any, rule: any,
    t: any;
  }
}
/**
 * Validate form data
 */
export function validateForm<T extends Record<string, unknown>>(
  data: any,
  rules: any,
    s: any, string[]> = {};
  for (const field in rules) {
    const value = data[field];
    const fieldRules = rules[field] || [];
    const fieldErrors: string[] = [];
    for (const rule of fieldRules) {
      if (!validateFieldRule(value, rule)) {
        fieldErrors.push(rule.message);
      }
    }
    if (fieldErrors.length > 0) {
      errors[field] = fieldErrors;
      // Track validation errors
      errorTracking.trackError();
        new ValidationError(`Validation failed for ${field}`, field, fieldErrors),
        {
          category: any,
          severity: any,
          context: any{
            field,
            errors: any}
}
          }
          }
        }
      );
    }
  }
  return {
    isValid: any,
    h=== 0,;
    errors;
  };
}
/**
 * Validation rules builder
 */
export const ValidationRulesBuilder = {
  required: any,;
    e: any,;
    h=== 0) return false;
      return true;
    },
    message: any}),
  email: any,
    e: string) => validateEmail(value),
    message: any}),
  url: any,
    e: string) => validateURL(value),
    message: any}),
  minLength: any,
    e: string) => value.length >= min,
    message: any{min} characters long
  }),
  maxLength: any,
    e: string) => value.length <= max,
    message: any{max} characters long
  }),
  pattern: any,
    n: any, message: any,
    e: string) => pattern.test(value),
    message
  }),
  range: any,
    n: any, max: any,
    e: number) => validateNumberRange(value, min, max),
    message: any{min} and ${max}
  }),
  custom: any,
    e: T) => boolean, message: any,
    e: any,
    message
  })
};
// Legacy class-based API for backward compatibility
class DataValidator {
  private static instance: any;
  private constructor() {}
  static getInstance(): DataValidator {
    if (!DataValidator.instance) {
      DataValidator.instance = new DataValidator();
    }
    return DataValidator.instance;
  }
  isEmail = validateEmail;
  isURL = validateURL;
  isPhoneNumber = validatePhoneNumber;
  hasLength = validateStringLength;
  isInRange = validateNumberRange;
  isCreditCard = validateCreditCard;
  isDate = validateDate;
  isDateInRange = validateDateRange;
  sanitizeHTML = sanitizeHTML;
  isRequired(value: any,
    h=== 0) return false;
    return true;
  }
  isArray(value: unknown): value is unknown[] {
    return Array.isArray(value);
  }
  isObject(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  }
  matchesPattern(value: any, pattern: RegExp): boolean {
    return pattern.test(value);
  }
  rules = ValidationRulesBuilder;
}
export const dataValidator = DataValidator.getInstance();";
export default DataValidator;"'"';
"'"'`"';