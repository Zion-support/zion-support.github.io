/**
 * Enhanced Performance Monitoring and Optimization Utilities
 */
import type { PerformanceMetrics, PerformanceReport } from '../types/app.types';

// ============================================================================
// Performance Constants
// ============================================================================
export const PERFORMANCE_THRESHOLDS = {
  FCP: 1800, // First Contentful Paint (ms)
  LCP: 2500, // Largest Contentful Paint (ms)
  FID: 100,  // First Input Delay (ms)
  CLS: 0.1,  // Cumulative Layout Shift
  TTFB: 600, // Time to First Byte (ms)
  RENDER_TIME: 1500, // Render Time (ms)
  LOAD_TIME: 3000,   // Load Time (ms)
  MEMORY_USAGE: 50   // Memory Usage (MB)
} as const;

export const PERFORMANCE_WEIGHTS = {
  FCP: 0.15,
  LCP: 0.25,
  FID: 0.20,
  CLS: 0.15,
  TTFB: 0.10,
  RENDER_TIME: 0.10,
  LOAD_TIME: 0.05
} as const;

// ============================================================================
// Core Performance Functions
// ============================================================================

/**
 * Calculate performance score based on metrics
 */
export function calculatePerformanceScore(metrics: PerformanceMetrics): number {
  let score = 100;
  
  // FCP scoring
  if (metrics.fcp > PERFORMANCE_THRESHOLDS.FCP) {
    score -= (metrics.fcp - PERFORMANCE_THRESHOLDS.FCP) / 100 * PERFORMANCE_WEIGHTS.FCP * 100;
  }
  
  // LCP scoring
  if (metrics.lcp > PERFORMANCE_THRESHOLDS.LCP) {
    score -= (metrics.lcp - PERFORMANCE_THRESHOLDS.LCP) / 100 * PERFORMANCE_WEIGHTS.LCP * 100;
  }
  
  // FID scoring
  if (metrics.fid > PERFORMANCE_THRESHOLDS.FID) {
    score -= (metrics.fid - PERFORMANCE_THRESHOLDS.FID) / 10 * PERFORMANCE_WEIGHTS.FID * 100;
  }
  
  // CLS scoring
  if (metrics.cls > PERFORMANCE_THRESHOLDS.CLS) {
    score -= (metrics.cls - PERFORMANCE_THRESHOLDS.CLS) * 100 * PERFORMANCE_WEIGHTS.CLS * 100;
  }
  
  // TTFB scoring
  if (metrics.ttfb > PERFORMANCE_THRESHOLDS.TTFB) {
    score -= (metrics.ttfb - PERFORMANCE_THRESHOLDS.TTFB) / 100 * PERFORMANCE_WEIGHTS.TTFB * 100;
  }
  
  // Render time scoring
  if (metrics.renderTime > PERFORMANCE_THRESHOLDS.RENDER_TIME) {
    score -= (metrics.renderTime - PERFORMANCE_THRESHOLDS.RENDER_TIME) / 100 * PERFORMANCE_WEIGHTS.RENDER_TIME * 100;
  }
  
  // Load time scoring
  if (metrics.loadTime > PERFORMANCE_THRESHOLDS.LOAD_TIME) {
    score -= (metrics.loadTime - PERFORMANCE_THRESHOLDS.LOAD_TIME) / 100 * PERFORMANCE_WEIGHTS.LOAD_TIME * 100;
  }
  
  return Math.max(0, Math.min(100, score));
}

/**
 * Get current performance metrics
 */
export function getCurrentMetrics(): PerformanceMetrics {
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paintEntries = performance.getEntriesByType('paint');
  
  const metrics: PerformanceMetrics = {
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    renderTime: 0,
    loadTime: 0,
    memoryUsage: 0
  };
  
  // Get FCP
  const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
  if (fcpEntry) {
    metrics.fcp = fcpEntry.startTime;
  }
  
  // Get LCP
  const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
  if (lcpEntries.length > 0) {
    const lastLcpEntry = lcpEntries[lcpEntries.length - 1];
    metrics.lcp = lastLcpEntry.startTime;
  }
  
  // Get FID
  const fidEntries = performance.getEntriesByType('first-input');
  if (fidEntries.length > 0) {
    const fidEntry = fidEntries[0] as any;
    metrics.fid = fidEntry.processingStart - fidEntry.startTime;
  }
  
  // Get CLS
  let clsValue = 0;
  const clsEntries = performance.getEntriesByType('layout-shift');
  clsEntries.forEach(entry => {
    if (!(entry as any).hadRecentInput) {
      clsValue += (entry as any).value;
    }
  });
  metrics.cls = clsValue;
  
  // Get TTFB
  if (navigation) {
    metrics.ttfb = navigation.responseStart - navigation.requestStart;
    metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
  }
  
  // Get render time
  const renderTime = performance.now();
  metrics.renderTime = renderTime;
  
  // Get memory usage
  if ('memory' in performance) {
    const memory = (performance as any).memory;
    metrics.memoryUsage = Math.round(memory.usedJSHeapSize / 1024 / 1024);
  }
  
  return metrics;
}

/**
 * Create performance report
 */
export function createPerformanceReport(metrics: PerformanceMetrics): PerformanceReport {
  const score = calculatePerformanceScore(metrics);
  const timestamp = Date.now();
  
  return {
    metrics,
    score,
    timestamp,
    duration: performance.now()
  };
}

/**
 * Monitor performance continuously
 */
export function startPerformanceMonitoring(
  callback: (report: PerformanceReport) => void,
  interval: number = 5000
): () => void {
  const intervalId = setInterval(() => {
    const metrics = getCurrentMetrics();
    const report = createPerformanceReport(metrics);
    callback(report);
  }, interval);
  
  return () => clearInterval(intervalId);
}

// ============================================================================
// Performance Optimization Utilities
// ============================================================================

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function for performance optimization
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Lazy load images for better performance
 */
export function lazyLoadImages(): void {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src || '';
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach(img => imageObserver.observe(img));
}

/**
 * Preload critical resources
 */
export function preloadCriticalResources(resources: string[]): void {
  resources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'script';
    document.head.appendChild(link);
  });
}

/**
 * Optimize images for better performance
 */
export function optimizeImages(): void {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    // Add loading="lazy" for images below the fold
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
    
    // Add decoding="async" for better performance
    if (!img.hasAttribute('decoding')) {
      img.setAttribute('decoding', 'async');
    }
  });
}

// ============================================================================
// Performance Analysis
// ============================================================================

/**
 * Analyze performance bottlenecks
 */
export function analyzePerformanceBottlenecks(metrics: PerformanceMetrics): string[] {
  const bottlenecks: string[] = [];
  
  if (metrics.fcp > PERFORMANCE_THRESHOLDS.FCP) {
    bottlenecks.push('First Contentful Paint is slow - consider optimizing critical rendering path');
  }
  
  if (metrics.lcp > PERFORMANCE_THRESHOLDS.LCP) {
    bottlenecks.push('Largest Contentful Paint is slow - optimize images and fonts');
  }
  
  if (metrics.fid > PERFORMANCE_THRESHOLDS.FID) {
    bottlenecks.push('First Input Delay is high - reduce JavaScript execution time');
  }
  
  if (metrics.cls > PERFORMANCE_THRESHOLDS.CLS) {
    bottlenecks.push('Cumulative Layout Shift is high - avoid layout shifts');
  }
  
  if (metrics.ttfb > PERFORMANCE_THRESHOLDS.TTFB) {
    bottlenecks.push('Time to First Byte is slow - optimize server response');
  }
  
  if (metrics.renderTime > PERFORMANCE_THRESHOLDS.RENDER_TIME) {
    bottlenecks.push('Render time is slow - optimize JavaScript and CSS');
  }
  
  if (metrics.loadTime > PERFORMANCE_THRESHOLDS.LOAD_TIME) {
    bottlenecks.push('Load time is slow - optimize resource loading');
  }
  
  if (metrics.memoryUsage > PERFORMANCE_THRESHOLDS.MEMORY_USAGE) {
    bottlenecks.push('Memory usage is high - check for memory leaks');
  }
  
  return bottlenecks;
}

/**
 * Get performance recommendations
 */
export function getPerformanceRecommendations(metrics: PerformanceMetrics): string[] {
  const recommendations: string[] = [];
  
  if (metrics.fcp > PERFORMANCE_THRESHOLDS.FCP) {
    recommendations.push('Minify CSS and inline critical CSS');
    recommendations.push('Use font-display: swap for web fonts');
  }
  
  if (metrics.lcp > PERFORMANCE_THRESHOLDS.LCP) {
    recommendations.push('Optimize images with WebP format');
    recommendations.push('Use responsive images with srcset');
  }
  
  if (metrics.fid > PERFORMANCE_THRESHOLDS.FID) {
    recommendations.push('Split JavaScript bundles');
    recommendations.push('Use code splitting and lazy loading');
  }
  
  if (metrics.cls > PERFORMANCE_THRESHOLDS.CLS) {
    recommendations.push('Set explicit dimensions for images and videos');
    recommendations.push('Avoid inserting content above existing content');
  }
  
  if (metrics.ttfb > PERFORMANCE_THRESHOLDS.TTFB) {
    recommendations.push('Use a CDN for static assets');
    recommendations.push('Enable gzip compression');
  }
  
  if (metrics.memoryUsage > PERFORMANCE_THRESHOLDS.MEMORY_USAGE) {
    recommendations.push('Remove unused event listeners');
    recommendations.push('Clear intervals and timeouts');
  }
  
  return recommendations;
}

// ============================================================================
// Performance Reporting
// ============================================================================

/**
 * Send performance data to analytics
 */
export function sendPerformanceData(report: PerformanceReport): void {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('event', 'performance_metrics', {
      event_category: 'performance',
      event_label: 'web_vitals',
      custom_map: {
        fcp: report.metrics.fcp,
        lcp: report.metrics.lcp,
        fid: report.metrics.fid,
        cls: report.metrics.cls,
        ttfb: report.metrics.ttfb,
        render_time: report.metrics.renderTime,
        load_time: report.metrics.loadTime,
        memory_usage: report.metrics.memoryUsage,
        performance_score: report.score
      }
    });
  }
}

/**
 * Log performance data to console
 */
export function logPerformanceData(report: PerformanceReport): void {
  if (process.env.NODE_ENV === 'development') {
    console.group('Performance Report');
    console.log('Score:', report.score);
    console.log('Metrics:', report.metrics);
    console.log('Bottlenecks:', analyzePerformanceBottlenecks(report.metrics));
    console.log('Recommendations:', getPerformanceRecommendations(report.metrics));
    console.groupEnd();
  }
}

// ============================================================================
// Performance Monitoring Setup
// ============================================================================

/**
 * Initialize performance monitoring
 */
export function initializePerformanceMonitoring(): () => void {
  // Start monitoring
  const stopMonitoring = startPerformanceMonitoring((report) => {
    // Send to analytics
    sendPerformanceData(report);
    
    // Log in development
    logPerformanceData(report);
  });
  
  // Optimize images
  optimizeImages();
  
  // Lazy load images
  lazyLoadImages();
  
  return stopMonitoring;
}

// ============================================================================
// Export all functions
// ============================================================================
export {
  PERFORMANCE_THRESHOLDS,
  PERFORMANCE_WEIGHTS
};