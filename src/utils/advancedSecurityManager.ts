/**
 * Advanced Security Manager
 * Provides comprehensive security features and monitoring
 */

interface SecurityEvent {
  type: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: number;
  userAgent: string;
  url: string;
  metadata?: Record<string, string | number | boolean>;
}

interface SecurityConfig {
  enableCSP: boolean;
  enableXSSProtection: boolean;
  enableCSRFProtection: boolean;
  enableClickjackingProtection: boolean;
  enableContentSniffingProtection: boolean;
  enableReferrerPolicy: boolean;
  allowedOrigins: string[];
  trustedDomains: string[];
}

class AdvancedSecurityManager {
  private static instance: AdvancedSecurityManager;
  private events: SecurityEvent[] = [];
  private config: SecurityConfig;
  private isMonitoring = false;

  private constructor() {
    this.config = this.getDefaultConfig();
  }

  public static getInstance(): AdvancedSecurityManager {
    if (!AdvancedSecurityManager.instance) {
      AdvancedSecurityManager.instance = new AdvancedSecurityManager();
    }
    return AdvancedSecurityManager.instance;
  }

  public initialize(): void {
    console.log('🔒 Advanced Security Manager initialized');
    this.setupSecurityHeaders();
    this.startMonitoring();
    this.setupEventListeners();
    this.validateEnvironment();
  }

  public updateConfig(newConfig: Partial<SecurityConfig>): void {
    this.config = { ...this.config, ...newConfig };
    this.setupSecurityHeaders();
  }

  public getSecurityReport(): unknown {
    const criticalEvents = this.events.filter(e => e.severity === 'critical');
    const highEvents = this.events.filter(e => e.severity === 'high');
    
    return {
      totalEvents: this.events.length,
      criticalEvents: criticalEvents.length,
      highEvents: highEvents.length,
      recentEvents: this.events.slice(-10),
      securityScore: this.calculateSecurityScore()
    };
  }

  private getDefaultConfig(): SecurityConfig {
    return {
      enableCSP: true,
      enableXSSProtection: true,
      enableCSRFProtection: true,
      enableClickjackingProtection: true,
      enableContentSniffingProtection: true,
      enableReferrerPolicy: true,
      allowedOrigins: [window.location.origin],
      trustedDomains: ['ziontechgroup.com']
    };
  }

  private setupSecurityHeaders(): void {
    if (this.config.enableCSP) {
      this.addCSPHeader();
    }
    
    if (this.config.enableClickjackingProtection) {
      this.addFrameOptionsHeader();
    }
  }

  private addCSPHeader(): void {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;";
    document.head.appendChild(meta);
  }

  private addFrameOptionsHeader(): void {
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-Frame-Options';
    meta.content = 'DENY';
    document.head.appendChild(meta);
  }

  private startMonitoring(): void {
    if (this.isMonitoring) return;
    this.isMonitoring = true;
    this.logEvent('security_monitoring_started', 'low', 'Security monitoring started');
  }

  private setupEventListeners(): void {
    // Monitor for suspicious activities
    document.addEventListener('click', this.handleClick.bind(this));
    document.addEventListener('keydown', this.handleKeydown.bind(this));
    window.addEventListener('beforeunload', this.handleBeforeUnload.bind(this));
    
    // Monitor for potential XSS
    this.monitorForXSS();
    
    // Monitor for CSRF
    this.monitorForCSRF();
  }

  private handleClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const href = target.getAttribute('href');
    
    if (href && !this.isTrustedUrl(href)) {
      this.logEvent('suspicious_link_click', 'medium', `Click on untrusted link: ${href}`, {
        href,
        target: target.tagName
      });
    }
  }

  private handleKeydown(event: KeyboardEvent): void {
    // Monitor for suspicious key combinations
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
      this.logEvent('devtools_access_attempt', 'low', 'Developer tools access attempted');
    }
  }

  private handleBeforeUnload(): void {
    this.logEvent('page_unload', 'low', 'Page unload detected');
  }

  private monitorForXSS(): void {
    // Check for potential XSS in URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.forEach((value, key) => {
      if (this.containsSuspiciousContent(value)) {
        this.logEvent('potential_xss', 'high', `Suspicious content in URL parameter: ${key}`, {
          parameter: key,
          value: value.substring(0, 100)
        });
      }
    });
  }

  private monitorForCSRF(): void {
    // Monitor for potential CSRF attacks
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      if (!form.querySelector('input[name="_token"]') && !form.querySelector('input[name="csrf_token"]')) {
        this.logEvent('missing_csrf_token', 'medium', 'Form missing CSRF token', {
          formAction: form.action
        });
      }
    });
  }

  private containsSuspiciousContent(content: string): boolean {
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /eval\(/i,
      /expression\(/i
    ];
    
    return suspiciousPatterns.some(pattern => pattern.test(content));
  }

  private isTrustedUrl(url: string): boolean {
    try {
      const urlObj = new URL(url);
      return this.config.trustedDomains.some(domain => urlObj.hostname.endsWith(domain));
    } catch {
      return false;
    }
  }

  private validateEnvironment(): void {
    // Check for HTTPS
    if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
      this.logEvent('insecure_connection', 'high', 'Site not served over HTTPS');
    }
    
    // Check for secure context
    if (!window.isSecureContext) {
      this.logEvent('insecure_context', 'high', 'Not running in secure context');
    }
  }

  private logEvent(type: string, severity: SecurityEvent['severity'], message: string, metadata?: Record<string, unknown>): void {
    const event: SecurityEvent = {
      type,
      severity,
      message,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      metadata: metadata ? Object.fromEntries(
        Object.entries(metadata).map(([k, v]) => [
          k, 
          typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean' ? v : String(v)
        ])
      ) : undefined
    };
    
    this.events.push(event);
    
    // Keep only last 100 events
    if (this.events.length > 100) {
      this.events = this.events.slice(-100);
    }
    
    // Log critical events
    if (severity === 'critical') {
      console.error('🚨 Critical Security Event:', event);
      this.sendSecurityAlert(event);
    }
  }

  private async sendSecurityAlert(event: SecurityEvent): Promise<void> {
    try {
      await fetch('/api/security-alert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event)
      });
    } catch (error) {
      console.error('Failed to send security alert:', error);
    }
  }

  private calculateSecurityScore(): number {
    const criticalCount = this.events.filter(e => e.severity === 'critical').length;
    const highCount = this.events.filter(e => e.severity === 'high').length;
    const mediumCount = this.events.filter(e => e.severity === 'medium').length;
    
    let score = 100;
    score -= criticalCount * 25;
    score -= highCount * 10;
    score -= mediumCount * 5;
    
    return Math.max(0, score);
  }
}

export default AdvancedSecurityManager;
export type { SecurityEvent, SecurityConfig };