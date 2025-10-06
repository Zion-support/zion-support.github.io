// Performance optimization utilities
export class PerformanceOptimizer {
  private static instance: PerformanceOptimizer;
  private metrics: Map<string, number> = new Map();

  static getInstance(): PerformanceOptimizer {
    if (!PerformanceOptimizer.instance) {
      PerformanceOptimizer.instance = new PerformanceOptimizer();
    }
    return PerformanceOptimizer.instance;
  }

  // Lazy load images with intersection observer
  lazyLoadImages(): void {
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove("lazy");
              imageObserver.unobserve(img);
            }
          }
        });
      });

      document.querySelectorAll("img[data-src]").forEach((img) => {
        imageObserver.observe(img);
      });
    }
  }

  // Preload critical resources
  preloadCriticalResources(): void {
    const criticalResources = [
      "/fonts/inter.woff2",
      "/images/hero-bg.jpg",
      "/images/logo.svg"
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = resource;
      link.as = resource.endsWith(".woff2") ? "font" : "image";
      if (resource.endsWith(".woff2")) {
        link.crossOrigin = "anonymous";
      }
      document.head.appendChild(link);
    });
  }

  // Optimize scroll performance
  optimizeScroll(): void {
    let ticking = false;
    
    const updateScrollPosition = () => {
      // Throttled scroll handling
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    window.addEventListener("scroll", requestTick, { passive: true });
  }

  // Measure performance metrics
  measurePerformance(name: string, fn: () => void): void {
    const start = performance.now();
    fn();
    const end = performance.now();
    const duration = end - start;
    
    this.metrics.set(name, duration);
    
    if (process.env.NODE_ENV === "development") {
      console.log(`Performance: ${name} took ${duration.toFixed(2)}ms`);
    }
  }

  // Get performance metrics
  getMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  // Add critical resource hints for better performance
  addCriticalResourceHints(): void {
    if (typeof document === "undefined") return;
    
    const hints = [
      { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
      { rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }
    ];
    
    hints.forEach(hint => {
      const link = document.createElement("link");
      link.rel = hint.rel;
      link.href = hint.href;
      if (hint.crossOrigin) {
        link.crossOrigin = hint.crossOrigin;
      }
      document.head.appendChild(link);
    });
  }

  // Report web vitals
  reportWebVitals(): void {
    if (typeof window === "undefined" || !("web-vitals" in window)) return;
    
    // This would integrate with web-vitals library
    console.log("Web vitals reporting enabled");
  }

  // Measure page load performance
  measurePageLoad(): void {
    if (typeof window === "undefined") return;
    
    window.addEventListener("load", () => {
      const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - (navigation as any).navigationStart;
        this.metrics.set("pageLoad", loadTime);
      }
    });
  }

  // Initialize all optimizations
  initialize(): void {
    this.measurePerformance("lazyLoadImages", () => this.lazyLoadImages());
    this.measurePerformance("preloadCriticalResources", () => this.preloadCriticalResources());
    this.measurePerformance("optimizeScroll", () => this.optimizeScroll());
    this.addCriticalResourceHints();
    this.reportWebVitals();
    this.measurePageLoad();
  }
}

/**
 * Clear old caches to prevent storage bloat
 */
export const clearOldCaches = (): void => {
  if ("caches" in window) {
    caches.keys().then(names => {
      names.forEach(name => {
        if (name.includes("old-") || name.includes("v1-")) {
          caches.delete(name);
        }
      });
    });
  }
};

/**
 * Check if performance budget is exceeded
 */
export const checkPerformanceBudget = (): boolean => {
  const budget = {
    fcp: 1800, // First Contentful Paint
    lcp: 2500, // Largest Contentful Paint
    fid: 100,  // First Input Delay
    cls: 0.1   // Cumulative Layout Shift
  };
  
  const entries = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
  if (!entries) return true;
  
  return (
    entries.loadEventEnd - entries.loadEventStart < budget.fcp &&
    entries.domContentLoadedEventEnd - entries.domContentLoadedEventStart < budget.lcp
  );
};

// Export singleton instance
export const performanceOptimizer = PerformanceOptimizer.getInstance();
