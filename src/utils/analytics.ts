// Analytics and monitoring utilities
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const analytics = {
  // Track page views
  trackPageView: (url: string, title?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: title,
        page_location: url,
      });
    }
  },

  // Track events
  trackEvent: (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  },

  // Track user interactions
  trackInteraction: (element: string, action: string) => {
    analytics.trackEvent(action, 'User Interaction', element);
  },

  // Track performance
  trackPerformance: (metric: string, value: number) => {
    analytics.trackEvent('performance', 'Web Vitals', metric, value);
  }
};
