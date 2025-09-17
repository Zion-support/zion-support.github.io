// Performance utility functions
export const performanceUtils = {
  // Measure function execution time
  measureTime: <T>(fn: () => T, label?: string): T => {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    
    if (label) {
      console.log(`${label}: ${(end - start).toFixed(2)}ms`);
    }
    
    return result;
  },

  // Measure async function execution time
  measureTimeAsync: async <T>(fn: () => Promise<T>, label?: string): Promise<T> => {
    const start = performance.now();
    const result = await fn();
    const end = performance.now();
    
    if (label) {
      console.log(`${label}: ${(end - start).toFixed(2)}ms`);
    }
    
    return result;
  },

  // Debounce function
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Throttle function
  throttle: <T extends (...args: any[]) => any>(
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
  },

  // Lazy load images
  lazyLoadImage: (img: HTMLImageElement, src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = src;
    });
  },

  // Preload critical resources
  preloadResource: (href: string, as: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = as;
      link.onload = () => resolve();
      link.onerror = reject;
      document.head.appendChild(link);
    });
  },

  // Get Web Vitals
  getWebVitals: (): Promise<{
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number;
  }> => {
    return new Promise((resolve) => {
      const vitals: any = {};
      let resolved = false;

      const resolveIfReady = () => {
        if (resolved) return;
        if (vitals.fcp && vitals.lcp && vitals.fid && vitals.cls && vitals.ttfb) {
          resolved = true;
          resolve(vitals);
        }
      };

      // First Contentful Paint
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const fcp = entries[entries.length - 1];
        vitals.fcp = fcp.startTime;
        resolveIfReady();
      }).observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lcp = entries[entries.length - 1];
        vitals.lcp = lcp.startTime;
        resolveIfReady();
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const fid = entries[entries.length - 1];
        vitals.fid = fid.processingStart - fid.startTime;
        resolveIfReady();
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      new PerformanceObserver((entryList) => {
        let clsValue = 0;
        const entries = entryList.getEntries();
        for (const entry of entries) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        vitals.cls = clsValue;
        resolveIfReady();
      }).observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        vitals.ttfb = navigation.responseStart - navigation.fetchStart;
        resolveIfReady();
      }
    });
  },
};

export default performanceUtils;