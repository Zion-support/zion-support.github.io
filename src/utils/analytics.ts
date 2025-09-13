// Google Analytics utility functions

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: url,
    });
  }
};

export const trackConversion = (conversionId: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: 'USD'
    });
  }
};

// Custom event tracking
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location
  });
};

export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent('form_submission', {
    form_name: formName,
    success: success
  });
};

export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    depth_percentage: depth
  });
};
