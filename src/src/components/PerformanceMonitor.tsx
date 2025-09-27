import React, { useEffect } from 'react';
import { measureWebVitals } from '../utils/performance';

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    // Initialize performance monitoring
    measureWebVitals();
    
    // Monitor page load performance
    const handleLoad = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        console.log('Page Load Performance:', {
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
          totalTime: navigation.loadEventEnd - navigation.fetchStart
        });
      }
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;