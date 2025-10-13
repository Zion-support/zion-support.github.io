<<<<<<< HEAD
'use client';
/**
 * Data Validation Utility
 * Provides comprehensive data validation with type safety
 */
export interface ValidationRule<T = unknown> {
<<<<<<< HEAD
    validate: (value: T) => boolean,
  message: string
=======
// DataValidator utility
// This file contains utility functions and configurations

export const dataValidator = {
  // Add utility functions here
  init: () => {

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-15aa
  }
export interface FieldRule {
    type: 'required' | 'email' | 'url' | 'number' | 'string' | 'custom';
  message: string;
  min?: number;
  max?: number
  minLength?: number
  maxLength?: number,
  custom?: (value: unknown) => boolean
  }
export type ValidationRules = Record<string>
export interface ValidationResult {
    isValid: boolean,
  errors: Record<string, string[]>
  }
export class ValidationError extends Error {
    constructor(
=======
  validate: (value: T) => boolean;
  message: string};
export interface FieldRule {
}
}
  type: 'required' | 'email' | 'url' | 'number' | 'string' | 'custom';
  message: string;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  custom?: (value: unknown) => boolean};
export type ValidationRules = Record<string, FieldRule[]>;
export interface ValidationResult {
}
}
  isValid: boolean;
  errors: Record<string, string[]>};
export class ValidationError extends Error {;
constructor(
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    message: string,
    public field: string,
    public errors: string[]
  ) {
'use client'
/**
 * Data Validation Utility
 * Provides comprehensive data validation with type safety,
 */
<<<<<<< HEAD

export interface ValidationRule<T = unknown> {// TODO: Add content
  }
}
  validate: (value: T) => boolean,,
    message: string
}
export interface FieldRule {
    // TODO: Add content
  }
}
  type: 'required' | 'email' | 'url' | 'number' | 'string' | 'custom',,
=======
export interface ValidationRule<T = unknown> {// TODO: Add content};
};
  validate: (value: T) => boolean;,
    message: string
};
export interface FieldRule {// TODO: Add content};
};
  type: 'required' | 'email' | 'url' | 'number' | 'string' | 'custom';,
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    message: string
  min?: number
  max?: number
  minLength?: number
  maxLength?: number
  custom?: (value: unknown) => boolean
};
export type ValidationRules = Record;
<<<<<<< HEAD
          <string>
export interface ValidationResult {/* TODO: Fix JSX expression */}
  O: Add content,}
}
=======
          <string, FieldRule[]>;
export interface ValidationResult {/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  isVali,
  d: boolean,,
    error,
<<<<<<< HEAD
  s: Record,
          <string>
}
export class ValidationError extends Error {/* TODO: Fix JSX expression */}
  O: Add content,}
}
=======
  s: Record;
          <string, string[]>};
export class ValidationError extends Error {/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
//   constructor();
  messag,
  e: string,
    public,
  field: string,
    public,
  errors: string[]
<<<<<<< HEAD
  ) {/* TODO: Fix JSX expression */}
  O: Add content,}
}
    super(message);
    this.name = 'ValidationError';
  }
}
=======
  ) {/* TODO: Fix JSX expression */};
  O: Add content};
};
    super(message);
    this.name = 'ValidationError'};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
/**
 * Validate email address
 */
export function validateEmail(email: string): boolean {
<<<<<<< HEAD
    return emailRegex.test(email)
  }
=======
  return emailRegex.test(email)};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
/**
 * Validate URL
 */
export function validateURL(url: string): boolean {
    try {
    const parsed = new URL(url),
    return parsed.protocol === 'http:' || parsed.protocol === 'https:'
  } catch {
    * Validate email address;
 */
<<<<<<< HEAD

export function validateEmail(email: string): boolean {return emailRegex.test(email)
  }

}
/**
 * Validate URL;
 */

export function validateURL(url: string): boolean {
    // TODO: Add content
  }

}
  try {/* TODO: Fix JSX expression */}
  O: Add content,}
}
    const parsed = new URL(url);
    return parsed.protocol === 'htt,
  p:' || parsed.protocol === 'http,
  s: ',
  } catch {/* TODO: Fix JSX expression */}
  O: Add content,}
}
    return false;
  }
}
=======
export function validateEmail(email: string): boolean {return emailRegex.test(email)};
};
/**
 * Validate URL;
 */
export function validateURL(url: string): boolean {// TODO: Add content};
};
  try {/* TODO: Fix JSX expression */};
  O: Add content};
};
    const parsed = new URL(url);
    return parsed.protocol === 'htt,
  p:' || parsed.protocol === 'http,
  s:'} catch {/* TODO: Fix JSX expression */};
  O: Add content};
};
    return false};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
/**
 * Validate phone number (US format)
 */
export function validatePhoneNumber(phone: string): boolean {
<<<<<<< HEAD
    export function validatePhoneNumber(phone: string): boolean {// TODO: Add content
  }

}
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone);
}
=======
export function validatePhoneNumber(phone: string): boolean {// TODO: Add content};
};
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone)};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
/**
 * Validate string length
 */
export function validateStringLength(value: string, min: number, max?: number): boolean {
    if (max !== undefined) {
    return value.length >= min && value.length <= max;
 * Validate string length;
 */
<<<<<<< HEAD

export function validateStringLength(value: string, min: number, max?: number): boolean {// TODO: Add content
  }

}
  if (max !== undefined) {/* TODO: Fix JSX expression */}
  O: Add content,}
}
    return value.length >= min && value.length;
          <= max;
  }
  return value.length >= min;
}
=======
export function validateStringLength(value: string, min: number, max?: number): boolean {// TODO: Add content};
};
  if (max !== undefined) {/* TODO: Fix JSX expression */};
  O: Add content};
};
    return value.length >= min && value.length;
          <= max};
  return value.length >= min};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
/**
 * Validate number range
 */
export function validateNumberRange(value: number, min: number, max: number): boolean {
    return value >= min && value <= max
 * Validate number range,
 */
<<<<<<< HEAD

export function validateNumberRange(value: number, min: number, max: number): boolean {// TODO: Add content
  }

}
  return value >= min && value;
          <= max;
}
=======
export function validateNumberRange(value: number, min: number, max: number): boolean {// TODO: Add content};
};
  return value >= min && value;
          <= max};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
/**
 * Validate credit card number (basic Luhn algorithm)
 */
export function validateCreditCard(cardNumber: string): boolean {
    const cleaned = cardNumber.replace(/\s/g, '');
  if (!/^\d+$/.test(cleaned)) return false;
  if (cleaned.length < 13 || cleaned.length > 19) return false;
  let isEven = false;
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i], 10);
    if (isEven) {
<<<<<<< HEAD

export function validateCreditCard(cardNumber: string): boolean {// TODO: Add content
  }

}
=======
export function validateCreditCard(cardNumber: string): boolean {// TODO: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  const cleaned = cardNumber.replace(/\s/g, '');
  if (!/^\d+$/.test(cleaned)) return false;
  if (cleaned.length;)
          < 13 || cleaned.length > 19) return false;
  let isEven = false;
<<<<<<< HEAD
  for (let i = cleaned.length - 1; i >= 0; i--) {/* TODO: Fix JSX expression */}
  O: Add content,}
}
    let digit = parseInt(cleaned[i], 10);
    if (isEven) {/* TODO: Fix JSX expression */}
  O: Add content,}
}
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    isEven = !isEven;
  }
=======
  for (let i = cleaned.length - 1; i >= 0; i--) {/* TODO: Fix JSX expression */};
  O: Add content};
};
    let digit = parseInt(cleaned[i], 10);
    if (isEven) {/* TODO: Fix JSX expression */};
  O: Add content};
};
      digit *= 2;
      if (digit > 9) digit -= 9};
    sum += digit;
    isEven = !isEven};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    let digit = parseInt(cleaned[i], 10)
    if (isEven) {/* TODO: Fix JSX expression */};
  };
      digit *= 2;
<<<<<<< HEAD
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    isEven = !isEven;
  }
  return sum % 10 === 0;
}
=======
      if (digit > 9) digit -= 9};
    sum += digit;
    isEven = !isEven};
  return sum % 10 === 0};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
/**
 * Validate date
 */
export function validateDate(value: unknown): boolean {
<<<<<<< HEAD
    if (value instanceof Date) {
    return !isNaN(value.getTime())
  }
  if (typeof value === 'string') {
    const date = new Date(value);
    return !isNaN(date.getTime())
  }
  return false;
}
=======
  if (value instanceof Date) {
    return !isNaN(value.getTime())};
  if (typeof value === 'string') {;
const date = new Date(value);
    return !isNaN(date.getTime())};
  return false};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
/**
 * Validate date range
 */
export function validateDateRange(date: Date, min?: Date, max?: Date): boolean {
    if (!validateDate(date)) return false;
  const time = date.getTime();
  if (min && time < min.getTime()) return false;
 * Validate date;
 */
<<<<<<< HEAD

export function validateDate(value: unknown): boolean {// TODO: Add content
  }

}
  if (value instanceof Date) {/* TODO: Fix JSX expression */}
  O: Add content,}
}
    return !isNaN(value.getTime());
  }
  if (typeof value === 'string') {/* TODO: Fix JSX expression */}
  O: Add content,}
}
    const date = new Date(value);
    return !isNaN(date.getTime());
  }
    const date = new Date(value)
    return !isNaN(date.getTime())
  }
  return false;
}
/**
 * Validate date range;
 */

export function validateDateRange(date: Date, min?: Date, max?: Date): boolean {
    // TODO: Add content
  }

}
=======
export function validateDate(value: unknown): boolean {// TODO: Add content};
};
  if (value instanceof Date) {/* TODO: Fix JSX expression */};
  O: Add content};
};
    return !isNaN(value.getTime())};
  if (typeof value === 'string') {/* TODO: Fix JSX expression */};
  O: Add content};
};
    const date = new Date(value);
    return !isNaN(date.getTime())};
    const date = new Date(value)
    return !isNaN(date.getTime())
  };
  return false};
/**
 * Validate date range;
 */
export function validateDateRange(date: Date, min?: Date, max?: Date): boolean {// TODO: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  if (!validateDate(date)) return false;
  const time = date.getTime();
  if (min && time;)
          < min.getTime()) return false;
  if (max && time > max.getTime()) return false;
<<<<<<< HEAD
  return true;
}
=======
  return true};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
/**
 * Sanitize HTML to prevent XSS
 */
export function sanitizeHTML(html: string): string {
    // Remove script tags
  let clean = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  // Remove event handlers
 * Sanitize HTML to prevent XSS;
 */
<<<<<<< HEAD

export function sanitizeHTML(html: string): string {// TODO: Add content
  }

}
  // Remove script tags;
let clean = html.replace(/

=======
export function sanitizeHTML(html: string): string {// TODO: Add content};
};
  // Remove script tags;
let clean = html.replace(/
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <script[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  // Remove event handlers;
  clean = clean.replace(/on\w+="[^"]*"/gi, '');
  clean = clean.replace(/on\w+='[^']*'/gi, '');
<<<<<<< HEAD
  return clean;
}
=======
  return clean};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
/**
 * Create custom validator
 */
export function createCustomValidator<T>(
  validator: (value: T) => boolean,
  message: string
): (value: T) => { isValid: boolean, errors: string[] } {
  return (value: T) => {
    const isValid = validator(value),
    return {
      isValid,
      errors: isValid ? [] : [message]
<<<<<<< HEAD
    }
  }
}
=======
    }}};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
/**
 * Validate a single field against a rule
 */
function validateFieldRule(value: unknown, rule: FieldRule): boolean {
  switch (rule.type) {
 * Create custom validator
 */
export function createCustomValidator,
          <T>()
  validator: (value: T) => boolean,
<<<<<<< HEAD
  message: string): (value: T) => { isValid: boolean, errors: string[] } {
    // TODO: Add content
  }

}
  return (valu)
  e: T) => {/* TODO: Fix JSX expression */}
  O: Add content,}
}
    const isValid = validator(value);
    return {/* TODO: Fix JSX expression */}
  O: Add content,}
}
=======
  message: string): (value: T) => { isValid: boolean; errors: string[] } {// TODO: Add content};
};
  return (valu)
  e: T) => {/* TODO: Fix JSX expression */};
  O: Add content};
};
    const isValid = validator(value);
    return {/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
//       isValid,
      error,
  s: isValid ? [] : [message]
    };
  };
};
/**
 * Validate a single field against a rule;
<<<<<<< HEAD
 */

function validateFieldRule(value: unknown, rule: FieldRule): boolean {
    // TODO: Add content
  }

}
  switch (rule.type) {/* TODO: Fix JSX expression */}
  O: Add content,}
}
=======
 */;
function validateFieldRule(value: unknown, rule: FieldRule): boolean {// TODO: Add content};
};
  switch (rule.type) {/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
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
      return typeof value === 'string' && validateEmail(value)
    case 'url':
      return typeof value === 'string' && validateURL(value)
    case 'number':
      if (typeof value !== 'number') return false;
      if (rule.min !== undefined && value;)
          < rule.min) return false;
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
      return rule.custom ? rule.custom(value) : true,
<<<<<<< HEAD
  default: return true,
  }
}
=======
  default:
      return true};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
/**
 * Validate form data
 */
export function validateForm<T extends Record<string, unknown>>(
  data: T,
  rules: ValidationRules
): ValidationResult {
  const errors: Record<string, string[]> = {}
  for (const field in rules) {
    const value = data[field];
    const fieldRules = rules[field] || [];
    const fieldErrors: string[] = [],
    for (const rule of fieldRules) {
      if (!validateFieldRule(value, rule)) {
<<<<<<< HEAD
        fieldErrors.push(rule.message)
  }
    }
=======
        fieldErrors.push(rule.message)};
    };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
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
<<<<<<< HEAD
          }
        }
      );
    }
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}
=======
          };
        };
      )};
  };
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
/**
 * Validation rules builder
 */
export const ValidationRulesBuilder = {
<<<<<<< HEAD
    required: <T>(): ValidationRule<T> => ({
    validate: (value: T) => {
 * Validate form data,
 */
export function validateForm<T extends Record<string, unknown>>()

  data: T,
  rules: ValidationRules): ValidationResult {// TODO: Add content
  }

}
  const,
  errors: Record,
          <string, string[]> = {}
  for (const field in rules) {/* TODO: Fix JSX expression */}
  O: Add content,}
}
    const value = data[field];
    const fieldRules = rules[field] || [];
    const,
  fieldErrors: string[] = [],
    for (const rule of fieldRules) {/* TODO: Fix JSX expression */}
  O: Add content,}
}
      if (!validateFieldRule(value, rule)) {/* TODO: Fix JSX expression */}
  O: Add content,}
}
        fieldErrors.push(rule.message);
      }
    }
    if (fieldErrors.length > 0) {/* TODO: Fix JSX expression */}
  O: Add content,}
}
=======
};
};
  required: <T>(): ValidationRule<T> => ({
    validate: (value: T) => {
return (
 * Validate form data;
 */
export function validateForm<T extends Record<string, unknown>
);
}>()
  data: T,
  rules: ValidationRules): ValidationResult {// TODO: Add content};
};
  const,
  errors: Record;
          <string, string[]> = {};
  for (const field in rules) {/* TODO: Fix JSX expression */};
  O: Add content};
};
    const value = data[field];
    const fieldRules = rules[field] || [];
    const,
  fieldErrors: string[] = [];
    for (const rule of fieldRules) {/* TODO: Fix JSX expression */};
  O: Add content};
};
      if (!validateFieldRule(value, rule)) {/* TODO: Fix JSX expression */};
  O: Add content};
};
        fieldErrors.push(rule.message)};
    };
    if (fieldErrors.length > 0) {/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      errors[field] = fieldErrors;
      // Track validation errors;
//       errorTracking.trackError()
        new ValidationError(`Validation failed for ${field}`, field, fieldErrors),
<<<<<<< HEAD
        {/* TODO: Fix JSX expression */}
  O: Add content,}
}
=======
        {/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  categor,
  y: ErrorCategory.Validation,
          severit,
  y: ErrorSeverity.Low,
          contex,
<<<<<<< HEAD
  t: {/* TODO: Fix JSX expression */}
  O: Add content,}
}
//             field,
            error,
  s: fieldErrors,
          }
        }
  )
    }
  }

  return {
    // TODO: Add content
  }

}
  isVali,
  d: Object.keys(errors).length === 0,
//     errors;
  }
}
/**
 * Validation rules builder;
 */

export const ValidationRulesBuilder = {
    // TODO: Add content
  }
}
  required: 

          <T>(): ValidationRule<T> => ({
    // TODO: Add content
  }

}
  validat,
  e: (valu)
  e: T) => {/* TODO: Fix JSX expression */}
  O: Add content,}
}
=======
  t: {/* TODO: Fix JSX expression */};
  O: Add content};
};
//             field,
            error,
  s: fieldErrors};
        };
  )
    };
  };
  return {// TODO: Add content};
};
  isVali,
  d: Object.keys(errors).length === 0,
//     errors}};
/**
 * Validation rules builder;
 */
export const ValidationRulesBuilder = {// TODO: Add content};
};
  required: 
          <T>(): ValidationRule<T> => ({// TODO: Add content};
};
  validat,
  e: (valu)
  e: T) => {/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      if (value === null || value === undefined) return false;
      if (typeof value === 'string' && value.trim() === '') return false;
      if (Array.isArray(value) && value.length === 0) return false;
      return true;
    },
    message:   ,
$4}),
  email: (): ValidationRule<string> => ({
    validate: (value: string) => validateEmail(value),
    message:   ,
$4}),
  url: (): ValidationRule<string> => ({
    validate: (value: string) => validateURL(value),
    message:   ,
$4}),
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
}
// Legacy class-based API for backward compatibility
class DataValidator {
<<<<<<< HEAD
  private static instance: DataValidator,
  private constructor() {}
=======
  private static instance: DataValidator;
  private constructor() {};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  static getInstance(): DataValidator {
    if (!DataValidator.instance) {
    messag,
  e: 'This field is required'
  }),
  emai,
<<<<<<< HEAD
  l: (): ValidationRule,
          <string> => ({/* TODO: Fix JSX expression */}
  O: Add content,}
}
=======
  l: (): ValidationRule;
          <string> => ({/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  validat,
  e: (valu)
  e: string) => validateEmail(value),
    messag,
  e: 'Please enter a valid email address'
  }),
  ur,
<<<<<<< HEAD
  l: (): ValidationRule,
          <string> => ({/* TODO: Fix JSX expression */}
  O: Add content,}
}
=======
  l: (): ValidationRule;
          <string> => ({/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  validat,
  e: (valu)
  e: string) => validateURL(value),
    messag,
  e: 'Please enter a valid URL'
  }),
  minLengt,
  h: (mi)
<<<<<<< HEAD
  n: number): ValidationRule,
          <string> => ({/* TODO: Fix JSX expression */}
  O: Add content,}
}
=======
  n: number): ValidationRule;
          <string> => ({/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  validat,
  e: (valu)
  e: string) => value.length >= min,
    messag,`
  e: `Must be at least ${min} characters long`
  }),
  maxLengt,
  h: (ma)
<<<<<<< HEAD
  x: number): ValidationRule,
          <string> => ({/* TODO: Fix JSX expression */}
  O: Add content,}
}
=======
  x: number): ValidationRule;
          <string> => ({/* TODO: Fix JSX expression */};
  O: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  validat,
  e: (valu)
  e: string) => value.length,
          <= max,
    messag,`
  e: `Must be no more than ${max} characters long`
  }),
  patter,
  n: (patter,
  n: RegExp, messag)
<<<<<<< HEAD
  e: string): ValidationRule<string> => ({/* TODO: Fix JSX expression */}
  O: Add content,}
}

  validate: (value: string) => pattern.test(value),
//     message;
  }),
  range: (min: number, max: number): ValidationRule,
          <number> => ({
    // TODO: Add content
  }
}
=======
  e: string): ValidationRule<string> => ({/* TODO: Fix JSX expression */};
  O: Add content};
};
  validate: (value: string) => pattern.test(value),
//     message}),
  range: (min: number, max: number): ValidationRule;
          <number> => ({// TODO: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  validate: (value: number) => validateNumberRange(value, min, max),
    message: `Must be between ${min} and ${max}`
  }),
  custo,
  m: 
<<<<<<< HEAD

          <T>(validator: (value: T) => boolean, message: string): ValidationRule<T> => ({
    // TODO: Add content
  }

}
=======
          <T>(validator: (value: T) => boolean, message: string): ValidationRule<T> => ({// TODO: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  validat,
  e: validator,
//     message;)
  })
}
// Legacy class-based API for backward compatibility;
<<<<<<< HEAD

class DataValidator {
    // TODO: Add content
  }

}
=======
class DataValidator {// TODO: Add content};
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
// Legacy class-based API for backward compatibility;
class DataValidator {/* TODO: Fix JSX expression */};
  };
  private static,
<<<<<<< HEAD
  instance: DataValidator,
  private constructor() {}

  static getInstance(): DataValidator {
    // TODO: Add content
  }

}
    if (!DataValidator.instance) {/* TODO: Fix JSX expression */}
  O: Add content,}
}
      DataValidator.instance = new DataValidator();
    }
    return DataValidator.instance;
  }
=======
  instance: DataValidator;
  private constructor() {};
  static getInstance(): DataValidator {// TODO: Add content};
};
    if (!DataValidator.instance) {/* TODO: Fix JSX expression */};
  O: Add content};
};
      DataValidator.instance = new DataValidator()};
    return DataValidator.instance};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
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
  isRequired(valu)
<<<<<<< HEAD
  e: unknown): boolean {/* TODO: Fix JSX expression */}
  O: Add content,}
}
    if (value === null || value === undefined) return false;
    if (typeof value === 'string' && value.trim() === '') return false;
    if (Array.isArray(value) && value.length === 0) return false;
    return true;
  }
  isArray(value: unknown): value is unknown[] {
    return Array.isArray(value)
  }
  isObject(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value)
  }
  matchesPattern(value: string, pattern: RegExp): boolean {
    return pattern.test(value)
  }
  rules = ValidationRulesBuilder;
}
export const dataValidator = DataValidator.getInstance();
  isArray(valu)
  e: unknown): value is unknown[] {/* TODO: Fix JSX expression */}
  O: Add content,}
}
    return Array.isArray(value);
  }
  isObject(valu)
  e: unknown): value is Record,
          <string, unknown> {/* TODO: Fix JSX expression */}
  O: Add content,}
}
    return typeof value === 'object' && value !== null && !Array.isArray(value);
  }
  matchesPattern(valu,
  e: string, patter)
  n: RegExp): boolean {/* TODO: Fix JSX expression */}
  O: Add content,}
}
    return pattern.test(value);
  }
    return pattern.test(value)
  }
  rules = ValidationRulesBuilder;
}
export const dataValidator = DataValidator.getInstance()"`

=======
  e: unknown): boolean {/* TODO: Fix JSX expression */};
  O: Add content};
};
    if (value === null || value === undefined) return false;
    if (typeof value === 'string' && value.trim() === '') return false;
    if (Array.isArray(value) && value.length === 0) return false;
    return true};
  isArray(value: unknown): value is unknown[] {
    return Array.isArray(value)};
  isObject(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null && !Array.isArray(value)};
  matchesPattern(value: string, pattern: RegExp): boolean {
    return pattern.test(value)};
  rules = ValidationRulesBuilder};
export const dataValidator = DataValidator.getInstance();
  isArray(valu)
  e: unknown): value is unknown[] {/* TODO: Fix JSX expression */};
  O: Add content};
};
    return Array.isArray(value)};
  isObject(valu)
  e: unknown): value is Record;
          <string, unknown> {/* TODO: Fix JSX expression */};
  O: Add content};
};
    return typeof value === 'object' && value !== null && !Array.isArray(value)};
  matchesPattern(valu,
  e: string, patter)
  n: RegExp): boolean {/* TODO: Fix JSX expression */};
  O: Add content};
};
    return pattern.test(value)};
    return pattern.test(value)
  };
  rules = ValidationRulesBuilder};
export const dataValidator = DataValidator.getInstance()"`
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
