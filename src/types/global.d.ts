// Global type declarations

declare global {
  interface Window {
    mixpanel: any;
    gtag: any;
    dataLayer: any[];
  }
}

export {};