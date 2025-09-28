/**
 * Enhanced Security Manager
 * Comprehensive security monitoring, protection, and compliance management
 */

interface SecurityConfig {
  enableCSP: boolean;
  enableXSSProtection: boolean;
  enableCSRFProtection: boolean;
  enableClickjackingProtection: boolean;
  enableSecureHeaders: boolean;
  enableContentSecurityPolicy: boolean;
  enableHSTS: boolean;
  enableReferrerPolicy: boolean;
  enableFeaturePolicy: boolean;
  enablePermissionsPolicy: boolean;
  enableRateLimiting: boolean;
  enableInputValidation: boolean;
  enableOutputEncoding: boolean;
}

interface SecurityMetrics {
  blockedRequests: number;
  xssAttempts: number;
  csrfAttempts: number;
  clickjackingAttempts: number;
  suspiciousActivity: number;
  securityViolations: number;
  blockedDomains: number;
  secureConnections: number;
  insecureConnections: number;
  rateLimitHits: number;
  inputValidationFailures: number;
}

interface SecurityEvent {
  type: 'xss' | 'csrf' | 'clickjacking' | 'insecure_content' | 'suspicious_activity' | 'rate_limit' | 'input_validation';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: number;
  source: string;
  userAgent: string;
  ip?: string;
  blocked: boolean;
  details?: Record<string, unknown>;
}

interface SecurityPolicy {
  name: string;
  type: 'csp' | 'hsts' | 'referrer' | 'feature' | 'permissions';
  value: string;
  reportOnly?: boolean;
}

class EnhancedSecurityManager {
  private config: SecurityConfig;
  private metrics: SecurityMetrics;
  private securityEvents: SecurityEvent[] = [];
  private blockedDomains: Set<string> = new Set();
  private suspiciousPatterns: RegExp[] = [];
  private rateLimitMap: Map<string, { count: number; resetTime: number }> = new Map();
  private securityPolicies: SecurityPolicy[] = [];

  constructor(config: Partial<SecurityConfig> = {}) {
    this.config = {
      enableCSP: true,
      enableXSSProtection: true,
      enableCSRFProtection: true,
      enableClickjackingProtection: true,
      enableSecureHeaders: true,
      enableContentSecurityPolicy: true,
      enableHSTS: true,
      enableReferrerPolicy: true,
      enableFeaturePolicy: true,
      enablePermissionsPolicy: true,
      enableRateLimiting: true,
      enableInputValidation: true,
      enableOutputEncoding: true,
      ...config
    };

    this.metrics = {
      blockedRequests: 0,
      xssAttempts: 0,
      csrfAttempts: 0,
      clickjackingAttempts: 0,
      suspiciousActivity: 0,
      securityViolations: 0,
      blockedDomains: 0,
      secureConnections: 0,
      insecureConnections: 0,
      rateLimitHits: 0,
      inputValidationFailures: 0
    };

    this.initialize();
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;

    this.initializeSuspiciousPatterns();
    this.setupSecurityHeaders();
    this.setupEventListeners();
    this.setupContentSecurityPolicy();
    this.setupRateLimiting();
    this.monitorSecurityEvents();
  }

  private initializeSuspiciousPatterns(): void {
    this.suspiciousPatterns = [
      // XSS patterns
      /<script[^>]*>.*?<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<iframe[^>]*>.*?<\/iframe>/gi,
      /<object[^>]*>.*?<\/object>/gi,
      /<embed[^>]*>.*?<\/embed>/gi,
      /<link[^>]*>.*?<\/link>/gi,
      /<meta[^>]*>.*?<\/meta>/gi,
      /<style[^>]*>.*?<\/style>/gi,
      /<form[^>]*>.*?<\/form>/gi,
      
      // SQL injection patterns
      /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION|SCRIPT)\b)/gi,
      /(\b(OR|AND)\s+\d+\s*=\s*\d+)/gi,
      /('|(\\')|(;)|(--)|(\/\*)|(\*\/))/gi,
      
      // Path traversal patterns
      /\.\.\//gi,
      /\.\.\\/gi,
      /%2e%2e%2f/gi,
      /%2e%2e%5c/gi,
      
      // Command injection patterns
      /(\||&|;|\$\(|`)/gi,
      /(\b(cmd|command|exec|system|shell)\b)/gi,
      
      // CSRF patterns
      /<img[^>]*src\s*=\s*["']?[^"'>\s]+["']?[^>]*>/gi,
      /<link[^>]*href\s*=\s*["']?[^"'>\s]+["']?[^>]*>/gi,
      
      // Clickjacking patterns
      /<iframe[^>]*style\s*=\s*["'][^"']*position\s*:\s*absolute[^"']*["'][^>]*>/gi,
      /<iframe[^>]*style\s*=\s*["'][^"']*opacity\s*:\s*0[^"']*["'][^>]*>/gi
    ];
  }

  private setupSecurityHeaders(): void {
    if (!this.config.enableSecureHeaders) return;

    // Set security headers via meta tags (for client-side protection)
    const securityHeaders = [
      { name: 'X-Content-Type-Options', content: 'nosniff' },
      { name: 'X-Frame-Options', content: 'DENY' },
      { name: 'X-XSS-Protection', content: '1; mode=block' },
      { name: 'Referrer-Policy', content: 'strict-origin-when-cross-origin' },
      { name: 'Permissions-Policy', content: 'camera=(), microphone=(), geolocation=()' }
    ];

    securityHeaders.forEach(header => {
      const meta = document.createElement('meta');
      meta.httpEquiv = header.name;
      meta.content = header.content;
      document.head.appendChild(meta);
    });
  }

  private setupContentSecurityPolicy(): void {
    if (!this.config.enableContentSecurityPolicy) return;

    const cspPolicy = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://unpkg.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src 'self' https://fonts.gstatic.com;
      img-src 'self' data: https:;
      connect-src 'self' https:;
      frame-src 'none';
      object-src 'none';
      base-uri 'self';
      form-action 'self';
    `.replace(/\s+/g, ' ').trim();

    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = cspPolicy;
    document.head.appendChild(meta);

    this.securityPolicies.push({
      name: 'Content Security Policy',
      type: 'csp',
      value: cspPolicy
    });
  }

  private setupEventListeners(): void {
    // Monitor for suspicious activity
    document.addEventListener('DOMContentLoaded', () => {
      this.scanForSuspiciousContent();
    });

    // Monitor form submissions
    document.addEventListener('submit', (event) => {
      this.validateFormSubmission(event);
    });

    // Monitor input changes
    document.addEventListener('input', (event) => {
      this.validateInput(event);
    });

    // Monitor for clickjacking attempts
    window.addEventListener('click', (event) => {
      this.detectClickjacking(event);
    });

    // Monitor for XSS attempts
    document.addEventListener('DOMNodeInserted', (event) => {
      this.detectXSS(event);
    });
  }

  private setupRateLimiting(): void {
    if (!this.config.enableRateLimiting) return;

    // Monitor API calls and requests
    const originalFetch = window.fetch;
    window.fetch = (...args) => {
      const url = args[0] as string;
      const key = this.getRateLimitKey(url);
      
      if (this.isRateLimited(key)) {
        this.metrics.rateLimitHits++;
        this.logSecurityEvent({
          type: 'rate_limit',
          severity: 'medium',
          message: 'Rate limit exceeded',
          timestamp: Date.now(),
          source: url,
          userAgent: navigator.userAgent,
          blocked: true,
          details: { url, key }
        });
        
        return Promise.reject(new Error('Rate limit exceeded'));
      }
      
      this.incrementRateLimit(key);
      return originalFetch.apply(window, args);
    };
  }

  private getRateLimitKey(url: string): string {
    // Create a rate limit key based on the URL and user
    const urlObj = new URL(url, window.location.origin);
    return `${urlObj.pathname}:${navigator.userAgent.slice(0, 50)}`;
  }

  private isRateLimited(key: string): boolean {
    const limit = this.rateLimitMap.get(key);
    if (!limit) return false;
    
    if (Date.now() > limit.resetTime) {
      this.rateLimitMap.delete(key);
      return false;
    }
    
    return limit.count >= 100; // 100 requests per minute
  }

  private incrementRateLimit(key: string): void {
    const limit = this.rateLimitMap.get(key) || { count: 0, resetTime: Date.now() + 60000 };
    limit.count++;
    this.rateLimitMap.set(key, limit);
  }

  private scanForSuspiciousContent(): void {
    const allText = document.body.textContent || '';
    
    this.suspiciousPatterns.forEach(pattern => {
      const matches = allText.match(pattern);
      if (matches) {
        matches.forEach(match => {
          this.logSecurityEvent({
            type: 'suspicious_activity',
            severity: 'medium',
            message: `Suspicious pattern detected: ${match.substring(0, 50)}...`,
            timestamp: Date.now(),
            source: 'content-scan',
            userAgent: navigator.userAgent,
            blocked: false,
            details: { pattern: pattern.source, match }
          });
        });
      }
    });
  }

  private validateFormSubmission(event: Event): void {
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Check for CSRF token
    const csrfToken = formData.get('csrf_token');
    if (!csrfToken) {
      this.metrics.csrfAttempts++;
      this.logSecurityEvent({
        type: 'csrf',
        severity: 'high',
        message: 'CSRF token missing',
        timestamp: Date.now(),
        source: form.action || 'form-submission',
        userAgent: navigator.userAgent,
        blocked: true
      });
      
      event.preventDefault();
      return;
    }
    
    // Validate form data
    formData.forEach((value, key) => {
      if (typeof value === 'string') {
        this.validateInputValue(value, key);
      }
    });
  }

  private validateInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.value) {
      this.validateInputValue(input.value, input.name || input.id);
    }
  }

  private validateInputValue(value: string, fieldName: string): void {
    if (!this.config.enableInputValidation) return;
    
    // Check for XSS attempts
    if (this.containsXSSPattern(value)) {
      this.metrics.xssAttempts++;
      this.logSecurityEvent({
        type: 'xss',
        severity: 'high',
        message: 'XSS attempt detected in input',
        timestamp: Date.now(),
        source: fieldName,
        userAgent: navigator.userAgent,
        blocked: true,
        details: { fieldName, value: value.substring(0, 100) }
      });
    }
    
    // Check for SQL injection attempts
    if (this.containsSQLInjectionPattern(value)) {
      this.logSecurityEvent({
        type: 'suspicious_activity',
        severity: 'high',
        message: 'SQL injection attempt detected',
        timestamp: Date.now(),
        source: fieldName,
        userAgent: navigator.userAgent,
        blocked: true,
        details: { fieldName, value: value.substring(0, 100) }
      });
    }
  }

  private containsXSSPattern(value: string): boolean {
    const xssPatterns = [
      /<script[^>]*>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<iframe[^>]*>/gi,
      /<object[^>]*>/gi,
      /<embed[^>]*>/gi
    ];
    
    return xssPatterns.some(pattern => pattern.test(value));
  }

  private containsSQLInjectionPattern(value: string): boolean {
    const sqlPatterns = [
      /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION)\b)/gi,
      /(\b(OR|AND)\s+\d+\s*=\s*\d+)/gi,
      /('|(\\')|(;)|(--)|(\/\*)|(\*\/))/gi
    ];
    
    return sqlPatterns.some(pattern => pattern.test(value));
  }

  private detectClickjacking(event: MouseEvent): void {
    const element = event.target as Element;
    const rect = element.getBoundingClientRect();
    
    // Check if element is positioned to overlay other elements
    if (rect.width === 0 && rect.height === 0) {
      this.metrics.clickjackingAttempts++;
      this.logSecurityEvent({
        type: 'clickjacking',
        severity: 'medium',
        message: 'Potential clickjacking detected',
        timestamp: Date.now(),
        source: element.tagName.toLowerCase(),
        userAgent: navigator.userAgent,
        blocked: false,
        details: { element: element.outerHTML.substring(0, 100) }
      });
    }
  }

  private detectXSS(event: Event): void {
    const target = event.target as Element;
    if (target && target.innerHTML) {
      if (this.containsXSSPattern(target.innerHTML)) {
        this.metrics.xssAttempts++;
        this.logSecurityEvent({
          type: 'xss',
          severity: 'critical',
          message: 'XSS injection detected',
          timestamp: Date.now(),
          source: 'DOM-insertion',
          userAgent: navigator.userAgent,
          blocked: true,
          details: { content: target.innerHTML.substring(0, 100) }
        });
        
        // Remove the malicious content
        target.innerHTML = '';
      }
    }
  }

  private monitorSecurityEvents(): void {
    // Monitor for security policy violations
    window.addEventListener('securitypolicyviolation', (event) => {
      this.logSecurityEvent({
        type: 'suspicious_activity',
        severity: 'medium',
        message: `Security policy violation: ${event.violatedDirective}`,
        timestamp: Date.now(),
        source: 'CSP-violation',
        userAgent: navigator.userAgent,
        blocked: true,
        details: {
          violatedDirective: event.violatedDirective,
          blockedURI: event.blockedURI,
          originalPolicy: event.originalPolicy
        }
      });
    });
  }

  private logSecurityEvent(event: SecurityEvent): void {
    this.securityEvents.push(event);
    this.metrics.securityViolations++;
    
    // Keep only last 1000 events
    if (this.securityEvents.length > 1000) {
      this.securityEvents = this.securityEvents.slice(-1000);
    }
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.warn('Security Event:', event);
    }
    
    // Send to security monitoring service
    this.reportSecurityEvent(event);
  }

  private async reportSecurityEvent(event: SecurityEvent): Promise<void> {
    try {
      // In a real implementation, send to your security monitoring service
      if (event.severity === 'critical' || event.severity === 'high') {
        console.error('Critical Security Event:', event);
        
        // Example: Send to security API
        // await fetch('/api/security/events', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(event)
        // });
      }
    } catch (error) {
      console.warn('Failed to report security event:', error);
    }
  }

  public getMetrics(): SecurityMetrics {
    return { ...this.metrics };
  }

  public getSecurityEvents(): SecurityEvent[] {
    return [...this.securityEvents];
  }

  public getSecurityPolicies(): SecurityPolicy[] {
    return [...this.securityPolicies];
  }

  public addBlockedDomain(domain: string): void {
    this.blockedDomains.add(domain);
    this.metrics.blockedDomains = this.blockedDomains.size;
  }

  public removeBlockedDomain(domain: string): void {
    this.blockedDomains.delete(domain);
    this.metrics.blockedDomains = this.blockedDomains.size;
  }

  public getBlockedDomains(): string[] {
    return Array.from(this.blockedDomains);
  }

  public clearMetrics(): void {
    this.metrics = {
      blockedRequests: 0,
      xssAttempts: 0,
      csrfAttempts: 0,
      clickjackingAttempts: 0,
      suspiciousActivity: 0,
      securityViolations: 0,
      blockedDomains: this.blockedDomains.size,
      secureConnections: 0,
      insecureConnections: 0,
      rateLimitHits: 0,
      inputValidationFailures: 0
    };
  }

  public destroy(): void {
    // Clean up event listeners and resources
    this.securityEvents = [];
    this.rateLimitMap.clear();
  }
}

// Export singleton instance
export const enhancedSecurityManager = new EnhancedSecurityManager();

// Export class for custom instances
export { EnhancedSecurityManager, type SecurityConfig, type SecurityMetrics, type SecurityEvent, type SecurityPolicy };