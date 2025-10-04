// Global type declarations

declare global {
  interface Window {
    mixpanel: {
      track: (event: string, properties?: Record<string, unknown>) => void;
      identify: (userId: string) => void;
      alias: (alias: string) => void;
      people: {
        set: (properties: Record<string, unknown>) => void;
      };
    };
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

export {};
