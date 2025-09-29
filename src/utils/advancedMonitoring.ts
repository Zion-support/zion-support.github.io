/**
 * Advanced Monitoring System
 * Comprehensive monitoring for performance, errors, and user behavior
 */

export interface MonitoringMetrics {
  performance: {
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number;
    fcp: number;
    tti: number;
    memory: number;
  };
  errors: {
    total: number;
    javascript: number;
    network: number;
    react: number;
  };
  user: {
    sessionId: string;
    userId?: string;
    pageViews: number;
    timeOnSite: number;
    interactions: number;
  };
  network: {
    effectiveType: string;
    downlink: number;
    rtt: number;
    failures: number;
  };
}

export interface MonitoringAlert {
  id: string;
  type: 'performance' | 'error' | 'user' | 'network';
  severity: 'info' | 'warning' | 'error' | 'critical';
  message: string;
  value: number;
  threshold: number;
  timestamp: Date;
  resolved: boolean;
}

class AdvancedMonitoringSystem {
  private metrics: Partial<MonitoringMetrics> = {};
  private alerts: MonitoringAlert[] = [];
  private observers: PerformanceObserver[] = [];
  private isMonitoring = false;
  private sessionId: string;
  private startTime: number;
  private pageViews = 0;
  private interactions = 0;

  private thresholds = {
    performance: {
      lcp: 2500,
      fid: 100,
      cls: 0.1,
      ttfb: 800,
      fcp: 1800,
      tti: 3800,
      memory: 0.8,
    },
    errors: {
      javascript: 5,
      network: 3,
      react: 2,
      total: 10,
    },
    user: {
      bounceRate: 0.7,
      timeOnSite: 30000,
    },
    network: {
      rtt: 200,
      failures: 3,
    },
  };

  constructor() {
    this.sessionId = this.generateSessionId();
    this.startTime = Date.now();
    this.initializeMonitoring();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeMonitoring(): void {
    if (typeof window === 'undefined') return;

    this.setupPerformanceMonitoring();
    this.setupErrorMonitoring();
    this.setupUserMonitoring();
    this.setupNetworkMonitoring();
    this.startMonitoring();
  }

  private setupPerformanceMonitoring(): void {
    // Web Vitals monitoring
    this.observeWebVitals();
    
    // Memory monitoring
    this.observeMemory();
    
    // Long tasks monitoring
    this.observeLongTasks();
  }

  private observeWebVitals(): void {
    if ('PerformanceObserver' in window) {
      try {
        // LCP
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          this.updateMetric('performance', 'lcp', lastEntry.startTime);
          this.checkPerformanceThreshold('lcp', lastEntry.startTime);
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
        this.observers.push(lcpObserver);

        // FID
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            const fid = entry.processingStart - entry.startTime;
            this.updateMetric('performance', 'fid', fid);
            this.checkPerformanceThreshold('fid', fid);
          });
        });
        fidObserver.observe({ type: 'first-input', buffered: true });
        this.observers.push(fidObserver);

        // CLS
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          this.updateMetric('performance', 'cls', clsValue);
          this.checkPerformanceThreshold('cls', clsValue);
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });
        this.observers.push(clsObserver);
      } catch (error) {
        console.warn('Web Vitals monitoring setup failed:', error);
      }
    }
  }

  private observeMemory(): void {
    if ('memory' in performance) {
      const memoryInfo = (performance as any).memory;
      const memoryUsage = memoryInfo.usedJSHeapSize / memoryInfo.jsHeapSizeLimit;
      this.updateMetric('performance', 'memory', memoryUsage);
      this.checkPerformanceThreshold('memory', memoryUsage);
    }
  }

  private observeLongTasks(): void {
    if ('PerformanceObserver' in window) {
      try {
        const longTaskObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.duration > 50) {
              this.createAlert('performance', 'warning', 
                `Long task detected: ${entry.duration.toFixed(2)}ms`, 
                entry.duration, 50);
            }
          });
        });
        longTaskObserver.observe({ type: 'longtask', buffered: true });
        this.observers.push(longTaskObserver);
      } catch (error) {
        console.warn('Long task monitoring setup failed:', error);
      }
    }
  }

  private setupErrorMonitoring(): void {
    let errorCounts = { javascript: 0, network: 0, react: 0, total: 0 };

    window.addEventListener('error', () => {
      errorCounts.javascript++;
      errorCounts.total++;
      this.updateMetric('errors', 'javascript', errorCounts.javascript);
      this.updateMetric('errors', 'total', errorCounts.total);
      this.checkErrorThresholds(errorCounts);
    });

    window.addEventListener('unhandledrejection', () => {
      errorCounts.javascript++;
      errorCounts.total++;
      this.updateMetric('errors', 'javascript', errorCounts.javascript);
      this.updateMetric('errors', 'total', errorCounts.total);
      this.checkErrorThresholds(errorCounts);
    });

    // Network error monitoring
    const originalFetch = window.fetch;
    window.fetch = (...args) => {
      return originalFetch.apply(window, args)
        .catch((error) => {
          errorCounts.network++;
          errorCounts.total++;
          this.updateMetric('errors', 'network', errorCounts.network);
          this.updateMetric('errors', 'total', errorCounts.total);
          this.checkErrorThresholds(errorCounts);
          throw error;
        });
    };
  }

  private setupUserMonitoring(): void {
    // Track page views
    this.pageViews = 1;
    this.updateMetric('user', 'pageViews', this.pageViews);

    // Track interactions
    const trackInteraction = () => {
      this.interactions++;
      this.updateMetric('user', 'interactions', this.interactions);
    };

    ['click', 'scroll', 'keydown', 'touchstart'].forEach(event => {
      document.addEventListener(event, trackInteraction, { passive: true });
    });

    // Track time on site
    setInterval(() => {
      const timeOnSite = Date.now() - this.startTime;
      this.updateMetric('user', 'timeOnSite', timeOnSite);
    }, 1000);
  }

  private setupNetworkMonitoring(): void {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      
      const updateNetworkMetrics = () => {
        this.updateMetric('network', 'effectiveType', connection.effectiveType || 'unknown');
        this.updateMetric('network', 'downlink', connection.downlink || 0);
        this.updateMetric('network', 'rtt', connection.rtt || 0);
        
        this.checkNetworkThresholds();
      };

      updateNetworkMetrics();
      connection.addEventListener('change', updateNetworkMetrics);
    }
  }

  private updateMetric(category: keyof MonitoringMetrics, key: string, value: any): void {
    if (!this.metrics[category]) {
      (this.metrics as any)[category] = {};
    }
    (this.metrics as any)[category][key] = value;
  }

  private checkPerformanceThreshold(metric: string, value: number): void {
    const threshold = (this.thresholds.performance as any)[metric];
    if (threshold && value > threshold) {
      const severity = value > threshold * 1.5 ? 'error' : 'warning';
      this.createAlert('performance', severity, 
        `${metric.toUpperCase()} threshold exceeded: ${value.toFixed(2)} > ${threshold}`, 
        value, threshold);
    }
  }

  private checkErrorThresholds(counts: Record<string, number>): void {
    Object.entries(counts).forEach(([type, count]) => {
      const threshold = (this.thresholds.errors as any)[type];
      if (threshold && count > threshold) {
        this.createAlert('error', 'error', 
          `${type} error threshold exceeded: ${count} > ${threshold}`, 
          count, threshold);
      }
    });
  }

  private checkNetworkThresholds(): void {
    const network = this.metrics.network;
    if (network) {
      if (network.rtt && network.rtt > this.thresholds.network.rtt) {
        this.createAlert('network', 'warning', 
          `High RTT: ${network.rtt}ms > ${this.thresholds.network.rtt}ms`, 
          network.rtt, this.thresholds.network.rtt);
      }
    }
  }

  private createAlert(
    type: MonitoringAlert['type'],
    severity: MonitoringAlert['severity'],
    message: string,
    value: number,
    threshold: number
  ): void {
    const alert: MonitoringAlert = {
      id: `alert_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type,
      severity,
      message,
      value,
      threshold,
      timestamp: new Date(),
      resolved: false,
    };

    this.alerts.push(alert);

    // Emit custom event
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('monitoring-alert', { detail: alert }));
    }

    // Auto-resolve after 5 minutes
    setTimeout(() => {
      alert.resolved = true;
    }, 5 * 60 * 1000);
  }

  public startMonitoring(): void {
    this.isMonitoring = true;
    console.log('🔍 Advanced Monitoring System started');
  }

  public stopMonitoring(): void {
    this.isMonitoring = false;
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    console.log('⏹️ Advanced Monitoring System stopped');
  }

  public getMetrics(): Partial<MonitoringMetrics> {
    return { ...this.metrics };
  }

  public getAlerts(): MonitoringAlert[] {
    return [...this.alerts];
  }

  public getActiveAlerts(): MonitoringAlert[] {
    return this.alerts.filter(alert => !alert.resolved);
  }

  public generateReport(): string {
    const metrics = this.getMetrics();
    const activeAlerts = this.getActiveAlerts();
    
    return `
# Advanced Monitoring Report

## Performance Metrics
- LCP: ${metrics.performance?.lcp?.toFixed(2) || 'N/A'}ms
- FID: ${metrics.performance?.fid?.toFixed(2) || 'N/A'}ms
- CLS: ${metrics.performance?.cls?.toFixed(3) || 'N/A'}
- Memory Usage: ${metrics.performance?.memory ? `${(metrics.performance.memory * 100).toFixed(1)}%` : 'N/A'}

## Error Statistics
- Total Errors: ${metrics.errors?.total || 0}
- JavaScript Errors: ${metrics.errors?.javascript || 0}
- Network Errors: ${metrics.errors?.network || 0}

## User Metrics
- Page Views: ${metrics.user?.pageViews || 0}
- Interactions: ${metrics.user?.interactions || 0}
- Time on Site: ${metrics.user?.timeOnSite ? `${(metrics.user.timeOnSite / 1000).toFixed(1)}s` : 'N/A'}

## Active Alerts (${activeAlerts.length})
${activeAlerts.slice(-5).map(alert => `- ${alert.severity.toUpperCase()}: ${alert.message}`).join('\n')}
    `.trim();
  }

  public cleanup(): void {
    this.stopMonitoring();
    this.alerts = [];
    this.metrics = {};
  }
}

// Export singleton instance
export const advancedMonitoringSystem = new AdvancedMonitoringSystem();

// Export class and types
export { AdvancedMonitoringSystem };
// Types are already exported above as interfaces
