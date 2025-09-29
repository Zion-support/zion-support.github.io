/**
 * Advanced Security Manager
<<<<<<< HEAD
 * Comprehensive security utilities and monitoring for the Zion Tech Group website
 */

interface SecurityConfig {
  enableCSP: boolean;
  enableHSTS: boolean;
  enableXSSProtection: boolean;
  enableClickjackingProtection: boolean;
  enableMIMESniffingProtection: boolean;
  enableReferrerPolicy: boolean;
  enableContentTypeOptions: boolean;
  enableFrameOptions: boolean;
  enableCORS: boolean;
  enableRateLimiting: boolean;
}

interface SecurityMetrics {
  cspViolations: number;
  xssAttempts: number;
  suspiciousRequests: number;
  blockedRequests: number;
  securityScore: number;
  lastSecurityCheck: Date;
}

interface SecurityHeaders {
  "Content-Security-Policy": string;
  "Strict-Transport-Security": string;
  "X-Content-Type-Options": string;
  "X-Frame-Options": string;
  "X-XSS-Protection": string;
  "Referrer-Policy": string;
  "Permissions-Policy": string;
  "Cross-Origin-Embedder-Policy": string;
  "Cross-Origin-Opener-Policy": string;
  "Cross-Origin-Resource-Policy": string;
}

class AdvancedSecurityManager {
  private config: SecurityConfig;
  private metrics: SecurityMetrics;
  private isInitialized = false;
  private securityObserver: MutationObserver | null = null;

  constructor(config: Partial<SecurityConfig> = {}) {
    this.config = {
      enableCSP: true,
      enableHSTS: true,
      enableXSSProtection: true,
      enableClickjackingProtection: true,
      enableMIMESniffingProtection: true,
      enableReferrerPolicy: true,
      enableContentTypeOptions: true,
      enableFrameOptions: true,
      enableCORS: true,
      enableRateLimiting: true,
      ...config,
    };

    this.metrics = {
      cspViolations: 0,
      xssAttempts: 0,
      suspiciousRequests: 0,
      blockedRequests: 0,
      securityScore: 0,
      lastSecurityCheck: new Date(),
=======
 * Comprehensive security monitoring and protection
 */

export interface SecurityEvent {
  id: string;
  type: 'xss' | 'csrf' | 'injection' | 'suspicious' | 'unauthorized' | 'malicious';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  source: string;
  timestamp: number;
  blocked: boolean;
  userAgent?: string;
  ip?: string;
}

export interface SecurityConfig {
  enableXSSProtection: boolean;
  enableCSRFProtection: boolean;
  enableContentSecurityPolicy: boolean;
  enableClickjackingProtection: boolean;
  enableHSTS: boolean;
  maxFailedAttempts: number;
  lockoutDuration: number;
}

export interface SecurityMetrics {
  totalEvents: number;
  blockedEvents: number;
  eventsByType: Record<string, number>;
  eventsBySeverity: Record<string, number>;
  threatLevel: 'low' | 'medium' | 'high' | 'critical';
}

class AdvancedSecurityManager {
  private events: SecurityEvent[] = [];
  private config: SecurityConfig;
  private metrics: SecurityMetrics;
  private failedAttempts: Map<string, number> = new Map();
  private blockedIPs: Set<string> = new Map();
  private isMonitoring: boolean = false;

  constructor(config?: Partial<SecurityConfig>) {
    this.config = {
      enableXSSProtection: true,
      enableCSRFProtection: true,
      enableContentSecurityPolicy: true,
      enableClickjackingProtection: true,
      enableHSTS: true,
      maxFailedAttempts: 5,
      lockoutDuration: 15 * 60 * 1000, // 15 minutes
      ...config
>>>>>>> 560fc59d9c785b60bacd032c96f8fbb6b417bd56
    };

    this.metrics = {
      totalEvents: 0,
      blockedEvents: 0,
      eventsByType: {},
      eventsBySeverity: {},
      threatLevel: 'low'
    };

    this.initializeSecurity();
  }

<<<<<<< HEAD
  /**
   * Initialize the security manager
   */
  public async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Initialize security headers
      this.initializeSecurityHeaders();

      // Initialize content security policy
      if (this.config.enableCSP) {
        this.initializeCSP();
      }

      // Initialize XSS protection
      if (this.config.enableXSSProtection) {
        this.initializeXSSProtection();
      }

      // Initialize clickjacking protection
      if (this.config.enableClickjackingProtection) {
        this.initializeClickjackingProtection();
      }

      // Initialize MIME sniffing protection
      if (this.config.enableMIMESniffingProtection) {
        this.initializeMIMESniffingProtection();
      }

      // Initialize referrer policy
      if (this.config.enableReferrerPolicy) {
        this.initializeReferrerPolicy();
      }

      // Initialize security monitoring
      this.initializeSecurityMonitoring();

      // Initialize rate limiting
      if (this.config.enableRateLimiting) {
        this.initializeRateLimiting();
      }

      this.isInitialized = true;
      console.log("🔒 Advanced Security Manager initialized");
    } catch (error) {
      console.error("Error initializing security manager:", error);
    }
  }

  /**
   * Initialize security headers
   */
  private initializeSecurityHeaders(): void {
    if (typeof document === "undefined") return;

    const headers: SecurityHeaders = {
      "Content-Security-Policy": this.generateCSP(),
      "Strict-Transport-Security":
        "max-age=31536000; includeSubDomains; preload",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
      "X-XSS-Protection": "1; mode=block",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy":
        "camera=(), microphone=(), geolocation=(), payment=()",
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Resource-Policy": "same-origin",
    };

    // Store headers for reference (in production, these would be set by the server)
    (window as any).securityHeaders = headers;
  }

  /**
   * Generate Content Security Policy
   */
  private generateCSP(): string {
    const directives = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://unpkg.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://api.zion.app https://analytics.google.com",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ];

    return directives.join("; ");
  }

  /**
   * Initialize Content Security Policy
   */
  private initializeCSP(): void {
    if (typeof document === "undefined") return;

    // Add CSP meta tag
    const cspMeta = document.createElement("meta");
    cspMeta.setAttribute("http-equiv", "Content-Security-Policy");
    cspMeta.setAttribute("content", this.generateCSP());
    document.head.appendChild(cspMeta);

    // Monitor CSP violations
    document.addEventListener("securitypolicyviolation", (event) => {
      this.metrics.cspViolations++;
      console.warn("CSP Violation:", event);
      this.updateSecurityScore();
    });
  }

  /**
   * Initialize XSS protection
   */
  private initializeXSSProtection(): void {
    if (typeof document === "undefined") return;

    // Monitor for potential XSS attempts
    const originalCreateElement = document.createElement;
    document.createElement = (tagName: string) => {
      const element = originalCreateElement.call(document, tagName);

      // Check for suspicious attributes
      if (element.setAttribute) {
        const originalSetAttribute = element.setAttribute;
        element.setAttribute = (name: string, value: string) => {
          if (this.isSuspiciousAttribute(name, value)) {
            this.metrics.xssAttempts++;
            console.warn("Potential XSS attempt detected:", { name, value });
            return;
          }
          return originalSetAttribute.call(element, name, value);
        };
      }

      return element;
    };

    // Monitor script execution
    const scripts = document.querySelectorAll("script");
    scripts.forEach((script) => {
      if (script.src && !this.isAllowedScript(script.src)) {
        this.metrics.xssAttempts++;
        console.warn("Suspicious script detected:", script.src);
=======
  private initializeSecurity(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.isMonitoring = true;
    this.setupXSSProtection();
    this.setupCSRFProtection();
    this.setupContentSecurityPolicy();
    this.setupClickjackingProtection();
    this.setupInputValidation();
    this.setupSuspiciousActivityDetection();
    this.setupSecurityHeaders();
  }

  private setupXSSProtection(): void {
    if (!this.config.enableXSSProtection) return;

    // Sanitize user input
    const originalCreateElement = document.createElement;
    document.createElement = function(tagName: string) {
      const element = originalCreateElement.call(this, tagName);
      
      // Override innerHTML setter to sanitize content
      const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML')?.set;
      if (originalInnerHTML) {
        Object.defineProperty(element, 'innerHTML', {
          set: function(value: string) {
            const sanitized = this.sanitizeHTML(value);
            originalInnerHTML.call(this, sanitized);
          },
          get: function() {
            return originalInnerHTML.call(this);
          }
        });
      }
      
      return element;
    }.bind(document);

    // Monitor for script injection attempts
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as Element;
            if (element.tagName === 'SCRIPT' && element.innerHTML.includes('<script')) {
              this.logSecurityEvent({
                type: 'xss',
                severity: 'high',
                description: 'Potential XSS attack detected',
                source: 'script-injection',
                blocked: true
              });
              element.remove();
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

  private setupCSRFProtection(): void {
    if (!this.config.enableCSRFProtection) return;

    // Generate CSRF token
    const csrfToken = this.generateCSRFToken();
    document.cookie = `csrf-token=${csrfToken}; SameSite=Strict; Secure`;

    // Intercept form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      if (form.method.toLowerCase() === 'post') {
        const tokenInput = form.querySelector('input[name="csrf-token"]') as HTMLInputElement;
        if (!tokenInput || tokenInput.value !== csrfToken) {
          event.preventDefault();
          this.logSecurityEvent({
            type: 'csrf',
            severity: 'high',
            description: 'CSRF attack detected',
            source: 'form-submission',
            blocked: true
          });
        }
      }
    });
  }

  private setupContentSecurityPolicy(): void {
    if (!this.config.enableContentSecurityPolicy) return;

    // Add CSP meta tag
    const cspMeta = document.createElement('meta');
    cspMeta.httpEquiv = 'Content-Security-Policy';
    cspMeta.content = `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval';
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https:;
      font-src 'self' https:;
      connect-src 'self' https:;
      frame-ancestors 'none';
      base-uri 'self';
      form-action 'self';
    `.replace(/\s+/g, ' ').trim();
    
    document.head.appendChild(cspMeta);
  }

  private setupClickjackingProtection(): void {
    if (!this.config.enableClickjackingProtection) return;

    // Add X-Frame-Options header via meta tag
    const frameOptionsMeta = document.createElement('meta');
    frameOptionsMeta.httpEquiv = 'X-Frame-Options';
    frameOptionsMeta.content = 'DENY';
    document.head.appendChild(frameOptionsMeta);

    // Detect if page is in iframe
    if (window !== window.top) {
      this.logSecurityEvent({
        type: 'clickjacking',
        severity: 'medium',
        description: 'Page loaded in iframe - potential clickjacking',
        source: 'iframe-detection',
        blocked: false
      });
    }
  }

  private setupInputValidation(): void {
    // Monitor input fields for suspicious patterns
    document.addEventListener('input', (event) => {
      const target = event.target as HTMLInputElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        this.validateInput(target.value, target.name || 'unknown');
      }
    });
  }

  private setupSuspiciousActivityDetection(): void {
    // Monitor for rapid clicks (potential bot activity)
    let clickCount = 0;
    let lastClickTime = 0;
    
    document.addEventListener('click', (event) => {
      const now = Date.now();
      
      if (now - lastClickTime < 100) { // Less than 100ms between clicks
        clickCount++;
        
        if (clickCount > 10) {
          this.logSecurityEvent({
            type: 'suspicious',
            severity: 'medium',
            description: 'Rapid clicking detected - potential bot activity',
            source: 'click-monitoring',
            blocked: false
          });
          clickCount = 0;
        }
      } else {
        clickCount = 0;
      }
      
      lastClickTime = now;
    });

    // Monitor for suspicious keyboard patterns
    let keySequence: string[] = [];
    document.addEventListener('keydown', (event) => {
      keySequence.push(event.key);
      
      if (keySequence.length > 20) {
        keySequence = keySequence.slice(-20);
      }
      
      // Detect common attack patterns
      const sequence = keySequence.join('');
      if (this.detectAttackPatterns(sequence)) {
        this.logSecurityEvent({
          type: 'malicious',
          severity: 'high',
          description: 'Suspicious keyboard pattern detected',
          source: 'keyboard-monitoring',
          blocked: true
        });
>>>>>>> 560fc59d9c785b60bacd032c96f8fbb6b417bd56
      }
    });
  }

<<<<<<< HEAD
  /**
   * Check if attribute is suspicious
   */
  private isSuspiciousAttribute(name: string, value: string): boolean {
=======
  private setupSecurityHeaders(): void {
    // Add security headers via meta tags
    const headers = [
      { name: 'X-Content-Type-Options', value: 'nosniff' },
      { name: 'X-XSS-Protection', value: '1; mode=block' },
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

  private sanitizeHTML(input: string): string {
    // Basic HTML sanitization
    return input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '');
  }

  private generateCSRFToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  private validateInput(input: string, fieldName: string): void {
>>>>>>> 560fc59d9c785b60bacd032c96f8fbb6b417bd56
    const suspiciousPatterns = [
      /javascript:/i,
      /on\w+\s*=/i,
<<<<<<< HEAD
      /<script/i,
      /eval\s*\(/i,
      /expression\s*\(/i,
    ];

    return suspiciousPatterns.some((pattern) => pattern.test(value));
  }

  /**
   * Check if script is allowed
   */
  private isAllowedScript(src: string): boolean {
    const allowedDomains = [
      "cdn.jsdelivr.net",
      "unpkg.com",
      "fonts.googleapis.com",
      "fonts.gstatic.com",
    ];

    try {
      const url = new URL(src);
      return (
        allowedDomains.includes(url.hostname) ||
        url.hostname === window.location.hostname
      );
    } catch {
      return false;
    }
  }

  /**
   * Initialize clickjacking protection
   */
  private initializeClickjackingProtection(): void {
    if (typeof window === "undefined") return;

    // Check if page is in a frame
    if (window !== window.top) {
      console.warn(
        "Page is loaded in a frame - potential clickjacking attempt",
      );
      this.metrics.suspiciousRequests++;
    }

    // Add frame busting script
    const frameBustingScript = document.createElement("script");
    frameBustingScript.textContent = `
      if (top !== self) {
        top.location = self.location;
      }
    `;
    document.head.appendChild(frameBustingScript);
  }

  /**
   * Initialize MIME sniffing protection
   */
  private initializeMIMESniffingProtection(): void {
    if (typeof document === "undefined") return;

    // Add meta tag for MIME sniffing protection
    const mimeMeta = document.createElement("meta");
    mimeMeta.setAttribute("http-equiv", "X-Content-Type-Options");
    mimeMeta.setAttribute("content", "nosniff");
    document.head.appendChild(mimeMeta);
  }

  /**
   * Initialize referrer policy
   */
  private initializeReferrerPolicy(): void {
    if (typeof document === "undefined") return;

    // Add referrer policy meta tag
    const referrerMeta = document.createElement("meta");
    referrerMeta.setAttribute("name", "referrer");
    referrerMeta.setAttribute("content", "strict-origin-when-cross-origin");
    document.head.appendChild(referrerMeta);
  }

  /**
   * Initialize security monitoring
   */
  private initializeSecurityMonitoring(): void {
    if (typeof document === "undefined") return;

    // Monitor DOM changes for security issues
    this.securityObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              this.analyzeElement(node as Element);
            }
          });
        }
      });
    });

    this.securityObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Monitor for suspicious network requests
    this.monitorNetworkRequests();

    // Monitor for suspicious user interactions
    this.monitorUserInteractions();
  }

  /**
   * Analyze element for security issues
   */
  private analyzeElement(element: Element): void {
    // Check for suspicious attributes
    Array.from(element.attributes).forEach((attr) => {
      if (this.isSuspiciousAttribute(attr.name, attr.value)) {
        this.metrics.xssAttempts++;
        console.warn("Suspicious attribute detected:", {
          name: attr.name,
          value: attr.value,
        });
      }
    });

    // Check for suspicious content
    if (element.textContent) {
      const suspiciousContent = this.detectSuspiciousContent(
        element.textContent,
      );
      if (suspiciousContent) {
        this.metrics.xssAttempts++;
        console.warn("Suspicious content detected:", suspiciousContent);
      }
    }
  }

  /**
   * Detect suspicious content
   */
  private detectSuspiciousContent(content: string): string | null {
    const suspiciousPatterns = [
      /<script[^>]*>.*?<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /eval\s*\(/gi,
      /expression\s*\(/gi,
    ];

    for (const pattern of suspiciousPatterns) {
      const match = content.match(pattern);
      if (match) {
        return match[0];
      }
    }

    return null;
  }

  /**
   * Monitor network requests
   */
  private monitorNetworkRequests(): void {
    if (typeof window === "undefined") return;

    // Override fetch to monitor requests
    const originalFetch = window.fetch;
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = typeof input === "string" ? input : input.toString();

      if (this.isSuspiciousRequest(url)) {
        this.metrics.suspiciousRequests++;
        console.warn("Suspicious request blocked:", url);
        throw new Error("Suspicious request blocked");
      }

      try {
        return await originalFetch(input, init);
      } catch (error) {
        this.metrics.blockedRequests++;
        throw error;
      }
    };
  }

  /**
   * Check if request is suspicious
   */
  private isSuspiciousRequest(url: string): boolean {
    const suspiciousPatterns = [
      /javascript:/i,
      /data:text\/html/i,
      /vbscript:/i,
      /file:/i,
    ];

    return suspiciousPatterns.some((pattern) => pattern.test(url));
  }

  /**
   * Monitor user interactions
   */
  private monitorUserInteractions(): void {
    if (typeof document === "undefined") return;

    // Monitor for rapid clicking (potential bot behavior)
    let clickCount = 0;
    let lastClickTime = 0;

    document.addEventListener("click", (event) => {
      const now = Date.now();
      if (now - lastClickTime < 100) {
        clickCount++;
        if (clickCount > 10) {
          this.metrics.suspiciousRequests++;
          console.warn("Rapid clicking detected - potential bot behavior");
        }
      } else {
        clickCount = 0;
      }
      lastClickTime = now;
    });

    // Monitor for suspicious keyboard patterns
    let keySequence = "";
    document.addEventListener("keydown", (event) => {
      keySequence += event.key;
      if (keySequence.length > 10) {
        keySequence = keySequence.slice(-10);
      }

      if (this.isSuspiciousKeySequence(keySequence)) {
        this.metrics.suspiciousRequests++;
        console.warn("Suspicious keyboard pattern detected:", keySequence);
      }
    });
  }

  /**
   * Check if key sequence is suspicious
   */
  private isSuspiciousKeySequence(sequence: string): boolean {
    const suspiciousPatterns = [
      /f12|ctrl\+shift\+i|ctrl\+u/i,
      /alt\+f4|ctrl\+w/i,
      /ctrl\+shift\+c|ctrl\+shift\+j/i,
    ];

    return suspiciousPatterns.some((pattern) => pattern.test(sequence));
  }

  /**
   * Initialize rate limiting
   */
  private initializeRateLimiting(): void {
    if (typeof window === "undefined") return;

    const rateLimits = new Map<string, { count: number; resetTime: number }>();
    const RATE_LIMIT_WINDOW = 60000; // 1 minute
    const MAX_REQUESTS = 100;

    // Monitor API calls
    const originalFetch = window.fetch;
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = typeof input === "string" ? input : input.toString();
      const now = Date.now();

      if (url.includes("/api/")) {
        const key = "api_requests";
        const limit = rateLimits.get(key);

        if (limit) {
          if (now < limit.resetTime) {
            if (limit.count >= MAX_REQUESTS) {
              this.metrics.blockedRequests++;
              throw new Error("Rate limit exceeded");
            }
            limit.count++;
          } else {
            rateLimits.set(key, {
              count: 1,
              resetTime: now + RATE_LIMIT_WINDOW,
            });
          }
        } else {
          rateLimits.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        }
      }

      return originalFetch(input, init);
    };
  }

  /**
   * Update security score
   */
  private updateSecurityScore(): void {
    let score = 100;

    // Deduct points for violations
    score -= this.metrics.cspViolations * 5;
    score -= this.metrics.xssAttempts * 10;
    score -= this.metrics.suspiciousRequests * 3;
    score -= this.metrics.blockedRequests * 2;

    this.metrics.securityScore = Math.max(0, score);
    this.metrics.lastSecurityCheck = new Date();
  }

  /**
   * Get security metrics
   */
  public getMetrics(): SecurityMetrics {
    this.updateSecurityScore();
    return { ...this.metrics };
  }

  /**
   * Generate security report
   */
  public generateReport(): string {
    const metrics = this.getMetrics();
    const report = `
Security Report:
Security Score: ${metrics.securityScore}/100
CSP Violations: ${metrics.cspViolations}
XSS Attempts: ${metrics.xssAttempts}
Suspicious Requests: ${metrics.suspiciousRequests}
Blocked Requests: ${metrics.blockedRequests}
Last Check: ${metrics.lastSecurityCheck.toISOString()}
    `;

    return report.trim();
  }

  /**
   * Cleanup resources
   */
  public cleanup(): void {
    if (this.securityObserver) {
      this.securityObserver.disconnect();
      this.securityObserver = null;
    }

    this.isInitialized = false;
  }
}

// Export singleton instance
export const advancedSecurityManager = new AdvancedSecurityManager();

// Export class for custom instances
export { AdvancedSecurityManager };
export type { SecurityConfig, SecurityMetrics, SecurityHeaders };
=======
      /eval\s*\(/i,
      /expression\s*\(/i,
      /url\s*\(/i,
      /@import/i,
      /union\s+select/i,
      /drop\s+table/i,
      /insert\s+into/i,
      /delete\s+from/i
    ];

    suspiciousPatterns.forEach(pattern => {
      if (pattern.test(input)) {
        this.logSecurityEvent({
          type: 'injection',
          severity: 'high',
          description: `Suspicious input detected in field: ${fieldName}`,
          source: 'input-validation',
          blocked: true
        });
      }
    });
  }

  private detectAttackPatterns(sequence: string): boolean {
    const attackPatterns = [
      'admin',
      'password',
      'login',
      'sql',
      'union',
      'select',
      'drop',
      'insert',
      'delete',
      'update',
      'script',
      'javascript',
      'eval',
      'alert',
      'document',
      'window'
    ];

    return attackPatterns.some(pattern => 
      sequence.toLowerCase().includes(pattern)
    );
  }

  private logSecurityEvent(event: Omit<SecurityEvent, 'id' | 'timestamp' | 'userAgent' | 'ip'>): void {
    const securityEvent: SecurityEvent = {
      ...event,
      id: `security_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      ip: 'unknown' // Would need server-side implementation
    };

    this.events.push(securityEvent);
    
    // Keep only last 1000 events
    if (this.events.length > 1000) {
      this.events = this.events.slice(-1000);
    }

    this.updateMetrics();
    
    // Block if necessary
    if (event.blocked) {
      this.handleBlockedEvent(securityEvent);
    }
  }

  private handleBlockedEvent(event: SecurityEvent): void {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.warn('Security event blocked:', event);
    }

    // Show user notification for critical events
    if (event.severity === 'critical') {
      this.showSecurityAlert(event);
    }

    // Track failed attempts
    const key = event.userAgent || 'unknown';
    const attempts = this.failedAttempts.get(key) || 0;
    this.failedAttempts.set(key, attempts + 1);

    // Block if max attempts exceeded
    if (attempts >= this.config.maxFailedAttempts) {
      this.blockedIPs.add(key);
      setTimeout(() => {
        this.blockedIPs.delete(key);
        this.failedAttempts.delete(key);
      }, this.config.lockoutDuration);
    }
  }

  private showSecurityAlert(event: SecurityEvent): void {
    const alert = document.createElement('div');
    alert.className = 'security-alert';
    alert.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #ff4444;
        color: white;
        padding: 15px;
        text-align: center;
        z-index: 10000;
        font-family: Arial, sans-serif;
      ">
        <strong>Security Alert:</strong> ${event.description}
        <button onclick="this.parentElement.parentElement.remove()" style="
          margin-left: 10px;
          background: white;
          color: #ff4444;
          border: none;
          padding: 5px 10px;
          border-radius: 3px;
          cursor: pointer;
        ">Dismiss</button>
      </div>
    `;
    
    document.body.appendChild(alert);
    
    setTimeout(() => {
      alert.remove();
    }, 10000);
  }

  private updateMetrics(): void {
    this.metrics.totalEvents = this.events.length;
    this.metrics.blockedEvents = this.events.filter(e => e.blocked).length;
    
    // Count by type
    this.metrics.eventsByType = {};
    this.events.forEach(event => {
      this.metrics.eventsByType[event.type] = (this.metrics.eventsByType[event.type] || 0) + 1;
    });

    // Count by severity
    this.metrics.eventsBySeverity = {};
    this.events.forEach(event => {
      this.metrics.eventsBySeverity[event.severity] = (this.metrics.eventsBySeverity[event.severity] || 0) + 1;
    });

    // Calculate threat level
    const criticalCount = this.metrics.eventsBySeverity.critical || 0;
    const highCount = this.metrics.eventsBySeverity.high || 0;
    
    if (criticalCount > 5) {
      this.metrics.threatLevel = 'critical';
    } else if (criticalCount > 0 || highCount > 10) {
      this.metrics.threatLevel = 'high';
    } else if (highCount > 0 || this.metrics.totalEvents > 50) {
      this.metrics.threatLevel = 'medium';
    } else {
      this.metrics.threatLevel = 'low';
    }
  }

  // Public API
  public getSecurityEvents(): SecurityEvent[] {
    return [...this.events];
  }

  public getSecurityMetrics(): SecurityMetrics {
    return { ...this.metrics };
  }

  public getRecentEvents(count: number = 10): SecurityEvent[] {
    return this.events.slice(-count).reverse();
  }

  public getEventsByType(type: SecurityEvent['type']): SecurityEvent[] {
    return this.events.filter(event => event.type === type);
  }

  public getEventsBySeverity(severity: SecurityEvent['severity']): SecurityEvent[] {
    return this.events.filter(event => event.severity === severity);
  }

  public isBlocked(identifier: string): boolean {
    return this.blockedIPs.has(identifier);
  }

  public updateConfig(newConfig: Partial<SecurityConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }

  public clearEvents(): void {
    this.events = [];
    this.updateMetrics();
  }

  public cleanup(): void {
    this.isMonitoring = false;
    this.events = [];
    this.failedAttempts.clear();
    this.blockedIPs.clear();
  }
}

export const advancedSecurityManager = new AdvancedSecurityManager();
>>>>>>> 560fc59d9c785b60bacd032c96f8fbb6b417bd56
