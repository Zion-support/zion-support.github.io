

// Global type declarations for DOM types
declare global {
  interface Window {
    performance: Performance;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
// Global type declarations
declare module "*.svg {
  const content": string;
  export default content}
declare module "*.png {
  const content": string;
  export default content}
declare module "*.jpg {
  const content": string;
  export default content}
declare module "*.jpeg {
  const content": string;
  export default content}
declare module "*.gif {
  const content": string;
  export default content}
declare module "*.webp {
  const content": string;
  export default content}
declare module "*.css {
  const content": { [className: string]: string }
  export default content}
declare module "*.scss {
  const content": { [className: string]: string }
  export default content}
declare module "*.module.css {
  const content": { [className: string]: string }
  export default content}
declare module "*.module.scss {
  const content": { [className: string]: string }
  export default content}
// Next.js specific types
declare namespace NodeJS {
  interface ProcessEnv {
    "NODE_ENV: development" | "production | test";
    NEXT_PUBLIC_SUPABASE_URL?: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
    SUPABASE_SERVICE_ROLE_KEY?: string;
    NEXT_PUBLIC_GA_TRACKING_ID?: string}
}
// Global window extensions
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
// Global type declarations for DOM types
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
declare global {
  interface Window {
    performance: Performance;
  }

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> main
>>>>>>> main
declare module "*.svg { const content: string; export default content} declare module *.png" { const content: string; export default content} declare module "*.jpg { const content: string; export default content} declare module *.jpeg" { const content: string; export default content} declare module "*.gif { const content: string; export default content} declare module *.webp" { const content: string; export default content} declare module "*.css { const content: { [className: string]: string } export default content} declare module *.scss" { const content: { [className: string]: string } export default content} declare module "*.module.css { const content: { [className: string]: string } export default content} declare module *.module.scss" { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development | production" | "test; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}
>>>>>>> main
>>>>>>> origin/main
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
declare module *.svg" { const content: string; export default content} declare module "*.png { const content: string; export default content} declare module *.jpg" { const content: string; export default content} declare module "*.jpeg { const content: string; export default content} declare module *.gif" { const content: string; export default content} declare module "*.webp { const content: string; export default content} declare module *.css" { const content: { [className: string]: string } export default content} declare module "*.scss { const content: { [className: string]: string } export default content} declare module *.module.css" { const content: { [className: string]: string } export default content} declare module "*.module.scss { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: development" | "production | test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> f239ba8ab20235073506b800efb123c18d8bf440
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
=======
declare module "*.svg { const content: string; export default content} declare module *.png" { const content: string; export default content} declare module "*.jpg { const content: string; export default content} declare module *.jpeg" { const content: string; export default content} declare module "*.gif { const content: string; export default content} declare module *.webp" { const content: string; export default content} declare module "*.css { const content: { [className: string]: string } export default content} declare module *.scss" { const content: { [className: string]: string } export default content} declare module "*.module.css { const content: { [className: string]: string } export default content} declare module *.module.scss" { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development | production" | "test; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68

=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

ursor/automate-test-improve-and-merge-code-646c;
// Global type declarations for DOM types;
declare global {interface Window  {performance: Performance;
  }
  interface Performance  {getEntriesByType (type: string): PerformanceEntry[];
    now (): number;
  }
  interface PerformanceEntry  {name: string;
    entry_type: string;
    start_time: number;
    duration: number;
  }
  interface Element  {tag_name: string;
    attributes: NamedNodeMap;
    children: HTMLCollection;
    parent_element: HTMLElement | null;
  }
  interface CSSStyleDeclaration  {[key: string]: string;
  }
  interface HTMLElement extends Element  {class_name: string;
    id: string;
    innerHTML: string;
    text_content: string | null;
    style: CSSStyleDeclaration;
  }
  interface HTMLDivElement extends HTMLElement {}
  interface HTMLParagraphElement extends HTMLElement {}
  interface HTMLHeadingElement extends HTMLElement {}
  interface HTMLAnchorElement extends HTMLElement  {href: string;
    target: string;
  }
    data: T;
    origin: string;
    lastEventId: string;
    source: MessageEventSource | null;
    ports: ReadonlyArray < MessagePort>;
  }
  interface RequestInit  {body?: BodyInit | null;
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
  interface AbortController  {signal: AbortSignal;
    abort (): void;
  }

    onabort: ((this: AbortSignal, ev: Event) => any) | null;
  }
}export {}// Global type declarations;
declare module *.svg" {const "content: string;
// Global type declarations for DOM types

>>>>>>> main
  }






// Global type declarations
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
}
// Global type declarations
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
declare module *.svg" {
  const "content: string;
  export default content}
declare module *.png" {
  const "content: string;
  export default content}
declare module *.jpg" {
  const "content: string;
  export default content}
declare module *.jpeg" {
  const "content: string;
  export default content}
declare module *.gif" {
  const "content: string;
  export default content}
declare module *.webp" {
  const "content: string;
  export default content}
declare module *.css" {
  const "content: { [className: string]: string }
  export default content}
declare module *.scss" {
  const "content: { [className: string]: string }
  export default content}
declare module *.module.css" {
  const "content: { [className: string]: string }
  export default content}
declare module *.module.scss" {
  const "content: { [className: string]: string }
  export default content}
// Next.js specific types
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV": "development | production" | "test;
    NEXT_PUBLIC_SUPABASE_URL?: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
    SUPABASE_SERVICE_ROLE_KEY?: string;
    NEXT_PUBLIC_GA_TRACKING_ID?: string}
}



/// <reference types=next" />
/// <reference types="next/image-types/global />
/// <reference types=next/navigation-types/navigation" />


// Global window extensions
declare module "*.svg { const content: string; export default content} declare module *.png" { const content: string; export default content} declare module "*.jpg { const content: string; export default content} declare module *.jpeg" { const content: string; export default content} declare module "*.gif { const content: string; export default content} declare module *.webp" { const content: string; export default content} declare module "*.css { const content: { [className: string]: string } export default content} declare module *.scss" { const content: { [className: string]: string } export default content} declare module "*.module.css { const content: { [className: string]: string } export default content} declare module *.module.scss" { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development | production" | "test; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}



declare module *.svg" { const content: string; export default content} declare module "*.png { const content: string; export default content} declare module *.jpg" { const content: string; export default content} declare module "*.jpeg { const content: string; export default content} declare module *.gif" { const content: string; export default content} declare module "*.webp { const content: string; export default content} declare module *.css" { const content: { [className: string]: string } export default content} declare module "*.scss { const content: { [className: string]: string } export default content} declare module *.module.css" { const content: { [className: string]: string } export default content} declare module "*.module.scss { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: development" | "production | test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}



declare module "*.svg { const content: string; export default content} declare module *.png" { const content: string; export default content} declare module "*.jpg { const content: string; export default content} declare module *.jpeg" { const content: string; export default content} declare module "*.gif { const content: string; export default content} declare module *.webp" { const content: string; export default content} declare module "*.css { const content: { [className: string]: string } export default content} declare module *.scss" { const content: { [className: string]: string } export default content} declare module "*.module.css { const content: { [className: string]: string } export default content} declare module *.module.scss" { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development | production" | "test; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}




declare module *.svg" { const content: string; export default content} declare module "*.png { const content: string; export default content} declare module *.jpg" { const content: string; export default content} declare module "*.jpeg { const content: string; export default content} declare module *.gif" { const content: string; export default content} declare module "*.webp { const content: string; export default content} declare module *.css" { const content: { [className: string]: string } export default content} declare module "*.scss { const content: { [className: string]: string } export default content} declare module *.module.css" { const content: { [className: string]: string } export default content} declare module "*.module.scss { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: development" | "production | test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}



>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4

// Global window extensions
declare global {
  interface Window {
    gtag?: (..."args: any[]) => void;
    dataLayer?: any[]}


=======
  // Define MessageEvent if not available;
  interface MessageEvent < T = any> extends Event {

    data: T;
    origin: string;
    lastEventId: string;
    source: MessageEventSource | null;
    ports: ReadonlyArray < MessagePort>;
  }

  // Define RequestInit if not available;

    ports: ReadonlyArray < MessagePort>;
  }
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
    referrer_policy?: ReferrerPolicy;
    signal?: AbortSignal | null;
    window?: any;
    timeout?: number;
  }

  // Define AbortController if not available;

  interface AbortController {
    signal: AbortSignal;
    abort (): void;
  }

  // Define AbortSignal if not available;

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  interface AbortSignal extends EventTarget {
    aborted: boolean;
    onabort: ((this: AbortSignal, ev: Event) => any) | null;
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
  }
}

export {}

export {}
// Global type declarations
declare module *.svg" {
  const "content: string;
  export default content}
declare module *.png" {const "content: string;
  export default content}
declare module *.jpg" {const "content: string;
  export default content}
declare module *.jpeg" {const "content: string;
  export default content}
declare module *.gif" {const "content: string;
  export default content}
declare module *.webp" {const "content: string;
  export default content}
declare module *.css" {const "content: { [className: string]: string }export default content}
declare module *.scss" {const "content: { [className: string]: string }export default content}
declare module *.module.css" {const "content: { [className: string]: string }export default content}
declare module *.module.scss" {const "content: { [className: string]: string }export default content}
// Next.js specific types;
declare namespace NodeJS {interface ProcessEnv  {NODE_ENV": "development | production" | "test;
    NEXT_PUBLIC_SUPABASE_URL?: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
    SUPABASE_SERVICE_ROLE_KEY?: string;

  }
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
}

=======
// Re-export DOM types that might not be available
export {}
// Re - export DOM types that might not be available;
export {}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-9571
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======

export {}
export {}
export {}
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> main

// Re-export DOM types that might not be available
export {}

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
export {}
declare module *.svg" { const content: 'string; export default content; } declare module "*.png { const content: string; export default content;' } declare module *.jpg" { const content: 'string; export default content; } declare module "*.jpeg { const content: string; export default content;' } declare module *.gif" { const content: 'string; export default content; } declare module "*.webp { const content: string; export default content;' } declare module *.css" { const content: { [className: string]: string } export default content} declare module "*.scss { const content: { [className: string]: string } export default content} declare module *.module.css" { const content: { [className: string]: string } export default content} declare module "*.module.scss { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: development" | "production | test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } } declare global { interface Window { gtag?: (...args: 'any[]) => void; dataLayer?: any[]; } } } export {}
declare module "*.svg { const content: string; export default content} declare module *.png" { const content: string; export default content} declare module "*.jpg { const content: string; export default content} declare module *.jpeg" { const content: string; export default content} declare module "*.gif { const content: string; export default content} declare module *.webp" { const content: string; export default content} declare module "*.css { const content: { [className: string]: string } export default content} declare module *.scss" { const content: { [className: string]: string } export default content} declare module "*.module.css { const content: { [className: string]: string } export default content} declare module *.module.scss" { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development | production" | "test; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}
declare module *.svg" { const content: string; export default content} declare module "*.png { const content: string; export default content} declare module *.jpg" { const content: string; export default content} declare module "*.jpeg { const content: string; export default content} declare module *.gif" { const content: string; export default content} declare module "*.webp { const content: string; export default content} declare module *.css" { const content: { [className: string]: string } export default content} declare module "*.scss { const content: { [className: string]: string } export default content} declare module *.module.css" { const content: { [className: string]: string } export default content} declare module "*.module.scss { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: development" | "production | test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}
declare module "*.svg { const content: string; export default content} declare module *.png" { const content: string; export default content} declare module "*.jpg { const content: string; export default content} declare module *.jpeg" { const content: string; export default content} declare module "*.gif { const content: string; export default content} declare module *.webp" { const content: string; export default content} declare module "*.css { const content: { [className: string]: string } export default content} declare module *.scss" { const content: { [className: string]: string } export default content} declare module "*.module.css { const content: { [className: string]: string } export default content} declare module *.module.scss" { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development | production" | "test; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}
declare module *.svg" { const content: string; export default content} declare module "*.png { const content: string; export default content} declare module *.jpg" { const content: string; export default content} declare module "*.jpeg { const content: string; export default content} declare module *.gif" { const content: string; export default content} declare module "*.webp { const content: string; export default content} declare module *.css" { const content: { [className: string]: string } export default content} declare module "*.scss { const content: { [className: string]: string } export default content} declare module *.module.css" { const content: { [className: string]: string } export default content} declare module "*.module.scss { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: development" | "production | test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}
declare module "*.svg { const content: string; export default content} declare module *.png" { const content: string; export default content} declare module "*.jpg { const content: string; export default content} declare module *.jpeg" { const content: string; export default content} declare module "*.gif { const content: string; export default content} declare module *.webp" { const content: string; export default content} declare module "*.css { const content: { [className: string]: string } export default content} declare module *.scss" { const content: { [className: string]: string } export default content} declare module "*.module.css { const content: { [className: string]: string } export default content} declare module *.module.scss" { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development | production" | "test; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}
declare module *.svg" { const content: string; export default content} declare module "*.png { const content: string; export default content} declare module *.jpg" { const content: string; export default content} declare module "*.jpeg { const content: string; export default content} declare module *.gif" { const content: string; export default content} declare module "*.webp { const content: string; export default content} declare module *.css" { const content: { [className: string]: string } export default content} declare module "*.scss { const content: { [className: string]: string } export default content} declare module *.module.css" { const content: { [className: string]: string } export default content} declare module "*.module.scss { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: development" | "production | test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}
declare module "*.svg { const content: string; export default content} declare module *.png" { const content: string; export default content} declare module "*.jpg { const content: string; export default content} declare module *.jpeg" { const content: string; export default content} declare module "*.gif { const content: string; export default content} declare module *.webp" { const content: string; export default content} declare module "*.css { const content: { [className: string]: string } export default content} declare module *.scss" { const content: { [className: string]: string } export default content} declare module "*.module.css { const content: { [className: string]: string } export default content} declare module *.module.scss" { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development | production" | "test; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}
declare module *.svg" { const content: string; export default content} declare module "*.png { const content: string; export default content} declare module *.jpg" { const content: string; export default content} declare module "*.jpeg { const content: string; export default content} declare module *.gif" { const content: string; export default content} declare module "*.webp { const content: string; export default content} declare module *.css" { const content: { [className: string]: string } export default content} declare module "*.scss { const content: { [className: string]: string } export default content} declare module *.module.css" { const content: { [className: string]: string } export default content} declare module "*.module.scss { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: development" | "production | test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}
declare module "*.svg { const content: string; export default content} declare module *.png" { const content: string; export default content} declare module "*.jpg { const content: string; export default content} declare module *.jpeg" { const content: string; export default content} declare module "*.gif { const content: string; export default content} declare module *.webp" { const content: string; export default content} declare module "*.css { const content: { [className: string]: string } export default content} declare module *.scss" { const content: { [className: string]: string } export default content} declare module "*.module.css { const content: { [className: string]: string } export default content} declare module *.module.scss" { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development | production" | "test; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}
declare module *.svg" { const content: string; export default content} declare module "*.png { const content: string; export default content} declare module *.jpg" { const content: string; export default content} declare module "*.jpeg { const content: string; export default content} declare module *.gif" { const content: string; export default content} declare module "*.webp { const content: string; export default content} declare module *.css" { const content: { [className: string]: string } export default content} declare module "*.scss { const content: { [className: string]: string } export default content} declare module *.module.css" { const content: { [className: string]: string } export default content} declare module "*.module.scss { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: development" | "production | test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}

declare global {
  interface Window {

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
  }
}export {}export {}export {}ursor/integrate-build-improve-and-re-verify-8f7d;
// Re-export DOM types that might not be available;
export {}export {}declare module "*.svg { const content: string; export default content;' } declare module *.png" { const content: 'string; export default content; } declare module "*.jpg { const content: string; export default content;' } declare module *.jpeg" { const content: 'string; export default content; } declare module "*.gif { const content: string; export default content;' } declare module *.webp" { const content: 'string; export default content; } declare module "*.css { const content: { [className: string]: string }export default content} declare module *.scss" { const content: { [className: string]: string }export default content} declare module "*.module.css { const content: { [className: string]: string }export default content} declare module *.module.scss" { const content: { [className: string]: string }export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development | production" | "test; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[];' } } } export {}// Re-export DOM types that might not be available;
export {}
// Re - export DOM types that might not be available;
export {}
ursor/fix-netlify-build-and-merge-to-main-9571;
declare module *.svg" { const content: string; export default content} declare module "*.png { const content: string; export default content} declare module *.jpg" { const content: string; export default content} declare module "*.jpeg { const content: string; export default content} declare module *.gif" { const content: string; export default content} declare module "*.webp { const content: string; export default content} declare module *.css" { const content: { [className: string]: string }export default content} declare module "*.scss { const content: { [className: string]: string }export default content} declare module *.module.css" { const content: { [className: string]: string }export default content} declare module "*.module.scss { const content: { [className: string]: string }export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: development" | "production | test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}export {}declare module "*.svg { const content: 'string; export default content; } declare module *.png" { const content: string; export default content;' } declare module "*.jpg { const content: 'string; export default content; } declare module *.jpeg" { const content: string; export default content;' } declare module "*.gif { const content: 'string; export default content; } declare module *.webp" { const content: string; export default content;' } declare module "*.css { const content: { [className: string]: string }export default content} declare module *.scss" { const content: { [className: string]: string }export default content} declare module "*.module.css { const content: { [className: string]: string }export default content} declare module *.module.scss" { const content: { [className: string]: string }export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development | production" | "test; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } } declare global { interface Window { gtag?: (...args: 'any[]) => void; dataLayer?: any[]; } } } export {}declare module *.svg" { const content: string; export default content} declare module "*.png { const content: string; export default content} declare module *.jpg" { const content: string; export default content} declare module "*.jpeg { const content: string; export default content} declare module *.gif" { const content: string; export default content} declare module "*.webp { const content: string; export default content} declare module *.css" { const content: { [className: string]: string }export default content} declare module "*.scss { const content: { [className: string]: string }export default content} declare module *.module.css" { const content: { [className: string]: string }export default content} declare module "*.module.scss { const content: { [className: string]: string }export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: development" | "production | test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}declare module "*.svg { const content: string; export default content} declare module *.png" { const content: string; export default content} declare module "*.jpg { const content: string; export default content} declare module *.jpeg" { const content: string; export default content} declare module "*.gif { const content: string; export default content} declare module *.webp" { const content: string; export default content} declare module "*.css { const content: { [className: string]: string }export default content} declare module *.scss" { const content: { [className: string]: string }export default content} declare module "*.module.css { const content: { [className: string]: string }export default content} declare module *.module.scss" { const content: { [className: string]: string }export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development | production" | "test; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}declare module *.svg" { const content: string; export default content} declare module "*.png { const content: string; export default content} declare module *.jpg" { const content: string; export default content} declare module "*.jpeg { const content: string; export default content} declare module *.gif" { const content: string; export default content} declare module "*.webp { const content: string; export default content} declare module *.css" { const content: { [className: string]: string }export default content} declare module "*.scss { const content: { [className: string]: string }export default content} declare module *.module.css" { const content: { [className: string]: string }export default content} declare module "*.module.scss { const content: { [className: string]: string }export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: development" | "production | test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}declare module "*.svg { const content: string; export default content} declare module *.png" { const content: string; export default content} declare module "*.jpg { const content: string; export default content} declare module *.jpeg" { const content: string; export default content} declare module "*.gif { const content: string; export default content} declare module *.webp" { const content: string; export default content} declare module "*.css { const content: { [className: string]: string }export default content} declare module *.scss" { const content: { [className: string]: string }export default content} declare module "*.module.css { const content: { [className: string]: string }export default content} declare module *.module.scss" { const content: { [className: string]: string }export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development | production" | "test; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}declare module *.svg" { const content: string; export default content} declare module "*.png { const content: string; export default content} declare module *.jpg" { const content: string; export default content} declare module "*.jpeg { const content: string; export default content} declare module *.gif" { const content: string; export default content} declare module "*.webp { const content: string; export default content} declare module *.css" { const content: { [className: string]: string }export default content} declare module "*.scss { const content: { [className: string]: string }export default content} declare module *.module.css" { const content: { [className: string]: string }export default content} declare module "*.module.scss { const content: { [className: string]: string }export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: development" | "production | test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}declare module "*.svg { const content: string; export default content} declare module *.png" { const content: string; export default content} declare module "*.jpg { const content: string; export default content} declare module *.jpeg" { const content: string; export default content} declare module "*.gif { const content: string; export default content} declare module *.webp" { const content: string; export default content} declare module "*.css { const content: { [className: string]: string }export default content} declare module *.scss" { const content: { [className: string]: string }export default content} declare module "*.module.css { const content: { [className: string]: string }export default content} declare module *.module.scss" { const content: { [className: string]: string }export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development | production" | "test; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}declare module *.svg" { const content: string; export default content} declare module "*.png { const content: string; export default content} declare module *.jpg" { const content: string; export default content} declare module "*.jpeg { const content: string; export default content} declare module *.gif" { const content: string; export default content} declare module "*.webp { const content: string; export default content} declare module *.css" { const content: { [className: string]: string }export default content} declare module "*.scss { const content: { [className: string]: string }export default content} declare module *.module.css" { const content: { [className: string]: string }export default content} declare module "*.module.scss { const content: { [className: string]: string }export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: development" | "production | test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}ursor/automate-test-improve-and-merge-code-646c;
export {}declare module "*.svg { const content: string; export default content;' } declare module *.png" { const content: 'string; export default content; } declare module "*.jpg { const content: string; export default content;' } declare module *.jpeg" { const content: 'string; export default content; } declare module "*.gif { const content: string; export default content;' } declare module *.webp" { const content: 'string; export default content; } declare module "*.css { const content: { [className: string]: string }export default content} declare module *.scss" { const content: { [className: string]: string }export default content} declare module "*.module.css { const content: { [className: string]: string }export default content} declare module *.module.scss" { const content: { [className: string]: string }export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development | production" | "test; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[];' } } } export {}// Re-export DOM types that might not be available;
export {}
// Re - export DOM types that might not be available;
export {}
declare module *.svg" { const content: string; export default content} declare module "*.png { const content: string; export default content} declare module *.jpg" { const content: string; export default content} declare module "*.jpeg { const content: string; export default content} declare module *.gif" { const content: string; export default content} declare module "*.webp { const content: string; export default content} declare module *.css" { const content: { [className: string]: string }export default content} declare module "*.scss { const content: { [className: string]: string }export default content} declare module *.module.css" { const content: { [className: string]: string }export default content} declare module "*.module.scss { const content: { [className: string]: string }export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: development" | "production | test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}declare module "*.svg { const content: string; export default content} declare module *.png" { const content: string; export default content} declare module "*.jpg { const content: string; export default content} declare module *.jpeg" { const content: string; export default content} declare module "*.gif { const content: string; export default content} declare module *.webp" { const content: string; export default content} declare module "*.css { const content: { [className: string]: string }export default content} declare module *.scss" { const content: { [className: string]: string }export default content} declare module "*.module.css { const content: { [className: string]: string }export default content} declare module *.module.scss" { const content: { [className: string]: string }export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development | production" | "test; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}declare module *.svg" { const content: string; export default content} declare module "*.png { const content: string; export default content} declare module *.jpg" { const content: string; export default content} declare module "*.jpeg { const content: string; export default content} declare module *.gif" { const content: string; export default content} declare module "*.webp { const content: string; export default content} declare module *.css" { const content: { [className: string]: string }export default content} declare module "*.scss { const content: { [className: string]: string }export default content} declare module *.module.css" { const content: { [className: string]: string }export default content} declare module "*.module.scss { const content: { [className: string]: string }export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: development" | "production | test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}
}

export {}
export {}
declare module "*.svg { const content: 'string; export default content; } declare module *.png" { const content: string; export default content;' } declare module "*.jpg { const content: 'string; export default content; } declare module *.jpeg" { const content: string; export default content;' } declare module "*.gif { const content: 'string; export default content; } declare module *.webp" { const content: string; export default content;' } declare module "*.css { const content: { [className: string]: string } export default content} declare module *.scss" { const content: { [className: string]: string } export default content} declare module "*.module.css { const content: { [className: string]: string } export default content} declare module *.module.scss" { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development | production" | "test; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } } declare global { interface Window { gtag?: (...args: 'any[]) => void; dataLayer?: any[];' } } } export {}
// Re-export DOM types that might not be available
export {}
// Re - export DOM types that might not be available;
export {}
declare module *.svg" { const content: string; export default content} declare module "*.png { const content: string; export default content} declare module *.jpg" { const content: string; export default content} declare module "*.jpeg { const content: string; export default content} declare module *.gif" { const content: string; export default content} declare module "*.webp { const content: string; export default content} declare module *.css" { const content: { [className: string]: string } export default content} declare module "*.scss { const content: { [className: string]: string } export default content} declare module *.module.css" { const content: { [className: string]: string } export default content} declare module "*.module.scss { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: development" | "production | test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}
declare module "*.svg { const content: string; export default content} declare module *.png" { const content: string; export default content} declare module "*.jpg { const content: string; export default content} declare module *.jpeg" { const content: string; export default content} declare module "*.gif { const content: string; export default content} declare module *.webp" { const content: string; export default content} declare module "*.css { const content: { [className: string]: string } export default content} declare module *.scss" { const content: { [className: string]: string } export default content} declare module "*.module.css { const content: { [className: string]: string } export default content} declare module *.module.scss" { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development | production" | "test; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}
declare module *.svg" { const content: string; export default content} declare module "*.png { const content: string; export default content} declare module *.jpg" { const content: string; export default content} declare module "*.jpeg { const content: string; export default content} declare module *.gif" { const content: string; export default content} declare module "*.webp { const content: string; export default content} declare module *.css" { const content: { [className: string]: string } export default content} declare module "*.scss { const content: { [className: string]: string } export default content} declare module *.module.css" { const content: { [className: string]: string } export default content} declare module "*.module.scss { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: development" | "production | test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}
declare module "*.svg { const content: string; export default content} declare module *.png" { const content: string; export default content} declare module "*.jpg { const content: string; export default content} declare module *.jpeg" { const content: string; export default content} declare module "*.gif { const content: string; export default content} declare module *.webp" { const content: string; export default content} declare module "*.css { const content: { [className: string]: string } export default content} declare module *.scss" { const content: { [className: string]: string } export default content} declare module "*.module.css { const content: { [className: string]: string } export default content} declare module *.module.scss" { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development | production" | "test; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}
declare module *.svg" { const content: string; export default content} declare module "*.png { const content: string; export default content} declare module *.jpg" { const content: string; export default content} declare module "*.jpeg { const content: string; export default content} declare module *.gif" { const content: string; export default content} declare module "*.webp { const content: string; export default content} declare module *.css" { const content: { [className: string]: string } export default content} declare module "*.scss { const content: { [className: string]: string } export default content} declare module *.module.css" { const content: { [className: string]: string } export default content} declare module "*.module.scss { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: development" | "production | test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}
declare module "*.svg { const content: string; export default content} declare module *.png" { const content: string; export default content} declare module "*.jpg { const content: string; export default content} declare module *.jpeg" { const content: string; export default content} declare module "*.gif { const content: string; export default content} declare module *.webp" { const content: string; export default content} declare module "*.css { const content: { [className: string]: string } export default content} declare module *.scss" { const content: { [className: string]: string } export default content} declare module "*.module.css { const content: { [className: string]: string } export default content} declare module *.module.scss" { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development | production" | "test; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}
declare module *.svg" { const content: string; export default content} declare module "*.png { const content: string; export default content} declare module *.jpg" { const content: string; export default content} declare module "*.jpeg { const content: string; export default content} declare module *.gif" { const content: string; export default content} declare module "*.webp { const content: string; export default content} declare module *.css" { const content: { [className: string]: string } export default content} declare module "*.scss { const content: { [className: string]: string } export default content} declare module *.module.css" { const content: { [className: string]: string } export default content} declare module "*.module.scss { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: development" | "production | test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}
declare module "*.svg { const content: string; export default content} declare module *.png" { const content: string; export default content} declare module "*.jpg { const content: string; export default content} declare module *.jpeg" { const content: string; export default content} declare module "*.gif { const content: string; export default content} declare module *.webp" { const content: string; export default content} declare module "*.css { const content: { [className: string]: string } export default content} declare module *.scss" { const content: { [className: string]: string } export default content} declare module "*.module.css { const content: { [className: string]: string } export default content} declare module *.module.scss" { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development | production" | "test; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}
declare module *.svg" { const content: string; export default content} declare module "*.png { const content: string; export default content} declare module *.jpg" { const content: string; export default content} declare module "*.jpeg { const content: string; export default content} declare module *.gif" { const content: string; export default content} declare module "*.webp { const content: string; export default content} declare module *.css" { const content: { [className: string]: string } export default content} declare module "*.scss { const content: { [className: string]: string } export default content} declare module *.module.css" { const content: { [className: string]: string } export default content} declare module "*.module.scss { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: development" | "production | test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}
declare module "*.svg { const content: string; export default content} declare module *.png" { const content: string; export default content} declare module "*.jpg { const content: string; export default content} declare module *.jpeg" { const content: string; export default content} declare module "*.gif { const content: string; export default content} declare module *.webp" { const content: string; export default content} declare module "*.css { const content: { [className: string]: string } export default content} declare module *.scss" { const content: { [className: string]: string } export default content} declare module "*.module.css { const content: { [className: string]: string } export default content} declare module *.module.scss" { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development | production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}
export {},
>>>>>>> origin/main
