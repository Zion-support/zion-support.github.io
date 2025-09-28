/**
 * Enhanced Performance Monitoring and Optimization Utilities
 * Provides comprehensive performance tracking, optimization suggestions, and automated improvements
 */

interface PerformanceMetrics {
  lcp: number; // Largest Contentful Paint
  fcp: number; // First Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  fmp: number; // First Meaningful Paint
  loadTime: number; // Total page load time
  memoryUsage: number; // Memory usage in MB
  bundleSize: number; // Estimated bundle size
}

interface OptimizationSuggestion {
  id: string;
  type: 'critical' | 'high' | 'medium' | 'low';
  title: string;
  description: string;
  impact: number; // Estimated performance impact (0-100)
  effort: 'low' | 'medium' | 'high';
  automated: boolean;
  action?: () => void;
}

class PerformanceEnhancer {
  private metrics: PerformanceMetrics = {
    lcp: 0,
    fcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    fmp: 0,
    loadTime: 0,
    memoryUsage: 0,
    bundleSize: 0
  };

  private observers: PerformanceObserver[] = [];
  private suggestions: OptimizationSuggestion[] = [];

  constructor() {
    this.initializePerformanceMonitoring();
    this.generateOptimizationSuggestions();
  }

  private initializePerformanceMonitoring(): void {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      // LCP Observer
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry & { element?: Element };
          this.metrics.lcp = lastEntry.startTime;
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(lcpObserver);
      } catch (e) {
        console.warn('LCP observer not supported:', e);
      }

      // FID Observer
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            this.metrics.fid = (entry as PerformanceEventTiming).processingStart - entry.startTime;
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        this.observers.push(fidObserver);
      } catch (e) {
        console.warn('FID observer not supported:', e);
      }

      // CLS Observer
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          this.metrics.cls = clsValue;
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(clsObserver);
      } catch (e) {
        console.warn('CLS observer not supported:', e);
      }
    }

    // Monitor other metrics
    this.monitorLoadTime();
    this.monitorMemoryUsage();
    this.estimateBundleSize();
  }

  private monitorLoadTime(): void {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      this.metrics.loadTime = navigation.loadEventEnd - navigation.fetchStart;
      this.metrics.ttfb = navigation.responseStart - navigation.requestStart;
      this.metrics.fcp = this.getFCP();
      this.metrics.fmp = this.getFMP();
    });
  }

  private getFCP(): number {
    const paintEntries = performance.getEntriesByType('paint');
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    return fcpEntry ? fcpEntry.startTime : 0;
  }

  private getFMP(): number {
    // Simplified FMP calculation
    const paintEntries = performance.getEntriesByType('paint');
    const fmpEntry = paintEntries.find(entry => entry.name === 'first-meaningful-paint');
    return fmpEntry ? fmpEntry.startTime : this.metrics.fcp;
  }

  private monitorMemoryUsage(): void {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      this.metrics.memoryUsage = Math.round(memory.usedJSHeapSize / 1024 / 1024);
    }
  }

  private estimateBundleSize(): void {
    // Estimate bundle size based on loaded scripts
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;
    scripts.forEach(script => {
      const src = (script as HTMLScriptElement).src;
      if (src.includes('assets/js/')) {
        // Rough estimation based on common bundle sizes
        totalSize += 50; // KB
      }
    });
    this.metrics.bundleSize = totalSize;
  }

  private generateOptimizationSuggestions(): void {
    this.suggestions = [
      {
        id: 'lazy-load-images',
        type: 'high',
        title: 'Implement Lazy Loading for Images',
        description: 'Load images only when they enter the viewport to improve initial page load time.',
        impact: 25,
        effort: 'low',
        automated: true,
        action: () => this.implementLazyLoading()
      },
      {
        id: 'preload-critical-resources',
        type: 'critical',
        title: 'Preload Critical Resources',
        description: 'Preload critical CSS and JavaScript resources to improve LCP.',
        impact: 40,
        effort: 'low',
        automated: true,
        action: () => this.preloadCriticalResources()
      },
      {
        id: 'optimize-bundle-splitting',
        type: 'high',
        title: 'Optimize Bundle Splitting',
        description: 'Split bundles more granularly to improve caching and loading performance.',
        impact: 30,
        effort: 'medium',
        automated: false
      },
      {
        id: 'implement-service-worker',
        type: 'medium',
        title: 'Implement Service Worker',
        description: 'Add service worker for caching and offline functionality.',
        impact: 20,
        effort: 'high',
        automated: false
      },
      {
        id: 'optimize-fonts',
        type: 'medium',
        title: 'Optimize Font Loading',
        description: 'Use font-display: swap and preload critical fonts.',
        impact: 15,
        effort: 'low',
        automated: true,
        action: () => this.optimizeFonts()
      },
      {
        id: 'minimize-renders',
        type: 'high',
        title: 'Minimize Unnecessary Renders',
        description: 'Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders.',
        impact: 35,
        effort: 'medium',
        automated: false
      }
    ];
  }

  private implementLazyLoading(): void {
    // Implement lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  private preloadCriticalResources(): void {
    // Preload critical CSS
    const criticalCSS = document.querySelector('link[rel="stylesheet"]');
    if (criticalCSS) {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'style';
      preloadLink.href = criticalCSS.getAttribute('href') || '';
      document.head.appendChild(preloadLink);
    }

    // Preload critical JavaScript
    const criticalJS = document.querySelector('script[src*="main"]');
    if (criticalJS) {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'script';
      preloadLink.href = criticalJS.getAttribute('src') || '';
      document.head.appendChild(preloadLink);
    }
  }

  private optimizeFonts(): void {
    // Add font-display: swap to existing font links
    const fontLinks = document.querySelectorAll('link[href*="font"]');
    fontLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && !href.includes('display=swap')) {
        const newHref = href.includes('?') ? `${href}&display=swap` : `${href}?display=swap`;
        link.setAttribute('href', newHref);
      }
    });
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public getSuggestions(): OptimizationSuggestion[] {
    return [...this.suggestions];
  }

  public getCriticalSuggestions(): OptimizationSuggestion[] {
    return this.suggestions.filter(s => s.type === 'critical' || s.type === 'high');
  }

  public getAutomatedSuggestions(): OptimizationSuggestion[] {
    return this.suggestions.filter(s => s.automated);
  }

  public applyAutomatedOptimizations(): void {
    const automatedSuggestions = this.getAutomatedSuggestions();
    automatedSuggestions.forEach(suggestion => {
      if (suggestion.action) {
        try {
          suggestion.action();
          console.log(`Applied optimization: ${suggestion.title}`);
        } catch (error) {
          console.error(`Failed to apply optimization ${suggestion.title}:`, error);
        }
      }
    });
  }

  public getPerformanceScore(): number {
    const { lcp, fcp, fid, cls } = this.metrics;
    
    let score = 100;
    
    // LCP scoring (0-2.5s is good)
    if (lcp > 2500) score -= 30;
    else if (lcp > 1000) score -= 15;
    
    // FCP scoring (0-1.8s is good)
    if (fcp > 1800) score -= 20;
    else if (fcp > 1000) score -= 10;
    
    // FID scoring (0-100ms is good)
    if (fid > 100) score -= 25;
    else if (fid > 50) score -= 10;
    
    // CLS scoring (0-0.1 is good)
    if (cls > 0.25) score -= 25;
    else if (cls > 0.1) score -= 10;
    
    return Math.max(0, score);
  }

  public generateReport(): string {
    const score = this.getPerformanceScore();
    const criticalSuggestions = this.getCriticalSuggestions();
    
    return `
Performance Report
=================
Overall Score: ${score}/100

Core Web Vitals:
- LCP: ${this.metrics.lcp.toFixed(0)}ms
- FCP: ${this.metrics.fcp.toFixed(0)}ms
- FID: ${this.metrics.fid.toFixed(0)}ms
- CLS: ${this.metrics.cls.toFixed(3)}

Other Metrics:
- Load Time: ${this.metrics.loadTime.toFixed(0)}ms
- Memory Usage: ${this.metrics.memoryUsage}MB
- Bundle Size: ${this.metrics.bundleSize}KB

Critical Improvements Needed:
${criticalSuggestions.map(s => `- ${s.title}: ${s.description}`).join('\n')}
    `.trim();
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Export singleton instance
export const performanceEnhancer = new PerformanceEnhancer();

// Export types and class for external use
export type { PerformanceMetrics, OptimizationSuggestion };
export { PerformanceEnhancer };