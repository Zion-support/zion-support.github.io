/**
 * Security utilities for protecting against common web vulnerabilities
 */

export class SecurityManager {
  private static instance: SecurityManager;
  private cspViolations: string[] = [];

  public static getInstance(): SecurityManager {
    if (!SecurityManager.instance) {
      SecurityManager.instance = new SecurityManager();
    }
    return SecurityManager.instance;
  }

  public initialize(): void {
    this.setupCSPReporting();
    this.setupXSSProtection();
    this.setupClickjackingProtection();
    this.setupSecureHeaders();
  }

  private setupCSPReporting(): void {
    // Report CSP violations
    document.addEventListener('securitypolicyviolation', (event) => {
      const violation = {
        blockedURI: event.blockedURI,
        violatedDirective: event.violatedDirective,
        originalPolicy: event.originalPolicy,
        timestamp: new Date().toISOString()
      };
      
      this.cspViolations.push(JSON.stringify(violation));
      
      // Send violation to server
      this.reportCSPViolation(violation);
    });
  }

  private setupXSSProtection(): void {
    // Sanitize user input
    const sanitizeInput = (input: string): string => {
      const div = document.createElement('div');
      div.textContent = input;
      return div.innerHTML;
    };

    // Add to global scope for use throughout the app
    (window as typeof window & { sanitizeInput: (input: string) => string }).sanitizeInput = sanitizeInput;
  }

  private setupClickjackingProtection(): void {
    // Check if the page is being framed
    if (window.top !== window.self) {
      // Allow framing from same origin
      if (window.top && window.top.location.origin !== window.location.origin) {
        // Redirect to prevent clickjacking
        window.top.location.href = window.location.href;
      }
    }
  }

  private setupSecureHeaders(): void {
    // Add security headers via meta tags
    const securityHeaders = [
      { name: 'X-Content-Type-Options', content: 'nosniff' },
      { name: 'X-Frame-Options', content: 'DENY' },
      { name: 'X-XSS-Protection', content: '1; mode=block' },
      { name: 'Referrer-Policy', content: 'strict-origin-when-cross-origin' },
      { name: 'Permissions-Policy', content: 'camera=(), microphone=(), geolocation=()' }
    ];

    securityHeaders.forEach(header => {
      let meta = document.querySelector(`meta[http-equiv="${header.name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('http-equiv', header.name);
        document.head.appendChild(meta);
      }
      meta.content = header.content;
    });
  }

  private async reportCSPViolation(violation: { blockedURI: string; violatedDirective: string; originalPolicy: string; timestamp: string }): Promise<void> {
    try {
      await fetch('/api/security/csp-violation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(violation),
      });
    } catch (error) {
      console.error('Failed to report CSP violation:', error);
    }
  }

  public sanitizeHTML(html: string): string {
    // Basic HTML sanitization
    // const allowedTags = ['b', 'i', 'em', 'strong', 'p', 'br', 'a'];
    // const allowedAttributes = ['href', 'title'];
    
    // Remove script tags and dangerous attributes
    let sanitized = html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/on\w+="[^"]*"/gi, '')
      .replace(/javascript:/gi, '');
    
    return sanitized;
  }

  public validateInput(input: string, type: 'email' | 'url' | 'phone' | 'text'): boolean {
    const patterns = {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      url: /^https?:\/\/.+/,
      phone: /^\+?[\d\s\-()]+$/,
      text: /^[a-zA-Z0-9\s\-_.,!?]+$/
    };

    return patterns[type].test(input);
  }

  public generateSecureToken(length: number = 32): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    
    for (let i = 0; i < length; i++) {
      result += chars[array[i] % chars.length];
    }
    
    return result;
  }

  public hashString(input: string): Promise<string> {
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(input))
      .then(hashBuffer => {
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      });
  }

  public getCSPViolations(): string[] {
    return [...this.cspViolations];
  }
}

export const securityManager = SecurityManager.getInstance();