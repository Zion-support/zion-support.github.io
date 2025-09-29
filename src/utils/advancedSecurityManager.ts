/**
 * Advanced Security Manager
 * Comprehensive security utilities for the Zion Tech Group website
 */

export interface SecurityConfig {
  enableCSP: boolean;
  enableHSTS: boolean;
  enableXSSProtection: boolean;
  enableCSRFProtection: boolean;
  enableContentSecurityPolicy: boolean;
  enableSecureHeaders: boolean;
}

export interface SecurityMetrics {
  threatsBlocked: number;
  suspiciousActivity: number;
  securityScore: number;
  lastScan: number;
}

export interface SecurityThreat {
  id: string;
  type: 'xss' | 'csrf' | 'injection' | 'malware' | 'phishing';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  timestamp: number;
  blocked: boolean;
}

class AdvancedSecurityManager {
  private config: SecurityConfig;
  private metrics: SecurityMetrics = {
    threatsBlocked: 0,
    suspiciousActivity: 0,
    securityScore: 100,
    lastScan: Date.now()
  };
  private threats: SecurityThreat[] = [];

  constructor(config: Partial<SecurityConfig> = {}) {
    this.config = {
      enableCSP: true,
      enableHSTS: true,
      enableXSSProtection: true,
      enableCSRFProtection: true,
      enableContentSecurityPolicy: true,
      enableSecureHeaders: true,
      ...config
    };
  }

  /**
   * Initialize security measures
   */
  async initialize(): Promise<void> {
    try {
      if (this.config.enableContentSecurityPolicy) {
        this.setupContentSecurityPolicy();
      }

      if (this.config.enableSecureHeaders) {
        this.setupSecureHeaders();
      }

      if (this.config.enableXSSProtection) {
        this.setupXSSProtection();
      }

      if (this.config.enableCSRFProtection) {
        this.setupCSRFProtection();
      }

      this.startSecurityMonitoring();
    } catch (error) {
      console.error('Failed to initialize security manager:', error);
    }
  }

  /**
   * Setup Content Security Policy
   */
  private setupContentSecurityPolicy(): void {
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' https:",
      "connect-src 'self' https:",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'"
    ].join('; ');

    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = csp;
    document.head.appendChild(meta);
  }

  /**
   * Setup secure headers
   */
  private setupSecureHeaders(): void {
    // This would typically be done server-side
    // For client-side, we can only set some headers via meta tags
    const headers = [
      { name: 'X-Content-Type-Options', value: 'nosniff' },
      { name: 'X-Frame-Options', value: 'DENY' },
      { name: 'X-XSS-Protection', value: '1; mode=block' },
      { name: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }
    ];

    headers.forEach(header => {
      const meta = document.createElement('meta');
      meta.httpEquiv = header.name;
      meta.content = header.value;
      document.head.appendChild(meta);
    });
  }

  /**
   * Setup XSS Protection
   */
  private setupXSSProtection(): void {
    // Sanitize user input
    const originalCreateElement = document.createElement;
    document.createElement = function(tagName: string) {
      const element = originalCreateElement.call(this, tagName);
      
      // Add input sanitization for form elements
      if (tagName === 'input' || tagName === 'textarea') {
        element.addEventListener('input', (event) => {
          const target = event.target as HTMLInputElement;
          if (target.value) {
            target.value = target.value.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
          }
        });
      }
      
      return element;
    };
  }

  /**
   * Setup CSRF Protection
   */
  private setupCSRFProtection(): void {
    // Generate CSRF token
    const token = this.generateCSRFToken();
    sessionStorage.setItem('csrf_token', token);

    // Add token to all forms
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      if (form.method.toLowerCase() === 'post') {
        const tokenInput = document.createElement('input');
        tokenInput.type = 'hidden';
        tokenInput.name = 'csrf_token';
        tokenInput.value = token;
        form.appendChild(tokenInput);
      }
    });
  }

  /**
   * Start security monitoring
   */
  private startSecurityMonitoring(): void {
    // Monitor for suspicious activity
    this.monitorSuspiciousActivity();
    
    // Monitor for malware patterns
    this.monitorMalwarePatterns();
    
    // Monitor for phishing attempts
    this.monitorPhishingAttempts();
  }

  /**
   * Monitor suspicious activity
   */
  private monitorSuspiciousActivity(): void {
    // Monitor for rapid requests
    let requestCount = 0;
    const requestWindow = 60000; // 1 minute
    
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      requestCount++;
      
      if (requestCount > 100) {
        this.recordThreat({
          id: `suspicious_${Date.now()}`,
          type: 'injection',
          severity: 'medium',
          description: 'High request frequency detected',
          timestamp: Date.now(),
          blocked: false
        });
      }
      
      return originalFetch.apply(this, args);
    };

    // Reset counter every minute
    setInterval(() => {
      requestCount = 0;
    }, requestWindow);
  }

  /**
   * Monitor malware patterns
   */
  private monitorMalwarePatterns(): void {
    // Check for suspicious scripts
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            if (element.tagName === 'SCRIPT') {
              const script = element as HTMLScriptElement;
              if (script.src && this.isSuspiciousURL(script.src)) {
                this.recordThreat({
                  id: `malware_${Date.now()}`,
                  type: 'malware',
                  severity: 'high',
                  description: `Suspicious script detected: ${script.src}`,
                  timestamp: Date.now(),
                  blocked: true
                });
                
                // Block the script
                script.remove();
              }
            }
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  /**
   * Monitor phishing attempts
   */
  private monitorPhishingAttempts(): void {
    // Check for suspicious links
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.href) {
        if (this.isSuspiciousURL(link.href)) {
          this.recordThreat({
            id: `phishing_${Date.now()}`,
            type: 'phishing',
            severity: 'high',
            description: `Suspicious link clicked: ${link.href}`,
            timestamp: Date.now(),
            blocked: true
          });
          
          event.preventDefault();
          alert('This link appears to be suspicious and has been blocked for your security.');
        }
      }
    });
  }

  /**
   * Check if URL is suspicious
   */
  private isSuspiciousURL(url: string): boolean {
    const suspiciousPatterns = [
      /bit\.ly/i,
      /tinyurl\.com/i,
      /goo\.gl/i,
      /t\.co/i,
      /phishing/i,
      /malware/i,
      /virus/i
    ];

    return suspiciousPatterns.some(pattern => pattern.test(url));
  }

  /**
   * Record security threat
   */
  private recordThreat(threat: SecurityThreat): void {
    this.threats.push(threat);
    this.metrics.threatsBlocked++;
    this.updateSecurityScore();
    
    console.warn('Security threat detected:', threat);
  }

  /**
   * Update security score
   */
  private updateSecurityScore(): void {
    const threatCount = this.threats.length;
    const recentThreats = this.threats.filter(t => Date.now() - t.timestamp < 3600000); // Last hour
    
    this.metrics.securityScore = Math.max(0, 100 - (threatCount * 5) - (recentThreats.length * 10));
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
   * Get security metrics
   */
  getMetrics(): SecurityMetrics {
    return { ...this.metrics };
  }

  /**
   * Get security threats
   */
  getThreats(): SecurityThreat[] {
    return [...this.threats];
  }

  /**
   * Scan for vulnerabilities
   */
  async scanVulnerabilities(): Promise<void> {
    this.metrics.lastScan = Date.now();
    
    // Check for common vulnerabilities
    this.checkForVulnerabilities();
  }

  /**
   * Check for common vulnerabilities
   */
  private checkForVulnerabilities(): void {
    // Check for insecure forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      if (form.action && !form.action.startsWith('https://')) {
        this.recordThreat({
          id: `insecure_form_${Date.now()}`,
          type: 'injection',
          severity: 'medium',
          description: 'Form submitted over insecure connection',
          timestamp: Date.now(),
          blocked: false
        });
      }
    });

    // Check for insecure images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img.src && !img.src.startsWith('https://') && !img.src.startsWith('data:')) {
        this.recordThreat({
          id: `insecure_image_${Date.now()}`,
          type: 'injection',
          severity: 'low',
          description: 'Image loaded over insecure connection',
          timestamp: Date.now(),
          blocked: false
        });
      }
    });
  }
}

// Create and export singleton instance
export const advancedSecurityManager = new AdvancedSecurityManager();

// Export class for custom instances
export { AdvancedSecurityManager };
// Types are already exported above as interfaces