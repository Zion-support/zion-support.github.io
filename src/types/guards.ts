/**
 * Type Guards and Validators for Runtime Type Checking
 */
import type {
  User,
  UserRole,
  PerformanceMetrics,
  ApiResponse,
  ApiError,
  BlogPost,
  Testimonial,
  FormState
} from './app.types';

// ============================================================================
// Basic Type Guards
// ============================================================================
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !isNaN(value);
}

export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

export function isFunction(value: unknown): value is Function {
  return typeof value === 'function';
}

export function isObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}

export function isDate(value: unknown): value is Date {
  return value instanceof Date && !isNaN(value.getTime());
}

export function isNullOrUndefined(value: unknown): value is null | undefined {
  return value === null || value === undefined;
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
    isDate(value.createdAt) &&
    isDate(value.updatedAt) &&
    (value.avatar === undefined || isString(value.avatar))
  );
}

export function isUserRole(value: unknown): value is UserRole {
  return isString(value) && Object.values(UserRole).includes(value as UserRole);
}

export function isPerformanceMetrics(value: unknown): value is PerformanceMetrics {
  if (!isObject(value)) return false;
  
  return (
    isNumber(value.fcp) &&
    isNumber(value.lcp) &&
    isNumber(value.fid) &&
    isNumber(value.cls) &&
    isNumber(value.ttfb) &&
    isNumber(value.renderTime) &&
    isNumber(value.loadTime) &&
    isNumber(value.memoryUsage)
  );
}

export function isApiResponse<T = unknown>(value: unknown): value is ApiResponse<T> {
  if (!isObject(value)) return false;
  
  return (
    isBoolean(value.success) &&
    isNumber(value.status) &&
    isNumber(value.timestamp) &&
    (value.message === undefined || isString(value.message))
  );
}

export function isApiError(value: unknown): value is ApiError {
  if (!isObject(value)) return false;
  
  return (
    isString(value.message) &&
    isString(value.code) &&
    isNumber(value.timestamp) &&
    (value.details === undefined || isObject(value.details))
  );
}

export function isBlogPost(value: unknown): value is BlogPost {
  if (!isObject(value)) return false;
  
  return (
    isString(value.id) &&
    isString(value.title) &&
    isString(value.content) &&
    isString(value.excerpt) &&
    isString(value.author) &&
    isDate(value.publishedAt) &&
    isDate(value.updatedAt) &&
    isArray(value.tags) &&
    isString(value.category) &&
    isString(value.slug) &&
    (value.featuredImage === undefined || isString(value.featuredImage))
  );
}

export function isTestimonial(value: unknown): value is Testimonial {
  if (!isObject(value)) return false;
  
  return (
    isString(value.id) &&
    isString(value.name) &&
    isString(value.role) &&
    isString(value.company) &&
    isString(value.content) &&
    isNumber(value.rating) &&
    (value.avatar === undefined || isString(value.avatar)) &&
    (value.website === undefined || isString(value.website))
  );
}

export function isFormState<T = Record<string, unknown>>(value: unknown): value is FormState<T> {
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

export function isValidPhoneNumber(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

export function isValidPassword(password: string): boolean {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

export function isValidUUID(uuid: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
}

export function isValidDateString(dateString: string): boolean {
  const date = new Date(dateString);
  return isDate(date) && date.toISOString() === dateString;
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

export function isNonNegative(value: number): boolean {
  return value >= 0;
}

export function isInteger(value: number): boolean {
  return Number.isInteger(value);
}

// ============================================================================
// Collection Validators
// ============================================================================
export function isEmpty(value: unknown): boolean {
  if (isNullOrUndefined(value)) return true;
  if (isString(value)) return value.length === 0;
  if (isArray(value)) return value.length === 0;
  if (isObject(value)) return Object.keys(value).length === 0;
  return false;
}

export function hasLength(value: unknown, length: number): boolean {
  if (isString(value) || isArray(value)) {
    return value.length === length;
  }
  return false;
}

export function hasMinLength(value: unknown, minLength: number): boolean {
  if (isString(value) || isArray(value)) {
    return value.length >= minLength;
  }
  return false;
}

export function hasMaxLength(value: unknown, maxLength: number): boolean {
  if (isString(value) || isArray(value)) {
    return value.length <= maxLength;
  }
  return false;
}

// ============================================================================
// Object Validators
// ============================================================================
export function hasProperty<K extends string>(
  obj: unknown,
  key: K
): obj is Record<K, unknown> {
  return isObject(obj) && key in obj;
}

export function hasProperties<K extends string>(
  obj: unknown,
  keys: K[]
): obj is Record<K, unknown> {
  return isObject(obj) && keys.every(key => key in obj);
}

export function hasOwnProperty<K extends string>(
  obj: unknown,
  key: K
): obj is Record<K, unknown> {
  return isObject(obj) && Object.prototype.hasOwnProperty.call(obj, key);
}

// ============================================================================
// Error Handling
// ============================================================================
export function isError(value: unknown): value is Error {
  return value instanceof Error;
}

export function isApiErrorInstance(value: unknown): value is ApiError {
  return isError(value) && 'code' in value && isString(value.code);
}

// ============================================================================
// Type Assertion Helpers
// ============================================================================
export function assertDefined<T>(
  value: T | null | undefined,
  message?: string
): asserts value is T {
  if (isNullOrUndefined(value)) {
    throw new Error(message || `Expected value to be defined, got ${value}`);
  }
}

export function assertString(
  value: unknown,
  message?: string
): asserts value is string {
  if (!isString(value)) {
    throw new Error(message || `Expected string, got ${typeof value}`);
  }
}

export function assertNumber(
  value: unknown,
  message?: string
): asserts value is number {
  if (!isNumber(value)) {
    throw new Error(message || `Expected number, got ${typeof value}`);
  }
}

export function assertBoolean(
  value: unknown,
  message?: string
): asserts value is boolean {
  if (!isBoolean(value)) {
    throw new Error(message || `Expected boolean, got ${typeof value}`);
  }
}

export function assertArray(
  value: unknown,
  message?: string
): asserts value is unknown[] {
  if (!isArray(value)) {
    throw new Error(message || `Expected array, got ${typeof value}`);
  }
}

export function assertObject(
  value: unknown,
  message?: string
): asserts value is Record<string, unknown> {
  if (!isObject(value)) {
    throw new Error(message || `Expected object, got ${typeof value}`);
  }
}

export function assertUser(
  value: unknown,
  message?: string
): asserts value is User {
  if (!isUser(value)) {
    throw new Error(message || `Expected User, got ${JSON.stringify(value)}`);
  }
}

export function assertApiResponse<T>(
  value: unknown,
  message?: string
): asserts value is ApiResponse<T> {
  if (!isApiResponse<T>(value)) {
    throw new Error(message || `Expected ApiResponse, got ${JSON.stringify(value)}`);
  }
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

export function safeParseNumber(value: unknown): number | null {
  if (isNumber(value)) return value;
  if (isString(value)) {
    const parsed = parseFloat(value);
    return isNaN(parsed) ? null : parsed;
  }
  return null;
}

export function safeParseBoolean(value: unknown): boolean | null {
  if (isBoolean(value)) return value;
  if (isString(value)) {
    const lower = value.toLowerCase();
    if (lower === 'true') return true;
    if (lower === 'false') return false;
  }
  if (isNumber(value)) {
    return value !== 0;
  }
  return null;
}

export function safeParseDate(value: unknown): Date | null {
  if (isDate(value)) return value;
  if (isString(value)) {
    const date = new Date(value);
    return isNaN(date.getTime()) ? null : date;
  }
  return null;
}

// ============================================================================
// Utility Functions
// ============================================================================
export function getNestedValue<T>(
  obj: Record<string, unknown>,
  path: string
): T | undefined {
  return path.split('.').reduce((current, key) => {
    return isObject(current) ? current[key] : undefined;
  }, obj) as T | undefined;
}

export function setNestedValue(
  obj: Record<string, unknown>,
  path: string,
  value: unknown
): void {
  const keys = path.split('.');
  const lastKey = keys.pop()!;
  const target = keys.reduce((current, key) => {
    if (!isObject(current[key])) {
      current[key] = {};
    }
    return current[key] as Record<string, unknown>;
  }, obj);
  target[lastKey] = value;
}

export function deepClone<T>(value: T): T {
  if (isArray(value)) {
    return value.map(item => deepClone(item)) as T;
  }
  if (isObject(value)) {
    const cloned = {} as Record<string, unknown>;
    for (const key in value) {
      if (hasOwnProperty(value, key)) {
        cloned[key] = deepClone(value[key]);
      }
    }
    return cloned as T;
  }
  return value;
}

export function isEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true;
  if (isNullOrUndefined(a) || isNullOrUndefined(b)) return false;
  if (isArray(a) && isArray(b)) {
    return a.length === b.length && a.every((item, index) => isEqual(item, b[index]));
  }
  if (isObject(a) && isObject(b)) {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    return keysA.length === keysB.length && 
           keysA.every(key => hasProperty(b, key) && isEqual(a[key], b[key]));
  }
  return false;
}