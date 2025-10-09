'use client';

/**
 * Enhanced Security Enhancer for Zion Tech Group
 * Implements comprehensive security measures for web application protection
 */

interface SecurityConfig {
  enableCSP: boolean;
  enableHSTS: boolean;
  enableXSSProtection: boolean;
  enableClickjackingProtection: boolean;
  enableCSRFProtection: boolean;
  enableContentSecurityPolicy: boolean;
  enableSecureHeaders: boolean;
}

class SecurityEnhancer {
  private config: SecurityConfig;
  private csrfToken: string | null = null;

  constructor(config: SecurityConfig) {
    this.config = config;
    this.initializeSecurity();
  }

  private initializeSecurity() {
    if (typeof window === 'undefined') return;

    this.setupContentSecurityPolicy();
    this.setupSecurityHeaders();
    this.setupXSSProtection();
    this.setupClickjackingProtection();
    this.setupCSRFProtection();
    this.setupInputSanitization();
    this.setupSecureStorage();
    this.setupSecurityMonitoring();
    this.setupRateLimiting();
  }

  private setupContentSecurityPolicy() {
    if (!this.config.enableCSP) return;

    const cspDirectives = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests"
    ].join('; ');

    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = cspDirectives;
    document.head.appendChild(meta);
  }

  private setupSecurityHeaders() {
    if (!this.config.enableSecureHeaders) return;

    // Add security headers via meta tags
    const securityHeaders = [
      { httpEquiv: 'X-Content-Type-Options', content: 'nosniff' },
      { httpEquiv: 'X-Frame-Options', content: 'DENY' },
      { httpEquiv: 'X-XSS-Protection', content: '1; mode=block' },
      { httpEquiv: 'Referrer-Policy', content: 'strict-origin-when-cross-origin' },
      { httpEquiv: 'Permissions-Policy', content: 'camera=(), microphone=(), geolocation=()' }
    ];

    securityHeaders.forEach(header => {
      const meta = document.createElement('meta');
      meta.httpEquiv = header.httpEquiv;
      meta.content = header.content;
      document.head.appendChild(meta);
    });
  }

  private setupXSSProtection() {
    if (!this.config.enableXSSProtection) return;

    // Sanitize user input
    const originalInnerHTML = Element.prototype.innerHTML;
    Element.prototype.innerHTML = function(html: string) {
      if (typeof html === 'string') {
        html = this.sanitizeHTML(html);
      }
      return originalInnerHTML.call(this, html);
    }.bind(this);

    // Sanitize text content
    const originalTextContent = Element.prototype.textContent;
    Element.prototype.textContent = function(text: string) {
      if (typeof text === 'string') {
        text = this.sanitizeText(text);
      }
      return originalTextContent.call(this, text);
    }.bind(this);
  }

  private sanitizeHTML(html: string): string {
    // Remove potentially dangerous HTML tags and attributes
    const dangerousTags = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    const dangerousAttributes = /on\w+\s*=\s*["'][^"']*["']/gi;
    
    return html
      .replace(dangerousTags, '')
      .replace(dangerousAttributes, '')
      .replace(/javascript:/gi, '')
      .replace(/vbscript:/gi, '')
      .replace(/data:/gi, '');
  }

  private sanitizeText(text: string): string {
    // Escape HTML entities
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  }

  private setupClickjackingProtection() {
    if (!this.config.enableClickjackingProtection) return;

    // Prevent iframe embedding
    if (window.top !== window.self) {
      window.top.location = window.self.location;
    }

    // Add frame-busting script
    const frameBuster = document.createElement('script');
    frameBuster.textContent = `
      if (top !== self) {
        top.location = self.location;
      }
    `;
    document.head.appendChild(frameBuster);
  }

  private setupCSRFProtection() {
    if (!this.config.enableCSRFProtection) return;

    // Generate CSRF token
    this.csrfToken = this.generateCSRFToken();

    // Add CSRF token to all forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const csrfInput = document.createElement('input');
      csrfInput.type = 'hidden';
      csrfInput.name = '_csrf_token';
      csrfInput.value = this.csrfToken;
      form.appendChild(csrfInput);
    });

    // Add CSRF token to AJAX requests
    this.interceptAjaxRequests();
  }

  private generateCSRFToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  private interceptAjaxRequests() {
    const originalFetch = window.fetch;
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      if (this.csrfToken) {
        const headers = new Headers(init?.headers);
        headers.set('X-CSRF-Token', this.csrfToken);
        init = { ...init, headers };
      }
      return originalFetch(input, init);
    };

    const originalXHR = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method: string, url: string | URL, ...args: any[]) {
      this.setRequestHeader('X-CSRF-Token', this.csrfToken || '');
      return originalXHR.call(this, method, url, ...args);
    };
  }

  private setupInputSanitization() {
    // Sanitize all input elements
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('input', (e) => {
        const target = e.target as HTMLInputElement;
        target.value = this.sanitizeText(target.value);
      });
    });
  }

  private setupSecureStorage() {
    // Override localStorage with encrypted storage
    const originalSetItem = localStorage.setItem;
    const originalGetItem = localStorage.getItem;

    localStorage.setItem = function(key: string, value: string) {
      const encryptedValue = this.encrypt(value);
      return originalSetItem.call(this, key, encryptedValue);
    }.bind(this);

    localStorage.getItem = function(key: string) {
      const encryptedValue = originalGetItem.call(this, key);
      return encryptedValue ? this.decrypt(encryptedValue) : null;
    }.bind(this);
  }

  private encrypt(text: string): string {
    // Simple encryption (in production, use a proper encryption library)
    return btoa(text);
  }

  private decrypt(encryptedText: string): string {
    // Simple decryption (in production, use a proper decryption library)
    try {
      return atob(encryptedText);
    } catch {
      return encryptedText;
    }
  }

  private setupSecurityMonitoring() {
    // Monitor for suspicious activities
    this.monitorConsoleAccess();
    this.monitorDevTools();
    this.monitorNetworkRequests();
    this.monitorDOMChanges();
  }

  private monitorConsoleAccess() {
    // Detect console access attempts
    const originalConsole = console;
    console = new Proxy(originalConsole, {
      get(target, prop) {
        if (prop === 'log' || prop === 'warn' || prop === 'error') {
          // Log security event
          this.logSecurityEvent('console_access', { method: prop });
        }
        return target[prop as keyof Console];
      }
    });
  }

  private monitorDevTools() {
    // Detect DevTools opening
    let devtools = false;
    const threshold = 160;

    setInterval(() => {
      if (window.outerHeight - window.innerHeight > threshold || 
          window.outerWidth - window.innerWidth > threshold) {
        if (!devtools) {
          devtools = true;
          this.logSecurityEvent('devtools_opened');
        }
      } else {
        devtools = false;
      }
    }, 500);
  }

  private monitorNetworkRequests() {
    // Monitor for suspicious network requests
    const originalFetch = window.fetch;
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = typeof input === 'string' ? input : input.toString();
      
      // Check for suspicious URLs
      if (this.isSuspiciousURL(url)) {
        this.logSecurityEvent('suspicious_request', { url });
        throw new Error('Suspicious request blocked');
      }

      return originalFetch(input, init);
    };
  }

  private isSuspiciousURL(url: string): boolean {
    const suspiciousPatterns = [
      /javascript:/i,
      /data:/i,
      /vbscript:/i,
      /file:/i,
      /ftp:/i
    ];

    return suspiciousPatterns.some(pattern => pattern.test(url));
  }

  private monitorDOMChanges() {
    // Monitor for unauthorized DOM modifications
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          const addedNodes = Array.from(mutation.addedNodes);
          addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as HTMLElement;
              if (element.tagName === 'SCRIPT' && !element.src) {
                this.logSecurityEvent('inline_script_detected');
              }
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  private setupRateLimiting() {
    // Simple rate limiting for API calls
    const rateLimits = new Map<string, { count: number; resetTime: number }>();
    const RATE_LIMIT_WINDOW = 60000; // 1 minute
    const MAX_REQUESTS = 100;

    const originalFetch = window.fetch;
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = typeof input === 'string' ? input : input.toString();
      const now = Date.now();
      
      const rateLimit = rateLimits.get(url);
      if (rateLimit) {
        if (now < rateLimit.resetTime) {
          if (rateLimit.count >= MAX_REQUESTS) {
            throw new Error('Rate limit exceeded');
          }
          rateLimit.count++;
        } else {
          rateLimit.count = 1;
          rateLimit.resetTime = now + RATE_LIMIT_WINDOW;
        }
      } else {
        rateLimits.set(url, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
      }

      return originalFetch(input, init);
    };
  }

  private logSecurityEvent(eventType: string, data?: any) {
    // Log security events (in production, send to security monitoring service)
    console.warn('Security Event:', eventType, data);
    
    // Send to analytics/monitoring service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'security_event', {
        event_category: 'security',
        event_label: eventType,
        custom_parameters: data
      });
    }
  }

  // Public methods
  public getCSRFToken(): string | null {
    return this.csrfToken;
  }

  public validateCSRFToken(token: string): boolean {
    return this.csrfToken === token;
  }

  public sanitizeUserInput(input: string): string {
    return this.sanitizeText(input);
  }

  public isSecureContext(): boolean {
    return window.isSecureContext;
  }

  public cleanup() {
    // Cleanup security enhancements
    this.csrfToken = null;
  }
}

// Singleton instance
let securityEnhancer: SecurityEnhancer | null = null;

export const initializeSecurity = (config: SecurityConfig) => {
  if (typeof window !== 'undefined' && !securityEnhancer) {
    securityEnhancer = new SecurityEnhancer(config);
  }
};

export const getSecurityEnhancer = () => securityEnhancer;

export const cleanupSecurity = () => {
  securityEnhancer?.cleanup();
  securityEnhancer = null;
};

export default SecurityEnhancer;