/**
 * Security Utilities
 * Provides essential security enhancements and monitoring
 */

interface SecurityConfig {
  enableCSP: boolean;
  enableXSSProtection: boolean;
  enableCSRFProtection: boolean;
  enableContentSecurityPolicy: boolean;
}

class SecurityUtils {
  private config: SecurityConfig;
  private securityEvents: Array<{ type: string; timestamp: number; details: any }> = [];

  constructor(config: Partial<SecurityConfig> = {}) {
    this.config = {
      enableCSP: true,
      enableXSSProtection: true,
      enableCSRFProtection: true,
      enableContentSecurityPolicy: true,
      ...config
    };

    this.initialize();
  }

  private initialize(): void {
    if (this.config.enableCSP) {
      this.setupContentSecurityPolicy();
    }

    if (this.config.enableXSSProtection) {
      this.setupXSSProtection();
    }

    if (this.config.enableCSRFProtection) {
      this.setupCSRFProtection();
    }

    this.setupSecurityMonitoring();
  }

  private setupContentSecurityPolicy(): void {
    // Add CSP headers via meta tag
    const cspMeta = document.createElement('meta');
    cspMeta.setAttribute('http-equiv', 'Content-Security-Policy');
    cspMeta.setAttribute('content', 
      "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
      "style-src 'self' 'unsafe-inline'; " +
      "img-src 'self' data: https:; " +
      "font-src 'self' data:; " +
      "connect-src 'self' https:; " +
      "frame-ancestors 'none'; " +
      "base-uri 'self'; " +
      "form-action 'self'"
    );
    document.head.appendChild(cspMeta);
  }

  private setupXSSProtection(): void {
    // Add XSS protection header
    const xssMeta = document.createElement('meta');
    xssMeta.setAttribute('http-equiv', 'X-XSS-Protection');
    xssMeta.setAttribute('content', '1; mode=block');
    document.head.appendChild(xssMeta);

    // Sanitize user input
    this.sanitizeUserInput();
  }

  private setupCSRFProtection(): void {
    // Generate CSRF token
    const csrfToken = this.generateCSRFToken();
    sessionStorage.setItem('csrf-token', csrfToken);

    // Add token to forms
    this.addCSRFTokenToForms(csrfToken);
  }

  private setupSecurityMonitoring(): void {
    // Monitor for suspicious activities
    this.monitorSuspiciousActivities();
    
    // Monitor for data exfiltration
    this.monitorDataExfiltration();
  }

  private sanitizeUserInput(): void {
    // Override innerHTML to sanitize content
    const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
    if (originalInnerHTML) {
      Object.defineProperty(Element.prototype, 'innerHTML', {
        set: function(value) {
          const sanitized = this.sanitizeHTML(value);
          originalInnerHTML.set.call(this, sanitized);
        },
        get: originalInnerHTML.get
      });
    }
  }

  private sanitizeHTML(html: string): string {
    // Basic HTML sanitization
    return html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/on\w+="[^"]*"/gi, '')
      .replace(/javascript:/gi, '');
  }

  private generateCSRFToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  private addCSRFTokenToForms(token: string): void {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const tokenInput = document.createElement('input');
      tokenInput.type = 'hidden';
      tokenInput.name = 'csrf-token';
      tokenInput.value = token;
      form.appendChild(tokenInput);
    });
  }

  private monitorSuspiciousActivities(): void {
    // Monitor for suspicious console usage
    const originalConsole = { ...console };
    Object.keys(console).forEach(key => {
      if (typeof console[key] === 'function') {
        console[key] = (...args) => {
          this.logSecurityEvent('console-usage', { method: key, args });
          originalConsole[key](...args);
        };
      }
    });

    // Monitor for suspicious DOM modifications
    const observer = new MutationObserver((mutations) => {
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.tagName === 'SCRIPT' && !element.getAttribute('src')) {
                this.logSecurityEvent('suspicious-script', { content: element.textContent });
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

  private monitorDataExfiltration(): void {
    // Monitor for suspicious network requests
    const originalFetch = window.fetch;
    window.fetch = async (input, init) => {
      const url = typeof input === 'string' ? input : input.url;
      
      // Check for suspicious patterns
      if (this.isSuspiciousURL(url)) {
        this.logSecurityEvent('suspicious-request', { url, init });
      }

      return originalFetch(input, init);
    };
  }

  private isSuspiciousURL(url: string): boolean {
    const suspiciousPatterns = [
      /data:.*base64/i,
      /javascript:/i,
      /vbscript:/i,
      /file:/i,
      /ftp:/i
    ];

    return suspiciousPatterns.some(pattern => pattern.test(url));
  }

  private logSecurityEvent(type: string, details: any): void {
    this.securityEvents.push({
      type,
      timestamp: Date.now(),
      details
    });

    // Keep only recent events
    if (this.securityEvents.length > 1000) {
      this.securityEvents = this.securityEvents.slice(-1000);
    }
  }

  getSecurityEvents(): Array<{ type: string; timestamp: number; details: any }> {
    return [...this.securityEvents];
  }

  getSecurityScore(): number {
    let score = 100;
    
    // Deduct points for security events
    const recentEvents = this.securityEvents.filter(
      event => Date.now() - event.timestamp < 3600000 // Last hour
    );
    
    score -= recentEvents.length * 2;
    
    // Check for security headers
    if (!document.querySelector('meta[http-equiv="Content-Security-Policy"]')) {
      score -= 20;
    }
    
    if (!document.querySelector('meta[http-equiv="X-XSS-Protection"]')) {
      score -= 10;
    }
    
    return Math.max(0, Math.round(score));
  }

  clearSecurityEvents(): void {
    this.securityEvents = [];
  }
}

export const securityUtils = new SecurityUtils();
export type { SecurityConfig };