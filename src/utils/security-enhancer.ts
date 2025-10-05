/**
 * Security Enhancer Utility
 * Advanced security monitoring and protection tools
 */

interface SecurityConfig {
  enableCSP: boolean;
  enableXSSProtection: boolean;
  enableCSRFProtection: boolean;
  enableClickjackingProtection: boolean;
  enableSecureHeaders: boolean;
  enableContentValidation: boolean;
  enableRateLimiting: boolean;
}

interface SecurityThreat {
  type: 'xss' | 'csrf' | 'clickjacking' | 'injection' | 'data-leak';
  severity: 'high' | 'medium' | 'low';
  description: string;
  element?: HTMLElement;
  fix?: string;
}

interface SecurityReport {
  score: number;
  threats: SecurityThreat[];
  recommendations: string[];
  timestamp: string;
}

class SecurityEnhancer {
  private config: SecurityConfig;
  private threats: SecurityThreat[] = [];
  private rateLimitMap: Map<string, number[]> = new Map();

  constructor(config: Partial<SecurityConfig> = {}) {
    this.config = {
      enableCSP: true,
      enableXSSProtection: true,
      enableCSRFProtection: true,
      enableClickjackingProtection: true,
      enableSecureHeaders: true,
      enableContentValidation: true,
      enableRateLimiting: true,
      ...config
    };
  }

  /**
   * Initialize security enhancements
   */
  public init(): void {
    if (typeof window === 'undefined') return;

    this.setupCSP();
    this.setupXSSProtection();
    this.setupCSRFProtection();
    this.setupClickjackingProtection();
    this.setupSecureHeaders();
    this.validateContent();
    this.setupRateLimiting();
    this.monitorSecurityEvents();
  }

  /**
   * Setup Content Security Policy
   */
  private setupCSP(): void {
    if (!this.config.enableCSP) return;

    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self' https://api.zion.app",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'"
    ].join('; ');

    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = csp;
    document.head.appendChild(meta);
  }

  /**
   * Setup XSS protection
   */
  private setupXSSProtection(): void {
    if (!this.config.enableXSSProtection) return;

    // Add XSS protection header
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-XSS-Protection';
    meta.content = '1; mode=block';
    document.head.appendChild(meta);

    // Sanitize user input
    this.sanitizeUserInput();
    
    // Monitor for XSS attempts
    this.monitorXSSAttempts();
  }

  /**
   * Setup CSRF protection
   */
  private setupCSRFProtection(): void {
    if (!this.config.enableCSRFProtection) return;

    // Generate CSRF token
    const token = this.generateCSRFToken();
    document.cookie = `csrf-token=${token}; Secure; SameSite=Strict`;

    // Add token to all forms
    this.addCSRFTokenToForms(token);
    
    // Validate CSRF tokens on form submission
    this.validateCSRFTokens();
  }

  /**
   * Setup clickjacking protection
   */
  private setupClickjackingProtection(): void {
    if (!this.config.enableClickjackingProtection) return;

    // Add X-Frame-Options header
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-Frame-Options';
    meta.content = 'DENY';
    document.head.appendChild(meta);

    // Monitor for iframe attempts
    this.monitorIframeAttempts();
  }

  /**
   * Setup secure headers
   */
  private setupSecureHeaders(): void {
    if (!this.config.enableSecureHeaders) return;

    const headers = [
      { name: 'X-Content-Type-Options', value: 'nosniff' },
      { name: 'X-Download-Options', value: 'noopen' },
      { name: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { name: 'Permissions-Policy', value: 'geolocation=(), microphone=(), camera=()' }
    ];

    headers.forEach(header => {
      const meta = document.createElement('meta');
      meta.httpEquiv = header.name;
      meta.content = header.value;
      document.head.appendChild(meta);
    });
  }

  /**
   * Validate content for security issues
   */
  private validateContent(): void {
    if (!this.config.enableContentValidation) return;

    // Check for suspicious scripts
    this.checkSuspiciousScripts();
    
    // Check for data leaks
    this.checkDataLeaks();
    
    // Validate external resources
    this.validateExternalResources();
  }

  /**
   * Setup rate limiting
   */
  private setupRateLimiting(): void {
    if (!this.config.enableRateLimiting) return;

    // Rate limit form submissions
    document.addEventListener('submit', (e) => {
      this.rateLimitFormSubmission(e);
    });

    // Rate limit API calls
    this.rateLimitAPICalls();
  }

  /**
   * Monitor security events
   */
  private monitorSecurityEvents(): void {
    // Monitor for suspicious activities
    document.addEventListener('click', (e) => {
      this.monitorSuspiciousClicks(e);
    });

    // Monitor for keyboard events
    document.addEventListener('keydown', (e) => {
      this.monitorSuspiciousKeypresses(e);
    });

    // Monitor for network requests
    this.monitorNetworkRequests();
  }

  /**
   * Sanitize user input
   */
  private sanitizeUserInput(): void {
    const inputs = document.querySelectorAll('input, textarea');
    
    inputs.forEach((input) => {
      input.addEventListener('input', (e) => {
        const target = e.target as HTMLInputElement;
        const sanitized = this.sanitizeString(target.value);
        if (sanitized !== target.value) {
          target.value = sanitized;
          this.addThreat({
            type: 'xss',
            severity: 'medium',
            description: 'Potentially malicious input detected and sanitized',
            element: target
          });
        }
      });
    });
  }

  /**
   * Monitor XSS attempts
   */
  private monitorXSSAttempts(): void {
    const suspiciousPatterns = [
      /<script[^>]*>.*?<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<iframe[^>]*>.*?<\/iframe>/gi,
      /<object[^>]*>.*?<\/object>/gi,
      /<embed[^>]*>.*?<\/embed>/gi
    ];

    document.addEventListener('DOMContentLoaded', () => {
      suspiciousPatterns.forEach(pattern => {
        const matches = document.documentElement.innerHTML.match(pattern);
        if (matches) {
          this.addThreat({
            type: 'xss',
            severity: 'high',
            description: `Suspicious content detected: ${matches[0].substring(0, 50)}...`,
            fix: 'Remove or sanitize suspicious content'
          });
        }
      });
    });
  }

  /**
   * Generate CSRF token
   */
  private generateCSRFToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  /**
   * Add CSRF token to forms
   */
  private addCSRFTokenToForms(token: string): void {
    const forms = document.querySelectorAll('form');
    
    forms.forEach((form) => {
      const existingToken = form.querySelector('input[name="csrf-token"]');
      if (!existingToken) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'csrf-token';
        input.value = token;
        form.appendChild(input);
      }
    });
  }

  /**
   * Validate CSRF tokens
   */
  private validateCSRFTokens(): void {
    document.addEventListener('submit', (e) => {
      const form = e.target as HTMLFormElement;
      const tokenInput = form.querySelector('input[name="csrf-token"]') as HTMLInputElement;
      
      if (tokenInput) {
        const cookieToken = this.getCookieValue('csrf-token');
        if (tokenInput.value !== cookieToken) {
          e.preventDefault();
          this.addThreat({
            type: 'csrf',
            severity: 'high',
            description: 'CSRF token validation failed',
            fix: 'Ensure CSRF tokens match between form and cookie'
          });
        }
      }
    });
  }

  /**
   * Monitor iframe attempts
   */
  private monitorIframeAttempts(): void {
    // Check if page is in iframe
    if (window !== window.top) {
      this.addThreat({
        type: 'clickjacking',
        severity: 'high',
        description: 'Page is being loaded in an iframe',
        fix: 'Implement proper X-Frame-Options header'
      });
    }
  }

  /**
   * Check for suspicious scripts
   */
  private checkSuspiciousScripts(): void {
    const scripts = document.querySelectorAll('script');
    
    scripts.forEach((script) => {
      const src = script.src;
      const content = script.textContent;
      
      // Check for external scripts from untrusted domains
      if (src && !this.isTrustedDomain(src)) {
        this.addThreat({
          type: 'injection',
          severity: 'medium',
          description: `External script from untrusted domain: ${src}`,
          element: script,
          fix: 'Only load scripts from trusted domains'
        });
      }
      
      // Check for suspicious content
      if (content && this.containsSuspiciousContent(content)) {
        this.addThreat({
          type: 'xss',
          severity: 'high',
          description: 'Suspicious script content detected',
          element: script,
          fix: 'Review and sanitize script content'
        });
      }
    });
  }

  /**
   * Check for data leaks
   */
  private checkDataLeaks(): void {
    // Check for sensitive data in console logs
    const originalLog = console.log;
    console.log = (...args) => {
      const message = args.join(' ');
      if (this.containsSensitiveData(message)) {
        this.addThreat({
          type: 'data-leak',
          severity: 'medium',
          description: 'Sensitive data detected in console log',
          fix: 'Remove sensitive data from console logs'
        });
      }
      originalLog.apply(console, args);
    };

    // Check for sensitive data in DOM
    const sensitivePatterns = [
      /password/i,
      /secret/i,
      /token/i,
      /key/i,
      /api[_-]?key/i
    ];

    sensitivePatterns.forEach(pattern => {
      const elements = document.querySelectorAll('*');
      elements.forEach((element) => {
        if (pattern.test(element.textContent || '')) {
          this.addThreat({
            type: 'data-leak',
            severity: 'low',
            description: 'Potential sensitive data in DOM',
            element: element as HTMLElement,
            fix: 'Review and remove sensitive data from DOM'
          });
        }
      });
    });
  }

  /**
   * Validate external resources
   */
  private validateExternalResources(): void {
    const externalResources = document.querySelectorAll('link[href], script[src], img[src]');
    
    externalResources.forEach((resource) => {
      const url = (resource as HTMLLinkElement | HTMLScriptElement | HTMLImageElement).href || 
                  (resource as HTMLScriptElement | HTMLImageElement).src;
      
      if (url && !this.isTrustedDomain(url)) {
        this.addThreat({
          type: 'injection',
          severity: 'medium',
          description: `External resource from untrusted domain: ${url}`,
          element: resource as HTMLElement,
          fix: 'Only load resources from trusted domains'
        });
      }
    });
  }

  /**
   * Rate limit form submissions
   */
  private rateLimitFormSubmission(e: Event): void {
    const form = e.target as HTMLFormElement;
    const formId = form.id || 'default';
    const now = Date.now();
    
    if (!this.rateLimitMap.has(formId)) {
      this.rateLimitMap.set(formId, []);
    }
    
    const submissions = this.rateLimitMap.get(formId)!;
    const recentSubmissions = submissions.filter(time => now - time < 60000); // 1 minute window
    
    if (recentSubmissions.length >= 5) { // Max 5 submissions per minute
      e.preventDefault();
      this.addThreat({
        type: 'injection',
        severity: 'medium',
        description: 'Rate limit exceeded for form submissions',
        fix: 'Implement proper rate limiting'
      });
      return;
    }
    
    submissions.push(now);
    this.rateLimitMap.set(formId, recentSubmissions);
  }

  /**
   * Rate limit API calls
   */
  private rateLimitAPICalls(): void {
    const originalFetch = window.fetch;
    const apiCalls: number[] = [];
    
    window.fetch = async (...args) => {
      const now = Date.now();
      const recentCalls = apiCalls.filter(time => now - time < 60000);
      
      if (recentCalls.length >= 100) { // Max 100 API calls per minute
        this.addThreat({
          type: 'injection',
          severity: 'medium',
          description: 'Rate limit exceeded for API calls',
          fix: 'Implement proper API rate limiting'
        });
        throw new Error('Rate limit exceeded');
      }
      
      apiCalls.push(now);
      return originalFetch.apply(window, args);
    };
  }

  /**
   * Monitor suspicious clicks
   */
  private monitorSuspiciousClicks(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    
    // Check for suspicious click patterns
    if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('javascript:')) {
      this.addThreat({
        type: 'xss',
        severity: 'high',
        description: 'Suspicious javascript: link detected',
        element: target,
        fix: 'Remove javascript: links'
      });
    }
  }

  /**
   * Monitor suspicious keypresses
   */
  private monitorSuspiciousKeypresses(e: KeyboardEvent): void {
    // Monitor for developer tools shortcuts
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      this.addThreat({
        type: 'injection',
        severity: 'low',
        description: 'Developer tools opened',
        fix: 'Consider disabling developer tools in production'
      });
    }
  }

  /**
   * Monitor network requests
   */
  private monitorNetworkRequests(): void {
    const originalOpen = XMLHttpRequest.prototype.open;
    const originalSend = XMLHttpRequest.prototype.send;
    
    XMLHttpRequest.prototype.open = function(method, url, ...args) {
      this._url = url;
      return originalOpen.apply(this, [method, url, ...args]);
    };
    
    XMLHttpRequest.prototype.send = function(...args) {
      if (this._url && !this.isTrustedDomain(this._url)) {
        this.addThreat({
          type: 'injection',
          severity: 'medium',
          description: `Request to untrusted domain: ${this._url}`,
          fix: 'Only make requests to trusted domains'
        });
      }
      return originalSend.apply(this, args);
    };
  }

  /**
   * Generate security report
   */
  public generateReport(): SecurityReport {
    const score = this.calculateScore();
    const recommendations = this.generateRecommendations();

    return {
      score,
      threats: this.threats,
      recommendations,
      timestamp: new Date().toISOString()
    };
  }

  /**
   * Calculate security score
   */
  private calculateScore(): number {
    let score = 100;
    
    this.threats.forEach(threat => {
      switch (threat.severity) {
        case 'high':
          score -= 25;
          break;
        case 'medium':
          score -= 15;
          break;
        case 'low':
          score -= 5;
          break;
      }
    });

    return Math.max(0, score);
  }

  /**
   * Generate recommendations
   */
  private generateRecommendations(): string[] {
    const recommendations: string[] = [];
    
    const highThreats = this.threats.filter(t => t.severity === 'high');
    const mediumThreats = this.threats.filter(t => t.severity === 'medium');

    if (highThreats.length > 0) {
      recommendations.push(`Address ${highThreats.length} high-severity security threats`);
    }
    if (mediumThreats.length > 0) {
      recommendations.push(`Review ${mediumThreats.length} medium-severity security issues`);
    }
    if (this.threats.some(t => t.type === 'xss')) {
      recommendations.push('Implement XSS protection measures');
    }
    if (this.threats.some(t => t.type === 'csrf')) {
      recommendations.push('Strengthen CSRF protection');
    }

    return recommendations;
  }

  // Helper methods
  private sanitizeString(input: string): string {
    return input
      .replace(/<script[^>]*>.*?<\/script>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '')
      .replace(/<iframe[^>]*>.*?<\/iframe>/gi, '')
      .replace(/<object[^>]*>.*?<\/object>/gi, '')
      .replace(/<embed[^>]*>.*?<\/embed>/gi, '');
  }

  private addThreat(threat: SecurityThreat): void {
    this.threats.push(threat);
  }

  private isTrustedDomain(url: string): boolean {
    const trustedDomains = [
      'zion.app',
      'cdn.jsdelivr.net',
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'api.zion.app'
    ];
    
    try {
      const domain = new URL(url).hostname;
      return trustedDomains.some(trusted => domain.endsWith(trusted));
    } catch {
      return false;
    }
  }

  private containsSuspiciousContent(content: string): boolean {
    const suspiciousPatterns = [
      /eval\s*\(/gi,
      /Function\s*\(/gi,
      /setTimeout\s*\(/gi,
      /setInterval\s*\(/gi,
      /document\.write/gi,
      /innerHTML\s*=/gi
    ];
    
    return suspiciousPatterns.some(pattern => pattern.test(content));
  }

  private containsSensitiveData(message: string): boolean {
    const sensitivePatterns = [
      /password\s*[:=]\s*['"]\w+['"]/gi,
      /token\s*[:=]\s*['"]\w+['"]/gi,
      /key\s*[:=]\s*['"]\w+['"]/gi,
      /secret\s*[:=]\s*['"]\w+['"]/gi
    ];
    
    return sensitivePatterns.some(pattern => pattern.test(message));
  }

  private getCookieValue(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
  }
}

// Export singleton instance
export const securityEnhancer = new SecurityEnhancer();

// Auto-initialize in browser environment
if (typeof window !== 'undefined') {
  securityEnhancer.init();
}

export default SecurityEnhancer;