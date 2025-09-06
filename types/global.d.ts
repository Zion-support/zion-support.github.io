// Global type declarations for DOM types
declare global {
  interface Window {
    performance: Performance;
  }
  
  // Define Performance interface if not available
  interface Performance {
    getEntriesByType(type: string): PerformanceEntry[];
    now(): number;
  }
  
  // Define PerformanceEntry interface if not available
  interface PerformanceEntry {
    name: string;
    entryType: string;
    startTime: number;
    duration: number;
  }
  
  // Define HTML element types if not available
  interface Element {
    tagName: string;
    attributes: NamedNodeMap;
    children: HTMLCollection;
    parentElement: HTMLElement | null;
  }
  
  interface CSSStyleDeclaration {
    [key: string]: string;
  }
  
  interface HTMLElement extends Element {
    className: string;
    id: string;
    innerHTML: string;
    textContent: string | null;
    style: CSSStyleDeclaration;
  }
  
  interface HTMLDivElement extends HTMLElement {}
  interface HTMLParagraphElement extends HTMLElement {}
  interface HTMLHeadingElement extends HTMLElement {}
  interface HTMLAnchorElement extends HTMLElement {
    href: string;
    target: string;
  }
  
  // Define MessageEvent if not available
  interface MessageEvent<T = any> extends Event {
    data: T;
    origin: string;
    lastEventId: string;
    source: MessageEventSource | null;
    ports: ReadonlyArray<MessagePort>;
  }
  
  // Define RequestInit if not available
  interface RequestInit {
    body?: BodyInit | null;
    cache?: RequestCache;
    credentials?: RequestCredentials;
    headers?: HeadersInit;
    integrity?: string;
    keepalive?: boolean;
    method?: string;
    mode?: RequestMode;
    redirect?: RequestRedirect;
    referrer?: string;
    referrerPolicy?: ReferrerPolicy;
    signal?: AbortSignal | null;
    window?: any;
    timeout?: number;
  }
  
  // Define AbortController if not available
  interface AbortController {
    signal: AbortSignal;
    abort(): void;
  }
  
  // Define AbortSignal if not available
  interface AbortSignal extends EventTarget {
    aborted: boolean;
    onabort: ((this: AbortSignal, ev: Event) => any) | null;
  }
}

// Re-export DOM types that might not be available;
export {};