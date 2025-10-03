/**
 * Enhanced Performance Monitoring Utility
 * Provides comprehensive performance tracking and optimization
 */

export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
  totalBlockingTime: number;
  speedIndex: number;
  memoryUsage: number;
  networkRequests: number;
  domNodes: number;
  jsHeapSize: number;
  timestamp: number;
}

export interface PerformanceAlert {
  type: 'warning' | 'error' | 'info';
  message: string;
  metric: keyof PerformanceMetrics;
  value: number;
  threshold: number;
  timestamp: number;
}

export class EnhancedPerformanceMonitoring {
  private metrics: PerformanceMetrics;
  private alerts: PerformanceAlert[] = [];
  private observers: PerformanceObserver[] = [];
  private thresholds: Partial<PerformanceMetrics> = {
    loadTime: 3000,
    firstContentfulPaint: 1500,
    largestContentfulPaint: 2500,
    firstInputDelay: 100,
    cumulativeLayoutShift: 0.1,
    timeToInteractive: 3800,
    totalBlockingTime: 200,
    speedIndex: 3000,
    memoryUsage: 50 * 1024 * 1024, // 50MB
    networkRequests: 50,
    domNodes: 1000,
    jsHeapSize: 100 * 1024 * 1024, // 100MB
  };

  constructor() {
    this.metrics = this.getInitialMetrics();
    this.init();
  }

  private getInitialMetrics(): PerformanceMetrics {
    return {
      loadTime: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      firstInputDelay: 0,
      cumulativeLayoutShift: 0,
      timeToInteractive: 0,
      totalBlockingTime: 0,
      speedIndex: 0,
      memoryUsage: 0,
      networkRequests: 0,
      domNodes: 0,
      jsHeapSize: 0,
      timestamp: Date.now(),
    };
  }

  private init(): void {
    if (typeof window === 'undefined') return;

    try {
      this.observeNavigationTiming();
      this.observePaintTiming();
      this.observeLayoutShift();
      this.observeResourceTiming();
      this.observeMemoryUsage();
      this.observeDOMChanges();
    } catch (error) {
      console.error('Performance monitoring initialization failed:', error);
    }
  }

  private observeNavigationTiming(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            this.metrics.loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
            this.metrics.timeToInteractive = navEntry.domInteractive - navEntry.fetchStart;
          }
        });
      });
      
      observer.observe({ entryTypes: ['navigation'] });
      this.observers.push(observer);
    }
  }

  private observePaintTiming(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.firstContentfulPaint = entry.startTime;
          } else if (entry.name === 'largest-contentful-paint') {
            this.metrics.largestContentfulPaint = entry.startTime;
          }
        });
      });
      
      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer);
    }
  }

  private observeLayoutShift(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
            this.metrics.cumulativeLayoutShift += (entry as any).value;
          }
        });
      });
      
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    }
  }

  private observeResourceTiming(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        this.metrics.networkRequests = entries.length;
      });
      
      observer.observe({ entryTypes: ['resource'] });
      this.observers.push(observer);
    }
  }

  private observeMemoryUsage(): void {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      this.metrics.memoryUsage = memory.usedJSHeapSize;
      this.metrics.jsHeapSize = memory.totalJSHeapSize;
    }
  }

  private observeDOMChanges(): void {
    const observer = new MutationObserver(() => {
      this.metrics.domNodes = document.querySelectorAll('*').length;
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public getAlerts(): PerformanceAlert[] {
    return [...this.alerts];
  }

  public checkThresholds(): void {
    Object.entries(this.thresholds).forEach(([metric, threshold]) => {
      const value = this.metrics[metric as keyof PerformanceMetrics];
      if (value > threshold!) {
        this.createAlert('warning', `${metric} exceeded threshold`, metric as keyof PerformanceMetrics, value, threshold!);
      }
    });
  }

  private createAlert(type: 'warning' | 'error' | 'info', message: string, metric: keyof PerformanceMetrics, value: number, threshold: number): void {
    const alert: PerformanceAlert = {
      type,
      message,
      metric,
      value,
      threshold,
      timestamp: Date.now(),
    };
    
    this.alerts.push(alert);
  }

  public generateReport(): string {
    const metrics = this.getMetrics();
    const alerts = this.getAlerts();
    
    return `
Performance Report - ${new Date().toISOString()}
===============================================

Metrics:
- Load Time: ${metrics.loadTime}ms
- First Contentful Paint: ${metrics.firstContentfulPaint}ms
- Largest Contentful Paint: ${metrics.largestContentfulPaint}ms
- First Input Delay: ${metrics.firstInputDelay}ms
- Cumulative Layout Shift: ${metrics.cumulativeLayoutShift}
- Time to Interactive: ${metrics.timeToInteractive}ms
- Total Blocking Time: ${metrics.totalBlockingTime}ms
- Speed Index: ${metrics.speedIndex}ms
- Memory Usage: ${(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB
- Network Requests: ${metrics.networkRequests}
- DOM Nodes: ${metrics.domNodes}
- JS Heap Size: ${(metrics.jsHeapSize / 1024 / 1024).toFixed(2)}MB

Alerts: ${alerts.length}
${alerts.map(alert => `- ${alert.type.toUpperCase()}: ${alert.message}`).join('\n')}
    `;
  }

  public destroy(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

export default EnhancedPerformanceMonitoring;