// Enhanced security utilities
export interface SecurityConfig {
  csp: ContentSecurityPolicy;
  headers: SecurityHeaders;
  validation: ValidationRules;
}

export interface ContentSecurityPolicy {
  'default-src': string[];
  'script-src': string[];
  'style-src': string[];
  'img-src': string[];
  'font-src': string[];
  'connect-src': string[];
  'frame-src': string[];
  'object-src': string[];
  'base-uri': string[];
  'form-action': string[];
  'frame-ancestors': string[];
  'upgrade-insecure-requests': boolean;
}

export interface SecurityHeaders {
  'X-Content-Type-Options': string;
  'X-Frame-Options': string;
  'X-XSS-Protection': string;
  'Referrer-Policy': string;
  'Permissions-Policy': string;
  'Strict-Transport-Security': string;
}

export interface ValidationRules {
  email: RegExp;
  phone: RegExp;
  url: RegExp;
  sanitize: (input: string) => string;
}

/**
 * Default Content Security Policy configuration
 */
export const defaultCSP: ContentSecurityPolicy = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
  'style-src': ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
  'img-src': ["'self'", "data:", "https:", "blob:"],
  'font-src': ["'self'", "https://fonts.gstatic.com"],
  'connect-src': ["'self'", "https:", "wss:"],
  'frame-src': ["'none'"],
  'object-src': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
  'frame-ancestors': ["'none'"],
  'upgrade-insecure-requests': true
};

/**
 * Default security headers
 */
export const defaultSecurityHeaders: SecurityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
};

/**
 * Input validation rules
 */
export const validationRules: ValidationRules = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\+]?[1-9][\d]{0,15}$/,
  url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
  sanitize: (input: string): string => {
    return input
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+\s*=/gi, '') // Remove event handlers
      .trim();
  }
};

export class SecurityManager {
  private static instance: SecurityManager;
  private sessionId: string;
  private csrfToken: string;

  private constructor() {
    this.sessionId = this.generateSessionId();
    this.csrfToken = this.generateToken();
  }

  public static getInstance(): SecurityManager {
    if (!SecurityManager.instance) {
      SecurityManager.instance = new SecurityManager();
    }
    return SecurityManager.instance;
  }

  private generateSessionId(): string {
    const existingSessionId = sessionStorage.getItem('sessionId');
    if (existingSessionId) {
      return existingSessionId;
    }
    
    const sessionId = 'session_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
    sessionStorage.setItem('sessionId', sessionId);
    return sessionId;
  }

  private generateToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  public getSessionId(): string {
    return this.sessionId;
  }

  public getCsrfToken(): string {
    return this.csrfToken;
  }

  public validateInput(input: string): boolean {
    const dangerousPatterns = [
      /<script[^>]*>.*?<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<iframe[^>]*>.*?<\/iframe>/gi
    ];

    return !dangerousPatterns.some(pattern => pattern.test(input));
  }

  public sanitizeHtml(html: string): string {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  public async hashPassword(password: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  }

  public generateSecureRandomString(length: number = 32): string {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }
}

// Content Security Policy utilities
export class CSPManager {
  static generateNonce(): string {
    const array = new Uint8Array(16);
    crypto.getRandomValues(array);
    return btoa(String.fromCharCode.apply(null, Array.from(array)));
  }

  static createCSPHeader(nonce: string): string {
    return `default-src 'self'; script-src 'self' 'nonce-${nonce}'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https:; font-src 'self' https:; object-src 'none'; base-uri 'self'; form-action 'self';`;
  }
}

// Rate limiting utilities
export class RateLimiter {
  private requests: Map<string, number[]> = new Map();

  public isAllowed(key: string, maxRequests: number = 100, windowMs: number = 60000): boolean {
    const now = Date.now();
    const requests = this.requests.get(key) || [];
    
    const validRequests = requests.filter(time => now - time < windowMs);
    
    if (validRequests.length >= maxRequests) {
      return false;
    }
    
    validRequests.push(now);
    this.requests.set(key, validRequests);
    
    return true;
  }

  public reset(key: string): void {
    this.requests.delete(key);
  }
}