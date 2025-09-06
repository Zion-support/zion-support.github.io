// Global type declarations for DOM types
declare global {
  interface Window {
    performance: Performance;
  }

  // Define Performance interface if not available
  interface Performance {
    getEntriesByType (type: string): PerformanceEntry[];
    now (): number;
  }

  // Define PerformanceEntry interface if not available
  interface PerformanceEntry {
    name: string;
    entry_type: string;
    start_time: number;
    duration: number;
  }

  // Define HTML element types if not available
  interface Element {
    tag_name: string;
    attributes: NamedNodeMap;
    children: HTMLCollection;
    parent_element: HTMLElement | null;
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }

  interface CSSStyleDeclaration {
    [key: string]: string;
  }

  interface HTMLElement extends Element {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    class_name: string;
    id: string;
    innerHTML: string;
    text_content: string | null;
<<<<<<< HEAD
=======
    className: string;
    id: string;
    innerHTML: string;
    textContent: string | null;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    style: CSSStyleDeclaration;
  }

  interface HTMLDivElement extends HTMLElement {}
  interface HTMLParagraphElement extends HTMLElement {}
  interface HTMLHeadingElement extends HTMLElement {}
  interface HTMLAnchorElement extends HTMLElement {
    href: string;
    target: string;
  }
<<<<<<< HEAD
<<<<<<< HEAD

  // Define MessageEvent if not available
  interface MessageEvent<T = any> extends Event {
    data: T;
    origin: string;
    lastEventId: string;
    source: MessageEventSource | null;
<<<<<<< HEAD
<<<<<<< HEAD
    ports: ReadonlyArray < MessagePort>;
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
<<<<<<< HEAD
<<<<<<< HEAD
    referrer_policy?: ReferrerPolicy;
=======
    referrerPolicy?: ReferrerPolicy;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    referrer_policy?: ReferrerPolicy;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    signal?: AbortSignal | null;
    window?: any;
    timeout?: number;
  }
<<<<<<< HEAD
<<<<<<< HEAD

  // Define AbortController if not available
  interface AbortController {
    signal: AbortSignal;
    abort (): void;
  }
<<<<<<< HEAD

  // Define AbortSignal if not available
  interface AbortSignal extends EventTarget {
    aborted: boolean;
    onabort: ((this: AbortSignal, ev: Event) => any) | null;
  }
}
<<<<<<< HEAD


<<<<<<< HEAD
export {};
=======



=======


=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
// Re-export DOM types that might not be available
export {};
