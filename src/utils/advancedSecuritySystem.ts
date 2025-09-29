/**
 * Advanced Security System
 * Comprehensive security monitoring, threat detection, and protection
 */

interface SecurityEvent {
  id: string;
  type: 'threat' | 'suspicious' | 'warning' | 'info';
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: number;
  source: string;
  description: string;
  metadata: Record<string, any>;
  resolved: boolean;
}

interface SecurityMetrics {
  totalEvents: number;
  eventsByType: Record<string, number>;
  eventsBySeverity: Record<string, number>;
  threatsBlocked: number;
  suspiciousActivities: number;
  securityScore: number; // 0-100
}

interface SecurityConfig {
  enableCSP: boolean;
  enableXSSProtection: boolean;
  enableClickjackingProtection: boolean;
  enableHSTS: boolean;
  enableCORS: boolean;
  enableRateLimiting: boolean;
  maxRequestsPerMinute: number;
  enableThreatDetection: boolean;
  enableAnomalyDetection: boolean;
}

class AdvancedSecuritySystem {
  private events: SecurityEvent[] = [];
  private config: SecurityConfig;
  private metrics: SecurityMetrics;
  private isInitialized: boolean = false;
  private requestCounts: Map<string, number[]> = new Map();
  private suspiciousPatterns: string[] = [];
  private maxEvents: number = 1000;

  constructor(config: Partial<SecurityConfig> = {}) {
    this.config = {
      enableCSP: true,
      enableXSSProtection: true,
      enableClickjackingProtection: true,
      enableHSTS: true,
      enableCORS: true,
      enableRateLimiting: true,
      maxRequestsPerMinute: 60,
      enableThreatDetection: true,
      enableAnomalyDetection: true,
      ...config
    };

    this.metrics = {
      totalEvents: 0,
      eventsByType: {},
      eventsBySeverity: {},
      threatsBlocked: 0,
      suspiciousActivities: 0,
      securityScore: 100
    };

    this.suspiciousPatterns = [
      '<script',
      'javascript:',
      'data:text/html',
      'vbscript:',
      'onload=',
      'onerror=',
      'onclick=',
      'onmouseover=',
      'eval(',
      'document.cookie',
      'window.location',
      '../',
      '..\\',
      '/etc/passwd',
      '/etc/shadow',
      'cmd.exe',
      'powershell',
      'sql injection',
      'union select',
      'drop table',
      'delete from'
    ];
  }

  /**
   * Initialize the security system
   */
  public initialize(): void {
    if (this.isInitialized) {
      console.warn('Advanced Security System is already initialized');
      return;
    }

    this.isInitialized = true;
    console.log('🔒 Advanced Security System initialized');

    // Setup security headers
    this.setupSecurityHeaders();
    
    // Setup threat detection
    this.setupThreatDetection();
    
    // Setup rate limiting
    this.setupRateLimiting();
    
    // Setup input validation
    this.setupInputValidation();
    
    // Setup anomaly detection
    this.setupAnomalyDetection();
    
    // Setup session security
    this.setupSessionSecurity();
    
    // Start monitoring
    this.startMonitoring();
  }

  /**
   * Setup security headers
   */
  private setupSecurityHeaders(): void {
    if (typeof document === 'undefined') return;

    // Content Security Policy
    if (this.config.enableCSP) {
      const csp = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-ancestors 'none';";
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Content-Security-Policy';
      meta.content = csp;
      document.head.appendChild(meta);
    }

    // X-Frame-Options
    if (this.config.enableClickjackingProtection) {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'X-Frame-Options';
      meta.content = 'DENY';
      document.head.appendChild(meta);
    }

    // X-XSS-Protection
    if (this.config.enableXSSProtection) {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'X-XSS-Protection';
      meta.content = '1; mode=block';
      document.head.appendChild(meta);
    }

    // Strict-Transport-Security
    if (this.config.enableHSTS) {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Strict-Transport-Security';
      meta.content = 'max-age=31536000; includeSubDomains';
      document.head.appendChild(meta);
    }
  }

  /**
   * Setup threat detection
   */
  private setupThreatDetection(): void {
    if (!this.config.enableThreatDetection) return;

    // Monitor DOM changes for suspicious content
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              this.scanElement(node as Element);
            }
          });
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Monitor URL changes
    let currentUrl = window.location.href;
    setInterval(() => {
      if (window.location.href !== currentUrl) {
        this.checkUrlSecurity(window.location.href);
        currentUrl = window.location.href;
      }
    }, 1000);

    // Monitor console access
    this.monitorConsoleAccess();
  }

  /**
   * Setup rate limiting
   */
  private setupRateLimiting(): void {
    if (!this.config.enableRateLimiting) return;

    // Monitor API requests
    const originalFetch = window.fetch;
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      const clientId = this.getClientId();
      
      if (!this.checkRateLimit(clientId)) {
        this.logSecurityEvent('threat', 'high', 'Rate limit exceeded', {
          clientId,
          url: typeof input === 'string' ? input : input.toString(),
          method: init?.method || 'GET'
        });
        throw new Error('Rate limit exceeded');
      }

      return originalFetch(input, init);
    };

    // Monitor form submissions
    document.addEventListener('submit', (event) => {
      const clientId = this.getClientId();
      if (!this.checkRateLimit(clientId, 'form')) {
        event.preventDefault();
        this.logSecurityEvent('threat', 'medium', 'Form submission rate limit exceeded', {
          clientId,
          formId: (event.target as HTMLFormElement).id
        });
        return false;
      }
    });
  }

  /**
   * Setup input validation
   */
  private setupInputValidation(): void {
    // Monitor all input fields
    document.addEventListener('input', (event) => {
      const target = event.target as HTMLInputElement;
      if (target && this.isSuspiciousInput(target.value)) {
        this.logSecurityEvent('suspicious', 'medium', 'Suspicious input detected', {
          inputType: target.type,
          inputName: target.name,
          inputValue: target.value.substring(0, 100) // Limit logged value
        });
      }
    });

    // Monitor form submissions
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      
      for (const [key, value] of formData.entries()) {
        if (typeof value === 'string' && this.isSuspiciousInput(value)) {
          this.logSecurityEvent('threat', 'high', 'Malicious form submission detected', {
            formId: form.id,
            fieldName: key,
            fieldValue: value.substring(0, 100)
          });
          event.preventDefault();
          return false;
        }
      }
    });
  }

  /**
   * Setup anomaly detection
   */
  private setupAnomalyDetection(): void {
    if (!this.config.enableAnomalyDetection) return;

    // Monitor unusual user behavior
    let clickCount = 0;
    let scrollCount = 0;
    let keyPressCount = 0;

    document.addEventListener('click', () => {
      clickCount++;
    });

    document.addEventListener('scroll', () => {
      scrollCount++;
    });

    document.addEventListener('keydown', () => {
      keyPressCount++;
    });

    // Check for anomalies every 30 seconds
    setInterval(() => {
      const now = Date.now();
      
      // Detect rapid clicking (potential bot behavior)
      if (clickCount > 100) {
        this.logSecurityEvent('suspicious', 'medium', 'Unusual clicking pattern detected', {
          clickCount,
          timeWindow: '30s'
        });
      }

      // Detect rapid scrolling (potential automated behavior)
      if (scrollCount > 50) {
        this.logSecurityEvent('suspicious', 'low', 'Unusual scrolling pattern detected', {
          scrollCount,
          timeWindow: '30s'
        });
      }

      // Detect rapid key presses (potential automated input)
      if (keyPressCount > 200) {
        this.logSecurityEvent('suspicious', 'medium', 'Unusual typing pattern detected', {
          keyPressCount,
          timeWindow: '30s'
        });
      }

      // Reset counters
      clickCount = 0;
      scrollCount = 0;
      keyPressCount = 0;
    }, 30000);
  }

  /**
   * Setup session security
   */
  private setupSessionSecurity(): void {
    // Monitor session timeout
    let lastActivity = Date.now();
    const sessionTimeout = 30 * 60 * 1000; // 30 minutes

    document.addEventListener('click', () => {
      lastActivity = Date.now();
    });

    document.addEventListener('keydown', () => {
      lastActivity = Date.now();
    });

    setInterval(() => {
      if (Date.now() - lastActivity > sessionTimeout) {
        this.logSecurityEvent('warning', 'medium', 'Session timeout detected', {
          lastActivity,
          timeoutDuration: sessionTimeout
        });
        // Could implement session invalidation here
      }
    }, 60000); // Check every minute
  }

  /**
   * Start monitoring
   */
  private startMonitoring(): void {
    // Monitor page visibility for security events
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.logSecurityEvent('info', 'low', 'Page hidden', {
          timestamp: Date.now()
        });
      } else {
        this.logSecurityEvent('info', 'low', 'Page visible', {
          timestamp: Date.now()
        });
      }
    });

    // Monitor focus events
    window.addEventListener('focus', () => {
      this.logSecurityEvent('info', 'low', 'Window focused', {
        timestamp: Date.now()
      });
    });

    window.addEventListener('blur', () => {
      this.logSecurityEvent('info', 'low', 'Window blurred', {
        timestamp: Date.now()
      });
    });
  }

  /**
   * Scan element for suspicious content
   */
  private scanElement(element: Element): void {
    const html = element.outerHTML;
    
    this.suspiciousPatterns.forEach(pattern => {
      if (html.toLowerCase().includes(pattern.toLowerCase())) {
        this.logSecurityEvent('threat', 'high', 'Suspicious content detected', {
          pattern,
          element: element.tagName,
          content: html.substring(0, 200)
        });
      }
    });
  }

  /**
   * Check URL security
   */
  private checkUrlSecurity(url: string): void {
    // Check for suspicious URL patterns
    const suspiciousUrlPatterns = [
      'javascript:',
      'data:',
      'vbscript:',
      'file:',
      '../',
      '..\\',
      'eval(',
      'document.cookie',
      'window.location'
    ];

    suspiciousUrlPatterns.forEach(pattern => {
      if (url.toLowerCase().includes(pattern)) {
        this.logSecurityEvent('threat', 'critical', 'Suspicious URL detected', {
          pattern,
          url
        });
      }
    });
  }

  /**
   * Monitor console access
   */
  private monitorConsoleAccess(): void {
    const originalConsole = {
      log: console.log,
      warn: console.warn,
      error: console.error,
      info: console.info
    };

    ['log', 'warn', 'error', 'info'].forEach(method => {
      (console as any)[method] = (...args: any[]) => {
        // Check if console access is from suspicious context
        const stack = new Error().stack;
        if (stack && this.isSuspiciousStack(stack)) {
          this.logSecurityEvent('suspicious', 'medium', 'Suspicious console access detected', {
            method,
            stack: stack.substring(0, 500)
          });
        }
        
        originalConsole[method as keyof typeof originalConsole](...args);
      };
    });
  }

  /**
   * Check rate limit
   */
  private checkRateLimit(clientId: string, type: string = 'request'): boolean {
    const now = Date.now();
    const key = `${clientId}_${type}`;
    
    if (!this.requestCounts.has(key)) {
      this.requestCounts.set(key, []);
    }
    
    const requests = this.requestCounts.get(key)!;
    
    // Remove requests older than 1 minute
    const oneMinuteAgo = now - 60000;
    const recentRequests = requests.filter(time => time > oneMinuteAgo);
    
    if (recentRequests.length >= this.config.maxRequestsPerMinute) {
      return false;
    }
    
    recentRequests.push(now);
    this.requestCounts.set(key, recentRequests);
    
    return true;
  }

  /**
   * Check if input is suspicious
   */
  private isSuspiciousInput(input: string): boolean {
    return this.suspiciousPatterns.some(pattern => 
      input.toLowerCase().includes(pattern.toLowerCase())
    );
  }

  /**
   * Check if stack trace is suspicious
   */
  private isSuspiciousStack(stack: string): boolean {
    const suspiciousKeywords = ['eval', 'Function', 'setTimeout', 'setInterval'];
    return suspiciousKeywords.some(keyword => 
      stack.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  /**
   * Get client ID
   */
  private getClientId(): string {
    let clientId = sessionStorage.getItem('security_client_id');
    if (!clientId) {
      clientId = 'client_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
      sessionStorage.setItem('security_client_id', clientId);
    }
    return clientId;
  }

  /**
   * Log security event
   */
  private logSecurityEvent(
    type: SecurityEvent['type'],
    severity: SecurityEvent['severity'],
    description: string,
    metadata: Record<string, any> = {}
  ): void {
    const event: SecurityEvent = {
      id: this.generateEventId(),
      type,
      severity,
      timestamp: Date.now(),
      source: this.getSource(),
      description,
      metadata,
      resolved: false
    };

    this.events.push(event);
    
    // Keep only recent events
    if (this.events.length > this.maxEvents) {
      this.events = this.events.slice(-this.maxEvents);
    }

    // Update metrics
    this.updateMetrics(event);

    // Log to console with appropriate level
    this.logEvent(event);

    // Send to external monitoring service
    this.sendToMonitoringService(event);
  }

  /**
   * Update metrics
   */
  private updateMetrics(event: SecurityEvent): void {
    this.metrics.totalEvents++;
    this.metrics.eventsByType[event.type] = (this.metrics.eventsByType[event.type] || 0) + 1;
    this.metrics.eventsBySeverity[event.severity] = (this.metrics.eventsBySeverity[event.severity] || 0) + 1;
    
    if (event.type === 'threat') {
      this.metrics.threatsBlocked++;
    }
    
    if (event.type === 'suspicious') {
      this.metrics.suspiciousActivities++;
    }

    // Calculate security score
    this.calculateSecurityScore();
  }

  /**
   * Calculate security score
   */
  private calculateSecurityScore(): void {
    let score = 100;
    
    // Deduct points for threats
    score -= this.metrics.threatsBlocked * 10;
    
    // Deduct points for suspicious activities
    score -= this.metrics.suspiciousActivities * 2;
    
    // Deduct points for high severity events
    score -= (this.metrics.eventsBySeverity['high'] || 0) * 5;
    score -= (this.metrics.eventsBySeverity['critical'] || 0) * 15;
    
    this.metrics.securityScore = Math.max(0, Math.min(100, score));
  }

  /**
   * Log event to console
   */
  private logEvent(event: SecurityEvent): void {
    const message = `🔒 [${event.severity.toUpperCase()}] ${event.description}`;
    
    switch (event.severity) {
      case 'critical':
      case 'high':
        console.error(message, event);
        break;
      case 'medium':
        console.warn(message, event);
        break;
      case 'low':
        console.info(message, event);
        break;
    }
  }

  /**
   * Send to monitoring service
   */
  private sendToMonitoringService(event: SecurityEvent): void {
    // This would typically send to an external security monitoring service
    if (typeof gtag !== 'undefined') {
      gtag('event', 'security_event', {
        event_type: event.type,
        severity: event.severity,
        description: event.description
      });
    }
  }

  /**
   * Get source information
   */
  private getSource(): string {
    return `${window.location.hostname}:${window.location.port || '80'}`;
  }

  /**
   * Generate event ID
   */
  private generateEventId(): string {
    return 'security_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
  }

  /**
   * Get security metrics
   */
  public getMetrics(): SecurityMetrics {
    return { ...this.metrics };
  }

  /**
   * Get recent security events
   */
  public getRecentEvents(limit: number = 10): SecurityEvent[] {
    return this.events.slice(-limit).reverse();
  }

  /**
   * Resolve security event
   */
  public resolveEvent(eventId: string): boolean {
    const event = this.events.find(e => e.id === eventId);
    if (event) {
      event.resolved = true;
      return true;
    }
    return false;
  }

  /**
   * Generate security report
   */
  public generateReport(): string {
    const metrics = this.getMetrics();
    const recentEvents = this.getRecentEvents(5);
    
    let report = `
🔒 Advanced Security System Report
==================================
Security Score: ${metrics.securityScore}/100
Total Events: ${metrics.totalEvents}
Threats Blocked: ${metrics.threatsBlocked}
Suspicious Activities: ${metrics.suspiciousActivities}

📊 Events by Type:
`;

    Object.entries(metrics.eventsByType).forEach(([type, count]) => {
      report += `- ${type}: ${count}\n`;
    });

    report += `\n📊 Events by Severity:\n`;
    Object.entries(metrics.eventsBySeverity).forEach(([severity, count]) => {
      report += `- ${severity}: ${count}\n`;
    });

    if (recentEvents.length > 0) {
      report += `\n🚨 Recent Security Events:\n`;
      recentEvents.forEach((event, index) => {
        report += `${index + 1}. [${event.severity.toUpperCase()}] ${event.description}\n`;
      });
    }

    return report;
  }

  /**
   * Cleanup
   */
  public cleanup(): void {
    this.events = [];
    this.requestCounts.clear();
    this.isInitialized = false;
  }
}

// Export singleton instance
export const advancedSecuritySystem = new AdvancedSecuritySystem();
export type { SecurityEvent, SecurityMetrics, SecurityConfig };
export { AdvancedSecuritySystem };
export default AdvancedSecuritySystem;