// Comprehensive Enhancement Suite
// Integrates performance, security, and accessibility improvements

import { PerformanceOptimizer } from './performanceOptimizer';
import { SecurityEnhancer } from './securityEnhancer';
import { AccessibilityEnhancer } from './accessibilityEnhancer';
import { ErrorHandler } from './errorHandling';

interface EnhancementConfig {
  performance: {
    enableLazyLoading: boolean;
    enableImageOptimization: boolean;
    enableCodeSplitting: boolean;
    enableServiceWorker: boolean;
    enablePrefetching: boolean;
  };
  security: {
    enableCSP: boolean;
    enableXSSProtection: boolean;
    enableClickjackingProtection: boolean;
    enableSecureHeaders: boolean;
    enableInputSanitization: boolean;
    enableRateLimiting: boolean;
  };
  accessibility: {
    enableKeyboardNavigation: boolean;
    enableScreenReaderSupport: boolean;
    enableHighContrast: boolean;
    enableFocusManagement: boolean;
    enableAriaEnhancements: boolean;
    enableMotionReduction: boolean;
  };
  errorHandling: {
    enableGlobalErrorHandling: boolean;
    enablePerformanceMonitoring: boolean;
    enableUserFeedback: boolean;
    maxErrors: number;
  };
}

interface SystemMetrics {
  performance: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number;
  };
  security: {
    violationCount: number;
    lastViolation: Date | null;
    rateLimitHits: number;
  };
  accessibility: {
    violationCount: number;
    lastAudit: Date | null;
    complianceScore: number;
  };
  errors: {
    totalErrors: number;
    criticalErrors: number;
    lastError: Date | null;
  };
}

export class EnhancementSuite {
  private static instance: EnhancementSuite;
  private config: EnhancementConfig;
  private performanceOptimizer: PerformanceOptimizer;
  private securityEnhancer: SecurityEnhancer;
  private accessibilityEnhancer: AccessibilityEnhancer;
  private errorHandler: ErrorHandler;
  private metricsInterval: NodeJS.Timeout | null = null;

  private constructor(config: Partial<EnhancementConfig> = {}) {
    this.performanceOptimizer = PerformanceOptimizer.getInstance();
    this.securityEnhancer = SecurityEnhancer.getInstance();
    this.accessibilityEnhancer = AccessibilityEnhancer.getInstance();
    this.errorHandler = ErrorHandler.getInstance();
    
    this.config = {
      performance: {
        enableLazyLoading: true,
        enableImageOptimization: true,
        enableCodeSplitting: true,
        enableServiceWorker: true,
        enablePrefetching: true,
        ...config.performance
      },
      security: {
        enableCSP: true,
        enableXSSProtection: true,
        enableClickjackingProtection: true,
        enableSecureHeaders: true,
        enableInputSanitization: true,
        enableRateLimiting: true,
        ...config.security
      },
      accessibility: {
        enableKeyboardNavigation: true,
        enableScreenReaderSupport: true,
        enableHighContrast: true,
        enableFocusManagement: true,
        enableAriaEnhancements: true,
        enableMotionReduction: true,
        ...config.accessibility
      },
      errorHandling: {
        enableGlobalErrorHandling: true,
        enablePerformanceMonitoring: true,
        enableUserFeedback: true,
        maxErrors: 100,
        ...config.errorHandling
      }
    };

    this.initialize();
  }

  public static getInstance(config?: Partial<EnhancementConfig>): EnhancementSuite {
    if (!EnhancementSuite.instance) {
      EnhancementSuite.instance = new EnhancementSuite(config);
    }
    return EnhancementSuite.instance;
  }

  private initialize(): void {
    // Initialize all enhancement modules
    this.performanceOptimizer = PerformanceOptimizer.getInstance(this.config.performance);
    this.securityEnhancer = SecurityEnhancer.getInstance(this.config.security);
    this.accessibilityEnhancer = AccessibilityEnhancer.getInstance(this.config.accessibility);
    this.errorHandler = ErrorHandler.getInstance();

    // Initialize error handler
    if (this.config.errorHandling.enableGlobalErrorHandling) {
      this.errorHandler.initialize();
    }

    // Start metrics collection
    this.startMetricsCollection();

    // Setup cross-module integrations
    this.setupIntegrations();

    // Log initialization
    console.log('🚀 Enhancement Suite initialized with:', {
      performance: Object.keys(this.config.performance).filter(key => 
        this.config.performance[key as keyof typeof this.config.performance]
      ),
      security: Object.keys(this.config.security).filter(key => 
        this.config.security[key as keyof typeof this.config.security]
      ),
      accessibility: Object.keys(this.config.accessibility).filter(key => 
        this.config.accessibility[key as keyof typeof this.config.accessibility]
      ),
      errorHandling: Object.keys(this.config.errorHandling).filter(key => 
        this.config.errorHandling[key as keyof typeof this.config.errorHandling]
      )
    });
  }

  private setupIntegrations(): void {
    // Integration between security and error handling
    // Report security violations as errors
    const originalReportViolation = this.securityEnhancer['reportSecurityViolation'];
    this.securityEnhancer['reportSecurityViolation'] = (violation: {
      type: string;
      description: string;
      timestamp: number;
      url: string;
      userAgent: string;
      blocked: boolean;
    }) => {
      originalReportViolation.call(this.securityEnhancer, violation);
      
      // Also report as an error
      const error = new Error(`Security violation: ${violation.description}`);
      this.errorHandler.captureError(error, {
        securityViolation: true,
        violationType: violation.type,
        timestamp: violation.timestamp
      });
    };

    // Integration between accessibility and error handling
    // Report accessibility violations as warnings
    const originalReportAccessibilityViolation = this.accessibilityEnhancer['reportViolation'];
    this.accessibilityEnhancer['reportViolation'] = (violation: {
      type: string;
      element: string;
      description: string;
      severity: 'low' | 'medium' | 'high' | 'critical';
      timestamp: number;
    }) => {
      originalReportAccessibilityViolation.call(this.accessibilityEnhancer, violation);
      
      if (violation.severity === 'critical' || violation.severity === 'high') {
        const error = new Error(`Accessibility violation: ${violation.description}`);
        this.errorHandler.captureError(error, {
          accessibilityViolation: true,
          severity: violation.severity,
          element: violation.element
        });
      }
    };

    // Integration between performance and error handling
    // Report performance issues as errors
    const originalReportMetric = this.performanceOptimizer['reportMetric'];
    this.performanceOptimizer['reportMetric'] = (name: string, value: number) => {
      originalReportMetric.call(this.performanceOptimizer, name, value);
      
      // Report performance issues
      if (name === 'LCP' && value > 2500) {
        const error = new Error(`Poor LCP performance: ${value}ms`);
        this.errorHandler.captureError(error, {
          performanceIssue: true,
          metric: name,
          value: value
        });
      }
      
      if (name === 'FID' && value > 100) {
        const error = new Error(`Poor FID performance: ${value}ms`);
        this.errorHandler.captureError(error, {
          performanceIssue: true,
          metric: name,
          value: value
        });
      }
      
      if (name === 'CLS' && value > 0.1) {
        const error = new Error(`Poor CLS performance: ${value}`);
        this.errorHandler.captureError(error, {
          performanceIssue: true,
          metric: name,
          value: value
        });
      }
    };
  }

  private startMetricsCollection(): void {
    // Collect metrics every 30 seconds
    this.metricsInterval = setInterval(() => {
      this.collectAndReportMetrics();
    }, 30000);
  }

  private collectAndReportMetrics(): void {
    const metrics = this.getSystemMetrics();
    
    // Log metrics in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 System Metrics:', metrics);
    }
    
    // Send metrics to analytics in production
    if (process.env.NODE_ENV === 'production') {
      this.sendMetricsToAnalytics(metrics);
    }
    
    // Check for critical issues
    this.checkCriticalIssues(metrics);
  }

  private sendMetricsToAnalytics(metrics: SystemMetrics): void {
    // Send to analytics service
    if ('gtag' in window) {
      const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag;
      
      // Performance metrics
      gtag?.('event', 'performance_metrics', {
        event_category: 'System Health',
        fcp: metrics.performance.fcp,
        lcp: metrics.performance.lcp,
        fid: metrics.performance.fid,
        cls: metrics.performance.cls,
        ttfb: metrics.performance.ttfb
      });
      
      // Security metrics
      gtag?.('event', 'security_metrics', {
        event_category: 'System Health',
        violation_count: metrics.security.violationCount,
        rate_limit_hits: metrics.security.rateLimitHits
      });
      
      // Accessibility metrics
      gtag?.('event', 'accessibility_metrics', {
        event_category: 'System Health',
        violation_count: metrics.accessibility.violationCount,
        compliance_score: metrics.accessibility.complianceScore
      });
      
      // Error metrics
      gtag?.('event', 'error_metrics', {
        event_category: 'System Health',
        total_errors: metrics.errors.totalErrors,
        critical_errors: metrics.errors.criticalErrors
      });
    }
  }

  private checkCriticalIssues(metrics: SystemMetrics): void {
    const issues: string[] = [];
    
    // Performance issues
    if (metrics.performance.lcp > 4000) {
      issues.push(`Critical LCP performance: ${metrics.performance.lcp}ms`);
    }
    
    if (metrics.performance.cls > 0.25) {
      issues.push(`Critical CLS performance: ${metrics.performance.cls}`);
    }
    
    // Security issues
    if (metrics.security.violationCount > 10) {
      issues.push(`High security violation count: ${metrics.security.violationCount}`);
    }
    
    // Accessibility issues
    if (metrics.accessibility.complianceScore < 0.7) {
      issues.push(`Low accessibility compliance: ${Math.round(metrics.accessibility.complianceScore * 100)}%`);
    }
    
    // Error issues
    if (metrics.errors.criticalErrors > 5) {
      issues.push(`High critical error count: ${metrics.errors.criticalErrors}`);
    }
    
    // Report critical issues
    if (issues.length > 0) {
      console.error('🚨 Critical System Issues Detected:', issues);
      
      // Send alert in production
      if (process.env.NODE_ENV === 'production') {
        this.sendCriticalAlert(issues);
      }
    }
  }

  private async sendCriticalAlert(issues: string[]): Promise<void> {
    try {
      await fetch('/api/alerts/critical', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          timestamp: Date.now(),
          issues: issues,
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      });
    } catch (error) {
      console.error('Failed to send critical alert:', error);
    }
  }

  public getSystemMetrics(): SystemMetrics {
    const performanceMetrics = this.performanceOptimizer.getMetrics();
    const securityViolations = this.securityEnhancer.getViolations();
    const accessibilityViolations = this.accessibilityEnhancer.getViolations();
    const errors = this.errorHandler.getErrors();
    
    return {
      performance: {
        fcp: performanceMetrics.fcp || 0,
        lcp: performanceMetrics.lcp || 0,
        fid: performanceMetrics.fid || 0,
        cls: performanceMetrics.cls || 0,
        ttfb: performanceMetrics.ttfb || 0
      },
      security: {
        violationCount: securityViolations.length,
        lastViolation: securityViolations.length > 0 ? 
          new Date(securityViolations[securityViolations.length - 1].timestamp) : null,
        rateLimitHits: securityViolations.filter(v => v.type === 'Rate Limiting').length
      },
      accessibility: {
        violationCount: accessibilityViolations.length,
        lastAudit: new Date(),
        complianceScore: this.calculateComplianceScore(accessibilityViolations)
      },
      errors: {
        totalErrors: errors.size,
        criticalErrors: Array.from(errors.values()).filter((e: { severity?: string }) => e.severity === 'critical').length,
        lastError: errors.size > 0 ? 
          new Date(Math.max(...Array.from(errors.values()).map((e: { lastSeen?: number }) => e.lastSeen || 0))) : null
      }
    };
  }

  private calculateComplianceScore(violations: Array<{ severity: string }>): number {
    if (violations.length === 0) return 1.0;
    
    const weights = {
      critical: 1.0,
      high: 0.7,
      medium: 0.4,
      low: 0.1
    };
    
    const totalWeight = violations.reduce((sum, violation) => {
      return sum + (weights[violation.severity as keyof typeof weights] || 0.1);
    }, 0);
    
    // Calculate score (higher violations = lower score)
    const maxPossibleWeight = violations.length * 1.0;
    return Math.max(0, 1 - (totalWeight / maxPossibleWeight));
  }

  public generateHealthReport(): {
    overall: 'excellent' | 'good' | 'fair' | 'poor';
    performance: number;
    security: number;
    accessibility: number;
    reliability: number;
    recommendations: string[];
  } {
    const metrics = this.getSystemMetrics();
    const recommendations: string[] = [];
    
    // Performance score (0-100)
    let performanceScore = 100;
    if (metrics.performance.lcp > 2500) performanceScore -= 20;
    if (metrics.performance.fid > 100) performanceScore -= 15;
    if (metrics.performance.cls > 0.1) performanceScore -= 15;
    if (metrics.performance.fcp > 1800) performanceScore -= 10;
    
    if (performanceScore < 80) {
      recommendations.push('Optimize performance metrics (LCP, FID, CLS)');
    }
    
    // Security score (0-100)
    let securityScore = 100;
    securityScore -= Math.min(50, metrics.security.violationCount * 5);
    securityScore -= Math.min(30, metrics.security.rateLimitHits * 3);
    
    if (securityScore < 80) {
      recommendations.push('Address security violations and improve protection');
    }
    
    // Accessibility score (0-100)
    const accessibilityScore = Math.round(metrics.accessibility.complianceScore * 100);
    
    if (accessibilityScore < 80) {
      recommendations.push('Improve accessibility compliance');
    }
    
    // Reliability score (0-100)
    let reliabilityScore = 100;
    reliabilityScore -= Math.min(40, metrics.errors.totalErrors * 2);
    reliabilityScore -= Math.min(40, metrics.errors.criticalErrors * 10);
    
    if (reliabilityScore < 80) {
      recommendations.push('Reduce error rates and improve stability');
    }
    
    // Overall score
    const overallScore = (performanceScore + securityScore + accessibilityScore + reliabilityScore) / 4;
    
    let overall: 'excellent' | 'good' | 'fair' | 'poor';
    if (overallScore >= 90) overall = 'excellent';
    else if (overallScore >= 75) overall = 'good';
    else if (overallScore >= 60) overall = 'fair';
    else overall = 'poor';
    
    return {
      overall,
      performance: performanceScore,
      security: securityScore,
      accessibility: accessibilityScore,
      reliability: reliabilityScore,
      recommendations
    };
  }

  public optimizeAll(): void {
    console.log('🔧 Running comprehensive optimization...');
    
    // Performance optimizations
    this.performanceOptimizer.optimizeBundle();
    
    // Clear old violations and errors
    this.securityEnhancer.clearViolations();
    this.accessibilityEnhancer.clearViolations();
    this.errorHandler.clearErrors();
    
    console.log('✅ Comprehensive optimization completed');
  }

  public cleanup(): void {
    if (this.metricsInterval) {
      clearInterval(this.metricsInterval);
      this.metricsInterval = null;
    }
    
    this.performanceOptimizer.cleanup();
    this.securityEnhancer.cleanup();
    this.accessibilityEnhancer.cleanup();
    this.errorHandler.cleanup();
  }
}

// Utility functions
export const initializeEnhancements = (config?: Partial<EnhancementConfig>) => {
  return EnhancementSuite.getInstance(config);
};

export const getSystemHealth = () => {
  const suite = EnhancementSuite.getInstance();
  return suite.generateHealthReport();
};

export const optimizeSystem = () => {
  const suite = EnhancementSuite.getInstance();
  suite.optimizeAll();
};

// Initialize enhancement suite
export const enhancementSuite = EnhancementSuite.getInstance();