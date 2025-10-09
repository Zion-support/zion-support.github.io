
/**
 * Enhanced API Client with retry logic, caching, and error handling
 */
import { cacheManager, CacheOptions } from './cacheManager';
import { logError, logCritical } from './errorLogger';
export interface ApiClientConfig {
  baseURL?: string;
  timeout?: number;
  retries?: number;
  retryDelay?: number;
  headers?: Record<string, string>;
  cacheOptions?: CacheOptions;
}
export interface RequestConfig extends Omit<RequestInit, 'cache'> {
  url: string;
  cacheOptions?: CacheOptions;
  retries?: number;
  timeout?: number;
  skipCache?: boolean;
}
export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
}
export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public response?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}
class ApiClient {
  private config: Required<Omit<ApiClientConfig, 'cacheOptions' | 'baseURL'>> & {
    baseURL: string;
    cacheOptions?: CacheOptions;
  };
  private abortControllers: Map<string, AbortController> = new Map();
  constructor(config: ApiClientConfig = {}) {
    this.config = {
      baseURL: config.baseURL || '',
      timeout: config.timeout || 30000,
      retries: config.retries || 3,
      retryDelay: config.retryDelay || 1000,
      headers: config.headers || {
        'Content-Type': 'application/json'
      },
      cacheOptions: config.cacheOptions
    };
  }
  /**
   * GET request
   */
  async get<T = unknown>(
    url: string,
    config: Omit<RequestConfig, 'url' | 'method' | 'body'> = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>({
      ...config,
      url,
      method: 'GET'
    });
  }
  /**
   * POST request
   */
  async post<T = unknown>(
    url: string,
    data?: unknown,
    config: Omit<RequestConfig, 'url' | 'method'> = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>({
      ...config,
      url,
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
  /**
   * PUT request
   */
  async put<T = unknown>(
    url: string,
    data?: unknown,
    config: Omit<RequestConfig, 'url' | 'method'> = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>({
      ...config,
      url,
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }
  /**
   * DELETE request
   */
  async delete<T = unknown>(
    url: string,
    config: Omit<RequestConfig, 'url' | 'method' | 'body'> = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>({
      ...config,
      url,
      method: 'DELETE'
    });
  }
  /**
   * PATCH request
   */
  async patch<T = unknown>(
    url: string,
    data?: unknown,
    config: Omit<RequestConfig, 'url' | 'method'> = {}
  ): Promise<ApiResponse<T>> {
    return this.request<T>({
      ...config,
      url,
      method: 'PATCH',
      body: JSON.stringify(data)
    });
  }
  /**
   * Main request method with retry logic
   */
  private async request<T>(config: RequestConfig): Promise<ApiResponse<T>> {
    const {
      url,
      method = 'GET',
      headers = {},
      cacheOptions: cacheConfig,
      skipCache = false,
      retries = this.config.retries,
      timeout = this.config.timeout,
      ...fetchConfig
    } = config;
    const fullUrl = url.startsWith('http') ? url : `${this.config.baseURL}${url}`;
    const cacheKey = `${method}:${fullUrl}`;
    // Check cache for GET requests
    if (method === 'GET' && !skipCache) {
      const cached = cacheManager.get<T>(cacheKey);
      if (cached !== undefined) {
        return {
          data: cached,
          status: 200,
          statusText: 'OK (cached)',
          headers: new Headers()
        };
      }
    }
    // Create abort controller for timeout
    const controller = new AbortController();
    this.abortControllers.set(cacheKey, controller);
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, timeout);
    let lastError: Error | null = null;
    let attempt = 0;
    while (attempt < retries) {
      try {
        const response = await fetch(fullUrl, {
          ...fetchConfig,
          method,
          headers: {
            ...this.config.headers,
            ...headers
          },
          signal: controller.signal
        });
        clearTimeout(timeoutId);
        this.abortControllers.delete(cacheKey);
        if (!response.ok) {
          throw new ApiError(
            `HTTP ${response.status}: ${response.statusText}`,
            response.status,
            await response.text()
          );
        }
        const contentType = response.headers.get('content-type');
        let data: T;
        if (contentType?.includes('application/json')) {
          data = await response.json();
        } else {
          data = (await response.text()) as T;
        }
        // Cache successful GET requests
        if (method === 'GET' && !skipCache) {
          cacheManager.set(cacheKey, data, cacheConfig || this.config.cacheOptions || {});
        }
        return {
          data,
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        };
      } catch (error) {
        lastError = error as Error;
        attempt++;
        // Log error
        if (attempt === retries) {
          if (error instanceof ApiError && error.status >= 500) {
            logCritical(`API request failed after ${retries} attempts`, error as Error, {
              url: fullUrl,
              method,
              attempt
            });
          } else {
            logError(`API request failed`, error as Error, {
              url: fullUrl,
              method,
              attempt
            });
          }
        }
        // Don't retry on certain errors
        if (error instanceof ApiError && error.status < 500) {
          throw error;
        }
        // Wait before retrying
        if (attempt < retries) {
          await this.delay(this.config.retryDelay * attempt);
        }
      }
    }
    clearTimeout(timeoutId);
    this.abortControllers.delete(cacheKey);
    throw lastError || new Error('Request failed');
  }
  /**
   * Cancel a pending request
   */
  cancel(url: string, method: string = 'GET'): void {
    const cacheKey = `${method}:${url}`;
    const controller = this.abortControllers.get(cacheKey);
    if (controller) {
      controller.abort();
      this.abortControllers.delete(cacheKey);
    }
  }
  /**
   * Cancel all pending requests
   */
  cancelAll(): void {
    this.abortControllers.forEach(controller => {
      controller.abort();
    });
    this.abortControllers.clear();
  }
  /**
   * Update default config
   */
  setConfig(config: Partial<ApiClientConfig>): void {
    this.config = {
      ...this.config,
      ...config,
      headers: {
        ...this.config.headers,
        ...(config.headers || {})
      }
    };
  }
  /**
   * Set authorization header
   */
  setAuthToken(token: string): void {
    this.config.headers['Authorization'] = `Bearer ${token}`;
  }
  /**
   * Remove authorization header
   */
  removeAuthToken(): void {
    delete this.config.headers['Authorization'];
  }
  /**
   * Delay helper
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  /**
   * Health check
   */
  async healthCheck(endpoint: string = '/health'): Promise<boolean> {
    try {
      const response = await this.get(endpoint, { timeout: 5000, retries: 1 });
      return response.status === 200;
    } catch {
      return false;
    }
  }
}
// Create default instance
const apiClient = new ApiClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL || '',
  timeout: 30000,
  retries: 3,
  retryDelay: 1000,
  cacheOptions: {
    ttl: 5 * 60 * 1000, // 5 minutes
  }
});
// Export both the class and default instance
export { apiClient };
export default ApiClient;
