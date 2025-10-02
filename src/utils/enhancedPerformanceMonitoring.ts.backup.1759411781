/**
 * Enhanced Performance Monitoring Utility
 * Provides comprehensive performance tracking and optimization
 */

export interface PerformanceMetrics {
<<<<<<< HEAD
loadTime: number,
firstContentfulPaint: number,
largestContentfulPaint: number,
firstInputDelay: number,
cumulativeLayoutShift: number,
timeToInteractive: number,
totalBlockingTime: number,
speedIndex: number,
memoryUsage: number,
networkRequests: number,
domNodes: number,
jsHeapSize: number,
=======
loadTime: number;,
firstContentfulPaint: number;,
largestContentfulPaint: number;,
firstInputDelay: number;,
cumulativeLayoutShift: number;,
timeToInteractive: number;,
totalBlockingTime: number;,
speedIndex: number;,
memoryUsage: number;,
networkRequests: number;,
domNodes: number;,
jsHeapSize: number;,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
timestamp: number;
}

export interface PerformanceAlert {
<<<<<<< HEAD
type: 'warning' | 'error' | 'info';',
message: string,
metric: keyof PerformanceMetrics,
value: number,
threshold: number,
=======
type: 'warning' | 'error' | 'info';';,
message: string;,
metric: keyof PerformanceMetrics;,
value: number;,
threshold: number;,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
timestamp: number;
}

class EnhancedPerformanceMonitor {
private metrics: PerformanceMetrics[] = [];
private alerts: PerformanceAlert[] = [];
private observers: PerformanceObserver[] = [];
private isMonitoring = false;
constructor() {
this.initializeObservers();
}

  private initializeObservers(): void {
<<<<<<< HEAD
    if (typeof window === 'undefined') return;
    // Observe navigation timing
    if ('PerformanceObserver' in window) {;
=======
    if (typeof window === 'undefined') return;';

    // Observe navigation timing
    if ('PerformanceObserver' in window) {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      try {
        const navObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
<<<<<<< HEAD
            if (entry.entryType === 'navigation') {;
=======
            if (entry.entryType === 'navigation') {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
              this.processNavigationTiming(entry as PerformanceNavigationTiming);
            }
          });
        });
        navObserver.observe({ entryTypes: ['navigation'] });';
        this.observers.push(navObserver);
      } catch (error) {
<<<<<<< HEAD
        console.warn('Navigation timing observer failed: ', error);',
=======
        console.warn('Navigation timing observer failed: ', error);';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      }
    }
  }

  private processNavigationTiming(entry: PerformanceNavigationTiming): void {,
    const metrics: Partial<PerformanceMetrics> = {,
      loadTime: entry.loadEventEnd - entry.loadEventStart,,
      timeToInteractive: entry.domInteractive - entry.navigationStart,,
      timestamp: Date.now(),
    };

    this.addMetrics(metrics as PerformanceMetrics);
  }

  private addMetrics(newMetrics: PerformanceMetrics): void {,
    this.metrics.push(newMetrics);
    this.checkThresholds(newMetrics);
    
    // Keep only last 100 metrics
    if (this.metrics.length > 100) {
      this.metrics = this.metrics.slice(-100);
    }
  }

  private checkThresholds(metrics: PerformanceMetrics): void {,
    const thresholds = {
      loadTime: 3000,,
      firstContentfulPaint: 1500,,
      largestContentfulPaint: 2500,,
      firstInputDelay: 100,,
      cumulativeLayoutShift: 0.1,,
      timeToInteractive: 3800,,
      totalBlockingTime: 200,,
      speedIndex: 3000,
    };

    Object.entries(thresholds).forEach(([key, threshold]) => {
      const value = metrics[key as keyof PerformanceMetrics];
<<<<<<< HEAD
      if (typeof value === 'number' && value > threshold) {;
        this.addAlert({
          type: value > threshold * 1.5 ? 'error' : 'warning',',
=======
      if (typeof value === 'number' && value > threshold) {';
        this.addAlert({
          type: value > threshold * 1.5 ? 'error' : 'warning',';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
          message: `${key} exceeded threshold: ${value}ms > ${threshold}ms`,`;
          metric: key as keyof PerformanceMetrics,,
          value,
          threshold,
          timestamp: Date.now(),
        });
      }
    });
  }

  private addAlert(alert: PerformanceAlert): void {,
    this.alerts.push(alert);
    
    // Keep only last 50 alerts
    if (this.alerts.length > 50) {
      this.alerts = this.alerts.slice(-50);
    }

    // Log critical alerts
<<<<<<< HEAD
    if (alert.type === 'error') {;
      console.error('Performance Alert: ', alert);',
=======
    if (alert.type === 'error') {';
      console.error('Performance Alert: ', alert);';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    }
  }

  public startMonitoring(): void {
    this.isMonitoring = true;
    console.log('Enhanced performance monitoring started');';
  }

  public stopMonitoring(): void {
    this.isMonitoring = false;
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    console.log('Enhanced performance monitoring stopped');';
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

  public exportReport(): string {
    const latest = this.getLatestMetrics();
    const alerts = this.getAlerts();

    return JSON.stringify({
      latest,
      alerts,
      timestamp: Date.now(),,
      totalMetrics: this.metrics.length,
    }, null, 2);
  }
}

// Export singleton instance
export const enhancedPerformanceMonitor = new EnhancedPerformanceMonitor();

// Auto-start monitoring in browser environment
<<<<<<< HEAD
if (typeof window !== 'undefined') {;
=======
if (typeof window !== 'undefined') {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
  enhancedPerformanceMonitor.startMonitoring();
}
;