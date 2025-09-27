/**
 * Advanced Security Utilities for Zion Tech Group Website
 */

interface SecurityConfig {
  enableCSP: boolean;
  enableHSTS: boolean;
  enableXSSProtection: boolean;
  enableClickjackingProtection: boolean;
  enableMimeSniffingProtection: boolean;
  enableReferrerPolicy: boolean;
  allowedOrigins: string[];
  trustedDomains: string[];
}

class SecurityManager {
  private config: SecurityConfig;
  private cspNonce: string;

  constructor(config: Partial<SecurityConfig> = {}) {
    this.config = {
      enableCSP: true,
      enableHSTS: true,
      enableXSSProtection: true,
      enableClickjackingProtection: true,
      enableMimeSniffingProtection: true,
      enableReferrerPolicy: true,
      allowedOrigins: ['https://ziontechgroup.com', 'https://www.ziontechgroup.com'],
      trustedDomains: ['ziontechgroup.com', 'www.ziontechgroup.com'],
      ...config
    };
    
    this.cspNonce = this.generateNonce();
    this.initializeSecurity();
  }

  private generateNonce(): string {
    const array = new Uint8Array(16);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  private initializeSecurity(): void {
    if (typeof window === 'undefined') return;

    // Set security headers
    this.setSecurityHeaders();
    
    // Initialize Content Security Policy
    if (this.config.enableCSP) {
      this.initializeCSP();
    }
    
    // Initialize other security measures
    this.initializeXSSProtection();
    this.initializeClickjackingProtection();
    this.initializeMimeSniffingProtection();
    this.initializeReferrerPolicy();
    
    // Initialize input sanitization
    this.initializeInputSanitization();
    
    // Initialize rate limiting
    this.initializeRateLimiting();
  }

  private setSecurityHeaders(): void {
    // These would typically be set by the server, but we can set some client-side
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-Content-Type-Options';
    meta.content = 'nosniff';
    document.head.appendChild(meta);
  }

  private initializeCSP(): void {
    const csp = [
      "default-src 'self'",
      `script-src 'self' 'nonce-${this.cspNonce}' 'strict-dynamic' https://cdn.jsdelivr.net`,
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://api.ziontechgroup.com",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests"
    ].join('; ');

    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = csp;
    document.head.appendChild(meta);
  }

  private initializeXSSProtection(): void {
    if (!this.config.enableXSSProtection) return;

    // Sanitize user input
    const originalCreateElement = document.createElement;
    document.createElement = function(tagName: string) {
      const element = originalCreateElement.call(this, tagName);
      
      // Add input sanitization for form elements
      if (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement) {
        element.addEventListener('input', (e) => {
          const target = e.target as HTMLInputElement | HTMLTextAreaElement;
          target.value = SecurityManager.sanitizeInput(target.value);
        });
      }
      
      return element;
    };
  }

  private initializeClickjackingProtection(): void {
    if (!this.config.enableClickjackingProtection) return;

    // Check if page is in iframe
    if (window !== window.top) {
      // Redirect to main page if in iframe
      window.top.location.href = window.location.href;
    }
  }

  private initializeMimeSniffingProtection(): void {
    if (!this.config.enableMimeSniffingProtection) return;

    // This is typically handled by server headers
    console.log('MIME sniffing protection enabled');
  }

  private initializeReferrerPolicy(): void {
    if (!this.config.enableReferrerPolicy) return;

    const meta = document.createElement('meta');
    meta.name = 'referrer';
    meta.content = 'strict-origin-when-cross-origin';
    document.head.appendChild(meta);
  }

  private initializeInputSanitization(): void {
    // Override innerHTML to sanitize content
    const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML')!;
    
    Object.defineProperty(Element.prototype, 'innerHTML', {
      set: function(value: string) {
        const sanitized = SecurityManager.sanitizeHTML(value);
        originalInnerHTML.set!.call(this, sanitized);
      },
      get: originalInnerHTML.get
    });
  }

  private initializeRateLimiting(): void {
    const rateLimits = new Map<string, { count: number; resetTime: number }>();
    const RATE_LIMIT_WINDOW = 60000; // 1 minute
    const MAX_REQUESTS = 100; // Max requests per window

    // Override fetch to add rate limiting
    const originalFetch = window.fetch;
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      const key = typeof input === 'string' ? input : input.toString();
      const now = Date.now();
      
      // Check rate limit
      const limit = rateLimits.get(key);
      if (limit) {
        if (now < limit.resetTime) {
          if (limit.count >= MAX_REQUESTS) {
            throw new Error('Rate limit exceeded');
          }
          limit.count++;
        } else {
          limit.count = 1;
          limit.resetTime = now + RATE_LIMIT_WINDOW;
        }
      } else {
        rateLimits.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
      }
      
      return originalFetch(input, init);
    };
  }

  static sanitizeInput(input: string): string {
    return input
      .replace(/[<>]/g, '') // Remove angle brackets
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+\s*=/gi, '') // Remove event handlers
      .trim();
  }

  static sanitizeHTML(html: string): string {
    // Create a temporary div to parse HTML
    const temp = document.createElement('div');
    temp.textContent = html;
    return temp.innerHTML;
  }

  static validateURL(url: string): boolean {
    try {
      const parsed = new URL(url);
      return ['http:', 'https:'].includes(parsed.protocol);
    } catch {
      return false;
    }
  }

  static validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  static validatePhone(phone: string): boolean {
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }

  static generateSecureToken(length: number = 32): string {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  static hashPassword(password: string): Promise<string> {
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(password))
      .then(hash => Array.from(new Uint8Array(hash), byte => byte.toString(16).padStart(2, '0')).join(''));
  }

  static encrypt(data: string, key: string): Promise<string> {
    return crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(key),
      { name: 'AES-GCM' },
      false,
      ['encrypt']
    ).then(cryptoKey => {
      const iv = crypto.getRandomValues(new Uint8Array(12));
      return crypto.subtle.encrypt(
        { name: 'AES-GCM', iv },
        cryptoKey,
        new TextEncoder().encode(data)
      ).then(encrypted => {
        const combined = new Uint8Array(iv.length + encrypted.byteLength);
        combined.set(iv);
        combined.set(new Uint8Array(encrypted), iv.length);
        return btoa(String.fromCharCode(...combined));
      });
    });
  }

  static decrypt(encryptedData: string, key: string): Promise<string> {
    const combined = new Uint8Array(atob(encryptedData).split('').map(c => c.charCodeAt(0)));
    const iv = combined.slice(0, 12);
    const encrypted = combined.slice(12);
    
    return crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(key),
      { name: 'AES-GCM' },
      false,
      ['decrypt']
    ).then(cryptoKey => {
      return crypto.subtle.decrypt(
        { name: 'AES-GCM', iv },
        cryptoKey,
        encrypted
      ).then(decrypted => {
        return new TextDecoder().decode(decrypted);
      });
    });
  }

  getCSPNonce(): string {
    return this.cspNonce;
  }

  isOriginAllowed(origin: string): boolean {
    return this.config.allowedOrigins.includes(origin);
  }

  isDomainTrusted(domain: string): boolean {
    return this.config.trustedDomains.includes(domain);
  }

  // Security audit
  audit(): {
    csp: boolean;
    hsts: boolean;
    xssProtection: boolean;
    clickjackingProtection: boolean;
    mimeSniffingProtection: boolean;
    referrerPolicy: boolean;
    score: number;
  } {
    const checks = {
      csp: this.config.enableCSP,
      hsts: this.config.enableHSTS,
      xssProtection: this.config.enableXSSProtection,
      clickjackingProtection: this.config.enableClickjackingProtection,
      mimeSniffingProtection: this.config.enableMimeSniffingProtection,
      referrerPolicy: this.config.enableReferrerPolicy
    };

    const score = Object.values(checks).filter(Boolean).length / Object.keys(checks).length * 100;

    return {
      ...checks,
      score: Math.round(score)
    };
  }
}

// Export singleton instance
export const security = new SecurityManager();

// Export utility functions
export const {
  sanitizeInput,
  sanitizeHTML,
  validateURL,
  validateEmail,
  validatePhone,
  generateSecureToken,
  hashPassword,
  encrypt,
  decrypt
} = SecurityManager;

export default SecurityManager;