/**
 * Security utilities and configurations
 */

export interface SecurityHeaders {
  [key: string]: string;
}

export const securityHeaders: SecurityHeaders = {
  // Content Security Policy
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' data: https: blob:",
    "font-src 'self' https://fonts.gstatic.com",
    "connect-src 'self' https://api.github.com https://www.google-analytics.com",
    "frame-src 'none'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "upgrade-insecure-requests"
  ].join('; '),
  
  // Security headers
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
};

/**
 * Sanitize user input to prevent XSS attacks
 */
export function sanitizeInput(input: string): string {
  if (!input || typeof input !== 'string') return '';
  
  return input
    .replace(/[<>]/g, '') // Remove angle brackets
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim();
}

/**
 * Validate and sanitize URL to prevent open redirect attacks
 */
export function sanitizeUrl(url: string): string {
  if (!url || typeof url !== 'string') return '/';
  
  // Allow only relative URLs or URLs from same origin
  if (url.startsWith('/') && !url.startsWith('//')) {
    return url;
  }
  
  try {
    const urlObj = new URL(url, window.location.origin);
    if (urlObj.origin === window.location.origin) {
      return urlObj.pathname + urlObj.search + urlObj.hash;
    }
  } catch (e) {
    // Invalid URL
  }
  
  return '/';
}

/**
 * Generate a secure random token
 */
export function generateSecureToken(length: number = 32): string {
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }
  
  // Fallback for environments without crypto
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
}

/**
 * Rate limiting utility
 */
class RateLimiter {
  private requests: Map<string, number[]> = new Map();
  
  constructor(
    private maxRequests: number = 100,
    private windowMs: number = 15 * 60 * 1000 // 15 minutes
  ) {}
  
  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const windowStart = now - this.windowMs;
    
    if (!this.requests.has(identifier)) {
      this.requests.set(identifier, []);
    }
    
    const userRequests = this.requests.get(identifier)!;
    
    // Remove old requests outside the window
    while (userRequests.length > 0 && userRequests[0] < windowStart) {
      userRequests.shift();
    }
    
    if (userRequests.length >= this.maxRequests) {
      return false;
    }
    
    userRequests.push(now);
    return true;
  }
  
  reset(identifier?: string): void {
    if (identifier) {
      this.requests.delete(identifier);
    } else {
      this.requests.clear();
    }
  }
}

export const rateLimiter = new RateLimiter();

/**
 * CSRF token management
 */
export class CSRFProtection {
  private static tokenKey = '_csrf_token';
  
  static generateToken(): string {
    const token = generateSecureToken();
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.setItem(this.tokenKey, token);
    }
    return token;
  }
  
  static getToken(): string | null {
    if (typeof sessionStorage !== 'undefined') {
      return sessionStorage.getItem(this.tokenKey);
    }
    return null;
  }
  
  static validateToken(token: string): boolean {
    const storedToken = this.getToken();
    return storedToken !== null && storedToken === token;
  }
  
  static clearToken(): void {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem(this.tokenKey);
    }
  }
}

/**
 * Input validation utilities
 */
export const validators = {
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },
  
  password: (password: string): { valid: boolean; errors: string[] } => {
    const errors: string[] = [];
    
    if (password.length < 8) {
      errors.push('Password must be at least 8 characters long');
    }
    
    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter');
    }
    
    if (!/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter');
    }
    
    if (!/\d/.test(password)) {
      errors.push('Password must contain at least one number');
    }
    
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      errors.push('Password must contain at least one special character');
    }
    
    return {
      valid: errors.length === 0,
      errors
    };
  },
  
  url: (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },
  
  phoneNumber: (phone: string): boolean => {
    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
  }
};

/**
 * Secure storage wrapper
 */
export class SecureStorage {
  private static encrypt(data: string, key: string): string {
    // Simple XOR encryption for basic obfuscation
    let result = '';
    for (let i = 0; i < data.length; i++) {
      result += String.fromCharCode(
        data.charCodeAt(i) ^ key.charCodeAt(i % key.length)
      );
    }
    return btoa(result);
  }
  
  private static decrypt(encryptedData: string, key: string): string {
    try {
      const data = atob(encryptedData);
      let result = '';
      for (let i = 0; i < data.length; i++) {
        result += String.fromCharCode(
          data.charCodeAt(i) ^ key.charCodeAt(i % key.length)
        );
      }
      return result;
    } catch {
      return '';
    }
  }
  
  static setItem(key: string, value: string, encrypt: boolean = true): void {
    if (typeof localStorage === 'undefined') return;
    
    try {
      const dataToStore = encrypt ? this.encrypt(value, key) : value;
      localStorage.setItem(key, dataToStore);
    } catch (error) {
      console.error('Failed to store item securely:', error);
    }
  }
  
  static getItem(key: string, encrypted: boolean = true): string | null {
    if (typeof localStorage === 'undefined') return null;
    
    try {
      const storedData = localStorage.getItem(key);
      if (!storedData) return null;
      
      return encrypted ? this.decrypt(storedData, key) : storedData;
    } catch (error) {
      console.error('Failed to retrieve item securely:', error);
      return null;
    }
  }
  
  static removeItem(key: string): void {
    if (typeof localStorage === 'undefined') return;
    localStorage.removeItem(key);
  }
  
  static clear(): void {
    if (typeof localStorage === 'undefined') return;
    localStorage.clear();
  }
}