export const measurePerformance = () => {
if (typeof window === 'undefined') return;';
// Web Vitals monitoring
<<<<<<< HEAD
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
              value: entry.startTime
=======
const logMetric = (metric: any) => {,,
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
              value: entry.startTime,,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
            });
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });';
    } catch (e) {
<<<<<<< HEAD
      console.error('Performance observation error: ', e);',
=======
      console.error('Performance observation error: ', e);';,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
    }
  }

  // Report page load time
  if (window.performance && window.performance.timing) {
<<<<<<< HEAD
    window.addEventListener('load', () => {;
=======
    window.addEventListener('load', () => {';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
      setTimeout(() => {
        const timing = window.performance.timing;
        const pageLoadTime = timing.loadEventEnd - timing.navigationStart;
        logMetric({
<<<<<<< HEAD
          name: 'Page Load Time',
          value: pageLoadTime
=======
          name: 'Page Load Time',';,
          value: pageLoadTime,,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b208
        });
      }, 0);
    });
  }
};
;