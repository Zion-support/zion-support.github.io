'use client';
/**
 * Data Validation Utility
 * Provides comprehensive data validation with type safety
 */
import { errorTracking, ErrorCategory, ErrorSeverity } from './errorTracking';
export interface ValidationRule<T = unknown> {
  validate: (value: T) => boolean;
  message: string;
}
export interface FieldRule {
  type: 'required' | 'email' | 'url' | 'number' | 'string' | 'custom';
  message: string;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  custom?: (value: unknown) => boolean;
}
export type ValidationRules = Record<string, FieldRule[]>;
export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string[]>;
}
export class ValidationError extends Error {
  constructor(
    message: string,
    public field: string,
    public errors: string[]
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}
/**
 * Validate email address
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
/**
 * Validate URL
 */
export function validateURL(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}
/**
 * Validate phone number (US format)
 */
export function validatePhoneNumber(phone: string): boolean {
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone);
}
/**
 * Validate string length
 */
export function validateStringLength(value: string, min: number, max?: number): boolean {
  if (max !== undefined) {
    return value.length >= min && value.length <= max;
  }
  return value.length >= min;
}
/**
 * Validate number range
 */
export function validateNumberRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}
/**
 * Validate credit card number (basic Luhn algorithm)
 */
export function validateCreditCard(cardNumber: string): boolean {
  const cleaned = cardNumber.replace(/\s/g, '');
  if (!/^\d+$/.test(cleaned)) return false;
  if (cleaned.length < 13 || cleaned.length > 19) return false;
  let sum = 0;
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
export function validateDateRange(date: Date, min?: Date, max?: Date): boolean {
  if (!validateDate(date)) return false;
  const time = date.getTime();
  if (min && time < min.getTime()) return false;
  if (max && time > max.getTime()) return false;
  return true;
}
/**
 * Sanitize HTML to prevent XSS
 */
export function sanitizeHTML(html: string): string {
  // Remove script tags
  let clean = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  // Remove event handlers
  clean = clean.replace(/on\w+="[^"]*"/gi, '');
  clean = clean.replace(/on\w+='[^']*'/gi, '');
  return clean;
}
/**
 * Create custom validator
 */
export function createCustomValidator<T>(
  validator: (value: T) => boolean,
  message: string
): (value: T) => { isValid: boolean; errors: string[] } {
  return (value: T) => {
    const isValid = validator(value);
    return {
      isValid,
      errors: isValid ? [] : [message]
    };
  };
}
/**
 * Validate a single field against a rule
 */
function validateFieldRule(value: unknown, rule: FieldRule): boolean {
  switch (rule.type) {
    case 'required':
      if (value === null || value === undefined) return false;
      if (typeof value === 'string' && value.trim() === '') return false;
      if (Array.isArray(value) && value.length === 0) return false;
      return true;
    case 'email':
      return typeof value === 'string' && validateEmail(value);
    case 'url':
      return typeof value === 'string' && validateURL(value);
    case 'number':
      if (typeof value !== 'number') return false;
      if (rule.min !== undefined && value < rule.min) return false;
      if (rule.max !== undefined && value > rule.max) return false;
      return true;
    case 'string':
      if (typeof value !== 'string') return false;
      if (rule.minLength !== undefined && value.length < rule.minLength) return false;
      if (rule.maxLength !== undefined && value.length > rule.maxLength) return false;
      return true;
    case 'custom':
      return rule.custom ? rule.custom(value) : true;
    default:
      return true;
  }
}
/**
 * Validate form data
 */
export function validateForm<T extends Record<string, unknown>>(
  data: T,
  rules: ValidationRules
): ValidationResult {
  const errors: Record<string, string[]> = {};
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
      errorTracking.trackError(
        new ValidationError(`Validation failed for ${field}`, field, fieldErrors),
        {
          category: ErrorCategory.Validation,
          severity: ErrorSeverity.Low,
          context: {
            field,
            errors: fieldErrors
          }
        }
      );
    }
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
/**
 * Validation rules builder
 */
export const ValidationRulesBuilder = {
  required: <T>(): ValidationRule<T> => ({
    validate: (value: T) => {
      if (value === null || value === undefined) return false;
      if (typeof value === 'string' && value.trim() === '') return false;
      if (Array.isArray(value) && value.length === 0) return false;
      return true;
    },
    message: 'This field is required'
  }),
  email: (): ValidationRule<string> => ({
    validate: (value: string) => validateEmail(value),
    message: 'Please enter a valid email address'
  }),
  url: (): ValidationRule<string> => ({
    validate: (value: string) => validateURL(value),
    message: 'Please enter a valid URL'
  }),
  minLength: (min: number): ValidationRule<string> => ({
    validate: (value: string) => value.length >= min,
    message: `Must be at least ${min} characters long`
  }),
  maxLength: (max: number): ValidationRule<string> => ({
    validate: (value: string) => value.length <= max,
    message: `Must be no more than ${max} characters long`
  }),
  pattern: (pattern: RegExp, message: string): ValidationRule<string> => ({
    validate: (value: string) => pattern.test(value),
    message
  }),
  range: (min: number, max: number): ValidationRule<number> => ({
    validate: (value: number) => validateNumberRange(value, min, max),
    message: `Must be between ${min} and ${max}`
  }),
  custom: <T>(validator: (value: T) => boolean, message: string): ValidationRule<T> => ({
    validate: validator,
    message
  })
};
// Legacy class-based API for backward compatibility
class DataValidator {
  private static instance: DataValidator;
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
  isRequired(value: unknown): boolean {
    if (value === null || value === undefined) return false;
    if (typeof value === 'string' && value.trim() === '') return false;
    if (Array.isArray(value) && value.length === 0) return false;
    return true;
  }
  isArray(value: unknown): value is unknown[] {
    return Array.isArray(value);
  }
  isObject(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  }
  matchesPattern(value: string, pattern: RegExp): boolean {
    return pattern.test(value);
  }
  rules = ValidationRulesBuilder;
}
export const dataValidator = DataValidator.getInstance();