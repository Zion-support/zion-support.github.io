/**
 * Security Enhancements
 * Comprehensive security utilities and monitoring
 */

export interface SecurityConfig {
  csp: {
    enabled: boolean;
    policies: string[];
  };
  headers: {
    enabled: boolean;
    values: Record<string, string>;
  };
  monitoring: {
    enabled: boolean;
    logLevel: 'info' | 'warning' | 'error';
  };
  validation: {
    enabled: boolean;
    strictMode: boolean;
  };
}

export interface SecurityEvent {
  id: string;
  type: 'xss' | 'injection' | 'csrf' | 'clickjacking' | 'data-leak' | 'suspicious';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  details: Record<string, any>;
  timestamp: Date;
  blocked: boolean;
  userAgent: string;
  url: string;
}

export interface SecurityMetrics {
  eventsBlocked: number;
  eventsDetected: number;
  xssAttempts: number;
  injectionAttempts: number;
  suspiciousActivity: number;
  lastEvent?: SecurityEvent;
}

class SecurityEnhancements {
  private config: SecurityConfig;
  private events: SecurityEvent[] = [];
  private metrics: SecurityMetrics = {
    eventsBlocked: 0,
    eventsDetected: 0,
    xssAttempts: 0,
    injectionAttempts: 0,
    suspiciousActivity: 0,
  };
  private isActive = false;

  constructor() {
    this.config = {
      csp: {
        enabled: true,
        policies: [
          "default-src 'self'",
          "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
          "style-src 'self' 'unsafe-inline'",
          "img-src 'self' data: https:",
          "font-src 'self' data:",
          "connect-src 'self' https:",
          "frame-ancestors 'none'",
          "base-uri 'self'",
          "form-action 'self'",
        ],
      },
      headers: {
        enabled: true,
        values: {
          'X-Frame-Options': 'DENY',
          'X-Content-Type-Options': 'nosniff',
          'X-XSS-Protection': '1; mode=block',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
          'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
        },
      },
      monitoring: {
        enabled: true,
        logLevel: 'warning',
      },
      validation: {
        enabled: true,
        strictMode: false,
      },
    };

    this.initialize();
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;

    this.setupContentSecurityPolicy();
    this.setupSecurityHeaders();
    this.setupXSSProtection();
    this.setupInjectionProtection();
    this.setupClickjackingProtection();
    this.setupDataLeakProtection();
    this.setupSuspiciousActivityDetection();
    this.startMonitoring();
  }

  private setupContentSecurityPolicy(): void {
    if (!this.config.csp.enabled) return;

    try {
      // Apply CSP via meta tag if not already set by server
      const existingCSP = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
      if (!existingCSP) {
        const meta = document.createElement('meta');
        meta.httpEquiv = 'Content-Security-Policy';
        meta.content = this.config.csp.policies.join('; ');
        document.head.appendChild(meta);
      }

      // Monitor CSP violations
      document.addEventListener('securitypolicyviolation', (event) => {
        this.handleSecurityEvent({
          type: 'xss',
          severity: 'high',
          message: 'CSP violation detected',
          details: {
            violatedDirective: event.violatedDirective,
            blockedURI: event.blockedURI,
            sourceFile: event.sourceFile,
            lineNumber: event.lineNumber,
          },
          blocked: true,
          userAgent: navigator.userAgent,
          url: window.location.href,
        });
      });
    } catch (error) {
      console.warn('CSP setup failed:', error);
    }
  }

  private setupSecurityHeaders(): void {
    if (!this.config.headers.enabled) return;

    // Note: Most security headers are set by the server
    // This is for client-side validation and monitoring
    this.validateSecurityHeaders();
  }

  private validateSecurityHeaders(): void {
    // Check if we're in a frame (clickjacking protection)
    if (window.top !== window.self) {
      this.handleSecurityEvent({
        type: 'clickjacking',
        severity: 'critical',
        message: 'Page loaded in frame - potential clickjacking',
        details: {
          inFrame: true,
          frameDepth: this.getFrameDepth(),
        },
        blocked: false,
        userAgent: navigator.userAgent,
        url: window.location.href,
      });
    }
  }

  private getFrameDepth(): number {
    let depth = 0;
    let current = window.parent;
    while (current !== window.top && depth < 10) {
      depth++;
      current = current.parent;
    }
    return depth;
  }

  private setupXSSProtection(): void {
    // Monitor for potential XSS attempts
    const originalInnerHTMLDescriptor = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
    const originalOuterHTMLDescriptor = Object.getOwnPropertyDescriptor(Element.prototype, 'outerHTML');
    const originalInsertAdjacentHTML = Element.prototype.insertAdjacentHTML;

    // Override innerHTML setter
    Object.defineProperty(Element.prototype, 'innerHTML', {
      set: function(value: string) {
        if (this.detectXSSAttempt && this.detectXSSAttempt(value)) {
          console.warn('Potential XSS attempt detected in innerHTML');
          return;
        }
        if (originalInnerHTMLDescriptor && originalInnerHTMLDescriptor.set) {
          originalInnerHTMLDescriptor.set.call(this, value);
        }
      },
      get: function() {
        if (originalInnerHTMLDescriptor && originalInnerHTMLDescriptor.get) {
          return originalInnerHTMLDescriptor.get.call(this);
        }
        return '';
      },
    });

    // Monitor dangerous patterns
    const dangerousPatterns = [
      /<script[^>]*>.*?<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<iframe[^>]*>.*?<\/iframe>/gi,
      /<object[^>]*>.*?<\/object>/gi,
      /<embed[^>]*>/gi,
    ];

    // Add global XSS detection
    this.monitorGlobalXSS(dangerousPatterns);
  }

  private detectXSSAttempt(value: string): boolean {
    const xssPatterns = [
      /<script[^>]*>.*?<\/script>/gi,
      /javascript:/gi,
      /on\w+\s*=/gi,
      /<iframe[^>]*>.*?<\/iframe>/gi,
    ];

    return xssPatterns.some(pattern => pattern.test(value));
  }

  private monitorGlobalXSS(patterns: RegExp[]): void {
    // Monitor console for XSS attempts
    const originalLog = console.log;
    console.log = (...args) => {
      const message = args.join(' ');
      if (patterns.some(pattern => pattern.test(message))) {
        this.handleSecurityEvent({
          type: 'xss',
          severity: 'medium',
          message: 'Potential XSS attempt in console',
          details: { message, patterns: patterns.map(p => p.toString()) },
          blocked: false,
          userAgent: navigator.userAgent,
          url: window.location.href,
        });
      }
      originalLog.apply(console, args);
    };
  }

  private setupInjectionProtection(): void {
    // Monitor for SQL injection patterns (in client-side contexts)
    const injectionPatterns = [
      /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER)\b)/gi,
      /('|(\\')|(;)|(--)|(\/\*)|(\*\/))/g,
      /<script[^>]*>.*?<\/script>/gi,
      /<iframe[^>]*>.*?<\/iframe>/gi,
    ];

    // Monitor form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      
      for (const [key, value] of formData.entries()) {
        if (typeof value === 'string' && this.detectInjection(value, injectionPatterns)) {
          event.preventDefault();
          this.handleSecurityEvent({
            type: 'injection',
            severity: 'high',
            message: 'Injection attempt detected in form submission',
            details: { field: key, value: value.substring(0, 100) },
            blocked: true,
            userAgent: navigator.userAgent,
            url: window.location.href,
          });
          return;
        }
      }
    });
  }

  private detectInjection(value: string, patterns: RegExp[]): boolean {
    return patterns.some(pattern => pattern.test(value));
  }

  private setupClickjackingProtection(): void {
    // Monitor for clickjacking attempts
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const rect = target.getBoundingClientRect();
      const viewport = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      // Check for invisible overlays
      if (rect.width === 0 || rect.height === 0) {
        this.handleSecurityEvent({
          type: 'clickjacking',
          severity: 'medium',
          message: 'Click on invisible element detected',
          details: {
            element: target.tagName,
            rect: rect,
            viewport: viewport,
          },
          blocked: false,
          userAgent: navigator.userAgent,
          url: window.location.href,
        });
      }
    });

    // Monitor for suspicious mouse movements
    let lastMouseMove = Date.now();
    document.addEventListener('mousemove', () => {
      const now = Date.now();
      if (now - lastMouseMove < 1) {
        this.handleSecurityEvent({
          type: 'suspicious',
          severity: 'low',
          message: 'Unusual mouse movement pattern detected',
          details: { timeDiff: now - lastMouseMove },
          blocked: false,
          userAgent: navigator.userAgent,
          url: window.location.href,
        });
      }
      lastMouseMove = now;
    });
  }

  private setupDataLeakProtection(): void {
    // Monitor for sensitive data in console logs
    const sensitivePatterns = [
      /password/gi,
      /token/gi,
      /key/gi,
      /secret/gi,
      /private/gi,
      /\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/, // Credit card
      /\b\d{3}-\d{2}-\d{4}\b/, // SSN
    ];

    const originalConsoleLog = console.log;
    console.log = (...args) => {
      const message = args.join(' ');
      if (sensitivePatterns.some(pattern => pattern.test(message))) {
        this.handleSecurityEvent({
          type: 'data-leak',
          severity: 'high',
          message: 'Potential sensitive data in console log',
          details: { message: message.substring(0, 100) },
          blocked: false,
          userAgent: navigator.userAgent,
          url: window.location.href,
        });
      }
      originalConsoleLog.apply(console, args);
    };

    // Monitor for data extraction attempts
    this.monitorDataExtraction();
  }

  private monitorDataExtraction(): void {
    // Monitor for suspicious DOM access patterns
    const originalQuerySelector = Document.prototype.querySelector;
    const originalQuerySelectorAll = Document.prototype.querySelectorAll;

    let queryCount = 0;
    const queryThreshold = 100;

    Document.prototype.querySelector = function(selector: string) {
      queryCount++;
      if (queryCount > queryThreshold) {
        console.warn('Excessive DOM queries detected:', { queryCount, selector });
      }
      return originalQuerySelector.call(this, selector);
    };
  }

  private setupSuspiciousActivityDetection(): void {
    // Monitor for rapid-fire events
    const eventCounts = new Map<string, number>();
    const eventThreshold = 50; // events per second

    const trackEvent = (eventType: string) => {
      const now = Date.now();
      const key = `${eventType}_${Math.floor(now / 1000)}`;
      const count = (eventCounts.get(key) || 0) + 1;
      eventCounts.set(key, count);

      if (count > eventThreshold) {
        this.handleSecurityEvent({
          type: 'suspicious',
          severity: 'medium',
          message: `Excessive ${eventType} events detected`,
          details: { count, threshold: eventThreshold },
          blocked: false,
          userAgent: navigator.userAgent,
          url: window.location.href,
        });
      }

      // Clean up old entries
      setTimeout(() => {
        eventCounts.delete(key);
      }, 2000);
    };

    ['click', 'keydown', 'mousemove', 'scroll'].forEach(eventType => {
      document.addEventListener(eventType, () => trackEvent(eventType), { passive: true });
    });
  }

  private handleSecurityEvent(eventData: Omit<SecurityEvent, 'id' | 'timestamp'>): void {
    const event: SecurityEvent = {
      ...eventData,
      id: `security_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date(),
    };

    this.events.push(event);
    this.updateMetrics(event);

    // Emit custom event
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('security-event', { detail: event }));
    }

    // Log based on severity
    if (this.config.monitoring.enabled) {
      const logLevel = this.config.monitoring.logLevel;
      if (event.severity === 'critical' || (event.severity === 'high' && logLevel !== 'error')) {
        console.error('🚨 Security Event:', event);
      } else if (event.severity === 'medium' && logLevel === 'info') {
        console.warn('⚠️ Security Event:', event);
      }
    }

    // Keep only recent events
    if (this.events.length > 100) {
      this.events = this.events.slice(-100);
    }
  }

  private updateMetrics(event: SecurityEvent): void {
    this.metrics.eventsDetected++;
    if (event.blocked) {
      this.metrics.eventsBlocked++;
    }

    switch (event.type) {
      case 'xss':
        this.metrics.xssAttempts++;
        break;
      case 'injection':
        this.metrics.injectionAttempts++;
        break;
      case 'suspicious':
        this.metrics.suspiciousActivity++;
        break;
    }

    this.metrics.lastEvent = event;
  }

  public startMonitoring(): void {
    this.isActive = true;
    console.log('🛡️ Security Enhancements activated');
  }

  public stopMonitoring(): void {
    this.isActive = false;
    console.log('🛡️ Security Enhancements deactivated');
  }

  public getMetrics(): SecurityMetrics {
    return { ...this.metrics };
  }

  public getEvents(): SecurityEvent[] {
    return [...this.events];
  }

  public getConfig(): SecurityConfig {
    return { ...this.config };
  }

  public updateConfig(updates: Partial<SecurityConfig>): void {
    this.config = { ...this.config, ...updates };
  }

  public generateSecurityReport(): string {
    const metrics = this.getMetrics();
    const recentEvents = this.events.slice(-10);

    return `
# Security Report

## Metrics
- Events Detected: ${metrics.eventsDetected}
- Events Blocked: ${metrics.eventsBlocked}
- XSS Attempts: ${metrics.xssAttempts}
- Injection Attempts: ${metrics.injectionAttempts}
- Suspicious Activity: ${metrics.suspiciousActivity}

## Recent Events (${recentEvents.length})
${recentEvents.map(event => 
  `- ${event.severity.toUpperCase()} ${event.type}: ${event.message} ${event.blocked ? '(BLOCKED)' : ''}`
).join('\n')}

## Configuration
- CSP: ${this.config.csp.enabled ? 'Enabled' : 'Disabled'}
- Headers: ${this.config.headers.enabled ? 'Enabled' : 'Disabled'}
- Monitoring: ${this.config.monitoring.enabled ? 'Enabled' : 'Disabled'}
- Validation: ${this.config.validation.enabled ? 'Enabled' : 'Disabled'}
    `.trim();
  }

  public cleanup(): void {
    this.stopMonitoring();
    this.events = [];
    this.metrics = {
      eventsBlocked: 0,
      eventsDetected: 0,
      xssAttempts: 0,
      injectionAttempts: 0,
      suspiciousActivity: 0,
    };
  }
}

// Export singleton instance
export const securityEnhancements = new SecurityEnhancements();

// Export class and types
export { SecurityEnhancements };