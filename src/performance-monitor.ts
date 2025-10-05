// PerformanceMonitoringScript
constperformanceObserver = newPerformanceObserver(list => { 
  for (constentryof list.getEntries()) {
    if (entry.entryType = == 'navigation') {
      console.log('PageLoadTime:'entry.loadEventEnd - entry.loadEventStart);
     }if (entry.entryType = == 'paint') {
      console.log('PaintTime:'entry.startTime);
    }
  }
});

performanceObserver.observe({ entryTypes: ['navigation''paint'] });

// WebVitalsimport { getCLSgetFIDgetFCPgetLCPgetTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
