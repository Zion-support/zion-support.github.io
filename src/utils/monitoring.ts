
// Monitoring and analytics setup
export const setupAnalytics = () => {
  // Google Analytics
  if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_GA_ID) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', process.env.NEXT_PUBLIC_GA_ID);
  }
};
export const trackPerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      const perfData = performance.getEntriesByType('navigation')[0];
      const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
      // Send to analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'page_load_time', {
          value: Math.round(loadTime)
          event_category: 'Performance'
        });
      }
    });
  }
};
export const trackErrors = () => {
  window.addEventListener('error', (event) => {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'javascript_error', {
        event_category: 'Error'
        event_label: event.message
        value: 1
      });
    }
  });
};