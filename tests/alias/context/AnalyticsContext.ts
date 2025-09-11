export const useAnalytics = () => ({ trackEvent: () => {}, trackPageView: () => {} });
export const AnalyticsProvider = ({ children }: any) => children;
export default AnalyticsProvider;