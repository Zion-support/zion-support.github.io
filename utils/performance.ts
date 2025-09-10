// Performance monitoring utilities
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
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

// Image lazy loading utility
export const lazyLoadImage = (img: HTMLImageElement, src: string): void => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement;
          image.src = src;
          image.classList.remove('lazy');
          observer.unobserve(image);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(img);
};

// Preload critical resources
export const preloadResource = (href: string, as: string): void => {
  if (typeof window === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

// Prefetch resources for better navigation
export const prefetchResource = (href: string): void => {
  if (typeof window === 'undefined') return;

  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};

// Bundle size analyzer
export const analyzeBundleSize = (): void => {
  if (process.env.NODE_ENV !== 'development') return;

  if (typeof window !== 'undefined' && 'performance' in window) {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      console.log('Bundle Analysis:', {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        totalTime: navigation.loadEventEnd - navigation.fetchStart
      });
    }
  }
};

export const getPerformanceScore = (metrics: PerformanceMetrics): {;
}
export const getPerformanceScore = (metrics: PerformanceMetrics): {

};

export const getPerformanceScore = (metrics: PerformanceMetrics): {;

  overall: 'good' | 'needs-improvement' | 'poor';
  scores: {
    fcp: 'good' | 'needs-improvement' | 'poor';
    lcp: 'good' | 'needs-improvement' | 'poor';
    fid: 'good' | 'needs-improvement' | 'poor';
    cls: 'good' | 'needs-improvement' | 'poor';
    ttfb: 'good' | 'needs-improvement' | 'poor';
  }
} => {
  const thresholds = {
export const getPerformanceScore = (metrics: PerformanceMetrics): {
  overall: 'good' | 'needs - improvement' | 'poor';
  scores: {
    fcp: { good: 1000, needsImprovement: 2000 }
    lcp: { good: 1500, needsImprovement: 3000 }
    fid: { good: 50, needsImprovement: 100 }
    cls: { good: 0.05, needsImprovement: 0.1 }
    ttfb: { good: 200, needsImprovement: 400 }
  }
  const getScore = (value: number | undefined, threshold: { good: number; needsImprovement: number }, reverse = false): 'good' | 'needs-improvement' | 'poor' => {
    if (value === undefined) return 'poor';
    const compareValue = reverse ? threshold.good / value : value / threshold.good;
    if (compareValue <= 1) return 'good';
    if (compareValue <= (reverse ? threshold.needsImprovement / threshold.good : threshold.needsImprovement / threshold.good)) return 'needs-improvement';
    return 'poor';

  }
  const scores = {
    fcp: getScore(metrics.fcp, thresholds.fcp)
    lcp: getScore(metrics.lcp, thresholds.lcp)
    fid: getScore(metrics.fid, thresholds.fid)
    cls: getScore(metrics.cls, thresholds.cls, true)
    ttfb: getScore(metrics.ttfb, thresholds.ttfb)
  }
  const poorCount = Object.values(scores).filter(score => score === 'poor').length;
  const needsImprovementCount = Object.values(scores).filter(score => score === 'needs-improvement').length;

  let overall: 'good' | 'needs-improvement' | 'poor';
  if (poorCount > 0) {
    fcp: 'good' | 'needs - improvement' | 'poor';
    lcp: 'good' | 'needs - improvement' | 'poor';
    fid: 'good' | 'needs - improvement' | 'poor';
    cls: 'good' | 'needs - improvement' | 'poor';
    ttfb: 'good' | 'needs - improvement' | 'poor';
  }
} => {
  const thresholds = {
    fcp: { good: 1000, needs_improvement: 2000 },
    lcp: { good: 1500, needs_improvement: 3000 },
    fid: { good: 50, needs_improvement: 100 },
    cls: { good: 0.05, needs_improvement: 0.1 },
    ttfb: { good: 200, needs_improvement: 400 }
  }
;
  const get_score = (value: number | undefined, threshold: { good: number; needs_improvement: number }, reverse = false): 'good' | 'needs - improvement' | 'poor' => {
    // Check condition
if (return 'poor') {
  $2
}
    const compare_value = reverse ? threshold.good / value : value / threshold.good;
    // Check condition
if (return 'good') {
  $2
}
    if () return 'needs - improvement') {
  $2
}
    return 'poor';
  }
;
  const scores = {
    fcp: get_score (metrics.fcp, thresholds.fcp),
    lcp: get_score (metrics.lcp, thresholds.lcp),
    fid: get_score (metrics.fid, thresholds.fid),
    cls: get_score (metrics.cls, thresholds.cls, true),
    ttfb: get_score (metrics.ttfb, thresholds.ttfb);
  }
;
  const poor_count = Object.values (scores).filter (score => score === 'poor').length;
  const needsImprovementCount = Object.values (scores).filter (score => score === 'needs - improvement').length;
;
  let overall: 'good' | 'needs - improvement' | 'poor';
  // Check condition
if ( {) {
  $2
}
    overall = 'poor';
  } else // Check condition
if ( {) {
  $2
}
    overall = 'needs - improvement';
  } else {
    overall = 'good';
  }

  return { overall, scores };
};

  return { overall, scores }
}
export const logPerformanceMetrics = (metrics: PerformanceMetrics, label = 'Performance Metrics') => {
export const logPerformanceMetrics = (metrics: PerformanceMetrics, label = 'Performance Metrics') => {;

  console.group(`🚀 ${label}`);
  if (metrics.fcp !== undefined) console.log('First Contentful Paint:', `${metrics.fcp.toFixed(2)}ms`);
  if (metrics.lcp !== undefined) console.log('Largest Contentful Paint:', `${metrics.lcp.toFixed(2)}ms`);
  if (metrics.fid !== undefined) console.log('First Input Delay:', `${metrics.fid.toFixed(2)}ms`);
  if (metrics.cls !== undefined) console.log('Cumulative Layout Shift:', metrics.cls.toFixed(4));
  if (metrics.ttfb !== undefined) console.log('Time to First Byte:', `${metrics.ttfb.toFixed(2)}ms`);
  console.groupEnd();

import { PerformanceMetrics } from '../types'; export const measurePerformance = (): PerformanceMetrics | null = > { if (typeof window = = = 'undefined' || !('performance' in window)) { return null} try { const navigation = performance && performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming; const paintEntries = performance && performance.getEntriesByType('paint'); const fcp = paintEntries && paintEntries.find(entry = > entry && entry.name = = = 'first-contentful-paint'); const lcp = performance && performance.getEntriesByType('largest-contentful-paint')[0] as PerformanceEntry; const cls = performance && performance.getEntriesByType('layout-shift').reduce((acc, entry) = > { return acc + (entry as any).value}, 0); const fid = performance && performance.getEntriesByType('first-input')[0] as PerformanceEventTiming; return { loadTime: navigation && navigation.loadEventEnd - navigation && navigation.loadEventStart firstContentfulPaint: fcp ? fcp && fcp.startTime: 0 largestContentfulPaint: lcp ? lcp && lcp.startTime: 0 cumulativeLayoutShift: cls firstInputDelay: fid ? fid && fid.processingStart - fid && fid.startTime: 0 }} catch (error) { console && console.warn('Error measuring performance: ', error); return null}
}; export const getPerformanceScore = (metrics: PerformanceMetrics): { overall: 'good' | 'needs-improvement' | 'poor', scores: { loadTime: 'good' | 'needs-improvement' | 'poor', firstContentfulPaint: 'good' | 'needs-improvement' | 'poor', largestContentfulPaint: 'good' | 'needs-improvement' | 'poor', cumulativeLayoutShift: 'good' | 'needs-improvement' | 'poor',
    firstInputDelay: 'good' | 'needs-improvement' | 'poor'}} = > { const thresholds = { loadTime: { good: 2000, needsImprovement: 4000 } firstContentfulPaint: { good: 1000, needsImprovement: 2000 } largestContentfulPaint: { good: 1500, needsImprovement: 3000 } cumulativeLayoutShift: { good: 0 && 0.05, needsImprovement: 0 && 0.1 } firstInputDelay: { good: 50, needsImprovement: 100 } }; const getScore = (value: number, threshold: { good: number,
    needsImprovement: number }, reverse = false) = > { const compareValue = reverse ? threshold && threshold.good / value: value / threshold && threshold.good, if (compareValue < = 1) return 'good', if (compareValue < = (reverse ? threshold && threshold.needsImprovement / threshold && threshold.good: threshold && threshold.needsImprovement / threshold && threshold.good)) return 'needs-improvement'; return 'poor'}; const scores = { loadTime: getScore(metrics && metrics.loadTime, thresholds && thresholds.loadTime) firstContentfulPaint: getScore(metrics && metrics.firstContentfulPaint, thresholds && thresholds.firstContentfulPaint) largestContentfulPaint: getScore(metrics && metrics.largestContentfulPaint, thresholds && thresholds.largestContentfulPaint) cumulativeLayoutShift: getScore(metrics && metrics.cumulativeLayoutShift, thresholds && thresholds.cumulativeLayoutShift, true) firstInputDelay: getScore(metrics && metrics.firstInputDelay, thresholds && thresholds.firstInputDelay) }; const poorCount = Object && Object.values(scores).filter(score = > score = = = 'poor').length; const needsImprovementCount = Object && Object.values(scores).filter(score = > score = = = 'needs-improvement').length; let overall: 'good' | 'needs-improvement' | 'poor'; if (poorCount > 0) { overall = 'poor'} else if (needsImprovementCount > 0) { overall = 'needs-improvement'} else { overall = 'good'} return { overall, scores }}; export const logPerformanceMetrics = (metrics: PerformanceMetrics, label = 'Performance Metrics') = > { console && console.group(`🚀 ${label}`); console && console.log('Load Time: ', `${metrics && metrics.loadTime.toFixed(2)}ms`); console && console.log('First Contentful Paint: ', `${metrics && metrics.firstContentfulPaint.toFixed(2)}ms`); console && console.log('Largest Contentful Paint: ', `${metrics && metrics.largestContentfulPaint.toFixed(2)}ms`); console && console.log('Cumulative Layout Shift: ', metrics && metrics.cumulativeLayoutShift.toFixed(4)); console && console.log('First Input Delay: ', `${metrics && metrics.firstInputDelay.toFixed(2)}ms`); console && console.groupEnd()};

};
  return { overall, scores }
}
};

;
export const logPerformanceMetrics = (metrics: PerformanceMetrics, label = 'Performance Metrics') =>: any {
  console.group (`🚀 ${label}`);
  if (console.log ('First Contentful Paint:', `${metrics.fcp.to_fixed (2)}ms`)) {
  $2
}
  if (console.log ('Largest Contentful Paint:', `${metrics.lcp.to_fixed (2)}ms`)) {
  $2
}
  if (console.log ('First Input Delay:', `${metrics.fid.to_fixed (2)}ms`)) {
  $2
}
  if (console.log ('Cumulative Layout Shift:', metrics.cls.to_fixed (4))) {
  $2
}
  if (console.log ('Time to First Byte:', `${metrics.ttfb.to_fixed (2)}ms`)) {
  $2
}
  console.group_end ();
}

// Performance monitoring utilities
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
};

export const lazyLoadComponent = (importFn: () => Promise<any>) => {
  return React.lazy(importFn);
};

// Web Vitals monitoring
export const reportWebVitals = (metric: any) => {
  if (process.env.NODE_ENV === 'production') {
    // Send to analytics service
    console.log('Web Vital:', metric);
  }
};

// Resource hints for better performance
export const addResourceHints = (): void => {
  if (typeof document === 'undefined') return;

  // DNS prefetch for external domains
  const dnsPrefetchDomains = [
    'fonts.googleapis.com',
    'fonts.gstatic.com',
    'images.unsplash.com'
  ];

  dnsPrefetchDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = `//${domain}`;
    document.head.appendChild(link);
  });
};

// Performance observer for Core Web Vitals
export const observeWebVitals = (callback: (metric: any) => void): void => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach(callback);
  });

  observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
};

// Image optimization helper
export const getOptimizedImageUrl = (
  src: string,
  width: number,
  height?: number,
  quality: number = 75
): string => {
  // This would typically use a service like Cloudinary, ImageKit, or Next.js Image Optimization
  const params = new URLSearchParams({
    w: width.toString(),
    q: quality.toString(),
    ...(height && { h: height.toString() })
  });

  return `${src}?${params.toString()}`;
};

// Bundle splitting helper
export const loadComponent = async <T>(
  importFn: () => Promise<{ default: T }>
): Promise<T> => {
  try {
    const module = await importFn();
    return module.default;
  } catch (error) {
    console.error('Failed to load component:', error);
    throw error;
  }
};

export default {
  debounce,
  throttle,
  lazyLoadImage,
  preloadResource,
  prefetchResource,
  analyzeBundleSize,
  getMemoryUsage,
  inlineCriticalCSS,
  registerServiceWorker,
  addResourceHints,
  observeWebVitals,
  getOptimizedImageUrl,
  loadComponent
};