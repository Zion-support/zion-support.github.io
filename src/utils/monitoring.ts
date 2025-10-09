'use client';
/**
 * Comprehensive Monitoring Utility;
 * Real-time application monitoring, performance tracking, and error reporting;
 * Comprehensive Monitoring Utility
 * Real-time application monitoring, performance tracking, and error reporting
 */
export interface PerformanceMetrics {
  
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  inp?: number;
}
export interface ErrorReport {
  ;
  message: string;
  stack?: string;
  component?: string;,
    timestamp: number;,
    userAgent: string;,
    url: string;
class MonitoringService {
  
  private metrics: PerformanceMetrics = {}
  private errors: ErrorReport[] = []
  private observer: PerformanceObserver | null = null;
            if (!(entry as any).hadRecentInput) {
  
              clsValue += entry.value;
              this.metrics.cls = clsValue;
              this.reportMetric('cls', clsValue);
        clsObserver.observe({ entryTypes: ['layout-shift'] })
        // First Contentful Paint;
        message: `Unhandled Promise Rejection: ${event.reason}`,
  private reportMetric(name: string, value: number): void {
    // Sample rate;
    if (Math.random() > performanceConfig.monitoring.sampleRate) {
      return;
    // Send to analytics (if configured)
    if (typeof gtag === 'function') {
  
      gtag('event', name, {
  ;
  value: Math.round(name === 'cls' ? value * 1000 : value),
        event_category: 'Web Vitals'
  public logError(error: ErrorReport): void {
this.errors.push(error)
    // Keep only last 50 errors;
    if (this.errors.length > 50) {
  
      this.errors = this.errors.slice(-50)
    // console.error('[Error]', error)
    // Send to error tracking service (if configured)
  public getMetrics(): PerformanceMetrics {
  
    return { ...this.metrics }
  public getErrors(): ErrorReport[] {
  
    return [...this.errors]
  public clearErrors(): void {
  
    this.errors = []
  public measureMemory(): void {
  
    if ('memory' in performance && performanceConfig.monitoring.enableMemoryMonitoring) {
const _memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number }
    }).memory;
      if (memory) {
  
        console.log('[Memory]', {
  ;
  used: `${Math.round(memory.usedJSHeapSize / 1048576)}MB`,
          total: `${Math.round(memory.totalJSHeapSize / 1048576)}MB`,
          limit: `${Math.round(memory.jsHeapSizeLimit / 1048576)}MB`
  public measureNavigationTiming(): void {
  
    if ('performance' in window && 'getEntriesByType' in performance) {
// Singleton instance;
const _monitoring = new MonitoringService()
export default monitoring;
// Singleton instance
const monitoring = new MonitoringService()
export default monitoring