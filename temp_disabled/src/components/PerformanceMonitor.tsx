import React, { ReactNode, useEffect } from 'react';

interface PerformanceMonitorProps {
  children: ReactNode;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children }) => {
  useEffect(() => {
    // Monitor performance metrics
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (process.env['NODE_ENV'] === 'development') {
//             }
        }
      });

      try {
        observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
      } catch (error) {
//         }

      return () => {
        observer.disconnect();
      };
    }
    return undefined;
  }, []);

  return <>{children}</>;
};

export default PerformanceMonitor;
