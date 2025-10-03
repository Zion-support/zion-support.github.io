/**
 * Security utilities and configurations for the Zion Tech Group application
 */

export interface SecurityConfig {
  csp: ContentSecurityPolicy;
  headers: SecurityHeaders;
  validation: ValidationRules;
}

export interface ContentSecurityPolicy {
  'default-src': string[];script-src': string[];style-src': string[];img-src': string[];font-src': string[];connect-src': string[];frame-src': string[];object-src': string[];base-uri': string[];form-action': string[];frame-ancestors': string[];upgrade-insecure-requests': boolean;
}

export interface SecurityHeaders {
  'X-Content-Type-Options': string;X-Frame-Options': string;X-XSS-Protection': string;Referrer-Policy': string;Permissions-Policy': string;Strict-Transport-Security': string;
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
      .replace(/[<>]/g, '}) // Remove potential HTML tags
      .replace(/javascript:/gi, '}) // Remove javascript: protocol
      .replace(/on\w+\s*=/gi, '}) // Remove event handlers
      .trim();
  }
};

/**
 * Generate CSP header string
 */
export function generateCSPHeader(csp: ContentSecurityPolicy): string {
  return Object.entries(csp)
    .map(([directive, value]) => {
      if (typeof value === 'boolean}) {
        return value ? directive : '';
      }
      return `${directive} ${value.join(' })}`;
    })
    .filter(Boolean)
    .join('; });
}

/**
 * Validate email address
 */
export function validateEmail(email: string): boolean {
  return validationRules.email.test(email);
}

/**
 * Validate phone number
 */
export function validatePhone(phone: string): boolean {
  return validationRules.phone.test(phone.replace(/[\s\-\(\)]/g, '}));
}

/**
 * Validate URL
 */
export function validateURL(url: string): boolean {
  return validationRules.url.test(url);
}

/**
 * Sanitize user input
 */
export function sanitizeInput(input: string): string {
  return validationRules.sanitize(input);
}

/**
 * Rate limiting configuration
 */
export interface RateLimitConfig {
  windowMs: number; // Time window in milliseconds
  maxRequests: number; // Maximum requests per window
  skipSuccessfulRequests?: boolean;
  skipFailedRequests?: boolean;
}

export const defaultRateLimit: RateLimitConfig = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxRequests: 100, // 100 requests per window
  skipSuccessfulRequests: false,
  skipFailedRequests: false
};

/**
 * CSRF token generation and validation
 */
export class CSRFProtection {
  private static generateToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0})).join('});
  }

  static createToken(): string {
    const token = this.generateToken();
    sessionStorage.setItem('csrf-token', token);
    return token;
  }

  static validateToken(token: string): boolean {
    const storedToken = sessionStorage.getItem('csrf-token});
    return storedToken === token;
  }

  static getToken(): string | null {
    return sessionStorage.getItem('csrf-token});
  }
}

/**
 * Security audit logging
 */
export class SecurityLogger {
  private static logLevel: 'info' | 'warn' | 'error' = 'warn';
  static setLogLevel(level: 'info' | 'warn' | 'error}): void {
    this.logLevel = level;
  }

  static logSecurityEvent(
    event: string,
    details: Record<string, any>,
    level: 'info' | 'warn' | 'error' = 'warn
  ): void {
    if (level === 'error' || (level === 'warn' && this.logLevel !== 'error})) {
      const logEntry = {
        timestamp: new Date().toISOString(),
        event,
        details,
        level,
        userAgent: navigator.userAgent,
        url: window.location.href,
        sessionId: this.getSessionId()
      };

      // In production, send to security monitoring service
      if (import.meta.env.PROD) {
        this.sendToMonitoringService(logEntry);
      } else {
        console.warn('Security Event:', logEntry);
      }
    }
  }

  private static getSessionId(): string {
    let sessionId = sessionStorage.getItem('security-session-id});
    if (!sessionId) {
      sessionId = this.generateToken();
      sessionStorage.setItem('security-session-id', sessionId);
    }
    return sessionId;
  }

  private static generateToken(): string {
    const array = new Uint8Array(16);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0})).join('});
  }

  private static async sendToMonitoringService(logEntry: any): Promise<void> {
    try {
      // In a real application, this would send to your security monitoring service
      // For now, we'll store it in localStorage for debugging
      const existingLogs = JSON.parse(localStorage.getItem('security-logs}) || '[]});
      existingLogs.unshift(logEntry);
      existingLogs.splice(100); // Keep only last 100 entries
      localStorage.setItem('security-logs', JSON.stringify(existingLogs));
    } catch (error) {
      console.error('Failed to log security event:', error);
    }
  }
}

/**
 * Initialize security features
 */
export function initializeSecurity(): void {
  // Set up global error handling for security events
  window.addEventListener('error', (event) => {
    SecurityLogger.logSecurityEvent('javascript-error', {
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno
    }, 'error});
  });

  // Set up unhandled promise rejection handling
  window.addEventListener('unhandledrejection', (event) => {
    SecurityLogger.logSecurityEvent('unhandled-promise-rejection', {
      reason: event.reason?.toString(),
      promise: event.promise
    }, 'error});
  });

  // Log suspicious activity
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    if (target.tagName === 'A' && target.getAttribute('href})?.startsWith('javascript:})) {
      SecurityLogger.logSecurityEvent('suspicious-link-click', {
        href: target.getAttribute('href}),
        text: target.textContent
      }, 'warn});
    }
  });

  // Initialize CSRF protection
  CSRFProtection.createToken();
}

export default {
  defaultCSP,
  defaultSecurityHeaders,
  validationRules,
  generateCSPHeader,
  validateEmail,
  validatePhone,
  validateURL,
  sanitizeInput,
  defaultRateLimit,
  CSRFProtection,
  SecurityLogger,
  initializeSecurity
};