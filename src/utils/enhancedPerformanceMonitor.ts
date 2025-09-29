/**
 * Enhanced Performance Monitor
 * Advanced performance monitoring with real-time analytics
 */

export interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  category:
    | "navigation"
    | "resource"
    | "paint"
    | "layout"
    | "script"
    | "custom";
  severity: "good" | "needs-improvement" | "poor";
}

export interface PerformanceReport {
  timestamp: number;
  metrics: PerformanceMetric[];
  recommendations: string[];
  overallScore: number;
  userAgent: string;
  connectionType?: string;
}

export interface OptimizationRecommendation {
  type: "critical" | "warning" | "info";
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
  effort: "low" | "medium" | "high";
  category: "performance" | "accessibility" | "seo" | "security";
}

export interface PerformanceAlert {
  id: string;
  type: 'critical' | 'warning' | 'info';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  action: string;
  timestamp: number;
  resolved: boolean;
}

class EnhancedPerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private alerts: PerformanceAlert[] = [];
  private isMonitoring: boolean = false;
  private observers: PerformanceObserver[] = [];
  private reportInterval: number | null = null;

  constructor() {
    this.initializeMonitoring();
  }

  private initializeMonitoring(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      console.warn('Performance monitoring not available in this environment');
      return;
    }

    this.isMonitoring = true;
    this.setupPerformanceObservers();
    this.startContinuousMonitoring();
    this.analyzeInitialPerformance();
  }

  private setupPerformanceObservers(): void {
    // Navigation timing observer
    try {
      const navObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            this.processNavigationEntry(entry as PerformanceNavigationTiming);
          }
        }
      });
      navObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(navObserver);
    } catch (error) {
      console.warn('Navigation observer setup failed:', error);
    }

    // Resource timing observer
    try {
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            this.processResourceEntry(entry as PerformanceResourceTiming);
          }
        }
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.push(resourceObserver);
    } catch (error) {
      console.warn('Resource observer setup failed:', error);
    }

    // Paint timing observer
    try {
      const paintObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            this.processPaintEntry(entry as PerformanceEntry);
          }
        }
      });
      paintObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(paintObserver);
    } catch (error) {
      console.warn('Paint observer setup failed:', error);
    }

    // Largest Contentful Paint observer
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            this.processLCPEntry(entry as PerformanceEntry);
          }
        }
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
          if (entry.entryType === 'first-input') {
            this.processFIDEntry(entry as PerformanceEventTiming);
          }
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);
    } catch (error) {
      console.warn('FID observer setup failed:', error);
    }

    // Cumulative Layout Shift observer
    try {
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'layout-shift') {
            this.processCLSEntry(entry as PerformanceEntry);
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    } catch (error) {
      console.warn('CLS observer setup failed:', error);
    }
  }

  private startContinuousMonitoring(): void {
    // Monitor memory usage
    this.monitorMemoryUsage();

    // Monitor frame rate
    this.monitorFrameRate();

    // Monitor long tasks
    this.monitorLongTasks();

    // Generate periodic reports
    this.reportInterval = window.setInterval(() => {
      this.generatePerformanceReport();
    }, 30000); // Every 30 seconds
  }

  private analyzeInitialPerformance(): void {
    // Analyze existing performance entries
    if (typeof performance !== 'undefined') {
      const navigationEntries = performance.getEntriesByType('navigation');
      const resourceEntries = performance.getEntriesByType('resource');
      const paintEntries = performance.getEntriesByType('paint');

      navigationEntries.forEach(entry => {
        this.processNavigationEntry(entry as PerformanceNavigationTiming);
      });

      resourceEntries.forEach(entry => {
        this.processResourceEntry(entry as PerformanceResourceTiming);
      });

      paintEntries.forEach(entry => {
        this.processPaintEntry(entry);
      });
    }
  }

  private processNavigationEntry(entry: PerformanceNavigationTiming): void {
    const metrics = [
      {
        name: 'DNS Lookup',
        value: entry.domainLookupEnd - entry.domainLookupStart,
        timestamp: Date.now(),
        category: 'navigation' as const,
        severity: this.categorizeTiming(entry.domainLookupEnd - entry.domainLookupStart, [0, 100, 300])
      },
      {
        name: 'TCP Connection',
        value: entry.connectEnd - entry.connectStart,
        timestamp: Date.now(),
        category: 'navigation' as const,
        severity: this.categorizeTiming(entry.connectEnd - entry.connectStart, [0, 100, 300])
      },
      {
        name: 'Request Response',
        value: entry.responseEnd - entry.requestStart,
        timestamp: Date.now(),
        category: 'navigation' as const,
        severity: this.categorizeTiming(entry.responseEnd - entry.requestStart, [0, 200, 500])
      },
      {
        name: 'DOM Processing',
        value: entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart,
        timestamp: Date.now(),
        category: 'navigation' as const,
        severity: this.categorizeTiming(entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart, [0, 100, 300])
      },
      {
        name: 'Load Complete',
        value: entry.loadEventEnd - entry.loadEventStart,
        timestamp: Date.now(),
        category: 'navigation' as const,
        severity: this.categorizeTiming(entry.loadEventEnd - entry.loadEventStart, [0, 200, 500])
      }
    ];

    metrics.forEach(metric => {
      this.addMetric(metric);
    });

    // Check for performance issues
    this.checkNavigationPerformance(entry);
  }

  private processResourceEntry(entry: PerformanceResourceTiming): void {
    const loadTime = entry.responseEnd - entry.startTime;
    
    const metric: PerformanceMetric = {
      name: `Resource: ${entry.name.split('/').pop()}`,
      value: loadTime,
      timestamp: Date.now(),
      category: 'resource',
      severity: this.categorizeTiming(loadTime, [0, 1000, 3000])
    };

    this.addMetric(metric);

    // Check for slow resources
    if (loadTime > 1000) {
      this.addAlert({
        type: 'warning',
        title: 'Slow Resource Loading',
        description: `Resource ${entry.name} took ${loadTime.toFixed(2)}ms to load`,
        impact: 'medium',
        action: 'Consider optimizing or lazy loading this resource',
        timestamp: Date.now(),
        resolved: false
      });
    }
  }

  private processPaintEntry(entry: PerformanceEntry): void {
    const metric: PerformanceMetric = {
      name: entry.name === 'first-contentful-paint' ? 'First Contentful Paint' : 'First Paint',
      value: entry.startTime,
      timestamp: Date.now(),
      category: 'paint',
      severity: this.categorizeTiming(entry.startTime, [0, 1500, 2500])
    };

    this.addMetric(metric);

    // Check paint performance
    if (entry.startTime > 1500) {
      this.addAlert({
        type: 'warning',
        title: 'Slow Paint Performance',
        description: `${entry.name} took ${entry.startTime.toFixed(2)}ms`,
        impact: 'high',
        action: 'Optimize CSS and reduce render-blocking resources',
        timestamp: Date.now(),
        resolved: false
      });
    }
  }

  private processLCPEntry(entry: PerformanceEntry): void {
    const metric: PerformanceMetric = {
      name: 'Largest Contentful Paint',
      value: entry.startTime,
      timestamp: Date.now(),
      category: 'paint',
      severity: this.categorizeTiming(entry.startTime, [0, 2500, 4000])
    };

    this.addMetric(metric);

    if (entry.startTime > 2500) {
      this.addAlert({
        type: 'critical',
        title: 'Poor LCP Performance',
        description: `Largest Contentful Paint took ${entry.startTime.toFixed(2)}ms`,
        impact: 'high',
        action: 'Optimize images, fonts, and critical rendering path',
        timestamp: Date.now(),
        resolved: false
      });
    }
  }

  private processFIDEntry(entry: PerformanceEventTiming): void {
    const metric: PerformanceMetric = {
      name: 'First Input Delay',
      value: entry.processingStart - entry.startTime,
      timestamp: Date.now(),
      category: 'script',
      severity: this.categorizeTiming(entry.processingStart - entry.startTime, [0, 100, 300])
    };

    this.addMetric(metric);

    const fid = entry.processingStart - entry.startTime;
    if (fid > 100) {
      this.addAlert({
        type: 'warning',
        title: 'High First Input Delay',
        description: `First Input Delay was ${fid.toFixed(2)}ms`,
        impact: 'high',
        action: 'Reduce JavaScript execution time and optimize event handlers',
        timestamp: Date.now(),
        resolved: false
      });
    }
  }

  private processCLSEntry(entry: PerformanceEntry): void {
    const cls = (entry as any).value;
    
    const metric: PerformanceMetric = {
      name: 'Cumulative Layout Shift',
      value: cls,
      timestamp: Date.now(),
      category: 'layout',
      severity: this.categorizeTiming(cls, [0, 0.1, 0.25])
    };

    this.addMetric(metric);

    if (cls > 0.1) {
      this.addAlert({
        type: 'warning',
        title: 'Layout Shift Detected',
        description: `Cumulative Layout Shift score: ${cls.toFixed(4)}`,
        impact: 'medium',
        action: 'Add size attributes to images and avoid inserting content above existing content',
        timestamp: Date.now(),
        resolved: false
      });
    }
  }

  private monitorMemoryUsage(): void {
    if ('memory' in performance) {
      setInterval(() => {
        const memory = (performance as any).memory;
        if (memory) {
          const memoryMetric: PerformanceMetric = {
            name: 'Memory Usage',
            value: memory.usedJSHeapSize / 1024 / 1024, // Convert to MB
            timestamp: Date.now(),
            category: 'custom',
            severity: this.categorizeTiming(memory.usedJSHeapSize / 1024 / 1024, [0, 50, 100])
          };

          this.addMetric(memoryMetric);

          // Check for memory leaks
          if (memory.usedJSHeapSize / 1024 / 1024 > 100) {
            this.addAlert({
              type: 'warning',
              title: 'High Memory Usage',
              description: `Memory usage: ${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)}MB`,
              impact: 'medium',
              action: 'Check for memory leaks and optimize memory usage',
              timestamp: Date.now(),
              resolved: false
            });
          }
        }
      }, 10000); // Every 10 seconds
    }
  }

  private monitorFrameRate(): void {
    let frameCount = 0;
    let lastTime = performance.now();

    const countFrames = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = (frameCount * 1000) / (currentTime - lastTime);
        
        const fpsMetric: PerformanceMetric = {
          name: 'Frame Rate',
          value: fps,
          timestamp: Date.now(),
          category: 'custom',
          severity: this.categorizeTiming(fps, [60, 30, 15], true) // Higher is better
        };

        this.addMetric(fpsMetric);

        if (fps < 30) {
          this.addAlert({
            type: 'warning',
            title: 'Low Frame Rate',
            description: `Frame rate: ${fps.toFixed(2)} FPS`,
            impact: 'medium',
            action: 'Optimize animations and reduce computational overhead',
            timestamp: Date.now(),
            resolved: false
          });
        }

        frameCount = 0;
        lastTime = currentTime;
      }

      requestAnimationFrame(countFrames);
    };

    requestAnimationFrame(countFrames);
  }

  private monitorLongTasks(): void {
    try {
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'longtask') {
            const duration = entry.duration;
            
            const longTaskMetric: PerformanceMetric = {
              name: 'Long Task',
              value: duration,
              timestamp: Date.now(),
              category: 'script',
              severity: this.categorizeTiming(duration, [50, 100, 200])
            };

            this.addMetric(longTaskMetric);

            this.addAlert({
              type: 'critical',
              title: 'Long Task Detected',
              description: `Long task took ${duration.toFixed(2)}ms`,
              impact: 'high',
              action: 'Break up long-running tasks using setTimeout or Web Workers',
              timestamp: Date.now(),
              resolved: false
            });
          }
        }
      });

      longTaskObserver.observe({ entryTypes: ['longtask'] });
      this.observers.push(longTaskObserver);
    } catch (error) {
      console.warn('Long task observer setup failed:', error);
    }
  }

  private categorizeTiming(value: number, thresholds: [number, number, number], higherIsBetter: boolean = false): "good" | "needs-improvement" | "poor" {
    if (higherIsBetter) {
      if (value >= thresholds[0]) return 'good';
      if (value >= thresholds[1]) return 'needs-improvement';
      return 'poor';
    } else {
      if (value <= thresholds[0]) return 'good';
      if (value <= thresholds[1]) return 'needs-improvement';
      return 'poor';
    }
  }

  private addMetric(metric: PerformanceMetric): void {
    this.metrics.push(metric);
    
    // Keep only last 1000 metrics
    if (this.metrics.length > 1000) {
      this.metrics = this.metrics.slice(-1000);
    }
  }

  private addAlert(alert: Omit<PerformanceAlert, 'id'>): void {
    const newAlert: PerformanceAlert = {
      ...alert,
      id: `alert_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };

    this.alerts.push(newAlert);
    
    // Keep only last 100 alerts
    if (this.alerts.length > 100) {
      this.alerts = this.alerts.slice(-100);
    }
  }

  private checkNavigationPerformance(entry: PerformanceNavigationTiming): void {
    const domContentLoaded = entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart;
    const loadComplete = entry.loadEventEnd - entry.loadEventStart;
    const totalLoadTime = entry.loadEventEnd - entry.navigationStart;

    if (domContentLoaded > 1000) {
      this.addAlert({
        type: 'warning',
        title: 'Slow DOM Processing',
        description: `DOM content loaded in ${domContentLoaded.toFixed(2)}ms`,
        impact: 'high',
        action: 'Optimize JavaScript execution and reduce DOM complexity',
        timestamp: Date.now(),
        resolved: false
      });
    }

    if (loadComplete > 1000) {
      this.addAlert({
        type: 'warning',
        title: 'Slow Page Load',
        description: `Page load completed in ${loadComplete.toFixed(2)}ms`,
        impact: 'high',
        action: 'Optimize resource loading and reduce bundle size',
        timestamp: Date.now(),
        resolved: false
      });
    }

    if (totalLoadTime > 3000) {
      this.addAlert({
        type: 'critical',
        title: 'Very Slow Page Load',
        description: `Total load time: ${totalLoadTime.toFixed(2)}ms`,
        impact: 'high',
        action: 'Critical performance optimization needed',
        timestamp: Date.now(),
        resolved: false
      });
    }
  }

  private generatePerformanceReport(): PerformanceReport {
    const recentMetrics = this.metrics.filter(m => Date.now() - m.timestamp < 30000); // Last 30 seconds
    const overallScore = this.calculateOverallScore(recentMetrics);
    const recommendations = this.generateRecommendations();

    return {
      timestamp: Date.now(),
      metrics: recentMetrics,
      recommendations,
      overallScore,
      userAgent: navigator.userAgent,
      connectionType: (navigator as any).connection?.effectiveType
    };
  }

  private calculateOverallScore(metrics: PerformanceMetric[]): number {
    if (metrics.length === 0) return 100;

    let totalScore = 0;
    let categoryCount = 0;
    const categories = new Set(metrics.map(m => m.category));

    categories.forEach(category => {
      const categoryMetrics = metrics.filter(m => m.category === category);
      const categoryScore = this.calculateCategoryScore(categoryMetrics);
      totalScore += categoryScore;
      categoryCount++;
    });

    return categoryCount > 0 ? Math.round(totalScore / categoryCount) : 100;
  }

  private calculateCategoryScore(metrics: PerformanceMetric[]): number {
    if (metrics.length === 0) return 100;

    let score = 100;
    metrics.forEach(metric => {
      switch (metric.severity) {
        case 'poor':
          score -= 30;
          break;
        case 'needs-improvement':
          score -= 15;
          break;
        case 'good':
          score -= 0;
          break;
      }
    });

    return Math.max(0, score);
  }

  private generateRecommendations(): string[] {
    const recommendations: string[] = [];
    const recentAlerts = this.alerts.filter(a => !a.resolved && Date.now() - a.timestamp < 300000); // Last 5 minutes

    // Analyze alerts for common issues
    const slowResources = recentAlerts.filter(a => a.title.includes('Slow Resource'));
    const slowPaint = recentAlerts.filter(a => a.title.includes('Paint'));
    const memoryIssues = recentAlerts.filter(a => a.title.includes('Memory'));
    const longTasks = recentAlerts.filter(a => a.title.includes('Long Task'));

    if (slowResources.length > 3) {
      recommendations.push('Optimize resource loading with compression and caching');
    }

    if (slowPaint.length > 2) {
      recommendations.push('Optimize CSS and reduce render-blocking resources');
    }

    if (memoryIssues.length > 2) {
      recommendations.push('Investigate memory leaks and optimize memory usage');
    }

    if (longTasks.length > 1) {
      recommendations.push('Break up long-running JavaScript tasks');
    }

    // Add general recommendations
    recommendations.push('Enable compression for all text resources');
    recommendations.push('Implement lazy loading for images and non-critical resources');
    recommendations.push('Use CDN for static assets');
    recommendations.push('Minify and compress JavaScript and CSS');

    return [...new Set(recommendations)]; // Remove duplicates
  }

  public getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  public getAlerts(): PerformanceAlert[] {
    return this.alerts.filter(alert => !alert.resolved);
  }

  public getAllAlerts(): PerformanceAlert[] {
    return [...this.alerts];
  }

  public resolveAlert(alertId: string): void {
    const alert = this.alerts.find(a => a.id === alertId);
    if (alert) {
      alert.resolved = true;
    }
  }

  public getLatestReport(): PerformanceReport {
    return this.generatePerformanceReport();
  }

  public getPerformanceScore(): number {
    const recentMetrics = this.metrics.filter(m => Date.now() - m.timestamp < 60000); // Last minute
    return this.calculateOverallScore(recentMetrics);
  }

  public markCustomMetric(name: string, value: number, category: PerformanceMetric['category'] = 'custom'): void {
    const metric: PerformanceMetric = {
      name,
      value,
      timestamp: Date.now(),
      category,
      severity: this.categorizeTiming(value, [0, 100, 500])
    };

    this.addMetric(metric);
  }

  public cleanup(): void {
    this.isMonitoring = false;
    
    // Disconnect all observers
    this.observers.forEach(observer => {
      observer.disconnect();
    });
    this.observers = [];

    // Clear intervals
    if (this.reportInterval) {
      clearInterval(this.reportInterval);
      this.reportInterval = null;
    }

    // Clear data
    this.metrics = [];
    this.alerts = [];
  }
}

// Export singleton instance
export const enhancedPerformanceMonitor = new EnhancedPerformanceMonitor();
export { EnhancedPerformanceMonitor };