'use client'
/**
 * Data Validation Utility;
 * Provides comprehensive data validation with type safety;
 */
export interface ValidationRule<T = unknown> {
    <T = unknown> {<string, FieldRule[]>
export interface ValidationResult {
    <string, string[]>
}
export class ValidationError extends Error {
    <string, FieldRule[]>;
export interface ValidationResult {<string, string[]>;
export class ValidationError extends Error {<= max
export function validateStringLength(value: string, min: number, max?: number): boolean {<= max;
  return value.length >= min
 * Validate number range;
export function validateNumberRange(value: number, min: number, max: number): boolean {
    <= max
export function validateNumberRange(value: number, min: number, max: number): boolean {<= max;
 * Validate credit card number (basic Luhn algorithm)
export function validateCreditCard(cardNumber: string): boolean {
    < 13 || cleaned.length > 19) return false
  let isEven = false
  for (let i = cleaned.length - 1; i >= 0; i--) {
    < 13 || cleaned.length > 19) return false;
  let isEven = false;
  for (let i = cleaned.length - 1; i >= 0; i--) {< min.getTime()) return false
  if (max && time > max.getTime()) return false
  return true
export function validateDateRange(date: Date, min?: Date, max?: Date): boolean {< min.getTime()) return false;
  if (max && time > max.getTime()) return false;
  return true;
 * Sanitize HTML to prevent XSS;
export function sanitizeHTML(html: string): string {
    <script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
  <script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  <T>()
  validator: (value: T) => boolean,
  message: string,
): (value: T) => { isValid: boolean; errors: string[] } {
    < rule.min) return false
      if (rule.max !== undefined && value > rule.max) return false
      if (typeof value !== 'number') return false;
      if (rule.min !== undefined && value;
          < rule.min) return false;
      if (rule.max !== undefined && value > rule.max) return false;
    case 'string':
      if (typeof value !== 'string') return false
      if (rule.minLength !== undefined && value.length < rule.minLength) return false
      if (rule.maxLength !== undefined && value.length > rule.maxLength) return false
    case 'custom':
      return rule.custom ? rule.custom(value) : true
    default:
 * Validate form data;
export function validateForm<T extends Record<string, unknown>>()
  data: T,
  rules: ValidationRules,
): ValidationResult {
    <string, string[]> = {}
  for (const field in rules) {
    <string, string[]> = {};
  for (const field in rules) {<T>(): ValidationRule<T> => ({
    <string> => ({
    <= max,
    message: `Must be no more than ${max} characters long`
  }),
  pattern: (pattern: RegExp, message: string): ValidationRule<string> => ({
    <T>(): ValidationRule<T> => ({<string> => ({<string> => ({<string> => ({<string> => ({<= max,
  pattern: (pattern: RegExp, message: string): ValidationRule<string> => ({<number> => ({
    <number> => ({<T>(validator: (value: T) => boolean, message: string): ValidationRule<T> => ({
    <T>(validator: (value: T) => boolean, message: string): ValidationRule<T> => ({<string, unknown> {
    <string, unknown> {
}}}}}}}}}}}}}}}}}}}}}}}}}})))))