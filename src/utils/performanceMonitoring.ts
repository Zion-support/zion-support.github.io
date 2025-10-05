/**
 * Performance Monitoring Utility
 *
 * Provides comprehensive performance monitoring and optimization features
 */

export interface PerformanceMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  timeToInteractive: number;
  totalBlockingTime: number;
  cumulativeLayoutShift: number;
}

/**
 * Measure Core Web Vitals
 */
export const measureWebVitals = (): Promise<PerformanceMetrics> => {
  return new Promise(resolve => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      resolve({
        pageLoadTime: 0,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        timeToInteractive: 0,
        totalBlockingTime: 0,
        cumulativeLayoutShift: 0,
      });
      return;
    }

    const observer = new PerformanceObserver(list => {
      const entries = list.getEntries();
      const metrics: Partial<PerformanceMetrics> = {};

      entries.forEach(entry => {
        if (entry.entryType === 'paint') {
          const paintEntry = entry as PerformancePaintTiming;
          if (paintEntry.name === 'first-contentful-paint') {
            metrics.firstContentfulPaint = paintEntry.startTime;
          }
        } else if (entry.entryType === 'largest-contentful-paint') {
          metrics.largestContentfulPaint = entry.startTime;
        } else if (entry.entryType === 'layout-shift') {
          const layoutEntry = entry as LayoutShift;
          metrics.cumulativeLayoutShift =
            (metrics.cumulativeLayoutShift || 0) + (layoutEntry.value || 0);
        }
      });

      // Calculate TTI and TBT from navigation timing
      const navigation = performance.getEntriesByType(
        'navigation',
      )[0] as PerformanceNavigationTiming;
      if (navigation) {
        metrics.pageLoadTime = navigation.loadEventEnd - navigation.fetchStart;
        metrics.timeToInteractive =
          navigation.domInteractive - navigation.fetchStart;
        metrics.totalBlockingTime =
          navigation.domContentLoadedEventEnd -
          navigation.domContentLoadedEventStart;
      }

      resolve(metrics as PerformanceMetrics);
    });

    try {
      observer.observe({
        entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift'],
      });

      // Fallback: resolve after timeout if no entries
      setTimeout(() => {
        observer.disconnect();
      }, 10000);
    } catch (error) {
      console.error('Performance observation error:', error);
      resolve({
        pageLoadTime: 0,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        timeToInteractive: 0,
        totalBlockingTime: 0,
        cumulativeLayoutShift: 0,
      });
    }
  });
};

/**
 * Log performance metrics to console (development only)
 */
export const logPerformanceMetrics = async (): Promise<void> => {
  if (process.env.NODE_ENV !== 'development') return;

  const metrics = await measureWebVitals();

  console.group('📊 Performance Metrics');
  console.log('Page Load Time:', `${metrics.pageLoadTime.toFixed(2)}ms`);
  console.log(
    'First Contentful Paint:',
    `${metrics.firstContentfulPaint.toFixed(2)}ms`,
  );
  console.log(
    'Largest Contentful Paint:',
    `${metrics.largestContentfulPaint.toFixed(2)}ms`,
  );
  console.log(
    'Time to Interactive:',
    `${metrics.timeToInteractive.toFixed(2)}ms`,
  );
  console.log(
    'Total Blocking Time:',
    `${metrics.totalBlockingTime.toFixed(2)}ms`,
  );
  console.log(
    'Cumulative Layout Shift:',
    metrics.cumulativeLayoutShift.toFixed(3),
  );
  console.groupEnd();
};

/**
 * Track long tasks that block the main thread
 */
export const trackLongTasks = (callback: (duration: number) => void): void => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window))
    return;

  try {
    const observer = new PerformanceObserver(list => {
      list.getEntries().forEach(entry => {
        if (entry.duration > 50) {
          // Tasks longer than 50ms
          callback(entry.duration);
          console.warn(`Long task detected: ${entry.duration.toFixed(2)}ms`);
        }
      });
    });

    observer.observe({ entryTypes: ['longtask'] });
  } catch (error) {
    console.error('Long task observation error:', error);
  }
};

/**
 * Measure resource loading performance
 */
export interface ResourceTiming {
  name: string;
  duration: number;
  size: number;
  type: string;
}

export const measureResourcePerformance = (): ResourceTiming[] => {
  if (typeof window === 'undefined' || !('performance' in window)) return [];

  const resources = performance.getEntriesByType(
    'resource',
  ) as PerformanceResourceTiming[];

  return resources.map(resource => ({
    name: resource.name.split('/').pop() || resource.name,
    duration: resource.duration,
    size: resource.transferSize || 0,
    type: resource.initiatorType,
  }));
};

/**
 * Get slow resources (> 1 second load time)
 */
export const getSlowResources = (): ResourceTiming[] => {
  const resources = measureResourcePerformance();
  return resources.filter(resource => resource.duration > 1000);
};

/**
 * Memory usage monitoring (if available)
 */
export const getMemoryUsage = (): { used: number; limit: number } | null => {
  if (typeof window === 'undefined') return null;

  const memory = (performance as any).memory;
  if (!memory) return null;

  return {
    used: memory.usedJSHeapSize,
    limit: memory.jsHeapSizeLimit,
  };
};

/**
 * Simple performance mark utility
 */
export const mark = (name: string): void => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    performance.mark(name);
  }
};

/**
 * Measure time between two marks
 */
export const measure = (
  name: string,
  startMark: string,
  endMark: string,
): number => {
  if (typeof window === 'undefined' || !('performance' in window)) return 0;

  try {
    performance.measure(name, startMark, endMark);
    const measures = performance.getEntriesByName(name);
    return measures[measures.length - 1].duration;
  } catch (error) {
    console.error('Performance measure error:', error);
    return 0;
  }
};

/**
 * Clear performance marks and measures
 */
export const clearPerformanceData = (): void => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    performance.clearMarks();
    performance.clearMeasures();
  }
};

// Layout Shift interface
interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}
