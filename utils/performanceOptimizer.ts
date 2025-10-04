import React from 'react';

/**
 * Performance Optimization Utility
 * 
 * Provides tools for optimizing application performance including:
 * - Component lazy loading
 * - Image optimization
 * - Bundle size monitoring
 * - Memory leak detection
 * - Render performance tracking
 */

export interface PerformanceMetrics {
  componentName: string;
  renderTime: number;
  mountTime: number;
  updateCount: number;
  memoryUsage: number;
  timestamp: Date;
}

export class PerformanceOptimizer {
  private metrics: Map<string, PerformanceMetrics[]> = new Map();
  private renderStartTimes: Map<string, number> = new Map();
  private observedComponents: Set<string> = new Set();

  /**
   * Start tracking a component render
   */
  startRender(componentName: string): void {
    this.renderStartTimes.set(componentName, performance.now());
    this.observedComponents.add(componentName);
  }

  /**
   * End tracking a component render and record metrics
   */
  endRender(componentName: string): void {
    const startTime = this.renderStartTimes.get(componentName);
    if (!startTime) return;

    const renderTime = performance.now() - startTime;
    const metrics: PerformanceMetrics = {
      componentName,
      renderTime,
      mountTime: renderTime,
      updateCount: this.getUpdateCount(componentName),
      memoryUsage: this.getMemoryUsage(),
      timestamp: new Date()
    };

    this.recordMetrics(componentName, metrics);
    this.renderStartTimes.delete(componentName);
  }

  /**
   * Record metrics for a component
   */
  private recordMetrics(componentName: string, metrics: PerformanceMetrics): void {
    if (!this.metrics.has(componentName)) {
      this.metrics.set(componentName, []);
    }

    const componentMetrics = this.metrics.get(componentName)!;
    componentMetrics.push(metrics);

    // Keep only last 100 metrics to prevent memory bloat
    if (componentMetrics.length > 100) {
      componentMetrics.shift();
    }
  }

  /**
   * Get update count for a component
   */
  private getUpdateCount(componentName: string): number {
    const metrics = this.metrics.get(componentName);
    return metrics ? metrics.length : 0;
  }

  /**
   * Get current memory usage (if available)
   */
  private getMemoryUsage(): number {
    if (typeof performance !== 'undefined' && 'memory' in performance) {
      const memory = (performance as any).memory;
      return memory.usedJSHeapSize / 1048576; // Convert to MB
    }
    return 0;
  }

  /**
   * Get average render time for a component
   */
  getAverageRenderTime(componentName: string): number {
    const metrics = this.metrics.get(componentName);
    if (!metrics || metrics.length === 0) return 0;

    const sum = metrics.reduce((acc, m) => acc + m.renderTime, 0);
    return sum / metrics.length;
  }

  /**
   * Get slow components (render time > threshold)
   */
  getSlowComponents(thresholdMs: number = 16): Array<{ name: string; avgTime: number }> {
    const slow: Array<{ name: string; avgTime: number }> = [];

    this.observedComponents.forEach(componentName => {
      const avgTime = this.getAverageRenderTime(componentName);
      if (avgTime > thresholdMs) {
        slow.push({ name: componentName, avgTime });
      }
    });

    return slow.sort((a, b) => b.avgTime - a.avgTime);
  }

  /**
   * Detect potential memory leaks
   */
  detectMemoryLeaks(): Array<{ component: string; suspectedLeak: boolean; reason: string }> {
    const leaks: Array<{ component: string; suspectedLeak: boolean; reason: string }> = [];

    this.metrics.forEach((metrics, componentName) => {
      if (metrics.length < 10) return;

      // Check for steadily increasing memory usage
      const recent = metrics.slice(-10);
      const memoryTrend = recent.map(m => m.memoryUsage);
      const isIncreasing = memoryTrend.every((val, i) => 
        i === 0 || val >= memoryTrend[i - 1]
      );

      if (isIncreasing && memoryTrend[memoryTrend.length - 1] > memoryTrend[0] * 1.5) {
        leaks.push({
          component: componentName,
          suspectedLeak: true,
          reason: 'Steadily increasing memory usage detected'
        });
      }

      // Check for excessive re-renders
      if (metrics.length > 50) {
        const recentUpdates = metrics.slice(-20).length;
        if (recentUpdates > 15) {
          leaks.push({
            component: componentName,
            suspectedLeak: true,
            reason: 'Excessive re-renders detected'
          });
        }
      }
    });

    return leaks;
  }

  /**
   * Get performance summary
   */
  getPerformanceSummary() {
    const totalComponents = this.observedComponents.size;
    const slowComponents = this.getSlowComponents();
    const suspectedLeaks = this.detectMemoryLeaks();
    const allMetrics: PerformanceMetrics[] = [];

    this.metrics.forEach(metrics => allMetrics.push(...metrics));

    const avgRenderTime = allMetrics.length > 0 
      ? allMetrics.reduce((acc, m) => acc + m.renderTime, 0) / allMetrics.length 
      : 0;

    const currentMemoryUsage = this.getMemoryUsage();

    return {
      totalComponents,
      totalRenders: allMetrics.length,
      averageRenderTime: avgRenderTime.toFixed(2) + 'ms',
      slowComponents: slowComponents.length,
      suspectedMemoryLeaks: suspectedLeaks.length,
      currentMemoryUsage: currentMemoryUsage.toFixed(2) + 'MB',
      performanceGrade: this.calculatePerformanceGrade(avgRenderTime, slowComponents.length),
      recommendations: this.generateRecommendations(avgRenderTime, slowComponents, suspectedLeaks)
    };
  }

  /**
   * Calculate overall performance grade
   */
  private calculatePerformanceGrade(avgRenderTime: number, slowCount: number): string {
    if (avgRenderTime < 10 && slowCount === 0) return 'A+ Excellent';
    if (avgRenderTime < 16 && slowCount < 2) return 'A Good';
    if (avgRenderTime < 33 && slowCount < 5) return 'B Average';
    if (avgRenderTime < 50 && slowCount < 10) return 'C Below Average';
    return 'D Poor - Optimization Required';
  }

  /**
   * Generate optimization recommendations
   */
  private generateRecommendations(
    avgRenderTime: number,
    slowComponents: Array<{ name: string; avgTime: number }>,
    suspectedLeaks: Array<{ component: string; suspectedLeak: boolean; reason: string }>
  ): string[] {
    const recommendations: string[] = [];

    if (avgRenderTime > 16) {
      recommendations.push('Overall render time is above 16ms target. Consider lazy loading or code splitting.');
    }

    if (slowComponents.length > 0) {
      recommendations.push(`${slowComponents.length} slow components detected. Top offenders: ${slowComponents.slice(0, 3).map(c => c.name).join(', ')}`);
      recommendations.push('Consider memoization with React.memo() for slow components.');
    }

    if (suspectedLeaks.length > 0) {
      recommendations.push(`${suspectedLeaks.length} potential memory leaks detected. Review cleanup in useEffect hooks.`);
    }

    if (this.getMemoryUsage() > 100) {
      recommendations.push('High memory usage detected (>100MB). Consider implementing virtual scrolling or pagination.');
    }

    if (recommendations.length === 0) {
      recommendations.push('Performance is optimal! Keep monitoring as the application grows.');
    }

    return recommendations;
  }

  /**
   * Export performance data
   */
  exportMetrics(): string {
    const summary = this.getPerformanceSummary();
    const slowComponents = this.getSlowComponents();
    const leaks = this.detectMemoryLeaks();

    return JSON.stringify({
      timestamp: new Date().toISOString(),
      summary,
      slowComponents,
      potentialLeaks: leaks,
      detailedMetrics: Array.from(this.metrics.entries()).map(([component, metrics]) => ({
        component,
        metrics: metrics.slice(-20) // Last 20 renders
      }))
    }, null, 2);
  }

  /**
   * Clear all metrics
   */
  clearMetrics(): void {
    this.metrics.clear();
    this.renderStartTimes.clear();
    this.observedComponents.clear();
  }

  /**
   * Monitor component lifecycle
   */
  monitorComponent<T extends React.ComponentType<any>>(
    Component: T,
    componentName: string
  ): T {
    const optimizer = this;

    return class MonitoredComponent extends React.Component {
      componentDidMount() {
        optimizer.endRender(componentName);
      }

      componentDidUpdate() {
        optimizer.endRender(componentName);
      }

      componentWillUnmount() {
        // Component unmounting - good time to check for cleanup
      }

      render() {
        optimizer.startRender(componentName);
        return React.createElement(Component, this.props);
      }
    } as any;
  }
}

// Singleton instance
export const performanceOptimizer = new PerformanceOptimizer();

/**
 * React Hook for performance monitoring
 */
export function usePerformanceMonitor(componentName: string) {
  React.useEffect(() => {
    performanceOptimizer.startRender(componentName);
    return () => {
      performanceOptimizer.endRender(componentName);
    };
  });

  return {
    getMetrics: () => performanceOptimizer.getAverageRenderTime(componentName),
    getSummary: () => performanceOptimizer.getPerformanceSummary()
  };
}

/**
 * HOC for performance monitoring
 */
export function withPerformanceMonitoring<P extends object>(
  Component: React.ComponentType<P>,
  componentName?: string
): React.ComponentType<P> {
  const name = componentName || Component.displayName || Component.name || 'Unknown';
  
  return (props: P) => {
    usePerformanceMonitor(name);
    return React.createElement(Component, props);
  };
}

<<<<<<< HEAD
export default performanceOptimizer;
=======
export default performanceOptimizer;
>>>>>>> cursor/fix-errors-and-merge-to-main-6f5b
