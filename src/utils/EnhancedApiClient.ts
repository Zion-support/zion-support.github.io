import { apiCache } from './AdvancedCacheManager';

interface ApiClientConfig {
  baseURL: string;
  timeout: number;
  retries: number;
  retryDelay: number;
  cacheEnabled: boolean;
  cacheTTL: number;
}

interface RequestOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: any;
  timeout?: number;
  retries?: number;
  cache?: boolean;
  cacheTTL?: number;
  tags?: string[];
}

interface ApiResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
  timestamp: number;
  cached?: boolean;
}

interface ApiError {
  message: string;
  status?: number;
  statusText?: string;
  timestamp: number;
  retryCount: number;
  originalError?: Error;
}

class EnhancedApiClient {
  private config: ApiClientConfig;
  private requestQueue: Map<string, Promise<ApiResponse>> = new Map();
  private rateLimiter: Map<string, number[]> = new Map();

  constructor(config: Partial<ApiClientConfig> = {}) {
    this.config = {
      baseURL: process.env.REACT_APP_API_URL || '/api',
      timeout: 30000,
      retries: 3,
      retryDelay: 1000,
      cacheEnabled: true,
      cacheTTL: 5 * 60 * 1000, // 5 minutes
      ...config
    };
  }

  /**
   * Make HTTP request with enhanced features
   */
  async request<T = any>(
    endpoint: string,
    options: RequestOptions = {}
  ): Promise<ApiResponse<T>> {
    const {
      method = 'GET',
      headers = {},
      body,
      timeout = this.config.timeout,
      retries = this.config.retries,
      cache = this.config.cacheEnabled,
      cacheTTL = this.config.cacheTTL,
      tags = []
    } = options;

    const url = `${this.config.baseURL}${endpoint}`;
    const cacheKey = this.generateCacheKey(url, method, body);

    // Check cache first for GET requests
    if (method === 'GET' && cache) {
      const cachedResponse = apiCache.get(cacheKey);
      if (cachedResponse) {
        return {
          ...cachedResponse,
          cached: true
        };
      }
    }

    // Check for duplicate requests
    if (this.requestQueue.has(cacheKey)) {
      return this.requestQueue.get(cacheKey)!;
    }

    // Rate limiting
    if (!this.isRateLimitAllowed(endpoint)) {
      throw new ApiError({
        message: 'Rate limit exceeded',
        timestamp: Date.now(),
        retryCount: 0
      });
    }

    const requestPromise = this.executeRequest<T>(
      url,
      {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers
        },
        body: body ? JSON.stringify(body) : undefined
      },
      {
        timeout,
        retries,
        cacheKey,
        cache,
        cacheTTL,
        tags
      }
    );

    this.requestQueue.set(cacheKey, requestPromise);

    try {
      const response = await requestPromise;
      return response;
    } finally {
      this.requestQueue.delete(cacheKey);
    }
  }

  /**
   * Execute the actual HTTP request with retry logic
   */
  private async executeRequest<T>(
    url: string,
    fetchOptions: RequestInit,
    options: {
      timeout: number;
      retries: number;
      cacheKey: string;
      cache: boolean;
      cacheTTL: number;
      tags: string[];
    }
  ): Promise<ApiResponse<T>> {
    const { timeout, retries, cacheKey, cache, cacheTTL, tags } = options;
    let lastError: ApiError | null = null;

    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        const response = await fetch(url, {
          ...fetchOptions,
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        // Handle non-2xx responses
        if (!response.ok) {
          throw new ApiError({
            message: `HTTP ${response.status}: ${response.statusText}`,
            status: response.status,
            statusText: response.statusText,
            timestamp: Date.now(),
            retryCount: attempt
          });
        }

        const data = await response.json();
        const apiResponse: ApiResponse<T> = {
          data,
          status: response.status,
          statusText: response.statusText,
          headers: response.headers,
          timestamp: Date.now()
        };

        // Cache successful responses
        if (cache && fetchOptions.method === 'GET') {
          apiCache.set(cacheKey, apiResponse, tags, cacheTTL);
        }

        // Update rate limiter
        this.updateRateLimit(url);

        return apiResponse;

      } catch (error) {
        lastError = new ApiError({
          message: error instanceof Error ? error.message : 'Unknown error',
          timestamp: Date.now(),
          retryCount: attempt,
          originalError: error instanceof Error ? error : undefined
        });

        // Don't retry on certain errors
        if (this.shouldNotRetry(error)) {
          break;
        }

        // Wait before retry
        if (attempt < retries) {
          await this.delay(this.config.retryDelay * Math.pow(2, attempt));
        }
      }
    }

    throw lastError!;
  }

  /**
   * Generate cache key for request
   */
  private generateCacheKey(url: string, method: string, body?: any): string {
    const bodyHash = body ? btoa(JSON.stringify(body)) : '';
    return `${method}:${url}:${bodyHash}`;
  }

  /**
   * Check if request should be rate limited
   */
  private isRateLimitAllowed(endpoint: string): boolean {
    const now = Date.now();
    const windowMs = 60000; // 1 minute
    const maxRequests = 100; // Max requests per minute per endpoint

    if (!this.rateLimiter.has(endpoint)) {
      this.rateLimiter.set(endpoint, []);
    }

    const requests = this.rateLimiter.get(endpoint)!;
    
    // Remove old requests outside the window
    const validRequests = requests.filter(time => now - time < windowMs);
    
    return validRequests.length < maxRequests;
  }

  /**
   * Update rate limiter after successful request
   */
  private updateRateLimit(endpoint: string): void {
    const now = Date.now();
    
    if (!this.rateLimiter.has(endpoint)) {
      this.rateLimiter.set(endpoint, []);
    }

    const requests = this.rateLimiter.get(endpoint)!;
    requests.push(now);
    this.rateLimiter.set(endpoint, requests);
  }

  /**
   * Check if error should not be retried
   */
  private shouldNotRetry(error: any): boolean {
    // Don't retry on client errors (4xx) except 408, 429
    if (error.status >= 400 && error.status < 500) {
      return error.status !== 408 && error.status !== 429;
    }

    // Don't retry on network errors that won't be fixed by retrying
    if (error.name === 'AbortError') {
      return true;
    }

    return false;
  }

  /**
   * Delay utility
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Convenience methods
   */
  async get<T = any>(endpoint: string, options: Omit<RequestOptions, 'method'> = {}): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  async post<T = any>(endpoint: string, body?: any, options: Omit<RequestOptions, 'method' | 'body'> = {}): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'POST', body });
  }

  async put<T = any>(endpoint: string, body?: any, options: Omit<RequestOptions, 'method' | 'body'> = {}): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'PUT', body });
  }

  async delete<T = any>(endpoint: string, options: Omit<RequestOptions, 'method'> = {}): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }

  async patch<T = any>(endpoint: string, body?: any, options: Omit<RequestOptions, 'method' | 'body'> = {}): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { ...options, method: 'PATCH', body });
  }

  /**
   * Batch requests
   */
  async batch<T = any>(requests: Array<{
    endpoint: string;
    options?: RequestOptions;
  }>): Promise<ApiResponse<T>[]> {
    const promises = requests.map(req => 
      this.request<T>(req.endpoint, req.options)
    );

    return Promise.allSettled(promises).then(results => 
      results.map(result => 
        result.status === 'fulfilled' 
          ? result.value 
          : { error: result.reason } as any
      )
    );
  }

  /**
   * Clear cache
   */
  clearCache(tags?: string[]): void {
    if (tags) {
      apiCache.invalidateByTags(tags);
    } else {
      apiCache.clear();
    }
  }

  /**
   * Get cache statistics
   */
  getCacheStats() {
    return apiCache.getStats();
  }
}

// Custom error class
class ApiError extends Error {
  public status?: number;
  public statusText?: string;
  public timestamp: number;
  public retryCount: number;
  public originalError?: Error;

  constructor({
    message,
    status,
    statusText,
    timestamp,
    retryCount,
    originalError
  }: {
    message: string;
    status?: number;
    statusText?: string;
    timestamp: number;
    retryCount: number;
    originalError?: Error;
  }) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.statusText = statusText;
    this.timestamp = timestamp;
    this.retryCount = retryCount;
    this.originalError = originalError;
  }
}

// Create global API client instance
export const apiClient = new EnhancedApiClient({
  baseURL: process.env.REACT_APP_API_URL || '/api',
  timeout: 30000,
  retries: 3,
  retryDelay: 1000,
  cacheEnabled: true,
  cacheTTL: 5 * 60 * 1000
});

export { ApiError };
export default EnhancedApiClient;