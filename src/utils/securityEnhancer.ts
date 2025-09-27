/**
 * Security Enhancer Utility
 * Provides comprehensive security features and monitoring
 */

export interface SecurityConfig {
  enableCSP: boolean;
  enableXSSProtection: boolean;
  enableCSRFProtection: boolean;
  enableClickjackingProtection: boolean;
  enableContentSecurityPolicy: boolean;
  enableSecureHeaders: boolean;
  enableInputSanitization: boolean;
  enableSecurityMonitoring: boolean;
}

export interface SecurityMetrics {
  xssAttempts: number;
  csrfAttempts: number;
  clickjackingAttempts: number;
  suspiciousActivity: number;
  blockedRequests: number;
  securityScore: number;
  lastSecurityEvent: Date | null;
}

export interface SecurityEvent {
  type: 'xss' | 'csrf' | 'clickjacking' | 'suspicious' | 'blocked';
  timestamp: Date;
  details: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  source: string;
}

class SecurityEnhancer {
  private static instance: SecurityEnhancer;
  private config: SecurityConfig;
  private metrics: SecurityMetrics;
  private events: SecurityEvent[] = [];
  private isInitialized = false;
  private observers: MutationObserver[] = [];

  constructor() {
    this.config = {
      enableCSP: true,
      enableXSSProtection: true,
      enableCSRFProtection: true,
      enableClickjackingProtection: true,
      enableContentSecurityPolicy: true,
      enableSecureHeaders: true,
      enableInputSanitization: true,
      enableSecurityMonitoring: true
    };

    this.metrics = {
      xssAttempts: 0,
      csrfAttempts: 0,
      clickjackingAttempts: 0,
      suspiciousActivity: 0,
      blockedRequests: 0,
      securityScore: 100,
      lastSecurityEvent: null
    };
  }

  public static getInstance(): SecurityEnhancer {
    if (!SecurityEnhancer.instance) {
      SecurityEnhancer.instance = new SecurityEnhancer();
    }
    return SecurityEnhancer.instance;
  }

  public initialize(config?: Partial<SecurityConfig>): void {
    if (this.isInitialized) return;

    this.config = { ...this.config, ...config };
    
    this.setupCSP();
    this.setupXSSProtection();
    this.setupCSRFProtection();
    this.setupClickjackingProtection();
    this.setupSecureHeaders();
    this.setupInputSanitization();
    this.setupSecurityMonitoring();
    
    this.isInitialized = true;
    console.log('Security Enhancer initialized');
  }

  private setupCSP(): void {
    if (!this.config.enableContentSecurityPolicy) return;

    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://www.google-analytics.com",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'"
    ].join('; ');

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
    this.monitorXSSAttempts();
  }

  private setupCSRFProtection(): void {
    if (!this.config.enableCSRFProtection) return;

    // Generate CSRF token
    const csrfToken = this.generateCSRFToken();
    sessionStorage.setItem('csrf-token', csrfToken);

    // Monitor for CSRF attempts
    this.monitorCSRFAttempts();
  }

  private setupClickjackingProtection(): void {
    if (!this.config.enableClickjackingProtection) return;

    // Add X-Frame-Options header
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-Frame-Options';
    meta.content = 'DENY';
    document.head.appendChild(meta);

    // Monitor for clickjacking attempts
    this.monitorClickjackingAttempts();
  }

  private setupSecureHeaders(): void {
    if (!this.config.enableSecureHeaders) return;

    const headers = [
      { httpEquiv: 'X-Content-Type-Options', content: 'nosniff' },
      { httpEquiv: 'X-Download-Options', content: 'noopen' },
      { httpEquiv: 'X-Permitted-Cross-Domain-Policies', content: 'none' },
      { httpEquiv: 'Referrer-Policy', content: 'strict-origin-when-cross-origin' },
      { httpEquiv: 'Permissions-Policy', content: 'camera=(), microphone=(), geolocation=()' }
    ];

    headers.forEach(header => {
      const meta = document.createElement('meta');
      meta.httpEquiv = header.httpEquiv;
      meta.content = header.content;
      document.head.appendChild(meta);
    });
  }

  private setupInputSanitization(): void {
    if (!this.config.enableInputSanitization) return;

    // Monitor all input elements
    this.observeInputElements();
  }

  private setupSecurityMonitoring(): void {
    if (!this.config.enableSecurityMonitoring) return;

    // Monitor for suspicious activity
    this.monitorSuspiciousActivity();
    
    // Monitor network requests
    this.monitorNetworkRequests();
    
    // Monitor DOM changes
    this.monitorDOMChanges();
  }

  private monitorXSSAttempts(): void {
    // Monitor for script injection attempts
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as HTMLElement;
            
            // Check for script tags
            if (element.tagName === 'SCRIPT') {
              this.recordSecurityEvent('xss', 'Script tag injection attempt', 'high', 'dom');
              this.metrics.xssAttempts++;
              element.remove();
            }
            
            // Check for inline event handlers
            if (element.hasAttribute('onclick') || element.hasAttribute('onload') || element.hasAttribute('onerror')) {
              this.recordSecurityEvent('xss', 'Inline event handler detected', 'medium', 'dom');
              this.metrics.xssAttempts++;
            }
            
            // Check for javascript: URLs
            const links = element.querySelectorAll('a[href^="javascript:"]');
            if (links.length > 0) {
              this.recordSecurityEvent('xss', 'JavaScript URL detected', 'medium', 'dom');
              this.metrics.xssAttempts++;
            }
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['onclick', 'onload', 'onerror', 'href']
    });

    this.observers.push(observer);
  }

  private monitorCSRFAttempts(): void {
    // Monitor form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      const csrfToken = sessionStorage.getItem('csrf-token');
      const formToken = form.querySelector('input[name="csrf-token"]')?.getAttribute('value');
      
      if (csrfToken && formToken !== csrfToken) {
        this.recordSecurityEvent('csrf', 'CSRF token mismatch', 'high', 'form');
        this.metrics.csrfAttempts++;
        event.preventDefault();
        return false;
      }
    });

    // Monitor AJAX requests
    const originalFetch = window.fetch;
    window.fetch = (input, init) => {
      const csrfToken = sessionStorage.getItem('csrf-token');
      
      if (init && (init.method === 'POST' || init.method === 'PUT' || init.method === 'DELETE')) {
        if (!init.headers) {
          init.headers = {};
        }
        
        if (csrfToken) {
          (init.headers as Record<string, string>)['X-CSRF-Token'] = csrfToken;
        }
      }
      
      return originalFetch(input, init);
    };
  }

  private monitorClickjackingAttempts(): void {
    // Check if page is in a frame
    if (window.top !== window.self) {
      this.recordSecurityEvent('clickjacking', 'Page loaded in frame', 'high', 'navigation');
      this.metrics.clickjackingAttempts++;
      
      // Redirect to top-level window
      if (window.top) {
        window.top.location.href = window.self.location.href;
      }
    }

    // Monitor for frame busting attempts
    window.addEventListener('beforeunload', () => {
      if (window.top !== window.self) {
        this.recordSecurityEvent('clickjacking', 'Frame busting attempt', 'medium', 'navigation');
      }
    });
  }

  private observeInputElements(): void {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as HTMLElement;
            const inputs = element.querySelectorAll('input, textarea, select');
            
            inputs.forEach(input => {
              this.sanitizeInput(input as HTMLInputElement);
            });
          }
        });
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    this.observers.push(observer);
  }

  private sanitizeInput(input: HTMLInputElement): void {
    // Add input validation
    input.addEventListener('input', (event) => {
      const value = (event.target as HTMLInputElement).value;
      
      // Check for script tags
      if (/<script/i.test(value)) {
        this.recordSecurityEvent('xss', 'Script tag in input', 'high', 'input');
        (event.target as HTMLInputElement).value = value.replace(/<script[^>]*>.*?<\/script>/gi, '');
      }
      
      // Check for dangerous characters
      if (/[<>'"]/.test(value) && input.type !== 'password') {
        this.recordSecurityEvent('xss', 'Potentially dangerous characters in input', 'medium', 'input');
      }
    });

    // Add form submission validation
    const form = input.closest('form');
    if (form) {
      form.addEventListener('submit', (event) => {
        const inputs = form.querySelectorAll('input, textarea, select');
        let hasViolation = false;
        
        inputs.forEach(input => {
          const value = (input as HTMLInputElement).value;
          if (/<script/i.test(value)) {
            hasViolation = true;
            this.recordSecurityEvent('xss', 'Script tag in form submission', 'high', 'form');
          }
        });
        
        if (hasViolation) {
          event.preventDefault();
          return false;
        }
      });
    }
  }

  private monitorSuspiciousActivity(): void {
    // Monitor for rapid clicks (potential bot activity)
    let clickCount = 0;
    let lastClickTime = 0;
    
    document.addEventListener('click', () => {
      const now = Date.now();
      
      if (now - lastClickTime < 100) {
        clickCount++;
        if (clickCount > 10) {
          this.recordSecurityEvent('suspicious', 'Rapid clicking detected', 'medium', 'user');
          this.metrics.suspiciousActivity++;
        }
      } else {
        clickCount = 0;
      }
      
      lastClickTime = now;
    });

    // Monitor for console access attempts (disabled to prevent infinite recursion)
    // const originalConsole = console;
    // Object.keys(console).forEach(key => {
    //   const originalMethod = (console as any)[key];
    //   (console as any)[key] = (...args: any[]) => {
    //     this.recordSecurityEvent('suspicious', `Console access: ${key}`, 'low', 'console');
    //     return originalMethod.apply(console, args);
    //   };
    // });
  }

  private monitorNetworkRequests(): void {
    // Monitor fetch requests
    const originalFetch = window.fetch;
    window.fetch = (input, init) => {
      const url = typeof input === 'string' ? input : (input as Request).url;
      
      // Check for suspicious URLs
      if (this.isSuspiciousURL(url)) {
        this.recordSecurityEvent('blocked', `Suspicious URL blocked: ${url}`, 'high', 'network');
        this.metrics.blockedRequests++;
        return Promise.reject(new Error('Suspicious URL blocked'));
      }
      
      return originalFetch(input, init);
    };

    // Monitor XMLHttpRequest
    const originalXHR = XMLHttpRequest.prototype.open;
    const self = this;
    (XMLHttpRequest.prototype.open as any) = function(this: XMLHttpRequest, method: string, url: string | URL, ...args: any[]) {
      if (typeof url === 'string' && self.isSuspiciousURL(url)) {
        self.recordSecurityEvent('blocked', `Suspicious XHR URL blocked: ${url}`, 'high', 'network');
        self.metrics.blockedRequests++;
        throw new Error('Suspicious URL blocked');
      }
      
      return (originalXHR as any).apply(this, [method, url, ...args]);
    };
  }

  private monitorDOMChanges(): void {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        // Check for suspicious DOM changes
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as HTMLElement;
              
              // Check for suspicious attributes
              if (element.hasAttribute('onclick') || element.hasAttribute('onload')) {
                this.recordSecurityEvent('xss', 'Suspicious attribute detected', 'medium', 'dom');
              }
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    });

    this.observers.push(observer);
  }

  private isSuspiciousURL(url: string): boolean {
    const suspiciousPatterns = [
      /javascript:/i,
      /data:text\/html/i,
      /vbscript:/i,
      /file:/i,
      /ftp:/i,
      /localhost/i,
      /127\.0\.0\.1/i,
      /0\.0\.0\.0/i
    ];

    return suspiciousPatterns.some(pattern => pattern.test(url));
  }

  private generateCSRFToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  private recordSecurityEvent(type: SecurityEvent['type'], details: string, severity: SecurityEvent['severity'], source: string): void {
    const event: SecurityEvent = {
      type,
      timestamp: new Date(),
      details,
      severity,
      source
    };

    this.events.push(event);
    this.metrics.lastSecurityEvent = new Date();
    
    // Keep only last 100 events
    if (this.events.length > 100) {
      this.events.shift();
    }

    // Update security score
    this.updateSecurityScore(event);
    
    // Log security event (avoid infinite recursion by not using console.warn)
    if (severity === 'critical' || severity === 'high') {
      console.error(`Security Event [${severity.toUpperCase()}]: ${details}`, event);
    } else {
      console.info(`Security Event [${severity.toUpperCase()}]: ${details}`, event);
    }
  }

  private updateSecurityScore(event: SecurityEvent): void {
    let penalty = 0;
    
    switch (event.severity) {
      case 'critical':
        penalty = 20;
        break;
      case 'high':
        penalty = 10;
        break;
      case 'medium':
        penalty = 5;
        break;
      case 'low':
        penalty = 1;
        break;
    }
    
    this.metrics.securityScore = Math.max(0, this.metrics.securityScore - penalty);
  }

  public getMetrics(): SecurityMetrics {
    return { ...this.metrics };
  }

  public getEvents(): SecurityEvent[] {
    return [...this.events];
  }

  public getSecurityScore(): number {
    return this.metrics.securityScore;
  }

  public generateSecurityReport(): string {
    const recentEvents = this.events.filter(event => 
      Date.now() - event.timestamp.getTime() < 24 * 60 * 60 * 1000 // Last 24 hours
    );

    return `
Security Report:
- XSS Attempts: ${this.metrics.xssAttempts}
- CSRF Attempts: ${this.metrics.csrfAttempts}
- Clickjacking Attempts: ${this.metrics.clickjackingAttempts}
- Suspicious Activity: ${this.metrics.suspiciousActivity}
- Blocked Requests: ${this.metrics.blockedRequests}
- Security Score: ${this.metrics.securityScore}/100
- Recent Events (24h): ${recentEvents.length}
- Last Security Event: ${this.metrics.lastSecurityEvent?.toISOString() || 'None'}
    `.trim();
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.isInitialized = false;
  }
}

export { SecurityEnhancer };
export default SecurityEnhancer;