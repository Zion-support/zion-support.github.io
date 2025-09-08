import React, { useEffect } from 'react';
import { performanceTracker } from '../utils/performance';
import { errorReporter } from '../utils/errorReporting';

interface AnalyticsProps {
  trackingId?: string;
  enablePerformanceTracking?: boolean;
  enableErrorTracking?: boolean;
  enablePageViewTracking?: boolean;
}

export const Analytics: React.FC<AnalyticsProps> = ({
  trackingId = 'G-XXXXXXXXXX', // Replace with actual tracking ID
  enablePerformanceTracking = true,
  enableErrorTracking = true,
  enablePageViewTracking = true,
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize Google Analytics
    if (enablePageViewTracking && trackingId) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
      });
    }

    // Track page views
    if (enablePageViewTracking) {
      const trackPageView = () => {
        if (window.gtag) {
          window.gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname,
          });
        }
      };

      // Track initial page view
      trackPageView();

      // Track route changes (for SPA)
      const originalPushState = history.pushState;
      const originalReplaceState = history.replaceState;

      history.pushState = function(...args) {
        originalPushState.apply(history, args);
        setTimeout(trackPageView, 0);
      };

      history.replaceState = function(...args) {
        originalReplaceState.apply(history, args);
        setTimeout(trackPageView, 0);
      };

      window.addEventListener('popstate', trackPageView);
    }

    // Track performance metrics
    if (enablePerformanceTracking) {
      const unsubscribe = performanceTracker.subscribe((metrics) => {
        if (window.gtag) {
          window.gtag('event', 'performance_metrics', {
            load_time: Math.round(metrics.loadTime),
            bundle_size: Math.round(metrics.bundleSize),
            memory_usage: Math.round(metrics.memoryUsage),
            render_time: Math.round(metrics.renderTime),
            first_contentful_paint: metrics.firstContentfulPaint ? Math.round(metrics.firstContentfulPaint) : undefined,
            largest_contentful_paint: metrics.largestContentfulPaint ? Math.round(metrics.largestContentfulPaint) : undefined,
            cumulative_layout_shift: metrics.cumulativeLayoutShift ? Math.round(metrics.cumulativeLayoutShift * 1000) / 1000 : undefined,
          });
        }
      });

      return () => {
        unsubscribe();
      };
    }

    // Track errors
    if (enableErrorTracking) {
      const unsubscribe = errorReporter.subscribe((errorStats) => {
        if (window.gtag) {
          window.gtag('event', 'error_occurred', {
            error_count: errorStats.totalErrors,
            severity_counts: JSON.stringify(errorStats.severityCounts),
            session_id: errorStats.sessionId,
          });
        }
      });

      return () => {
        unsubscribe();
      };
    }
  }, [trackingId, enablePerformanceTracking, enableErrorTracking, enablePageViewTracking]);

  return null; // This component doesn't render anything
};

// Declare global gtag function
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default Analytics;