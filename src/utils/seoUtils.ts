/**
 * SEO Utilities - Non-component utilities
 * Separated from seoOptimizations.tsx to fix React fast refresh warnings
 */

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void;
    dataLayer?: unknown[];
  }
}

// Google Analytics utilities
export const googleAnalytics = {
  // Track page views
  trackPageView: (url: string, title: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: title,
        page_location: url
      });
    }
  },

  // Track custom events
  trackEvent: (eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  },

  // Track conversion events
  trackConversion: (conversionId: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
        value: value
      });
    }
  }
};

// Core Web Vitals tracking
export const coreWebVitals = {
  // Track Core Web Vitals
  trackCoreWebVitals: () => {
    if (typeof window === 'undefined') return;

    // Track Largest Contentful Paint (LCP)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        googleAnalytics.trackEvent('core_web_vitals', {
          metric_name: 'LCP',
          metric_value: Math.round(lastEntry.startTime),
          metric_rating: lastEntry.startTime < 2500 ? 'good' : lastEntry.startTime < 4000 ? 'needs_improvement' : 'poor'
        });
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Track First Input Delay (FID)
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        const fid = (entry as PerformanceEventTiming).processingStart - entry.startTime;
        googleAnalytics.trackEvent('core_web_vitals', {
          metric_name: 'FID',
          metric_value: Math.round(fid),
          metric_rating: fid < 100 ? 'good' : fid < 300 ? 'needs_improvement' : 'poor'
        });
      });
    }).observe({ entryTypes: ['first-input'] });

    // Track Cumulative Layout Shift (CLS)
    let clsValue = 0;
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        const layoutShiftEntry = entry as LayoutShift;
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value;
        }
      });
      
      googleAnalytics.trackEvent('core_web_vitals', {
        metric_name: 'CLS',
        metric_value: Math.round(clsValue * 1000),
        metric_rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs_improvement' : 'poor'
      });
    }).observe({ entryTypes: ['layout-shift'] });
  }
};

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
}

interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

// SEO optimization utilities
export const seoOptimizationUtils = {
  // Generate meta description
  generateMetaDescription: (content: string, maxLength: number = 160): string => {
    const cleanContent = content.replace(/<[^>]*>/g, '').trim();
    if (cleanContent.length <= maxLength) return cleanContent;
    
    const truncated = cleanContent.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
  },

  // Generate keywords from content
  generateKeywords: (content: string, maxKeywords: number = 10): string[] => {
    const words = content
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(word => word.length > 3);
    
    const wordCount: Record<string, number> = {};
    words.forEach(word => {
      wordCount[word] = (wordCount[word] || 0) + 1;
    });
    
    return Object.entries(wordCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, maxKeywords)
      .map(([word]) => word);
  },

  // Generate canonical URL
  generateCanonicalUrl: (path: string, baseUrl: string = 'https://zion.app'): string => {
    return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
  }
};