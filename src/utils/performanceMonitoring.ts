export const measurePerformance = () => {
if (typeof window === 'undefined') return;';
// Web Vitals monitoring
const logMetric = (metric: any) => {
console.log(`[Performance] ${metric.name
}:`, metric.value);
  };

  // First Contentful Paint
  if ('PerformanceObserver' in window) {;
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {;
            logMetric({
              name: entry.name,
              value: entry.startTime,
=======
const logMetric = (metric: any) => {,
console.log(`[Performance] ${metric.name`;
}:`, metric.value);`;
  };

  // First Contentful Paint
  if ('PerformanceObserver' in window) {';
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {';
            logMetric({
              name: entry.name,,
              value: entry.startTime,});
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });';
    } catch (e) {
      console.error('Performance observation error: ', e);'
=======
      console.error('Performance observation error: ', e);';
    }
  }

  // Report page load time
  if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {;
=======
    window.addEventListener('load', () => {';
      setTimeout(() => {
        const timing = window.performance.timing;
        const pageLoadTime = timing.loadEventEnd - timing.navigationStart;
        logMetric({
          name: 'Page Load Time',
          value: pageLoadTime,
=======
          name: 'Page Load Time',';
          value: pageLoadTime,});
      }, 0);
    });
  }
};
;