/**
 * Advanced Security Enhancer
 * Provides comprehensive security monitoring and protection utilities
 */

interface SecurityConfig {
  enableCSP: boolean;
  enableXSSProtection: boolean;
  enableCSRFProtection: boolean;
  enableClickjackingProtection: boolean;
  enableSecureHeaders: boolean;
  enableContentSecurityPolicy: boolean;
  enableHSTS: boolean;
  enableReferrerPolicy: boolean;
  enableFeaturePolicy: boolean;
  enablePermissionsPolicy: boolean;
}

interface SecurityMetrics {
  blockedRequests: number;
  xssAttempts: number;
  csrfAttempts: number;
  suspiciousActivity: number;
  securityViolations: number;
  blockedDomains: number;
  secureConnections: number;
  insecureConnections: number;
}

interface SecurityEvent {
  type: 'xss' | 'csrf' | 'clickjacking' | 'insecure_content' | 'suspicious_activity';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: number;
  source: string;
  userAgent: string;
  ip?: string;
  blocked: boolean;
}

class SecurityEnhancer {
  private config: SecurityConfig;
  private metrics: SecurityMetrics;
  private securityEvents: SecurityEvent[] = [];
  private blockedDomains: Set<string> = new Set();
  private suspiciousPatterns: RegExp[] = [];

  constructor(config: Partial<SecurityConfig> = {}) {
    this.config = {
      enableCSP: true,
      enableXSSProtection: true,
      enableCSRFProtection: true,
      enableClickjackingProtection: true,
      enableSecureHeaders: true,
      enableContentSecurityPolicy: true,
      enableHSTS: true,
      enableReferrerPolicy: true,
      enableFeaturePolicy: true,
      enablePermissionsPolicy: true,
      ...config
    };

    this.metrics = {
      blockedRequests: 0,
      xssAttempts: 0,
      csrfAttempts: 0,
      suspiciousActivity: 0,
      securityViolations: 0,
      blockedDomains: 0,
      secureConnections: 0,
      insecureConnections: 0
    };

    this.initializeSuspiciousPatterns();
    this.initialize();
  }

  private initializeSuspiciousPatterns(): void {
    this.suspiciousPatterns = [
      // XSS patterns
      /<script[^>]*>.*?<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<iframe[^>]*>.*?<\/iframe>/gi,
      /<object[^>]*>.*?<\/object>/gi,
      /<embed[^>]*>.*?<\/embed>/gi,
      /<link[^>]*>.*?<\/link>/gi,
      /<meta[^>]*>.*?<\/meta>/gi,
      /<style[^>]*>.*?<\/style>/gi,
      /<link[^>]*>.*?<\/link>/gi,
      
      // SQL injection patterns
      /('|(\\')|(;)|(--)|(\/\*)|(\*\/)|(\+)|(\|)|(&)|(%)|(\$)|(@)|(!)|(\^)|(~)|(`)|(\[)|(\])|(\{)|(\})|(\()|(\))|(=)|(<)|(>)|(\?)|(:)|(;)|(,)|(\/)|(\\))/gi,
      
      // Path traversal patterns
      /\.\.\//gi,
      /\.\.\\/gi,
      /\.\.%2f/gi,
      /\.\.%5c/gi,
      
      // Command injection patterns
      /[;&|`$]/gi,
      /(exec|system|shell_exec|passthru|eval|assert|preg_replace|create_function)/gi,
      
      // CSRF patterns
      /<form[^>]*action[^>]*>/gi,
      /<input[^>]*type[^>]*hidden[^>]*>/gi
    ];
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;

    this.setupCSP();
    this.setupXSSProtection();
    this.setupCSRFProtection();
    this.setupClickjackingProtection();
    this.setupSecureHeaders();
    this.setupContentFiltering();
    this.setupNetworkMonitoring();
    this.setupEventLogging();
  }

  private setupCSP(): void {
    if (!this.config.enableCSP) return;

    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests"
    ].join('; ');

    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = csp;
    document.head.appendChild(meta);
  }

  private setupXSSProtection(): void {
    if (!this.config.enableXSSProtection) return;

    // Add XSS protection header
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-XSS-Protection';
    meta.content = '1; mode=block';
    document.head.appendChild(meta);

    // Monitor for XSS attempts
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              this.scanForXSS(element);
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  private scanForXSS(element: Element): void {
    const html = element.outerHTML;
    
    this.suspiciousPatterns.forEach((pattern) => {
      if (pattern.test(html)) {
        this.logSecurityEvent({
          type: 'xss',
          severity: 'high',
          message: `XSS attempt detected: ${pattern.source}`,
          timestamp: Date.now(),
          source: element.tagName.toLowerCase(),
          userAgent: navigator.userAgent,
          blocked: true
        });
        
        this.metrics.xssAttempts++;
        this.metrics.securityViolations++;
        
        // Remove suspicious content
        element.remove();
      }
    });
  }

  private setupCSRFProtection(): void {
    if (!this.config.enableCSRFProtection) return;

    // Generate CSRF token
    const csrfToken = this.generateCSRFToken();
    localStorage.setItem('csrf_token', csrfToken);

    // Add CSRF token to all forms
    const forms = document.querySelectorAll('form');
    forms.forEach((form) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'csrf_token';
      input.value = csrfToken;
      form.appendChild(input);
    });

    // Monitor form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      const token = form.querySelector('input[name="csrf_token"]')?.getAttribute('value');
      
      if (token !== csrfToken) {
        event.preventDefault();
        this.logSecurityEvent({
          type: 'csrf',
          severity: 'high',
          message: 'CSRF token mismatch detected',
          timestamp: Date.now(),
          source: 'form_submission',
          userAgent: navigator.userAgent,
          blocked: true
        });
        
        this.metrics.csrfAttempts++;
        this.metrics.securityViolations++;
      }
    });
  }

  private generateCSRFToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  private setupClickjackingProtection(): void {
    if (!this.config.enableClickjackingProtection) return;

    // Add X-Frame-Options header
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-Frame-Options';
    meta.content = 'DENY';
    document.head.appendChild(meta);

    // Check if page is being framed
    if (window.top !== window.self) {
      this.logSecurityEvent({
        type: 'clickjacking',
        severity: 'medium',
        message: 'Clickjacking attempt detected',
        timestamp: Date.now(),
        source: 'frame_detection',
        userAgent: navigator.userAgent,
        blocked: true
      });
      
      this.metrics.securityViolations++;
      
      // Redirect to prevent clickjacking
      window.top.location = window.location;
    }
  }

  private setupSecureHeaders(): void {
    if (!this.config.enableSecureHeaders) return;

    const headers = [
      { name: 'X-Content-Type-Options', value: 'nosniff' },
      { name: 'X-Download-Options', value: 'noopen' },
      { name: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
      { name: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }
    ];

    headers.forEach(({ name, value }) => {
      const meta = document.createElement('meta');
      meta.httpEquiv = name;
      meta.content = value;
      document.head.appendChild(meta);
    });
  }

  private setupContentFiltering(): void {
    // Block suspicious domains
    this.blockedDomains.add('malicious-site.com');
    this.blockedDomains.add('phishing-site.com');
    this.blockedDomains.add('malware-site.com');

    // Monitor network requests
    const originalFetch = window.fetch;
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = typeof input === 'string' ? input : input.toString();
      
      if (this.isBlockedDomain(url)) {
        this.logSecurityEvent({
          type: 'suspicious_activity',
          severity: 'medium',
          message: `Blocked request to suspicious domain: ${url}`,
          timestamp: Date.now(),
          source: 'network_request',
          userAgent: navigator.userAgent,
          blocked: true
        });
        
        this.metrics.blockedRequests++;
        this.metrics.blockedDomains++;
        
        throw new Error('Request blocked by security policy');
      }
      
      return originalFetch(input, init);
    };
  }

  private isBlockedDomain(url: string): boolean {
    try {
      const domain = new URL(url).hostname;
      return this.blockedDomains.has(domain);
    } catch {
      return false;
    }
  }

  private setupNetworkMonitoring(): void {
    // Monitor for secure/insecure connections
    if (location.protocol === 'https:') {
      this.metrics.secureConnections++;
    } else {
      this.metrics.insecureConnections++;
      
      this.logSecurityEvent({
        type: 'insecure_content',
        severity: 'medium',
        message: 'Insecure connection detected',
        timestamp: Date.now(),
        source: 'protocol_check',
        userAgent: navigator.userAgent,
        blocked: false
      });
    }
  }

  private setupEventLogging(): void {
    // Log security events to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Security Enhancer initialized');
    }
  }

  private logSecurityEvent(event: SecurityEvent): void {
    this.securityEvents.push(event);
    
    // Keep only last 1000 events
    if (this.securityEvents.length > 1000) {
      this.securityEvents = this.securityEvents.slice(-1000);
    }
    
    // Send to security monitoring service
    if (typeof (window as Window & { gtag?: (command: string, event: string, data: Record<string, unknown>) => void }).gtag === 'function') {
      (window as Window & { gtag: (command: string, event: string, data: Record<string, unknown>) => void }).gtag('event', 'security_violation', {
        event_category: 'security',
        event_label: event.type,
        value: event.severity === 'critical' ? 4 : event.severity === 'high' ? 3 : event.severity === 'medium' ? 2 : 1
      });
    }
  }

  public getMetrics(): SecurityMetrics {
    return { ...this.metrics };
  }

  public getSecurityEvents(): SecurityEvent[] {
    return [...this.securityEvents];
  }

  public addBlockedDomain(domain: string): void {
    this.blockedDomains.add(domain);
  }

  public removeBlockedDomain(domain: string): void {
    this.blockedDomains.delete(domain);
  }

  public generateSecurityReport(): string {
    const metrics = this.getMetrics();
    const events = this.getSecurityEvents();
    
    const criticalEvents = events.filter(e => e.severity === 'critical').length;
    const highEvents = events.filter(e => e.severity === 'high').length;
    const mediumEvents = events.filter(e => e.severity === 'medium').length;
    const lowEvents = events.filter(e => e.severity === 'low').length;
    
    return `
Security Report:
- Blocked Requests: ${metrics.blockedRequests}
- XSS Attempts: ${metrics.xssAttempts}
- CSRF Attempts: ${metrics.csrfAttempts}
- Suspicious Activity: ${metrics.suspiciousActivity}
- Security Violations: ${metrics.securityViolations}
- Blocked Domains: ${metrics.blockedDomains}
- Secure Connections: ${metrics.secureConnections}
- Insecure Connections: ${metrics.insecureConnections}

Security Events:
- Critical: ${criticalEvents}
- High: ${highEvents}
- Medium: ${mediumEvents}
- Low: ${lowEvents}
- Total: ${events.length}
    `.trim();
  }

  public cleanup(): void {
    // Clean up any event listeners or observers
    this.securityEvents = [];
  }
}

// Export singleton instance
export const securityEnhancer = new SecurityEnhancer();

// Export class for custom instances
export { SecurityEnhancer };
export type { SecurityConfig, SecurityMetrics, SecurityEvent };