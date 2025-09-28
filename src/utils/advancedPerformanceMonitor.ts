/**
 * Advanced Performance Monitor
 * Comprehensive performance tracking and optimization system
 */

import { PerformanceMetrics } from '../types/global';

interface PerformanceThresholds {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  totalBlockingTime: number;
}

interface PerformanceConfig {
  enableWebVitals: boolean;
  enableMemoryMonitoring: boolean;
  enableNetworkMonitoring: boolean;
  enableCustomMetrics: boolean;
  samplingRate: number;
  reportInterval: number;
  thresholds: PerformanceThresholds;
}

// Extended Performance Entry types for better type safety
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target: EventTarget | null;
  hadRecentInput: boolean;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  sources: Array<{
    node: Node | null;
    previousRect: DOMRectReadOnly;
    currentRect: DOMRectReadOnly;
  }>;
}

interface NavigationEntry extends PerformanceEntry {
  fetchStart: number;
  domainLookupStart: number;
  domainLookupEnd: number;
  connectStart: number;
  connectEnd: number;
  secureConnectionStart: number;
  requestStart: number;
  responseStart: number;
  responseEnd: number;
  domContentLoadedEventStart: number;
  domContentLoadedEventEnd: number;
  loadEventStart: number;
  loadEventEnd: number;
}

interface MemoryInfo {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

interface ExtendedPerformance extends Performance {
  memory?: MemoryInfo;
}

// NetworkConnection interface removed as it's not currently used

interface ExtendedNavigator {
  connection?: NetworkConnection & {
    addEventListener?: (event: string, listener: () => void) => void;
    removeEventListener?: (event: string, listener: () => void) => void;
  };
}

interface GoogleAnalytics {
  gtag: (command: string, action: string, parameters?: Record<string, unknown>) => void;
}

interface ExtendedWindow extends Window {
  gtag?: GoogleAnalytics['gtag'];
}

class AdvancedPerformanceMonitor {
  private static instance: AdvancedPerformanceMonitor;
  private metrics: PerformanceMetrics[] = [];
  private config: PerformanceConfig;
  private observer?: PerformanceObserver;
  private isMonitoring = false;
  private reportTimer?: NodeJS.Timeout;

  private constructor() {
    this.config = {
      enableWebVitals: true,
      enableMemoryMonitoring: true,
      enableNetworkMonitoring: true,
      enableCustomMetrics: true,
      samplingRate: 1.0,
      reportInterval: 30000, // 30 seconds
      thresholds: {
        pageLoadTime: 3000,
        firstContentfulPaint: 1800,
        largestContentfulPaint: 2500,
        cumulativeLayoutShift: 0.1,
        firstInputDelay: 100,
        totalBlockingTime: 300,
      },
    };

    this.initializeMonitoring();
  }

  public static getInstance(): AdvancedPerformanceMonitor {
    if (!AdvancedPerformanceMonitor.instance) {
      AdvancedPerformanceMonitor.instance = new AdvancedPerformanceMonitor();
    }
    return AdvancedPerformanceMonitor.instance;
  }

  private initializeMonitoring(): void {
    if (typeof window === 'undefined') return;

    // Initialize Web Vitals monitoring
    if (this.config.enableWebVitals) {
      this.initializeWebVitals();
    }

    // Initialize custom performance observer
    this.initializePerformanceObserver();

    // Initialize memory monitoring
    if (this.config.enableMemoryMonitoring) {
      this.initializeMemoryMonitoring();
    }

    // Initialize network monitoring
    if (this.config.enableNetworkMonitoring) {
      this.initializeNetworkMonitoring();
    }

    // Start periodic reporting
    this.startPeriodicReporting();
  }

  private initializeWebVitals(): void {
    // First Contentful Paint (FCP)
    this.observeMetric('paint', (entry) => {
      if (entry.name === 'first-contentful-paint') {
        this.recordMetric('firstContentfulPaint', entry.startTime);
      }
    });

    // Largest Contentful Paint (LCP)
    this.observeMetric('largest-contentful-paint', (entry) => {
      this.recordMetric('largestContentfulPaint', entry.startTime);
    });

    // First Input Delay (FID)
    this.observeMetric('first-input', (entry) => {
      const firstInputEntry = entry as FirstInputEntry;
      this.recordMetric('firstInputDelay', firstInputEntry.processingStart - entry.startTime);
    });

    // Cumulative Layout Shift (CLS)
    this.observeMetric('layout-shift', (entry) => {
      const layoutShiftEntry = entry as LayoutShiftEntry;
      if (!layoutShiftEntry.hadRecentInput) {
        this.recordMetric('cumulativeLayoutShift', layoutShiftEntry.value);
      }
    });

    // Navigation Timing
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as NavigationEntry;
      if (navigation) {
        this.recordMetric('pageLoadTime', navigation.loadEventEnd - navigation.fetchStart);
        this.recordMetric('domContentLoaded', navigation.domContentLoadedEventEnd - navigation.fetchStart);
        this.recordMetric('firstByte', navigation.responseStart - navigation.fetchStart);
      }
    });
  }

  private observeMetric(type: string, callback: (entry: PerformanceEntry) => void): void {
    if (typeof PerformanceObserver !== 'undefined') {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            callback(entry);
          }
        });
        observer.observe({ type, buffered: true });
      } catch (error) {
        console.warn(`PerformanceObserver not supported for ${type}:`, error);
      }
    }
  }

  private initializePerformanceObserver(): void {
    if (typeof PerformanceObserver === 'undefined') return;

    try {
      this.observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.processPerformanceEntry(entry);
        }
      });

      // Observe various performance entry types
      this.observer.observe({ entryTypes: ['measure', 'navigation', 'resource'] });
    } catch (error) {
      console.warn('PerformanceObserver initialization failed:', error);
    }
  }

  private processPerformanceEntry(entry: PerformanceEntry): void {
    switch (entry.entryType) {
      case 'measure':
        this.recordCustomMetric(entry.name, entry.duration);
        break;
      case 'navigation':
        this.processNavigationTiming(entry as PerformanceNavigationTiming);
        break;
      case 'resource':
        this.processResourceTiming(entry as PerformanceResourceTiming);
        break;
    }
  }

  private processNavigationTiming(navigation: PerformanceNavigationTiming): void {
    const metrics = {
      dns: navigation.domainLookupEnd - navigation.domainLookupStart,
      tcp: navigation.connectEnd - navigation.connectStart,
      request: navigation.responseStart - navigation.requestStart,
      response: navigation.responseEnd - navigation.responseStart,
      processing: navigation.domComplete - navigation.fetchStart,
      load: navigation.loadEventEnd - navigation.loadEventStart,
    };

    Object.entries(metrics).forEach(([key, value]) => {
      if (value > 0) {
        this.recordCustomMetric(`navigation.${key}`, value);
      }
    });
  }

  private processResourceTiming(resource: PerformanceResourceTiming): void {
    const metrics = {
      dns: resource.domainLookupEnd - resource.domainLookupStart,
      tcp: resource.connectEnd - resource.connectStart,
      request: resource.responseStart - resource.requestStart,
      response: resource.responseEnd - resource.responseStart,
      total: resource.responseEnd - resource.startTime,
    };

    Object.entries(metrics).forEach(([key, value]) => {
      if (value > 0) {
        this.recordCustomMetric(`resource.${key}`, value);
      }
    });
  }

  private initializeMemoryMonitoring(): void {
    if (!('memory' in performance)) return;

    const checkMemory = () => {
      const memory = (performance as ExtendedPerformance).memory;
      if (memory) {
        this.recordMetric('memoryUsage', {
          usedJSHeapSize: memory.usedJSHeapSize,
          totalJSHeapSize: memory.totalJSHeapSize,
          jsHeapSizeLimit: memory.jsHeapSizeLimit,
        });
      }
    };

    // Check memory usage periodically
    setInterval(checkMemory, 10000); // Every 10 seconds
    checkMemory(); // Initial check
  }

  private initializeNetworkMonitoring(): void {
    if (!('connection' in navigator)) return;

    const connection = (navigator as ExtendedNavigator).connection;
    if (connection) {
      this.recordMetric('networkInfo', {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData,
      });
    }

    // Monitor connection changes
    if (connection && connection.addEventListener) {
      connection.addEventListener('change', () => {
        this.recordMetric('networkInfo', {
          effectiveType: connection?.effectiveType,
          downlink: connection?.downlink,
          rtt: connection?.rtt,
          saveData: connection?.saveData,
        });
      });
    }
  }

  private recordMetric(key: string, value: number | object): void {
    if (!this.isMonitoring) return;

    const currentMetrics = this.getCurrentMetrics();
    if (key === 'memoryUsage' || key === 'networkInfo') {
      (currentMetrics as Record<string, unknown>)[key] = value;
    } else if (typeof value === 'number') {
      (currentMetrics as Record<string, unknown>)[key] = value;
    }
  }

  private recordCustomMetric(name: string, value: number): void {
    if (!this.config.enableCustomMetrics) return;

    const currentMetrics = this.getCurrentMetrics();
    currentMetrics.customMetrics[name] = value;
  }

  private getCurrentMetrics(): PerformanceMetrics {
    const now = Date.now();
    let current = this.metrics.find(m => m.timestamp === now);

    if (!current) {
      current = {
        timestamp: now,
        pageLoadTime: 0,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        cumulativeLayoutShift: 0,
        firstInputDelay: 0,
        totalBlockingTime: 0,
        customMetrics: {},
      };
      this.metrics.push(current);
    }

    return current;
  }

  private startPeriodicReporting(): void {
    this.reportTimer = setInterval(() => {
      this.reportMetrics();
    }, this.config.reportInterval);
  }

  private reportMetrics(): void {
    const recentMetrics = this.metrics.slice(-10); // Last 10 entries
    if (recentMetrics.length === 0) return;

    // Calculate averages
    const averages = this.calculateAverages(recentMetrics);
    
    // Check thresholds
    const violations = this.checkThresholds(averages);

    // Report to analytics
    this.reportToAnalytics(averages, violations);

    // Clean up old metrics
    this.cleanupOldMetrics();
  }

  private calculateAverages(metrics: PerformanceMetrics[]): Partial<PerformanceMetrics> {
    const averages: Partial<PerformanceMetrics> = {
      customMetrics: {},
    };

    const numericFields = [
      'pageLoadTime', 'firstContentfulPaint', 'largestContentfulPaint',
      'cumulativeLayoutShift', 'firstInputDelay', 'totalBlockingTime'
    ];

    numericFields.forEach(field => {
      const values = metrics.map(m => (m as Record<string, unknown>)[field] as number).filter(v => v > 0);
      if (values.length > 0) {
        averages[field] = values.reduce((a, b) => a + b, 0) / values.length;
      }
    });

    // Calculate custom metrics averages
    const customKeys = new Set<string>();
    metrics.forEach(m => Object.keys(m.customMetrics).forEach(k => customKeys.add(k)));

    customKeys.forEach(key => {
      const values = metrics.map(m => m.customMetrics[key]).filter(v => v > 0);
      if (values.length > 0 && averages.customMetrics) {
        averages.customMetrics[key] = values.reduce((a, b) => a + b, 0) / values.length;
      }
    });

    return averages;
  }

  private checkThresholds(averages: Partial<PerformanceMetrics>): string[] {
    const violations: string[] = [];

    Object.entries(this.config.thresholds).forEach(([key, threshold]) => {
      const value = (averages as Record<string, unknown>)[key] as number;
      if (value && value > threshold) {
        violations.push(`${key}: ${value.toFixed(2)} > ${threshold}`);
      }
    });

    return violations;
  }

  private reportToAnalytics(averages: Partial<PerformanceMetrics>, violations: string[]): void {
    // Report to Google Analytics
    if (typeof window !== 'undefined' && (window as ExtendedWindow).gtag) {
      Object.entries(averages).forEach(([key, value]) => {
        if (typeof value === 'number') {
          (window as ExtendedWindow).gtag!('event', 'performance_metric', {
            metric_name: key,
            metric_value: Math.round(value),
            custom_map: {
              metric_type: 'performance',
            },
          });
        }
      });
    }

    // Report violations
    if (violations.length > 0) {
      console.warn('Performance threshold violations:', violations);
      
      if (typeof window !== 'undefined' && (window as ExtendedWindow).gtag) {
        (window as ExtendedWindow).gtag!('event', 'performance_violation', {
          violations: violations.join(', '),
          violation_count: violations.length,
        });
      }
    }
  }

  private cleanupOldMetrics(): void {
    const cutoff = Date.now() - (5 * 60 * 1000); // Keep last 5 minutes
    this.metrics = this.metrics.filter(m => m.timestamp > cutoff);
  }

  public startMonitoring(): void {
    this.isMonitoring = true;
    console.log('Advanced Performance Monitor started');
  }

  public stopMonitoring(): void {
    this.isMonitoring = false;
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.reportTimer) {
      clearInterval(this.reportTimer);
    }
    console.log('Advanced Performance Monitor stopped');
  }

  public getMetrics(): PerformanceMetrics[] {
    return [...this.metrics];
  }

  public getLatestMetrics(): PerformanceMetrics | null {
    return this.metrics.length > 0 ? this.metrics[this.metrics.length - 1] : null;
  }

  public markCustomMetric(name: string, value?: number): void {
    if (typeof value === 'undefined') {
      performance.mark(name);
    } else {
      this.recordCustomMetric(name, value);
    }
  }

  public measureCustomMetric(name: string, startMark: string, endMark?: string): void {
    try {
      if (endMark) {
        performance.measure(name, startMark, endMark);
      } else {
        performance.measure(name, startMark);
      }
    } catch (error) {
      console.warn(`Failed to measure ${name}:`, error);
    }
  }

  public updateConfig(newConfig: Partial<PerformanceConfig>): void {
    this.config = { ...this.config, ...newConfig };
    
    if (newConfig.reportInterval && this.reportTimer) {
      clearInterval(this.reportTimer);
      this.startPeriodicReporting();
    }
  }

  public getConfig(): PerformanceConfig {
    return { ...this.config };
  }

  public exportMetrics(): string {
    return JSON.stringify({
      metrics: this.metrics,
      config: this.config,
      timestamp: new Date().toISOString(),
    }, null, 2);
  }
}

export default AdvancedPerformanceMonitor;