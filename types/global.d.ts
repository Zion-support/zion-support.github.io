// Global type declarations for DOM types
declare global {
  interface Window {
    performance: Performance;
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }

  // Define Performance interface if not available
  interface Performance {
    getEntriesByType(type: string): PerformanceEntry[];
    now(): number;
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
  }

  interface CSSStyleDeclaration {
    [key: string]: string;
  }

  interface HTMLElement extends Element {
    class_name: string;
    id: string;
    innerHTML: string;
    text_content: string | null;
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
    referrer_policy?: ReferrerPolicy;
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

<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
export {};
=======

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.gif" {
  const content: string;
  export default content;
}

declare module "*.webp" {
  const content: string;
  export default content;
}

=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
// Re-export DOM types that might not be available
export {}
>>>>>>> origin/main
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> origin/automation-improvements-final
=======
// Re-export DOM types that might not be available
export {}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
// Re - export DOM types that might not be available;
export {}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
// Re-export DOM types that might not be available
export {};
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
