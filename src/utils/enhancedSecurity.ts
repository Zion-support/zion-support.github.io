/**
 * Enhanced Security Utilities
 * Provides comprehensive security features and protection mechanisms
 */

interface SecurityConfig {
  enableCSP: boolean;
  enableHSTS: boolean;
  enableXSSProtection: boolean;
  enableClickjackingProtection: boolean;
  enableContentTypeOptions: boolean;
  enableReferrerPolicy: boolean;
  enablePermissionsPolicy: boolean;
  enableFeaturePolicy: boolean;
  enableSubresourceIntegrity: boolean;
  enableCertificatePinning: boolean;
  cspDirectives: {
    'default-src': string[];
    'script-src': string[];
    'style-src': string[];
    'img-src': string[];
    'font-src': string[];
    'connect-src': string[];
    'media-src': string[];
    'object-src': string[];
    'child-src': string[];
    'frame-src': string[];
    'worker-src': string[];
    'frame-ancestors': string[];
    'form-action': string[];
    'base-uri': string[];
  };
}

interface SecurityEvent {
  type: 'xss' | 'csrf' | 'clickjacking' | 'data-exfiltration' | 'injection';
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: number;
  details: Record<string, unknown>;
  userAgent: string;
  url: string;
}

class EnhancedSecurityManager {
  private config: SecurityConfig;
  private securityEvents: SecurityEvent[] = [];
  private isInitialized = false;

  constructor(config?: Partial<SecurityConfig>) {
    this.config = {
      enableCSP: true,
      enableHSTS: true,
      enableXSSProtection: true,
      enableClickjackingProtection: true,
      enableContentTypeOptions: true,
      enableReferrerPolicy: true,
      enablePermissionsPolicy: true,
      enableFeaturePolicy: true,
      enableSubresourceIntegrity: true,
      enableCertificatePinning: false,
      cspDirectives: {
        'default-src': ["'self'"],
        'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        'style-src': ["'self'", "'unsafe-inline'"],
        'img-src': ["'self'", "data:", "https:"],
        'font-src': ["'self'", "https:", "data:"],
        'connect-src': ["'self'"],
        'media-src': ["'self'"],
        'object-src': ["'none'"],
        'child-src': ["'self'"],
        'frame-src': ["'self'"],
        'worker-src': ["'self'"],
        'frame-ancestors': ["'self'"],
        'form-action': ["'self'"],
        'base-uri': ["'self'"]
      },
      ...config
    };
  }

  /**
   * Initialize security features
   */
  public initialize(): void {
    if (this.isInitialized) return;

    this.setupSecurityHeaders();
    this.setupContentSecurityPolicy();
    this.setupXSSProtection();
    this.setupClickjackingProtection();
    this.setupPermissionsPolicy();
    this.setupSubresourceIntegrity();
    this.setupSecurityMonitoring();
    this.setupDataProtection();
    this.setupSecureCommunication();
    
    this.isInitialized = true;
    console.log('Enhanced Security Manager initialized');
  }

  /**
   * Setup security headers
   */
  private setupSecurityHeaders(): void {
    // These would typically be set by the server, but we can add client-side checks
    this.validateSecurityHeaders();
  }

  /**
   * Setup Content Security Policy
   */
  private setupContentSecurityPolicy(): void {
    if (!this.config.enableCSP) return;

    const cspDirectives = Object.entries(this.config.cspDirectives)
      .map(([directive, sources]) => `${directive} ${sources.join(' ')}`)
      .join('; ');

    // Create CSP meta tag
    const cspMeta = document.createElement('meta');
    cspMeta.httpEquiv = 'Content-Security-Policy';
    cspMeta.content = cspDirectives;
    document.head.appendChild(cspMeta);

    // Monitor CSP violations
    document.addEventListener('securitypolicyviolation', (event) => {
      this.logSecurityEvent({
        type: 'xss',
        severity: 'medium',
        timestamp: Date.now(),
        details: {
          violatedDirective: (event as SecurityPolicyViolationEvent).violatedDirective,
          blockedURI: (event as SecurityPolicyViolationEvent).blockedURI,
          sourceFile: (event as SecurityPolicyViolationEvent).sourceFile,
          lineNumber: (event as SecurityPolicyViolationEvent).lineNumber
        },
        userAgent: navigator.userAgent,
        url: window.location.href
      });
    });
  }

  /**
   * Setup XSS Protection
   */
  private setupXSSProtection(): void {
    if (!this.config.enableXSSProtection) return;

    // Sanitize user inputs
    this.setupInputSanitization();
    
    // Monitor for XSS attempts
    this.setupXSSMonitoring();
  }

  /**
   * Setup input sanitization
   */
  private setupInputSanitization(): void {
    // Override innerHTML to sanitize content
    const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
    
    Object.defineProperty(Element.prototype, 'innerHTML', {
      set: function(value: string) {
        // Basic HTML sanitization - in production, use a proper library like DOMPurify
        const sanitized = value
          .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
          .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
          .replace(/javascript:/gi, '')
          .replace(/on\w+\s*=/gi, '');
        
        if (originalInnerHTML?.set) {
          originalInnerHTML.set.call(this, sanitized);
        }
      },
      get: originalInnerHTML?.get
    });
  }

  /**
   * Sanitize HTML content
   */
  private sanitizeHTML(html: string): string {
    // Basic HTML sanitization - in production, use a proper library like DOMPurify
    return html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '');
  }

  /**
   * Setup XSS monitoring
   */
  private setupXSSMonitoring(): void {
    // Monitor for suspicious script execution
    const originalEval = window.eval;
    window.eval = (code: string) => {
      this.logSecurityEvent({
        type: 'injection',
        severity: 'high',
        timestamp: Date.now(),
        details: { code: code.substring(0, 100) },
        userAgent: navigator.userAgent,
        url: window.location.href
      });
      return originalEval(code);
    };
  }

  /**
   * Setup clickjacking protection
   */
  private setupClickjackingProtection(): void {
    if (!this.config.enableClickjackingProtection) return;

    // Check if page is in frame
    if (window !== window.top) {
      this.logSecurityEvent({
        type: 'clickjacking',
        severity: 'medium',
        timestamp: Date.now(),
        details: { frameDetected: true },
        userAgent: navigator.userAgent,
        url: window.location.href
      });
    }

    // Prevent frame embedding
    window.addEventListener('beforeunload', () => {
      if (window !== window.top) {
        window.top?.location.replace(window.location.href);
      }
    });
  }

  /**
   * Setup Permissions Policy
   */
  private setupPermissionsPolicy(): void {
    if (!this.config.enablePermissionsPolicy) return;

    const permissions = [
      'camera',
      'microphone',
      'geolocation',
      'payment',
      'usb',
      'bluetooth',
      'magnetometer',
      'accelerometer',
      'gyroscope'
    ];

    permissions.forEach((permission) => {
      if ('permissions' in navigator) {
        navigator.permissions.query({ name: permission as PermissionName }).then((result) => {
          if (result.state === 'granted') {
            this.logSecurityEvent({
              type: 'data-exfiltration',
              severity: 'low',
              timestamp: Date.now(),
              details: { permission, state: result.state },
              userAgent: navigator.userAgent,
              url: window.location.href
            });
          }
        });
      }
    });
  }

  /**
   * Setup Subresource Integrity
   */
  private setupSubresourceIntegrity(): void {
    if (!this.config.enableSubresourceIntegrity) return;

    // Monitor for integrity violations
    document.addEventListener('error', (event) => {
      const target = event.target as HTMLElement;
      if (target.tagName === 'SCRIPT' || target.tagName === 'LINK') {
        const element = target as HTMLScriptElement | HTMLLinkElement;
        if (element.integrity) {
          this.logSecurityEvent({
            type: 'injection',
            severity: 'high',
            timestamp: Date.now(),
            details: {
              type: 'integrity_violation',
              element: target.tagName,
              src: (element as unknown as HTMLImageElement).src || (element as unknown as HTMLAnchorElement).href
            },
            userAgent: navigator.userAgent,
            url: window.location.href
          });
        }
      }
    }, true);
  }

  /**
   * Setup security monitoring
   */
  private setupSecurityMonitoring(): void {
    // Monitor for suspicious network requests
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const url = args[0] as string;
      if (this.isSuspiciousURL(url)) {
        this.logSecurityEvent({
          type: 'data-exfiltration',
          severity: 'medium',
          timestamp: Date.now(),
          details: { url, type: 'suspicious_fetch' },
          userAgent: navigator.userAgent,
          url: window.location.href
        });
      }
      return originalFetch(...args);
    };

    // Monitor for suspicious DOM modifications
    this.setupDOMMonitoring();
  }

  /**
   * Check if URL is suspicious
   */
  private isSuspiciousURL(url: string): boolean {
    const suspiciousPatterns = [
      /javascript:/i,
      /data:text\/html/i,
      /vbscript:/i,
      /file:/i
    ];
    
    return suspiciousPatterns.some(pattern => pattern.test(url));
  }

  /**
   * Setup DOM monitoring
   */
  private setupDOMMonitoring(): void {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.tagName === 'SCRIPT' && !element.hasAttribute('src')) {
                this.logSecurityEvent({
                  type: 'xss',
                  severity: 'high',
                  timestamp: Date.now(),
                  details: { type: 'inline_script_detected' },
                  userAgent: navigator.userAgent,
                  url: window.location.href
                });
              }
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

  /**
   * Setup data protection
   */
  private setupDataProtection(): void {
    // Encrypt sensitive data in localStorage
    this.setupDataEncryption();
    
    // Monitor for data leaks
    this.setupDataLeakMonitoring();
  }

  /**
   * Setup data encryption
   */
  private setupDataEncryption(): void {
    const originalSetItem = localStorage.setItem;
    const originalGetItem = localStorage.getItem;

    localStorage.setItem = (key: string, value: string) => {
      if (this.isSensitiveKey(key)) {
        value = this.encryptData(value);
      }
      return originalSetItem.call(localStorage, key, value);
    };

    localStorage.getItem = (key: string) => {
      const value = originalGetItem.call(localStorage, key);
      if (value && this.isSensitiveKey(key)) {
        return this.decryptData(value);
      }
      return value;
    };
  }

  /**
   * Check if key is sensitive
   */
  private isSensitiveKey(key: string): boolean {
    const sensitiveKeys = ['token', 'password', 'secret', 'key', 'auth'];
    return sensitiveKeys.some(sensitiveKey => key.toLowerCase().includes(sensitiveKey));
  }

  /**
   * Simple encryption (in production, use proper encryption)
   */
  private encryptData(data: string): string {
    return btoa(data); // Base64 encoding - use proper encryption in production
  }

  /**
   * Simple decryption
   */
  private decryptData(data: string): string {
    try {
      return atob(data);
    } catch {
      return data;
    }
  }

  /**
   * Setup data leak monitoring
   */
  private setupDataLeakMonitoring(): void {
    // Monitor for sensitive data in URLs
    if ((window.location.search && window.location.search.includes('password')) || 
        (window.location.search && window.location.search.includes('token')) ||
        (window.location.hash && window.location.hash.includes('password')) ||
        (window.location.hash && window.location.hash.includes('token'))) {
      this.logSecurityEvent({
        type: 'data-exfiltration',
        severity: 'high',
        timestamp: Date.now(),
        details: { type: 'sensitive_data_in_url' },
        userAgent: navigator.userAgent,
        url: window.location.href
      });
    }
  }

  /**
   * Setup secure communication
   */
  private setupSecureCommunication(): void {
    // Ensure HTTPS
    if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
      this.logSecurityEvent({
        type: 'data-exfiltration',
        severity: 'high',
        timestamp: Date.now(),
        details: { type: 'insecure_connection' },
        userAgent: navigator.userAgent,
        url: window.location.href
      });
    }
  }

  /**
   * Validate security headers
   */
  private validateSecurityHeaders(): void {
    // This would typically be done server-side
    // Here we can check if headers are present and correct
    console.log('Security headers validation would be performed here');
  }

  /**
   * Log security event
   */
  private logSecurityEvent(event: SecurityEvent): void {
    this.securityEvents.push(event);
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.warn('Security Event:', event);
    }

    // Send to security monitoring service
    this.sendToSecurityService(event);

    // Trigger alert for critical events
    if (event.severity === 'critical') {
      this.triggerSecurityAlert(event);
    }
  }

  /**
   * Send security event to monitoring service
   */
  private sendToSecurityService(event: SecurityEvent): void {
    // This would integrate with your security monitoring service
    if (typeof gtag !== 'undefined') {
      gtag('event', 'security_event', {
        event_type: event.type,
        severity: event.severity,
        custom_parameter: 'enhanced_security'
      });
    }
  }

  /**
   * Trigger security alert
   */
  private triggerSecurityAlert(event: SecurityEvent): void {
    console.error('CRITICAL SECURITY ALERT:', event);
    
    // In production, this would trigger immediate alerts
    // to security teams and potentially block the user
  }

  /**
   * Get security events
   */
  public getSecurityEvents(): SecurityEvent[] {
    return [...this.securityEvents];
  }

  /**
   * Update security configuration
   */
  public updateConfig(config: Partial<SecurityConfig>): void {
    this.config = { ...this.config, ...config };
  }

  /**
   * Get security score
   */
  public getSecurityScore(): number {
    const totalChecks = Object.keys(this.config).length;
    const enabledChecks = Object.values(this.config).filter(Boolean).length;
    return Math.round((enabledChecks / totalChecks) * 100);
  }
}

// Create singleton instance
export const enhancedSecurityManager = new EnhancedSecurityManager();

// Export types
export type { SecurityConfig, SecurityEvent };