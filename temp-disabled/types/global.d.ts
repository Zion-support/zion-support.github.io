
// Global type declarations for DOM types;
declare global {
  interface Window {
    performance: Performance;
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];}

  }

interface Performance  {getEntriesByType (type: string): PerformanceEntry[];}
    now (): number;}
  }

interface PerformanceEntry  {name: string;
    entry_type: string;
    start_time: number;}
    duration: number;}
  }

interface Element  {tag_name: string;
    attributes: NamedNodeMap;
    children: HTMLCollection;}
    parent_element: HTMLElement | null;}
  }

interface CSSStyleDeclaration  {[key: string]: string;}
  }

interface HTMLElement extends Element  {class_name: string;
    id: string;
    innerHTML: string;
    text_content: string | null;}
    style: CSSStyleDeclaration;}
  }

interface HTMLDivElement extends HTMLElement {}

interface HTMLParagraphElement extends HTMLElement {}

interface HTMLHeadingElement extends HTMLElement {}

interface HTMLAnchorElement extends HTMLElement  {href: string;}
    target: string;}
  }
  interface MessageEvent<T = any /> {
    data: T;
    origin: string;
    lastEventId: string;
    source: MessageEventSource | null;}
    ports: ReadonlyArray < MessagePort>;}
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
    window?: any;}
    timeout?: number;}
  }

interface AbortController  {signal: AbortSignal;}
    abort (): void;}
  }

interface AbortSignal extends EventTarget  {aborted: boolean;}
    onabort: ((this: AbortSignal, ev: Event) => any) | null;}
  }
}


export default content;}
}declare module \"*.gif\" {const content: string;
}
export default content;}
}declare module \"*.webp\" {const content: string;
}
export default content;}
}declare module \"*.css\" {const content: { [className: string]: string,}
}

export default content;
}declare module \"*.scss\" {const content: { [className: string]: string,}
}

export default content;
}declare module \"*.module.css\" {const content: { [className: string]: string,}
}

export default content;
}declare module \"*.module.scss\" {const content: { [className: string]: string,}
}

export default content;
}// Environment variables;
declare namespace NodeJS {interface ProcessEnv  {NODE_ENV: \"development\" | \"production\" | \"test\";
    NEXT_PUBLIC_SUPABASE_URL?: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
    SUPABASE_SERVICE_ROLE_KEY?: string;}
    NEXT_PUBLIC_GA_TRACKING_ID?: string;}
  }
}


/// <reference types=\"next\" />
/// <reference types=\"next/image-types/global\" />
/// <reference types=\"next/navigation-types/navigation\" />

export {};
