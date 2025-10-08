/**
 * Web Vitals Monitoring Utility
 * Comprehensive performance monitoring for Core Web Vitals
 */

export interface WebVitalsMetric {
  name: 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB' | 'INP';
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
  navigationType: string;
}

export interface WebVitalsConfig {
  reportAllChanges?: boolean;
  debug?: boolean;
  analyticsEndpoint?: string;
}

/**
 * Rating thresholds for Core Web Vitals
 */
const THRESHOLDS = {
  CLS: { good: 0.1, poor: 0.25 },
  FID: { good: 100, poor: 300 },
  FCP: { good: 1800, poor: 3000 },
  LCP: { good: 2500, poor: 4000 },
  TTFB: { good: 800, poor: 1800 },
  INP: { good: 200, poor: 500 },
};

/**
 * Calculate metric rating based on value
 */
function getRating(
  metricName: WebVitalsMetric['name'],
  value: number
): WebVitalsMetric['rating'] {
  const threshold = THRESHOLDS[metricName];
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

/**
 * Generate unique ID for metric
 */
function generateUniqueId(): string {
  return `v3-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Send metric to analytics endpoint
 */
async function sendToAnalytics(
  metric: WebVitalsMetric,
  endpoint?: string
): Promise<void> {
  if (!endpoint) return;

  try {
    const body = JSON.stringify({
      ...metric,
      url: window.location.href,
      userAgent: navigator.userAgent,
      timestamp: Date.now(),
    });

    // Use sendBeacon if available for better reliability
    if (navigator.sendBeacon) {
      navigator.sendBeacon(endpoint, body);
    } else {
      fetch(endpoint, {
        method: 'POST',
        body,
        headers: { 'Content-Type': 'application/json' },
        keepalive: true,
//       }).catch(console.error);
      });
    }
  } catch {
//     console.error('Failed to send metric to analytics:', error);
  }
}

/**
 * Report Web Vitals metrics
 */
export function reportWebVitals(
  onPerfEntry?: (metric: WebVitalsMetric) => void,
  config: WebVitalsConfig = {}
): void {
  if (!onPerfEntry || typeof window === 'undefined') return;

  const { reportAllChanges = false, debug = false, analyticsEndpoint } = config;

  // Cumulative Layout Shift (CLS)
  if ('PerformanceObserver' in window) {
    let clsValue = 0;
    let clsEntries: PerformanceEntry[] = [];

    const clsObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        // Only count layout shifts without recent user input
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
          clsEntries.push(entry);

          if (reportAllChanges) {
            const metric: WebVitalsMetric = {
              name: 'CLS',
              value: clsValue,
              rating: getRating('CLS', clsValue),
              delta: (entry as any).value,
              id: generateUniqueId(),
              navigationType: 'navigate',
            };

            onPerfEntry(metric);
            if (analyticsEndpoint) sendToAnalytics(metric, analyticsEndpoint);
//             if (debug) if (process.env['NODE_ENV'] === 'development') { if (process.env.DEV) { } }
          }
        }
      }
    });

    try {
      clsObserver.observe({ type: 'layout-shift', buffered: true });
    } catch (e) {
//       if (debug) }

    // Report final CLS on page hide
    addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden' && clsValue > 0) {
        const metric: WebVitalsMetric = {
          name: 'CLS',
          value: clsValue,
          rating: getRating('CLS', clsValue),
          delta: clsValue,
          id: generateUniqueId(),
          navigationType: 'navigate',
        };

        onPerfEntry(metric);
        if (analyticsEndpoint) sendToAnalytics(metric, analyticsEndpoint);
//         if (debug) if (process.env['NODE_ENV'] === 'development') { if (process.env.DEV) { } }
      }
    });
  }

  // First Input Delay (FID)
  if ('PerformanceObserver' in window) {
    const fidObserver = new PerformanceObserver((entryList) => {
      const firstInput = entryList.getEntries()[0] as any;
      const fid = firstInput.processingStart - firstInput.startTime;

      const metric: WebVitalsMetric = {
        name: 'FID',
        value: fid,
        rating: getRating('FID', fid),
        delta: fid,
        id: generateUniqueId(),
        navigationType: 'navigate',
      };

      onPerfEntry(metric);
      if (analyticsEndpoint) sendToAnalytics(metric, analyticsEndpoint);
      if (debug) if (process.env['NODE_ENV'] === 'development') { if (process.env.DEV) { } }

      fidObserver.disconnect();
    });

    try {
      fidObserver.observe({ type: 'first-input', buffered: true });
    } catch (e) {
//       if (debug) }
  }

  // Largest Contentful Paint (LCP)
  if ('PerformanceObserver' in window) {
    let lcpValue = 0;

    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      lcpValue = lastEntry.startTime;

      if (reportAllChanges || document.visibilityState === 'hidden') {
        const metric: WebVitalsMetric = {
          name: 'LCP',
          value: lcpValue,
          rating: getRating('LCP', lcpValue),
          delta: lcpValue,
          id: generateUniqueId(),
          navigationType: 'navigate',
        };

        onPerfEntry(metric);
        if (analyticsEndpoint) sendToAnalytics(metric, analyticsEndpoint);
//         if (debug) if (process.env['NODE_ENV'] === 'development') { if (process.env.DEV) { } }
      }
    });

    try {
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (e) {
//       if (debug) }

    // Report final LCP on page hide
    addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden' && lcpValue > 0) {
        lcpObserver.takeRecords();
        lcpObserver.disconnect();
      }
    });
  }

  // First Contentful Paint (FCP)
  if ('PerformanceObserver' in window) {
    const fcpObserver = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          const metric: WebVitalsMetric = {
            name: 'FCP',
            value: entry.startTime,
            rating: getRating('FCP', entry.startTime),
            delta: entry.startTime,
            id: generateUniqueId(),
            navigationType: 'navigate',
          };

          onPerfEntry(metric);
          if (analyticsEndpoint) sendToAnalytics(metric, analyticsEndpoint);
//           if (debug) if (process.env['NODE_ENV'] === 'development') { if (process.env.DEV) { } }

          fcpObserver.disconnect();
        }
      }
    });

    try {
      fcpObserver.observe({ type: 'paint', buffered: true });
    } catch (e) {
//       if (debug) }
  }

  // Time to First Byte (TTFB)
  if ('performance' in window && 'navigation' in performance) {
    const navEntry = performance.getEntriesByType(
      'navigation'
    )[0] as PerformanceNavigationTiming;

    if (navEntry) {
      const ttfb = navEntry.responseStart - navEntry.requestStart;

      const metric: WebVitalsMetric = {
        name: 'TTFB',
        value: ttfb,
        rating: getRating('TTFB', ttfb),
        delta: ttfb,
        id: generateUniqueId(),
        navigationType: navEntry.type,
      };

      onPerfEntry(metric);
      if (analyticsEndpoint) sendToAnalytics(metric, analyticsEndpoint);
//       if (debug) if (process.env['NODE_ENV'] === 'development') { if (process.env.DEV) { } }
    }
  }
}

/**
 * Monitor long tasks that block the main thread
 */
export function monitorLongTasks(
  callback: (duration: number, startTime: number) => void
): PerformanceObserver | null {
  if (!('PerformanceObserver' in window)) return null;

  try {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Tasks longer than 50ms are considered "long tasks"
        if (entry.duration > 50) {
          callback(entry.duration, entry.startTime);
        }
      }
    });

    observer.observe({ entryTypes: ['longtask'] });
    return observer;
  } catch (e) {
//     return null;
  }
}

/**
 * Get current performance metrics snapshot
 */
export function getPerformanceSnapshot(): Record<string, number> {
  if (typeof window === 'undefined' || !('performance' in window)) {
    return {};
  }

  const navigation = performance.getEntriesByType(
    'navigation'
  )[0] as PerformanceNavigationTiming;

  if (!navigation) return {};

  return {
    dns: navigation.domainLookupEnd - navigation.domainLookupStart,
    tcp: navigation.connectEnd - navigation.connectStart,
    ttfb: navigation.responseStart - navigation.requestStart,
    download: navigation.responseEnd - navigation.responseStart,
    domInteractive: navigation.domInteractive,
    domComplete: navigation.domComplete,
    loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
    totalTime: navigation.loadEventEnd - navigation.fetchStart,
  };
}

export default reportWebVitals;