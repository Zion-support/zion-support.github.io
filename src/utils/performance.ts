// Performance utilities for monitoring and optimization

export interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

export const measurePerformance = (): PerformanceMetrics => {
  const metrics: PerformanceMetrics = {
    loadTime: 0,
    domContentLoaded: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
  };

  // Basic timing metrics
  if (typeof window !== 'undefined' && performance.timing) {
    metrics.loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    metrics.domContentLoaded = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
  }

  // Web Vitals
  if (typeof window !== 'undefined' && performance.getEntriesByType) {
    const paintEntries = performance.getEntriesByType('paint');
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    if (fcpEntry) {
      metrics.firstContentfulPaint = fcpEntry.startTime;
    }

    const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
    if (lcpEntries.length > 0) {
      metrics.largestContentfulPaint = lcpEntries[lcpEntries.length - 1].startTime;
    }

    const fidEntries = performance.getEntriesByType('first-input');
    if (fidEntries.length > 0) {
      metrics.firstInputDelay = (fidEntries[0] as PerformanceEventTiming).processingStart - fidEntries[0].startTime;
    }

    const clsEntries = performance.getEntriesByType('layout-shift');
    if (clsEntries.length > 0) {
      metrics.cumulativeLayoutShift = clsEntries.reduce((sum, entry) => {
        return sum + (entry as any).value;
      }, 0);
    }
  }

  return metrics;
};

export const observeImages = (callback: (image: HTMLImageElement) => void) => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.target instanceof HTMLImageElement) {
        callback(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });

  const images = document.querySelectorAll('img[data-src]');
  images.forEach((image) => {
    if (image instanceof HTMLImageElement) {
      observer.observe(image);
    }
  });

  return () => {
    images.forEach((image) => {
      if (image instanceof HTMLImageElement) {
        observer.unobserve(image);
      }
    });
  };
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};