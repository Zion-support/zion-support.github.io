/**
 * Security Enhancement Utilities
 * Advanced security measures for the Zion website
 */

interface SecurityConfig {
  enableCSP: boolean;
  enableHSTS: boolean;
  enableXSSProtection: boolean;
  enableCSRFProtection: boolean;
  enableContentSecurityPolicy: boolean;
  enableSecureHeaders: boolean;
  enableRateLimiting: boolean;
}

interface SecurityHeaders {
  'Content-Security-Policy': string;
  'X-Frame-Options': string;
  'X-Content-Type-Options': string;
  'Referrer-Policy': string;
  'Permissions-Policy': string;
  'Strict-Transport-Security': string;
}

class SecurityEnhancer {
  private config: SecurityConfig;
  private rateLimitMap: Map<string, { count: number; timestamp: number }> = new Map();
  private maxRequestsPerMinute = 60;

  constructor(config: Partial<SecurityConfig> = {}) {
    this.config = {
      enableCSP: true,
      enableHSTS: true,
      enableXSSProtection: true,
      enableCSRFProtection: true,
      enableContentSecurityPolicy: true,
      enableSecureHeaders: true,
      enableRateLimiting: true,
      ...config,
    };

    this.initialize();
  }

  private initialize(): void {
    if (this.config.enableSecureHeaders) {
      this.setupSecurityHeaders();
    }

    if (this.config.enableContentSecurityPolicy) {
      this.setupContentSecurityPolicy();
    }

    if (this.config.enableCSRFProtection) {
      this.setupCSRFProtection();
    }

    if (this.config.enableRateLimiting) {
      this.setupRateLimiting();
    }

    if (this.config.enableXSSProtection) {
      this.setupXSSProtection();
    }

    this.setupSecurityMonitoring();
  }

  private setupSecurityHeaders(): void {
    const headers: SecurityHeaders = {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://api.ziontechgroup.com;",
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=()',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    };

    // In a real implementation, these would be set by the server
    // For client-side, we can validate and warn about missing headers
    this.validateSecurityHeaders(headers);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private validateSecurityHeaders(_expectedHeaders: SecurityHeaders): void {
    // This is a mock validation - in reality, headers are set by the server
    console.log('Security headers validation would be performed here');
    
    // We can check for security-related meta tags
    this.validateMetaTags();
  }

  private validateMetaTags(): void {
    const metaTags = document.querySelectorAll('meta');
    console.log(`Found ${metaTags.length} meta tags`);
    const securityTags = [
      'referrer',
      'content-security-policy',
      'x-frame-options',
    ];

    securityTags.forEach((tag) => {
      const metaTag = document.querySelector(`meta[name="${tag}"]`);
      if (!metaTag) {
        console.warn(`Missing security meta tag: ${tag}`);
      }
    });
  }

  private setupContentSecurityPolicy(): void {
    // CSP is typically set by the server, but we can validate it client-side
    const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    
    if (cspMeta) {
      const cspContent = cspMeta.getAttribute('content');
      if (cspContent) {
        this.validateCSP(cspContent);
      }
    }
  }

  private validateCSP(csp: string): void {
    // Basic CSP validation
    const requiredDirectives = ['default-src', 'script-src', 'style-src'];
    const directives = csp.split(';').map(d => d.trim().split(' ')[0]);
    
    requiredDirectives.forEach((directive) => {
      if (!directives.includes(directive)) {
        console.warn(`Missing CSP directive: ${directive}`);
      }
    });
  }

  private setupCSRFProtection(): void {
    // Generate CSRF token
    const csrfToken = this.generateCSRFToken();
    
    // Store token in meta tag
    let csrfMeta = document.querySelector('meta[name="csrf-token"]');
    if (!csrfMeta) {
      csrfMeta = document.createElement('meta');
      csrfMeta.setAttribute('name', 'csrf-token');
      document.head.appendChild(csrfMeta);
    }
    csrfMeta.setAttribute('content', csrfToken);

    // Add token to all forms
    this.addCSRFTokenToForms(csrfToken);
  }

  private generateCSRFToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  private addCSRFTokenToForms(token: string): void {
    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
      // Check if token already exists
      if (!form.querySelector('input[name="csrf_token"]')) {
        const csrfInput = document.createElement('input');
        csrfInput.type = 'hidden';
        csrfInput.name = 'csrf_token';
        csrfInput.value = token;
        form.appendChild(csrfInput);
      }
    });
  }

  private setupRateLimiting(): void {
    // Client-side rate limiting for API calls
    this.interceptFetch();
    this.interceptXMLHttpRequest();
  }

  private interceptFetch(): void {
    const originalFetch = window.fetch;
    
    window.fetch = async (...args) => {
      const url = typeof args[0] === 'string' ? args[0] : (args[0] as Request).url;
      
      if (this.isRateLimited(url)) {
        throw new Error('Rate limit exceeded');
      }
      
      this.recordRequest(url);
      return originalFetch(...args);
    };
  }

  private interceptXMLHttpRequest(): void {
    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;
    const self = this; // eslint-disable-line @typescript-eslint/no-this-alias
    
    XMLHttpRequest.prototype.open = function(method: string, url: string | URL, ...args: unknown[]) {
      (this as XMLHttpRequest)._url = url.toString();
      return originalOpen.call(this, method, url, args[0] as boolean, args[1] as string, args[2] as string);
    };
    
    XMLHttpRequest.prototype.send = function(data?: unknown) {
      if ((this as XMLHttpRequest)._url && self.isRateLimited((this as XMLHttpRequest)._url)) {
        throw new Error('Rate limit exceeded');
      }
      
      if ((this as XMLHttpRequest)._url) {
        self.recordRequest((this as XMLHttpRequest)._url);
      }
      
      return originalSend.call(this, data as Document | XMLHttpRequestBodyInit | null | undefined);
    };
  }

  private isRateLimited(url: string): boolean {
    const now = Date.now();
    const clientId = this.getClientId();
    const key = `${clientId}:${url}`;
    
    const record = this.rateLimitMap.get(key);
    
    if (!record) {
      return false;
    }
    
    // Reset if more than a minute has passed
    if (now - record.timestamp > 60000) {
      this.rateLimitMap.delete(key);
      return false;
    }
    
    return record.count >= this.maxRequestsPerMinute;
  }

  private recordRequest(url: string): void {
    const now = Date.now();
    const clientId = this.getClientId();
    const key = `${clientId}:${url}`;
    
    const record = this.rateLimitMap.get(key) || { count: 0, timestamp: now };
    record.count++;
    
    this.rateLimitMap.set(key, record);
  }

  private getClientId(): string {
    // Generate a simple client ID based on user agent and screen resolution
    const ua = navigator.userAgent;
    const screenResolution = `${window.screen.width}x${window.screen.height}`;
    return btoa(`${ua}:${screenResolution}`).substring(0, 16);
  }

  private setupXSSProtection(): void {
    // Sanitize user inputs
    this.sanitizeInputs();
    
    // Monitor for XSS attempts
    this.monitorXSSAttempts();
  }

  private sanitizeInputs(): void {
    const inputs = document.querySelectorAll('input, textarea');
    
    inputs.forEach((input) => {
      input.addEventListener('input', (event) => {
        const target = event.target as HTMLInputElement;
        const originalValue = target.value;
        const sanitizedValue = this.sanitizeString(originalValue);
        
        if (originalValue !== sanitizedValue) {
          target.value = sanitizedValue;
          console.warn('Potentially malicious input sanitized');
        }
      });
    });
  }

  private sanitizeString(input: string): string {
    // Basic XSS protection
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '');
  }

  private monitorXSSAttempts(): void {
    // Monitor for suspicious patterns in URLs and inputs
    const originalPushState = history.pushState;
    const originalReplaceState = history.replaceState;
    const self = this; // eslint-disable-line @typescript-eslint/no-this-alias
    
    history.pushState = function(state, title, url) {
      if (url && self.detectXSSAttempt(url.toString())) {
        console.warn('Potential XSS attempt detected in URL');
        return;
      }
      return originalPushState.call(this, state, title, url);
    };
    
    history.replaceState = function(state, title, url) {
      if (url && self.detectXSSAttempt(url.toString())) {
        console.warn('Potential XSS attempt detected in URL');
        return;
      }
      return originalReplaceState.call(this, state, title, url);
    };
  }

  private detectXSSAttempt(input: string): boolean {
    const xssPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /<iframe/i,
      /<object/i,
      /<embed/i,
    ];
    
    return xssPatterns.some(pattern => pattern.test(input));
  }

  private setupSecurityMonitoring(): void {
    // Monitor for security events
    this.monitorSecurityEvents();
    
    // Monitor for suspicious network activity
    this.monitorNetworkActivity();
  }

  private monitorSecurityEvents(): void {
    // Monitor for security-related errors
    window.addEventListener('error', (event) => {
      if (this.isSecurityRelatedError(event.error)) {
        console.warn('Security-related error detected:', event.error);
        this.reportSecurityEvent('error', event.error);
      }
    });
    
    // Monitor for uncaught promises
    window.addEventListener('unhandledrejection', (event) => {
      if (this.isSecurityRelatedError(event.reason)) {
        console.warn('Security-related promise rejection:', event.reason);
        this.reportSecurityEvent('unhandledrejection', event.reason);
      }
    });
  }

  private isSecurityRelatedError(error: unknown): boolean {
    if (!error) return false;
    
    const errorMessage = error.toString().toLowerCase();
    const securityKeywords = ['xss', 'csrf', 'injection', 'unauthorized', 'forbidden'];
    
    return securityKeywords.some(keyword => errorMessage.includes(keyword));
  }

  private monitorNetworkActivity(): void {
    // Monitor for suspicious network requests
    const originalFetch = window.fetch;
    const self = this; // eslint-disable-line @typescript-eslint/no-this-alias
    
    window.fetch = async (...args) => {
      const url = typeof args[0] === 'string' ? args[0] : (args[0] as Request).url;
      
      // Check for suspicious domains
      if (self.isSuspiciousDomain(url)) {
        console.warn('Suspicious network request detected:', url);
        self.reportSecurityEvent('suspicious_request', { url });
      }
      
      return originalFetch(...args);
    };
  }

  private isSuspiciousDomain(url: string): boolean {
    try {
      const urlObj = new URL(url);
      const suspiciousDomains = [
        'malicious-site.com',
        'phishing-site.com',
        'suspicious-domain.net',
      ];
      
      return suspiciousDomains.some(domain => urlObj.hostname.includes(domain));
    } catch {
      return false;
    }
  }

  private reportSecurityEvent(type: string, data: unknown): void {
    // In a real implementation, this would send data to a security monitoring service
    console.log('Security event reported:', { type, data, timestamp: Date.now() });
  }

  // Public methods
  public getSecurityScore(): number {
    let score = 100;
    
    // Deduct points for missing security measures
    if (!document.querySelector('meta[name="csrf-token"]')) score -= 10;
    if (!document.querySelector('meta[http-equiv="Content-Security-Policy"]')) score -= 15;
    if (!document.querySelector('meta[name="referrer"]')) score -= 5;
    
    return Math.max(0, score);
  }

  public generateSecurityReport(): object {
    return {
      score: this.getSecurityScore(),
      headers: this.checkSecurityHeaders(),
      csp: this.checkCSP(),
      csrf: this.checkCSRFProtection(),
      rateLimiting: this.checkRateLimiting(),
      timestamp: Date.now(),
    };
  }

  private checkSecurityHeaders(): object {
    return {
      csp: !!document.querySelector('meta[http-equiv="Content-Security-Policy"]'),
      referrer: !!document.querySelector('meta[name="referrer"]'),
      viewport: !!document.querySelector('meta[name="viewport"]'),
    };
  }

  private checkCSP(): object {
    const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    return {
      present: !!cspMeta,
      content: cspMeta?.getAttribute('content') || null,
    };
  }

  private checkCSRFProtection(): object {
    return {
      tokenPresent: !!document.querySelector('meta[name="csrf-token"]'),
      formsProtected: document.querySelectorAll('form input[name="csrf_token"]').length > 0,
    };
  }

  private checkRateLimiting(): object {
    return {
      enabled: this.config.enableRateLimiting,
      requests: this.rateLimitMap.size,
    };
  }

  public cleanup(): void {
    this.rateLimitMap.clear();
  }
}

// Initialize security enhancer
const securityEnhancer = new SecurityEnhancer();

export default securityEnhancer;
export { SecurityEnhancer };
export type { SecurityConfig, SecurityHeaders };