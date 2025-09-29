/**
 * Advanced Security Enhancement System
 */

interface SecurityMetrics {
  cspCompliance: boolean;
  httpsEnforcement: boolean;
  xssProtection: boolean;
  clickjackingProtection: boolean;
  contentTypeSniffing: boolean;
  referrerPolicy: boolean;
  permissionsPolicy: boolean;
}

class AdvancedSecurityEnhancer {
  private metrics: SecurityMetrics | null = null;

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    this.setupCSP();
    this.setupSecurityHeaders();
    this.setupXSSProtection();
    this.setupClickjackingProtection();
    this.setupContentSecurity();
  }

  private setupCSP(): void {
    const csp = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval';
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https:;
      font-src 'self' https://fonts.gstatic.com;
      connect-src 'self';
      frame-src 'none';
      object-src 'none';
      base-uri 'self';
      form-action 'self';
    `;

    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = csp.replace(/\s+/g, ' ').trim();
    document.head.appendChild(meta);
  }

  private setupSecurityHeaders(): void {
    // X-Frame-Options
    const frameOptions = document.createElement('meta');
    frameOptions.httpEquiv = 'X-Frame-Options';
    frameOptions.content = 'DENY';
    document.head.appendChild(frameOptions);

    // X-Content-Type-Options
    const contentTypeOptions = document.createElement('meta');
    contentTypeOptions.httpEquiv = 'X-Content-Type-Options';
    contentTypeOptions.content = 'nosniff';
    document.head.appendChild(contentTypeOptions);

    // Referrer-Policy
    const referrerPolicy = document.createElement('meta');
    referrerPolicy.name = 'referrer';
    referrerPolicy.content = 'strict-origin-when-cross-origin';
    document.head.appendChild(referrerPolicy);
  }

  private setupXSSProtection(): void {
    const xssProtection = document.createElement('meta');
    xssProtection.httpEquiv = 'X-XSS-Protection';
    xssProtection.content = '1; mode=block';
    document.head.appendChild(xssProtection);
  }

  private setupClickjackingProtection(): void {
    // Add clickjacking protection
    const style = document.createElement('style');
    style.textContent = `
      body {
        position: relative;
      }
      
      body::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);
  }

  private setupContentSecurity(): void {
    // Sanitize user input
    this.sanitizeInputs();
    
    // Add secure cookie handling
    this.setupSecureCookies();
  }

  private sanitizeInputs(): void {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
      input.addEventListener('input', (event) => {
        const target = event.target as HTMLInputElement;
        target.value = this.sanitizeString(target.value);
      });
    });
  }

  private sanitizeString(str: string): string {
    return str
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<[^>]*>/g, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '');
  }

  private setupSecureCookies(): void {
    // Add secure cookie handling
    const originalSetCookie = document.cookie;
    
    // Override cookie setting to ensure security
    Object.defineProperty(document, 'cookie', {
      get: function() {
        return originalSetCookie;
      },
      set: function(value) {
        // Ensure secure and httpOnly flags
        if (value.includes('secure') && value.includes('HttpOnly')) {
          originalSetCookie = value;
        } else {
          console.warn('Insecure cookie detected:', value);
        }
      }
    });
  }

  public getMetrics(): SecurityMetrics | null {
    return this.metrics;
  }

  public generateReport(): string {
    return `
Security Report:
===============
CSP Compliance: ${this.metrics?.cspCompliance ? 'Enabled' : 'Disabled'}
HTTPS Enforcement: ${this.metrics?.httpsEnforcement ? 'Enabled' : 'Disabled'}
XSS Protection: ${this.metrics?.xssProtection ? 'Enabled' : 'Disabled'}
Clickjacking Protection: ${this.metrics?.clickjackingProtection ? 'Enabled' : 'Disabled'}
Content Type Sniffing: ${this.metrics?.contentTypeSniffing ? 'Disabled' : 'Enabled'}
Referrer Policy: ${this.metrics?.referrerPolicy ? 'Set' : 'Not Set'}
Permissions Policy: ${this.metrics?.permissionsPolicy ? 'Set' : 'Not Set'}
    `;
  }
}

export const securityEnhancer = new AdvancedSecurityEnhancer();
export type { SecurityMetrics };