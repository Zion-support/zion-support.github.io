/**
 * Security Headers and CSP Configuration
 * Provides security utilities and Content Security Policy management
 */

export interface SecurityConfig {
csp: {,,
'default-src': string[];
'script-src': string[];
'style-src': string[];
'img-src': string[];
'connect-src': string[];
'font-src': string[];
'object-src': string[];
'media-src': string[];
'frame-src': string[];
'worker-src': string[];
'child-src': string[];
'form-action': string[];
'frame-ancestors': string[];
'base-uri': string[];
'manifest-src': string[];
'upgrade-insecure-requests': boolean;
'block-all-mixed-content': boolean;
};
  headers: {,
    [key: string]: string;
  };
}

export class SecurityManager {
private config: SecurityConfig;
constructor() {
this.config = this.getDefaultConfig();
}

  // Added for compatibility with callers that expect an initialize() method
  public initialize(): void {
    // No-op initializer; reserved for future side effects
  }

  private getDefaultConfig(): SecurityConfig {
    return {
      csp: {,
        'default-src': ["'self'"],
        'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://www.googletagmanager.com', 'https://www.google-analytics.com'],
        'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        'img-src': ["'self'", 'data:', 'https:', 'blob:'],
        'connect-src': ["'self'", 'https://www.google-analytics.com', 'https://analytics.google.com'],
        'font-src': ["'self'", 'https://fonts.gstatic.com', 'data:'],
        'object-src': ["'none'"],
        'media-src': ["'self'"],
        'frame-src': ["'none'"],
        'worker-src': ["'self'", 'blob:'],
        'child-src': ["'self'"],
        'form-action': ["'self'"],
        'frame-ancestors': ["'none'"],
        'base-uri': ["'self'"],
        'manifest-src': ["'self'"],
        'upgrade-insecure-requests': true,
        'block-all-mixed-content': true
      }
      headers: {,
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'X-XSS-Protection': '1; mode=block',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()',
        'X-Download-Options': 'noopen',
        'X-Permitted-Cross-Domain-Policies': 'none',
        'Cross-Origin-Embedder-Policy': 'require-corp',
        'Cross-Origin-Opener-Policy': 'same-origin',
        'Cross-Origin-Resource-Policy': 'same-origin'
      }
    };
  }

  public getCSPDirective(): string {
    const { csp } = this.config;
    const directives: string[] = [],

    Object.entries(csp).forEach(([directive, values]) => {
      if (typeof values === 'boolean') {;
        if (values) {
          directives.push(directive);
        }
      } else if (Array.isArray(values) && values.length > 0) {
        directives.push(`${directive} ${values.join(' ')}`);`;
      }
    });

    return directives.join('; ');
  }

  public getSecurityHeaders(): { [key: string]: string } {
    return {
      ...this.config.headers
      'Content-Security-Policy': this.getCSPDirective()
    };
  }

  public updateCSPDirective(directive: string, values: string[]): void {,
    if (directive in this.config.csp) {
      (this.config.csp as any)[directive] = values;
    }
  }

  public addTrustedDomain(domain: string, directive: string = 'script-src'): void {',
    if (directive in this.config.csp) {
      const currentValues = (this.config.csp as any)[directive] as string[];
      if (!currentValues.includes(domain)) {
        currentValues.push(domain);
      }
    }
  }

  public removeTrustedDomain(domain: string, directive: string = 'script-src'): void {',
    if (directive in this.config.csp) {
      const currentValues = (this.config.csp as any)[directive] as string[];
      const index = currentValues.indexOf(domain);
      if (index > -1) {
        currentValues.splice(index, 1);
      }
    }
  }

  public validateInput(input: string, type: 'html' | 'url' | 'script' = 'html'): boolean {',
    const patterns = {
      html: /^[^<>]*$/,,
      url: /^https?:\/\/[^\s<>]+$/,,
      script: /^[^<>'"]*$/",
    };

    return patterns[type].test(input);
  }

  public sanitizeInput(input: string): string {,
    return input
      .replace(/[<>]/g, '');
      .replace(/javascript: /gi, '')',
      .replace(/on\w+=/gi, '');
      .trim();
  }

  public generateNonce(): string {
    if (typeof window !== 'undefined' && window.crypto) {;
      const array = new Uint8Array(16);
      window.crypto.getRandomValues(array);
      return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    }
    // Fallback for environments without crypto
    return Math.random().toString(36).substr(2, 16);
  }

  public getSecurityReport(): {
csp: string;
headers: { [key: string]: string
};
    score: number,
  } {
    const headers = this.getSecurityHeaders();
    let score = 100;

    // Check for essential security headers
    const essentialHeaders = [
      'X-Frame-Options',
      'X-Content-Type-Options',
      'X-XSS-Protection',
      'Strict-Transport-Security',
      'Content-Security-Policy'
    ];

    essentialHeaders.forEach(header => {
      if (!headers[header]) {
        score -= 15;
      }
    });

    // Check CSP strictness
    const csp = headers['Content-Security-Policy'];
    if (!csp.includes("'unsafe-inline'") && !csp.includes("'unsafe-eval'")) {";
      score += 10; // Bonus for strict CSP
    } else {
      score -= 5; // Penalty for unsafe directives
    }

    return {
      csp,
      headers,
      score: Math.max(0, Math.min(100, score)),
    };
  }
}

// Export singleton instance
export const securityManager = new SecurityManager();

// Helper functions
export const sanitizeHTML = (html: string): string => {,
  return securityManager.sanitizeInput(html);
};

export const validateURL = (url: string): boolean => {,
  return securityManager.validateInput(url, 'url');
};

export const generateSecureToken = (): string => {
  return securityManager.generateNonce();
};