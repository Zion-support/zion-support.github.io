/// <reference types="next" /> /// <reference types="next/image-types/global" /> /// <reference types="next/navigation-types/navigation" /> 
// Global type declarations for DOM types
declare global {
  interface Window {
    performance: Performance;
// Global type declarations
declare module "*.svg" {
  const "content": string;
  export default content}
declare module "*.png" {
  const "content": string;
  export default content}
declare module "*.jpg" {
  const "content": string;
  export default content}
declare module "*.jpeg" {
  const "content": string;
  export default content}
declare module "*.gif" {
  const "content": string;
  export default content}
declare module "*.webp" {
  const "content": string;
  export default content}
declare module "*.css" {
  const "content": { [className: string]: string };
  export default content}
declare module "*.scss" {
  const "content": { [className: string]: string };
  export default content}
declare module "*.module.css" {
  const "content": { [className: string]: string };
  export default content}
declare module "*.module.scss" {
  const "content": { [className: string]: string };
  export default content}
// Next.js specific types
declare namespace NodeJS {
  interface ProcessEnv {
    "NODE_ENV": "development" | "production" | "test";
    NEXT_PUBLIC_SUPABASE_URL?: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
    SUPABASE_SERVICE_ROLE_KEY?: string;
    NEXT_PUBLIC_GA_TRACKING_ID?: string}
}
// Global window extensions
// Global type declarations for DOM types
declare global {
  interface Window {
    performance: Performance;
  }
}
export {};
declare module "*.svg" { const content: 'string; export default content;' } declare module "*.png" { const content: 'string; export default content;' } declare module "*.jpg" { const content: 'string; export default content;' } declare module "*.jpeg" { const content: 'string; export default content;' } declare module "*.gif" { const content: 'string; export default content;' } declare module "*.webp" { const content: 'string; export default content;' } declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } } declare global { interface Window { gtag?: (...args: 'any[]) => void; dataLayer?: any[];' } } } export {};
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};

// Global type declarations
declare module "*.svg {
  const content": string;
  export default content}
declare module "*.png {
  export default content}
declare module "*.jpg {
  export default content}
declare module "*.jpeg {
  export default content}
declare module "*.gif {
  export default content}
declare module "*.webp {
  export default content}
declare module "*.css {
  const content": { [className: string]: string }
  export default content}
declare module "*.scss {
  export default content}
declare module "*.module.css {
  export default content}
declare module "*.module.scss {
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

// Global type declarations for DOM types
declare global {
  interface Window {
    performance: Performance;
  }

declare module "*.svg { const content: string; export default content} declare module *.png" { const content: string; export default content} declare module "*.jpg { const content: string; export default content} declare module *.jpeg" { const content: string; export default content} declare module "*.gif { const content: string; export default content} declare module *.webp" { const content: string; export default content} declare module "*.css { const content: { [className: string]: string } export default content} declare module *.scss" { const content: { [className: string]: string } export default content} declare module "*.module.css { const content: { [className: string]: string } export default content} declare module *.module.scss" { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development | production" | "test; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}
declare module *.svg" { const content: string; export default content} declare module "*.png { const content: string; export default content} declare module *.jpg" { const content: string; export default content} declare module "*.jpeg { const content: string; export default content} declare module *.gif" { const content: string; export default content} declare module "*.webp { const content: string; export default content} declare module *.css" { const content: { [className: string]: string } export default content} declare module "*.scss { const content: { [className: string]: string } export default content} declare module *.module.css" { const content: { [className: string]: string } export default content} declare module "*.module.scss { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: development" | "production | test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}
declare module "*.svg { const content: string; export default content} declare module *.png" { const content: string; export default content} declare module "*.jpg { const content: string; export default content} declare module *.jpeg" { const content: string; export default content} declare module "*.gif { const content: string; export default content} declare module *.webp" { const content: string; export default content} declare module "*.css { const content: { [className: string]: string } export default content} declare module *.scss" { const content: { [className: string]: string } export default content} declare module "*.module.css { const content: { [className: string]: string } export default content} declare module *.module.scss" { const content: { [className: string]: string } export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development | production" | "test; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}


ursor/automate-test-improve-and-merge-code-646c;
// Global type declarations for DOM types;
declare global {interface Window  {"performance": Performance;
  }
interface Performance  {getEntriesByType ("type": string): PerformanceEntry[];
    }
    now (): number;
  }
interface PerformanceEntry  {"name": string;
    }
    "entry_type": string;
    "start_time": number;
    "duration": number;
  }
interface Element  {"tag_name": string;
    }
    "attributes": NamedNodeMap;
    "children": HTMLCollection;
    "parent_element": HTMLElement | null;
  }
interface CSSStyleDeclaration  {["key": string]: string;
  }
interface HTMLElement extends Element  {"class_name": string;
    }
    "id": string;
    "innerHTML": string;
    "text_content": string | null;
    "style": CSSStyleDeclaration;
  }
interface HTMLDivElement extends HTMLElement {}
interface HTMLParagraphElement extends HTMLElement {}
interface HTMLHeadingElement extends HTMLElement {}
interface HTMLAnchorElement extends HTMLElement  {"href": string;
    }
    "target": string;
  }
  interface MessageEvent<T = any> {
    }
    "data": T;
    "origin": string;
    "lastEventId": string;
    "source": MessageEventSource | null;
    "ports": ReadonlyArray < MessagePort>;
  }
interface RequestInit  {body?: BodyInit | null;
    }
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
interface AbortController  {"signal": AbortSignal;
    }
    abort (): void;
  }
  interface AbortSignal extends EventTarget  {aborted: boolean;
  // Define AbortSignal if not available
    onabort: ((this: AbortSignal, ev: Event) => any) | null;
  }
}export {}// Global type declarations;
declare module "*.svg" {const "content": string;
// Global type declarations for DOM types
/// <reference types = $2;
  export default content
}
declare global {
  }
  interface Window {
    }
    gtag?: (..."args": any[]) => void;
    dataLayer?: any[];
  }
}// Global type declarations
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

/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference types="next/navigation-types/navigation" />





// Global type declarations
}
// Global type declarations
declare module "*.svg" {
  const "content": string;
  export default content}
declare module "*.png" {
  const "content": string;
  export default content}
declare module "*.jpg" {
  const "content": string;
  export default content}
declare module "*.jpeg" {
  const "content": string;
  export default content}
declare module "*.gif" {
  const "content": string;
  export default content}
declare module "*.webp" {
  const "content": string;
  export default content}
declare module "*.css" {
  const "content": { [className: string]: string };
  export default content}
declare module "*.scss" {
  const "content": { [className: string]: string };
  export default content}
declare module "*.module.css" {
  const "content": { [className: string]: string };
  export default content}
declare module "*.module.scss" {
  const "content": { [className: string]: string };
}
// Global type declarations
declare module *.svg" {
  const "content: string;
  export default content}
declare module *.png" {
  export default content}
declare module *.jpg" {
  export default content}
declare module *.jpeg" {
  export default content}
declare module *.gif" {
  export default content}
declare module *.webp" {
  export default content}
declare module *.css" {
  const "content: { [className: string]: string }
  export default content}
declare module *.scss" {
  export default content}
declare module *.module.css" {
  export default content}
declare module *.module.scss" {
  export default content}
// Next.js specific types
declare namespace NodeJS {
  interface ProcessEnv {
    "NODE_ENV": "development" | "production" | "test";
    NEXT_PUBLIC_SUPABASE_URL?: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
    SUPABASE_SERVICE_ROLE_KEY?: string;
    NEXT_PUBLIC_GA_TRACKING_ID?: string}
}



/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference types="next/navigation-types/navigation" />


// Global window extensions
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};



declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};



declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};




declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};




// Global window extensions
declare global {
  interface Window {
    gtag?: (..."args": any[]) => void;
    dataLayer?: any[]}

export {};
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test',
      [key: string]: string | undefined
    }
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

  interface AbortSignal extends EventTarget {
    aborted: boolean;
    onabort: ((this: AbortSignal, ev: Event) => any) | null;
  }
  const "content": string;"
export default content}
declare module "*.png" {const "content": string;"
}
export default content}
declare module "*.jpg" {const "content": string;"
}
export default content}
declare module "*.jpeg" {const "content": string;"
}
export default content}
declare module "*.gif" {const "content": string;"
}
export default content}
declare module "*.webp" {const "content": string;"
}
export default content}
declare module "*.css" {const "content": { ["className": string]: string }"
export default content}
declare module "*.scss" {const "content": { ["className": string]: string }"
export default content}
declare module "*.module.css" {const "content": { ["className": string]: string }"
export default content}
declare module "*.module.scss" {const "content": { ["className": string]: string }"
export default conten}
// Next.js specific types;
declare namespace NodeJS {interface ProcessEnv  {"NODE_ENV": "development" | "production" | "test";"
    }
    NEXT_PUBLIC_SUPABASE_URL?: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
    SUPABASE_SERVICE_ROLE_KEY?: string;
    NEXT_PUBLIC_GA_TRACKING_ID?: string}
  }
}
/// <reference types="next" />;
/// <reference types="next/image-types/global" />;
/// <reference types="next/navigation-types/navigation" />;
// Global window extensions;
declare module "*.svg" { const "content": string;"
}
export default content} declare module "*.png" { const "content": string;"
}
export default content} declare module "*.jpg" { const "content": string;"
}
export default content} declare module "*.jpeg" { const "content": string;"
}
export default content} declare module "*.gif" { const "content": string;"
}
export default content} declare module "*.webp" { const "content": string;"
}
export default content} declare module "*.css" { const "content": { ["className": string]: string }"
export default content} declare module "*.scss" { const "content": { ["className": string]: string }"
export default content} declare module "*.module.css" { const "content": { ["className": string]: string }"
export default content} declare module "*.module.scss" { const "content": { ["className": string]: string }"
export default conten} declare namespace NodeJS { interface ProcessEnv { "NODE_ENV": "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (..."args": any[]) => void; dataLayer?: any[]} }"
export {}declare module "*.svg" { const "content": string;"
}
export default content} declare module "*.png" { const "content": string;"
}
export default content} declare module "*.jpg" { const "content": string;"
}
export default content} declare module "*.jpeg" { const "content": string;"
}
export default content} declare module "*.gif" { const "content": string;"
}
export default content} declare module "*.webp" { const "content": string;"
}
export default content} declare module "*.css" { const "content": { ["className": string]: string }"
export default content} declare module "*.scss" { const "content": { ["className": string]: string }"
export default content} declare module "*.module.css" { const "content": { ["className": string]: string }"
export default content} declare module "*.module.scss" { const "content": { ["className": string]: string }"
export default conten} declare namespace NodeJS { interface ProcessEnv { "NODE_ENV": "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (..."args": any[]) => void; dataLayer?: any[]} }"
export {}declare module "*.svg" { const "content": string;"
}
export default content} declare module "*.png" { const "content": string;"
}
export default content} declare module "*.jpg" { const "content": string;"
}
export default content} declare module "*.jpeg" { const "content": string;"
}
export default content} declare module "*.gif" { const "content": string;"
}
export default content} declare module "*.webp" { const "content": string;"
}
export default content} declare module "*.css" { const "content": { ["className": string]: string }"
export default content} declare module "*.scss" { const "content": { ["className": string]: string }"
export default content} declare module "*.module.css" { const "content": { ["className": string]: string }"
export default content} declare module "*.module.scss" { const "content": { ["className": string]: string }"
export default conten} declare namespace NodeJS { interface ProcessEnv { "NODE_ENV": "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (..."args": any[]) => void; dataLayer?: any[]} }"
export {}declare global {interface Window  {gtag?: (..."args": any[]) => void;"
    }
    dataLayer?: any[]}
}
export {}declare module "*.svg" { const content: 'string; export default content;' } declare module "*.png" { const content: 'string; export default content;' } declare module "*.jpg" { const content: 'string; export default content;' } declare module "*.jpeg" { const content: 'string; export default content;' } declare module "*.gif" { const content: 'string; export default content;' } declare module "*.webp" { const content: 'string; export default content;' } declare module "*.css" { const content: { [className: string]: string }export default content} declare module "*.scss" { const content: { [className: string]: string }export default content} declare module "*.module.css" { const content: { [className: string]: string }export default content} declare module "*.module.scss" { const content: { [className: string]: string }export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } } declare global { interface Window { gtag?: (...args: 'any[]) => void; dataLayer?: any[];' } } } export {}declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }export default content} declare module "*.scss" { const content: { [className: string]: string }export default content} declare module "*.module.css" { const content: { [className: string]: string }export default content} declare module "*.module.scss" { const content: { [className: string]: string }export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }export default content} declare module "*.scss" { const content: { [className: string]: string }export default content} declare module "*.module.css" { const content: { [className: string]: string }export default content} declare module "*.module.scss" { const content: { [className: string]: string }export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }export default content} declare module "*.scss" { const content: { [className: string]: string }export default content} declare module "*.module.css" { const content: { [className: string]: string }export default content} declare module "*.module.scss" { const content: { [className: string]: string }export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }export default content} declare module "*.scss" { const content: { [className: string]: string }export default content} declare module "*.module.css" { const content: { [className: string]: string }export default content} declare module "*.module.scss" { const content: { [className: string]: string }export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }export default content} declare module "*.scss" { const content: { [className: string]: string }export default content} declare module "*.module.css" { const content: { [className: string]: string }export default content} declare module "*.module.scss" { const content: { [className: string]: string }export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }export default content} declare module "*.scss" { const content: { [className: string]: string }export default content} declare module "*.module.css" { const content: { [className: string]: string }export default content} declare module "*.module.scss" { const content: { [className: string]: string }export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }export default content} declare module "*.scss" { const content: { [className: string]: string }export default content} declare module "*.module.css" { const content: { [className: string]: string }export default content} declare module "*.module.scss" { const content: { [className: string]: string }export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }export default content} declare module "*.scss" { const content: { [className: string]: string }export default content} declare module "*.module.css" { const content: { [className: string]: string }export default content} declare module "*.module.scss" { const content: { [className: string]: string }export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }export default content} declare module "*.scss" { const content: { [className: string]: string }export default content} declare module "*.module.css" { const content: { [className: string]: string }export default content} declare module "*.module.scss" { const content: { [className: string]: string }export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {}declare global {interface Window  {gtag?: (..."args": any[]) => void;
export {};export {};
declare module "*.svg" { const content: 'string; export default content;' } declare module "*.png" { const content: 'string; export default content;' } declare module "*.jpg" { const content: 'string; export default content;' } declare module "*.jpeg" { const content: 'string; export default content;' } declare module "*.gif" { const content: 'string; export default content;' } declare module "*.webp" { const content: 'string; export default content;' } declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } } declare global { interface Window { gtag?: (...args: 'any[]) => void; dataLayer?: any[];' } } } export {};

// Global window extensions
declare global {
  interface Window {
    gtag?: (..."args: any[]) => void;
    dataLayer?: any[]}


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

  interface AbortSignal extends EventTarget {
    aborted: boolean;
    onabort: ((this: AbortSignal, ev: Event) => any) | null;
  }
  const "content": string;"
export default content}
declare module "*.png" {const "content": string;"
}

}

// Re-export DOM types that might not be available
export {}
// Re - export DOM types that might not be available;
export {}
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
export {};
declare module "*.svg" { const "content": 'string;'
}
export default content;' } declare module "*.png" { const "content": 'string;'
}
export default content;' } declare module "*.jpg" { const "content": 'string;'
}
export default content;' } declare module "*.jpeg" { const "content": 'string;'
}
export default content;' } declare module "*.gif" { const "content": 'string;'
}
export default content;' } declare module "*.webp" { const "content": 'string;'
}
export default content;' } declare module "*.css" { const "content": { ["className": string]: string};"
export default content} declare module "*.scss" { const "content": { ["className": string]: string};"
export default content} declare module "*.module.css" { const "content": { ["className": string]: string};"
export default content} declare module "*.module.scss" { const "content": { ["className": string]: string};"
export default content} declare namespace NodeJS { interface ProcessEnv { "NODE_ENV": "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } } declare global { interface Window { gtag?: (..."args": 'any[]) => void; dataLayer?: any[];' } } }'
export {};
declare module "*.svg" { const "content": string;"
}
export default content} declare module "*.png" { const "content": string;"
}
export default content} declare module "*.jpg" { const "content": string;"
}
export default content} declare module "*.jpeg" { const "content": string;"
}
export default content} declare module "*.gif" { const "content": string;"
}
export default content} declare module "*.webp" { const "content": string;"
}
export default content} declare module "*.css" { const "content": { ["className": string]: string};"
export default content} declare module "*.scss" { const "content": { ["className": string]: string};"
export default content} declare module "*.module.css" { const "content": { ["className": string]: string};"
export default content} declare module "*.module.scss" { const "content": { ["className": string]: string};"
export default content} declare namespace NodeJS { interface ProcessEnv { "NODE_ENV": "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (..."args": any[]) => void; dataLayer?: any[]} }"
export {};
ursor/integrate-build-improve-and-re-verify-8f7d

// Re-export DOM types that might not be available
export {};

export {};
declare global {
  }
  interface Window {
    gtag?: (..."args": any[]) => void;
    dataLayer?: any[]}
}
export {}ursor/integrate-build-improve-and-re-verify-8f7d;
// Re-export DOM types that might not be available;
export {}ursor/fix-website-loading-errors-and-merge-6662;
// Re-export DOM types that might not be available;
export {}
// Re-export DOM types that might not be available;
export {}
// Re - export DOM types that might not be available;
export {}ursor/fix-netlify-build-and-merge-to-main-9571;
// Module declarations;
declare module "*.svg" {const "content": string;"
}
export default content;
}declare module "*.png" {const "content": string;"
}
export default content;
}declare module "*.jpg" {const "content": string;"
}
export default content;
}declare module "*.jpeg" {const "content": string;"
}
export default content;
}declare module "*.gif" {const "content": string;"
}
export default content;
}declare module "*.webp" {const "content": string;"
}
export default content;
}declare module "*.css" {const "content": { ["className": string]: string}"
export default content;
}declare module "*.scss" {const "content": { ["className": string]: string}"
export default content;
}declare module "*.module.css" {const "content": { ["className": string]: string}"
export default content;
}declare module "*.module.scss" {const "content": { ["className": string]: string}"
export default content;
}// Environment variables;
declare namespace NodeJS {interface ProcessEnv  {"NODE_ENV": "development" | "production" | "test";"
    }
    NEXT_PUBLIC_SUPABASE_URL?: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
    SUPABASE_SERVICE_ROLE_KEY?: string;
    NEXT_PUBLIC_GA_TRACKING_ID?: string;

export {}
export {}
export {}
ursor/integrate-build-improve-and-re-verify-8f7d

// Re-export DOM types that might not be available
export {}

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
  }
  interface Window {

  }
}
export {}
export {}
export {}ursor/integrate-build-improve-and-re-verify-8f7d;
// Re-export DOM types that might not be available;

export {}
// Re - export DOM types that might not be available;
export {}
ursor/fix-netlify-build-and-merge-to-main-9571;
declare module "*.svg" { const "content": string;"
}
export default content} declare module "*.png" { const "content": string;"
}
export default content} declare module "*.jpg" { const "content": string;"
}
export default content} declare module "*.jpeg" { const "content": string;"
}
export default content} declare module "*.gif" { const "content": string;"
}
export default content} declare module "*.webp" { const "content": string;"
}
export default content} declare module "*.css" { const "content": { ["className": string]: string }"
export default content} declare module "*.scss" { const "content": { ["className": string]: string }"
export default content} declare module "*.module.css" { const "content": { ["className": string]: string }"
export default content} declare module "*.module.scss" { const "content": { ["className": string]: string }"
export default conten} declare namespace NodeJS { interface ProcessEnv { "NODE_ENV": "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (..."args": any[]) => void; dataLayer?: any[]} }"
export {}
export {}declare module "*.svg" { const "content": 'string;'
}
export default content;' } declare module "*.png" { const "content": 'string;'
}
export default content;' } declare module "*.jpg" { const "content": 'string;'
}
export default content;' } declare module "*.jpeg" { const "content": 'string;'
}
export default content;' } declare module "*.gif" { const "content": 'string;'
}
export default content;' } declare module "*.webp" { const "content": 'string;'
}
export default content;' } declare module "*.css" { const "content": { ["className": string]: string }"
export default content} declare module "*.scss" { const "content": { ["className": string]: string }"
export default content} declare module "*.module.css" { const "content": { ["className": string]: string }"
export default content} declare module "*.module.scss" { const "content": { ["className": string]: string }"
export default conten} declare namespace NodeJS { interface ProcessEnv { "NODE_ENV": "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } } declare global { interface Window { gtag?: (..."args": 'any[]) => void; dataLayer?: any[];' } } }'
export {}declare module "*.svg" { const "content": string;"
}
export default content} declare module "*.png" { const "content": string;"
}
export default content} declare module "*.jpg" { const "content": string;"
}
export default content} declare module "*.jpeg" { const "content": string;"
}
export default content} declare module "*.gif" { const "content": string;"
}
export default content} declare module "*.webp" { const "content": string;"
}
export default content} declare module "*.css" { const "content": { ["className": string]: string }"
export default content} declare module "*.scss" { const "content": { ["className": string]: string }"
export default content} declare module "*.module.css" { const "content": { ["className": string]: string }"
export default content} declare module "*.module.scss" { const "content": { ["className": string]: string }"
export default conten} declare namespace NodeJS { interface ProcessEnv { "NODE_ENV": "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (..."args": any[]) => void; dataLayer?: any[]} }"
export {}declare module "*.svg" { const "content": string;"
}
export default content} declare module "*.png" { const "content": string;"
}
export default content} declare module "*.jpg" { const "content": string;"
}
export default content} declare module "*.jpeg" { const "content": string;"
}
export default content} declare module "*.gif" { const "content": string;"
}
export default content} declare module "*.webp" { const "content": string;"
}
export default content} declare module "*.css" { const "content": { ["className": string]: string }"
export default content} declare module "*.scss" { const "content": { ["className": string]: string }"
export default content} declare module "*.module.css" { const "content": { ["className": string]: string }"
export default content} declare module "*.module.scss" { const "content": { ["className": string]: string }"
export default conten} declare namespace NodeJS { interface ProcessEnv { "NODE_ENV": "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (..."args": any[]) => void; dataLayer?: any[]} }"
export {}declare module "*.svg" { const "content": string;"
}
export default content} declare module "*.png" { const "content": string;"
}
export default content} declare module "*.jpg" { const "content": string;"
}
export default content} declare module "*.jpeg" { const "content": string;"
}
export default content} declare module "*.gif" { const "content": string;"
}
export default content} declare module "*.webp" { const "content": string;"
}
export default content} declare module "*.css" { const "content": { ["className": string]: string }"
export default content} declare module "*.scss" { const "content": { ["className": string]: string }"
export default content} declare module "*.module.css" { const "content": { ["className": string]: string }"
export default content} declare module "*.module.scss" { const "content": { ["className": string]: string }"
export default conten} declare namespace NodeJS { interface ProcessEnv { "NODE_ENV": "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (..."args": any[]) => void; dataLayer?: any[]} }"
export {}declare module "*.svg" { const "content": string;"
}
export default content} declare module "*.png" { const "content": string;"
}
export default content} declare module "*.jpg" { const "content": string;"
}
export default content} declare module "*.jpeg" { const "content": string;"
}
export default content} declare module "*.gif" { const "content": string;"
}
export default content} declare module "*.webp" { const "content": string;"
}
export default content} declare module "*.css" { const "content": { ["className": string]: string }"
export default content} declare module "*.scss" { const "content": { ["className": string]: string }"
export default content} declare module "*.module.css" { const "content": { ["className": string]: string }"
export default content} declare module "*.module.scss" { const "content": { ["className": string]: string }"
export default conten} declare namespace NodeJS { interface ProcessEnv { "NODE_ENV": "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (..."args": any[]) => void; dataLayer?: any[]} }"
export {}declare module "*.svg" { const "content": string;"
}
export default content} declare module "*.png" { const "content": string;"
}
export default content} declare module "*.jpg" { const "content": string;"
}
export default content} declare module "*.jpeg" { const "content": string;"
}
export default content} declare module "*.gif" { const "content": string;"
}
export default content} declare module "*.webp" { const "content": string;"
}
export default content} declare module "*.css" { const "content": { ["className": string]: string }"
export default content} declare module "*.scss" { const "content": { ["className": string]: string }"
export default content} declare module "*.module.css" { const "content": { ["className": string]: string }"
export default content} declare module "*.module.scss" { const "content": { ["className": string]: string }"
export default conten} declare namespace NodeJS { interface ProcessEnv { "NODE_ENV": "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (..."args": any[]) => void; dataLayer?: any[]} }"
export {}declare module "*.svg" { const "content": string;"
}
export default content} declare module "*.png" { const "content": string;"
}
export default content} declare module "*.jpg" { const "content": string;"
}
export default content} declare module "*.jpeg" { const "content": string;"
}
export default content} declare module "*.gif" { const "content": string;"
}
export default content} declare module "*.webp" { const "content": string;"
}
export default content} declare module "*.css" { const "content": { ["className": string]: string }"
export default content} declare module "*.scss" { const "content": { ["className": string]: string }"
export default content} declare module "*.module.css" { const "content": { ["className": string]: string }"
export default content} declare module "*.module.scss" { const "content": { ["className": string]: string }"
export default conten} declare namespace NodeJS { interface ProcessEnv { "NODE_ENV": "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (..."args": any[]) => void; dataLayer?: any[]} }"
export {}declare module "*.svg" { const "content": string;"
}
export default content} declare module "*.png" { const "content": string;"
}
export default content} declare module "*.jpg" { const "content": string;"
}
export default content} declare module "*.jpeg" { const "content": string;"
}
export default content} declare module "*.gif" { const "content": string;"
}
export default content} declare module "*.webp" { const "content": string;"
}
export default content} declare module "*.css" { const "content": { ["className": string]: string }"
export default content} declare module "*.scss" { const "content": { ["className": string]: string }"
export default content} declare module "*.module.css" { const "content": { ["className": string]: string }"
export default content} declare module "*.module.scss" { const "content": { ["className": string]: string }"
export default conten} declare namespace NodeJS { interface ProcessEnv { "NODE_ENV": "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (..."args": any[]) => void; dataLayer?: any[]} }"
export {}ursor/automate-test-improve-and-merge-code-646c;
export {}declare module "*.svg" { const "content": 'string;'
}
export default content;' } declare module "*.png" { const "content": 'string;'
}
export default content;' } declare module "*.jpg" { const "content": 'string;'
}
export default content;' } declare module "*.jpeg" { const "content": 'string;'
}
export default content;' } declare module "*.gif" { const "content": 'string;'
}
export default content;' } declare module "*.webp" { const "content": 'string;'
}
export default content;' } declare module "*.css" { const "content": { ["className": string]: string }"
export default content} declare module "*.scss" { const "content": { ["className": string]: string }"
export default content} declare module "*.module.css" { const "content": { ["className": string]: string }"
export default content} declare module "*.module.scss" { const "content": { ["className": string]: string }"
export default conten} declare namespace NodeJS { interface ProcessEnv { "NODE_ENV": "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } } declare global { interface Window { gtag?: (..."args": 'any[]) => void; dataLayer?: any[];' } } }'
export {}// Re-export DOM types that might not be available;
export {}
// Re - export DOM types that might not be available;
export {}
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
declare module "*.svg" { const content: string; export default content} declare module "*.png" { const content: string; export default content} declare module "*.jpg" { const content: string; export default content} declare module "*.jpeg" { const content: string; export default content} declare module "*.gif" { const content: string; export default content} declare module "*.webp" { const content: string; export default content} declare module "*.css" { const content: { [className: string]: string }; export default content} declare module "*.scss" { const content: { [className: string]: string }; export default content} declare module "*.module.css" { const content: { [className: string]: string }; export default content} declare module "*.module.scss" { const content: { [className: string]: string }; export default content} declare namespace NodeJS { interface ProcessEnv { NODE_ENV: "development" | "production" | "test"; NEXT_PUBLIC_SUPABASE_URL?: string; NEXT_PUBLIC_SUPABASE_ANON_KEY?: string; SUPABASE_SERVICE_ROLE_KEY?: string; NEXT_PUBLIC_GA_TRACKING_ID?: string} } declare global { interface Window { gtag?: (...args: any[]) => void; dataLayer?: any[]} } export {};
export {},
