/**
 * Type Guard Utilities
 * Runtime type checking for TypeScript interfaces
 */

import {
  User,
  UserRole,
  ApiResponse,
  ApiError,
  PerformanceMetrics,
  FormState,
} from "./app.types";

// ============================================================================
// Basic Type Guards
// ============================================================================

export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isNumber(value: unknown): value is number {
  return typeof value === "number" && !isNaN(value);
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}

export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function isArray<T>(value: unknown): value is T[] {
  return Array.isArray(value);
}

export function isFunction(value: unknown): value is Function {
  return typeof value === "function";
}

export function isNull(value: unknown): value is null {
  return value === null;
}

export function isUndefined(value: unknown): value is undefined {
  return value === undefined;
}

export function isNullOrUndefined(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}

export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

// ============================================================================
// Complex Type Guards
// ============================================================================

export function isUser(value: unknown): value is User {
  if (!isObject(value)) return false;

  return (
    isString(value.id) &&
    isString(value.email) &&
    isString(value.name) &&
    isUserRole(value.role) &&
    value.createdAt instanceof Date &&
    value.updatedAt instanceof Date
  );
}

export function isUserRole(value: unknown): value is UserRole {
  return (
    value === UserRole.ADMIN ||
    value === UserRole.USER ||
    value === UserRole.GUEST
  );
}

export function isApiResponse<T>(value: unknown): value is ApiResponse<T> {
  if (!isObject(value)) return false;

  return (
    "data" in value &&
    isNumber(value.status) &&
    (value.message === undefined || isString(value.message))
  );
}

export function isApiError(value: unknown): value is ApiError {
  if (!isObject(value)) return false;

  return (
    isString(value.code) && isString(value.message) && isNumber(value.timestamp)
  );
}

export function isPerformanceMetrics(
  value: unknown,
): value is PerformanceMetrics {
  if (!isObject(value)) return false;

  return (
    isNumber(value.fcp) &&
    isNumber(value.lcp) &&
    isNumber(value.fid) &&
    isNumber(value.cls) &&
    isNumber(value.ttfb)
  );
}

export function isFormState<T extends Record<string, unknown>>(
  value: unknown,
): value is FormState<T> {
  if (!isObject(value)) return false;

  return (
    isObject(value.values) &&
    isObject(value.errors) &&
    isObject(value.touched) &&
    isBoolean(value.isSubmitting) &&
    isBoolean(value.isValid)
  );
}

// ============================================================================
// Value Validators
// ============================================================================

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 10;
}

export function isValidUUID(uuid: string): boolean {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
}

export function isValidHexColor(color: string): boolean {
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return hexRegex.test(color);
}

export function isValidDate(date: unknown): boolean {
  if (date instanceof Date) {
    return !isNaN(date.getTime());
  }

  if (isString(date)) {
    const parsed = new Date(date);
    return !isNaN(parsed.getTime());
  }

  return false;
}

// ============================================================================
// Range Validators
// ============================================================================

export function isInRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}

export function isPositive(value: number): boolean {
  return value > 0;
}

export function isNegative(value: number): boolean {
  return value < 0;
}

export function isNonNegative(value: number): boolean {
  return value >= 0;
}

// ============================================================================
// Collection Validators
// ============================================================================

export function isEmpty(value: unknown): boolean {
  if (isNullOrUndefined(value)) return true;
  if (isString(value) || isArray(value)) return value.length === 0;
  if (isObject(value)) return Object.keys(value).length === 0;
  return false;
}

export function isNonEmpty<T>(value: T[]): value is [T, ...T[]] {
  return value.length > 0;
}

export function hasLength<T>(value: T[], length: number): boolean {
  return value.length === length;
}

export function hasMinLength<T>(value: T[], minLength: number): boolean {
  return value.length >= minLength;
}

export function hasMaxLength<T>(value: T[], maxLength: number): boolean {
  return value.length <= maxLength;
}

// ============================================================================
// Object Validators
// ============================================================================

export function hasProperty<K extends string>(
  obj: unknown,
  key: K,
): obj is Record<K, unknown> {
  return isObject(obj) && key in obj;
}

export function hasProperties<K extends string>(
  obj: unknown,
  keys: K[],
): obj is Record<K, unknown> {
  return isObject(obj) && keys.every((key) => key in obj);
}

export function hasOwnProperty<K extends PropertyKey>(
  obj: unknown,
  key: K,
): obj is Record<K, unknown> {
  return isObject(obj) && Object.prototype.hasOwnProperty.call(obj, key);
}

// ============================================================================
// Error Handling
// ============================================================================

export function isError(value: unknown): value is Error {
  return value instanceof Error;
}

export function isErrorWithCode(
  value: unknown,
): value is Error & { code: string } {
  return isError(value) && "code" in value && isString(value.code);
}

// ============================================================================
// Type Assertion Helpers
// ============================================================================

export function assertDefined<T>(
  value: T | null | undefined,
  message = "Value must be defined",
): asserts value is T {
  if (isNullOrUndefined(value)) {
    throw new Error(message);
  }
}

export function assertString(
  value: unknown,
  message = "Value must be a string",
): asserts value is string {
  if (!isString(value)) {
    throw new Error(message);
  }
}

export function assertNumber(
  value: unknown,
  message = "Value must be a number",
): asserts value is number {
  if (!isNumber(value)) {
    throw new Error(message);
  }
}

export function assertArray<T>(
  value: unknown,
  message = "Value must be an array",
): asserts value is T[] {
  if (!isArray(value)) {
    throw new Error(message);
  }
}

export function assertObject(
  value: unknown,
  message = "Value must be an object",
): asserts value is Record<string, unknown> {
  if (!isObject(value)) {
    throw new Error(message);
  }
}

export function assertNever(value: never, message = "Unexpected value"): never {
  throw new Error(`${message}: ${JSON.stringify(value)}`);
}

// ============================================================================
// Safe Parsing
// ============================================================================

export function safeParseJSON<T>(json: string): T | null {
  try {
    return JSON.parse(json) as T;
  } catch {
    return null;
  }
}

export function safeParseNumber(value: string): number | null {
  const parsed = parseFloat(value);
  return isNaN(parsed) ? null : parsed;
}

export function safeParseInt(value: string, radix = 10): number | null {
  const parsed = parseInt(value, radix);
  return isNaN(parsed) ? null : parsed;
}

export function safeParseDate(value: string | Date): Date | null {
  try {
    const date = new Date(value);
    return isValidDate(date) ? date : null;
  } catch {
    return null;
  }
}
