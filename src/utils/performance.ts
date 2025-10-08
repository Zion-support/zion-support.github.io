// Performance monitoring utilities

export interface PerformanceMetrics {
  fcp: number | null; // First Contentful Paint
  lcp: number | null; // Largest Contentful Paint
  fid: number | null; // First Input Delay
  cls: number | null; // Cumulative Layout Shift
  ttfb: number | null; // Time to First Byte
}

export const reportWebVitals = (metric: unknown) => {
  // Log to console in development
  if (process.env['NODE_ENV'] === 'development') {
//     if (process.env.DEV) { console.log('[Web Vitals]', metric); }
  }

  // Send to analytics in production
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', (metric as any).name, {
      event_category: 'Web Vitals',
      value: Math.round(
        (metric as any).name === 'CLS' ? (metric as any).value * 1000 : (metric as any).value
      ),
      event_label: (metric as any).id,
      non_interaction: true,
    });
  }
};

export const measurePageLoad = (): PerformanceMetrics => {
  if (typeof window === 'undefined') {
    return {
      fcp: null,
      lcp: null,
      fid: null,
      cls: null,
      ttfb: null,
    };
  }

  const navigation = performance.getEntriesByType(
    'navigation'
  )[0] as PerformanceNavigationTiming;

  return {
    fcp: null, // Will be measured by web-vitals library
    lcp: null,
    fid: null,
    cls: null,
    ttfb: navigation ? navigation.responseStart - navigation.requestStart : null,
  };
};

export const logPerformance = (label: string) => {
  if (typeof performance !== 'undefined') {
    const mark = `${label}-start`;
    performance.mark(mark);
    
    return () => {
//       const endMark = `${label}-end`;
      performance.mark(endMark);
      performance.measure(label, mark, endMark);
      
      const measure = performance.getEntriesByName(label)[0];
//       if (process.env.DEV) { console.log(`[Performance] ${label}: ${measure.duration.toFixed(2)}ms`); }
    };
  }
  
  return () => {};
};

export const prefetchRoute = (url: string) => {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    link.as = 'document';
    document.head.appendChild(link);
  }
};

export const preconnect = (url: string) => {
  if (typeof window !== 'undefined') {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = url;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  }
};
