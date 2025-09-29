/**
 * Enhanced Performance Monitor
 * Advanced performance monitoring with real-time analytics
 */

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
  private alerts: PerformanceAlert[] = [];
  private isMonitoring: boolean = false;

  constructor() {
    this.initializeMonitoring();
  }

  private initializeMonitoring(): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.isMonitoring = true;
    this.startErrorMonitoring();
    this.startPerformanceMonitoring();
  }

  private startErrorMonitoring(): void {
    window.addEventListener('error', (event) => {
      this.trackError(event.error);
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.trackError(event.reason);
    });
  }

  private startPerformanceMonitoring(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.processPerformanceEntry(entry);
        }
      });

      observer.observe({ 
        entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] 
      });
    } catch (error) {
      console.warn('Failed to start performance monitoring:', error);
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
      case 'first-input':
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
      case 'layout-shift':
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

  private trackError(error: Error | any): void {
    this.createAlert({
      type: 'warning',
      title: 'JavaScript Error Detected',
      description: error.message || 'Unknown error occurred',
      impact: 'medium',
      action: 'Check console for details'
    });
  }

  private createAlert(alert: Omit<PerformanceAlert, 'id' | 'timestamp' | 'resolved'>): void {
    const newAlert: PerformanceAlert = {
      ...alert,
      id: `alert_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
      resolved: false
    };

    this.alerts.push(newAlert);
    
    // Keep only last 50 alerts
    if (this.alerts.length > 50) {
      this.alerts = this.alerts.slice(-50);
    }
  }

  public getAlerts(): PerformanceAlert[] {
    return [...this.alerts];
  }

  public getActiveAlerts(): PerformanceAlert[] {
    return this.alerts.filter(alert => !alert.resolved);
  }

  public resolveAlert(alertId: string): boolean {
    const alert = this.alerts.find(a => a.id === alertId);
    if (alert) {
      alert.resolved = true;
      return true;
    }
    return false;
  }

  public cleanup(): void {
    this.isMonitoring = false;
  }
}

export const enhancedPerformanceMonitor = new EnhancedPerformanceMonitor();