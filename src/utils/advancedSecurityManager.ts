/**
 * Advanced Security Manager
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
      }
    });
  }

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
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
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