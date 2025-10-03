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

class EnhancedPerformanceMonitor {
  private metrics: PerformanceMetrics[] = [];
  private alerts: PerformanceAlert[] = [];
  private observers: PerformanceObserver[] = [];
  private _isMonitoring = false;

  constructor() {
    this.initializeObservers();
  }

  private initializeObservers(): void {
    // Observe navigation timing
    if ('PerformanceObserver' in window) {
      try {
        const navigationObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'navigation') {
              this.collectNavigationMetrics(entry as PerformanceNavigationTiming);
            }
          });
        });
        navigationObserver.observe({ entryTypes: ['navigation'] });
        this.observers.push(navigationObserver);
      } catch (error) {
        console.warn('Navigation timing observer failed:', error);
      }

      // Observe paint timing
      try {
        const paintObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'paint') {
              this.collectPaintMetrics(entry as PerformancePaintTiming);
            }
          });
        });
        paintObserver.observe({ entryTypes: ['paint'] });
        this.observers.push(paintObserver);
      } catch (error) {
        console.warn('Paint timing observer failed:', error);
      }

      // Observe layout shift
      try {
        const layoutShiftObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'layout-shift') {
              this.collectLayoutShiftMetrics(entry as PerformanceEntry);
            }
          });
        });
        layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(layoutShiftObserver);
      } catch (error) {
        console.warn('Layout shift observer failed:', error);
      }
    }
  }

  private collectNavigationMetrics(entry: PerformanceNavigationTiming): void {
    const metrics: PerformanceMetrics = {
      loadTime: entry.loadEventEnd - entry.loadEventStart,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      firstInputDelay: 0,
      cumulativeLayoutShift: 0,
      timeToInteractive: entry.domInteractive - entry.fetchStart,
      totalBlockingTime: 0,
      speedIndex: 0,
      memoryUsage: 0,
      networkRequests: 0,
      domNodes: document.querySelectorAll('*').length,
      jsHeapSize: 0,
      timestamp: Date.now()
    };

    this.metrics.push(metrics);
    this.checkThresholds(metrics);
  }

  private collectPaintMetrics(entry: PerformancePaintTiming): void {
    const latestMetrics = this.metrics[this.metrics.length - 1];
    if (latestMetrics) {
      if (entry.name === 'first-contentful-paint') {
        latestMetrics.firstContentfulPaint = entry.startTime;
      }
    }
  }

  private collectLayoutShiftMetrics(entry: PerformanceEntry): void {
    const latestMetrics = this.metrics[this.metrics.length - 1];
    if (latestMetrics) {
      latestMetrics.cumulativeLayoutShift += (entry as any).value || 0;
    }
  }

  private checkThresholds(metrics: PerformanceMetrics): void {
    const thresholds = {
      loadTime: 3000,
      firstContentfulPaint: 1800,
      largestContentfulPaint: 2500,
      firstInputDelay: 100,
      cumulativeLayoutShift: 0.1,
      timeToInteractive: 3800,
      totalBlockingTime: 200,
      speedIndex: 3400
    };

    Object.entries(thresholds).forEach(([key, threshold]) => {
      const value = metrics[key as keyof PerformanceMetrics] as number;
      if (value > threshold) {
        this.createAlert('warning', `${key} exceeded threshold`, key as keyof PerformanceMetrics, value, threshold);
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
      timestamp: Date.now()
    };

    this.alerts.push(alert);
    console.warn(`Performance Alert: ${message}`, { metric, value, threshold });
  }

  public startMonitoring(): void {
    this._isMonitoring = true;
    console.log('Performance monitoring started');
  }

  public stopMonitoring(): void {
    this._isMonitoring = false;
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    console.log('Performance monitoring stopped');
  }

  public getMetrics(): PerformanceMetrics[] {
    return [...this.metrics];
  }

  public getAlerts(): PerformanceAlert[] {
    return [...this.alerts];
  }

  public getLatestMetrics(): PerformanceMetrics | null {
    return this.metrics.length > 0 ? this.metrics[this.metrics.length - 1] : null;
  }

  public getAverageMetrics(): Partial<PerformanceMetrics> {
    if (this.metrics.length === 0) return {};

    const averages: Partial<PerformanceMetrics> = {};
    const keys = Object.keys(this.metrics[0]) as (keyof PerformanceMetrics)[];

    keys.forEach(key => {
      if (typeof this.metrics[0][key] === 'number') {
        const sum = this.metrics.reduce((acc, metric) => acc + (metric[key] as number), 0);
        averages[key] = sum / this.metrics.length;
      }
    });

    return averages;
  }

  public clearMetrics(): void {
    this.metrics = [];
    this.alerts = [];
  }

  public isMonitoring(): boolean {
    return this._isMonitoring;
  }
}

export default EnhancedPerformanceMonitor;