/**
 * Performance Optimizer
 * Simple performance monitoring utilities
 */

export interface PerformanceMetrics {
  componentName: string;
  renderTime: number;
  timestamp: Date;
}

export class PerformanceOptimizer {
  private metrics: Map<string, PerformanceMetrics[]> = new Map();
  private renderStartTimes: Map<string, number> = new Map();

  startRender(componentName: string): void {
    this.renderStartTimes.set(componentName, performance.now());
  }

  endRender(componentName: string): void {
    const startTime = this.renderStartTimes.get(componentName);
    if (!startTime) return;

    const renderTime = performance.now() - startTime;
    const metrics: PerformanceMetrics = {
      componentName,
      renderTime,
      timestamp: new Date()
    };

    if (!this.metrics.has(componentName)) {
      this.metrics.set(componentName, []);
    }
    
    const componentMetrics = this.metrics.get(componentName)!;
    componentMetrics.push(metrics);
    
    if (componentMetrics.length > 100) {
      componentMetrics.shift();
    }
    
    this.renderStartTimes.delete(componentName);
  }

  getAverageRenderTime(componentName: string): number {
    const metrics = this.metrics.get(componentName);
    if (!metrics || metrics.length === 0) return 0;
    
    const sum = metrics.reduce((acc, m) => acc + m.renderTime, 0);
    return sum / metrics.length;
  }

  getSlowComponents(thresholdMs: number = 16): Array<{ name: string; avgTime: number }> {
    const slow: Array<{ name: string; avgTime: number }> = [];
    
    this.metrics.forEach((metrics, componentName) => {
      const avgTime = this.getAverageRenderTime(componentName);
      if (avgTime > thresholdMs) {
        slow.push({ name: componentName, avgTime });
      }
    });
    
    return slow.sort((a, b) => b.avgTime - a.avgTime);
  }

  clearMetrics(): void {
    this.metrics.clear();
    this.renderStartTimes.clear();
  }

  getPerformanceSummary() {
    const slowComponents = this.getSlowComponents();
    const allMetrics: PerformanceMetrics[] = [];
    this.metrics.forEach(metrics => allMetrics.push(...metrics));
    
    const avgRenderTime = allMetrics.length > 0 
      ? allMetrics.reduce((acc, m) => acc + m.renderTime, 0) / allMetrics.length 
      : 0;

    const currentMemoryUsage = this.getMemoryUsage();
    const recommendations = this.generateRecommendations(avgRenderTime, slowComponents);

    return {
      totalComponents: this.metrics.size,
      totalRenders: allMetrics.length,
      averageRenderTime: avgRenderTime.toFixed(2) + 'ms',
      slowComponents: slowComponents.length,
      performanceGrade: avgRenderTime < 16 ? 'A' : 'B',
      currentMemoryUsage: currentMemoryUsage.toFixed(2) + 'MB',
      recommendations
    };
  }

  private getMemoryUsage(): number {
    if (typeof performance !== 'undefined' && 'memory' in performance) {
      const memory = (performance as any).memory;
      return memory.usedJSHeapSize / 1048576; // Convert to MB
    }
    return 0;
  }

  private generateRecommendations(avgRenderTime: number, slowComponents: Array<{ name: string; avgTime: number }>): string[] {
    const recommendations: string[] = [];
    
    if (avgRenderTime > 16) {
      recommendations.push('Overall render time is above 16ms target. Consider lazy loading or code splitting.');
    }
    
    if (slowComponents.length > 0) {
      recommendations.push(`${slowComponents.length} slow components detected. Consider memoization with React.memo().`);
    }
    
    if (recommendations.length === 0) {
      recommendations.push('Performance is optimal! Keep monitoring as the application grows.');
    }
    
    return recommendations;
  }

  exportMetrics(): string {
    const summary = this.getPerformanceSummary();
    const slowComponents = this.getSlowComponents();
    
    return JSON.stringify({
      timestamp: new Date().toISOString(),
      summary,
      slowComponents,
      detailedMetrics: Array.from(this.metrics.entries()).map(([component, metrics]) => ({
        component,
        metrics: metrics.slice(-20) // Last 20 renders
      }))
    }, null, 2);
  }
}

export const performanceOptimizer = new PerformanceOptimizer();

export default performanceOptimizer;
