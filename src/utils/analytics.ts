/**
 * Analytics utilities
 */

export const trackEvent = (eventName: string, data?: any) => {
  if (typeof window !== 'undefined') {
    console.log('Analytics event:', eventName, data);
  }
};

export const initAnalytics = () => {
  if (typeof window !== 'undefined') {
    console.log('Analytics initialized');
  }
};

const analytics = {
  trackEvent,
  initAnalytics,
};

export default analytics;
