<<<<<<< HEAD
<<<<<<< HEAD
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
=======

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
>>>>>>> main
  }
  interface CSSStyleDeclaration {
    [key: string]: string;
  }
  interface HTMLElement extends Element {
<<<<<<< HEAD
    className: string;
    id: string;
    innerHTML: string;
    textContent: string | null;
=======
    class_name: string;
    id: string;
    innerHTML: string;
    text_content: string | null;
>>>>>>> main
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
  // Define MessageEvent if not available
  interface MessageEvent<T = any> extends Event {
=======

  // Define MessageEvent if not available;
  interface MessageEvent < T = any> extends Event {

>>>>>>> main
    data: T;
    origin: string;
    lastEventId: string;
    source: MessageEventSource | null;
<<<<<<< HEAD
    ports: ReadonlyArray<MessagePort>;
  }
  // Define RequestInit if not available
=======
    ports: ReadonlyArray < MessagePort>;
  }

  // Define RequestInit if not available;

>>>>>>> main
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
    referrerPolicy?: ReferrerPolicy;
=======
    referrer_policy?: ReferrerPolicy;
>>>>>>> main
    signal?: AbortSignal | null;
    window?: any;
    timeout?: number;
  }
<<<<<<< HEAD
  // Define AbortController if not available
  interface AbortController {
    signal: AbortSignal;
    abort(): void;
  }
  // Define AbortSignal if not available
=======

  // Define AbortController if not available;

  interface AbortController {
    signal: AbortSignal;
    abort (): void;
  }

  // Define AbortSignal if not available;

>>>>>>> main
  interface AbortSignal extends EventTarget {
    aborted: boolean;
    onabort: ((this: AbortSignal, ev: Event) => any) | null;
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
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
<<<<<<< HEAD
=======
export {};
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======

<<<<<<< HEAD
// Re-export DOM types that might not be available
export {};
=======
export {};
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
declare module "*.svg" { const content: 'string; export default content;' } declare module "*.png" { const content: 'string; export default content;' } declare module "*.jpg" { const content: 'string; export default content;' } declare module "*.jpeg" { const content: 'string; export default content;' } declare module "*.gif" { const content: 'string; export default content;' } declare module "*.webp" { const content: 'string; export default content;' } declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } } declare global { interface Window { gtag?: (...args: 'any[]) => void; dataLayer?: any[];' } } } export {};
<<<<<<< HEAD
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
=======
<<<<<<< HEAD
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
=======
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======


export {};
=======



=======


=======

>>>>>>> main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
// Re-export DOM types that might not be available
export {}
>>>>>>> origin/main
=======
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
>>>>>>> origin/automation-improvements-final
=======
// Re-export DOM types that might not be available
export {}
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======

export {};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
// Re-export DOM types that might not be available;
=======

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
export {};
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
// Re - export DOM types that might not be available;
export {}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
