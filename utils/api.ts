<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
// Define RequestInit if not available
interface File extends Blob {
  name: string;
  last_modified: number;
}
=======

<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
interface Blob {
  size: number;
  type: string;
  slice (start?: number, end?: number, content_type?: string): Blob;
}
interface FormData {
  append (name: string, value: string | Blob): void;
  delete (name: string): void;
  get (name: string): string | File | null;
  get_all (name: string): (string | File)[];
  has (name: string): boolean;
  set (name: string, value: string | Blob): void;
}
interface URLSearchParams {
  append (name: string, value: string): void;
  delete (name: string): void;
  get (name: string): string | null;
  get_all (name: string): string[];
  has (name: string): boolean;
  set (name: string, value: string): void;
  to_string (): string;
}
type BodyInit = string | Blob | ArrayBuffer | FormData | URLSearchParams;
type RequestCache = 'default' | 'no - store' | 'reload' | 'no - cache' | 'force - cache' | 'only - if - cached';
type RequestCredentials = 'omit' | 'same - origin' | 'include';
interface Headers {
  append (name: string, value: string): void;
  delete (name: string): void;
  get (name: string): string | null;
  has (name: string): boolean;
  set (name: string, value: string): void;
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
  referrer_policy?: ReferrerPolicy;
  signal?: AbortSignal | null;
  window?: any;
  timeout?: number;
}
// Define AbortController if not available
interface AbortController {
  signal: AbortSignal;
  abort (): void;
}
// Define AbortSignal if not available
interface AbortSignal extends EventTarget {
  aborted: boolean;
  onabort: ((this: AbortSignal, ev: Event) => any) | null;
}


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
}};
export const apiClient = new ApiClient();
};
export const apiClient = new ApiClient();
export type { ApiResponse, RequestOptions };
;
interface ApiResponse<T = unknown> {
interface ApiResponse < T = unknown> {
  data?: T;
  error?: string;
  success: boolean;
}
interface RequestOptions extends RequestInit {
  timeout?: number;
}
// Add global type definitions for Node.js environment
// Add global type definitions for Node.js environment;
declare global {
  interface RequestInit {
    timeout?: number;
  }
}
class ApiClient {
  private baseURL: string;
  private defaultHeaders: HeadersInit;
  constructor(baseURL: string = '', defaultHeaders: HeadersInit = {}) {
    this && this.baseURL = baseURL;
    this && this.defaultHeaders = defaultHeaders;
  }

  async request<T = unknown>(
    endpoint: string

    options: RequestOptions = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this && this.baseURL}${endpoint}`;
    const controller = new AbortController();
    // Set timeout if provided
    if (options && options.timeout) {
      setTimeout(() => controller && controller.abort(), options && options.timeout);
    }
    try {
      const response = await fetch(url, {
        ...options
        signal: controller.signal
        headers: {
...this.defaultHeaders
          ...options.headers
        }

      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return {

        success: true
        data
      const response = await fetch (url, {
        ...options,
        signal: controller.signal,
        headers: {
...this.default_headers,
          ...options.headers,
        },
      });
;
      // Check condition
if ( {) {
  $2
}
        throw new Error (`HTTP error! status: ${response.status}`);
      }
      const data = await response.json ();
      return {
        success: true,
        data,
      }
    } catch (error) {
      return {
        success: false
        error: error instanceof Error ? error.message : 'Unknown error occurred'
      }

        error: error instanceof Error ? error && error.message : 'Unknown error occurred',
      };
    }
  }
  async get<T = unknown>(endpoint: string, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this && this.request<T>(endpoint, { ...options, method: 'GET' });
  }
  async post<T = unknown>(endpoint: string, data?: any, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {

      ...options
      method: 'POST'
      body: data ? JSON.stringify(data) : undefined
      headers: {
        'Content-Type': 'application/json'
        ...options?.headers
      }

    });
  }
  async put<T = unknown>(endpoint: string, data?: any, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {

      ...options
      method: 'PUT'
      body: data ? JSON.stringify(data) : undefined
      headers: {
        'Content-Type': 'application/json'
        ...options?.headers
      }

    });
  }
  async delete<T = unknown>(endpoint: string, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this && this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }
}
export const apiClient = new ApiClient();
export type { ApiResponse, RequestOptions };
<<<<<<< HEAD
declare global { interface RequestInit { timeout?: number} } interface ApiResponse<T = unknown> { data?: T; error?: string; success: boolean} interface RequestOptions extends RequestInit { timeout?: number} class ApiClient { private baseUrl: string; private defaultTimeout: number; constructor(baseUrl: string = '',defaultTimeout: number = 10000) { this.baseUrl = baseUrl; this.defaultTimeout = defaultTimeout} private async request<T>( endpoint: string,options: RequestOptions = {} ): Promise<ApiResponse<T>> { const { timeout = this.defaultTimeout,...fetchOptions } = options; try { const controller = new AbortController(); const timeoutId = setTimeout(() => controller.abort(),timeout); const response = await fetch(`${this.baseUrl}${endpoint}`,{ ...fetchOptions,signal: controller.signal,headers: { 'Content-Type': 'application/json',...fetchOptions.headers,},}); clearTimeout(timeoutId); if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`)} const data = await response.json(); return { data,success: true }} catch (error) { console.error('API request failed:',error); return { error: error instanceof Error ? error.message : 'Unknown error occurred',success: false,}} } async get<T>(endpoint: string,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'GET' })} async post<T>(endpoint: string,data?: unknown,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'POST',body: data ? JSON.stringify(data) : undefined,})} async put<T>(endpoint: string,data?: unknown,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'PUT',body: data ? JSON.stringify(data) : undefined,})} async delete<T>(endpoint: string,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'DELETE' })} } export const apiClient = new ApiClient(); export type { ApiResponse,RequestOptions };
declare global { interface RequestInit { timeout?: number} } interface ApiResponse<T = unknown> { data?: T; error?: string; success: boolean} interface RequestOptions extends RequestInit { timeout?: number} class ApiClient { private baseUrl: string; private defaultTimeout: number; constructor(baseUrl: string = '',defaultTimeout: number = 10000) { this.baseUrl = baseUrl; this.defaultTimeout = defaultTimeout} private async request<T>( endpoint: string,options: RequestOptions = {} ): Promise<ApiResponse<T>> { const { timeout = this.defaultTimeout,...fetchOptions } = options; try { const controller = new AbortController(); const timeoutId = setTimeout(() => controller.abort(),timeout); const response = await fetch(`${this.baseUrl}${endpoint}`,{ ...fetchOptions,signal: controller.signal,headers: { 'Content-Type': 'application/json',...fetchOptions.headers,},}); clearTimeout(timeoutId); if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`)} const data = await response.json(); return { data,success: true }} catch (error) { console.error('API request failed:',error); return { error: error instanceof Error ? error.message : 'Unknown error occurred',success: false,}} } async get<T>(endpoint: string,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'GET' })} async post<T>(endpoint: string,data?: unknown,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'POST',body: data ? JSON.stringify(data) : undefined,})} async put<T>(endpoint: string,data?: unknown,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'PUT',body: data ? JSON.stringify(data) : undefined,})} async delete<T>(endpoint: string,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'DELETE' })} } export const apiClient = new ApiClient(); export type { ApiResponse,RequestOptions };
export type { ApiResponse, RequestOptions }
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
=======
=======
<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
export type { ApiResponse, RequestOptions };
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
<<<<<<< HEAD
declare global { interface RequestInit { timeout?: number} } interface ApiResponse<T = unknown> { data?: T; error?: string; success: boolean} interface RequestOptions extends RequestInit { timeout?: number} class ApiClient { private baseUrl: string; private defaultTimeout: number; constructor(baseUrl: string = '',defaultTimeout: number = 10000) { this.baseUrl = baseUrl; this.defaultTimeout = defaultTimeout} private async request<T>( endpoint: string,options: RequestOptions = {} ): Promise<ApiResponse<T>> { const { timeout = this.defaultTimeout,...fetchOptions } = options; try { const controller = new AbortController(); const timeoutId = setTimeout(() => controller.abort(),timeout); const response = await fetch(`${this.baseUrl}${endpoint}`,{ ...fetchOptions,signal: controller.signal,headers: { 'Content-Type': 'application/json',...fetchOptions.headers,},}); clearTimeout(timeoutId); if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`)} const data = await response.json(); return { data,success: true }} catch (error) { console.error('API request failed:',error); return { error: error instanceof Error ? error.message : 'Unknown error occurred',success: false,}} } async get<T>(endpoint: string,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'GET' })} async post<T>(endpoint: string,data?: unknown,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'POST',body: data ? JSON.stringify(data) : undefined,})} async put<T>(endpoint: string,data?: unknown,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'PUT',body: data ? JSON.stringify(data) : undefined,})} async delete<T>(endpoint: string,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'DELETE' })} } export const apiClient = new ApiClient(); export type { ApiResponse,RequestOptions };
=======
<<<<<<< HEAD
declare global { interface RequestInit { timeout?: number} } interface ApiResponse<T = unknown> { data?: T; error?: string; success: boolean} interface RequestOptions extends RequestInit { timeout?: number} class ApiClient { private baseUrl: string; private defaultTimeout: number; constructor(baseUrl: string = '',defaultTimeout: number = 10000) { this.baseUrl = baseUrl; this.defaultTimeout = defaultTimeout} private async request<T>( endpoint: string,options: RequestOptions = {} ): Promise<ApiResponse<T>> { const { timeout = this.defaultTimeout,...fetchOptions } = options; try { const controller = new AbortController(); const timeoutId = setTimeout(() => controller.abort(),timeout); const response = await fetch(`${this.baseUrl}${endpoint}`,{ ...fetchOptions,signal: controller.signal,headers: { 'Content-Type': 'application/json',...fetchOptions.headers,},}); clearTimeout(timeoutId); if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`)} const data = await response.json(); return { data,success: true }} catch (error) { console.error('API request failed:',error); return { error: error instanceof Error ? error.message : 'Unknown error occurred',success: false,}} } async get<T>(endpoint: string,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'GET' })} async post<T>(endpoint: string,data?: unknown,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'POST',body: data ? JSON.stringify(data) : undefined,})} async put<T>(endpoint: string,data?: unknown,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'PUT',body: data ? JSON.stringify(data) : undefined,})} async delete<T>(endpoint: string,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'DELETE' })} } export const apiClient = new ApiClient(); export type { ApiResponse,RequestOptions };
=======
declare global { interface RequestInit { timeout?: number} } interface ApiResponse<T = unknown> { data?: T; error?: string; success: boolean} interface RequestOptions extends RequestInit { timeout?: number} class ApiClient { private baseUrl: string; private defaultTimeout: number; constructor(baseUrl: string = '',defaultTimeout: number = 10000) { this.baseUrl = baseUrl; this.defaultTimeout = defaultTimeout} private async request<T>( endpoint: string,options: RequestOptions = {} ): Promise<ApiResponse<T>> { const { timeout = this.defaultTimeout,...fetchOptions } = options; try { const controller = new AbortController(); const timeoutId = setTimeout(() => controller.abort(),timeout); const response = await fetch(`${this.baseUrl}${endpoint}`,{ ...fetchOptions,signal: controller.signal,headers: { 'Content-Type': 'application/json',...fetchOptions.headers,},}); clearTimeout(timeoutId); if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`)} const data = await response.json(); return { data,success: true }} catch (error) { console.error('API request failed:',error); return { error: error instanceof Error ? error.message : 'Unknown error occurred',success: false,}} } async get<T>(endpoint: string,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'GET' })} async post<T>(endpoint: string,data?: unknown,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'POST',body: data ? JSON.stringify(data) : undefined,})} async put<T>(endpoint: string,data?: unknown,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'PUT',body: data ? JSON.stringify(data) : undefined,})} async delete<T>(endpoint: string,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'DELETE' })} } export const apiClient = new ApiClient(); export type { ApiResponse,RequestOptions };
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
>>>>>>> 7c5570ce863aceb5500c5da6ecbea653a552cacd
=======
export type { ApiResponse, RequestOptions };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-ba45
=======
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-242d
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5

export type { ApiResponse, RequestOptions }

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/automation-improvements-final
=======
export type { ApiResponse, RequestOptions }
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
=======
export type { ApiResponse, RequestOptions };
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
