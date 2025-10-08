/**
 * Security Utilities
 * Provides security helpers, CSP, and input validation
 */

/**
 * Content Security Policy configuration
 */
export const generateCSP = (): string => {
  const cspDirectives = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://cdn.jsdelivr.net",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com data:",
    "img-src 'self' data: https: blob:",
    "connect-src 'self' https://www.google-analytics.com https://api.github.com",
    "frame-src 'self' https://www.youtube.com https://player.vimeo.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "upgrade-insecure-requests",
  ];

  return cspDirectives.join('; ');
};

/**
 * Security headers configuration
 */
export const securityHeaders = {
  'Content-Security-Policy': generateCSP(),
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
};

/**
 * Sanitize HTML to prevent XSS attacks
 */
export const sanitizeHTML = (html: string): string => {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate URL format
 */
export const isValidURL = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

/**
 * Escape special characters for safe HTML rendering
 */
export const escapeHTML = (text: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };
  return text.replace(/[&<>"'/]/g, (char) => map[char]);
};

/**
 * Generate a random token for CSRF protection
 */
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  if (typeof window !== 'undefined' && window.crypto) {
    window.crypto.getRandomValues(array);
  }
  return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('');
};

/**
 * Validate input length
 */
export const isValidLength = (input: string, min: number, max: number): boolean => {
  return input.length >= min && input.length <= max;
};

/**
 * Check if string contains only alphanumeric characters
 */
export const isAlphanumeric = (str: string): boolean => {
  return /^[a-zA-Z0-9]+$/.test(str);
};

/**
 * Rate limiter for client-side requests
 */
export class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  private limit: number;
  private window: number;

  constructor(limit: number = 10, windowMs: number = 60000) {
    this.limit = limit;
    this.window = windowMs;
  }

  /**
   * Check if request is allowed
   */
  isAllowed(key: string): boolean {
    const now = Date.now();
    const requests = this.requests.get(key) || [];

    // Remove old requests outside the window
    const validRequests = requests.filter((timestamp) => now - timestamp < this.window);

    if (validRequests.length >= this.limit) {
      return false;
    }

    validRequests.push(now);
    this.requests.set(key, validRequests);
    return true;
  }

  /**
   * Reset rate limit for a key
   */
  reset(key: string): void {
    this.requests.delete(key);
  }

  /**
   * Get remaining requests for a key
   */
  getRemaining(key: string): number {
    const now = Date.now();
    const requests = this.requests.get(key) || [];
    const validRequests = requests.filter((timestamp) => now - timestamp < this.window);
    return Math.max(0, this.limit - validRequests.length);
  }
}

/**
 * Secure local storage wrapper
 */
export class SecureStorage {
  private prefix: string;

  constructor(prefix: string = 'app_') {
    this.prefix = prefix;
  }

  /**
   * Set item in storage with encryption
   */
  setItem(key: string, value: unknown): void {
    try {
      const data = JSON.stringify(value);
      // In production, you'd want to encrypt this data
      const encryptedData = btoa(data);
      localStorage.setItem(`${this.prefix}${key}`, encryptedData);
    } catch (error) {
      console.error('Failed to set storage item:', error);
    }
  }

  /**
   * Get item from storage with decryption
   */
  getItem<T>(key: string): T | null {
    try {
      const encryptedData = localStorage.getItem(`${this.prefix}${key}`);
      if (!encryptedData) return null;

      // In production, you'd want to decrypt this data
      const data = atob(encryptedData);
      return JSON.parse(data) as T;
    } catch (error) {
      console.error('Failed to get storage item:', error);
      return null;
    }
  }

  /**
   * Remove item from storage
   */
  removeItem(key: string): void {
    localStorage.removeItem(`${this.prefix}${key}`);
  }

  /**
   * Clear all items with prefix
   */
  clear(): void {
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      if (key.startsWith(this.prefix)) {
        localStorage.removeItem(key);
      }
    });
  }
}

/**
 * Password strength validator
 */
export const validatePasswordStrength = (
  password: string
): {
  isValid: boolean;
  score: number;
  feedback: string[];
} => {
  const feedback: string[] = [];
  let score = 0;

  if (password.length < 8) {
    feedback.push('Password must be at least 8 characters long');
  } else {
    score += 1;
  }

  if (!/[a-z]/.test(password)) {
    feedback.push('Password must contain lowercase letters');
  } else {
    score += 1;
  }

  if (!/[A-Z]/.test(password)) {
    feedback.push('Password must contain uppercase letters');
  } else {
    score += 1;
  }

  if (!/[0-9]/.test(password)) {
    feedback.push('Password must contain numbers');
  } else {
    score += 1;
  }

  if (!/[^a-zA-Z0-9]/.test(password)) {
    feedback.push('Password must contain special characters');
  } else {
    score += 1;
  }

  return {
    isValid: score >= 4,
    score,
    feedback,
  };
};

/**
 * Sanitize file name
 */
export const sanitizeFileName = (fileName: string): string => {
  // Remove dangerous characters and paths
  return fileName
    .replace(/[^a-zA-Z0-9._-]/g, '_')
    .replace(/\.\.+/g, '.')
    .substring(0, 255);
};

/**
 * Check if file type is allowed
 */
export const isAllowedFileType = (
  fileName: string,
  allowedExtensions: string[]
): boolean => {
  const ext = fileName.split('.').pop()?.toLowerCase();
  return ext ? allowedExtensions.includes(ext) : false;
};

/**
 * Generate nonce for inline scripts
 */
export const generateNonce = (): string => {
  if (typeof window !== 'undefined' && window.crypto) {
    const array = new Uint8Array(16);
    window.crypto.getRandomValues(array);
    return btoa(String.fromCharCode.apply(null, Array.from(array)));
  }
  return '';
};

export default {
  generateCSP,
  securityHeaders,
  sanitizeHTML,
  isValidEmail,
  isValidURL,
  escapeHTML,
  generateCSRFToken,
  isValidLength,
  isAlphanumeric,
  RateLimiter,
  SecureStorage,
  validatePasswordStrength,
  sanitizeFileName,
  isAllowedFileType,
  generateNonce,
};
