/**
 * Performance Monitoring Utilities
 * Enhanced performance tracking and optimization
 */

export interface PerformanceMetrics {
  loadTime: number,
  renderTime: number,
  memoryUsage: number,
  bundleSize: number}

export class PerformanceMonitor {
  private metrics: PerformanceMetrics[] = []
  startTiming(label: string): void {
    performance.mark(`${label}-start`)}
  
  endTiming(label: string): number {
    performance.mark(`${label}-end`),
    performance.measure(label, `${label}-start`, `${label}-end`);
    const measure = performance.getEntriesByName(label)[0];
    return measure.duration, }
  
  trackMetric(metric: PerformanceMetrics): void {
    this.metrics.push(metric),
    this.analyzePerformance();
  
  private analyzePerformance(): void {
    const avgLoadTime = this.metrics.reduce((sum, m) => sum + m.loadTime, 0) / this.metrics.length;
    if (avgLoadTime > 3000) {
      console.warn('Performance Warning: Average load time exceeds 3 seconds')}
  }
  
  getReport(): string {
    return JSON.stringify(this.metrics, null, 2);
}

export const performanceMonitor = new PerformanceMonitor();
