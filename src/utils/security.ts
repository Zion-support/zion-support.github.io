// Enhanced security utilities
export class SecurityManager {
  private static instance: SecurityManager;
  private cspViolations: Array<{
    timestamp: number;
    violation: string;
    source: string;
    blockedURI: string;
  }> = [];
  private suspiciousActivities: Array<{
    timestamp: number;
    type: string;
    details: Record<string, unknown>;
  }> = [];

  public static getInstance(): SecurityManager {
    if (!SecurityManager.instance) {
      SecurityManager.instance = new SecurityManager();
    }
    return SecurityManager.instance;
  }

  public initialize(): void {
    this.setupCSPViolationReporting();
    this.setupXSSProtection();
    this.setupClickjackingProtection();
    this.monitorSuspiciousActivity();
  }

  private setupCSPViolationReporting(): void {
    // Report CSP violations
    document.addEventListener('securitypolicyviolation', (event) => {
      this.cspViolations.push({
        timestamp: Date.now(),
        violation: event.violatedDirective,
        source: event.sourceFile || 'unknown',
        blockedURI: event.blockedURI || 'unknown'
      });

      // Log in development
      if (process.env.NODE_ENV === 'development') {
        console.warn('CSP Violation:', {
          violatedDirective: event.violatedDirective,
          source: event.sourceFile,
          blockedURI: event.blockedURI
        });
      }

      // Report to analytics in production
      if (process.env.NODE_ENV === 'production') {
        this.reportSecurityEvent('csp_violation', {
          violatedDirective: event.violatedDirective,
          source: event.sourceFile,
          blockedURI: event.blockedURI
        });
      }
    });
  }

  private setupXSSProtection(): void {
    // Monitor for potential XSS attempts
    const originalCreateElement = document.createElement;
    document.createElement = function(tagName: string) {
      const element = originalCreateElement.call(this, tagName);
      
      // Check for suspicious attributes
      const suspiciousPatterns = [
        /javascript:/i,
        /data:text\/html/i,
        /vbscript:/i,
        /on\w+\s*=/i
      ];

      // Monitor attribute changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes') {
            const attrValue = element.getAttribute(mutation.attributeName!);
            if (attrValue && suspiciousPatterns.some(pattern => pattern.test(attrValue))) {
              console.warn('Potential XSS attempt detected:', {
                tagName: element.tagName,
                attribute: mutation.attributeName,
                value: attrValue
              });
            }
          }
        });
      });

      observer.observe(element, { attributes: true });
      
      return element;
    };
  }

  private setupClickjackingProtection(): void {
    // Prevent clickjacking by checking if the page is in a frame
    if (window.top !== window.self) {
      // Page is in a frame - check if it's allowed
      const allowedFraming = window.location.hostname === 'ziontechgroup.com' || 
                            window.location.hostname === 'app.ziontechgroup.com';
      
      if (!allowedFraming) {
        // Redirect to prevent clickjacking
        if (window.top) {
          window.top.location.href = window.location.href;
        }
      }
    }
  }

  private monitorSuspiciousActivity(): void {
    // Monitor for suspicious user behavior
    let rapidClicks = 0;
    let lastClickTime = 0;

    document.addEventListener('click', (event) => {
      const now = Date.now();
      
      // Detect rapid clicking (potential bot behavior)
      if (now - lastClickTime < 100) {
        rapidClicks++;
        if (rapidClicks > 10) {
          this.suspiciousActivities.push({
            timestamp: now,
            type: 'rapid_clicking',
            details: { count: rapidClicks, target: event.target }
          });
        }
      } else {
        rapidClicks = 0;
      }
      
      lastClickTime = now;
    });

    // Monitor for suspicious navigation patterns
    let navigationCount = 0;
    const navigationStart = Date.now();

    window.addEventListener('beforeunload', () => {
      const timeOnPage = Date.now() - navigationStart;
      if (timeOnPage < 1000 && navigationCount > 5) {
        this.suspiciousActivities.push({
          timestamp: Date.now(),
          type: 'rapid_navigation',
          details: { count: navigationCount, timeOnPage }
        });
      }
    });
  }

  public sanitizeInput(input: string): string {
    // Basic input sanitization
    return input
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: protocols
      .replace(/on\w+\s*=/gi, '') // Remove event handlers
      .trim();
  }

  public validateInput(input: string, type: 'email' | 'url' | 'text'): boolean {
    switch (type) {
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
      case 'url':
        try {
          new URL(input);
          return true;
        } catch {
          return false;
        }
      case 'text':
        return input.length > 0 && input.length < 1000;
      default:
        return false;
    }
  }

  public generateCSRFToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  public verifyCSRFToken(token: string, sessionToken: string): boolean {
    return token === sessionToken;
  }

  public hashPassword(password: string): Promise<string> {
    // This would typically use a proper hashing library like bcrypt
    // For demonstration, we'll use a simple hash
    const encoder = new TextEncoder();
    const data = encoder.encode(password + 'salt');
    return crypto.subtle.digest('SHA-256', data).then(hash => {
      return Array.from(new Uint8Array(hash))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
    });
  }

  public rateLimitCheck(identifier: string, maxRequests: number, windowMs: number): boolean {
    const now = Date.now();
    const key = `rate_limit_${identifier}`;
    
    let requests = JSON.parse(localStorage.getItem(key) || '[]') as number[];
    requests = requests.filter(time => now - time < windowMs);
    
    if (requests.length >= maxRequests) {
      return false;
    }
    
    requests.push(now);
    localStorage.setItem(key, JSON.stringify(requests));
    return true;
  }

  private reportSecurityEvent(type: string, details: Record<string, unknown>): void {
    // In production, this would send data to a security monitoring service
    if (typeof gtag !== 'undefined') {
      gtag('event', 'security_event', {
        event_category: 'Security',
        event_label: type,
        custom_map: details
      });
    }
  }

  public getSecurityReport(): {
    cspViolations: number;
    suspiciousActivities: number;
    recentViolations: Array<{ timestamp: number; type: string; details: Record<string, unknown> }>;
  } {
    const now = Date.now();
    const last24Hours = 24 * 60 * 60 * 1000;
    
    const recentViolations = this.cspViolations.filter(v => now - v.timestamp < last24Hours);
    const recentActivities = this.suspiciousActivities.filter(a => now - a.timestamp < last24Hours);
    
    return {
      cspViolations: recentViolations.length,
      suspiciousActivities: recentActivities.length,
      recentViolations: recentViolations.slice(-10) // Last 10 violations
    };
  }

  public cleanup(): void {
    this.cspViolations = [];
    this.suspiciousActivities = [];
  }
}

// Content Security Policy configuration
export const generateCSPHeader = (): string => {
  return [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: https:",
    "connect-src 'self' https://www.google-analytics.com",
    "frame-ancestors 'self'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    "media-src 'self'",
    "worker-src 'self'"
  ].join('; ');
};

// Security headers configuration
export const securityHeaders = {
  'Content-Security-Policy': generateCSPHeader(),
  'X-Frame-Options': 'SAMEORIGIN',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=(), camera=()'
};

export const securityManager = SecurityManager.getInstance();