/**
 * Enhanced Performance Monitor
 * Advanced real-time performance monitoring and optimization
 */

interface CoreWebVitals {
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  fcp: number; // First Contentful Paint
  ttfb: number; // Time to First Byte
}

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
  cacheHitRate: number;
  compressionRatio: number;
  imageOptimizationRatio: number;
  codeSplittingRatio: number;
  coreWebVitals: CoreWebVitals;
}

interface PerformanceAlert {
  type: 'warning' | 'error' | 'info';
  message: string;
  metric: string;
  value: number;
  threshold: number;
  timestamp: Date;
}

class EnhancedPerformanceMonitor {
  private metrics: PerformanceMetrics;
  private alerts: PerformanceAlert[] = [];
  private observers: PerformanceObserver[] = [];
  private isMonitoring: boolean = false;
  private alertThresholds = {
    lcp: 2500, // ms
    fid: 100,  // ms
    cls: 0.1,  // score
    fcp: 1800, // ms
    ttfb: 600, // ms
    memoryUsage: 50, // MB
    loadTime: 3000,  // ms
  };

  constructor() {
    this.metrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      bundleSize: 0,
      cacheHitRate: 0,
      compressionRatio: 0,
      imageOptimizationRatio: 0,
      codeSplittingRatio: 0,
      coreWebVitals: {
        lcp: 0,
        fid: 0,
        cls: 0,
        fcp: 0,
        ttfb: 0,
      }
    };
  }

  /**
   * Start comprehensive performance monitoring
   */
  public startMonitoring(): void {
    if (this.isMonitoring) {
      console.warn('Performance monitoring is already running');
      return;
    }

    this.isMonitoring = true;
    console.log('🚀 Enhanced Performance Monitor started');

    // Monitor Core Web Vitals
    this.observeCoreWebVitals();
    
    // Monitor resource loading
    this.observeResourceLoading();
    
    // Monitor memory usage
    this.observeMemoryUsage();
    
    // Monitor navigation timing
    this.observeNavigationTiming();
    
    // Monitor long tasks
    this.observeLongTasks();
    
    // Monitor layout shifts
    this.observeLayoutShifts();
  }

  /**
   * Observe Core Web Vitals
   */
  private observeCoreWebVitals(): void {
    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.coreWebVitals.lcp = lastEntry.startTime;
      
      if (lastEntry.startTime > this.alertThresholds.lcp) {
        this.addAlert('warning', 'LCP', lastEntry.startTime, this.alertThresholds.lcp, 
          'Largest Contentful Paint is slow');
      }
      
      console.log(`📊 LCP: ${lastEntry.startTime.toFixed(2)}ms`);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    this.observers.push(lcpObserver);

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        const fid = entry.processingStart - entry.startTime;
        this.metrics.coreWebVitals.fid = fid;
        
        if (fid > this.alertThresholds.fid) {
          this.addAlert('warning', 'FID', fid, this.alertThresholds.fid, 
            'First Input Delay is high');
        }
        
        console.log(`📊 FID: ${fid.toFixed(2)}ms`);
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });
    this.observers.push(fidObserver);

    // Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          this.metrics.coreWebVitals.cls = clsValue;
          
          if (clsValue > this.alertThresholds.cls) {
            this.addAlert('warning', 'CLS', clsValue, this.alertThresholds.cls, 
              'Cumulative Layout Shift is high');
          }
          
          console.log(`📊 CLS: ${clsValue.toFixed(4)}`);
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
    this.observers.push(clsObserver);

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        this.metrics.coreWebVitals.fcp = entry.startTime;
        
        if (entry.startTime > this.alertThresholds.fcp) {
          this.addAlert('warning', 'FCP', entry.startTime, this.alertThresholds.fcp, 
            'First Contentful Paint is slow');
        }
        
        console.log(`📊 FCP: ${entry.startTime.toFixed(2)}ms`);
      });
    });
    fcpObserver.observe({ entryTypes: ['paint'] });
    this.observers.push(fcpObserver);
  }

  /**
   * Observe resource loading performance
   */
  private observeResourceLoading(): void {
    const resourceObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          const loadTime = resourceEntry.responseEnd - resourceEntry.requestStart;
          
          // Alert for slow resources
          if (loadTime > 1000) {
            this.addAlert('info', 'Slow Resource', loadTime, 1000, 
              `Resource ${resourceEntry.name} took ${loadTime.toFixed(2)}ms`);
          }
          
          console.log(`📦 Resource: ${resourceEntry.name} - ${loadTime.toFixed(2)}ms`);
        }
      });
    });
    resourceObserver.observe({ entryTypes: ['resource'] });
    this.observers.push(resourceObserver);
  }

  /**
   * Observe memory usage
   */
  private observeMemoryUsage(): void {
    if ('memory' in performance) {
      setInterval(() => {
        const memory = (performance as any).memory;
        const usedMemory = memory.usedJSHeapSize / 1024 / 1024; // MB
        const totalMemory = memory.totalJSHeapSize / 1024 / 1024; // MB
        
        this.metrics.memoryUsage = usedMemory;
        
        if (usedMemory > this.alertThresholds.memoryUsage) {
          this.addAlert('warning', 'Memory Usage', usedMemory, this.alertThresholds.memoryUsage, 
            'High memory usage detected');
        }
        
        console.log(`🧠 Memory: ${usedMemory.toFixed(2)}MB / ${totalMemory.toFixed(2)}MB`);
      }, 5000);
    }
  }

  /**
   * Observe navigation timing
   */
  private observeNavigationTiming(): void {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      this.metrics.loadTime = navigation.loadEventEnd - navigation.fetchStart;
      this.metrics.coreWebVitals.ttfb = navigation.responseStart - navigation.fetchStart;
      
      if (this.metrics.loadTime > this.alertThresholds.loadTime) {
        this.addAlert('warning', 'Load Time', this.metrics.loadTime, this.alertThresholds.loadTime, 
          'Page load time is slow');
      }
      
      if (this.metrics.coreWebVitals.ttfb > this.alertThresholds.ttfb) {
        this.addAlert('warning', 'TTFB', this.metrics.coreWebVitals.ttfb, this.alertThresholds.ttfb, 
          'Time to First Byte is slow');
      }
      
      console.log(`⚡ Load Time: ${this.metrics.loadTime.toFixed(2)}ms`);
      console.log(`⚡ TTFB: ${this.metrics.coreWebVitals.ttfb.toFixed(2)}ms`);
    });
  }

  /**
   * Observe long tasks
   */
  private observeLongTasks(): void {
    if ('PerformanceObserver' in window && 'LongTaskTiming' in window) {
      const longTaskObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const duration = entry.duration;
          
          this.addAlert('warning', 'Long Task', duration, 50, 
            `Long task detected: ${duration.toFixed(2)}ms`);
          
          console.log(`🐌 Long Task: ${duration.toFixed(2)}ms`);
        });
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });
      this.observers.push(longTaskObserver);
    }
  }

  /**
   * Observe layout shifts
   */
  private observeLayoutShifts(): void {
    const layoutShiftObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (entry.value > 0.1) {
          this.addAlert('info', 'Layout Shift', entry.value, 0.1, 
            'Significant layout shift detected');
          
          console.log(`🔄 Layout Shift: ${entry.value.toFixed(4)}`);
        }
      });
    });
    layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });
    this.observers.push(layoutShiftObserver);
  }

  /**
   * Add performance alert
   */
  private addAlert(type: 'warning' | 'error' | 'info', metric: string, value: number, threshold: number, message: string): void {
    const alert: PerformanceAlert = {
      type,
      metric,
      value,
      threshold,
      message,
      timestamp: new Date()
    };
    
    this.alerts.push(alert);
    
    // Keep only last 100 alerts
    if (this.alerts.length > 100) {
      this.alerts = this.alerts.slice(-100);
    }
    
    console.warn(`⚠️ Performance Alert: ${message}`);
  }

  /**
   * Get current metrics
   */
  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Get performance alerts
   */
  public getAlerts(): PerformanceAlert[] {
    return [...this.alerts];
  }

  /**
   * Get performance score (0-100)
   */
  public getPerformanceScore(): number {
    let score = 100;
    
    // Deduct points for poor Core Web Vitals
    if (this.metrics.coreWebVitals.lcp > this.alertThresholds.lcp) {
      score -= 20;
    }
    if (this.metrics.coreWebVitals.fid > this.alertThresholds.fid) {
      score -= 15;
    }
    if (this.metrics.coreWebVitals.cls > this.alertThresholds.cls) {
      score -= 15;
    }
    if (this.metrics.coreWebVitals.fcp > this.alertThresholds.fcp) {
      score -= 10;
    }
    if (this.metrics.coreWebVitals.ttfb > this.alertThresholds.ttfb) {
      score -= 10;
    }
    
    // Deduct points for memory usage
    if (this.metrics.memoryUsage > this.alertThresholds.memoryUsage) {
      score -= 10;
    }
    
    // Deduct points for load time
    if (this.metrics.loadTime > this.alertThresholds.loadTime) {
      score -= 20;
    }
    
    return Math.max(0, score);
  }

  /**
   * Generate performance report
   */
  public generateReport(): string {
    const score = this.getPerformanceScore();
    const alerts = this.getAlerts();
    
    let report = `
🚀 Enhanced Performance Report
=============================
Performance Score: ${score}/100

📊 Core Web Vitals:
- LCP: ${this.metrics.coreWebVitals.lcp.toFixed(2)}ms
- FID: ${this.metrics.coreWebVitals.fid.toFixed(2)}ms
- CLS: ${this.metrics.coreWebVitals.cls.toFixed(4)}
- FCP: ${this.metrics.coreWebVitals.fcp.toFixed(2)}ms
- TTFB: ${this.metrics.coreWebVitals.ttfb.toFixed(2)}ms

📈 Performance Metrics:
- Load Time: ${this.metrics.loadTime.toFixed(2)}ms
- Memory Usage: ${this.metrics.memoryUsage.toFixed(2)}MB
- Bundle Size: ${this.metrics.bundleSize}KB
- Cache Hit Rate: ${this.metrics.cacheHitRate.toFixed(2)}%
`;

    if (alerts.length > 0) {
      report += `\n⚠️ Alerts (${alerts.length}):\n`;
      alerts.slice(-10).forEach((alert, index) => {
        report += `${index + 1}. [${alert.type.toUpperCase()}] ${alert.message}\n`;
      });
    }
    
    return report;
  }

  /**
   * Stop monitoring
   */
  public stopMonitoring(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.isMonitoring = false;
    console.log('🛑 Enhanced Performance Monitor stopped');
  }

  /**
   * Cleanup
   */
  public cleanup(): void {
    this.stopMonitoring();
    this.alerts = [];
  }
}

// Export singleton instance
export const enhancedPerformanceMonitor = new EnhancedPerformanceMonitor();
export { EnhancedPerformanceMonitor };
export default EnhancedPerformanceMonitor;