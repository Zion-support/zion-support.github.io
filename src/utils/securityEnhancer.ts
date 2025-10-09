// SecurityEnhancer utility
// This file contains utility functions and configurations

interface SecurityConfig {
  enableHTTPS: boolean;
  enableCSP: boolean;
  enableXSSProtection: boolean;
  enableCSRFProtection: boolean;
  enableContentSecurityPolicy: boolean;
}

class SecurityEnhancer {
  private config: SecurityConfig;

  constructor(config: SecurityConfig) {
    this.config = config;
  }

  init() {
    this.enableHTTPS();
    this.enableCSP();
    this.enableXSSProtection();
    this.enableCSRFProtection();
    this.enableContentSecurityPolicy();
    this.addSecurityHeaders();
  }

  private enableHTTPS() {
    if (this.config.enableHTTPS && typeof window !== 'undefined') {
      // Check if page is served over HTTPS
      if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
        console.warn('Page should be served over HTTPS for security');
      }
    }
  }

  private enableCSP() {
    if (this.config.enableCSP && typeof document !== 'undefined') {
      // Add Content Security Policy meta tag
      const cspMeta = document.createElement('meta');
      cspMeta.httpEquiv = 'Content-Security-Policy';
      cspMeta.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none';";
      document.head.appendChild(cspMeta);
    }
  }

  private enableXSSProtection() {
    if (this.config.enableXSSProtection && typeof document !== 'undefined') {
      // Add XSS Protection meta tag
      const xssMeta = document.createElement('meta');
      xssMeta.httpEquiv = 'X-XSS-Protection';
      xssMeta.content = '1; mode=block';
      document.head.appendChild(xssMeta);
    }
  }

  private enableCSRFProtection() {
    if (this.config.enableCSRFProtection && typeof window !== 'undefined') {
      // Add CSRF protection
      this.addCSRFToken();
    }
  }

  private enableContentSecurityPolicy() {
    if (this.config.enableContentSecurityPolicy && typeof document !== 'undefined') {
      // Add additional security headers
      this.addSecurityMetaTags();
    }
  }

  private addSecurityHeaders() {
    if (typeof document !== 'undefined') {
      // Add security-related meta tags
      const securityMeta = document.createElement('meta');
      securityMeta.httpEquiv = 'X-Content-Type-Options';
      securityMeta.content = 'nosniff';
      document.head.appendChild(securityMeta);

      const frameOptionsMeta = document.createElement('meta');
      frameOptionsMeta.httpEquiv = 'X-Frame-Options';
      frameOptionsMeta.content = 'DENY';
      document.head.appendChild(frameOptionsMeta);

      const referrerMeta = document.createElement('meta');
      referrerMeta.name = 'referrer';
      referrerMeta.content = 'strict-origin-when-cross-origin';
      document.head.appendChild(referrerMeta);
    }
  }

  private addCSRFToken() {
    if (typeof window !== 'undefined') {
      // Generate CSRF token
      const token = this.generateCSRFToken();
      sessionStorage.setItem('csrf-token', token);
      
      // Add token to all forms
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        const tokenInput = document.createElement('input');
        tokenInput.type = 'hidden';
        tokenInput.name = 'csrf-token';
        tokenInput.value = token;
        form.appendChild(tokenInput);
      });
    }
  }

  private addSecurityMetaTags() {
    if (typeof document !== 'undefined') {
      // Add additional security meta tags
      const permissionsMeta = document.createElement('meta');
      permissionsMeta.name = 'permissions-policy';
      permissionsMeta.content = 'camera=(), microphone=(), geolocation=()';
      document.head.appendChild(permissionsMeta);
    }
  }

  private generateCSRFToken(): string {
    // Generate a random CSRF token
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  validateCSRFToken(token: string): boolean {
    if (typeof window !== 'undefined') {
      const storedToken = sessionStorage.getItem('csrf-token');
      return storedToken === token;
    }
    return false;
  }

  sanitizeInput(input: string): string {
    // Basic input sanitization
    return input
      .replace(/[<>]/g, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '');
  }

  cleanup() {
    // Cleanup function if needed
  }
}

// Default security configuration
const defaultSecurityConfig: SecurityConfig = {
  enableHTTPS: true,
  enableCSP: true,
  enableXSSProtection: true,
  enableCSRFProtection: true,
  enableContentSecurityPolicy: true
};

// Create and export security enhancer instance
const securityEnhancer = new SecurityEnhancer(defaultSecurityConfig);

export default securityEnhancer;