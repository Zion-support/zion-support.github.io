/**
 * Modern Performance Monitor
 * Advanced performance monitoring and optimization for the Zion website
 */

// Extended Performance Entry types for better type safety
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target: EventTarget | null;
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

interface MemoryInfo {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

interface ExtendedPerformance extends Performance {
  memory?: MemoryInfo;
}

interface NetworkConnection {
  effectiveType?: string;
  downlink?: number;
  rtt?: number;
  saveData?: boolean;
}

interface ExtendedNavigator extends Navigator {
  connection?: NetworkInformation;
}

interface PerformanceMetrics {
  // Core Web Vitals
  lcp: number | null; // Largest Contentful Paint
  fid: number | null; // First Input Delay
  cls: number | null; // Cumulative Layout Shift
  fcp: number | null; // First Contentful Paint
  ttfb: number | null; // Time to First Byte
  
  // Custom Metrics
  pageLoadTime: number;
  domContentLoaded: number;
  windowLoad: number;
  memoryUsage: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  } | null;
  
  // Resource Metrics
  resourceTimings: PerformanceResourceTiming[];
  navigationTiming: PerformanceNavigationTiming | null;
  
  // User Experience Metrics
  interactionToNextPaint: number | null;
  timeToInteractive: number | null;
  
  // Network Metrics
  connectionType: string;
  effectiveType: string;
  downlink: number;
  rtt: number;
}

interface PerformanceConfig {
  enableCoreWebVitals: boolean;
  enableResourceMonitoring: boolean;
  enableMemoryTracking: boolean;
  enableUserTiming: boolean;
  enableNetworkMonitoring: boolean;
  enableCustomMetrics: boolean;
  reportInterval: number;
  maxMetricsHistory: number;
  enableRealTimeMonitoring: boolean;
}

class ModernPerformanceMonitor {
  private config: PerformanceConfig;
  private metrics: PerformanceMetrics;
  private metricsHistory: PerformanceMetrics[] = [];
  private observers: PerformanceObserver[] = [];
  private reportTimer: number | null = null;
  private isInitialized = false;

  constructor(config: Partial<PerformanceConfig> = {}) {
    this.config = {
      enableCoreWebVitals: true,
      enableResourceMonitoring: true,
      enableMemoryTracking: true,
      enableUserTiming: true,
      enableNetworkMonitoring: true,
      enableCustomMetrics: true,
      reportInterval: 5000,
      maxMetricsHistory: 100,
      enableRealTimeMonitoring: true,
      ...config
    };

    this.metrics = this.initializeMetrics();
    this.initialize();
  }

  private initializeMetrics(): PerformanceMetrics {
    return {
      lcp: null,
      fid: null,
      cls: null,
      fcp: null,
      ttfb: null,
      pageLoadTime: 0,
      domContentLoaded: 0,
      windowLoad: 0,
      memoryUsage: null,
      resourceTimings: [],
      navigationTiming: null,
      interactionToNextPaint: null,
      timeToInteractive: null,
      connectionType: 'unknown',
      effectiveType: 'unknown',
      downlink: 0,
      rtt: 0
    };
  }

  private initialize(): void {
    if (this.isInitialized) return;

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.startMonitoring());
    } else {
      this.startMonitoring();
    }

    this.isInitialized = true;
  }

  private startMonitoring(): void {
    if (this.config.enableCoreWebVitals) {
      this.setupCoreWebVitals();
    }

    if (this.config.enableResourceMonitoring) {
      this.setupResourceMonitoring();
    }

    if (this.config.enableMemoryTracking) {
      this.setupMemoryTracking();
    }

    if (this.config.enableUserTiming) {
      this.setupUserTiming();
    }

    if (this.config.enableNetworkMonitoring) {
      this.setupNetworkMonitoring();
    }

    if (this.config.enableCustomMetrics) {
      this.setupCustomMetrics();
    }

    if (this.config.enableRealTimeMonitoring) {
      this.startRealTimeMonitoring();
    }

    // Setup reporting
    this.setupReporting();
  }

  private setupCoreWebVitals(): void {
    // LCP - Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry;
          this.metrics.lcp = lastEntry.startTime;
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(lcpObserver);
      } catch (error) {
        console.warn('LCP monitoring not supported:', error);
      }

      // FID - First Input Delay
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const firstInputEntry = entry as FirstInputEntry;
            this.metrics.fid = firstInputEntry.processingStart - entry.startTime;
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        this.observers.push(fidObserver);
      } catch (error) {
        console.warn('FID monitoring not supported:', error);
      }

      // CLS - Cumulative Layout Shift
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const layoutShiftEntry = entry as LayoutShiftEntry;
            if (!layoutShiftEntry.hadRecentInput) {
              clsValue += layoutShiftEntry.value;
            }
          });
          this.metrics.cls = clsValue;
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(clsObserver);
      } catch (error) {
        console.warn('CLS monitoring not supported:', error);
      }

      // FCP - First Contentful Paint
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              this.metrics.fcp = entry.startTime;
            }
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
        this.observers.push(fcpObserver);
      } catch (error) {
        console.warn('FCP monitoring not supported:', error);
      }
    }

    // TTFB - Time to First Byte
    if (performance.timing) {
      this.metrics.ttfb = performance.timing.responseStart - performance.timing.navigationStart;
    }
  }

  private setupResourceMonitoring(): void {
    if ('PerformanceObserver' in window) {
      try {
        const resourceObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries() as PerformanceResourceTiming[];
          this.metrics.resourceTimings.push(...entries);
        });
        resourceObserver.observe({ entryTypes: ['resource'] });
        this.observers.push(resourceObserver);
      } catch (error) {
        console.warn('Resource monitoring not supported:', error);
      }
    }

    // Navigation timing
    if (performance.navigation) {
      this.metrics.navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    }
  }

  private setupMemoryTracking(): void {
    if ('memory' in performance) {
      const updateMemoryUsage = () => {
        const memory = (performance as ExtendedPerformance).memory;
        this.metrics.memoryUsage = {
          usedJSHeapSize: memory?.usedJSHeapSize || 0,
          totalJSHeapSize: memory?.totalJSHeapSize || 0,
          jsHeapSizeLimit: memory?.jsHeapSizeLimit || 0
        };
      };

      updateMemoryUsage();
      setInterval(updateMemoryUsage, 1000);
    }
  }

  private setupUserTiming(): void {
    // Track page load events
    window.addEventListener('load', () => {
      this.metrics.windowLoad = performance.now();
    });

    document.addEventListener('DOMContentLoaded', () => {
      this.metrics.domContentLoaded = performance.now();
    });

    // Track page load time
    if (performance.timing) {
      this.metrics.pageLoadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    }
  }

  private setupNetworkMonitoring(): void {
    if ('connection' in navigator) {
      const connection = (navigator as ExtendedNavigator).connection;
      if (connection) {
        this.metrics.connectionType = connection.effectiveType || 'unknown';
        this.metrics.effectiveType = connection.effectiveType || 'unknown';
        this.metrics.downlink = connection.downlink || 0;
        this.metrics.rtt = connection.rtt || 0;
      }

      // Listen for connection changes
      if (connection && 'addEventListener' in connection) {
        connection.addEventListener('change', () => {
          this.metrics.connectionType = connection.effectiveType || 'unknown';
          this.metrics.effectiveType = connection.effectiveType || 'unknown';
          this.metrics.downlink = connection.downlink || 0;
          this.metrics.rtt = connection.rtt || 0;
        });
      }
    }
  }

  private setupCustomMetrics(): void {
    // Time to Interactive (TTI) - simplified version
    let lastActivityTime = Date.now();
    const activityThreshold = 5000; // 5 seconds of inactivity

    const updateTTI = () => {
      const now = Date.now();
      if (now - lastActivityTime > activityThreshold) {
        this.metrics.timeToInteractive = performance.now();
      }
    };

    // Track user activity
    ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'].forEach(event => {
      document.addEventListener(event, () => {
        lastActivityTime = Date.now();
        updateTTI();
      }, { passive: true });
    });

    // Interaction to Next Paint (INP) - simplified version
    let interactionCount = 0;
    let totalInteractionDelay = 0;

    ['click', 'keydown', 'pointerdown'].forEach(event => {
      document.addEventListener(event, () => {
        const startTime = performance.now();
        requestAnimationFrame(() => {
          const endTime = performance.now();
          const delay = endTime - startTime;
          interactionCount++;
          totalInteractionDelay += delay;
          this.metrics.interactionToNextPaint = totalInteractionDelay / interactionCount;
        });
      }, { passive: true });
    });
  }

  private startRealTimeMonitoring(): void {
    // Monitor performance in real-time
    setInterval(() => {
      this.updateRealTimeMetrics();
    }, 1000);
  }

  private updateRealTimeMetrics(): void {
    // Update memory usage
    if ('memory' in performance) {
      const memory = (performance as ExtendedPerformance).memory;
      this.metrics.memoryUsage = {
        usedJSHeapSize: memory?.usedJSHeapSize || 0,
        totalJSHeapSize: memory?.totalJSHeapSize || 0,
        jsHeapSizeLimit: memory?.jsHeapSizeLimit || 0
      };
    }

    // Update network metrics
    if ('connection' in navigator) {
      const connection = (navigator as ExtendedNavigator).connection;
      if (connection) {
        this.metrics.connectionType = connection.effectiveType || 'unknown';
        this.metrics.effectiveType = connection.effectiveType || 'unknown';
        this.metrics.downlink = connection.downlink || 0;
        this.metrics.rtt = connection.rtt || 0;
      }
    }
  }

  private setupReporting(): void {
    if (this.config.reportInterval > 0) {
      this.reportTimer = window.setInterval(() => {
        this.reportMetrics();
      }, this.config.reportInterval);
    }
  }

  private reportMetrics(): void {
    // Store current metrics in history
    this.metricsHistory.push({ ...this.metrics });

    // Keep only the last N metrics
    if (this.metricsHistory.length > this.config.maxMetricsHistory) {
      this.metricsHistory.shift();
    }

    // Emit metrics event
    this.emitMetricsEvent();

    // Log metrics in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', this.metrics);
    }
  }

  private emitMetricsEvent(): void {
    const event = new CustomEvent('performance-metrics', {
      detail: {
        current: this.metrics,
        history: this.metricsHistory,
        timestamp: Date.now()
      }
    });
    window.dispatchEvent(event);
  }

  // Public methods
  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public getMetricsHistory(): PerformanceMetrics[] {
    return [...this.metricsHistory];
  }

  public getCoreWebVitals(): { lcp: number | null; fid: number | null; cls: number | null; fcp: number | null; ttfb: number | null } {
    return {
      lcp: this.metrics.lcp,
      fid: this.metrics.fid,
      cls: this.metrics.cls,
      fcp: this.metrics.fcp,
      ttfb: this.metrics.ttfb
    };
  }

  public getPerformanceScore(): number {
    const vitals = this.getCoreWebVitals();
    let score = 100;

    // LCP scoring (0-100)
    if (vitals.lcp !== null) {
      if (vitals.lcp > 4000) score -= 30;
      else if (vitals.lcp > 2500) score -= 15;
    }

    // FID scoring (0-100)
    if (vitals.fid !== null) {
      if (vitals.fid > 300) score -= 30;
      else if (vitals.fid > 100) score -= 15;
    }

    // CLS scoring (0-100)
    if (vitals.cls !== null) {
      if (vitals.cls > 0.25) score -= 30;
      else if (vitals.cls > 0.1) score -= 15;
    }

    return Math.max(0, score);
  }

  public getResourcePerformance(): { slowResources: PerformanceResourceTiming[]; totalResources: number; averageLoadTime: number } {
    const resources = this.metrics.resourceTimings;
    const slowResources = resources.filter(resource => resource.duration > 1000);
    const totalLoadTime = resources.reduce((sum, resource) => sum + resource.duration, 0);
    const averageLoadTime = resources.length > 0 ? totalLoadTime / resources.length : 0;

    return {
      slowResources,
      totalResources: resources.length,
      averageLoadTime
    };
  }

  public markUserTiming(name: string, startMark?: string): void {
    if (startMark) {
      performance.measure(name, startMark);
    } else {
      performance.mark(name);
    }
  }

  public measureUserTiming(name: string, startMark: string, endMark: string): number {
    try {
      performance.measure(name, startMark, endMark);
      const measures = performance.getEntriesByName(name, 'measure');
      return measures.length > 0 ? measures[0].duration : 0;
    } catch (error) {
      console.warn('Failed to measure user timing:', error);
      return 0;
    }
  }

  public getMemoryUsage(): { used: number; total: number; limit: number; percentage: number } | null {
    if (!this.metrics.memoryUsage) return null;

    const { usedJSHeapSize, totalJSHeapSize, jsHeapSizeLimit } = this.metrics.memoryUsage;
    return {
      used: usedJSHeapSize,
      total: totalJSHeapSize,
      limit: jsHeapSizeLimit,
      percentage: (usedJSHeapSize / jsHeapSizeLimit) * 100
    };
  }

  public isPerformanceGood(): boolean {
    const score = this.getPerformanceScore();
    return score >= 80;
  }

  public getPerformanceRecommendations(): string[] {
    const recommendations: string[] = [];
    const vitals = this.getCoreWebVitals();

    if (vitals.lcp && vitals.lcp > 2500) {
      recommendations.push('Optimize Largest Contentful Paint - consider image optimization and critical CSS');
    }

    if (vitals.fid && vitals.fid > 100) {
      recommendations.push('Reduce First Input Delay - minimize JavaScript execution time');
    }

    if (vitals.cls && vitals.cls > 0.1) {
      recommendations.push('Improve Cumulative Layout Shift - ensure stable layout and proper image dimensions');
    }

    const memoryUsage = this.getMemoryUsage();
    if (memoryUsage && memoryUsage.percentage > 80) {
      recommendations.push('High memory usage detected - consider optimizing memory usage');
    }

    const resourcePerf = this.getResourcePerformance();
    if (resourcePerf.slowResources.length > 0) {
      recommendations.push(`Optimize ${resourcePerf.slowResources.length} slow resources`);
    }

    return recommendations;
  }

  public destroy(): void {
    // Clear observers
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];

    // Clear timers
    if (this.reportTimer) {
      clearInterval(this.reportTimer);
      this.reportTimer = null;
    }

    // Clear history
    this.metricsHistory = [];
  }
}

// Create global instance
export const modernPerformanceMonitor = new ModernPerformanceMonitor();

export default modernPerformanceMonitor;