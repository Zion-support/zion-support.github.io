'use client'
/**
 * Validation Utilities
 * Provides common validation functions for forms and data
 */
export interface ValidationResult {
    // TODO: Add content
  }
  isValid: boolean;,
    errors: string[]
}
/**
 * Email validation regex pattern
 */
/**
 * Phone number validation regex (US format)
 */
const PHONE_REGEX = /^(\+1\s?)?(\([0-9]{3}\)|[0-9]{3})[-\s]?[0-9]{3}[-\s]?[0-9]{4}$/
/**
 * URL validation regex
 */
const URL_REGEX = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*(\?[^#]*)?(#.*)?$/i
/**
 * Validate email address
 */
export function isValidEmail(email: string): boolean {
    // TODO: Add content
  }
  return EMAIL_REGEX.test(email.trim())
}
/**
 * Validate phone number
 */
export function isValidPhone(phone: string): boolean {
    // TODO: Add content
  }
  return PHONE_REGEX.test(phone.trim())
}
/**
 * Validate URL
 */
export function isValidUrl(url: string): boolean {
    // TODO: Add content
  }
  return URL_REGEX.test(url.trim())
}
/**
 * Validate required field
 */
export function isRequired(value: string | null | undefined): boolean {
    // TODO: Add content
  }
  if (value === null || value === undefined) {
    // TODO: Add content
  }
    return false
  }
  return value.toString().trim().length > 0
}
/**
 * Validate minimum length
 */
export function minLength(value: string, min: number): boolean {
    // TODO: Add content
  }
  return value.trim().length >= min
}
/**
 * Validate maximum length
 */
export function maxLength(value: string, max: number): boolean {
    // TODO: Add content
  }
  return value.trim().length 
          
          
          
          
          
          
          
          
          <= max
}
/**
 * Validate string contains only alphanumeric characters
 */
export function isAlphanumeric(value: string): boolean {
    // TODO: Add content
  }
  return /^[a-zA-Z0-9]+$/.test(value)
}
/**
 * Validate string contains only letters
 */
export function isAlpha(value: string): boolean {
    // TODO: Add content
  }
  return /^[a-zA-Z]+$/.test(value)
}
/**
 * Validate string contains only numbers
 */
export function isNumeric(value: string): boolean {
    // TODO: Add content
  }
  return /^[0-9]+$/.test(value)
}
/**
 * Validate password strength
 * Requirements: at least 8 characters, 1 uppercase, 1 lowercase, 1 number
 */
export function isStrongPassword(password: string): boolean {
    // TODO: Add content
  }
  const hasMinLength = password.length >= 8
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.
          
          
          
          
          
          
          
          
          <>\/?]/.test(password)
  return hasMinLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar
}
/**
 * Get password strength score (0-4)
 */
export function getPasswordStrength(password: string): number {
  if (password.length >= 8) score++
  if (password.length >= 12) score++
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[^a-zA-Z0-9]/.test(password)) score++
  return Math.min(score, 4)
}
/**
 * Validate credit card number using Luhn algorithm
 */
export function isValidCreditCard(cardNumber: string): boolean {
    // TODO: Add content
  }
  const cleaned = cardNumber.replace(/\s/g, '')
  if (!/^\d{13,19}$/.test(cleaned)) {
    // TODO: Add content
  }
    return false
  }
  let sum = 0
  let isEven = false
  for (let i = cleaned.length - 1; i >= 0; i--) {
    // TODO: Add content
  }
    let digit = parseInt(cleaned.charAt(i), 10)
    if (isEven) {
    // TODO: Add content
  }
      digit *= 2
      if (digit > 9) {
    // TODO: Add content
  }
        digit -= 9
      }
    }
    sum += digit
    isEven = !isEven
  }
  return sum % 10 === 0
}
/**
 * Validate US ZIP code
 */
export function isValidZipCode(zipCode: string): boolean {
    // TODO: Add content
  }
  return /^\d{5}(-\d{4})?$/.test(zipCode)
}
/**
 * Sanitize HTML to prevent XSS
 */
export function sanitizeHtml(html: string): string {
    // TODO: Add content
  }
  const div = document.createElement('div')
  div.textContent = html
  return div.innerHTML
}
/**
 * Validate object against schema
 */
export function validateObject
          
          
          
          
          
          
          
          
          <T extends Record<string, unknown>>()
  obj: T,
  schema: Record
          <keyof T, (value: unknown) => boolean>
): ValidationResult {
    // TODO: Add content
  }
  const errors: string[] = []
  for (const key in schema) {
    // TODO: Add content
  }
    const validator = schema[key]
    const value = obj[key]
    if (!validator(value)) {
    // TODO: Add content
  }
      errors.push(`Invalid value for field: ${String(key)}`)
    }
  }
  return {
    // TODO: Add content
  }

//     errors
  }
}
/**
 * Validate form data
 */
export interface FormField {
    // TODO: Add content
  }
  value: string;,
    validators: Array
          
          
          
          
          
          
          
          
          <{
    // TODO: Add content
  }
  validate: (value: string) => boolean;,
    message: string
  }>
}
export function validateForm()
  fields: Record
          
          
          
          
          
          
          
          
          <string, FormField>
): Record<string, string[]> {
    // TODO: Add content
  }
  const errors: Record
          
          
          
          
          
          
          
          
          <string, string[]> = {}
  for (const fieldName in fields) {
    // TODO: Add content
  }
    const field = fields[fieldName]
    const fieldErrors: string[] = []
    for (const validator of field.validators) {
    // TODO: Add content
  }
      if (!validator.validate(field.value)) {
    // TODO: Add content
  }
        fieldErrors.push(validator.message)
      }
    }
    if (fieldErrors.length > 0) {
    // TODO: Add content
  }
      errors[fieldName] = fieldErrors
    }
  }
  return errors
}
/**
 * Common form validators
 */
export const validators = {
    // TODO: Add content
  }
  required: (message = 'This field is required') => ({
    // TODO: Add content
  }

//     message
  }),
  email: (message = 'Please enter a valid email address') => ({
    // TODO: Add content
  }

//     message
  }),
  phone: (message = 'Please enter a valid phone number') => ({
    // TODO: Add content
  }

//     message
  }),
  minLength: (min: number, message = `Minimum length is ${min} characters`) => ({
    // TODO: Add content
  }

//     message
  }),
  maxLength: (max: number, message = `Maximum length is ${max} characters`) => ({
    // TODO: Add content
  }

//     message
  }),
  password: (message = 'Password must be at least 8 characters with uppercase, lowercase, and number') => ({
    // TODO: Add content
  }

//     message
  }
  )
}
// Additional validation functions for tests
export interface ValidationResult {

  error?: string
}
export function validateEmail(email: string): ValidationResult {
  if (!isValidEmail(email)) {
    return { isValid: false, error: 'Invalid email format' }
  }
  if (email.length > 254) {
    return { isValid: false, error: 'Email address is too long' }
  }
  return { isValid: true }
}
export function validateURL(url: string): ValidationResult {
  if (!isValidUrl(url)) {
    return { isValid: false, error: 'Invalid URL format' }
  }
  return { isValid: true }
}
export function validateLength(value: string, min: number, max: number, fieldName = 'Field'): ValidationResult {
  if (value.length 
          
          
          
          
          
          
          
          
          < min) {
    return { isValid: false, error: `${fieldName} must be at least ${min} characters long` }
  }
  if (value.length > max) {
    return { isValid: false, error: `${fieldName} must be no more than ${max} characters long` }
  }
  return { isValid: true }
}
export function validatePassword(password: string): ValidationResult {
  if (password.length < 8) {
    return { isValid: false, error: 'Password must be at least 8 characters long' }
  }
  if (password.length > 128) {
    return { isValid: false, error: 'Password must be no more than 128 characters long' }
  }
  if (!isStrongPassword(password)) {
    return { isValid: false, error: 'Password must contain uppercase, lowercase, number, and special character' }
  }
  return { isValid: true }
}
export function sanitizeHTML(html: string): string {
  if (!html) return ''
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\// g, '&#x2F;')
}
export function validateDate(dateString: string): ValidationResult {
  if (!dateString || dateString.trim() === '') {
    return { isValid: false, error: 'Invalid date format' }
  }
  // Check for YYYY-MM-DD format
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/
  if (!dateRegex.test(dateString)) {
    return { isValid: false, error: 'Invalid date format' }
  }
  const date = new Date(dateString)
  if (isNaN(date.getTime())) {
    return { isValid: false, error: 'Invalid date format' }
  }
  // Check if the date is valid (e.g., 2025-02-30 should be invalid)
  const [year, month, day] = dateString.split('-').map(Number)
  const actualDate = new Date(year, month - 1, day)
  if (actualDate.getFullYear() !== year || actualDate.getMonth() !== month - 1 || actualDate.getDate() !== day) {
    return { isValid: false, error: 'Invalid date format' }
  }
  return { isValid: true }
}
export function validateCreditCard(cardNumber: string): ValidationResult {
  // Remove spaces and dashes
  const cleanNumber = cardNumber.replace(/[\s-]/g, '')
  if (!isValidCreditCard(cleanNumber)) {
    return { isValid: false, error: 'Invalid credit card number' }
  }
  return { isValid: true }
}
export function validateJSON(jsonString: string): ValidationResult {
  try {
    JSON.parse(jsonString)
    return { isValid: true }
  } catch {
    return { isValid: false, error: 'Invalid JSON format' }
  }
}
export function validateComposite(value: string, validators: Array
          
          
          
          
          
          
          
          
          <{ validate: (v: string) => boolean; message: string }>): ValidationResult {
  for (const validator of validators) {
    if (typeof validator.validate === 'function' && !validator.validate(value)) {
      return { isValid: false, error: validator.message }
    }
  }
  return { isValid: true }
}
export async function validateAsync(validator: (value: string) => Promise<boolean>, value: string): Promise<ValidationResult> {
  try {
    const isValid = await validator(value)
    return { isValid, error: isValid ? undefined : 'Validation failed' }
  } catch {
    return { isValid: false, error: 'Validation failed' }
  }
}
// Additional functions for tests
export function isValidPassword(password: string): boolean {
  return isStrongPassword(password)
}
export function sanitizeInput(input: string | null | undefined, maxLength?: number): string | null {
  if (input === null || input === undefined) {
    return null
  }
  let sanitized = input.toString().trim()
  // Remove null bytes and other control characters
  sanitized = sanitized.replace(/[\x00-\x1F\x7F]/g, '')
  if (sanitized.length === 0) {
    return null
  }
  if (maxLength && sanitized.length > maxLength) {
    sanitized = sanitized.substring(0, maxLength)
  }
  return sanitized
}