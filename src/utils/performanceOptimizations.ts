/**
 * Performance Optimization Utilities
 * Advanced performance monitoring and optimization tools
 */

export interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  memoryUsage: number;
  bundleSize: number;
  networkSpeed: string;
  cpuUsage: number;
  storageUsed: number;
  [key: string]: number | string;
}

export interface OptimizationRecommendation {
  type: 'critical' | 'warning' | 'info';
  title: string;
  description: string;
  impact: 'high' | 'medium' | 'low';
  action: string;
}

class PerformanceOptimizer {
  private metrics: PerformanceMetrics | null = null;
  private observers: PerformanceObserver[] = [];
  private recommendations: OptimizationRecommendation[] = [];

  constructor() {
    this.initializePerformanceMonitoring();
  }

  private initializePerformanceMonitoring(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    // Monitor Core Web Vitals
    this.observeCoreWebVitals();
    
    // Monitor resource loading
    this.observeResourceLoading();
    
    // Monitor memory usage
    this.observeMemoryUsage();
    
    // Monitor network performance
    this.observeNetworkPerformance();
  }

  private observeCoreWebVitals(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            const paintEntry = entry as PerformancePaintTiming;
            if (paintEntry.name === 'first-contentful-paint') {
              this.updateMetric('fcp', paintEntry.startTime);
            }
          } else if (entry.entryType === 'largest-contentful-paint') {
            this.updateMetric('lcp', entry.startTime);
          } else if (entry.entryType === 'first-input') {
            const fidEntry = entry as PerformanceEventTiming;
            this.updateMetric('fid', fidEntry.processingStart - fidEntry.startTime);
          } else if (entry.entryType === 'layout-shift') {
            const clsEntry = entry as PerformanceEntry & { value: number };
            this.updateMetric('cls', clsEntry.value);
          }
        }
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe Core Web Vitals:', error);
    }
  }

  private observeResourceLoading(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            this.analyzeResourcePerformance(resourceEntry);
          }
        }
      });

      observer.observe({ entryTypes: ['resource'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe resource loading:', error);
    }
  }

  private observeMemoryUsage(): void {
    if ('memory' in performance) {
      const memory = (performance as { memory: { usedJSHeapSize: number } }).memory;
      this.updateMetric('memoryUsage', memory.usedJSHeapSize / 1024 / 1024); // MB
    }
  }

  private observeNetworkPerformance(): void {
    if ('connection' in navigator) {
      const connection = (navigator as { connection: { effectiveType?: string } }).connection;
      this.updateMetric('networkSpeed', connection.effectiveType || 'unknown');
    }
  }

  private updateMetric(key: keyof PerformanceMetrics, value: number | string): void {
    if (!this.metrics) {
      this.metrics = {
        fcp: 0,
        lcp: 0,
        fid: 0,
        cls: 0,
        ttfb: 0,
        memoryUsage: 0,
        bundleSize: 0,
        networkSpeed: 'unknown',
        cpuUsage: 0,
        storageUsed: 0
      };
    }

    (this.metrics as PerformanceMetrics)[key] = value as number | string;
    this.generateRecommendations();
  }

  private analyzeResourcePerformance(entry: PerformanceResourceTiming): void {
    const loadTime = entry.responseEnd - entry.startTime;
    const size = entry.transferSize || 0;

    // Check for slow resources
    if (loadTime > 1000) {
      this.addRecommendation({
        type: 'warning',
        title: 'Slow Resource Loading',
        description: `Resource ${entry.name} took ${loadTime.toFixed(0)}ms to load`,
        impact: 'medium',
        action: 'Consider optimizing or lazy loading this resource'
      });
    }

    // Check for large resources
    if (size > 1024 * 1024) { // 1MB
      this.addRecommendation({
        type: 'info',
        title: 'Large Resource',
        description: `Resource ${entry.name} is ${(size / 1024 / 1024).toFixed(1)}MB`,
        impact: 'low',
        action: 'Consider compressing or splitting this resource'
      });
    }
  }

  private addRecommendation(recommendation: OptimizationRecommendation): void {
    this.recommendations.push(recommendation);
  }

  private generateRecommendations(): void {
    if (!this.metrics) return;

    this.recommendations = [];

    // FCP recommendations
    if (this.metrics.fcp > 1800) {
      this.addRecommendation({
        type: 'critical',
        title: 'Slow First Contentful Paint',
        description: `FCP is ${this.metrics.fcp.toFixed(0)}ms (should be < 1800ms)`,
        impact: 'high',
        action: 'Optimize critical rendering path and reduce render-blocking resources'
      });
    }

    // LCP recommendations
    if (this.metrics.lcp > 2500) {
      this.addRecommendation({
        type: 'critical',
        title: 'Slow Largest Contentful Paint',
        description: `LCP is ${this.metrics.lcp.toFixed(0)}ms (should be < 2500ms)`,
        impact: 'high',
        action: 'Optimize images and largest content elements'
      });
    }

    // FID recommendations
    if (this.metrics.fid > 100) {
      this.addRecommendation({
        type: 'warning',
        title: 'Slow First Input Delay',
        description: `FID is ${this.metrics.fid.toFixed(0)}ms (should be < 100ms)`,
        impact: 'medium',
        action: 'Reduce JavaScript execution time and optimize event handlers'
      });
    }

    // CLS recommendations
    if (this.metrics.cls > 0.1) {
      this.addRecommendation({
        type: 'warning',
        title: 'High Cumulative Layout Shift',
        description: `CLS is ${this.metrics.cls.toFixed(3)} (should be < 0.1)`,
        impact: 'medium',
        action: 'Ensure images and ads have size attributes'
      });
    }

    // Memory recommendations
    if (this.metrics.memoryUsage > 50) {
      this.addRecommendation({
        type: 'warning',
        title: 'High Memory Usage',
        description: `Memory usage is ${this.metrics.memoryUsage.toFixed(1)}MB`,
        impact: 'medium',
        action: 'Check for memory leaks and optimize data structures'
      });
    }
  }

  public getMetrics(): PerformanceMetrics | null {
    return this.metrics;
  }

  public getRecommendations(): OptimizationRecommendation[] {
    return [...this.recommendations];
  }

  public getPerformanceScore(): number {
    if (!this.metrics) return 0;

    let score = 100;
    
    // Deduct points for poor metrics
    if (this.metrics.fcp > 1800) score -= 20;
    if (this.metrics.lcp > 2500) score -= 20;
    if (this.metrics.fid > 100) score -= 15;
    if (this.metrics.cls > 0.1) score -= 15;
    if (this.metrics.memoryUsage > 50) score -= 10;
    if (this.metrics.networkSpeed === 'slow-2g' || this.metrics.networkSpeed === '2g') score -= 10;

    return Math.max(0, score);
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

export const performanceOptimizer = new PerformanceOptimizer();