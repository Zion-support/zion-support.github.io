import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type AnalyticsEventType = 'page_view' | 'click' | 'conversion' | 'custom';

export interface AnalyticsEvent {
  type: AnalyticsEventType;
  path?: string;
  component?: string;
  elementId?: string;
  timestamp: number;
  userId?: string | null;
  metadata?: Record<string, unknown>;
}

export interface AnalyticsContextValue {
  trackEvent: (type: AnalyticsEventType, metadata?: Record<string, unknown>) => void;
  trackConversion: (conversionType: string, value?: number, metadata?: Record<string, unknown>) => void;
  pageViews: number;
  lastEvent: AnalyticsEvent | null;
  events: AnalyticsEvent[];
  clearEvents: () => void;
}

const AnalyticsContext = createContext<AnalyticsContextValue | undefined>(undefined);

export const AnalyticsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [pageViews, setPageViews] = useState<number>(0);
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [lastEvent, setLastEvent] = useState<AnalyticsEvent | null>(null);

  useEffect(() => {
    // Count initial page load as a view in a client-side app
    setPageViews((count) => count + 1);
  }, []);

  const trackEvent = (type: AnalyticsEventType, metadata?: Record<string, unknown>) => {
    const event: AnalyticsEvent = {
      type,
      timestamp: Date.now(),
      metadata,
    };
    setEvents((prev) => [...prev, event]);
    setLastEvent(event);
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.debug('[Analytics] event', event);
    }
  };

  const trackConversion = (conversionType: string, value?: number, metadata?: Record<string, unknown>) => {
    trackEvent('conversion', { conversionType, value, ...metadata });
  };

  const clearEvents = () => {
    setEvents([]);
    setLastEvent(null);
  };

  const value = useMemo<AnalyticsContextValue>(
    () => ({ trackEvent, trackConversion, pageViews, lastEvent, events, clearEvents }),
    [pageViews, lastEvent, events]
  );

  return <AnalyticsContext.Provider value={value}>{children}</AnalyticsContext.Provider>;
};

export const useAnalytics = (): AnalyticsContextValue => {
  const ctx = useContext(AnalyticsContext);
  if (!ctx) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return ctx;
};

