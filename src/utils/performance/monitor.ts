import { useEffect } from 'react',
interface PerformanceMetrics {
  loadTime: number,
  firstContentfulPaint: number,
  largestContentfulPaint: number,
  firstInputDelay: number,
  cumulativeLayoutShift: number, }

export class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0;
  };

  constructor() {
    this.initializeMetrics();

  private initializeMetrics(): void {
    if (typeof window === 'undefined') return;

    // Web Vitals measurement
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      this.metrics.loadTime = navigation.loadEventEnd - navigation.fetchStart, }

    // First Contentful Paint
    const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    if (fcpEntry) {
      this.metrics.firstContentfulPaint = fcpEntry.startTime, }

    // Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.largestContentfulPaint = lastEntry.startTime, });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] }),
      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          this.metrics.firstInputDelay = entry.processingStart - entry.startTime, }););
      fidObserver.observe({ entryTypes: ['first-input'] }),
      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            this.metrics.cumulativeLayoutShift += entry.value, }
        }););
      clsObserver.observe({ entryTypes: ['layout-shift'] });
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics }, }

  public reportMetrics(): void {
    if (typeof window === 'undefined') return;
    
    console.log('🚀 Performance Metrics:', this.metrics);
    
    // Send to analytics service
    if (window.gtag) {
      window.gtag('event', 'performance_metrics', {
        event_category: 'Performance',
        event_label: 'Core Web Vitals',
        value: Math.round(this.metrics.largestContentfulPaint),
        custom_map: {
          'load_time': this.metrics.loadTime,
          'fcp': this.metrics.firstContentfulPaint,
          'lcp': this.metrics.largestContentfulPaint,
          'fid': this.metrics.firstInputDelay,
          'cls': this.metrics.cumulativeLayoutShift,
        }
      });
  }
}

// React Hook for Performance Monitoring
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    const monitor = new PerformanceMonitor();
    
    // Report metrics after page load
    const timer = setTimeout(() => {
      monitor.reportMetrics();, 3000);

    return () => clearTimeout(timer);, []);;

export default PerformanceMonitor;
