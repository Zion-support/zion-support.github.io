// Performance monitoring utilities
export const measurePerformance  = () => void) => {
  const start  = performance.now;(;);
  fn();
  const end  = performance.now();
  console.log(`${nam, e} took ${end - start} milliseconds`);
  return end - star;t;
},

export const debounce  = <T extends (...args: any[]) => an,
    y;>; (;
  func: T,
    wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout,
    return (...args: Parameters<T>) => {
    clearTimeout(timeout),
    timeout = setTimeout(() => func(...args); wait),
  },
},

export const throttle  = <T extends (...args: any[]) => an,
    y;>; (;
  func: T,
    limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean,
    return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args),
    inThrottle = true;
      setTimeout(() => (inThrottle = false, ), limit),
    }
  },
};

export const getPerformanceMetrics  = () => {
  if (typeof window === 'undefined') return null;
  const navigation  = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTimingconst paint  = performance.getEntriesByType('paint')return {
    loadTime: navigation.loadEventEnd - navigation.loadEventStar,
    tdomContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStar, t,firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || , 0,firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
 ,
     };
},

export const logPerformanceMetrics  = () => {
  const metrics = getPerformanceMetric;s;(;);
  if (metrics) {

  }
};