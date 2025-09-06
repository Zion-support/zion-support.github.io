// Global type declarations for DOM types;
declare global {
  interface Window {
    performance: Performance;
  }
<<<<<<< HEAD
  // Define Performance interface if not available
=======
  // Define Performance interface if not available;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  interface Performance {
    getEntriesByType (type: string): PerformanceEntry[];
    now (): number;
  }
<<<<<<< HEAD
  // Define PerformanceEntry interface if not available
=======
  // Define PerformanceEntry interface if not available;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  interface PerformanceEntry {
    name: string;
    entry_type: string;
    start_time: number;
    duration: number;
  }
<<<<<<< HEAD
  // Define HTML element types if not available
=======
  // Define HTML element types if not available;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
<<<<<<< HEAD
  // Define MessageEvent if not available
  interface MessageEvent<T = any> extends Event {
=======
  // Define MessageEvent if not available;
  interface MessageEvent < T = any> extends Event {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    data: T;
    origin: string;
    lastEventId: string;
    source: MessageEventSource | null;
    ports: ReadonlyArray < MessagePort>;
  }
<<<<<<< HEAD
  // Define RequestInit if not available
=======
  // Define RequestInit if not available;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
<<<<<<< HEAD
  // Define AbortController if not available
=======
  // Define AbortController if not available;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  interface AbortController {
    signal: AbortSignal;
    abort (): void;
  }
<<<<<<< HEAD
  // Define AbortSignal if not available
=======
  // Define AbortSignal if not available;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  interface AbortSignal extends EventTarget {
    aborted: boolean;
    onabort: ((this: AbortSignal, ev: Event) => any) | null;
  }
}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
// Re-export DOM types that might not be available
export {};
=======
export {};
<<<<<<< HEAD
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
