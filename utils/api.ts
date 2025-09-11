<<<<<<< HEAD

// Define RequestInit if not available;

interface File extends Blob {
  name: string;
  lastModified: number;
}

type HeadersInit = Headers | string[][] | Record < string, string>;
type RequestMode = 'navigate' | 'same - origin' | 'no - cors' | 'cors';
type RequestRedirect = 'follow' | 'error' | 'manual';
type ReferrerPolicy = 'no - referrer' | 'no - referrer - when - downgrade' | 'origin' | 'origin - when - cross - origin' | 'same - origin' | 'strict - origin' | 'strict - origin - when - cross - origin' | 'unsafe - url';
;

// Define AbortController if not available;
interface AbortController {
  signal: AbortSignal;
  abort(): void;
}
// Define AbortSignal if not available;
=======

// Define AbortSignal if not available;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
interface AbortSignal extends EventTarget {
  aborted: boolean;
  onabort: ((this: AbortSignal, ev: Event) => any) | null;
}



;
};
;
export const apiClient = new ApiClient(),;
;
export type { ApiResponse, RequestOptions };;

=======


};
origin/cursor/integrate-build-improve-and-re-verify-242d
}};
export const apiClient = new ApiClient();
origin/cursor/fix-syntax-push-and-merge-to-main-ba45
};
export const apiClient = new ApiClient();
export type { ApiResponse, RequestOptions };
;
interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  success: boolean,
// Define RequestInit if not available
interface File extends Blob {
  name: string;
  lastModified: number;
origin/main
}
interface Blob {
  size: number;
  type: string;
  slice(start?: number, end?: number, contentType?: string): Blob;
}
interface FormData {
  append(name: string, value: string | Blob): void;
  delete(name: string): void;
  get(name: string): string | File | null;
  getAll(name: string): (string | File)[];
  has(name: string): boolean;
  set(name: string, value: string | Blob): void;
}
interface URLSearchParams {
  append(name: string, value: string): void;
  delete(name: string): void;
  get(name: string): string | null;
  getAll(name: string): string[];
  has(name: string): boolean;
  set(name: string, value: string): void;
  toString(): string;
}
type BodyInit = string | Blob | ArrayBuffer | FormData | URLSearchParams;
type RequestCache = 'default' | 'no-store' | 'reload' | 'no-cache' | 'force-cache' | 'only-if-cached';
type RequestCredentials = 'omit' | 'same-origin' | 'include';
interface Headers {
  append(name: string, value: string): void;
  delete(name: string): void;
  get(name: string): string | null;
  has(name: string): boolean;
  set(name: string, value: string): void;
}
type HeadersInit = Headers | string[][] | Record<string, string>;
type RequestMode = 'navigate' | 'same-origin' | 'no-cors' | 'cors';
type RequestRedirect = 'follow' | 'error' | 'manual';
type ReferrerPolicy = 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';
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

class ApiClient {
  private baseUrl: string, private defaultTimeout: number,

  constructor(baseUrl: string = '', defaultTimeout: number = 10000) {
    this.baseUrl = baseUrl,
    this.defaultTimeout = defaultTimeout
  }

  private async request<T>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<ApiResponse<T>> {
    const { timeout = this.defaultTimeout, ...fetchOptions } = options;
    
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...fetchOptions;
        signal: controller.signal,
        headers: {
    'Content-Type': 'application/json',
    ...fetchOptions.headers
  };
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return { data, success: true };
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('API request failed:', error);
      return {
        error: error instanceof Error ? error.message : 'Unknown error occurred', success: false,
      };
    }
  }

  async get<T>(endpoint: string, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  async post<T>(endpoint: string, data?: unknown, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options;
      method: 'POST', body: data ? JSON.stringify(data) : undefined,
    });
  }

  async put<T>(endpoint: string, data?: unknown, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options;
      method: 'PUT', body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(endpoint: string, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }
}

=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20

=======


};
export const apiClient = new ApiClient();
export type { ApiResponse, RequestOptions };
;
interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  success: boolean,=======
// Define RequestInit if not available
interface File extends Blob {
  name: string;
  lastModified: number;}
interface Blob {
  size: number;
  type: string;
  slice(start?: number, end?: number, contentType?: string): Blob;
}
interface FormData {
  append(name: string, value: string | Blob): void;
  delete(name: string): void;
  get(name: string): string | File | null;
  getAll(name: string): (string | File)[];
  has(name: string): boolean;
  set(name: string, value: string | Blob): void;
}
interface URLSearchParams {
  append(name: string, value: string): void;
  delete(name: string): void;
  get(name: string): string | null;
  getAll(name: string): string[];
  has(name: string): boolean;
  set(name: string, value: string): void;
  toString(): string;
}
type BodyInit = string | Blob | ArrayBuffer | FormData | URLSearchParams;
type RequestCache = 'default' | 'no-store' | 'reload' | 'no-cache' | 'force-cache' | 'only-if-cached';
type RequestCredentials = 'omit' | 'same-origin' | 'include';
interface Headers {
  append(name: string, value: string): void;
  delete(name: string): void;
  get(name: string): string | null;
  has(name: string): boolean;
  set(name: string, value: string): void;
}
type HeadersInit = Headers | string[][] | Record<string, string>;
type RequestMode = 'navigate' | 'same-origin' | 'no-cors' | 'cors';
type RequestRedirect = 'follow' | 'error' | 'manual';
type ReferrerPolicy = 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';
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


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
ursor/integrate-build-improve-and-re-verify-8f7d

ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com';
export class ApiClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;
  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL;
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    };
  }
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const config: RequestInit = {
      ...options,
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
    };
    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }
  async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'GET',
    });
  }
  async post<T>(endpoint: string, data?: any, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }
  async put<T>(endpoint: string, data?: any, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }
  async delete<T>(endpoint: string, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'DELETE',
    });
  }
}
export const apiClient = new ApiClient();
=======
}};

export const apiClient = new ApiClient();
=======
}};
export const apiClient = new ApiClient();
<<<<<<< HEAD
=======
};
export const apiClient = new ApiClient();
export type { ApiResponse, RequestOptions };
;
=======
// Define RequestInit if not available
interface File extends Blob {
  name: string;
  lastModified: number;
}

interface Blob {
  size: number;
  type: string;
  slice(start?: number, end?: number, contentType?: string): Blob;
}

interface FormData {
  append(name: string, value: string | Blob): void;
  delete(name: string): void;
  get(name: string): string | File | null;
  getAll(name: string): (string | File)[];
  has(name: string): boolean;
  set(name: string, value: string | Blob): void;
}

interface URLSearchParams {
  append(name: string, value: string): void;
  delete(name: string): void;
  get(name: string): string | null;
  getAll(name: string): string[];
  has(name: string): boolean;
  set(name: string, value: string): void;
  toString(): string;
}

type BodyInit = string | Blob | ArrayBuffer | FormData | URLSearchParams;
type RequestCache = 'default' | 'no-store' | 'reload' | 'no-cache' | 'force-cache' | 'only-if-cached';
type RequestCredentials = 'omit' | 'same-origin' | 'include';
interface Headers {
  append(name: string, value: string): void;
  delete(name: string): void;
  get(name: string): string | null;
  has(name: string): boolean;
  set(name: string, value: string): void;
}

type HeadersInit = Headers | string[][] | Record<string, string>;
type RequestMode = 'navigate' | 'same-origin' | 'no-cors' | 'cors';
type RequestRedirect = 'follow' | 'error' | 'manual';
type ReferrerPolicy = 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'same-origin' | 'strict-origin' | 'strict-origin-when-cross-origin' | 'unsafe-url';

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20

// Define AbortSignal if not available
interface AbortSignal extends EventTarget {
  aborted: boolean;
  onabort: ((this: AbortSignal, ev: Event) => any) | null;

<<<<<<< HEAD
}
=======
origin/main
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
};
export const apiClient = new ApiClient();
export type { ApiResponse, RequestOptions };
;
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
interface ApiResponse<T = unknown> {
=======
interface ApiResponse < T = unknown> {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  data?: T;
  error?: string;
  success: boolean;
}
interface RequestOptions extends RequestInit {
  timeout?: number;
}


// Add global type definitions for Node && Node.js environment

=======
// Add global type definitions for Node.js environment;  private default_headers: HeadersInit;
;
  constructor (baseURL: string = '', default_headers: HeadersInit = {}) {
    this.baseURL = baseURL;
    this.default_headers = default_headers;
  }
  async request < T = unknown>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise < ApiResponse < T>> {
    const url = `${this.baseURL}${endpoint}`;
    const controller = new AbortController ();
;
    // Set timeout if provided;
    // Check condition
if ( {) {
  $2
}
      set_timeout (() => controller.abort (), options.timeout);

    }

    try {

        ...options,
        signal: controller && controller.signal,
        headers: {
          ...this && this.defaultHeaders,
          ...options && options.headers,
        },
      });

      if (!response && response.ok) {
        throw new Error(`HTTP error! status: ${response && response.status}`);
      }

      const data = await response && response.json();

        success: true
        data
      }
    } catch (error) {
      return {
    }
  }
  async get<T = unknown>(endpoint: string, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }
  async post<T = unknown>(endpoint: string, data?: any, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {




export type { ApiResponse, RequestOptions };


export type { ApiResponse, RequestOptions }

export type { ApiResponse, RequestOptions };
=======

        success: false,

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======



export type { ApiResponse, RequestOptions };

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-ba45
=======
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5

export type { ApiResponse, RequestOptions }
        success: false,

==============



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export type { ApiResponse, RequestOptions };
origin/main
origin/automation-improvements-final
export type { ApiResponse, RequestOptions }
=======>>>>>>> origin/automation-improvements-final
=======
export type { ApiResponse, RequestOptions }
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      }
    }
  }
  async get < T = unknown>(endpoint: string, options?: RequestOptions): Promise < ApiResponse < T>> {
    return this.request < T>(endpoint, { ...options, method: 'GET' });
  }
  async post < T = unknown>(endpoint: string, data?: any, options?: RequestOptions): Promise < ApiResponse < T>> {
    return this.request < T>(endpoint, {
      ...options,
      method: 'POST',
      body: data ? JSON.stringify (data) : undefined,
      headers: {
        'Content - Type': 'application / json',
        ...options?.headers,
      },
    });
  }
  async put < T = unknown>(endpoint: string, data?: any, options?: RequestOptions): Promise < ApiResponse < T>> {
    return this.request < T>(endpoint, {
      ...options,
      method: 'PUT',
      body: data ? JSON.stringify (data) : undefined,
      headers: {
        'Content - Type': 'application / json',
        ...options?.headers,
      },
    });
  }
  async delete < T = unknown>(endpoint: string, options?: RequestOptions): Promise < ApiResponse < T>> {
    return this.request < T>(endpoint, { ...options, method: 'DELETE' });
  }
}
export const api_client = new ApiClient ();
export type { ApiResponse, RequestOptions }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  async get<T = unknown>(endpoint: string, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  async post<T = unknown>(endpoint: string, data?: any, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });
  }

  async put<T = unknown>(endpoint: string, data?: any, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });
  }

  async delete<T = unknown>(endpoint: string, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }
}

export const apiClient = new ApiClient();
<<<<<<< HEAD
export type { ApiResponse, RequestOptions };
<<<<<<< HEAD
<<<<<<< HEAD
declare global { interface RequestInit { timeout?: number} } interface ApiResponse<T = unknown> { data?: T; error?: string; success: boolean} interface RequestOptions extends RequestInit { timeout?: number} class ApiClient { private baseUrl: string; private defaultTimeout: number; constructor(baseUrl: string = '',defaultTimeout: number = 10000) { this.baseUrl = baseUrl; this.defaultTimeout = defaultTimeout} private async request<T>( endpoint: string,options: RequestOptions = {} ): Promise<ApiResponse<T>> { const { timeout = this.defaultTimeout,...fetchOptions } = options; try { const controller = new AbortController(); const timeoutId = setTimeout(() => controller.abort(),timeout); const response = await fetch(`${this.baseUrl}${endpoint}`,{ ...fetchOptions,signal: controller.signal,headers: { 'Content-Type': 'application/json',...fetchOptions.headers,},}); clearTimeout(timeoutId); if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`)} const data = await response.json(); return { data,success: true }} catch (error) { console.error('API request failed:',error); return { error: error instanceof Error ? error.message : 'Unknown error occurred',success: false,}} } async get<T>(endpoint: string,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'GET' })} async post<T>(endpoint: string,data?: unknown,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'POST',body: data ? JSON.stringify(data) : undefined,})} async put<T>(endpoint: string,data?: unknown,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'PUT',body: data ? JSON.stringify(data) : undefined,})} async delete<T>(endpoint: string,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'DELETE' })} } export const apiClient = new ApiClient(); export type { ApiResponse,RequestOptions };
=======
<<<<<<< HEAD
declare global { interface RequestInit { timeout?: number} } interface ApiResponse<T = unknown> { data?: T; error?: string; success: boolean} interface RequestOptions extends RequestInit { timeout?: number} class ApiClient { private baseUrl: string; private defaultTimeout: number; constructor(baseUrl: string = '',defaultTimeout: number = 10000) { this.baseUrl = baseUrl; this.defaultTimeout = defaultTimeout} private async request<T>( endpoint: string,options: RequestOptions = {} ): Promise<ApiResponse<T>> { const { timeout = this.defaultTimeout,...fetchOptions } = options; try { const controller = new AbortController(); const timeoutId = setTimeout(() => controller.abort(),timeout); const response = await fetch(`${this.baseUrl}${endpoint}`,{ ...fetchOptions,signal: controller.signal,headers: { 'Content-Type': 'application/json',...fetchOptions.headers,},}); clearTimeout(timeoutId); if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`)} const data = await response.json(); return { data,success: true }} catch (error) { console.error('API request failed:',error); return { error: error instanceof Error ? error.message : 'Unknown error occurred',success: false,}} } async get<T>(endpoint: string,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'GET' })} async post<T>(endpoint: string,data?: unknown,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'POST',body: data ? JSON.stringify(data) : undefined,})} async put<T>(endpoint: string,data?: unknown,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'PUT',body: data ? JSON.stringify(data) : undefined,})} async delete<T>(endpoint: string,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'DELETE' })} } export const apiClient = new ApiClient(); export type { ApiResponse,RequestOptions };
=======
declare global { interface RequestInit { timeout?: number} } interface ApiResponse<T = unknown> { data?: T; error?: string; success: boolean} interface RequestOptions extends RequestInit { timeout?: number} class ApiClient { private baseUrl: string; private defaultTimeout: number; constructor(baseUrl: string = '',defaultTimeout: number = 10000) { this.baseUrl = baseUrl; this.defaultTimeout = defaultTimeout} private async request<T>( endpoint: string,options: RequestOptions = {} ): Promise<ApiResponse<T>> { const { timeout = this.defaultTimeout,...fetchOptions } = options; try { const controller = new AbortController(); const timeoutId = setTimeout(() => controller.abort(),timeout); const response = await fetch(`${this.baseUrl}${endpoint}`,{ ...fetchOptions,signal: controller.signal,headers: { 'Content-Type': 'application/json',...fetchOptions.headers,},}); clearTimeout(timeoutId); if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`)} const data = await response.json(); return { data,success: true }} catch (error) { console.error('API request failed:',error); return { error: error instanceof Error ? error.message : 'Unknown error occurred',success: false,}} } async get<T>(endpoint: string,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'GET' })} async post<T>(endpoint: string,data?: unknown,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'POST',body: data ? JSON.stringify(data) : undefined,})} async put<T>(endpoint: string,data?: unknown,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'PUT',body: data ? JSON.stringify(data) : undefined,})} async delete<T>(endpoint: string,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'DELETE' })} } export const apiClient = new ApiClient(); export type { ApiResponse,RequestOptions };
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
=======
export type { ApiResponse, RequestOptions };
>>>>>>> origin/main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-8b20
