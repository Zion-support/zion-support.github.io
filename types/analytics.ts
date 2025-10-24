// Global types for analytics and tracking

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: {
      (..._args: unknown[]): void;
      q: unknown[];
    };
  }
}

export interface AnalyticsContextType {
  track: (_event: string, _properties?: Record<string, unknown>) => void;
  identify: (_userId: string, _traits?: Record<string, unknown>) => void;
  page: (_name: string, _properties?: Record<string, unknown>) => void;
}

export {};