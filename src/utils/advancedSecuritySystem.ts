/**
 * Advanced Security System for Comprehensive Application Protection
 */

export interface SecurityThreat {
  id: string;
  type: 'xss' | 'csrf' | 'injection' | 'data_leak' | 'unauthorized_access' | 'malware' | 'phishing' | 'brute_force';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  timestamp: number;
  source: string;
  target: string;
  metadata: Record<string, string | number | boolean>;
  blocked: boolean;
  action: 'block' | 'monitor' | 'alert' | 'quarantine';
}

export interface SecurityPolicy {
  id: string;
  name: string;
  description: string;
  rules: SecurityRule[];
  enabled: boolean;
  priority: number;
}

export interface SecurityRule {
  id: string;
  type: 'content_security' | 'xss_protection' | 'csrf_protection' | 'data_validation' | 'access_control';
  condition: string;
  action: 'block' | 'allow' | 'monitor' | 'sanitize';
  severity: 'low' | 'medium' | 'high' | 'critical';
}

export interface SecurityMetrics {
  totalThreats: number;
  blockedThreats: number;
  threatsByType: Record<string, number>;
  threatsBySeverity: Record<string, number>;
  lastThreatTime: number;
  securityScore: number;
}

class AdvancedSecuritySystem {
  private threats: Map<string, SecurityThreat> = new Map();
  private policies: Map<string, SecurityPolicy> = new Map();
  private metrics: SecurityMetrics = {
    totalThreats: 0,
    blockedThreats: 0,
    threatsByType: {},
    threatsBySeverity: {},
    lastThreatTime: 0,
    securityScore: 100
  };
  private maxThreats = 10000;
  private reportEndpoint = '/api/security-reporting';

  constructor() {
    this.initializeSecuritySystem();
    this.setupDefaultPolicies();
  }

  private initializeSecuritySystem(): void {
    // Content Security Policy
    this.setupContentSecurityPolicy();
    
    // XSS Protection
    this.setupXSSProtection();
    
    // CSRF Protection
    this.setupCSRFProtection();
    
    // Data Validation
    this.setupDataValidation();
    
    // Access Control
    this.setupAccessControl();
    
    // Threat Monitoring
    this.setupThreatMonitoring();
  }

  private setupContentSecurityPolicy(): void {
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self'",
      "connect-src 'self'",
      "media-src 'self'",
      "object-src 'none'",
      "child-src 'self'",
      "frame-ancestors 'none'",
      "form-action 'self'",
      "base-uri 'self'"
    ].join('; ');

    const meta = document.createElement('meta');
    meta.httpEquiv = 'Content-Security-Policy';
    meta.content = csp;
    document.head.appendChild(meta);
  }

  private setupXSSProtection(): void {
    // XSS Protection Header
    const meta = document.createElement('meta');
    meta.httpEquiv = 'X-XSS-Protection';
    meta.content = '1; mode=block';
    document.head.appendChild(meta);

    // Input sanitization
    this.setupInputSanitization();
    
    // Output encoding
    this.setupOutputEncoding();
  }

  private setupInputSanitization(): void {
    // Monitor form inputs for malicious content
    document.addEventListener('input', (event) => {
      const target = event.target as HTMLInputElement | HTMLTextAreaElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        this.validateInput(target.value, target.name || 'unknown');
      }
    });
  }

  private setupOutputEncoding(): void {
    // Override innerHTML to prevent XSS
    const originalInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML') || 
                             Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'innerHTML');
    
    if (originalInnerHTML) {
      Object.defineProperty(Element.prototype, 'innerHTML', {
        set: function(value: string) {
          const sanitizedValue = this.sanitizeHTML(value);
          originalInnerHTML.set?.call(this, sanitizedValue);
        },
        get: originalInnerHTML.get,
        configurable: true
      });
    }
  }

  private setupCSRFProtection(): void {
    // Generate CSRF token
    const csrfToken = this.generateCSRFToken();
    sessionStorage.setItem('csrf-token', csrfToken);

    // Add CSRF token to forms
    this.addCSRFTokenToForms(csrfToken);
    
    // Validate CSRF token on form submissions
    this.validateCSRFToken();
  }

  private generateCSRFToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }

  private addCSRFTokenToForms(token: string): void {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      const existingToken = form.querySelector('input[name="csrf-token"]');
      if (!existingToken) {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = 'csrf-token';
        input.value = token;
        form.appendChild(input);
      }
    });
  }

  private validateCSRFToken(): void {
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      const formToken = form.querySelector('input[name="csrf-token"]') as HTMLInputElement;
      const sessionToken = sessionStorage.getItem('csrf-token');
      
      if (formToken && sessionToken && formToken.value !== sessionToken) {
        event.preventDefault();
        this.reportThreat({
          type: 'csrf',
          severity: 'high',
          description: 'CSRF token validation failed',
          source: 'form_submission',
          target: form.action || 'unknown',
          blocked: true,
          action: 'block'
        });
      }
    });
  }

  private setupDataValidation(): void {
    // Validate data before processing
    this.setupFormValidation();
    this.setupURLValidation();
    this.setupFileValidation();
  }

  private setupFormValidation(): void {
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      
      for (const [key, value] of formData.entries()) {
        if (typeof value === 'string') {
          this.validateData(value, key);
        }
      }
    });
  }

  private setupURLValidation(): void {
    // Monitor URL changes for malicious patterns
    let currentUrl = window.location.href;
    
    setInterval(() => {
      if (window.location.href !== currentUrl) {
        this.validateURL(window.location.href);
        currentUrl = window.location.href;
      }
    }, 1000);
  }

  private setupFileValidation(): void {
    // Validate file uploads
    document.addEventListener('change', (event) => {
      const target = event.target as HTMLInputElement;
      if (target.type === 'file' && target.files) {
        Array.from(target.files).forEach(file => {
          this.validateFile(file);
        });
      }
    });
  }

  private setupAccessControl(): void {
    // Monitor for unauthorized access attempts
    this.monitorUnauthorizedAccess();
    this.setupSessionManagement();
    this.setupPermissionChecks();
  }

  private monitorUnauthorizedAccess(): void {
    // Monitor for suspicious patterns
    window.addEventListener('beforeunload', () => {
      this.validateSession();
    });
  }

  private setupSessionManagement(): void {
    // Session timeout
    let lastActivity = Date.now();
    const sessionTimeout = 30 * 60 * 1000; // 30 minutes
    
    const resetTimer = () => {
      lastActivity = Date.now();
    };
    
    ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
      document.addEventListener(event, resetTimer, true);
    });
    
    setInterval(() => {
      if (Date.now() - lastActivity > sessionTimeout) {
        this.handleSessionTimeout();
      }
    }, 60000); // Check every minute
  }

  private setupPermissionChecks(): void {
    // Check permissions before sensitive operations
    this.checkGeolocationPermission();
    this.checkCameraPermission();
    this.checkMicrophonePermission();
  }

  private checkGeolocationPermission(): void {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        () => {}, // Success - permission granted
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            this.reportThreat({
              type: 'unauthorized_access',
              severity: 'low',
              description: 'Geolocation permission denied',
              source: 'geolocation_api',
              target: 'user_location',
              blocked: false,
              action: 'monitor'
            });
          }
        }
      );
    }
  }

  private checkCameraPermission(): void {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(() => {}) // Permission granted
        .catch((error) => {
          if (error.name === 'NotAllowedError') {
            this.reportThreat({
              type: 'unauthorized_access',
              severity: 'low',
              description: 'Camera permission denied',
              source: 'camera_api',
              target: 'user_camera',
              blocked: false,
              action: 'monitor'
            });
          }
        });
    }
  }

  private checkMicrophonePermission(): void {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(() => {}) // Permission granted
        .catch((error) => {
          if (error.name === 'NotAllowedError') {
            this.reportThreat({
              type: 'unauthorized_access',
              severity: 'low',
              description: 'Microphone permission denied',
              source: 'microphone_api',
              target: 'user_microphone',
              blocked: false,
              action: 'monitor'
            });
          }
        });
    }
  }

  private setupThreatMonitoring(): void {
    // Monitor for various security threats
    this.monitorMaliciousScripts();
    this.monitorDataExfiltration();
    this.monitorBruteForceAttacks();
  }

  private monitorMaliciousScripts(): void {
    // Monitor script execution
    const originalEval = window.eval;
    window.eval = (code: string) => {
      if (this.isMaliciousScript(code)) {
        this.reportThreat({
          type: 'xss',
          severity: 'critical',
          description: 'Malicious script execution attempt',
          source: 'eval_function',
          target: 'window_object',
          blocked: true,
          action: 'block'
        });
        return;
      }
      return originalEval.call(window, code);
    };
  }

  private monitorDataExfiltration(): void {
    // Monitor for data exfiltration attempts
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const url = args[0] as string;
      if (this.isSuspiciousURL(url)) {
        this.reportThreat({
          type: 'data_leak',
          severity: 'high',
          description: 'Suspicious data exfiltration attempt',
          source: 'fetch_api',
          target: url,
          blocked: true,
          action: 'block'
        });
        throw new Error('Blocked suspicious request');
      }
      return originalFetch(...args);
    };
  }

  private monitorBruteForceAttacks(): void {
    // Monitor for brute force attacks
    let failedAttempts = 0;
    const maxAttempts = 5;
    const timeWindow = 5 * 60 * 1000; // 5 minutes
    
    document.addEventListener('submit', (event) => {
      const form = event.target as HTMLFormElement;
      if (form.querySelector('input[type="password"]')) {
        // This is a login form - monitor for brute force
        failedAttempts++;
        
        if (failedAttempts > maxAttempts) {
          this.reportThreat({
            type: 'brute_force',
            severity: 'high',
            description: 'Potential brute force attack detected',
            source: 'login_form',
            target: 'user_authentication',
            blocked: true,
            action: 'block'
          });
          
          setTimeout(() => {
            failedAttempts = 0; // Reset after time window
          }, timeWindow);
        }
      }
    });
  }

  private setupDefaultPolicies(): void {
    // Add default security policies
    this.addPolicy({
      id: 'xss-protection',
      name: 'XSS Protection',
      description: 'Protect against Cross-Site Scripting attacks',
      rules: [
        {
          id: 'sanitize-input',
          type: 'xss_protection',
          condition: 'input_contains_script',
          action: 'sanitize',
          severity: 'high'
        }
      ],
      enabled: true,
      priority: 1
    });

    this.addPolicy({
      id: 'csrf-protection',
      name: 'CSRF Protection',
      description: 'Protect against Cross-Site Request Forgery',
      rules: [
        {
          id: 'validate-token',
          type: 'csrf_protection',
          condition: 'missing_csrf_token',
          action: 'block',
          severity: 'high'
        }
      ],
      enabled: true,
      priority: 1
    });
  }

  // Public methods
  public addPolicy(policy: SecurityPolicy): void {
    this.policies.set(policy.id, policy);
  }

  public removePolicy(policyId: string): void {
    this.policies.delete(policyId);
  }

  public getPolicy(policyId: string): SecurityPolicy | undefined {
    return this.policies.get(policyId);
  }

  public getAllPolicies(): SecurityPolicy[] {
    return Array.from(this.policies.values()).sort((a, b) => b.priority - a.priority);
  }

  public reportThreat(threatInfo: Omit<SecurityThreat, 'id' | 'timestamp' | 'metadata'>): void {
    const threat: SecurityThreat = {
      id: this.generateThreatId(),
      timestamp: Date.now(),
      metadata: {},
      ...threatInfo
    };

    this.threats.set(threat.id, threat);
    this.updateMetrics(threat);

    // Apply security policies
    this.applySecurityPolicies(threat);

    // Log threat
    console.warn('Security Threat Detected:', threat);

    // Send to server
    this.sendThreatReport(threat);

    // Clean up old threats
    if (this.threats.size > this.maxThreats) {
      const oldestThreat = Array.from(this.threats.entries())
        .sort(([, a], [, b]) => a.timestamp - b.timestamp)[0];
      this.threats.delete(oldestThreat[0]);
    }
  }

  private generateThreatId(): string {
    return `threat_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private updateMetrics(threat: SecurityThreat): void {
    this.metrics.totalThreats++;
    
    if (threat.blocked) {
      this.metrics.blockedThreats++;
    }

    this.metrics.threatsByType[threat.type] = (this.metrics.threatsByType[threat.type] || 0) + 1;
    this.metrics.threatsBySeverity[threat.severity] = (this.metrics.threatsBySeverity[threat.severity] || 0) + 1;
    this.metrics.lastThreatTime = threat.timestamp;

    // Calculate security score
    const blockedRatio = this.metrics.blockedThreats / this.metrics.totalThreats;
    this.metrics.securityScore = Math.round(blockedRatio * 100);
  }

  private applySecurityPolicies(threat: SecurityThreat): void {
    const policies = this.getAllPolicies();
    
    for (const policy of policies) {
      if (!policy.enabled) continue;
      
      for (const rule of policy.rules) {
        if (this.evaluateRule(rule, threat)) {
          this.executeAction(rule.action, threat);
        }
      }
    }
  }

  private evaluateRule(rule: SecurityRule, threat: SecurityThreat): boolean {
    // Simple rule evaluation - in a real system, this would be more sophisticated
    switch (rule.type) {
      case 'xss_protection':
        return threat.type === 'xss';
      case 'csrf_protection':
        return threat.type === 'csrf';
      case 'data_validation':
        return threat.type === 'injection';
      default:
        return false;
    }
  }

  private executeAction(action: SecurityRule['action'], threat: SecurityThreat): void {
    switch (action) {
      case 'block':
        threat.blocked = true;
        threat.action = 'block';
        break;
      case 'monitor':
        threat.action = 'monitor';
        break;
      case 'monitor':
        this.sendAlert(threat);
        break;
      case 'sanitize':
        this.sanitizeThreat(threat);
        break;
    }
  }

  private sendAlert(threat: SecurityThreat): void {
    // Send security alert
    console.error('SECURITY ALERT:', threat);
  }

  private sanitizeThreat(threat: SecurityThreat): void {
    // Sanitize the threat
    threat.description = this.sanitizeHTML(threat.description);
  }

  private sanitizeHTML(input: string): string {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
  }

  private async sendThreatReport(threat: SecurityThreat): Promise<void> {
    try {
      await fetch(this.reportEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(threat),
      });
    } catch (error) {
      console.error('Failed to send threat report:', error);
    }
  }

  // Validation methods
  private validateInput(input: string, fieldName: string): boolean {
    const maliciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /eval\s*\(/i,
      /expression\s*\(/i
    ];

    for (const pattern of maliciousPatterns) {
      if (pattern.test(input)) {
        this.reportThreat({
          type: 'xss',
          severity: 'high',
          description: `Malicious input detected in ${fieldName}`,
          source: fieldName,
          target: 'form_input',
          blocked: true,
          action: 'block'
        });
        return false;
      }
    }
    return true;
  }

  private validateData(data: string, fieldName: string): boolean {
    return this.validateInput(data, fieldName);
  }

  private validateURL(url: string): boolean {
    const suspiciousPatterns = [
      /javascript:/i,
      /data:/i,
      /vbscript:/i,
      /file:/i
    ];

    for (const pattern of suspiciousPatterns) {
      if (pattern.test(url)) {
        this.reportThreat({
          type: 'xss',
          severity: 'medium',
          description: 'Suspicious URL detected',
          source: 'url_validation',
          target: url,
          blocked: true,
          action: 'block'
        });
        return false;
      }
    }
    return true;
  }

  private validateFile(file: File): boolean {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'text/plain', 'application/pdf'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    if (!allowedTypes.includes(file.type)) {
      this.reportThreat({
        type: 'malware',
        severity: 'medium',
        description: `Suspicious file type: ${file.type}`,
        source: 'file_upload',
        target: file.name,
        blocked: true,
        action: 'block'
      });
      return false;
    }

    if (file.size > maxSize) {
      this.reportThreat({
        type: 'data_leak',
        severity: 'low',
        description: `File too large: ${file.size} bytes`,
        source: 'file_upload',
        target: file.name,
        blocked: true,
        action: 'block'
      });
      return false;
    }

    return true;
  }

  private isMaliciousScript(code: string): boolean {
    const maliciousPatterns = [
      /document\.cookie/i,
      /localStorage/i,
      /sessionStorage/i,
      /window\.location/i,
      /document\.write/i,
      /innerHTML/i,
      /outerHTML/i
    ];

    return maliciousPatterns.some(pattern => pattern.test(code));
  }

  private isSuspiciousURL(url: string): boolean {
    const suspiciousDomains = [
      'malicious-site.com',
      'phishing-site.com',
      'data-exfiltrator.com'
    ];

    return suspiciousDomains.some(domain => url.includes(domain));
  }

  private validateSession(): boolean {
    const sessionToken = sessionStorage.getItem('session-token');
    if (!sessionToken) {
      this.reportThreat({
        type: 'unauthorized_access',
        severity: 'medium',
        description: 'Invalid session token',
        source: 'session_validation',
        target: 'user_session',
        blocked: true,
        action: 'block'
      });
      return false;
    }
    return true;
  }

  private handleSessionTimeout(): void {
    this.reportThreat({
      type: 'unauthorized_access',
      severity: 'low',
      description: 'Session timeout',
      source: 'session_management',
      target: 'user_session',
      blocked: false,
      action: 'monitor'
    });
    
    // Clear session data
    sessionStorage.clear();
    localStorage.clear();
  }

  // Public getters
  public getMetrics(): SecurityMetrics {
    return { ...this.metrics };
  }

  public getThreats(): SecurityThreat[] {
    return Array.from(this.threats.values()).sort((a, b) => b.timestamp - a.timestamp);
  }

  public getThreatsByType(type: SecurityThreat['type']): SecurityThreat[] {
    return this.getThreats().filter(threat => threat.type === type);
  }

  public getThreatsBySeverity(severity: SecurityThreat['severity']): SecurityThreat[] {
    return this.getThreats().filter(threat => threat.severity === severity);
  }

  public getBlockedThreats(): SecurityThreat[] {
    return this.getThreats().filter(threat => threat.blocked);
  }

  public clearThreats(): void {
    this.threats.clear();
    this.metrics = {
      totalThreats: 0,
      blockedThreats: 0,
      threatsByType: {},
      threatsBySeverity: {},
      lastThreatTime: 0,
      securityScore: 100
    };
  }

  public exportSecurityReport(): string {
    return JSON.stringify({
      timestamp: Date.now(),
      metrics: this.metrics,
      policies: this.getAllPolicies(),
      threats: this.getThreats()
    }, null, 2);
  }
}

// Singleton instance
export const securitySystem = new AdvancedSecuritySystem();

// Convenience functions
export const reportThreat = (threatInfo: Omit<SecurityThreat, 'id' | 'timestamp' | 'metadata'>) => {
  securitySystem.reportThreat(threatInfo);
};

export const getSecurityMetrics = () => securitySystem.getMetrics();
export const getThreats = () => securitySystem.getThreats();
export const getBlockedThreats = () => securitySystem.getBlockedThreats();
export const clearThreats = () => securitySystem.clearThreats();
export const exportSecurityReport = () => securitySystem.exportSecurityReport();