/**
 * Advanced Performance Monitoring System
 * Comprehensive performance tracking, analysis, and optimization recommendations
 */

interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  timestamp: number;
  context: {
    url: string;
    userAgent: string;
    connection?: string;
    deviceMemory?: number;
  };
}

interface PerformanceThreshold {
  metric: string;
  warning: number;
  critical: number;
  unit: string;
}

interface PerformanceReport {
  id: string;
  timestamp: number;
  metrics: PerformanceMetric[];
  scores: {
    overall: number;
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  recommendations: string[];
  alerts: Array<{
    level: 'warning' | 'critical';
    metric: string;
    value: number;
    threshold: number;
    message: string;
  }>;
}

class AdvancedPerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private thresholds: PerformanceThreshold[] = [];
  private observers: PerformanceObserver[] = [];
  private sessionId: string;
  private isMonitoring = false;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.initializeThresholds();
    this.setupPerformanceObservers();
  }

  private generateSessionId(): string {
    return `perf_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeThresholds(): void {
    this.thresholds = [
      { metric: 'first-contentful-paint', warning: 1500, critical: 2500, unit: 'ms' },
      { metric: 'largest-contentful-paint', warning: 2500, critical: 4000, unit: 'ms' },
      { metric: 'first-input-delay', warning: 100, critical: 300, unit: 'ms' },
      { metric: 'cumulative-layout-shift', warning: 0.1, critical: 0.25, unit: 'score' },
      { metric: 'total-blocking-time', warning: 200, critical: 600, unit: 'ms' },
      { metric: 'time-to-interactive', warning: 3800, critical: 7300, unit: 'ms' },
      { metric: 'speed-index', warning: 3400, critical: 5800, unit: 'ms' }
    ];
  }

  private setupPerformanceObservers(): void {
    if (!('PerformanceObserver' in window)) return;

    // Navigation timing observer
    try {
      const navObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            this.processNavigationTiming(entry as PerformanceNavigationTiming);
          }
        }
      });
      navObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(navObserver);
    } catch (error) {
      console.warn('Navigation timing observer setup failed:', error);
    }

    // Paint timing observer
    try {
      const paintObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.processPaintTiming(entry as PerformancePaintTiming);
        }
      });
      paintObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(paintObserver);
    } catch (error) {
      console.warn('Paint timing observer setup failed:', error);
    }

    // Largest Contentful Paint observer
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.recordMetric('largest-contentful-paint', lastEntry.startTime, 'ms');
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);
    } catch (error) {
      console.warn('LCP observer setup failed:', error);
    }

    // First Input Delay observer
    try {
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fidEntry = entry as any;
          this.recordMetric('first-input-delay', fidEntry.processingStart - fidEntry.startTime, 'ms');
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);
    } catch (error) {
      console.warn('FID observer setup failed:', error);
    }

    // Layout Shift observer
    try {
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          const clsEntry = entry as any;
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value;
          }
        }
        this.recordMetric('cumulative-layout-shift', clsValue, 'score');
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    } catch (error) {
      console.warn('CLS observer setup failed:', error);
    }

    // Resource timing observer
    try {
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.processResourceTiming(entry as PerformanceResourceTiming);
        }
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.push(resourceObserver);
    } catch (error) {
      console.warn('Resource timing observer setup failed:', error);
    }
  }

  private processNavigationTiming(entry: PerformanceNavigationTiming): void {
    const metrics = [
      { name: 'dns-lookup', value: entry.domainLookupEnd - entry.domainLookupStart },
      { name: 'tcp-connection', value: entry.connectEnd - entry.connectStart },
      { name: 'ssl-negotiation', value: entry.secureConnectionStart > 0 ? entry.connectEnd - entry.secureConnectionStart : 0 },
      { name: 'request-response', value: entry.responseEnd - entry.requestStart },
      { name: 'dom-processing', value: entry.domComplete - entry.domContentLoadedEventStart },
      { name: 'load-complete', value: entry.loadEventEnd - entry.loadEventStart },
      { name: 'total-load-time', value: entry.loadEventEnd - entry.fetchStart }
    ];

    metrics.forEach(metric => {
      if (metric.value > 0) {
        this.recordMetric(metric.name, metric.value, 'ms');
      }
    });

    // Calculate derived metrics
    this.calculateDerivedMetrics(entry);
  }

  private processPaintTiming(entry: PerformancePaintTiming): void {
    const metricName = entry.name === 'first-paint' ? 'first-paint' : 'first-contentful-paint';
    this.recordMetric(metricName, entry.startTime, 'ms');
  }

  private processResourceTiming(entry: PerformanceResourceTiming): void {
    // Track slow resources
    const loadTime = entry.responseEnd - entry.startTime;
    if (loadTime > 1000) { // Resources taking more than 1 second
      this.recordMetric('slow-resource', loadTime, 'ms', {
        resource: entry.name,
        type: this.getResourceType(entry.name)
      });
    }

    // Track resource types
    const resourceType = this.getResourceType(entry.name);
    this.recordMetric(`resource-${resourceType}-time`, loadTime, 'ms');
  }

  private getResourceType(url: string): string {
    const extension = url.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'js': return 'script';
      case 'css': return 'stylesheet';
      case 'png':
      case 'jpg':
      case 'jpeg':
      case 'gif':
      case 'webp':
      case 'svg': return 'image';
      case 'woff':
      case 'woff2':
      case 'ttf':
      case 'otf': return 'font';
      default: return 'other';
    }
  }

  private calculateDerivedMetrics(entry: PerformanceNavigationTiming): void {
    // Time to Interactive (TTI) approximation
    const tti = entry.domContentLoadedEventEnd - entry.fetchStart;
    this.recordMetric('time-to-interactive', tti, 'ms');

    // Speed Index approximation
    const speedIndex = entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart;
    this.recordMetric('speed-index', speedIndex, 'ms');

    // Total Blocking Time (TBT) approximation
    const tbt = Math.max(0, entry.domContentLoadedEventEnd - entry.domInteractive - 50);
    this.recordMetric('total-blocking-time', tbt, 'ms');
  }

  private recordMetric(name: string, value: number, unit: string, metadata?: any): void {
    const metric: PerformanceMetric = {
      name,
      value,
      unit,
      timestamp: Date.now(),
      context: {
        url: window.location.href,
        userAgent: navigator.userAgent,
        connection: this.getConnectionInfo(),
        deviceMemory: (navigator as any).deviceMemory
      }
    };

    this.metrics.push(metric);

    // Keep only recent metrics (last 1000)
    if (this.metrics.length > 1000) {
      this.metrics = this.metrics.slice(-1000);
    }

    // Check thresholds and generate alerts
    this.checkThresholds(metric);
  }

  private getConnectionInfo(): string | undefined {
    const connection = (navigator as any).connection;
    if (connection) {
      return `${connection.effectiveType} (${connection.downlink}Mbps)`;
    }
    return undefined;
  }

  private checkThresholds(metric: PerformanceMetric): void {
    const threshold = this.thresholds.find(t => t.metric === metric.name);
    if (!threshold) return;

    let level: 'warning' | 'critical' | null = null;
    let thresholdValue = 0;

    if (metric.value > threshold.critical) {
      level = 'critical';
      thresholdValue = threshold.critical;
    } else if (metric.value > threshold.warning) {
      level = 'warning';
      thresholdValue = threshold.warning;
    }

    if (level) {
      this.generateAlert(level, metric, thresholdValue, threshold);
    }
  }

  private generateAlert(level: 'warning' | 'critical', metric: PerformanceMetric, threshold: number, thresholdConfig: PerformanceThreshold): void {
    const alert = {
      level,
      metric: metric.name,
      value: metric.value,
      threshold,
      message: `${metric.name} is ${level}: ${metric.value}${metric.unit} (threshold: ${threshold}${thresholdConfig.unit})`
    };

    // Dispatch custom event for alert handling
    window.dispatchEvent(new CustomEvent('performance-alert', { detail: alert }));

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Performance ${level}:`, alert.message);
    }
  }

  public startMonitoring(): void {
    if (this.isMonitoring) return;
    
    this.isMonitoring = true;
    
    // Start monitoring user interactions
    this.setupInteractionMonitoring();
    
    // Start periodic performance checks
    this.startPeriodicChecks();
    
    console.log('Advanced Performance Monitoring started');
  }

  public stopMonitoring(): void {
    this.isMonitoring = false;
    
    // Disconnect all observers
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    
    console.log('Advanced Performance Monitoring stopped');
  }

  private setupInteractionMonitoring(): void {
    // Monitor click response times
    document.addEventListener('click', (event) => {
      const startTime = performance.now();
      
      // Use requestAnimationFrame to measure after click processing
      requestAnimationFrame(() => {
        const responseTime = performance.now() - startTime;
        this.recordMetric('click-response-time', responseTime, 'ms');
      });
    }, { passive: true });

    // Monitor scroll performance
    let scrollStartTime = 0;
    document.addEventListener('scrollstart', () => {
      scrollStartTime = performance.now();
    }, { passive: true });

    document.addEventListener('scrollend', () => {
      if (scrollStartTime > 0) {
        const scrollTime = performance.now() - scrollStartTime;
        this.recordMetric('scroll-response-time', scrollTime, 'ms');
        scrollStartTime = 0;
      }
    }, { passive: true });
  }

  private startPeriodicChecks(): void {
    setInterval(() => {
      if (!this.isMonitoring) return;
      
      // Check memory usage
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        this.recordMetric('memory-used', memory.usedJSHeapSize / 1024 / 1024, 'MB');
        this.recordMetric('memory-limit', memory.jsHeapSizeLimit / 1024 / 1024, 'MB');
      }

      // Check frame rate
      this.measureFrameRate();
    }, 5000); // Check every 5 seconds
  }

  private measureFrameRate(): void {
    let frameCount = 0;
    const startTime = performance.now();

    const countFrames = () => {
      frameCount++;
      if (performance.now() - startTime < 1000) {
        requestAnimationFrame(countFrames);
      } else {
        this.recordMetric('frame-rate', frameCount, 'fps');
      }
    };

    requestAnimationFrame(countFrames);
  }

  public getMetrics(filter?: Partial<PerformanceMetric>): PerformanceMetric[] {
    if (!filter) return [...this.metrics];

    return this.metrics.filter(metric => {
      return Object.entries(filter).every(([key, value]) => {
        return metric[key as keyof PerformanceMetric] === value;
      });
    });
  }

  public getPerformanceScore(): number {
    const recentMetrics = this.metrics.filter(m => Date.now() - m.timestamp < 60000); // Last minute
    if (recentMetrics.length === 0) return 100;

    let score = 100;
    
    // Deduct points for poor metrics
    recentMetrics.forEach(metric => {
      const threshold = this.thresholds.find(t => t.metric === metric.name);
      if (threshold) {
        if (metric.value > threshold.critical) {
          score -= 20;
        } else if (metric.value > threshold.warning) {
          score -= 10;
        }
      }
    });

    return Math.max(0, score);
  }

  public getPerformanceReport(): PerformanceReport {
    const recentMetrics = this.metrics.filter(m => Date.now() - m.timestamp < 300000); // Last 5 minutes
    const alerts: any[] = [];
    
    // Collect recent alerts (this would be stored in a real implementation)
    const alertsByLevel = recentMetrics.reduce((acc: { critical: any[], warning: any[] }, metric) => {
      const threshold = this.thresholds.find(t => t.metric === metric.name);
      if (threshold) {
        if (metric.value > threshold.critical) {
          acc.critical.push({
            level: 'critical' as const,
            metric: metric.name,
            value: metric.value,
            threshold: threshold.critical,
            message: `${metric.name} is critical: ${metric.value}${metric.unit}`
          });
        } else if (metric.value > threshold.warning) {
          acc.warning.push({
            level: 'warning' as const,
            metric: metric.name,
            value: metric.value,
            threshold: threshold.warning,
            message: `${metric.name} is warning: ${metric.value}${metric.unit}`
          });
        }
      }
      return acc;
    }, { critical: [], warning: [] });

    alerts.push(...alertsByLevel.critical, ...alertsByLevel.warning);

    return {
      id: `report_${Date.now()}`,
      timestamp: Date.now(),
      metrics: recentMetrics,
      scores: {
        overall: this.getPerformanceScore(),
        performance: this.getPerformanceScore(),
        accessibility: 85, // Would be calculated from accessibility metrics
        bestPractices: 90, // Would be calculated from best practices
        seo: 95 // Would be calculated from SEO metrics
      },
      recommendations: this.generateRecommendations(recentMetrics),
      alerts
    };
  }

  private generateRecommendations(metrics: PerformanceMetric[]): string[] {
    const recommendations: string[] = [];
    
    // Analyze metrics and generate recommendations
    const slowResources = metrics.filter(m => m.name === 'slow-resource');
    if (slowResources.length > 0) {
      recommendations.push('Consider optimizing slow-loading resources');
    }

    const highLCP = metrics.filter(m => m.name === 'largest-contentful-paint' && m.value > 2500);
    if (highLCP.length > 0) {
      recommendations.push('Optimize Largest Contentful Paint by reducing image sizes or using WebP format');
    }

    const highCLS = metrics.filter(m => m.name === 'cumulative-layout-shift' && m.value > 0.1);
    if (highCLS.length > 0) {
      recommendations.push('Reduce Cumulative Layout Shift by setting dimensions for images and ads');
    }

    const highFID = metrics.filter(m => m.name === 'first-input-delay' && m.value > 100);
    if (highFID.length > 0) {
      recommendations.push('Improve First Input Delay by reducing JavaScript execution time');
    }

    return recommendations;
  }

  public exportMetrics(): string {
    return JSON.stringify({
      metrics: this.metrics,
      thresholds: this.thresholds,
      sessionId: this.sessionId,
      exportTime: Date.now()
    }, null, 2);
  }
}

// Create singleton instance
export const advancedPerformanceMonitor = new AdvancedPerformanceMonitor();

// Export types and utilities
export type { PerformanceMetric, PerformanceThreshold, PerformanceReport };
export { AdvancedPerformanceMonitor };