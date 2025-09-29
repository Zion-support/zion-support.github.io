/**
 * Enhanced Performance Monitor
 * Advanced performance monitoring with real-time metrics and optimization suggestions
 */

export interface PerformanceMetrics {
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  fcp: number; // First Contentful Paint
  fmp: number; // First Meaningful Paint
  si: number; // Speed Index
  tti: number; // Time to Interactive
  memory: {
    used: number;
    total: number;
    limit: number;
  };
  network: {
    effectiveType: string;
    downlink: number;
    rtt: number;
  };
  cpu: {
    usage: number;
    cores: number;
  };
}

export interface PerformanceAlert {
  id: string;
  type: 'warning' | 'error' | 'info';
  metric: keyof PerformanceMetrics;
  value: number;
  threshold: number;
  message: string;
  timestamp: Date;
  suggestions: string[];
}

class EnhancedPerformanceMonitor {
  private metrics: Partial<PerformanceMetrics> = {};
  private alerts: PerformanceAlert[] = [];
  private observers: PerformanceObserver[] = [];
  private isMonitoring = false;
  private thresholds = {
    lcp: 2500, // ms
    fid: 100, // ms
    cls: 0.1, // score
    ttfb: 800, // ms
    fcp: 1800, // ms
    memory: 0.8, // 80% of available memory
  };

  constructor() {
    this.initializeMonitoring();
  }

  private initializeMonitoring(): void {
    if (typeof window === 'undefined') return;

    // Web Vitals monitoring
    this.observeWebVitals();
    
    // Memory monitoring
    this.observeMemory();
    
    // Network monitoring
    this.observeNetwork();
    
    // CPU monitoring
    this.observeCPU();
    
    // Long tasks monitoring
    this.observeLongTasks();
    
    // Layout shift monitoring
    this.observeLayoutShifts();
  }

  private observeWebVitals(): void {
    // LCP monitoring
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as any;
          this.metrics.lcp = lastEntry.startTime;
          this.checkThreshold('lcp', lastEntry.startTime);
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
        this.observers.push(lcpObserver);
      } catch (e) {
        console.warn('LCP monitoring not supported:', e);
      }

      // FID monitoring
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            this.metrics.fid = entry.processingStart - entry.startTime;
            this.checkThreshold('fid', this.metrics.fid);
          });
        });
        fidObserver.observe({ type: 'first-input', buffered: true });
        this.observers.push(fidObserver);
      } catch (e) {
        console.warn('FID monitoring not supported:', e);
      }

      // CLS monitoring
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          this.metrics.cls = clsValue;
          this.checkThreshold('cls', clsValue);
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });
        this.observers.push(clsObserver);
      } catch (e) {
        console.warn('CLS monitoring not supported:', e);
      }
    }
  }

  private observeMemory(): void {
    if ('memory' in performance) {
      const memoryInfo = (performance as any).memory;
      this.metrics.memory = {
        used: memoryInfo.usedJSHeapSize,
        total: memoryInfo.totalJSHeapSize,
        limit: memoryInfo.jsHeapSizeLimit,
      };
      
      const memoryUsage = this.metrics.memory.used / this.metrics.memory.limit;
      this.checkThreshold('memory', memoryUsage);
    }
  }

  private observeNetwork(): void {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      this.metrics.network = {
        effectiveType: connection.effectiveType || 'unknown',
        downlink: connection.downlink || 0,
        rtt: connection.rtt || 0,
      };
    }
  }

  private observeCPU(): void {
    // Basic CPU monitoring using setTimeout
    let lastTime = performance.now();
    let lastUsage = 0;
    
    const measureCPU = () => {
      const currentTime = performance.now();
      const timeDiff = currentTime - lastTime;
      
      // Estimate CPU usage based on timing
      if (timeDiff > 16) { // More than one frame
        lastUsage = Math.min(1, timeDiff / 16);
      } else {
        lastUsage = Math.max(0, lastUsage - 0.1);
      }
      
      this.metrics.cpu = {
        usage: lastUsage,
        cores: navigator.hardwareConcurrency || 1,
      };
      
      lastTime = currentTime;
      setTimeout(measureCPU, 1000);
    };
    
    measureCPU();
  }

  private observeLongTasks(): void {
    if ('PerformanceObserver' in window) {
      try {
        const longTaskObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.duration > 50) { // Tasks longer than 50ms
              this.createAlert('warning', 'longTask', entry.duration, 50, 
                `Long task detected: ${entry.duration.toFixed(2)}ms`, [
                  'Consider breaking up long-running tasks',
                  'Use Web Workers for heavy computations',
                  'Implement code splitting for large bundles'
                ]);
            }
          });
        });
        longTaskObserver.observe({ type: 'longtask', buffered: true });
        this.observers.push(longTaskObserver);
      } catch (e) {
        console.warn('Long task monitoring not supported:', e);
      }
    }
  }

  private observeLayoutShifts(): void {
    if ('PerformanceObserver' in window) {
      try {
        const layoutShiftObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (entry.value > 0.1) { // Significant layout shift
              this.createAlert('warning', 'cls', entry.value, 0.1,
                `Layout shift detected: ${entry.value.toFixed(3)}`, [
                  'Add size attributes to images and videos',
                  'Reserve space for dynamic content',
                  'Avoid inserting content above existing content'
                ]);
            }
          });
        });
        layoutShiftObserver.observe({ type: 'layout-shift', buffered: true });
        this.observers.push(layoutShiftObserver);
      } catch (e) {
        console.warn('Layout shift monitoring not supported:', e);
      }
    }
  }

  private checkThreshold(metric: keyof PerformanceMetrics, value: number): void {
    const threshold = this.thresholds[metric as keyof typeof this.thresholds];
    if (threshold && value > threshold) {
      const alertType = value > threshold * 1.5 ? 'error' : 'warning';
      const suggestions = this.getOptimizationSuggestions(metric, value);
      
      this.createAlert(alertType, metric, value, threshold,
        `${metric.toUpperCase()} threshold exceeded: ${value.toFixed(2)} > ${threshold}`,
        suggestions
      );
    }
  }

  private getOptimizationSuggestions(metric: keyof PerformanceMetrics, value: number): string[] {
    const suggestions: Record<string, string[]> = {
      lcp: [
        'Optimize images with next-gen formats (WebP, AVIF)',
        'Preload critical resources',
        'Remove unused CSS and JavaScript',
        'Use a CDN for static assets',
        'Optimize server response times'
      ],
      fid: [
        'Reduce JavaScript execution time',
        'Break up long tasks',
        'Use Web Workers for heavy computations',
        'Implement code splitting',
        'Optimize third-party scripts'
      ],
      cls: [
        'Add size attributes to images and videos',
        'Reserve space for dynamic content',
        'Avoid inserting content above existing content',
        'Use CSS aspect-ratio for images',
        'Preload fonts with font-display: swap'
      ],
      ttfb: [
        'Optimize server response times',
        'Use a CDN',
        'Enable server-side caching',
        'Optimize database queries',
        'Use HTTP/2 server push for critical resources'
      ],
      fcp: [
        'Optimize critical rendering path',
        'Remove render-blocking resources',
        'Inline critical CSS',
        'Optimize images and fonts',
        'Use preload for critical resources'
      ],
      memory: [
        'Implement proper memory cleanup',
        'Use WeakMap and WeakSet for caches',
        'Avoid memory leaks in event listeners',
        'Implement object pooling',
        'Use requestIdleCallback for non-critical tasks'
      ]
    };

    return suggestions[metric] || ['Review and optimize this metric'];
  }

  private createAlert(
    type: 'warning' | 'error' | 'info',
    metric: keyof PerformanceMetrics,
    value: number,
    threshold: number,
    message: string,
    suggestions: string[]
  ): void {
    const alert: PerformanceAlert = {
      id: `${metric}-${Date.now()}`,
      type,
      metric,
      value,
      threshold,
      message,
      timestamp: new Date(),
      suggestions,
    };

    this.alerts.push(alert);
    
    // Keep only last 100 alerts
    if (this.alerts.length > 100) {
      this.alerts = this.alerts.slice(-100);
    }

    // Emit custom event for external monitoring
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('performance-alert', { detail: alert }));
    }
  }

  public startMonitoring(): void {
    this.isMonitoring = true;
    console.log('🚀 Enhanced Performance Monitor started');
  }

  public stopMonitoring(): void {
    this.isMonitoring = false;
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    console.log('⏹️ Enhanced Performance Monitor stopped');
  }

  public getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  public getAlerts(): PerformanceAlert[] {
    return [...this.alerts];
  }

  public getPerformanceScore(): number {
    const scores = [];
    
    if (this.metrics.lcp) {
      scores.push(this.metrics.lcp < 2500 ? 100 : Math.max(0, 100 - (this.metrics.lcp - 2500) / 25));
    }
    
    if (this.metrics.fid) {
      scores.push(this.metrics.fid < 100 ? 100 : Math.max(0, 100 - (this.metrics.fid - 100) / 2));
    }
    
    if (this.metrics.cls) {
      scores.push(this.metrics.cls < 0.1 ? 100 : Math.max(0, 100 - this.metrics.cls * 1000));
    }
    
    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  }

  public generateReport(): string {
    const score = this.getPerformanceScore();
    const metrics = this.getMetrics();
    const alerts = this.getAlerts();
    
    return `
# Performance Report
Score: ${score}/100

## Metrics
- LCP: ${metrics.lcp?.toFixed(2) || 'N/A'}ms
- FID: ${metrics.fid?.toFixed(2) || 'N/A'}ms
- CLS: ${metrics.cls?.toFixed(3) || 'N/A'}
- TTFB: ${metrics.ttfb?.toFixed(2) || 'N/A'}ms
- Memory Usage: ${metrics.memory ? `${(metrics.memory.used / 1024 / 1024).toFixed(2)}MB` : 'N/A'}

## Alerts (${alerts.length})
${alerts.slice(-5).map(alert => `- ${alert.type.toUpperCase()}: ${alert.message}`).join('\n')}
    `.trim();
  }

  public cleanup(): void {
    this.stopMonitoring();
    this.alerts = [];
    this.metrics = {};
  }
}

// Export singleton instance
export const enhancedPerformanceMonitor = new EnhancedPerformanceMonitor();

// Export types and class
export { EnhancedPerformanceMonitor };
export type { PerformanceMetrics, PerformanceAlert };