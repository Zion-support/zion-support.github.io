/**
 * Enhanced Security System
 * Comprehensive security features and utilities
 */

interface SecurityConfig {
  enableCSP: boolean;
  enableHSTS: boolean;
  enableXSSProtection: boolean;
  enableCSRFProtection: boolean;
  enableContentSecurity: boolean;
}

interface SecurityMetrics {
  cspViolations: number;
  xssAttempts: number;
  csrfAttempts: number;
  suspiciousActivity: number;
  securityScore: number;
}

class SecurityEnhancer {
  private config: SecurityConfig;
  private metrics: SecurityMetrics;
  private eventListeners: Map<string, EventListener> = new Map();
  private violationCounts: Map<string, number> = new Map();

  constructor(config: Partial<SecurityConfig> = {}) {
    this.config = {
      enableCSP: true,
      enableHSTS: true,
      enableXSSProtection: true,
      enableCSRFProtection: true,
      enableContentSecurity: true,
      ...config,
    };

    this.metrics = {
      cspViolations: 0,
      xssAttempts: 0,
      csrfAttempts: 0,
      suspiciousActivity: 0,
      securityScore: 100,
    };

    this.initializeSecurity();
  }

  private initializeSecurity(): void {
    if (typeof window === 'undefined') return;

    this.setupCSP();
    this.setupXSSProtection();
    this.setupCSRFProtection();
    this.setupContentSecurity();
    this.monitorSecurityEvents();
  }

  /**
   * Setup Content Security Policy monitoring
   */
  private setupCSP(): void {
    if (!this.config.enableCSP) return;

    // Monitor CSP violations
    document.addEventListener('securitypolicyviolation', (event) => {
      this.handleCSPViolation(event);
    });

    // Add CSP headers via meta tag as fallback
    this.addCSPMetaTag();
  }

  private handleCSPViolation(event: SecurityPolicyViolationEvent): void {
    this.metrics.cspViolations++;
    this.violationCounts.set('csp', (this.violationCounts.get('csp') || 0) + 1);

    console.warn('CSP Violation:', {
      violatedDirective: event.violatedDirective,
      blockedURI: event.blockedURI,
      sourceFile: event.sourceFile,
      lineNumber: event.lineNumber,
      columnNumber: event.columnNumber,
    });

    // Report to analytics or monitoring service
    this.reportSecurityEvent('csp_violation', {
      directive: event.violatedDirective,
      blockedURI: event.blockedURI,
    });
  }

  private addCSPMetaTag(): void {
    const csp = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://unpkg.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https: wss:; frame-src 'none'; object-src 'none'; base-uri 'self'; form-action 'self';";
    
    const metaTag = document.createElement('meta');
    metaTag.setAttribute('http-equiv', 'Content-Security-Policy');
    metaTag.setAttribute('content', csp);
    document.head.appendChild(metaTag);
  }

  /**
   * Setup XSS Protection
   */
  private setupXSSProtection(): void {
    if (!this.config.enableXSSProtection) return;

    // Sanitize user inputs
    this.sanitizeInputs();

    // Monitor for suspicious script execution
    this.monitorScriptExecution();

    // Add XSS protection headers
    this.addXSSProtectionHeaders();
  }

  private sanitizeInputs(): void {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach((input) => {
      input.addEventListener('input', (event) => {
        const target = event.target as HTMLInputElement;
        const sanitized = this.sanitizeString(target.value);
        if (sanitized !== target.value) {
          this.metrics.xssAttempts++;
          target.value = sanitized;
          this.reportSecurityEvent('xss_attempt', { input: target.name || target.id });
        }
      });
    });
  }

  private sanitizeString(input: string): string {
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '')
      .replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, '');
  }

  private monitorScriptExecution(): void {
    const originalCreateElement = document.createElement;
    document.createElement = function(tagName: string) {
      const element = originalCreateElement.call(this, tagName);
      
      if (tagName.toLowerCase() === 'script') {
        console.warn('Dynamic script creation detected:', element);
      }
      
      return element;
    };
  }

  private addXSSProtectionHeaders(): void {
    // These would typically be set by the server, but we can add meta tags as fallback
    const metaTag = document.createElement('meta');
    metaTag.setAttribute('http-equiv', 'X-XSS-Protection');
    metaTag.setAttribute('content', '1; mode=block');
    document.head.appendChild(metaTag);
  }

  /**
   * Setup CSRF Protection
   */
  private setupCSRFProtection(): void {
    if (!this.config.enableCSRFProtection) return;

    this.addCSRFTokens();
    this.validateCSRFTokens();
  }

  private addCSRFTokens(): void {
    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
      const token = this.generateCSRFToken();
      const tokenInput = document.createElement('input');
      tokenInput.type = 'hidden';
      tokenInput.name = 'csrf_token';
      tokenInput.value = token;
      form.appendChild(tokenInput);
    });
  }

  private generateCSRFToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  private validateCSRFTokens(): void {
    // This would typically be handled by the server
    // For client-side, we can store tokens and validate them
    const storedToken = sessionStorage.getItem('csrf_token');
    if (!storedToken) {
      sessionStorage.setItem('csrf_token', this.generateCSRFToken());
    }
  }

  /**
   * Setup Content Security
   */
  private setupContentSecurity(): void {
    if (!this.config.enableContentSecurity) return;

    this.monitorFileUploads();
    this.validateURLs();
    this.preventClickjacking();
  }

  private monitorFileUploads(): void {
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach((input) => {
      input.addEventListener('change', (event) => {
        const target = event.target as HTMLInputElement;
        const files = target.files;
        
        if (files) {
          Array.from(files).forEach((file) => {
            if (!this.isValidFileType(file)) {
              this.metrics.suspiciousActivity++;
              this.reportSecurityEvent('invalid_file_type', { 
                fileName: file.name, 
                fileType: file.type 
              });
            }
          });
        }
      });
    });
  }

  private isValidFileType(file: File): boolean {
    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      'application/pdf',
      'text/plain',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    
    return allowedTypes.includes(file.type);
  }

  private validateURLs(): void {
    const links = document.querySelectorAll('a[href]');
    links.forEach((link) => {
      const href = link.getAttribute('href');
      if (href && this.isSuspiciousURL(href)) {
        this.metrics.suspiciousActivity++;
        this.reportSecurityEvent('suspicious_url', { url: href });
      }
    });
  }

  private isSuspiciousURL(url: string): boolean {
    const suspiciousPatterns = [
      /javascript:/i,
      /data:/i,
      /vbscript:/i,
      /file:/i,
    ];
    
    return suspiciousPatterns.some(pattern => pattern.test(url));
  }

  private preventClickjacking(): void {
    // Add X-Frame-Options via meta tag
    const metaTag = document.createElement('meta');
    metaTag.setAttribute('http-equiv', 'X-Frame-Options');
    metaTag.setAttribute('content', 'DENY');
    document.head.appendChild(metaTag);

    // Additional client-side protection
    if (window.top !== window.self) {
      if (window.top) {
        window.top.location.href = window.self.location.href;
      }
    }
  }

  /**
   * Monitor security events
   */
  private monitorSecurityEvents(): void {
    // Monitor for suspicious network activity
    const originalFetch = window.fetch;
    window.fetch = async (input, init) => {
      const url = typeof input === 'string' ? input : (input as Request).url;
      
      if (this.isSuspiciousURL(url)) {
        this.metrics.suspiciousActivity++;
        this.reportSecurityEvent('suspicious_fetch', { url });
        throw new Error('Suspicious URL blocked');
      }
      
      return originalFetch(input, init);
    };

    // Monitor for suspicious DOM modifications
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.tagName === 'SCRIPT' || element.tagName === 'IFRAME') {
                this.metrics.suspiciousActivity++;
                this.reportSecurityEvent('suspicious_dom_modification', {
                  tagName: element.tagName,
                  src: element.getAttribute('src'),
                });
              }
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  /**
   * Report security events
   */
  private reportSecurityEvent(type: string, data: Record<string, unknown>): void {
    // In a real implementation, this would send data to a security monitoring service
    console.warn(`Security Event: ${type}`, data);
    
    // Could integrate with services like:
    // - Sentry for error tracking
    // - DataDog for monitoring
    // - Custom security dashboard
  }

  /**
   * Calculate security score
   */
  private calculateSecurityScore(): void {
    const violations = this.metrics.cspViolations + this.metrics.xssAttempts + 
                      this.metrics.csrfAttempts + this.metrics.suspiciousActivity;
    
    // Score decreases with violations
    this.metrics.securityScore = Math.max(0, 100 - (violations * 10));
  }

  /**
   * Get security metrics
   */
  getMetrics(): SecurityMetrics {
    this.calculateSecurityScore();
    return { ...this.metrics };
  }

  /**
   * Generate security report
   */
  generateReport(): string {
    const metrics = this.getMetrics();
    return `
Security Report:
- CSP Violations: ${metrics.cspViolations}
- XSS Attempts: ${metrics.xssAttempts}
- CSRF Attempts: ${metrics.csrfAttempts}
- Suspicious Activity: ${metrics.suspiciousActivity}
- Security Score: ${metrics.securityScore.toFixed(1)}/100
    `.trim();
  }

  /**
   * Clean up event listeners
   */
  destroy(): void {
    this.eventListeners.forEach((listener, event) => {
      document.removeEventListener(event, listener);
    });
    this.eventListeners.clear();
  }
}

// Export singleton instance
export const securityEnhancer = new SecurityEnhancer();

// Export class for custom instances
export { SecurityEnhancer };
export type { SecurityConfig, SecurityMetrics };