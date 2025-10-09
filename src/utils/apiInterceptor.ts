'use client';
/**
 * API Interceptor Utility;
 * Centralized API request handling with error handling, retry logic, and caching;
 */
// ErrorHandler class definition;
class ErrorHandler {
  private static instance: ErrorHandler;
  static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }
    return ErrorHandler.instance;
  }
  handleNetworkError(error: Error, url: string, config?: unknown): void {
    // console.error('Network error:', { error: error.message, url, config });
  }
}
export interface APIConfig {
  baseURL: string;
  timeout: number;
  retryAttempts: number;
  retryDelay: number;
  enableCaching: boolean;
  cacheTimeout: number;
  headers?: Record<string, string>;
  interceptors?: {
    request?: (config: RequestConfig) => RequestConfig | Promise<RequestConfig>;
    response?: (response: Response) => Response | Promise<Response>;
    error?: (error: Error) => Error | Promise<Error>;
  }
}
export interface RequestConfig {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: Record<string, string>;
  body?: unknown;
  params?: Record<string, string | number | boolean>;
  timeout?: number;
  cache?: boolean;
  retryAttempts?: number;
}
export interface APIResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: Headers;
  config: RequestConfig;
}
export interface CacheEntry {
  data: unknown;
  timestamp: number;
  expiresAt: number;
}
export class APIInterceptor {
  private static instance: APIInterceptor;
  private config: APIConfig;
  private cache: Map<string, CacheEntry> = new Map();
  private errorHandler: ErrorHandler;
  private pendingRequests: Map<string, Promise<APIResponse>> = new Map();
  constructor(config: Partial<APIConfig> = {}) {
    this.config = {
      baseURL: config.baseURL || '',
      timeout: config.timeout || 30000,
      retryAttempts: config.retryAttempts || 3,
      retryDelay: config.retryDelay || 1000,
      enableCaching: config.enableCaching ?? true,
      cacheTimeout: config.cacheTimeout || 300000, // 5 minutes;
      headers: config.headers || {},
      interceptors: config.interceptors || {}
    }
    this.errorHandler = ErrorHandler.getInstance();
  }
  static getInstance(config?: Partial<APIConfig>): APIInterceptor {
    if (!APIInterceptor.instance) {
      APIInterceptor.instance = new APIInterceptor(config);
    }
    return APIInterceptor.instance;
  }
  /**
   * Make API request;
   */
  async request<T = unknown>(config: RequestConfig): Promise<APIResponse<T>> {
            // Check cache for GET requests;
    if (fullConfig.method === 'GET' && fullConfig.cache !== false && this.config.enableCaching) {
            if (cachedResponse) {
        return cachedResponse as APIResponse<T>;
      }
    }
    // Check for pending identical requests;
    if (this.pendingRequests.has(cacheKey)) {
      return this.pendingRequests.get(cacheKey) as Promise<APIResponse<T>>;
    }
    // Create the request promise;
        this.pendingRequests.set(cacheKey, requestPromise as Promise<APIResponse>);
    try {
            // Cache successful GET requests;
      if (fullConfig.method === 'GET' && fullConfig.cache !== false && this.config.enableCaching) {
        this.setInCache(cacheKey, response);
      }
      return response;
    } finally {
      this.pendingRequests.delete(cacheKey);
    }
  }
  /**
   * Execute the actual request;
   */
  private async executeRequest<T>(config: RequestConfig, attempt = 1): Promise<APIResponse<T>> {
        try {
      // Apply request interceptor;
            if (this.config.interceptors?.request) {
        finalConfig = await this.config.interceptors.request(config);
      }
            const fetchOptions: RequestInit = {
        method: finalConfig.method,
        headers: this.buildHeaders(finalConfig),
        body: finalConfig.body ? JSON.stringify(finalConfig.body) : undefined,
        signal: this.createAbortSignal(finalConfig.timeout || this.config.timeout)
      }
                  // Record performance metric;
      performanceMetrics.recordNetworkRequest(url, duration, response.status);
      // Handle non-2xx responses;
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      // Apply response interceptor;
            if (this.config.interceptors?.response) {
        finalResponse = await this.config.interceptors.response(response);
      }
      // Parse response data;
            return {
        data,
        status: finalResponse.status,
        statusText: finalResponse.statusText,
        headers: finalResponse.headers,
        config: finalConfig;
      }
    } catch (error) {
                  // Record error metric;
      performanceMetrics.recordNetworkRequest(this.buildURL(config), duration, 0);
      // Handle error with error handler;
      this.errorHandler.handleNetworkError(err, this.buildURL(config), undefined);
      // Retry logic;
      if (attempt < (config.retryAttempts || this.config.retryAttempts)) {
        await this.delay(this.config.retryDelay * attempt);
        return this.executeRequest<T>(config, attempt + 1);
      }
      // Apply error interceptor;
      if (this.config.interceptors?.error) {
                throw modifiedError;
      }
      throw err;
    }
  }
  /**
   * GET request;
   */
  async get<T = unknown>(
    url: string,
    config: Partial<RequestConfig> = {}
  ): Promise<APIResponse<T>> {
    return this.request<T>({ ...config, url, method: 'GET' });
  }
  /**
   * POST request;
   */
  async post<T = unknown>(
    url: string,
    body?: unknown,
    config: Partial<RequestConfig> = {}
  ): Promise<APIResponse<T>> {
    return this.request<T>({ ...config, url, method: 'POST', body });
  }
  /**
   * PUT request;
   */
  async put<T = unknown>(
    url: string,
    body?: unknown,
    config: Partial<RequestConfig> = {}
  ): Promise<APIResponse<T>> {
    return this.request<T>({ ...config, url, method: 'PUT', body });
  }
  /**
   * DELETE request;
   */
  async delete<T = unknown>(
    url: string,
    config: Partial<RequestConfig> = {}
  ): Promise<APIResponse<T>> {
    return this.request<T>({ ...config, url, method: 'DELETE' });
  }
  /**
   * PATCH request;
   */
  async patch<T = unknown>(
    url: string,
    body?: unknown,
    config: Partial<RequestConfig> = {}
  ): Promise<APIResponse<T>> {
    return this.request<T>({ ...config, url, method: 'PATCH', body });
  }
  /**
   * Prepare request configuration;
   */
  private prepareRequest(config: RequestConfig): RequestConfig {
    return {
      ...config,
      headers: {
        ...this.config.headers,
        ...config.headers;
      },
      timeout: config.timeout || this.config.timeout,
      retryAttempts: config.retryAttempts ?? this.config.retryAttempts,
      cache: config.cache ?? this.config.enableCaching;
    }
  }
  /**
   * Build full URL with query parameters;
   */
  private buildURL(config: RequestConfig): string {
        if (config.params) {
            Object.entries(config.params).forEach(([key, value]) => {
        params.append(key, String(value));
      });
      url += `?${params.toString()}`;
    }
    return url;
  }
  /**
   * Build request headers;
   */
  private buildHeaders(config: RequestConfig): Headers {
        // Add default headers;
    headers.set('Content-Type', 'application/json');
    // Add config headers;
    Object.entries(config.headers || {}).forEach(([key, value]) => {
      headers.set(key, value);
    });
    return headers;
  }
  /**
   * Create abort signal for timeout;
   */
  private createAbortSignal(timeout: number): AbortSignal {
        setTimeout(() => controller.abort(), timeout);
    return controller.signal;
  }
  /**
   * Parse response based on content type;
   */
  private async parseResponse<T>(response: Response): Promise<T> {
        if (contentType?.includes('application/json')) {
      return await response.json();
    }
    if (contentType?.includes('text/')) {
      return (await response.text()) as T;
    }
    return (await response.blob()) as T;
  }
  /**
   * Get cache key for request;
   */
  private getCacheKey(config: RequestConfig): string {
        return `${config.method}:${url}`;
  }
  /**
   * Get response from cache;
   */
  private getFromCache(key: string): APIResponse | null {
        if (!entry) return null;
    if (Date.now() > entry.expiresAt) {
      this.cache.delete(key);
      return null;
    }
    return entry.data as APIResponse;
  }
  /**
   * Set response in cache;
   */
  private setInCache(key: string, response: APIResponse): void {
    this.cache.set(key, {
      data: response,
      timestamp: Date.now(),
      expiresAt: Date.now() + this.config.cacheTimeout;
    });
  }
  /**
   * Clear cache;
   */
  clearCache(): void {
    this.cache.clear();
  }
  /**
   * Clear expired cache entries;
   */
  clearExpiredCache(): void {
        for (const [key, entry] of this.cache.entries()) {
      if (now > entry.expiresAt) {
        this.cache.delete(key);
      }
    }
  }
  /**
   * Get cache statistics;
   */
  getCacheStats() {
                    return {
      total: entries.length,
      valid,
      expired,
      size: entries.reduce((sum, e) => sum + JSON.stringify(e.data).length, 0)
    }
  }
  /**
   * Delay helper for retry logic;
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  /**
   * Update configuration;
   */
  updateConfig(config: Partial<APIConfig>): void {
    this.config = { ...this.config, ...config }
  }
  /**
   * Get current configuration;
   */
  getConfig(): APIConfig {
    return { ...this.config }
  }
}
// Export singleton instance;
export export default APIInterceptor;
