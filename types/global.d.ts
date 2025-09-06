/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference types="next/navigation-types/navigation" />

// Global window extensions
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

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
}

export {};
// Re-export DOM types that might not be available
export {}
// Re-export DOM types that might not be available
export {}
// Re - export DOM types that might not be available;
export {}

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
// Re-export DOM types that might not be available
export {}
// Re - export DOM types that might not be available;
export {}