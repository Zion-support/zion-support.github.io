// Analytics utility for tracking events and page views
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
  console.log(`[Analytics] Event: ${eventName}`, properties);
};

export const trackPageView = (pageName: string, pagePath?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: pageName,
      page_location: pagePath || window.location.href,
    });
  }
  console.log(`[Analytics] Page View: ${pageName}`, pagePath);
};

export const initAnalytics = () => {
  console.log('[Analytics] Initialized');
};

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}