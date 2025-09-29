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

export interface PerformanceAlert {
  id: string;
  type: "critical" | "warning" | "info";
  title: string;
  description: string;
  impact: "high" | "medium" | "low";
  effort: "low" | "medium" | "high";
  category: "performance" | "accessibility" | "seo" | "security";
}

class EnhancedPerformanceMonitor {
  private alerts: PerformanceAlert[] = [];
  private isMonitoring: boolean = false;
  private observers: PerformanceObserver[] = [];
  private reportInterval: number | null = null;

  constructor() {
    this.initializeMonitoring();
  }

  private initializeMonitoring(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.isMonitoring = true;
    this.setupPerformanceObservers();
    this.startPeriodicReporting();
    this.monitorResourceLoading();
    this.monitorUserInteractions();
    this.monitorMemoryUsage();

    console.log("Enhanced Performance Monitor started");
  }

  private setupPerformanceObservers(): void {
    if (!('PerformanceObserver' in window)) {
      return;
    }

    try {
      // Monitor navigation timing
      const navObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            this.handleNavigationTiming(entry as PerformanceNavigationTiming);
          }
        });
      });
      navObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(navObserver);

      // Monitor paint timing
      const paintObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'paint') {
            this.handlePaintTiming(entry as PerformancePaintTiming);
          }
        });
      });
      paintObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(paintObserver);

      // Monitor LCP
      const lcpObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            this.handleLCPTiming(entry as PerformanceEntry);
          }
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);

    } catch (error) {
      console.error('Failed to setup performance observers:', error);
    }
  }

  private processPerformanceEntry(entry: PerformanceEntry): void {
    switch (entry.entryType) {
      case 'paint':
        if (entry.name === 'first-contentful-paint' && entry.startTime > 1800) {
          this.createAlert({
            type: 'critical',
            title: 'Slow First Contentful Paint',
            description: `FCP is ${entry.startTime.toFixed(0)}ms`,
            impact: 'high',
            action: 'Optimize critical rendering path'
          });
        }
        break;
      case 'largest-contentful-paint':
        if (entry.startTime > 2500) {
          this.createAlert({
            type: 'critical',
            title: 'Slow Largest Contentful Paint',
            description: `LCP is ${entry.startTime.toFixed(0)}ms`,
            impact: 'high',
            action: 'Optimize images and largest content'
          });
        }
        break;
      case 'first-input': {
        const fidEntry = entry as PerformanceEventTiming;
        const fid = fidEntry.processingStart - fidEntry.startTime;
        if (fid > 100) {
          this.createAlert({
            type: 'warning',
            title: 'Slow First Input Delay',
            description: `FID is ${fid.toFixed(0)}ms`,
            impact: 'medium',
            action: 'Reduce JavaScript execution time'
          });
        }
        break;
      }
      case 'layout-shift': {
        const clsEntry = entry as PerformanceEntry & { value: number };
        if (clsEntry.value > 0.1) {
          this.createAlert({
            type: 'warning',
            title: 'High Cumulative Layout Shift',
            description: `CLS is ${clsEntry.value.toFixed(3)}`,
            impact: 'medium',
            action: 'Fix layout shift issues'
          });
        }
        break;
      }
    }
  }

  private monitorUserInteractions(): void {
    // Monitor click events
    document.addEventListener('click', (event) => {
      this.trackUserInteraction('click', event.target);
    });

    // Monitor scroll events
    let scrollTimeout: number;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = window.setTimeout(() => {
        this.trackUserInteraction('scroll', null);
      }, 100);
    });
  }

  private monitorMemoryUsage(): void {
    if (!('memory' in performance)) {
      return;
    }

    const memory = (performance as any).memory;
    if (memory) {
      const memoryUsage = {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit
      };

      if (memoryUsage.used / memoryUsage.limit > 0.8) {
        this.addAlert({
          id: 'memory-high',
          type: 'warning',
          title: 'High Memory Usage',
          description: `Memory usage is at ${Math.round((memoryUsage.used / memoryUsage.limit) * 100)}%`,
          impact: 'medium',
          effort: 'low',
          category: 'performance'
        });
      }
    }
  }

  private handleNavigationTiming(entry: PerformanceNavigationTiming): void {
    const metrics = {
      loadTime: entry.loadEventEnd - entry.loadEventStart,
      domContentLoaded: entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart,
      firstByte: entry.responseStart - entry.requestStart
    };

    console.log('Navigation timing:', metrics);
  }

  private handlePaintTiming(entry: PerformancePaintTiming): void {
    console.log('Paint timing:', entry.name, entry.startTime);
  }

  private handleLCPTiming(entry: PerformanceEntry): void {
    console.log('LCP timing:', entry.startTime);
    
    if (entry.startTime > 2500) {
      this.addAlert({
        id: 'lcp-slow',
        type: 'warning',
        title: 'Slow Largest Contentful Paint',
        description: `LCP is ${Math.round(entry.startTime)}ms, which is above the recommended 2.5s`,
        impact: 'high',
        effort: 'medium',
        category: 'performance'
      });
    }
  }

  private handleResourceTiming(entry: PerformanceResourceTiming): void {
    const loadTime = entry.responseEnd - entry.requestStart;
    
    if (loadTime > 1000) {
      console.warn('Slow resource load:', entry.name, loadTime);
    }
  }

  private trackUserInteraction(type: string, target: EventTarget | null): void {
    console.log('User interaction:', type, target);
  }

  private generatePerformanceReport(): void {
    const report = {
      timestamp: Date.now(),
      alerts: this.alerts.length,
      memory: (performance as any).memory ? {
        used: (performance as any).memory.usedJSHeapSize,
        total: (performance as any).memory.totalJSHeapSize
      } : null
    };

    console.log('Performance report:', report);
  }

  private addAlert(alert: PerformanceAlert): void {
    this.alerts.push(alert);
    console.log('Performance alert:', alert);
  }

  public getAlerts(): PerformanceAlert[] {
    return [...this.alerts];
  }

  public clearAlerts(): void {
    this.alerts = [];
  }

  public stop(): void {
    this.isMonitoring = false;
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];

    if (this.reportInterval) {
      clearInterval(this.reportInterval);
      this.reportInterval = null;
    }

    console.log("Enhanced Performance Monitor stopped");
  }

  public cleanup(): void {
    this.stop();
  }
}

// Export singleton instance
export const enhancedPerformanceMonitor = new EnhancedPerformanceMonitor();

// Auto-initialize
if (typeof window !== 'undefined') {
  enhancedPerformanceMonitor.initialize();
}