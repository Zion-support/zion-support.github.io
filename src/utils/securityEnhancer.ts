// Security Enhancement Utilities

interface SecurityConfig {
  enableCSP: boolean;
  enableXSSProtection: boolean;
  enableClickjackingProtection: boolean;
  enableSecureHeaders: boolean;
  enableInputSanitization: boolean;
  enableRateLimiting: boolean;
}

interface SecurityViolation {
  type: string;
  description: string;
  timestamp: number;
  url: string;
  userAgent: string;
  blocked: boolean;
}

export class SecurityEnhancer {
  private static instance: SecurityEnhancer;
  private config: SecurityConfig;
  private violations: SecurityViolation[] = [];
  private rateLimitMap: Map<string, { count: number; lastReset: number }> = new Map();

  private constructor(config: Partial<SecurityConfig> = {}) {
    this.config = {
      enableCSP: true,
      enableXSSProtection: true,
      enableClickjackingProtection: true,
      enableSecureHeaders: true,
      enableInputSanitization: true,
      enableRateLimiting: true,
      ...config
    };
    this.initialize();
  }

  public static getInstance(config?: Partial<SecurityConfig>): SecurityEnhancer {
    if (!SecurityEnhancer.instance) {
      SecurityEnhancer.instance = new SecurityEnhancer(config);
    }
    return SecurityEnhancer.instance;
  }

  private initialize(): void {
    if (this.config.enableCSP) {
      this.setupContentSecurityPolicy();
    }
    if (this.config.enableXSSProtection) {
      this.enableXSSProtection();
    }
    if (this.config.enableClickjackingProtection) {
      this.enableClickjackingProtection();
    }
    if (this.config.enableSecureHeaders) {
      this.setupSecureHeaders();
    }
    if (this.config.enableInputSanitization) {
      this.setupInputSanitization();
    }
    if (this.config.enableRateLimiting) {
      this.setupRateLimiting();
    }

    this.setupSecurityMonitoring();
  }

  private setupContentSecurityPolicy(): void {
    // Set up CSP headers (this would typically be done server-side)
    const cspDirectives = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://api.example.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "object-src 'none'"
    ];

    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = cspDirectives.join('; ');
    document.head.appendChild(meta);

    // Monitor CSP violations
    document.addEventListener('securitypolicyviolation', (event) => {
      this.reportSecurityViolation({
        type: 'CSP Violation',
        description: `${event.violatedDirective}: ${event.blockedURI}`,
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        blocked: true
      });
    });
  }

  private enableXSSProtection(): void {
    // XSS Protection header (typically set server-side)
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-XSS-Protection';
    meta.content = '1; mode=block';
    document.head.appendChild(meta);

    // Client-side XSS detection
    this.setupXSSDetection();
  }

  private enableClickjackingProtection(): void {
    // X-Frame-Options header (typically set server-side)
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-Frame-Options';
    meta.content = 'DENY';
    document.head.appendChild(meta);

    // Client-side clickjacking detection
    if (window.top !== window.self) {
      this.reportSecurityViolation({
        type: 'Clickjacking Attempt',
        description: 'Page loaded in frame',
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        blocked: false
      });
    }
  }

  private setupSecureHeaders(): void {
    // Additional security headers (typically set server-side)
    const headers = [
      { name: 'X-Content-Type-Options', value: 'nosniff' },
      { name: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { name: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
    ];

    headers.forEach(header => {
      const meta = document.createElement('meta');
      meta.httpEquiv = header.name;
      meta.content = header.value;
      document.head.appendChild(meta);
    });
  }

  private setupInputSanitization(): void {
    // Sanitize all form inputs
    document.addEventListener('input', (event) => {
      const target = event.target as HTMLInputElement | HTMLTextAreaElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        const sanitized = this.sanitizeInput(target.value);
        if (sanitized !== target.value) {
          target.value = sanitized;
          this.reportSecurityViolation({
            type: 'Input Sanitization',
            description: 'Potentially malicious input detected and sanitized',
            timestamp: Date.now(),
            url: window.location.href,
            userAgent: navigator.userAgent,
            blocked: true
          });
        }
      }
    });
  }

  private setupRateLimiting(): void {
    // Rate limiting for API calls
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const url = args[0].toString();
      const key = this.getRateLimitKey(url);
      
      if (this.isRateLimited(key)) {
        this.reportSecurityViolation({
          type: 'Rate Limiting',
          description: `Rate limit exceeded for ${url}`,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
          blocked: true
        });
        throw new Error('Rate limit exceeded');
      }
      
      this.incrementRateLimit(key);
      return originalFetch(...args);
    };
  }

  private setupXSSDetection(): void {
    // Monitor for potential XSS attempts
    const dangerousPatterns = [
      /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<iframe\b[^>]*>/gi,
      /<object\b[^>]*>/gi,
      /<embed\b[^>]*>/gi
    ];

    // Check URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.forEach((value, key) => {
      dangerousPatterns.forEach(pattern => {
        if (pattern.test(value)) {
          this.reportSecurityViolation({
            type: 'XSS Attempt',
            description: `Malicious content detected in URL parameter: ${key}`,
            timestamp: Date.now(),
            url: window.location.href,
            userAgent: navigator.userAgent,
            blocked: true
          });
        }
      });
    });

    // Check hash
    if (window.location.hash) {
      dangerousPatterns.forEach(pattern => {
        if (pattern.test(window.location.hash)) {
          this.reportSecurityViolation({
            type: 'XSS Attempt',
            description: 'Malicious content detected in URL hash',
            timestamp: Date.now(),
            url: window.location.href,
            userAgent: navigator.userAgent,
            blocked: true
          });
        }
      });
    }
  }

  private setupSecurityMonitoring(): void {
    // Monitor for suspicious activities
    let clickCount = 0;
    let keyCount = 0;
    const resetInterval = 10000; // 10 seconds

    document.addEventListener('click', () => {
      clickCount++;
      if (clickCount > 100) { // Suspicious rapid clicking
        this.reportSecurityViolation({
          type: 'Suspicious Activity',
          description: 'Rapid clicking detected',
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
          blocked: false
        });
      }
    });

    document.addEventListener('keydown', () => {
      keyCount++;
      if (keyCount > 500) { // Suspicious rapid typing
        this.reportSecurityViolation({
          type: 'Suspicious Activity',
          description: 'Rapid typing detected',
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
          blocked: false
        });
      }
    });

    // Reset counters periodically
    setInterval(() => {
      clickCount = 0;
      keyCount = 0;
    }, resetInterval);

    // Monitor for developer tools
    let devtools = false;
    setInterval(() => {
      if (window.outerHeight - window.innerHeight > 200 || 
          window.outerWidth - window.innerWidth > 200) {
        if (!devtools) {
          devtools = true;
          this.reportSecurityViolation({
            type: 'Developer Tools',
            description: 'Developer tools opened',
            timestamp: Date.now(),
            url: window.location.href,
            userAgent: navigator.userAgent,
            blocked: false
          });
        }
      } else {
        devtools = false;
      }
    }, 1000);
  }

  private sanitizeInput(input: string): string {
    // Remove potentially dangerous characters and patterns
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^>]*>/gi, '')
      .replace(/<object\b[^>]*>/gi, '')
      .replace(/<embed\b[^>]*>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '')
      .replace(/[<>]/g, (match) => match === '<' ? '&lt;' : '&gt;');
  }

  private getRateLimitKey(url: string): string {
    // Create a key for rate limiting based on URL and user
    const urlObj = new URL(url, window.location.origin);
    return `${urlObj.pathname}:${this.getUserIdentifier()}`;
  }

  private getUserIdentifier(): string {
    // Get a user identifier (IP would be better, but not available client-side)
    return navigator.userAgent + window.screen.width + window.screen.height;
  }

  private isRateLimited(key: string): boolean {
    const now = Date.now();
    const limit = this.rateLimitMap.get(key);
    
    if (!limit) return false;
    
    // Reset if more than 1 minute has passed
    if (now - limit.lastReset > 60000) {
      this.rateLimitMap.delete(key);
      return false;
    }
    
    // Allow max 100 requests per minute
    return limit.count >= 100;
  }

  private incrementRateLimit(key: string): void {
    const now = Date.now();
    const limit = this.rateLimitMap.get(key);
    
    if (!limit || now - limit.lastReset > 60000) {
      this.rateLimitMap.set(key, { count: 1, lastReset: now });
    } else {
      limit.count++;
    }
  }

  private reportSecurityViolation(violation: SecurityViolation): void {
    this.violations.push(violation);
    
    // Keep only last 100 violations
    if (this.violations.length > 100) {
      this.violations.shift();
    }
    
    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.warn('Security Violation:', violation);
    }
    
    // Report to security service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendSecurityReport(violation);
    }
  }

  private async sendSecurityReport(violation: SecurityViolation): Promise<void> {
    try {
      await fetch('/api/security/violations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(violation)
      });
    } catch (error) {
      console.error('Failed to report security violation:', error);
    }
  }

  public getViolations(): SecurityViolation[] {
    return [...this.violations];
  }

  public clearViolations(): void {
    this.violations = [];
  }

  public validateURL(url: string): boolean {
    try {
      const urlObj = new URL(url);
      
      // Check for dangerous protocols
      const dangerousProtocols = ['javascript:', 'data:', 'vbscript:'];
      if (dangerousProtocols.includes(urlObj.protocol)) {
        return false;
      }
      
      // Check for suspicious domains
      const suspiciousDomains = ['bit.ly', 'tinyurl.com']; // Add more as needed
      if (suspiciousDomains.includes(urlObj.hostname)) {
        return false;
      }
      
      return true;
    } catch {
      return false;
    }
  }

  public encryptSensitiveData(data: string): string {
    // Simple encryption (in production, use proper encryption libraries)
    return btoa(data);
  }

  public decryptSensitiveData(encryptedData: string): string {
    try {
      return atob(encryptedData);
    } catch {
      return '';
    }
  }

  public cleanup(): void {
    this.violations = [];
    this.rateLimitMap.clear();
  }
}

// Utility functions
export const enhanceSecurity = (config?: Partial<SecurityConfig>) => {
  return SecurityEnhancer.getInstance(config);
};

export const sanitizeHTML = (html: string): string => {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): { valid: boolean; errors: string[] } => {
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
  
  return { valid: errors.length === 0, errors };
};

// Initialize security enhancer
export const securityEnhancer = SecurityEnhancer.getInstance();