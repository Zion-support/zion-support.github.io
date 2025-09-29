
// Global type definitions for browser APIs
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    requestIdleCallback?: (callback: () => void, options?: { timeout?: number }) => number;
  }
  
  interface Navigator {
    connection?: {
      effectiveType?: string;
      downlink?: number;
    };
  }
  
  interface PerformanceResourceTiming extends PerformanceEntry {
    transferSize: number;
    encodedBodySize: number;
    decodedBodySize: number;
  }
  
  interface MouseEvent extends Event {
    clientX: number;
    clientY: number;
  }
  
  interface HTMLMetaElement extends HTMLElement {
    content: string;
  }
  
  interface HTMLLinkElement extends HTMLElement {
    rel: string;
    href: string;
  }
}

export {};
