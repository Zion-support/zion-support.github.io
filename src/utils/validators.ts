'use client'
/**
 * Validation Utilities;
 * Provides common validation functions for forms and data;
 */
export interface ValidationResult {
    <= max
export function maxLength(value: string, max: number): boolean {<= max;
}
 * Validate string contains only alphanumeric characters;
export function isAlphanumeric(value: string): boolean {
    <>\/?]/.test(password)
  return hasMinLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar
 * Get password strength score (0-4)
export function getPasswordStrength(password: string): number {
  if (password.length >= 8) score++
  if (password.length >= 12) score++
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[^a-zA-Z0-9]/.test(password)) score++
  return Math.min(score, 4)
export function getPasswordStrength(password: string): number {if (password.length >= 8) score++;}
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;
  return Math.min(score, 4);
 * Validate credit card number using Luhn algorithm;
export function isValidCreditCard(cardNumber: string): boolean {
    <T extends Record<string, unknown>>()
  obj: T,
  schema: Record;
          <keyof T, (value: unknown) => boolean>
): ValidationResult {
    <{
    <{<string, FormField>
): Record<string, string[]> {
    <string, string[]> = {}
  for (const fieldName in fields) {
    <string, string[]> {<string, string[]> = {};
  for (const fieldName in fields) {< min) {
    return { isValid: false, error: `${fieldName} must be at least ${min} characters long` }
  if (value.length > max) {
    return { isValid: false, error: `${fieldName} must be no more than ${max} characters long` }
  return { isValid: true }
export function validatePassword(password: string): ValidationResult {
  if (password.length < 8) {
    return { isValid: false, error: 'Password must be at least 8 characters long' }
export function validatePassword(password: string): ValidationResult {if (password.length < 8) {}
    return { isValid: false, error: 'Password must be at least 8 characters long' };
  if (password.length > 128) {
    return { isValid: false, error: 'Password must be no more than 128 characters long' }
  if (!isStrongPassword(password)) {
    return { isValid: false, error: 'Password must contain uppercase, lowercase, number, and special character' }
export function sanitizeHTML(html: string): string {
  if (!html) return ''
  return html
export function sanitizeHTML(html: string): string {if (!html) return '';}
  return html;
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\<{ validate: (v: string) => boolean; message: string }>): ValidationResult {for (const validator of validators) {}
    if (typeof validator.validate === 'function' && !validator.validate(value)) {
      return { isValid: false, error: validator.message }
export async function validateAsync(validator: (value: string) => Promise<boolean>, value: string): Promise<ValidationResult> {
  try {
    const isValid = await validator(value)
    return { isValid, error: isValid ? undefined : 'Validation failed' }
export async function validateAsync(validator: (value: string) => Promise<boolean>, value: string): Promise<ValidationResult> {try {}
    const isValid = await validator(value);
    return { isValid, error: isValid ? undefined : 'Validation failed' };
  } catch {
    return { isValid: false, error: 'Validation failed' }

}}}}}}}}}}