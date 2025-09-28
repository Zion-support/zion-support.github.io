/**
 * Enhanced Security Manager
 * Provides comprehensive security features and monitoring
 */

interface SecurityEvent {
  type: 'authentication' | 'authorization' | 'data_access' | 'api_call' | 'error';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  timestamp: Date;
  userId?: string;
  ipAddress?: string;
  userAgent?: string;
  metadata?: Record<string, any>;
}

interface SecurityPolicy {
  name: string;
  description: string;
  enabled: boolean;
  rules: SecurityRule[];
}

interface SecurityRule {
  id: string;
  condition: (event: SecurityEvent) => boolean;
  action: (event: SecurityEvent) => void;
  severity: 'low' | 'medium' | 'high' | 'critical';
}

class EnhancedSecurityManager {
  private events: SecurityEvent[] = [];
  private policies: SecurityPolicy[] = [];
  private isInitialized = false;
  private eventListeners: Map<string, (event: SecurityEvent) => void> = new Map();

  constructor() {
    this.initializeSecurityPolicies();
  }

  private initializeSecurityPolicies(): void {
    this.policies = [
      {
        name: 'Authentication Security',
        description: 'Monitor authentication attempts and failures',
        enabled: true,
        rules: [
          {
            id: 'auth_failure_threshold',
            condition: (event) => {
              if (event.type !== 'authentication') return false;
              const recentFailures = this.events.filter(e => 
                e.type === 'authentication' && 
                e.severity === 'high' &&
                e.timestamp > new Date(Date.now() - 15 * 60 * 1000) // 15 minutes
              );
              return recentFailures.length >= 5;
            },
            action: (event) => {
              this.triggerSecurityAlert('Multiple authentication failures detected', event);
            },
            severity: 'high'
          }
        ]
      },
      {
        name: 'Data Access Monitoring',
        description: 'Monitor sensitive data access patterns',
        enabled: true,
        rules: [
          {
            id: 'unusual_data_access',
            condition: (event) => {
              if (event.type !== 'data_access') return false;
              return event.metadata?.sensitive === true && !event.userId;
            },
            action: (event) => {
              this.triggerSecurityAlert('Unauthorized access to sensitive data', event);
            },
            severity: 'critical'
          }
        ]
      },
      {
        name: 'API Security',
        description: 'Monitor API usage and potential abuse',
        enabled: true,
        rules: [
          {
            id: 'api_rate_limiting',
            condition: (event) => {
              if (event.type !== 'api_call') return false;
              const recentCalls = this.events.filter(e => 
                e.type === 'api_call' &&
                e.timestamp > new Date(Date.now() - 60 * 1000) // 1 minute
              );
              return recentCalls.length >= 100;
            },
            action: (event) => {
              this.triggerSecurityAlert('API rate limit exceeded', event);
            },
            severity: 'medium'
          }
        ]
      }
    ];
  }

  public async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      this.setupSecurityHeaders();
      this.setupContentSecurityPolicy();
      this.setupEventListeners();
      this.startSecurityMonitoring();
      this.isInitialized = true;
      
      console.log('Enhanced Security Manager initialized successfully');
    } catch (error) {
      console.error('Failed to initialize Enhanced Security Manager:', error);
    }
  }

  private setupSecurityHeaders(): void {
    // Set security headers if running in browser
    if (typeof document !== 'undefined') {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'X-Content-Type-Options';
      meta.content = 'nosniff';
      document.head.appendChild(meta);

      const frameOptions = document.createElement('meta');
      frameOptions.httpEquiv = 'X-Frame-Options';
      frameOptions.content = 'DENY';
      document.head.appendChild(frameOptions);

      const xssProtection = document.createElement('meta');
      xssProtection.httpEquiv = 'X-XSS-Protection';
      xssProtection.content = '1; mode=block';
      document.head.appendChild(xssProtection);
    }
  }

  private setupContentSecurityPolicy(): void {
    // Set up CSP if running in browser
    if (typeof document !== 'undefined') {
      const csp = document.createElement('meta');
      csp.httpEquiv = 'Content-Security-Policy';
      csp.content = [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data: https:",
        "font-src 'self'",
        "connect-src 'self'",
        "frame-ancestors 'none'",
        "base-uri 'self'",
        "form-action 'self'"
      ].join('; ');
      document.head.appendChild(csp);
    }
  }

  private setupEventListeners(): void {
    if (typeof window !== 'undefined') {
      // Monitor for suspicious activities
      window.addEventListener('error', (event) => {
        this.logSecurityEvent({
          type: 'error',
          severity: 'medium',
          message: `JavaScript error: ${event.error?.message || 'Unknown error'}`,
          timestamp: new Date(),
          metadata: {
            filename: event.filename,
            lineno: event.lineno,
            colno: event.colno
          }
        });
      });

      // Monitor for potential XSS attempts
      const originalCreateElement = document.createElement;
      document.createElement = function(tagName: string) {
        const element = originalCreateElement.call(this, tagName);
        
        // Monitor for script injection attempts
        if (tagName.toLowerCase() === 'script') {
          console.warn('Script element created - monitoring for potential XSS');
        }
        
        return element;
      };

      // Monitor for suspicious network requests
      const originalFetch = window.fetch;
      window.fetch = async function(...args) {
        const url = typeof args[0] === 'string' ? args[0] : (args[0] as Request).url;
        
        // Log API calls for monitoring
        if (url.includes('/api/')) {
          console.log('API call monitored:', url);
        }
        
        return originalFetch.apply(this, args);
      };
    }
  }

  private startSecurityMonitoring(): void {
    // Start periodic security checks
    setInterval(() => {
      this.performSecurityScan();
    }, 60000); // Every minute

    // Clean up old events (keep last 24 hours)
    setInterval(() => {
      const cutoff = new Date(Date.now() - 24 * 60 * 60 * 1000);
      this.events = this.events.filter(event => event.timestamp > cutoff);
    }, 300000); // Every 5 minutes
  }

  private performSecurityScan(): void {
    // Check for suspicious patterns
    const recentEvents = this.events.filter(e => 
      e.timestamp > new Date(Date.now() - 60 * 1000)
    );

    // Check for multiple failed authentication attempts
    const authFailures = recentEvents.filter(e => 
      e.type === 'authentication' && e.severity === 'high'
    );

    if (authFailures.length >= 3) {
      this.triggerSecurityAlert('Multiple authentication failures in short time', {
        type: 'authentication',
        severity: 'high',
        message: 'Potential brute force attack detected',
        timestamp: new Date()
      });
    }

    // Check for unusual API usage
    const apiCalls = recentEvents.filter(e => e.type === 'api_call');
    if (apiCalls.length >= 50) {
      this.triggerSecurityAlert('Unusual API usage pattern detected', {
        type: 'api_call',
        severity: 'medium',
        message: 'High frequency API calls detected',
        timestamp: new Date()
      });
    }
  }

  public logSecurityEvent(event: SecurityEvent): void {
    this.events.push(event);
    
    // Apply security policies
    this.policies.forEach(policy => {
      if (policy.enabled) {
        policy.rules.forEach(rule => {
          if (rule.condition(event)) {
            rule.action(event);
          }
        });
      }
    });

    // Notify event listeners
    this.eventListeners.forEach(listener => {
      try {
        listener(event);
      } catch (error) {
        console.error('Error in security event listener:', error);
      }
    });

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Security Event:', event);
    }
  }

  private triggerSecurityAlert(message: string, event: SecurityEvent): void {
    const alert: SecurityEvent = {
      type: 'error',
      severity: event.severity,
      message,
      timestamp: new Date(),
      metadata: { originalEvent: event }
    };

    console.warn('Security Alert:', alert);
    
    // In a real application, you would send this to a security monitoring service
    // For now, we'll just log it
    this.logSecurityEvent(alert);
  }

  public addEventListener(eventType: string, listener: (event: SecurityEvent) => void): void {
    this.eventListeners.set(eventType, listener);
  }

  public removeEventListener(eventType: string): void {
    this.eventListeners.delete(eventType);
  }

  public getSecurityReport(): {
    totalEvents: number;
    eventsByType: Record<string, number>;
    eventsBySeverity: Record<string, number>;
    recentEvents: SecurityEvent[];
    activePolicies: number;
  } {
    const eventsByType = this.events.reduce((acc, event) => {
      acc[event.type] = (acc[event.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const eventsBySeverity = this.events.reduce((acc, event) => {
      acc[event.severity] = (acc[event.severity] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const recentEvents = this.events
      .filter(e => e.timestamp > new Date(Date.now() - 60 * 60 * 1000)) // Last hour
      .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
      .slice(0, 10);

    return {
      totalEvents: this.events.length,
      eventsByType,
      eventsBySeverity,
      recentEvents,
      activePolicies: this.policies.filter(p => p.enabled).length
    };
  }

  public getSecurityScore(): number {
    const report = this.getSecurityReport();
    let score = 100;

    // Deduct points for high severity events
    score -= (report.eventsBySeverity.critical || 0) * 20;
    score -= (report.eventsBySeverity.high || 0) * 10;
    score -= (report.eventsBySeverity.medium || 0) * 5;
    score -= (report.eventsBySeverity.low || 0) * 1;

    // Add points for active security policies
    score += report.activePolicies * 5;

    return Math.max(0, Math.min(100, score));
  }
}

export const enhancedSecurityManager = new EnhancedSecurityManager();
export default EnhancedSecurityManager;