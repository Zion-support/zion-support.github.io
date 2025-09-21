import { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

export function usePerformanceMonitor(): { metrics: PerformanceMetrics | null; isSupported: boolean } {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      setIsSupported(false);
      return;
    }

    setIsSupported(true);

    const measurePerformance = () => {
      try {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        
        const metrics: PerformanceMetrics = {
          loadTime: navigation ? navigation.loadEventEnd - navigation.fetchStart : 0,
          firstContentfulPaint: 0,
          largestContentfulPaint: 0,
          firstInputDelay: 0,
          cumulativeLayoutShift: 0,
        };

        // Get FCP
        const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          metrics.firstContentfulPaint = fcpEntry.startTime;
        }

        // Get LCP
        const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
        if (lcpEntries.length > 0) {
          metrics.largestContentfulPaint = lcpEntries[lcpEntries.length - 1].startTime;
        }

        // Get CLS
        const clsEntries = performance.getEntriesByType('layout-shift');
        if (clsEntries.length > 0) {
          metrics.cumulativeLayoutShift = clsEntries.reduce((acc, entry) => {
            return acc + (entry as any).value;
          }, 0);
        }

        // Get FID
        const fidEntries = performance.getEntriesByType('first-input');
        if (fidEntries.length > 0) {
          const fid = fidEntries[0] as PerformanceEventTiming;
          metrics.firstInputDelay = fid.processingStart - fid.startTime;
        }

        setMetrics(metrics);
      } catch (error) {
        console.error('Error measuring performance:', error);
      }
    };

    // Wait for all performance entries to be available
    const timer = setTimeout(measurePerformance, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return { metrics, isSupported };
}

export default usePerformanceMonitor;