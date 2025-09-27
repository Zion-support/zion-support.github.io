// Enhanced Security Utilities for Web Applications

export interface SecurityConfig {
  enableCSP: boolean;
  enableXSSProtection: boolean;
  enableHSTS: boolean;
  enableReferrerPolicy: boolean;
  enablePermissionsPolicy: boolean;
}

export class SecurityManager {
  private static instance: SecurityManager;
  private config: SecurityConfig;

  private constructor(config: Partial<SecurityConfig> = {}) {
    this.config = {
      enableCSP: true,
      enableXSSProtection: true,
      enableHSTS: true,
      enableReferrerPolicy: true,
      enablePermissionsPolicy: true,
      ...config
    };
    this.initialize();
  }

  public static getInstance(config?: Partial<SecurityConfig>): SecurityManager {
    if (!SecurityManager.instance) {
      SecurityManager.instance = new SecurityManager(config);
    }
    return SecurityManager.instance;
  }

  private initialize(): void {
    if (this.config.enableCSP) {
      this.setupContentSecurityPolicy();
    }
    if (this.config.enableXSSProtection) {
      this.setupXSSProtection();
    }
    if (this.config.enableHSTS) {
      this.setupHSTS();
    }
    if (this.config.enableReferrerPolicy) {
      this.setupReferrerPolicy();
    }
    if (this.config.enablePermissionsPolicy) {
      this.setupPermissionsPolicy();
    }
    
    this.setupInputSanitization();
    this.setupClickjackingProtection();
  }

  private setupContentSecurityPolicy(): void {
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://unpkg.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https: wss:",
      "media-src 'self' https:",
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

  private setupXSSProtection(): void {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-Content-Type-Options';
    meta.content = 'nosniff';
    document.head.appendChild(meta);

    const xssProtection = document.createElement('meta');
    xssProtection.httpEquiv = 'X-XSS-Protection';
    xssProtection.content = '1; mode=block';
    document.head.appendChild(xssProtection);
  }

  private setupHSTS(): void {
    // Note: HSTS should be set by the server, but we can add the meta tag as a fallback
    if (location.protocol === 'https:') {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Strict-Transport-Security';
      meta.content = 'max-age=31536000; includeSubDomains; preload';
      document.head.appendChild(meta);
    }
  }

  private setupReferrerPolicy(): void {
    const meta = document.createElement('meta');
    meta.name = 'referrer';
    meta.content = 'strict-origin-when-cross-origin';
    document.head.appendChild(meta);
  }

  private setupPermissionsPolicy(): void {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Permissions-Policy';
    meta.content = 'camera=(), microphone=(), geolocation=(), payment=(), usb=()';
    document.head.appendChild(meta);
  }

  private setupClickjackingProtection(): void {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-Frame-Options';
    meta.content = 'DENY';
    document.head.appendChild(meta);
  }

  private setupInputSanitization(): void {
    // Add global input sanitization
    document.addEventListener('input', this.sanitizeInput.bind(this));
    document.addEventListener('paste', this.sanitizePaste.bind(this));
  }

  private sanitizeInput(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
      target.value = this.sanitizeString(target.value);
    }
  }

  private sanitizePaste(event: ClipboardEvent): void {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
      event.preventDefault();
      const paste = event.clipboardData?.getData('text') || '';
      const sanitized = this.sanitizeString(paste);
      target.value += sanitized;
    }
  }

  public sanitizeString(input: string): string {
    return input
      .replace(/[<>]/g, '') // Remove angle brackets
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+\s*=/gi, '') // Remove event handlers
      .replace(/eval\s*\(/gi, '') // Remove eval calls
      .trim();
  }

  public validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && !this.containsMaliciousContent(email);
  }

  public validateURL(url: string): boolean {
    try {
      const urlObj = new URL(url);
      return ['http:', 'https:'].includes(urlObj.protocol) && 
             !this.containsMaliciousContent(url);
    } catch {
      return false;
    }
  }

  private containsMaliciousContent(input: string): boolean {
    const maliciousPatterns = [
      /javascript:/gi,
      /data:text\/html/gi,
      /vbscript:/gi,
      /<script/gi,
      /on\w+\s*=/gi,
      /eval\s*\(/gi,
      /expression\s*\(/gi
    ];
    
    return maliciousPatterns.some(pattern => pattern.test(input));
  }

  public generateSecureToken(length: number = 32): string {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  public hashPassword(password: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    return crypto.subtle.digest('SHA-256', data).then(hash => {
      return Array.from(new Uint8Array(hash))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
    });
  }

  public setupSecureStorage(): {
    setItem: (key: string, value: string) => void;
    getItem: (key: string) => string | null;
    removeItem: (key: string) => void;
  } {
    const prefix = 'secure_';
    
    return {
      setItem: (key: string, value: string) => {
        const secureKey = prefix + this.sanitizeString(key);
        const secureValue = this.sanitizeString(value);
        try {
          localStorage.setItem(secureKey, secureValue);
        } catch (error) {
          console.warn('Secure storage failed:', error);
        }
      },
      getItem: (key: string) => {
        const secureKey = prefix + this.sanitizeString(key);
        try {
          return localStorage.getItem(secureKey);
        } catch (error) {
          console.warn('Secure storage retrieval failed:', error);
          return null;
        }
      },
      removeItem: (key: string) => {
        const secureKey = prefix + this.sanitizeString(key);
        try {
          localStorage.removeItem(secureKey);
        } catch (error) {
          console.warn('Secure storage removal failed:', error);
        }
      }
    };
  }

  public monitorSecurityEvents(): void {
    // Monitor for potential security issues
    window.addEventListener('error', this.handleSecurityError.bind(this));
    window.addEventListener('unhandledrejection', this.handleSecurityError.bind(this));
    
    // Monitor for suspicious activity
    let clickCount = 0;
    let lastClickTime = 0;
    
    document.addEventListener('click', () => {
      const now = Date.now();
      if (now - lastClickTime < 100) {
        clickCount++;
        if (clickCount > 10) {
          console.warn('Suspicious rapid clicking detected');
          this.reportSecurityEvent('rapid_clicking', { count: clickCount });
        }
      } else {
        clickCount = 0;
      }
      lastClickTime = now;
    });
  }

  private handleSecurityError(event: ErrorEvent | PromiseRejectionEvent): void {
    const error = 'error' in event ? event.error : event.reason;
    if (this.isSecurityRelatedError(error)) {
      this.reportSecurityEvent('security_error', { error: error.message });
    }
  }

  private isSecurityRelatedError(error: unknown): boolean {
    if (!error || typeof error !== 'object' || !('message' in error) || typeof error.message !== 'string') return false;
    
    const securityKeywords = [
      'script', 'eval', 'unsafe', 'blocked', 'csp', 'cors', 'mixed content'
    ];
    
    return securityKeywords.some(keyword => 
      (error as Error).message.toLowerCase().includes(keyword)
    );
  }

  private reportSecurityEvent(type: string, details: unknown): void {
    // In a real application, this would send to your security monitoring service
    console.warn(`Security Event [${type}]:`, details);
    
    // Could integrate with services like Sentry, LogRocket, etc.
    if (window.gtag) {
      window.gtag('event', 'security_event', {
        event_category: 'Security',
        event_label: type,
        value: 1
      });
    }
  }

  public cleanup(): void {
    // Remove event listeners and cleanup
    document.removeEventListener('input', this.sanitizeInput.bind(this));
    document.removeEventListener('paste', this.sanitizePaste.bind(this));
    window.removeEventListener('error', this.handleSecurityError.bind(this));
    window.removeEventListener('unhandledrejection', this.handleSecurityError.bind(this));
  }
}

// Initialize security manager
export const securityManager = SecurityManager.getInstance();

// Export utility functions
export const {
  sanitizeString,
  validateEmail,
  validateURL,
  generateSecureToken,
  hashPassword,
  setupSecureStorage
} = securityManager;