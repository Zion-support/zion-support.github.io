interface File extends Blob {
  name: string;
  lastModified: number;
}
  last_modified: number;
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
  signal?: AbortSignal | null;
  window?: any;
  timeout?: number;
}
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
  error?: string;
  success: boolean;
}
      return {

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



export type { ApiResponse, RequestOptions };
export type { ApiResponse, RequestOptions };
export type { ApiResponse, RequestOptions };

    });
  }
  async put<T = unknown>(endpoint: string, data?: any, options?: RequestOptions): Promise<ApiResponse<T>> {
      headers: {
        'Content-Type': 'application/json'
        ...options?.headers
      }
    }
  }

  async get<T = unknown>(
    endpoint: string,
    options?: RequestOptions,
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: "GET" });
  }

  async post<T = unknown>(
    endpoint: string,
    data?: any,
    options?: RequestOptions,
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: data ? JSON.stringify (data) : undefined,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });
  }

  async put<T = unknown>(
    endpoint: string,
    data?: any,
    options?: RequestOptions,
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: data ? JSON.stringify (data) : undefined,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });
  }

  async delete<T = unknown>(
    endpoint: string,
    options?: RequestOptions,
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: "DELETE" });
  }
}

export const apiClient = new ApiClient();
