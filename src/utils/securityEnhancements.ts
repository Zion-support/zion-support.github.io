/**
 * Security Enhancement Utilities
 * Advanced security features for the Zion Tech Group website
 */

interface SecurityConfig {
  enableCSP: boolean;
  enableHSTS: boolean;
  enableClickjackingProtection: boolean;
  enableXSSProtection: boolean;
  enableContentTypeSniffingProtection: boolean;
  allowedOrigins: string[];
  reportUri?: string;
}

interface SecurityViolation {
  type: string;
  source: string;
  blockedURI: string;
  violatedDirective: string;
  timestamp: number;
  userAgent: string;
  url: string;
}

interface SecurityMetrics {
  violations: SecurityViolation[];
  suspiciousActivities: Array<{
    type: string;
    timestamp: number;
    details: Record<string, unknown>;
  }>;
  blockedRequests: number;
  allowedRequests: number;
}

export class SecurityEnhancer {
  private static instance: SecurityEnhancer;
  private config: SecurityConfig;
  private metrics: SecurityMetrics;
  private violationHandler?: (violation: SecurityViolation) => void;

  private constructor() {
    this.config = {
      enableCSP: true,
      enableHSTS: true,
      enableClickjackingProtection: true,
      enableXSSProtection: true,
      enableContentTypeSniffingProtection: true,
      allowedOrigins: [
        window.location.origin,
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://cdn.jsdelivr.net'
      ]
    };

    this.metrics = {
      violations: [],
      suspiciousActivities: [],
      blockedRequests: 0,
      allowedRequests: 0
    };

    this.initializeSecurityFeatures();
  }

  public static getInstance(): SecurityEnhancer {
    if (!SecurityEnhancer.instance) {
      SecurityEnhancer.instance = new SecurityEnhancer();
    }
    return SecurityEnhancer.instance;
  }

  public configure(config: Partial<SecurityConfig>): void {
    this.config = { ...this.config, ...config };
    this.initializeSecurityFeatures();
  }

  public setViolationHandler(handler: (violation: SecurityViolation) => void): void {
    this.violationHandler = handler;
  }

  private initializeSecurityFeatures(): void {
    this.setupCSP();
    this.setupClickjackingProtection();
    this.setupXSSProtection();
    this.setupContentTypeSniffingProtection();
    this.setupCSPViolationReporting();
    this.setupSuspiciousActivityDetection();
  }

  private setupCSP(): void {
    if (!this.config.enableCSP) return;

    const cspDirectives = [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline' ${this.config.allowedOrigins.join(' ')}`,
      `style-src 'self' 'unsafe-inline' ${this.config.allowedOrigins.join(' ')}`,
      `img-src 'self' data: blob: ${this.config.allowedOrigins.join(' ')}`,
      `font-src 'self' ${this.config.allowedOrigins.join(' ')}`,
      `connect-src 'self' ${this.config.allowedOrigins.join(' ')}`,
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests"
    ];

    if (this.config.reportUri) {
      cspDirectives.push(`report-uri ${this.config.reportUri}`);
    }

    const cspHeader = cspDirectives.join('; ');
    
    // Set CSP meta tag
    let cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]') as HTMLMetaElement;
    if (!cspMeta) {
      cspMeta = document.createElement('meta');
      cspMeta.httpEquiv = 'Content-Security-Policy';
      document.head.appendChild(cspMeta);
    }
    cspMeta.content = cspHeader;
  }

  private setupClickjackingProtection(): void {
    if (!this.config.enableClickjackingProtection) return;

    // Check if we're in a frame
    if (window.self !== window.top) {
      const allowedFraming = this.config.allowedOrigins.some(origin => 
        window.location.hostname === new URL(origin).hostname
      );

      if (!allowedFraming) {
        // Redirect to prevent clickjacking
        if (window.top) {
          window.top.location.href = window.location.href;
        }
      }
    }
  }

  private setupXSSProtection(): void {
    if (!this.config.enableXSSProtection) return;

    // Set X-XSS-Protection header via meta tag
    let xssMeta = document.querySelector('meta[http-equiv="X-XSS-Protection"]') as HTMLMetaElement;
    if (!xssMeta) {
      xssMeta = document.createElement('meta');
      xssMeta.httpEquiv = 'X-XSS-Protection';
      document.head.appendChild(xssMeta);
    }
    xssMeta.content = '1; mode=block';
  }

  private setupContentTypeSniffingProtection(): void {
    if (!this.config.enableContentTypeSniffingProtection) return;

    // Set X-Content-Type-Options header via meta tag
    let contentTypeMeta = document.querySelector('meta[http-equiv="X-Content-Type-Options"]') as HTMLMetaElement;
    if (!contentTypeMeta) {
      contentTypeMeta = document.createElement('meta');
      contentTypeMeta.httpEquiv = 'X-Content-Type-Options';
      document.head.appendChild(contentTypeMeta);
    }
    contentTypeMeta.content = 'nosniff';
  }

  private setupCSPViolationReporting(): void {
    document.addEventListener('securitypolicyviolation', (event) => {
      const violation: SecurityViolation = {
        type: 'CSP',
        source: event.sourceFile || 'unknown',
        blockedURI: event.blockedURI || 'unknown',
        violatedDirective: event.violatedDirective || 'unknown',
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href
      };

      this.metrics.violations.push(violation);
      this.metrics.blockedRequests++;

      // Call custom violation handler if set
      if (this.violationHandler) {
        this.violationHandler(violation);
      }

      // Send violation report
      this.reportViolation(violation);
    });
  }

  private setupSuspiciousActivityDetection(): void {
    // Monitor for suspicious patterns
    let suspiciousActivityCount = 0;
    const suspiciousThreshold = 10;
    const timeWindow = 60000; // 1 minute

    const detectSuspiciousActivity = (activity: string, details: Record<string, unknown>) => {
      suspiciousActivityCount++;
      
      this.metrics.suspiciousActivities.push({
        type: activity,
        timestamp: Date.now(),
        details
      });

      // If too many suspicious activities in a short time, take action
      if (suspiciousActivityCount > suspiciousThreshold) {
        this.handleHighSuspiciousActivity();
      }
    };

    // Monitor rapid clicks (potential bot activity)
    let clickCount = 0;
    let lastClickTime = 0;
    document.addEventListener('click', () => {
      const now = Date.now();
      if (now - lastClickTime < 100) { // Less than 100ms between clicks
        clickCount++;
        if (clickCount > 5) {
          detectSuspiciousActivity('rapid_clicks', {
            clickCount,
            timeWindow: now - lastClickTime
          });
        }
      } else {
        clickCount = 0;
      }
      lastClickTime = now;
    });

    // Monitor rapid form submissions
    let formSubmissionCount = 0;
    document.addEventListener('submit', () => {
      formSubmissionCount++;
      if (formSubmissionCount > 3) {
        detectSuspiciousActivity('rapid_form_submissions', {
          submissionCount: formSubmissionCount
        });
      }
    });

    // Monitor suspicious user agent patterns
    const userAgent = navigator.userAgent.toLowerCase();
    const suspiciousPatterns = [
      'bot', 'crawler', 'spider', 'scraper', 'automated'
    ];

    if (suspiciousPatterns.some(pattern => userAgent.includes(pattern))) {
      detectSuspiciousActivity('suspicious_user_agent', {
        userAgent: navigator.userAgent
      });
    }

    // Reset counters periodically
    setInterval(() => {
      suspiciousActivityCount = Math.max(0, suspiciousActivityCount - 1);
      clickCount = 0;
      formSubmissionCount = 0;
    }, timeWindow);
  }

  private handleHighSuspiciousActivity(): void {
    console.warn('High level of suspicious activity detected');
    
    // Implement rate limiting or additional security measures
    this.enableRateLimiting();
    
    // Send alert to security monitoring
    this.reportSecurityAlert('high_suspicious_activity', {
      suspiciousActivities: this.metrics.suspiciousActivities.slice(-10),
      timestamp: Date.now()
    });
  }

  private enableRateLimiting(): void {
    // Simple client-side rate limiting
    let requestCount = 0;
    const maxRequests = 10;
    const timeWindow = 60000; // 1 minute

    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      requestCount++;
      
      if (requestCount > maxRequests) {
        throw new Error('Rate limit exceeded');
      }

      return originalFetch(...args);
    };

    // Reset counter periodically
    setInterval(() => {
      requestCount = Math.max(0, requestCount - 1);
    }, timeWindow);
  }

  private async reportViolation(violation: SecurityViolation): Promise<void> {
    try {
      await fetch('/api/security/violations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(violation)
      });
    } catch (error) {
      console.warn('Failed to report security violation:', error);
    }
  }

  private async reportSecurityAlert(type: string, details: Record<string, unknown>): Promise<void> {
    try {
      await fetch('/api/security/alerts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type,
          details,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      });
    } catch (error) {
      console.warn('Failed to report security alert:', error);
    }
  }

  public sanitizeInput(input: string): string {
    // Basic XSS prevention
    return input
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  }

  public validateURL(url: string): boolean {
    try {
      const parsedUrl = new URL(url);
      return this.config.allowedOrigins.some(origin => {
        try {
          const allowedUrl = new URL(origin);
          return parsedUrl.protocol === allowedUrl.protocol && 
                 parsedUrl.hostname === allowedUrl.hostname;
        } catch {
          return false;
        }
      });
    } catch {
      return false;
    }
  }

  public generateSecureToken(length: number = 32): string {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  public hashString(input: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    return crypto.subtle.digest('SHA-256', data).then(hashBuffer => {
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    });
  }

  public getSecurityMetrics(): SecurityMetrics {
    return { ...this.metrics };
  }

  public clearMetrics(): void {
    this.metrics = {
      violations: [],
      suspiciousActivities: [],
      blockedRequests: 0,
      allowedRequests: 0
    };
  }
}

// Export singleton instance
export const securityEnhancer = SecurityEnhancer.getInstance();