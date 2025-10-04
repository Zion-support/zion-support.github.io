/**
 * Advanced Performance Optimizer
 * Comprehensive performance monitoring and optimization utilities
 */

interface PerformanceConfig {
  enableWebVitals: boolean;
  enableResourceTiming: boolean;
  enableMemoryMonitoring: boolean;
  enableNetworkMonitoring: boolean;
  enableBatteryMonitoring: boolean;
  enableDeviceMonitoring: boolean;
  sampleRate: number;
  maxHistorySize: number;
  thresholds: {
    cls: number;
    inp: number;
    fcp: number;
    lcp: number;
    ttfb: number;
  };
}

interface PerformanceMetrics {
  webVitals: {
    cls?: number;
    inp?: number;
    fcp?: number;
    lcp?: number;
    ttfb?: number;
  };
  resources: PerformanceResourceTiming[];
  memory?: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
    jsHeapSizeLimit: number;
  };
  network?: {
    effectiveType: string;
    downlink: number;
    rtt: number;
    saveData: boolean;
  };
  battery?: {
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
    level: number;
  };
  device: {
    pixelRatio: number;
    connectionType: string;
    connectionSpeed: number;
    timestamp: number;
  };
}

interface OptimizationReport {
  score: number;
  recommendations: string[];
  criticalIssues: string[];
  performanceMetrics: PerformanceMetrics;
  timestamp: number;
}

class PerformanceOptimizer {
  private config: PerformanceConfig;
  private metrics: PerformanceMetrics;
  private history: PerformanceMetrics[] = [];
  private observers: PerformanceObserver[] = [];
  private isInitialized = false;

  constructor(config: Partial<PerformanceConfig> = {}) {
    this.config = {
      enableWebVitals: true,
      enableResourceTiming: true,
      enableMemoryMonitoring: true,
      enableNetworkMonitoring: true,
      enableBatteryMonitoring: true,
      enableDeviceMonitoring: true,
      sampleRate: 1.0,
      maxHistorySize: 50,
      thresholds: {
        cls: 0.1,
        inp: 200,
        fcp: 1800,
        lcp: 2500,
        ttfb: 800,
      },
      ...config,
    };

    this.metrics = {
      webVitals: {},
      resources: [],
      device: {
        pixelRatio: window.devicePixelRatio || 1,
        connectionType: 'unknown',
        connectionSpeed: 0,
        timestamp: Date.now(),
      },
    };
  }

  /**
   * Initialize performance monitoring
   */
  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Initialize Web Vitals monitoring
      if (this.config.enableWebVitals) {
        await this.initializeWebVitals();
      }

      // Initialize Resource Timing
      if (this.config.enableResourceTiming) {
        this.initializeResourceTiming();
      }

      // Initialize Memory Monitoring
      if (this.config.enableMemoryMonitoring) {
        this.initializeMemoryMonitoring();
      }

      // Initialize Network Monitoring
      if (this.config.enableNetworkMonitoring) {
        this.initializeNetworkMonitoring();
      }

      // Initialize Battery Monitoring
      if (this.config.enableBatteryMonitoring) {
        await this.initializeBatteryMonitoring();
      }

      // Initialize Device Monitoring
      if (this.config.enableDeviceMonitoring) {
        this.initializeDeviceMonitoring();
      }

      this.isInitialized = true;
      console.log('🚀 Performance Optimizer initialized successfully');
    } catch (error) {
      console.error('❌ Failed to initialize Performance Optimizer:', error);
    }
  }

  /**
   * Initialize Web Vitals monitoring
   */
  private async initializeWebVitals(): Promise<void> {
    try {
      const { onCLS, onINP, onFCP, onLCP, onTTFB } = await import('web-vitals');

      const handleMetric = (metric: any) => {
        if (Math.random() > this.config.sampleRate) return;

        this.metrics.webVitals[
          metric.name.toLowerCase() as keyof typeof this.metrics.webVitals
        ] = metric.value;
        this.checkThresholds(metric.name.toLowerCase(), metric.value);
      };

      onCLS(handleMetric);
      onINP(handleMetric);
      onFCP(handleMetric);
      onLCP(handleMetric);
      onTTFB(handleMetric);
    } catch (error) {
      console.warn('Web Vitals not available:', error);
    }
  }

  /**
   * Initialize Resource Timing monitoring
   */
  private initializeResourceTiming(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver(list => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === 'resource') {
            this.metrics.resources.push(entry as PerformanceResourceTiming);
          }
        });
      });

      observer.observe({ entryTypes: ['resource'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Resource Timing not available:', error);
    }
  }

  /**
   * Initialize Memory monitoring
   */
  private initializeMemoryMonitoring(): void {
    if (!('memory' in performance)) return;

    try {
      const memoryInfo = (performance as any).memory;
      this.metrics.memory = {
        usedJSHeapSize: memoryInfo.usedJSHeapSize,
        totalJSHeapSize: memoryInfo.totalJSHeapSize,
        jsHeapSizeLimit: memoryInfo.jsHeapSizeLimit,
      };
    } catch (error) {
      console.warn('Memory monitoring not available:', error);
    }
  }

  /**
   * Initialize Network monitoring
   */
  private initializeNetworkMonitoring(): void {
    if (!('connection' in navigator)) return;

    try {
      const connection = (navigator as any).connection;
      this.metrics.network = {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData,
      };

      this.metrics.device.connectionType =
        connection.effectiveType || 'unknown';
      this.metrics.device.connectionSpeed = connection.downlink || 0;
    } catch (error) {
      console.warn('Network monitoring not available:', error);
    }
  }

  /**
   * Initialize Battery monitoring
   */
  private async initializeBatteryMonitoring(): Promise<void> {
    if (!('getBattery' in navigator)) return;

    try {
      const battery = await (navigator as any).getBattery();
      this.metrics.battery = {
        charging: battery.charging,
        chargingTime: battery.chargingTime,
        dischargingTime: battery.dischargingTime,
        level: battery.level,
      };
    } catch (error) {
      console.warn('Battery monitoring not available:', error);
    }
  }

  /**
   * Initialize Device monitoring
   */
  private initializeDeviceMonitoring(): void {
    this.metrics.device = {
      pixelRatio: window.devicePixelRatio || 1,
      connectionType: this.metrics.device.connectionType,
      connectionSpeed: this.metrics.device.connectionSpeed,
      timestamp: Date.now(),
    };
  }

  /**
   * Check performance thresholds
   */
  private checkThresholds(metric: string, value: number): void {
    const threshold =
      this.config.thresholds[metric as keyof typeof this.config.thresholds];
    if (threshold && value > threshold) {
      console.warn(
        `⚠️ Performance threshold exceeded: ${metric} = ${value} (threshold: ${threshold})`,
      );
    }
  }

  /**
   * Get current performance metrics
   */
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Get performance history
   */
  getHistory(): PerformanceMetrics[] {
    return [...this.history];
  }

  /**
   * Generate optimization report
   */
  generateReport(): OptimizationReport {
    const score = this.calculatePerformanceScore();
    const recommendations = this.generateRecommendations();
    const criticalIssues = this.identifyCriticalIssues();

    return {
      score,
      recommendations,
      criticalIssues,
      performanceMetrics: this.getMetrics(),
      timestamp: Date.now(),
    };
  }

  /**
   * Calculate performance score (0-100)
   */
  private calculatePerformanceScore(): number {
    let score = 100;
    const { webVitals, resources, memory } = this.metrics;

    // Web Vitals scoring
    Object.entries(webVitals).forEach(([metric, value]) => {
      if (value !== undefined) {
        const threshold =
          this.config.thresholds[metric as keyof typeof this.config.thresholds];
        if (threshold) {
          const ratio = value / threshold;
          if (ratio > 1) {
            score -= Math.min(20, (ratio - 1) * 20);
          }
        }
      }
    });

    // Resource timing scoring
    if (resources.length > 0) {
      const slowResources = resources.filter(r => r.duration > 1000).length;
      score -= Math.min(15, slowResources * 3);
    }

    // Memory scoring
    if (memory) {
      const memoryUsage = memory.usedJSHeapSize / memory.jsHeapSizeLimit;
      if (memoryUsage > 0.8) {
        score -= 10;
      }
    }

    return Math.max(0, Math.round(score));
  }

  /**
   * Generate performance recommendations
   */
  private generateRecommendations(): string[] {
    const recommendations: string[] = [];
    const { webVitals, resources, memory } = this.metrics;

    // Web Vitals recommendations
    if (webVitals.cls && webVitals.cls > this.config.thresholds.cls) {
      recommendations.push(
        'Optimize layout shifts by setting explicit dimensions for images and dynamic content',
      );
    }
    if (webVitals.lcp && webVitals.lcp > this.config.thresholds.lcp) {
      recommendations.push(
        'Optimize Largest Contentful Paint by preloading critical resources and optimizing images',
      );
    }
    if (webVitals.fcp && webVitals.fcp > this.config.thresholds.fcp) {
      recommendations.push(
        'Reduce First Contentful Paint by minimizing render-blocking resources',
      );
    }

    // Resource recommendations
    if (resources.length > 0) {
      const largeResources = resources.filter(r => r.transferSize > 100000);
      if (largeResources.length > 0) {
        recommendations.push(
          `Optimize ${largeResources.length} large resources (>100KB) for better loading performance`,
        );
      }
    }

    // Memory recommendations
    if (memory && memory.usedJSHeapSize / memory.jsHeapSizeLimit > 0.7) {
      recommendations.push(
        'High memory usage detected - consider implementing memory cleanup strategies',
      );
    }

    return recommendations;
  }

  /**
   * Identify critical performance issues
   */
  private identifyCriticalIssues(): string[] {
    const issues: string[] = [];
    const { webVitals } = this.metrics;

    // Critical Web Vitals issues
    if (webVitals.cls && webVitals.cls > this.config.thresholds.cls * 2) {
      issues.push('Critical: Excessive Cumulative Layout Shift detected');
    }
    if (webVitals.lcp && webVitals.lcp > this.config.thresholds.lcp * 2) {
      issues.push('Critical: Very slow Largest Contentful Paint');
    }
    if (webVitals.inp && webVitals.inp > this.config.thresholds.inp * 2) {
      issues.push('Critical: Poor Interaction to Next Paint');
    }

    return issues;
  }

  /**
   * Save metrics to history
   */
  saveToHistory(): void {
    this.history.push({ ...this.metrics });
    if (this.history.length > this.config.maxHistorySize) {
      this.history.shift();
    }
  }

  /**
   * Cleanup observers
   */
  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.isInitialized = false;
  }
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();

// Export types and class for advanced usage
export type { PerformanceConfig, PerformanceMetrics, OptimizationReport };
export { PerformanceOptimizer };
