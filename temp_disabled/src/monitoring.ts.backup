// Performance monitoring setup
import { analytics } from './utils/analytics';
import { errorHandler } from './utils/errorHandler';
import { performanceOptimizer } from './utils/performanceOptimizer';
import { performanceOptimizer } from './utils/performanceOptimizer';
import { performanceOptimizer } from './utils/performanceOptimizer';
import { performanceOptimizer } from './utils/performanceOptimizer';
import { performanceOptimizer } from './utils/performanceOptimizer';
import performanceOptimizer from './utils/performanceOptimizer';
import { performanceOptimizer, lazyLoadImages, measurePageLoad, reportWebVitals } from './utils/performanceOptimizer';
>>>>>>> main
>>>>>>> main
>>>>>>> main
=======
>>>>>>> b0d6dda8406c2e54af3529a18b3e8c5f6ab37739
>>>>>>> main
>>>>>>> main

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Track page load
  analytics.trackPageView(window.location.pathname);
  
  // Initialize performance optimizer
  lazyLoadImages();

  // Track Web Vitals
  const metrics = performanceOptimizer.measurePageLoad();
  measurePageLoad().then((metrics: any) => {
    reportWebVitals(metrics);
  });
  performanceOptimizer.lazyLoadImages();
  
  // Monitor long tasks
>>>>>>> main
  performanceOptimizer.monitorLongTasks((entries: PerformanceEntry[]) => {
    entries.forEach((entry: PerformanceEntry) => {
      analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
=======
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 50) {
          analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
        }
      });
>>>>>>> main
    });
    observer.observe({ entryTypes: ['longtask'] });
=======
  // Monitor long tasks (if available)
  if ('monitorLongTasks' in performanceOptimizer) {
    (performanceOptimizer as { monitorLongTasks: (callback: (entries: PerformanceEntryList) => void) => void }).monitorLongTasks((entries: PerformanceEntryList) => {
      entries.forEach((entry: PerformanceEntry) => {
        analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
      });
    });
>>>>>>> main
  }
  
>>>>>>> main
  // Track Web Vitals
  const metrics = performanceOptimizer.measurePageLoad();
  const metrics = performanceOptimizer.measurePageLoad();
  const metrics = performanceOptimizer.measurePageLoadTiming();
  const metrics = performanceOptimizer.measurePageLoad();
>>>>>>> main
>>>>>>> main
>>>>>>> main
  if (metrics) {
    performanceOptimizer.reportWebVitals(metrics);
  }
  
  // Monitor long tasks
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry: PerformanceEntry) => {
      analytics.track('long_task', 'performance', 'detected', undefined, entry.duration, { duration: entry.duration });
    });
  });
  observer.observe({ entryTypes: ['longtask'] });
  
  // Track additional performance metrics
  const timingMetrics = performanceOptimizer.measurePageLoad();
  if (timingMetrics) {
    performanceOptimizer.reportWebVitals(timingMetrics);
  }
=======
>>>>>>> b0d6dda8406c2e54af3529a18b3e8c5f6ab37739
>>>>>>> main
}

export { analytics, errorHandler };