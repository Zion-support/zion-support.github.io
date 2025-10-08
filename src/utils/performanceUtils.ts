/**
 * Performance Utilities
 * Comprehensive performance monitoring and optimization helpers
 */

export interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
  tti?: number; // Time to Interactive
}

export interface PerformanceThresholds {
  fcp: { good: number; needsImprovement: number };
  lcp: { good: number; needsImprovement: number };
  fid: { good: number; needsImprovement: number };
  cls: { good: number; needsImprovement: number };
  ttfb: { good: number; needsImprovement: number };
}

/**
 * Performance thresholds based on Web Vitals
 */
export const PERFORMANCE_THRESHOLDS: PerformanceThresholds = {
  fcp: { good: 1800, needsImprovement: 3000 },
  lcp: { good: 2500, needsImprovement: 4000 },
  fid: { good: 100, needsImprovement: 300 },
  cls: { good: 0.1, needsImprovement: 0.25 },
  ttfb: { good: 800, needsImprovement: 1800 },
};

/**
 * Measure page load performance
 */
export function measurePageLoad(): PerformanceMetrics | null {
  if (typeof window === 'undefined' || !window.performance) {
    return null;
  }

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  if (!navigation) {
    return null;
  }

  return {
    ttfb: navigation.responseStart - navigation.requestStart,
    fcp: navigation.domContentLoadedEventEnd - navigation.fetchStart,
  };
}

/**
 * Measure resource loading performance
 */
export function measureResourceLoading(): Array<{
  name: string;
  duration: number;
  size: number;
  type: string;
}> {
  if (typeof window === 'undefined' || !window.performance) {
    return [];
  }

  const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
  
  return resources.map(resource => ({
    name: resource.name,
    duration: resource.duration,
    size: resource.transferSize || 0,
    type: resource.initiatorType,
  }));
}

/**
 * Calculate performance score based on metrics
 */
export function calculatePerformanceScore(metrics: PerformanceMetrics): {
  score: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  breakdown: Record<string, { value: number; rating: string }>;
} {
  const scores: number[] = [];
  const breakdown: Record<string, { value: number; rating: string }> = {};

  // Calculate FCP score
  if (metrics.fcp !== undefined) {
    const fcpRating = 
      metrics.fcp <= PERFORMANCE_THRESHOLDS.fcp.good ? 'good' :
      metrics.fcp <= PERFORMANCE_THRESHOLDS.fcp.needsImprovement ? 'needs-improvement' :
      'poor';
    
    const fcpScore = 
      fcpRating === 'good' ? 100 :
      fcpRating === 'needs-improvement' ? 50 :
      0;
    
    scores.push(fcpScore);
    breakdown.fcp = { value: metrics.fcp, rating: fcpRating };
  }

  // Calculate LCP score
  if (metrics.lcp !== undefined) {
    const lcpRating = 
      metrics.lcp <= PERFORMANCE_THRESHOLDS.lcp.good ? 'good' :
      metrics.lcp <= PERFORMANCE_THRESHOLDS.lcp.needsImprovement ? 'needs-improvement' :
      'poor';
    
    const lcpScore = 
      lcpRating === 'good' ? 100 :
      lcpRating === 'needs-improvement' ? 50 :
      0;
    
    scores.push(lcpScore);
    breakdown.lcp = { value: metrics.lcp, rating: lcpRating };
  }

  // Calculate CLS score
  if (metrics.cls !== undefined) {
    const clsRating = 
      metrics.cls <= PERFORMANCE_THRESHOLDS.cls.good ? 'good' :
      metrics.cls <= PERFORMANCE_THRESHOLDS.cls.needsImprovement ? 'needs-improvement' :
      'poor';
    
    const clsScore = 
      clsRating === 'good' ? 100 :
      clsRating === 'needs-improvement' ? 50 :
      0;
    
    scores.push(clsScore);
    breakdown.cls = { value: metrics.cls, rating: clsRating };
  }

  // Calculate overall score
  const overallScore = scores.length > 0 
    ? scores.reduce((a, b) => a + b, 0) / scores.length 
    : 0;

  const overallRating = 
    overallScore >= 80 ? 'good' :
    overallScore >= 50 ? 'needs-improvement' :
    'poor';

  return {
    score: Math.round(overallScore),
    rating: overallRating,
    breakdown,
  };
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function for performance optimization
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * Lazy load images with Intersection Observer
 */
export function lazyLoadImages(selector: string = 'img[data-src]'): void {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return;
  }

  const images = document.querySelectorAll(selector);
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.getAttribute('data-src');
        
        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

/**
 * Prefetch resources for better performance
 */
export function prefetchResources(urls: string[]): void {
  if (typeof window === 'undefined') {
    return;
  }

  urls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  });
}

/**
 * Preload critical resources
 */
export function preloadResources(resources: Array<{ url: string; as: string }>): void {
  if (typeof window === 'undefined') {
    return;
  }

  resources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.url;
    link.as = resource.as;
    document.head.appendChild(link);
  });
}

/**
 * Get memory usage information
 */
export function getMemoryUsage(): {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
} | null {
  if (typeof window === 'undefined' || !(performance as any).memory) {
    return null;
  }

  const memory = (performance as any).memory;
  
  return {
    usedJSHeapSize: memory.usedJSHeapSize,
    totalJSHeapSize: memory.totalJSHeapSize,
    jsHeapSizeLimit: memory.jsHeapSizeLimit,
  };
}

/**
 * Monitor long tasks (>50ms)
 */
export function monitorLongTasks(callback: (duration: number) => void): void {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return;
  }

  try {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        callback(entry.duration);
      });
    });

    observer.observe({ entryTypes: ['longtask'] });
  } catch (error) {
    console.warn('Long task monitoring not supported:', error);
  }
}

/**
 * Format bytes to human-readable format
 */
export function formatBytes(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Log performance metrics to console (development only)
 */
export function logPerformanceMetrics(): void {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const metrics = measurePageLoad();
  if (metrics) {
    console.group('⚡ Performance Metrics');
    console.log('TTFB:', metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A');
    console.log('FCP:', metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A');
    console.groupEnd();
  }

  const resources = measureResourceLoading();
  if (resources.length > 0) {
    console.group('📦 Resource Loading');
    console.table(
      resources
        .sort((a, b) => b.duration - a.duration)
        .slice(0, 10)
        .map(r => ({
          name: r.name.split('/').pop(),
          duration: `${r.duration.toFixed(2)}ms`,
          size: formatBytes(r.size),
          type: r.type,
        }))
    );
    console.groupEnd();
  }

  const memory = getMemoryUsage();
  if (memory) {
    console.group('💾 Memory Usage');
    console.log('Used:', formatBytes(memory.usedJSHeapSize));
    console.log('Total:', formatBytes(memory.totalJSHeapSize));
    console.log('Limit:', formatBytes(memory.jsHeapSizeLimit));
    console.groupEnd();
  }
}

/**
 * Initialize performance monitoring
 */
export function initPerformanceMonitoring(): void {
  if (typeof window === 'undefined') {
    return;
  }

  // Log metrics on page load
  if (document.readyState === 'complete') {
    logPerformanceMetrics();
  } else {
    window.addEventListener('load', () => {
      setTimeout(logPerformanceMetrics, 1000);
    });
  }

  // Monitor long tasks
  monitorLongTasks((duration) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`⚠️ Long task detected: ${duration.toFixed(2)}ms`);
    }
  });
}

export default {
  measurePageLoad,
  measureResourceLoading,
  calculatePerformanceScore,
  debounce,
  throttle,
  lazyLoadImages,
  prefetchResources,
  preloadResources,
  getMemoryUsage,
  monitorLongTasks,
  formatBytes,
  logPerformanceMetrics,
  initPerformanceMonitoring,
  PERFORMANCE_THRESHOLDS,
};
