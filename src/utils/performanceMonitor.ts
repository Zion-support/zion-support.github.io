// Performance monitoring utilities
export const measureWebVitals = () => {
  if (typeof window === 'undefined') return;

  // Measure Core Web Vitals
  const measureLCP = () => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      if (lastEntry) {
        console.log('LCP (Largest Contentful Paint):', lastEntry.startTime);
        
        // Send to analytics if available
        if ('gtag' in window) {
          const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag;
          gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'LCP',
            value: Math.round(lastEntry.startTime)
          });
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  };

  const measureFID = () => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const fid = (entry as any).processingStart - entry.startTime;
        console.log('FID (First Input Delay):', fid);
        
        // Send to analytics if available
        if ('gtag' in window) {
          const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag;
          gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'FID',
            value: Math.round(fid)
          });
        }
      });
    });

    observer.observe({ entryTypes: ['first-input'] });
  };

  const measureCLS = () => {
    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      });
      
      console.log('CLS (Cumulative Layout Shift):', clsValue);
      
      // Send to analytics if available
      if ('gtag' in window) {
        const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag;
        gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'CLS',
          value: Math.round(clsValue * 1000) / 1000
        });
      }
    });

    observer.observe({ entryTypes: ['layout-shift'] });
  };

  const measureFCP = () => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      
      if (fcpEntry) {
        console.log('FCP (First Contentful Paint):', fcpEntry.startTime);
        
        // Send to analytics if available
        if ('gtag' in window) {
          const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, any>) => void }).gtag;
          gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: 'FCP',
            value: Math.round(fcpEntry.startTime)
          });
        }
      }
    });

    observer.observe({ entryTypes: ['paint'] });
  };

  // Initialize measurements
  measureLCP();
  measureFID();
  measureCLS();
  measureFCP();
};

// Resource timing analysis
export const analyzeResourceTiming = () => {
  if (typeof window === 'undefined') return;

  const resources = performance.getEntriesByType('resource');
  const slowResources = resources.filter(resource => resource.duration > 1000);
  
  if (slowResources.length > 0) {
    console.warn('Slow resources detected:', slowResources);
  }
};

// Memory usage monitoring
export const monitorMemoryUsage = () => {
  if (typeof window === 'undefined' || !('memory' in performance)) return;

  const memory = (performance as any).memory;
  const memoryInfo = {
    used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
    total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
    limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024)
  };

  console.log('Memory usage:', memoryInfo);
  
  // Alert if memory usage is high
  if (memoryInfo.used / memoryInfo.limit > 0.8) {
    console.warn('High memory usage detected:', memoryInfo);
  }
};

// Initialize performance monitoring
export const initializePerformanceMonitoring = () => {
  measureWebVitals();
  analyzeResourceTiming();
  monitorMemoryUsage();
  
  // Monitor memory usage every 30 seconds
  setInterval(monitorMemoryUsage, 30000);
};