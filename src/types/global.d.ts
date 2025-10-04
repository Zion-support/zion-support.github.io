// Global type declarations

declare global {
  interface Window {
    mixpanel: {
      track: (event: string, properties?: Record<string, unknown>) => void;
      identify: (id: string) => void;
      alias: (id: string) => void;
    };
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export {};