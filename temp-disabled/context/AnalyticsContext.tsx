import React, { createContext, useContext, useState } from 'react';

interface AnalyticsContextType {
  trackEvent: (event: string, data?: any) => void;
  pageViews: number;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [pageViews, setPageViews] = useState(0);
  
  const trackEvent = (event: string, data?: any) => {
    console.log('Analytics event:', event, data);
    if (event === 'page_view') {
      setPageViews(prev => prev + 1);
    }
  };
  
  return (
    <AnalyticsContext.Provider value={{ trackEvent, pageViews }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};