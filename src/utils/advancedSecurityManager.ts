/**
 * Advanced Security Manager
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
    };
  }

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
      }
    });
  }

  /**
   * Check if attribute is suspicious
   */
  private isSuspiciousAttribute(name: string, value: string): boolean {
    const suspiciousPatterns = [
      /javascript:/i,
      /on\w+\s*=/i,
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
