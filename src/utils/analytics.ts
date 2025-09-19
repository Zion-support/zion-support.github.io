// Simple analytics utility for tracking user interactions
export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  try {
    // In a real application, you would send this to your analytics service
    // eslint-disable-next-line no-console
    console.log('Analytics Event:', eventName, properties);
    
    // Example: Send to Google Analytics, Mixpanel, etc.
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: unknown }).gtag) {
      // Call gtag with proper typing - using any to avoid unused parameter warnings
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const gtag = (window as any).gtag;
      gtag('event', eventName, properties);
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Analytics tracking error:', error);
  }
};

export const trackPageView = (pageName: string) => {
  trackEvent('page_view', { page: pageName });
};

export const trackButtonClick = (buttonName: string, context?: string) => {
  trackEvent('button_click', { button: buttonName, context });
};

export const trackFeatureInteraction = (featureName: string, action: string) => {
  trackEvent('feature_interaction', { feature: featureName, action });
};