/**
 * Security utilities for the application
 */

export interface SecurityConfig {
  enableCSP: boolean;
  enableHSTS: boolean;
  enableXSSProtection: boolean;
  enableReferrerPolicy: boolean;
  enablePermissionsPolicy: boolean;
}

export class SecurityManager {
  private static instance: SecurityManager;
  private config: SecurityConfig;

  private constructor() {
    this.config = {
      enableCSP: true,
      enableHSTS: true,
      enableXSSProtection: true,
      enableReferrerPolicy: true,
      enablePermissionsPolicy: true,
    };
  }

  public static getInstance(): SecurityManager {
    if (!SecurityManager.instance) {
      SecurityManager.instance = new SecurityManager();
    }
    return SecurityManager.instance;
  }

  public getSecurityHeaders(): Record<string, string> {
    const headers: Record<string, string> = {};

    if (this.config.enableCSP) {
      headers['Content-Security-Policy'] = this.generateCSP();
    }

    if (this.config.enableHSTS) {
      headers['Strict-Transport-Security'] =
        'max-age=31536000; includeSubDomains; preload';
    }

    if (this.config.enableXSSProtection) {
      headers['X-XSS-Protection'] = '1; mode=block';
    }

    if (this.config.enableReferrerPolicy) {
      headers['Referrer-Policy'] = 'strict-origin-when-cross-origin';
    }

    if (this.config.enablePermissionsPolicy) {
      headers['Permissions-Policy'] = this.generatePermissionsPolicy();
    }

    headers['X-Frame-Options'] = 'DENY';
    headers['X-Content-Type-Options'] = 'nosniff';

    return headers;
  }

  private generateCSP(): string {
    const directives = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://api.ziontechgroup.com https://www.google-analytics.com",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      'upgrade-insecure-requests',
    ];

    return directives.join('; ');
  }

  private generatePermissionsPolicy(): string {
    const permissions = [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'usb=()',
      'magnetometer=()',
      'gyroscope=()',
      'speaker=()',
      'vibrate=()',
      'fullscreen=(self)',
      'payment=()',
    ];

    return permissions.join(', ');
  }

  public sanitizeInput(input: string): string {
    return input
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .replace(/['"]/g, '') // Remove quotes
      .replace(/[;]/g, '') // Remove semicolons
      .trim();
  }

  public validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  public validatePassword(password: string): {
    isValid: boolean;
    errors: string[];
  } {
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

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push('Password must contain at least one special character');
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  public generateSecureToken(length: number = 32): string {
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return result;
  }

  public hashString(input: string): Promise<string> {
    if (
      typeof window !== 'undefined' &&
      window.crypto &&
      window.crypto.subtle
    ) {
      const encoder = new TextEncoder();
      const data = encoder.encode(input);

      return window.crypto.subtle.digest('SHA-256', data).then(hashBuffer => {
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      });
    }

    // Fallback for server-side or older browsers
    return Promise.resolve(this.simpleHash(input));
  }

  private simpleHash(input: string): string {
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
      const char = input.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(16);
  }

  public detectXSS(input: string): boolean {
    const xssPatterns = [
      /<script[^>]*>.*?<\/script>/gi,
      /<iframe[^>]*>.*?<\/iframe>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<[^>]*>/gi,
    ];

    return xssPatterns.some(pattern => pattern.test(input));
  }

  public detectSQLInjection(input: string): boolean {
    const sqlPatterns = [
      /('|(\\')|(;)|(\-\-)|(\*)|(\%27)|(\%3B)|(\%2D)|(\%2D))/gi,
      /(union|select|insert|update|delete|drop|create|alter|exec|execute)/gi,
    ];

    return sqlPatterns.some(pattern => pattern.test(input));
  }

  public rateLimitCheck(
    identifier: string,
    maxRequests: number = 100,
    windowMs: number = 60000
  ): boolean {
    const now = Date.now();
    const windowStart = now - windowMs;

    // This is a simple in-memory rate limiter
    // In production, you'd want to use Redis or a similar persistent store
    if (!this.rateLimitStore) {
      this.rateLimitStore = new Map();
    }

    const key = `rate_limit_${identifier}`;
    const requests = this.rateLimitStore.get(key) || [];

    // Remove old requests outside the window
    const validRequests = requests.filter(
      (timestamp: number) => timestamp > windowStart
    );

    if (validRequests.length >= maxRequests) {
      return false; // Rate limit exceeded
    }

    // Add current request
    validRequests.push(now);
    this.rateLimitStore.set(key, validRequests);

    return true; // Request allowed
  }

  private rateLimitStore: Map<string, number[]> | null = null;
}

// CSRF protection
export function generateCSRFToken(): string {
  const manager = SecurityManager.getInstance();
  return manager.generateSecureToken(32);
}

export function validateCSRFToken(
  token: string,
  sessionToken: string
): boolean {
  return token === sessionToken && token.length === 32;
}

// Input sanitization
export function sanitizeHTML(input: string): string {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}

export function sanitizeURL(url: string): string {
  try {
    const urlObj = new URL(url);
    // Only allow http and https protocols
    if (urlObj.protocol === 'http:' || urlObj.protocol === 'https:') {
      return urlObj.toString();
    }
    throw new Error('Invalid protocol');
  } catch {
    return '';
  }
}
