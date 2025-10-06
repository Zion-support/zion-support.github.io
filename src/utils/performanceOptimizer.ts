/**
 * Performance optimization utilities
 */

export interface PerformanceBudget {
  maxBundleSize: number; // in KB
  maxImageSize: number; // in KB
  maxLoadTime: number; // in ms
  maxFirstContentfulPaint: number; // in ms
  maxLargestContentfulPaint: number; // in ms
  maxCumulativeLayoutShift: number; // score
}

export interface PerformanceMetrics {
  bundleSize: number;
  imageSize: number;
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

export interface OptimizationResult {
  success: boolean;
  metrics: PerformanceMetrics;
  recommendations: string[];
  warnings: string[];
}

class PerformanceOptimizer {
  private budget: PerformanceBudget;
  private metrics: PerformanceMetrics;

  constructor(budget?: Partial<PerformanceBudget>) {
    this.budget = {
      maxBundleSize: 1000, // 1MB
      maxImageSize: 500, // 500KB
      maxLoadTime: 3000, // 3s
      maxFirstContentfulPaint: 1800, // 1.8s
      maxLargestContentfulPaint: 2500, // 2.5s
      maxCumulativeLayoutShift: 0.1,
      ...budget
    };
    
    this.metrics = {
      bundleSize: 0,
      imageSize: 0,
      loadTime: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      cumulativeLayoutShift: 0,
      firstInputDelay: 0,
      timeToInteractive: 0
    };
  }

  /**
   * Initialize performance monitoring
   */
  initialize(): void {
    if (typeof window !== 'undefined' && 'performance' in window) {
      console.log('Performance optimizer initialized');
      this.setupPerformanceObservers();
      this.measureInitialMetrics();
    }
  }

  /**
   * Set up performance observers for Core Web Vitals
   */
  private setupPerformanceObservers(): void {
    if (!('PerformanceObserver' in window)) return;

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        this.metrics.largestContentfulPaint = lastEntry.startTime;
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const fidEntry = entry as any;
        if (fidEntry.processingStart !== undefined) {
          this.metrics.firstInputDelay = fidEntry.processingStart - fidEntry.startTime;
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      });
      this.metrics.cumulativeLayoutShift = clsValue;
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  }

  /**
   * Measure initial performance metrics
   */
  private measureInitialMetrics(): void {
    if (typeof window === 'undefined') return;

    // Measure page load time
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        this.metrics.loadTime = navigation.loadEventEnd - navigation.fetchStart;
        this.metrics.firstContentfulPaint = navigation.domContentLoadedEventEnd - navigation.fetchStart;
        this.metrics.timeToInteractive = navigation.domInteractive - navigation.fetchStart;
      }
    });

    // Measure bundle size (approximate)
    this.measureBundleSize();
    
    // Measure image sizes
    this.measureImageSizes();
  }

  /**
   * Measure approximate bundle size
   */
  private measureBundleSize(): void {
    if (typeof window === 'undefined') return;

    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;

    scripts.forEach(script => {
      const src = (script as HTMLScriptElement).src;
      if (src) {
        // This is a rough estimate - in production you'd want to use actual bundle analysis
        totalSize += 100; // Assume 100KB per script
      }
    });

    this.metrics.bundleSize = totalSize;
  }

  /**
   * Measure total image sizes
   */
  private measureImageSizes(): void {
    if (typeof window === 'undefined') return;

    const images = document.querySelectorAll('img');
    let totalSize = 0;

    images.forEach(img => {
      // This is a rough estimate - in production you'd want to get actual file sizes
      totalSize += 50; // Assume 50KB per image
    });

    this.metrics.imageSize = totalSize;
  }

  /**
   * Lazy load images for better performance
   */
  lazyLoadImages(): void {
    if (typeof window === 'undefined') return;

    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img['src'] = img.dataset['src'] || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  /**
   * Optimize images by converting to WebP format
   */
  optimizeImages(): void {
    if (typeof window === 'undefined') return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      const src = (img as HTMLImageElement)['src'];
      if (src && !src.includes('.webp')) {
        // In production, you'd want to check if WebP is supported
        // and replace the src with a WebP version
        console.log(`Consider converting ${src} to WebP format`);
      }
    });
  }

  /**
   * Preload critical resources
   */
  preloadCriticalResources(): void {
    if (typeof window === 'undefined') return;

    const criticalResources = [
      '/fonts/main-font.woff2',
      '/css/critical.css',
      '/js/critical.js'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }

  /**
   * Enable service worker for caching
   */
  enableServiceWorker(): void {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered:', registration);
      })
      .catch(error => {
        console.log('Service Worker registration failed:', error);
      });
  }

  /**
   * Analyze performance and provide recommendations
   */
  analyzePerformance(): OptimizationResult {
    const recommendations: string[] = [];
    const warnings: string[] = [];

    // Check bundle size
    if (this.metrics.bundleSize > this.budget.maxBundleSize) {
      warnings.push(`Bundle size (${this.metrics.bundleSize}KB) exceeds budget (${this.budget.maxBundleSize}KB)`);
      recommendations.push('Consider code splitting and lazy loading');
    }

    // Check image size
    if (this.metrics.imageSize > this.budget.maxImageSize) {
      warnings.push(`Total image size (${this.metrics.imageSize}KB) exceeds budget (${this.budget.maxImageSize}KB)`);
      recommendations.push('Optimize images and use WebP format');
    }

    // Check load time
    if (this.metrics.loadTime > this.budget.maxLoadTime) {
      warnings.push(`Load time (${this.metrics.loadTime}ms) exceeds budget (${this.budget.maxLoadTime}ms)`);
      recommendations.push('Optimize critical rendering path and reduce bundle size');
    }

    // Check First Contentful Paint
    if (this.metrics.firstContentfulPaint > this.budget.maxFirstContentfulPaint) {
      warnings.push(`FCP (${this.metrics.firstContentfulPaint}ms) exceeds budget (${this.budget.maxFirstContentfulPaint}ms)`);
      recommendations.push('Optimize critical CSS and reduce render-blocking resources');
    }

    // Check Largest Contentful Paint
    if (this.metrics.largestContentfulPaint > this.budget.maxLargestContentfulPaint) {
      warnings.push(`LCP (${this.metrics.largestContentfulPaint}ms) exceeds budget (${this.budget.maxLargestContentfulPaint}ms)`);
      recommendations.push('Optimize largest content element and improve server response times');
    }

    // Check Cumulative Layout Shift
    if (this.metrics.cumulativeLayoutShift > this.budget.maxCumulativeLayoutShift) {
      warnings.push(`CLS (${this.metrics.cumulativeLayoutShift}) exceeds budget (${this.budget.maxCumulativeLayoutShift})`);
      recommendations.push('Add size attributes to images and avoid inserting content above existing content');
    }

    return {
      success: warnings.length === 0,
      metrics: this.metrics,
      recommendations,
      warnings
    };
  }

  /**
   * Get current performance metrics
   */
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Update performance budget
   */
  updateBudget(newBudget: Partial<PerformanceBudget>): void {
    this.budget = { ...this.budget, ...newBudget };
  }
}

// Create and export a singleton instance
export const performanceOptimizer = new PerformanceOptimizer();

// Export the class for custom instances
export { PerformanceOptimizer };

// Default export for convenience
export default performanceOptimizer;