
// Performance monitoring and optimization
export const performanceOptimizer = {
  // Measure Core Web Vitals
  measureCoreWebVitals: () => {
    if (typeof window === 'undefined') return;
    
    // First Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        console.log('FCP:', fcpEntry.startTime);
        // Send to analytics
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            name: 'FCP',
            value: Math.round(fcpEntry.startTime),
            event_category: 'Performance'
          });
        }
      }
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          name: 'LCP',
          value: Math.round(lastEntry.startTime),
          event_category: 'Performance'
        });
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      console.log('CLS:', clsValue);
      if (window.gtag) {
        window.gtag('event', 'web_vitals', {
          name: 'CLS',
          value: Math.round(clsValue * 1000) / 1000,
          event_category: 'Performance'
        });
      }
    }).observe({ entryTypes: ['layout-shift'] });
  },

  // Optimize images
  optimizeImages: () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" if not present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });
  },

  // Preload critical resources
  preloadCriticalResources: () => {
    const criticalResources = [
      '/fonts/inter.woff2',
      '/images/hero-bg.jpg'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      if (resource.endsWith('.woff2')) {
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  },

  // Initialize all optimizations
  init: () => {
    if (typeof window === 'undefined') return;
    
    // Run optimizations after DOM is loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        performanceOptimizer.measureCoreWebVitals();
        performanceOptimizer.optimizeImages();
        performanceOptimizer.preloadCriticalResources();
      });
    } else {
      performanceOptimizer.measureCoreWebVitals();
      performanceOptimizer.optimizeImages();
      performanceOptimizer.preloadCriticalResources();
    }
  }
};

// Auto-initialize
performanceOptimizer.init();
