
  // Define Performance interface if not available;

  interface Performance {
    getEntriesByType (type: string): PerformanceEntry[];
    now (): number;
  }

  // Define PerformanceEntry interface if not available;

  interface PerformanceEntry {
    name: string;
    entry_type: string;
    start_time: number;
    duration: number;
  }

  // Define HTML element types if not available;

  interface Element {
    tag_name: string;
    attributes: NamedNodeMap;
    children: HTMLCollection;
    parent_element: HTMLElement | null;
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
  }
  interface CSSStyleDeclaration {
    [key: string]: string;
  }
  interface HTMLElement extends Element {
<<<<<<< HEAD
    class_name: string;
    id: string;
    innerHTML: string;
    text_content: string | null;
=======
    className: string;
    id: string;
    innerHTML: string;
    textContent: string | null;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

  // Define MessageEvent if not available;
  interface MessageEvent < T = any> extends Event {

=======
  // Define MessageEvent if not available
  interface MessageEvent<T = any> extends Event {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    data: T;
    origin: string;
    lastEventId: string;
    source: MessageEventSource | null;
<<<<<<< HEAD
    ports: ReadonlyArray < MessagePort>;
  }

  // Define RequestInit if not available;

=======
    ports: ReadonlyArray<MessagePort>;
  }
  // Define RequestInit if not available
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
    referrer_policy?: ReferrerPolicy;
=======
    referrerPolicy?: ReferrerPolicy;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    signal?: AbortSignal | null;
    window?: any;
    timeout?: number;
  }
<<<<<<< HEAD

  // Define AbortController if not available;

  interface AbortController {
    signal: AbortSignal;
    abort (): void;
  }

  // Define AbortSignal if not available;

=======
  // Define AbortController if not available
  interface AbortController {
    signal: AbortSignal;
    abort(): void;
  }
  // Define AbortSignal if not available
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  interface AbortSignal extends EventTarget {
    aborted: boolean;
    onabort: ((this: AbortSignal, ev: Event) => any) | null;
  }
}


<<<<<<< HEAD
export {};
=======



=======


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





// Module declarations
declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

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

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.module.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.module.scss" {
  const content: { [className: string]: string };
  export default content;
}

// Environment variables
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    NEXT_PUBLIC_SUPABASE_URL?: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
    SUPABASE_SERVICE_ROLE_KEY?: string;
    NEXT_PUBLIC_GA_TRACKING_ID?: string;
  }
}

export {};
export {};
ursor/integrate-build-improve-and-re-verify-8f7d

// Re-export DOM types that might not be available
export {};
export {};
declare module "*.svg" { const content: 'string; export default content;' } declare module "*.png" { const content: 'string; export default content;' } declare module "*.jpg" { const content: 'string; export default content;' } declare module "*.jpeg" { const content: 'string; export default content;' } declare module "*.gif" { const content: 'string; export default content;' } declare module "*.webp" { const content: 'string; export default content;' } declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } } declare global { interface Window { gtag?: (...args: 'any[]) => void; dataLayer?: any[];' } } } export {};
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
// Re-export DOM types that might not be available
export {}
// Re-export DOM types that might not be available
export {}
// Re - export DOM types that might not be available;
export {}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
// Re-export DOM types that might not be available
export {}
origin/main
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
// Re-export DOM types that might not be available
export {}

export {};
// Re-export DOM types that might not be available;

export {};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
