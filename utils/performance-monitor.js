
// Performance monitoring script,
if (typeof window !== 'undefined') {,
  // Core Web Vitals monitoring,
  function sendToAnalytics(metric) {,
    console.log('Performance metric:', metric);
    // In production, send to analytics service,
  }
,
  // LCP monitoring,
  new PerformanceObserver((entryList) => {,
    for (const entry of entryList.getEntries()) {,
      sendToAnalytics({ name: 'LCP', value: entry.startTime ,});
    }
  }).observe({ entryTypes: ['largest-contentful-paint'] ,});
  // FID monitoring,
  new PerformanceObserver((entryList) => {,
    for (const entry of entryList.getEntries()) {,
      sendToAnalytics({ name: 'FID', value: entry.processingStart - entry.startTime ,});
    }
  }).observe({ entryTypes: ['first-input'] ,});
  // CLS monitoring,
  new PerformanceObserver((entryList) => {,
    for (const entry of entryList.getEntries()) {,
      if (!entry.hadRecentInput) {,
        sendToAnalytics({ name: 'CLS', value: entry.value ,});
      }
    }
  }).observe({ entryTypes: ['layout-shift'] ,});
}
,