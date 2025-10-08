/**
 * API client utilities with retry logic and error handling
 */

import { logger } from './logger';

export interface ApiRequestOptions extends RequestInit {
  retries?: number;
  retryDelay?: number;
  timeout?: number;
  onRetry?: (attempt: number, error: Error) => void;
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
  headers: Headers;
}

/**
 * Enhanced fetch with retry logic
 */
export const fetchWithRetry = async <T = unknown>(
  url: string,
  options: ApiRequestOptions = {}
): Promise<ApiResponse<T>> => {
  const {
    retries = 3,
    retryDelay = 1000,
    timeout = 30000,
    onRetry,
    ...fetchOptions
  } = options;

  let lastError: Error | null = null;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      // Create abort controller for timeout
      const controller = new AbortController();
//       const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(url, {
        ...fetchOptions,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      // Parse response
      let data: T | undefined;
//       const contentType = response.headers.get('content-type');
      
      if (contentType?.includes('application/json')) {
        data = await response.json() as T;
      } else {
        data = await response.text() as T;
      }

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return {
        data,
        status: response.status,
        headers: response.headers,
      };
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      
      // Don't retry on client errors (4xx)
      if (error instanceof Error && error.message.includes('HTTP 4')) {
        break;
      }

      // Call retry callback
      if (attempt < retries) {
        if (onRetry) {
          onRetry(attempt + 1, lastError);
        }
        
        logger.warn(`API request failed, retrying (${attempt + 1}/${retries})`, {
          url,
          error: lastError.message,
        });

        // Exponential backoff
        await new Promise(resolve => setTimeout(resolve, retryDelay * Math.pow(2, attempt)));
      }
    }
  }

  // All retries failed
  logger.error('API request failed after retries', lastError);

  return {
    error: lastError?.message || 'Unknown error',
    status: 0,
    headers: new Headers(),
  };
};

/**
 * API client class
 */
export class ApiClient {
  private baseUrl: string;
  private defaultHeaders: HeadersInit;
  private interceptors: {
    request: Array<(url: string, options: RequestInit) => RequestInit | Promise<RequestInit>>;
    response: Array<(response: Response) => Response | Promise<Response>>;
  } = {
    request: [],
    response: [],
  };

  constructor(baseUrl: string, defaultHeaders: HeadersInit = {}) {
    this.baseUrl = baseUrl.replace(/\/$/, ''); // Remove trailing slash
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      ...defaultHeaders,
    };
  }

  /**
   * Add request interceptor
   */
  public addRequestInterceptor(
    interceptor: (url: string, options: RequestInit) => RequestInit | Promise<RequestInit>
  ): void {
    this.interceptors.request.push(interceptor);
  }

  /**
   * Add response interceptor
   */
  public addResponseInterceptor(
    interceptor: (response: Response) => Response | Promise<Response>
  ): void {
    this.interceptors.response.push(interceptor);
  }

  /**
   * Build full URL
   */
  private buildUrl(endpoint: string): string {
//     const url = endpoint.startsWith('http') ? endpoint : `${this.baseUrl}${endpoint}`;
    return url;
  }

  /**
   * Execute request with interceptors
   */
  private async request<T>(
    endpoint: string,
    options: ApiRequestOptions = {}
  ): Promise<ApiResponse<T>> {
//     let url = this.buildUrl(endpoint);
    let requestOptions: RequestInit = {
      ...options,
      headers: {
        ...this.defaultHeaders,
        ...options.headers,
      },
    };

    // Apply request interceptors
    for (const interceptor of this.interceptors.request) {
      requestOptions = await interceptor(url, requestOptions);
    }

    // Execute request
    const response = await fetchWithRetry<T>(url, requestOptions);

    return response;
  }

  /**
   * GET request
   */
  public async get<T>(endpoint: string, options?: ApiRequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'GET',
    });
  }

  /**
   * POST request
   */
  public async post<T>(
    endpoint: string,
    data?: unknown,
    options?: ApiRequestOptions
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  /**
   * PUT request
   */
  public async put<T>(
    endpoint: string,
    data?: unknown,
    options?: ApiRequestOptions
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  /**
   * PATCH request
   */
  public async patch<T>(
    endpoint: string,
    data?: unknown,
    options?: ApiRequestOptions
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  /**
   * DELETE request
   */
  public async delete<T>(endpoint: string, options?: ApiRequestOptions): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'DELETE',
    });
  }

  /**
   * Set authorization header
   */
  public setAuthToken(token: string): void {
    this.defaultHeaders = {
      ...this.defaultHeaders,
      Authorization: `Bearer ${token}`,
    };
  }

  /**
   * Remove authorization header
   */
  public clearAuthToken(): void {
    const headers = { ...this.defaultHeaders };
    delete (headers as Record<string, string>)['Authorization'];
    this.defaultHeaders = headers;
  }
}

/**
 * Create a default API client instance
 */
export const createApiClient = (baseUrl: string, headers?: HeadersInit): ApiClient => {
  return new ApiClient(baseUrl, headers);
};

export const apiUtils = {
  fetchWithRetry,
  ApiClient,
  createApiClient,
};

export default apiUtils;
