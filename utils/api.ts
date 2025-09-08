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
  signal?: AbortSignal | null;
  window?: any;
  timeout?: number;
}
interface AbortSignal extends EventTarget {
  aborted: boolean;
  onabort: ((this: AbortSignal, ev: Event) => any) | null;
}
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.ziontechgroup.com';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https: //api.ziontechgroup.com'
export class ApiClient {
  private baseURL: string
  private defaultHeaders: Record<string, string>
  constructor(baseURL: string = API_BASE_URL) {
    this.baseURL = baseURL
    this.defaultHeaders = {
      'Content-Type': 'application/json'
    };
  };
  private async request<T>(
    endpoint: string
    options: RequestInit = {};
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`
    const config: RequestInit = {
      ...options
      headers: {
        ...this.defaultHeaders
        ...options.headers
      }
    };
    try {
      const response = await fetch(url, config)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      };
      return await response.json()
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    };
  };
  async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, {
      ...options
      method: 'GET'
    })
  };
  async post<T>(endpoint: string, data?: any, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, {
      ...options
      method: 'POST'
      body: data ? JSON.stringify(data) : undefined
    })
  };
  async put<T>(endpoint: string, data?: any, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, {
      ...options
      method: 'PUT'
      body: data ? JSON.stringify(data) : undefined
    })
  };
  async delete<T>(endpoint: string, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'DELETE',
    });
  }
}
// Define AbortSignal if not available
interface AbortSignal extends EventTarget {
  aborted: boolean;
  onabort: ((this: AbortSignal, ev: Event) => any) | null;

}
};
export const apiClient = new ApiClient();
export type { ApiResponse, RequestOptions };
;
interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;  success: boolean;
}
interface RequestOptions extends RequestInit {
  timeout?: number;
}
declare global {
  interface RequestInit {
    timeout?: number;
  }
}
class ApiClient {
  private baseURL: string;

export interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: any;
}

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = '') {
    this.baseUrl = baseUrl;
  }

  async request<T = any>(endpoint: string, options: RequestOptions = {}): Promise<ApiResponse<T>> {
    const { method = 'GET', headers = {}, body } = options;
    
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers
        },
        body: body ? JSON.stringify(body) : undefined
      });

      const data = await response.json();
      
      return {
        data,
        success: response.ok
      };
    } catch (error) {
      return {
        data: null as any,
        success: false,
        message: error instanceof Error ? error.message : 'Unknown error'
      };
    }  }
}

export const apiClient = new ApiClient();
export type { ApiResponse, RequestOptions };
ursor/integrate-build-improve-and-re-verify-8f7d
declare global { interface RequestInit { timeout?: number} } interface ApiResponse<T = unknown> { data?: T; error?: string; success: boolean} interface RequestOptions extends RequestInit { timeout?: number} class ApiClient { private baseUrl: string; private defaultTimeout: number; constructor(baseUrl: string = '',defaultTimeout: number = 10000) { this.baseUrl = baseUrl; this.defaultTimeout = defaultTimeout} private async request<T>( endpoint: string,options: RequestOptions = {} ): Promise<ApiResponse<T>> { const { timeout = this.defaultTimeout,...fetchOptions } = options; try { const controller = new AbortController(); const timeoutId = setTimeout(() => controller.abort(),timeout); const response = await fetch(`${this.baseUrl}${endpoint}`,{ ...fetchOptions,signal: controller.signal,headers: { 'Content-Type': 'application/json',...fetchOptions.headers,},}); clearTimeout(timeoutId); if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`)} const data = await response.json(); return { data,success: true }} catch (error) { console.error('API request failed:',error); return { error: error instanceof Error ? error.message : 'Unknown error occurred',success: false,}} } async get<T>(endpoint: string,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'GET' })} async post<T>(endpoint: string,data?: unknown,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'POST',body: data ? JSON.stringify(data) : undefined,})} async put<T>(endpoint: string,data?: unknown,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'PUT',body: data ? JSON.stringify(data) : undefined,})} async delete<T>(endpoint: string,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'DELETE' })} } export const apiClient = new ApiClient(); export type { ApiResponse,RequestOptions };
declare global { interface RequestInit { timeout?: number} } interface ApiResponse<T = unknown> { data?: T; error?: string; success: boolean} interface RequestOptions extends RequestInit { timeout?: number} class ApiClient { private baseUrl: string; private defaultTimeout: number; constructor(baseUrl: string = '',defaultTimeout: number = 10000) { this.baseUrl = baseUrl; this.defaultTimeout = defaultTimeout} private async request<T>( endpoint: string,options: RequestOptions = {} ): Promise<ApiResponse<T>> { const { timeout = this.defaultTimeout,...fetchOptions } = options; try { const controller = new AbortController(); const timeoutId = setTimeout(() => controller.abort(),timeout); const response = await fetch(`${this.baseUrl}${endpoint}`,{ ...fetchOptions,signal: controller.signal,headers: { 'Content-Type': 'application/json',...fetchOptions.headers,},}); clearTimeout(timeoutId); if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`)} const data = await response.json(); return { data,success: true }} catch (error) { console.error('API request failed:',error); return { error: error instanceof Error ? error.message : 'Unknown error occurred',success: false,}} } async get<T>(endpoint: string,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'GET' })} async post<T>(endpoint: string,data?: unknown,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'POST',body: data ? JSON.stringify(data) : undefined,})} async put<T>(endpoint: string,data?: unknown,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'PUT',body: data ? JSON.stringify(data) : undefined,})} async delete<T>(endpoint: string,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'DELETE' })} } export const apiClient = new ApiClient(); export type { ApiResponse,RequestOptions };
declare global { interface RequestInit { timeout?: number} } interface ApiResponse<T = unknown> { data?: T; error?: string; success: boolean} interface RequestOptions extends RequestInit { timeout?: number} class ApiClient { private baseUrl: string; private defaultTimeout: number; constructor(baseUrl: string = '',defaultTimeout: number = 10000) { this.baseUrl = baseUrl; this.defaultTimeout = defaultTimeout} private async request<T>( endpoint: string,options: RequestOptions = {} ): Promise<ApiResponse<T>> { const { timeout = this.defaultTimeout,...fetchOptions } = options; try { const controller = new AbortController(); const timeoutId = setTimeout(() => controller.abort(),timeout); const response = await fetch(`${this.baseUrl}${endpoint}`,{ ...fetchOptions,signal: controller.signal,headers: { 'Content-Type': 'application/json',...fetchOptions.headers,},}); clearTimeout(timeoutId); if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`)} const data = await response.json(); return { data,success: true }} catch (error) { console.error('API request failed:',error); return { error: error instanceof Error ? error.message : 'Unknown error occurred',success: false,}} } async get<T>(endpoint: string,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'GET' })} async post<T>(endpoint: string,data?: unknown,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'POST',body: data ? JSON.stringify(data) : undefined,})} async put<T>(endpoint: string,data?: unknown,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'PUT',body: data ? JSON.stringify(data) : undefined,})} async delete<T>(endpoint: string,options?: RequestOptions): Promise<ApiResponse<T>> { return this.request<T>(endpoint,{ ...options,method: 'DELETE' })} } export const apiClient = new ApiClient(); export type { ApiResponse,RequestOptions };
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
export type { ApiResponse, RequestOptions };
ursor/integrate-build-improve-and-re-verify-b76c
origin/cursor/fix-syntax-push-and-merge-to-main-ba45
origin/cursor/integrate-build-improve-and-re-verify-242d
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
export type { ApiResponse, RequestOptions }