<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
}};
export const apiClient = new ApiClient();
};
export const apiClient = new ApiClient();
export type { ApiResponse, RequestOptions };
;
interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  success: boolean,
<<<<<<< HEAD
=======
=======
interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  success: boolean;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
}

interface RequestOptions extends RequestInit {
  timeout?: number;
}

// Add global type definitions for Node.js environment
interface RequestInit {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
  signal?: AbortSignal;
  timeout?: number;
}

interface AbortSignal {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  aborted: boolean,
  addEventListener(type: string, listener: () => void): void,
  removeEventListener(type: string, listener: () => void): void,
}

class AbortController {
  signal: AbortSignal, abort(): void,
}

class ApiClient {
  private baseUrl: string, private defaultTimeout: number,

  constructor(baseUrl: string = '', defaultTimeout: number = 10000) {
    this.baseUrl = baseUrl,
    this.defaultTimeout = defaultTimeout
  }

  private async request<T>(
    endpoint: string,
<<<<<<< HEAD
=======
=======
  aborted: boolean;
  addEventListener(type: string, listener: () => void): void;
  removeEventListener(type: string, listener: () => void): void;
}

class AbortController {
  signal: AbortSignal;
  abort(): void;
}

class ApiClient {
  private baseUrl: string;
  private defaultTimeout: number;

  constructor(baseUrl: string = '', defaultTimeout: number = 10000) {
    this.baseUrl = baseUrl;
    this.defaultTimeout = defaultTimeout;
  }

  private async request<T>(
    endpoint: string;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    options: RequestOptions = {}
  ): Promise<ApiResponse<T>> {
    const { timeout = this.defaultTimeout, ...fetchOptions } = options;
    
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...fetchOptions;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        signal: controller.signal,
        headers: {
    'Content-Type': 'application/json',
    ...fetchOptions.headers
  };
<<<<<<< HEAD
=======
=======
        signal: controller.signal;
        headers: {
          'Content-Type': 'application/json';
          ...fetchOptions.headers;
        };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
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
<<<<<<< HEAD
        error: error instanceof Error ? error.message : 'Unknown error occurred', success: false,
=======
<<<<<<< HEAD
        error: error instanceof Error ? error.message : 'Unknown error occurred', success: false,
=======
        error: error instanceof Error ? error.message : 'Unknown error occurred';
        success: false;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      };
    }
  }

  async get<T>(endpoint: string, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  async post<T>(endpoint: string, data?: unknown, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options;
<<<<<<< HEAD
      method: 'POST', body: data ? JSON.stringify(data) : undefined,
=======
<<<<<<< HEAD
      method: 'POST', body: data ? JSON.stringify(data) : undefined,
=======
      method: 'POST';
      body: data ? JSON.stringify(data) : undefined;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    });
  }

  async put<T>(endpoint: string, data?: unknown, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options;
<<<<<<< HEAD
      method: 'PUT', body: data ? JSON.stringify(data) : undefined,
=======
<<<<<<< HEAD
      method: 'PUT', body: data ? JSON.stringify(data) : undefined,
=======
      method: 'PUT';
      body: data ? JSON.stringify(data) : undefined;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    });
  }

  async delete<T>(endpoint: string, options?: RequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }
}

export const apiClient = new ApiClient();
<<<<<<< HEAD
export type { ApiResponse, RequestOptions };
=======
<<<<<<< HEAD
export type { ApiResponse, RequestOptions };
=======
export type { ApiResponse, RequestOptions };
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
