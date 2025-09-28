/**
 * Enhanced Security System
 * Comprehensive security monitoring and protection
 */

export interface SecurityEvent {
  type: 'xss_attempt' | 'csrf_attempt' | 'injection_attempt' | 'suspicious_activity' | 'rate_limit_exceeded';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: number;
  source: string;
  userAgent: string;
  ip?: string;
  metadata?: Record<string, unknown>;
}

export interface SecurityConfig {
  enableCSP: boolean;
  enableXSSProtection: boolean;
  enableCSRFProtection: boolean;
  enableRateLimiting: boolean;
  maxRequestsPerMinute: number;
  suspiciousPatterns: RegExp[];
  trustedDomains: string[];
}

export interface SecurityMetrics {
  totalEvents: number;
  eventsByType: Record<string, number>;
  eventsBySeverity: Record<string, number>;
  recentEvents: SecurityEvent[];
  blockedRequests: number;
  suspiciousActivities: number;
}

class EnhancedSecuritySystem {
  private events: SecurityEvent[] = [];
  private config: SecurityConfig;
  private rateLimitMap: Map<string, number[]> = new Map();
  private isInitialized = false;
  private maxEvents = 1000;

  constructor() {
    this.config = {
      enableCSP: true,
      enableXSSProtection: true,
      enableCSRFProtection: true,
      enableRateLimiting: true,
      maxRequestsPerMinute: 60,
      suspiciousPatterns: [
        /<script[^>]*>.*?<\/script>/gi,
        /javascript:/gi,
        /on\w+\s*=/gi,
        /eval\s*\(/gi,
        /expression\s*\(/gi,
        /url\s*\(/gi,
        /import\s*\(/gi,
        /require\s*\(/gi
      ],
      trustedDomains: [
        window.location.hostname,
        'cdn.jsdelivr.net',
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'unpkg.com'
      ]
    };
  }

  /**
   * Initialize the security system
   */
  initialize(): void {
    if (this.isInitialized) return;

    this.setupCSP();
    this.setupXSSProtection();
    this.setupCSRFProtection();
    this.setupRateLimiting();
    this.setupEventMonitoring();
    this.setupInputSanitization();
    this.isInitialized = true;

    console.log('✅ Enhanced Security System initialized');
  }

  /**
   * Setup Content Security Policy
   */
  private setupCSP(): void {
    if (!this.config.enableCSP) return;

    const cspHeader = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://unpkg.com https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https: wss:",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'"
    ].join('; ');

    // Create CSP meta tag if not exists
    let cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]') as HTMLMetaElement;
    if (!cspMeta) {
      cspMeta = document.createElement('meta');
      cspMeta.setAttribute('http-equiv', 'Content-Security-Policy');
      document.head.appendChild(cspMeta);
    }
    cspMeta.content = cspHeader;

    console.log('CSP configured:', cspHeader);
  }

  /**
   * Setup XSS Protection
   */
  private setupXSSProtection(): void {
    if (!this.config.enableXSSProtection) return;

    // Monitor for XSS attempts
    const originalCreateElement = document.createElement;
    document.createElement = function(tagName: string) {
      const element = originalCreateElement.call(this, tagName);
      
      // Monitor script tag creation
      if (tagName.toLowerCase() === 'script') {
        const securitySystem = (window as any).__securitySystem;
        if (securitySystem) {
          (securitySystem as any).logSecurityEvent({
            type: 'xss_attempt',
            severity: 'high',
            message: 'Script tag creation detected',
            timestamp: Date.now(),
            source: 'DOM',
            userAgent: navigator.userAgent
          });
        }
      }
      
      return element;
    };

    // Monitor innerHTML assignments
    const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
    if (originalInnerHTML) {
      Object.defineProperty(Element.prototype, 'innerHTML', {
        set: function(value: string) {
          const securitySystem = (window as any).__securitySystem;
          if (securitySystem && (securitySystem as any).detectSuspiciousContent(value)) {
            (securitySystem as any).logSecurityEvent({
              type: 'xss_attempt',
              severity: 'high',
              message: 'Suspicious content detected in innerHTML',
              timestamp: Date.now(),
              source: 'innerHTML',
              userAgent: navigator.userAgent,
              metadata: { content: value.substring(0, 100) }
            });
          }
          originalInnerHTML.set?.call(this, value);
        },
        get: originalInnerHTML.get
      });
    }

    // Store reference for monitoring
    (window as any).__securitySystem = this;
  }

  /**
   * Setup CSRF Protection
   */
  private setupCSRFProtection(): void {
    if (!this.config.enableCSRFProtection) return;

    // Generate CSRF token
    const csrfToken = this.generateCSRFToken();
    
    // Store token in meta tag
    let csrfMeta = document.querySelector('meta[name="csrf-token"]') as HTMLMetaElement;
    if (!csrfMeta) {
      csrfMeta = document.createElement('meta');
      csrfMeta.name = 'csrf-token';
      document.head.appendChild(csrfMeta);
    }
    csrfMeta.content = csrfToken;

    // Store token in session storage
    sessionStorage.setItem('csrf-token', csrfToken);

    // Monitor form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      const token = form.querySelector('input[name="csrf-token"]') as HTMLInputElement;
      
      if (!token || token.value !== csrfToken) {
        event.preventDefault();
        this.logSecurityEvent({
          type: 'csrf_attempt',
          severity: 'high',
          message: 'CSRF token validation failed',
          timestamp: Date.now(),
          source: 'Form',
          userAgent: navigator.userAgent
        });
      }
    });
  }

  /**
   * Setup Rate Limiting
   */
  private setupRateLimiting(): void {
    if (!this.config.enableRateLimiting) return;

    // Monitor fetch requests
    const originalFetch = window.fetch;
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      const clientId = this.getClientId();
      const now = Date.now();
      
      // Check rate limit
      if (!this.checkRateLimit(clientId, now)) {
        this.logSecurityEvent({
          type: 'rate_limit_exceeded',
          severity: 'medium',
          message: 'Rate limit exceeded',
          timestamp: now,
          source: 'Fetch',
          userAgent: navigator.userAgent
        });
        
        throw new Error('Rate limit exceeded');
      }
      
      return originalFetch(input, init);
    };
  }

  /**
   * Setup Event Monitoring
   */
  private setupEventMonitoring(): void {
    // Monitor console errors for security issues
    const originalConsoleError = console.error;
    console.error = (...args: unknown[]) => {
      const message = args.join(' ');
      
      if (this.detectSuspiciousContent(message)) {
        this.logSecurityEvent({
          type: 'suspicious_activity',
          severity: 'medium',
          message: 'Suspicious activity detected in console',
          timestamp: Date.now(),
          source: 'Console',
          userAgent: navigator.userAgent,
          metadata: { message: message.substring(0, 200) }
        });
      }
      
      originalConsoleError.apply(console, args);
    };

    // Monitor uncaught errors
    window.addEventListener('error', (event) => {
      if (this.detectSuspiciousContent(event.message)) {
        this.logSecurityEvent({
          type: 'suspicious_activity',
          severity: 'medium',
          message: 'Suspicious error detected',
          timestamp: Date.now(),
          source: 'Error',
          userAgent: navigator.userAgent,
          metadata: { error: event.message }
        });
      }
    });
  }

  /**
   * Setup Input Sanitization
   */
  private setupInputSanitization(): void {
    // Monitor input elements for suspicious content
    document.addEventListener('input', (event) => {
      const input = event.target as HTMLInputElement;
      if (input && this.detectSuspiciousContent(input.value)) {
        this.logSecurityEvent({
          type: 'injection_attempt',
          severity: 'high',
          message: 'Suspicious input detected',
          timestamp: Date.now(),
          source: 'Input',
          userAgent: navigator.userAgent,
          metadata: { 
            inputType: input.type,
            inputName: input.name,
            value: input.value.substring(0, 100)
          }
        });
      }
    });
  }

  /**
   * Detect suspicious content
   */
  detectSuspiciousContent(content: string): boolean {
    return this.config.suspiciousPatterns.some(pattern => pattern.test(content));
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
   * Get client identifier
   */
  private getClientId(): string {
    let clientId = sessionStorage.getItem('client-id');
    if (!clientId) {
      clientId = this.generateClientId();
      sessionStorage.setItem('client-id', clientId);
    }
    return clientId;
  }

  /**
   * Generate client identifier
   */
  private generateClientId(): string {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);
    return `${timestamp}-${random}`;
  }

  /**
   * Check rate limit
   */
  private checkRateLimit(clientId: string, now: number): boolean {
    const requests = this.rateLimitMap.get(clientId) || [];
    const oneMinuteAgo = now - (60 * 1000);
    
    // Remove old requests
    const recentRequests = requests.filter(timestamp => timestamp > oneMinuteAgo);
    
    if (recentRequests.length >= this.config.maxRequestsPerMinute) {
      return false;
    }
    
    recentRequests.push(now);
    this.rateLimitMap.set(clientId, recentRequests);
    
    return true;
  }

  /**
   * Log security event
   */
  logSecurityEvent(event: SecurityEvent): void {
    this.events.unshift(event);
    
    // Keep only recent events
    if (this.events.length > this.maxEvents) {
      this.events = this.events.slice(0, this.maxEvents);
    }

    // Log critical events to console
    if (event.severity === 'critical' || event.severity === 'high') {
      console.warn('🚨 Security Event:', event);
    }

    // Send to monitoring service (in real implementation)
    this.sendToMonitoringService(event);
  }

  /**
   * Send event to monitoring service
   */
  private sendToMonitoringService(event: SecurityEvent): void {
    // In a real implementation, this would send to a security monitoring service
    if (event.severity === 'critical') {
      console.error('Critical security event detected:', event);
      // Could trigger alerts, notifications, etc.
    }
  }

  /**
   * Get security metrics
   */
  getSecurityMetrics(): SecurityMetrics {
    const now = Date.now();
    const oneHourAgo = now - (60 * 60 * 1000);
    
    const recentEvents = this.events.filter(event => event.timestamp > oneHourAgo);
    
    const eventsByType = this.events.reduce((acc, event) => {
      acc[event.type] = (acc[event.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const eventsBySeverity = this.events.reduce((acc, event) => {
      acc[event.severity] = (acc[event.severity] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const blockedRequests = this.events.filter(event => 
      event.type === 'rate_limit_exceeded' || event.type === 'csrf_attempt'
    ).length;

    const suspiciousActivities = this.events.filter(event => 
      event.type === 'suspicious_activity' || event.type === 'xss_attempt'
    ).length;

    return {
      totalEvents: this.events.length,
      eventsByType,
      eventsBySeverity,
      recentEvents: recentEvents.slice(0, 20),
      blockedRequests,
      suspiciousActivities
    };
  }

  /**
   * Sanitize HTML content
   */
  sanitizeHTML(html: string): string {
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  }

  /**
   * Validate URL
   */
  isValidURL(url: string): boolean {
    try {
      const urlObj = new URL(url);
      return this.config.trustedDomains.includes(urlObj.hostname);
    } catch {
      return false;
    }
  }

  /**
   * Clear security events
   */
  clearEvents(): void {
    this.events = [];
  }

  /**
   * Update configuration
   */
  updateConfig(newConfig: Partial<SecurityConfig>): void {
    this.config = { ...this.config, ...newConfig };
    
    // Reinitialize if needed
    if (this.isInitialized) {
      this.initialize();
    }
  }

  /**
   * Get current configuration
   */
  getConfig(): SecurityConfig {
    return { ...this.config };
  }
}

// Export singleton instance
export const enhancedSecuritySystem = new EnhancedSecuritySystem();

// Auto-initialize
if (typeof window !== 'undefined') {
  enhancedSecuritySystem.initialize();
}