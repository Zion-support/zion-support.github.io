/**
 * Advanced Performance Analytics System
 * Comprehensive performance monitoring and analytics for the Zion Tech Group website
 */

export interface PerformanceMetrics {
  // Core Web Vitals
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  fcp: number; // First Contentful Paint
  ttfb: number; // Time to First Byte
  
  // Additional Performance Metrics
  fmp: number; // First Meaningful Paint
  si: number; // Speed Index
  tti: number; // Time to Interactive
  tbt: number; // Total Blocking Time
  
  // Resource Metrics
  resourceCount: number;
  resourceSize: number;
  domNodes: number;
  memoryUsage: number;
  
  // User Experience Metrics
  bounceRate: number;
  sessionDuration: number;
  pageViews: number;
  userEngagement: number;
}

export interface PerformanceAlert {
  id: string;
  type: 'warning' | 'error' | 'info';
  metric: keyof PerformanceMetrics;
  threshold: number;
  currentValue: number;
  message: string;
  timestamp: Date;
  resolved: boolean;
}

export interface PerformanceReport {
  timestamp: Date;
  metrics: PerformanceMetrics;
  alerts: PerformanceAlert[];
  recommendations: string[];
  score: number; // 0-100 performance score
}

class AdvancedPerformanceAnalytics {
  private metrics: PerformanceMetrics;
  private alerts: PerformanceAlert[] = [];
  private observers: PerformanceObserver[] = [];
  private reportHistory: PerformanceReport[] = [];
  private alertThresholds: Record<keyof PerformanceMetrics, number> = {
    lcp: 2500, // Good: < 2.5s, Needs Improvement: 2.5-4s, Poor: > 4s
    fid: 100,  // Good: < 100ms, Needs Improvement: 100-300ms, Poor: > 300ms
    cls: 0.1,  // Good: < 0.1, Needs Improvement: 0.1-0.25, Poor: > 0.25
    fcp: 1800, // Good: < 1.8s, Needs Improvement: 1.8-3s, Poor: > 3s
    ttfb: 800, // Good: < 800ms, Needs Improvement: 800-1800ms, Poor: > 1800ms
    fmp: 2000,
    si: 3400,
    tti: 3800,
    tbt: 200,
    resourceCount: 50,
    resourceSize: 1000000, // 1MB
    domNodes: 1500,
    memoryUsage: 50000000, // 50MB
    bounceRate: 0.4, // 40%
    sessionDuration: 120, // 2 minutes
    pageViews: 1,
    userEngagement: 0.5
  };

  constructor() {
    this.metrics = this.initializeMetrics();
    this.setupPerformanceObservers();
    this.startMonitoring();
  }

  private initializeMetrics(): PerformanceMetrics {
    return {
      lcp: 0,
      fid: 0,
      cls: 0,
      fcp: 0,
      ttfb: 0,
      fmp: 0,
      si: 0,
      tti: 0,
      tbt: 0,
      resourceCount: 0,
      resourceSize: 0,
      domNodes: 0,
      memoryUsage: 0,
      bounceRate: 0,
      sessionDuration: 0,
      pageViews: 1,
      userEngagement: 0
    };
  }

  private setupPerformanceObservers(): void {
    // Core Web Vitals Observer
    if ('PerformanceObserver' in window) {
      try {
        // LCP Observer
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry;
          this.metrics.lcp = lastEntry.startTime;
          this.checkAlert('lcp', this.metrics.lcp);
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(lcpObserver);

        // FID Observer
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            this.metrics.fid = entry.processingStart - entry.startTime;
            this.checkAlert('fid', this.metrics.fid);
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        this.observers.push(fidObserver);

        // CLS Observer
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
              this.metrics.cls = clsValue;
              this.checkAlert('cls', this.metrics.cls);
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(clsObserver);

        // FCP Observer
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              this.metrics.fcp = entry.startTime;
              this.checkAlert('fcp', this.metrics.fcp);
            }
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
        this.observers.push(fcpObserver);

        // Resource Observer
        const resourceObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          this.metrics.resourceCount = entries.length;
          this.metrics.resourceSize = entries.reduce((total, entry: any) => {
            return total + (entry.transferSize || 0);
          }, 0);
          this.checkAlert('resourceCount', this.metrics.resourceCount);
          this.checkAlert('resourceSize', this.metrics.resourceSize);
        });
        resourceObserver.observe({ entryTypes: ['resource'] });
        this.observers.push(resourceObserver);

      } catch (error) {
        console.warn('Performance Observer not supported:', error);
      }
    }
  }

  private startMonitoring(): void {
    // Monitor DOM nodes
    this.updateDOMNodes();
    
    // Monitor memory usage
    this.updateMemoryUsage();
    
    // Monitor user engagement
    this.trackUserEngagement();
    
    // Generate periodic reports
    setInterval(() => {
      this.generateReport();
    }, 30000); // Every 30 seconds
  }

  private updateDOMNodes(): void {
    this.metrics.domNodes = document.querySelectorAll('*').length;
    this.checkAlert('domNodes', this.metrics.domNodes);
  }

  private updateMemoryUsage(): void {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      this.metrics.memoryUsage = memory.usedJSHeapSize;
      this.checkAlert('memoryUsage', this.metrics.memoryUsage);
    }
  }

  private trackUserEngagement(): void {
    let engagementStart = Date.now();
    let isEngaged = false;

    const updateEngagement = () => {
      if (isEngaged) {
        this.metrics.sessionDuration = (Date.now() - engagementStart) / 1000;
        this.metrics.userEngagement = Math.min(this.metrics.sessionDuration / 300, 1); // Max 5 minutes
      }
    };

    // Track user interactions
    ['click', 'scroll', 'keydown', 'mousemove'].forEach(event => {
      document.addEventListener(event, () => {
        if (!isEngaged) {
          isEngaged = true;
          engagementStart = Date.now();
        }
        updateEngagement();
      }, { passive: true });
    });

    // Track page visibility
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        updateEngagement();
        isEngaged = false;
      } else {
        engagementStart = Date.now();
        isEngaged = true;
      }
    });
  }

  private checkAlert(metric: keyof PerformanceMetrics, value: number): void {
    const threshold = this.alertThresholds[metric];
    if (value > threshold) {
      const alert: PerformanceAlert = {
        id: `${metric}-${Date.now()}`,
        type: this.getAlertType(metric, value, threshold),
        metric,
        threshold,
        currentValue: value,
        message: this.getAlertMessage(metric, value, threshold),
        timestamp: new Date(),
        resolved: false
      };
      
      this.alerts.push(alert);
      this.notifyAlert(alert);
    }
  }

  private getAlertType(metric: keyof PerformanceMetrics, value: number, threshold: number): 'warning' | 'error' | 'info' {
    const ratio = value / threshold;
    if (ratio > 2) return 'error';
    if (ratio > 1.5) return 'warning';
    return 'info';
  }

  private getAlertMessage(metric: keyof PerformanceMetrics, value: number, threshold: number): string {
    const messages: Record<keyof PerformanceMetrics, string> = {
      lcp: `Largest Contentful Paint is ${value.toFixed(0)}ms (threshold: ${threshold}ms)`,
      fid: `First Input Delay is ${value.toFixed(0)}ms (threshold: ${threshold}ms)`,
      cls: `Cumulative Layout Shift is ${value.toFixed(3)} (threshold: ${threshold})`,
      fcp: `First Contentful Paint is ${value.toFixed(0)}ms (threshold: ${threshold}ms)`,
      ttfb: `Time to First Byte is ${value.toFixed(0)}ms (threshold: ${threshold}ms)`,
      fmp: `First Meaningful Paint is ${value.toFixed(0)}ms (threshold: ${threshold}ms)`,
      si: `Speed Index is ${value.toFixed(0)}ms (threshold: ${threshold}ms)`,
      tti: `Time to Interactive is ${value.toFixed(0)}ms (threshold: ${threshold}ms)`,
      tbt: `Total Blocking Time is ${value.toFixed(0)}ms (threshold: ${threshold}ms)`,
      resourceCount: `Resource count is ${value} (threshold: ${threshold})`,
      resourceSize: `Resource size is ${(value / 1024).toFixed(0)}KB (threshold: ${(threshold / 1024).toFixed(0)}KB)`,
      domNodes: `DOM nodes count is ${value} (threshold: ${threshold})`,
      memoryUsage: `Memory usage is ${(value / 1024 / 1024).toFixed(0)}MB (threshold: ${(threshold / 1024 / 1024).toFixed(0)}MB)`,
      bounceRate: `Bounce rate is ${(value * 100).toFixed(1)}% (threshold: ${(threshold * 100).toFixed(1)}%)`,
      sessionDuration: `Session duration is ${value.toFixed(0)}s (threshold: ${threshold}s)`,
      pageViews: `Page views is ${value} (threshold: ${threshold})`,
      userEngagement: `User engagement is ${(value * 100).toFixed(1)}% (threshold: ${(threshold * 100).toFixed(1)}%)`
    };
    
    return messages[metric] || `Metric ${metric} is ${value} (threshold: ${threshold})`;
  }

  private notifyAlert(alert: PerformanceAlert): void {
    // Send to analytics service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_alert', {
        metric: alert.metric,
        value: alert.currentValue,
        threshold: alert.threshold,
        type: alert.type
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Performance Alert: ${alert.message}`);
    }
  }

  private generateReport(): PerformanceReport {
    const score = this.calculatePerformanceScore();
    const recommendations = this.generateRecommendations();
    
    const report: PerformanceReport = {
      timestamp: new Date(),
      metrics: { ...this.metrics },
      alerts: [...this.alerts],
      recommendations,
      score
    };

    this.reportHistory.push(report);
    
    // Keep only last 100 reports
    if (this.reportHistory.length > 100) {
      this.reportHistory = this.reportHistory.slice(-100);
    }

    return report;
  }

  private calculatePerformanceScore(): number {
    let score = 100;
    
    // Core Web Vitals scoring
    if (this.metrics.lcp > 4000) score -= 30;
    else if (this.metrics.lcp > 2500) score -= 15;
    
    if (this.metrics.fid > 300) score -= 25;
    else if (this.metrics.fid > 100) score -= 10;
    
    if (this.metrics.cls > 0.25) score -= 20;
    else if (this.metrics.cls > 0.1) score -= 10;
    
    // Resource optimization scoring
    if (this.metrics.resourceSize > 2000000) score -= 10; // 2MB
    if (this.metrics.resourceCount > 100) score -= 5;
    if (this.metrics.domNodes > 2000) score -= 5;
    
    return Math.max(0, score);
  }

  private generateRecommendations(): string[] {
    const recommendations: string[] = [];
    
    if (this.metrics.lcp > 2500) {
      recommendations.push('Optimize Largest Contentful Paint by reducing image sizes and using modern formats');
    }
    
    if (this.metrics.fid > 100) {
      recommendations.push('Reduce First Input Delay by minimizing JavaScript execution time');
    }
    
    if (this.metrics.cls > 0.1) {
      recommendations.push('Improve Cumulative Layout Shift by setting explicit dimensions for images and ads');
    }
    
    if (this.metrics.resourceSize > 1000000) {
      recommendations.push('Reduce resource size by implementing code splitting and lazy loading');
    }
    
    if (this.metrics.domNodes > 1500) {
      recommendations.push('Reduce DOM complexity by simplifying component structure');
    }
    
    if (this.metrics.memoryUsage > 50000000) {
      recommendations.push('Optimize memory usage by implementing proper cleanup and avoiding memory leaks');
    }
    
    return recommendations;
  }

  // Public API methods
  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public getAlerts(): PerformanceAlert[] {
    return [...this.alerts];
  }

  public getLatestReport(): PerformanceReport | null {
    return this.reportHistory[this.reportHistory.length - 1] || null;
  }

  public getReportHistory(): PerformanceReport[] {
    return [...this.reportHistory];
  }

  public clearAlerts(): void {
    this.alerts = [];
  }

  public updateThreshold(metric: keyof PerformanceMetrics, threshold: number): void {
    this.alertThresholds[metric] = threshold;
  }

  public destroy(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Export singleton instance
export const performanceAnalytics = new AdvancedPerformanceAnalytics();

// Export utility functions
export const getPerformanceScore = (): number => {
  return performanceAnalytics.getLatestReport()?.score || 0;
};

export const getPerformanceAlerts = (): PerformanceAlert[] => {
  return performanceAnalytics.getAlerts();
};

export const clearPerformanceAlerts = (): void => {
  performanceAnalytics.clearAlerts();
};

export default performanceAnalytics;