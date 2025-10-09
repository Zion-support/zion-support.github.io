/**
 * Advanced Security Enhancer
 * Comprehensive security optimization utilities
 */

interface SecurityConfig {
  enableCSP: boolean;
  enableHSTS: boolean;
  enableXSSProtection: boolean;
  enableClickjackingProtection: boolean;
  enableContentTypeOptions: boolean;
  enableReferrerPolicy: boolean;
  enablePermissionsPolicy: boolean;
  enableCORS: boolean;
  enableSecureCookies: boolean;
}

interface SecurityHeaders {
  'Content-Security-Policy': string;
  'Strict-Transport-Security': string;
  'X-Content-Type-Options': string;
  'X-Frame-Options': string;
  'X-XSS-Protection': string;
  'Referrer-Policy': string;
  'Permissions-Policy': string;
  'Cross-Origin-Embedder-Policy': string;
  'Cross-Origin-Opener-Policy': string;
  'Cross-Origin-Resource-Policy': string;
}

class SecurityEnhancer {
  private config: SecurityConfig;
  private headers: SecurityHeaders;

  constructor(config: SecurityConfig) {
    this.config = config;
    this.headers = this.generateSecurityHeaders();
    this.init();
  }

  private init(): void {
    this.setupSecurityHeaders();
    this.setupCSP();
    this.setupHSTS();
    this.setupXSSProtection();
    this.setupClickjackingProtection();
    this.setupContentTypeOptions();
    this.setupReferrerPolicy();
    this.setupPermissionsPolicy();
    this.setupCORS();
    this.setupSecureCookies();
    this.setupInputValidation();
    this.setupOutputEncoding();
    this.setupSessionSecurity();
  }

  private generateSecurityHeaders(): SecurityHeaders {
    return {
      'Content-Security-Policy': this.generateCSP(),
      'Strict-Transport-Security': this.config.enableHSTS 
        ? 'max-age=31536000; includeSubDomains; preload' 
        : '',
      'X-Content-Type-Options': this.config.enableContentTypeOptions 
        ? 'nosniff' 
        : '',
      'X-Frame-Options': this.config.enableClickjackingProtection 
        ? 'DENY' 
        : '',
      'X-XSS-Protection': this.config.enableXSSProtection 
        ? '1; mode=block' 
        : '',
      'Referrer-Policy': this.config.enableReferrerPolicy 
        ? 'strict-origin-when-cross-origin' 
        : '',
      'Permissions-Policy': this.config.enablePermissionsPolicy 
        ? this.generatePermissionsPolicy() 
        : '',
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Resource-Policy': 'same-origin'
    };
  }

  private generateCSP(): string {
    if (!this.config.enableCSP) return '';

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
    ];

    return directives.join('; ');
  }

  private generatePermissionsPolicy(): string {
    const permissions = [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'payment=()',
      'usb=()',
      'magnetometer=()',
      'gyroscope=()',
      'accelerometer=()',
      'ambient-light-sensor=()',
      'autoplay=()',
      'battery=()',
      'bluetooth=()',
      'clipboard-read=()',
      'clipboard-write=()',
      'display-capture=()',
      'document-domain=()',
      'encrypted-media=()',
      'fullscreen=(self)',
      'gamepad=()',
      'hid=()',
      'idle-detection=()',
      'midi=()',
      'nfc=()',
      'notifications=()',
      'persistent-storage=()',
      'picture-in-picture=()',
      'publickey-credentials-get=()',
      'screen-wake-lock=()',
      'serial=()',
      'speaker-selection=()',
      'storage-access=()',
      'sync-xhr=()',
      'trust-token-redemption=()',
      'unload=()',
      'usb=()',
      'vertical-scroll=()',
      'web-share=()',
      'xr-spatial-tracking=()'
    ];

    return permissions.join(', ');
  }

  private setupSecurityHeaders(): void {
    // Note: In a real application, these headers would be set by the server
    // This is for demonstration purposes
    console.log('Security headers configured:', this.headers);
  }

  private setupCSP(): void {
    if (!this.config.enableCSP) return;

    // Add CSP meta tag as fallback
    const cspMeta = document.createElement('meta');
    cspMeta.setAttribute('http-equiv', 'Content-Security-Policy');
    cspMeta.setAttribute('content', this.headers['Content-Security-Policy']);
    document.head.appendChild(cspMeta);
  }

  private setupHSTS(): void {
    if (!this.config.enableHSTS) return;

    // HSTS is typically set by the server, but we can add a meta tag for development
    if (location.protocol === 'https:') {
      const hstsMeta = document.createElement('meta');
      hstsMeta.setAttribute('http-equiv', 'Strict-Transport-Security');
      hstsMeta.setAttribute('content', this.headers['Strict-Transport-Security']);
      document.head.appendChild(hstsMeta);
    }
  }

  private setupXSSProtection(): void {
    if (!this.config.enableXSSProtection) return;

    const xssMeta = document.createElement('meta');
    xssMeta.setAttribute('http-equiv', 'X-XSS-Protection');
    xssMeta.setAttribute('content', this.headers['X-XSS-Protection']);
    document.head.appendChild(xssMeta);
  }

  private setupClickjackingProtection(): void {
    if (!this.config.enableClickjackingProtection) return;

    const frameOptionsMeta = document.createElement('meta');
    frameOptionsMeta.setAttribute('http-equiv', 'X-Frame-Options');
    frameOptionsMeta.setAttribute('content', this.headers['X-Frame-Options']);
    document.head.appendChild(frameOptionsMeta);
  }

  private setupContentTypeOptions(): void {
    if (!this.config.enableContentTypeOptions) return;

    const contentTypeMeta = document.createElement('meta');
    contentTypeMeta.setAttribute('http-equiv', 'X-Content-Type-Options');
    contentTypeMeta.setAttribute('content', this.headers['X-Content-Type-Options']);
    document.head.appendChild(contentTypeMeta);
  }

  private setupReferrerPolicy(): void {
    if (!this.config.enableReferrerPolicy) return;

    const referrerMeta = document.createElement('meta');
    referrerMeta.setAttribute('name', 'referrer');
    referrerMeta.setAttribute('content', this.headers['Referrer-Policy']);
    document.head.appendChild(referrerMeta);
  }

  private setupPermissionsPolicy(): void {
    if (!this.config.enablePermissionsPolicy) return;

    const permissionsMeta = document.createElement('meta');
    permissionsMeta.setAttribute('http-equiv', 'Permissions-Policy');
    permissionsMeta.setAttribute('content', this.headers['Permissions-Policy']);
    document.head.appendChild(permissionsMeta);
  }

  private setupCORS(): void {
    if (!this.config.enableCORS) return;

    // CORS is typically handled by the server, but we can add some client-side protections
    this.setupCORSPreflight();
  }

  private setupCORSPreflight(): void {
    // Add CORS preflight handling for API requests
    const originalFetch = window.fetch;
    
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url;
      
      // Add security headers to requests
        ...init,
        headers: {
          ...init?.headers,
          'X-Requested-With': 'XMLHttpRequest',
          'X-Content-Type-Options': 'nosniff'
        }
      };

      return originalFetch(url, secureInit);
    };
  }

  private setupSecureCookies(): void {
    if (!this.config.enableSecureCookies) return;

    // Set secure cookie attributes
    
    // Override cookie setting to ensure security
    Object.defineProperty(document, 'cookie', {
      get: function() {
        return cookieValue;
      },
      set: function(value: string) {
        // Add secure attributes to cookies
        const secureValue = value.includes('Secure') ? value : `${value}; Secure; SameSite=Strict; HttpOnly`;
        cookieValue = secureValue;
      }
    });
  }

  private setupInputValidation(): void {
    // Sanitize user inputs
    this.sanitizeInputs();
    this.validateForms();
    this.preventXSS();
  }

  private sanitizeInputs(): void {
    const inputs = document.querySelectorAll('input, textarea, select');
    
    inputs.forEach(input => {
      input.addEventListener('input', (e) => {
        const target = e.target as HTMLInputElement;
        const sanitized = this.sanitizeString(target.value);
        if (sanitized !== target.value) {
          target.value = sanitized;
        }
      });
    });
  }

  private sanitizeString(input: string): string {
    // Remove potentially dangerous characters
    return input
      .replace(/[<>]/g, '') // Remove < and >
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  }

  private validateForms(): void {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (this.validateForm(form as HTMLFormElement)) {
          form.submit();
        }
      });
    });
  }

  private validateForm(form: HTMLFormElement): boolean {
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;

    inputs.forEach(input => {
      const element = input as HTMLInputElement;
      
      if (!element.value.trim()) {
        this.showError(element, 'This field is required');
        isValid = false;
      } else if (element.type === 'email' && !this.isValidEmail(element.value)) {
        this.showError(element, 'Please enter a valid email address');
        isValid = false;
      } else if (element.type === 'url' && !this.isValidURL(element.value)) {
        this.showError(element, 'Please enter a valid URL');
        isValid = false;
      } else {
        this.clearError(element);
      }
    });

    return isValid;
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  private isValidURL(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  private showError(element: HTMLElement, message: string): void {
    this.clearError(element);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message text-red-500 text-sm mt-1';
    errorDiv.textContent = message;
    errorDiv.setAttribute('role', 'alert');
    
    element.parentNode?.appendChild(errorDiv);
    element.setAttribute('aria-invalid', 'true');
  }

  private clearError(element: HTMLElement): void {
    const errorDiv = element.parentNode?.querySelector('.error-message');
    if (errorDiv) {
      errorDiv.remove();
    }
    element.removeAttribute('aria-invalid');
  }

  private preventXSS(): void {
    // Override innerHTML to prevent XSS
    const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML')?.set;
    
    if (originalInnerHTML) {
      Object.defineProperty(Element.prototype, 'innerHTML', {
        set: function(value: string) {
          const sanitized = this.sanitizeString(value);
          originalInnerHTML.call(this, sanitized);
        },
        configurable: true
      });
    }
  }

  private setupOutputEncoding(): void {
    // Encode output to prevent XSS
    this.encodeOutputs();
  }

  private encodeOutputs(): void {
    const textNodes = document.querySelectorAll('*');
    
    textNodes.forEach(node => {
      if (node.textContent && node.textContent.includes('<')) {
        node.textContent = this.escapeHtml(node.textContent);
      }
    });
  }

  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  private setupSessionSecurity(): void {
    // Implement session security measures
    this.setupSessionTimeout();
    this.setupConcurrentSessionLimit();
    this.setupSessionRegeneration();
  }

  private setupSessionTimeout(): void {
    let timeoutId: NodeJS.Timeout;
    const timeout = 30 * 60 * 1000; // 30 minutes

    const resetTimeout = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        this.handleSessionTimeout();
      }, timeout);
    };

    // Reset timeout on user activity
    ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
      document.addEventListener(event, resetTimeout, true);
    });

  }

  private handleSessionTimeout(): void {
    // Clear sensitive data
    localStorage.clear();
    sessionStorage.clear();
    
    // Redirect to login or show timeout message
    const timeoutMessage = document.createElement('div');
    timeoutMessage.className = 'fixed top-0 left-0 right-0 bg-red-600 text-white p-4 text-center z-50';
    timeoutMessage.textContent = 'Session expired. Please refresh the page.';
    document.body.appendChild(timeoutMessage);
    
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }

  private setupConcurrentSessionLimit(): void {
    // Limit concurrent sessions (simplified implementation)
    const sessionId = this.generateSessionId();
    const existingSessions = JSON.parse(localStorage.getItem('activeSessions') || '[]');
    
    if (existingSessions.length >= 3) { // Max 3 concurrent sessions
      // Remove oldest session
      existingSessions.shift();
    }
    
    existingSessions.push(sessionId);
    localStorage.setItem('activeSessions', JSON.stringify(existingSessions));
  }

  private setupSessionRegeneration(): void {
    // Regenerate session ID periodically
    setInterval(() => {
      const newSessionId = this.generateSessionId();
      localStorage.setItem('currentSessionId', newSessionId);
    }, 15 * 60 * 1000); // Every 15 minutes
  }

  private generateSessionId(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  public getSecurityHeaders(): SecurityHeaders {
    return this.headers;
  }

  public generateSecurityReport(): string {
    const report = `
# Security Report

## Security Headers
${Object.entries(this.headers).map(([key, value]) => `- ${key}: ${value || 'Not configured'}`).join('\n')}

## Security Features
- Content Security Policy: ${this.config.enableCSP ? 'Enabled' : 'Disabled'}
- HTTP Strict Transport Security: ${this.config.enableHSTS ? 'Enabled' : 'Disabled'}
- XSS Protection: ${this.config.enableXSSProtection ? 'Enabled' : 'Disabled'}
- Clickjacking Protection: ${this.config.enableClickjackingProtection ? 'Enabled' : 'Disabled'}
- Content Type Options: ${this.config.enableContentTypeOptions ? 'Enabled' : 'Disabled'}
- Referrer Policy: ${this.config.enableReferrerPolicy ? 'Enabled' : 'Disabled'}
- Permissions Policy: ${this.config.enablePermissionsPolicy ? 'Enabled' : 'Disabled'}
- CORS: ${this.config.enableCORS ? 'Enabled' : 'Disabled'}
- Secure Cookies: ${this.config.enableSecureCookies ? 'Enabled' : 'Disabled'}

## Recommendations
- Ensure all security headers are properly configured on the server
- Regularly update dependencies to patch security vulnerabilities
- Implement proper input validation and output encoding
- Use HTTPS in production
- Regular security audits and penetration testing
    `;
    
    return report.trim();
  }
}

export default SecurityEnhancer;