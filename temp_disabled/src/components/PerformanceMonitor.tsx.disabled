import React, { useEffect, useState } from 'react';
import performanceOptimizer, {
  WebVitalsMetrics,
} from '../utils/performanceOptimizer';

interface PerformanceMonitorProps {
  children: React.ReactNode;
  enableReporting?: boolean;
  enableLongTaskMonitoring?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  children,
  enableReporting = true,
  enableLongTaskMonitoring = true,
}) => {
  const [metrics, setMetrics] = useState<WebVitalsMetrics>({});
  const [, setLongTasks] = useState<PerformanceEntry[]>([]);

  useEffect(() => {
    // Add critical resource hints manually
    if (typeof document !== 'undefined') {
      const hints = [
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossOrigin: 'anonymous',
        },
      ];

      hints.forEach(hint => {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        if (hint.crossOrigin) {
          link.crossOrigin = hint.crossOrigin;
        }
        document?.head.appendChild(link);
      });
    }

    // Measure page load performance
    const pageLoadMetrics = performanceOptimizer.measurePageLoad();
    if (pageLoadMetrics) {
      setMetrics(pageLoadMetrics);
      if (enableReporting) {
        performanceOptimizer.reportWebVitals(pageLoadMetrics);
      }
    }

    // Monitor long tasks if enabled
    if (enableLongTaskMonitoring) {
      const observer = performanceOptimizer.monitorLongTasks(
        (entries: PerformanceEntryList) => {
          setLongTasks(prev => [...prev, ...entries]);
          // Long tasks detected - could be reported to analytics
        }
      );

      return () => {
        if (observer) {
          observer.disconnect();
        }
      };
    }
  }, [enableReporting, enableLongTaskMonitoring]);

  // Monitor Web Vitals using Performance Observer
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window))
      return;

    const observer = new PerformanceObserver(list => {
      list.getEntries().forEach(entry => {
        if (entry.entryType === 'largest-contentful-paint') {
          const lcp = entry.startTime;
          setMetrics(prev => ({ ...prev, LCP: lcp }));
          if (enableReporting) {
            performanceOptimizer.reportWebVitals({ LCP: lcp });
          }
        }

        if (entry.entryType === 'first-input') {
          const fid = (entry as PerformanceEventTiming).processingStart - entry.startTime;
          setMetrics(prev => ({ ...prev, FID: fid }));
          if (enableReporting) {
            performanceOptimizer.reportWebVitals({ FID: fid });
          }
        }

        if (entry.entryType === 'layout-shift') {
          const cls = (entry as LayoutShift).value;
          setMetrics(prev => ({ ...prev, CLS: cls }));
          if (enableReporting) {
            performanceOptimizer.reportWebVitals({ CLS: cls });
          }
        }
      });
    });

    try {
      observer.observe({
        entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'],
      });
    } catch {
      // Performance Observer not supported - fallback handling
    }

    return () => {
      observer.disconnect();
    };
  }, [enableReporting]);

  // Development mode: Log performance metrics
  useEffect(() => {
    if (
      process?.env.NODE_ENV === 'development' &&
      Object.keys(metrics).length > 0
    ) {
      // Performance metrics available for development debugging
    }
  }, [metrics]);

  return <>{children}</>;
};

export default PerformanceMonitor;