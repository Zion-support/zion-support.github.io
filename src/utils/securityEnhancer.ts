// SecurityEnhancer utility
export class SecurityEnhancer {
  private cspNonce: string;
  private securityHeaders: Map<string, string> = new Map();

  constructor() {
    this.cspNonce = this.generateNonce();
    this.init();
  }

  init() {
    this.setupCSP();
    this.setupSecurityHeaders();
    this.setupXSSProtection();
    this.setupCSRFProtection();
    this.setupContentSecurityPolicy();
  }

  private generateNonce(): string {
    const array = new Uint8Array(16);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  private setupCSP() {
    // Content Security Policy
    const csp = [
      "default-src 'self'",
      `script-src 'self' 'nonce-${this.cspNonce}' https://www.googletagmanager.com https://www.google-analytics.com`,
      `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`,
      `font-src 'self' https://fonts.gstatic.com`,
      `img-src 'self' data: https: blob:`,
      `connect-src 'self' https://www.google-analytics.com https://analytics.google.com`,
      `frame-src 'none'`,
      `object-src 'none'`,
      `base-uri 'self'`,
      `form-action 'self'`,
      `frame-ancestors 'none'`
    ].join('; ');

    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = csp;
    document.head.appendChild(meta);
  }

  private setupSecurityHeaders() {
    // Set security headers that can be set via meta tags
    this.securityHeaders.set('X-Content-Type-Options', 'nosniff');
    this.securityHeaders.set('X-Frame-Options', 'DENY');
    this.securityHeaders.set('X-XSS-Protection', '1; mode=block');
    this.securityHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    this.securityHeaders.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');

    // Apply headers
    this.securityHeaders.forEach((value, key) => {
      const meta = document.createElement('meta');
      meta.httpEquiv = key;
      meta.content = value;
      document.head.appendChild(meta);
    });
  }

  private setupXSSProtection() {
    // Sanitize user input
    const sanitizeInput = (input: string): string => {
      const div = document.createElement('div');
      div.textContent = input;
      return div.innerHTML;
    };

    // Override innerHTML to sanitize content
    const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
    if (originalInnerHTML) {
      Object.defineProperty(Element.prototype, 'innerHTML', {
        set: function(value: string) {
          const sanitized = sanitizeInput(value);
          originalInnerHTML.set?.call(this, sanitized);
        },
        get: originalInnerHTML.get
      });
    }
  }

  private setupCSRFProtection() {
    // Generate CSRF token
    const csrfToken = this.generateCSRFToken();
    document.cookie = `csrf-token=${csrfToken}; SameSite=Strict; Secure; HttpOnly`;

    // Add CSRF token to forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const tokenInput = document.createElement('input');
      tokenInput.type = 'hidden';
      tokenInput.name = 'csrf-token';
      tokenInput.value = csrfToken;
      form.appendChild(tokenInput);
    });
  }

  private generateCSRFToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  private setupContentSecurityPolicy() {
    // Additional CSP rules for specific content types
    const additionalCSP = [
      `script-src 'self' 'nonce-${this.cspNonce}' 'strict-dynamic'`,
      `object-src 'none'`,
      `base-uri 'self'`,
      `upgrade-insecure-requests`
    ].join('; ');

    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = additionalCSP;
    document.head.appendChild(meta);
  }

  // Method to get nonce for script tags
  getNonce(): string {
    return this.cspNonce;
  }

  // Method to validate input
  validateInput(input: string, type: 'email' | 'phone' | 'url' | 'text'): boolean {
    const patterns = {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      phone: /^[\+]?[1-9][\d]{0,15}$/,
      url: /^https?:\/\/.+/,
      text: /^[a-zA-Z0-9\s\-_.,!?]+$/
    };

    return patterns[type].test(input);
  }

  // Method to sanitize HTML
  sanitizeHTML(html: string): string {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  // Method to check for malicious patterns
  isMalicious(input: string): boolean {
    const maliciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /<iframe/i,
      /<object/i,
      /<embed/i,
      /<link/i,
      /<meta/i
    ];

    return maliciousPatterns.some(pattern => pattern.test(input));
  }

  cleanup() {
    // Cleanup security enhancements
    this.securityHeaders.clear();
  }
}

export default SecurityEnhancer;