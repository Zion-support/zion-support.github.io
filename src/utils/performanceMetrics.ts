/**
 * Advanced Performance Metrics Collection and Analysis
 * Provides comprehensive performance monitoring and optimization insights
 */

export interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  timestamp: number;
  category: 'core' | 'rendering' | 'network' | 'memory' | 'user-interaction';
  impact: 'high' | 'medium' | 'low';
}

export interface PerformanceReport {
  overallScore: number;
  metrics: PerformanceMetric[];
  recommendations: string[];
  timestamp: number;
  sessionId: string;
}

class PerformanceMetricsCollector {
  private metrics: PerformanceMetric[] = [];
  private sessionId: string;
  private observers: Map<string, PerformanceObserver> = new Map();

  constructor() {
    this.sessionId = this.generateSessionId();
    this.initializeObservers();
  }

  private generateSessionId(): string {
    return `perf_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private initializeObservers(): void {
    // Core Web Vitals observer
    if ('PerformanceObserver' in window) {
      try {
        const vitalsObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            this.collectMetric({
              name: entry.name,
              value: entry.startTime,
              unit: 'ms',
              timestamp: Date.now(),
              category: 'core',
              impact: this.calculateImpact(entry.name, entry.startTime)
            });
          });
        });
        vitalsObserver.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
        this.observers.set('vitals', vitalsObserver);
      } catch (error) {
        console.warn('Failed to initialize vitals observer:', error);
      }

      // Navigation timing observer
      try {
        const navigationObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'navigation') {
              const navEntry = entry as PerformanceNavigationTiming;
              this.collectNavigationMetrics(navEntry);
            }
          });
        });
        navigationObserver.observe({ entryTypes: ['navigation'] });
        this.observers.set('navigation', navigationObserver);
      } catch (error) {
        console.warn('Failed to initialize navigation observer:', error);
      }

      // Resource timing observer
      try {
        const resourceObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'resource') {
              this.collectResourceMetrics(entry as PerformanceResourceTiming);
            }
          });
        });
        resourceObserver.observe({ entryTypes: ['resource'] });
        this.observers.set('resource', resourceObserver);
      } catch (error) {
        console.warn('Failed to initialize resource observer:', error);
      }
    }
  }

  private collectNavigationMetrics(navEntry: PerformanceNavigationTiming): void {
    const metrics = [
      { name: 'DNS Lookup', value: navEntry.domainLookupEnd - navEntry.domainLookupStart, unit: 'ms' },
      { name: 'TCP Connection', value: navEntry.connectEnd - navEntry.connectStart, unit: 'ms' },
      { name: 'TLS Negotiation', value: navEntry.secureConnectionStart ? navEntry.connectEnd - navEntry.secureConnectionStart : 0, unit: 'ms' },
      { name: 'Request Response', value: navEntry.responseEnd - navEntry.requestStart, unit: 'ms' },
      { name: 'DOM Processing', value: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart, unit: 'ms' },
      { name: 'Load Complete', value: navEntry.loadEventEnd - navEntry.loadEventStart, unit: 'ms' }
    ];

    metrics.forEach(metric => {
      this.collectMetric({
        ...metric,
        timestamp: Date.now(),
        category: 'network',
        impact: this.calculateImpact(metric.name, metric.value)
      });
    });
  }

  private collectResourceMetrics(resourceEntry: PerformanceResourceTiming): void {
    const duration = resourceEntry.responseEnd - resourceEntry.startTime;
    const size = resourceEntry.transferSize || 0;
    
    this.collectMetric({
      name: `Resource: ${resourceEntry.name.split('/').pop()}`,
      value: duration,
      unit: 'ms',
      timestamp: Date.now(),
      category: 'network',
      impact: this.calculateImpact('resource-load', duration)
    });

    if (size > 0) {
      this.collectMetric({
        name: `Resource Size: ${resourceEntry.name.split('/').pop()}`,
        value: size,
        unit: 'bytes',
        timestamp: Date.now(),
        category: 'network',
        impact: this.calculateImpact('resource-size', size)
      });
    }
  }

  private calculateImpact(name: string, value: number): 'high' | 'medium' | 'low' {
    const thresholds: Record<string, { high: number; medium: number }> = {
      'largest-contentful-paint': { high: 4000, medium: 2500 },
      'first-input': { high: 300, medium: 100 },
      'layout-shift': { high: 0.25, medium: 0.1 },
      'resource-load': { high: 2000, medium: 1000 },
      'resource-size': { high: 1000000, medium: 500000 },
      'DNS Lookup': { high: 200, medium: 100 },
      'TCP Connection': { high: 300, medium: 150 },
      'Request Response': { high: 1000, medium: 500 },
      'DOM Processing': { high: 200, medium: 100 },
      'Load Complete': { high: 500, medium: 250 }
    };

    const threshold = thresholds[name] || { high: 1000, medium: 500 };
    
    if (value >= threshold.high) return 'high';
    if (value >= threshold.medium) return 'medium';
    return 'low';
  }

  private collectMetric(metric: PerformanceMetric): void {
    this.metrics.push(metric);
    
    // Keep only last 1000 metrics to prevent memory issues
    if (this.metrics.length > 1000) {
      this.metrics = this.metrics.slice(-1000);
    }
  }

  public getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  public getMetricsByCategory(category: PerformanceMetric['category']): PerformanceMetric[] {
    return this.metrics.filter(metric => metric.category === category);
  }

  public getHighImpactMetrics(): PerformanceMetric[] {
    return this.metrics.filter(metric => metric.impact === 'high');
  }

  public generateReport(): PerformanceReport {
    // const highImpactMetrics = this.getHighImpactMetrics();
    const overallScore = this.calculateOverallScore();
    const recommendations = this.generateRecommendations();

    return {
      overallScore,
      metrics: this.metrics,
      recommendations,
      timestamp: Date.now(),
      sessionId: this.sessionId
    };
  }

  private calculateOverallScore(): number {
    if (this.metrics.length === 0) return 100;

    const highImpactCount = this.getHighImpactMetrics().length;
    const mediumImpactCount = this.metrics.filter(m => m.impact === 'medium').length;
    const totalCount = this.metrics.length;

    const penalty = (highImpactCount * 20) + (mediumImpactCount * 10);
    const score = Math.max(0, 100 - (penalty / totalCount) * 100);
    
    return Math.round(score);
  }

  private generateRecommendations(): string[] {
    const recommendations: string[] = [];
    const highImpactMetrics = this.getHighImpactMetrics();

    if (highImpactMetrics.some(m => m.name.includes('largest-contentful-paint'))) {
      recommendations.push('Optimize images and reduce LCP by using WebP format and lazy loading');
    }

    if (highImpactMetrics.some(m => m.name.includes('first-input'))) {
      recommendations.push('Reduce JavaScript execution time and optimize event handlers');
    }

    if (highImpactMetrics.some(m => m.name.includes('layout-shift'))) {
      recommendations.push('Add size attributes to images and avoid dynamic content insertion');
    }

    if (highImpactMetrics.some(m => m.name.includes('Resource'))) {
      recommendations.push('Implement resource bundling and compression');
    }

    if (highImpactMetrics.some(m => m.name.includes('DNS'))) {
      recommendations.push('Use DNS prefetching for external domains');
    }

    if (recommendations.length === 0) {
      recommendations.push('Performance looks good! Continue monitoring for regressions.');
    }

    return recommendations;
  }

  public clearMetrics(): void {
    this.metrics = [];
  }

  public destroy(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers.clear();
  }
}

// Export singleton instance
export const performanceMetrics = new PerformanceMetricsCollector();

// Export utility functions
export const getPerformanceScore = (): number => {
  return performanceMetrics.generateReport().overallScore;
};

export const getPerformanceRecommendations = (): string[] => {
  return performanceMetrics.generateReport().recommendations;
};

export const getCoreWebVitals = (): PerformanceMetric[] => {
  return performanceMetrics.getMetricsByCategory('core');
};

export const getNetworkMetrics = (): PerformanceMetric[] => {
  return performanceMetrics.getMetricsByCategory('network');
};

export const getMemoryMetrics = (): PerformanceMetric[] => {
  if ('memory' in performance) {
    const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
    return [
      {
        name: 'Used JS Heap Size',
        value: memory.usedJSHeapSize,
        unit: 'bytes',
        timestamp: Date.now(),
        category: 'memory',
        impact: memory.usedJSHeapSize > 50000000 ? 'high' : memory.usedJSHeapSize > 25000000 ? 'medium' : 'low'
      },
      {
        name: 'Total JS Heap Size',
        value: memory.totalJSHeapSize,
        unit: 'bytes',
        timestamp: Date.now(),
        category: 'memory',
        impact: 'low'
      },
      {
        name: 'JS Heap Size Limit',
        value: memory.jsHeapSizeLimit,
        unit: 'bytes',
        timestamp: Date.now(),
        category: 'memory',
        impact: 'low'
      }
    ];
  }
  return [];
};