'use client';
/**
 * API Caching Utility
 * Provides caching, deduplication, and retry logic for API calls
 */
interface ApiCacheConfig {
  ttl?: number;
  maxRetries?: number;
  retryDelay?: number;
  deduplicate?: boolean;
}
interface PendingRequest<T> {
  promise: Promise<T>;
  timestamp: number;
}
/**
 * API Cache Manager with request deduplication
 */
export class ApiCache {
  private cache: CacheManager<unknown>;
  private pendingRequests: Map<string, PendingRequest<unknown>> = new Map();
  private config: Required<ApiCacheConfig>;
  constructor(_config: ApiCacheConfig = {}) {
    this.cache = new CacheManager({
      maxSize: 500,
      defaultTTL: config.ttl || 5 * 60 * 1000, // 5 minutes
      storage: 'memory'
    });
    this.config = {
      ttl: config.ttl || 5 * 60 * 1000,
      maxRetries: config.maxRetries || 3,
      retryDelay: config.retryDelay || 1000,
      deduplicate: config.deduplicate ?? true
    };
    // Auto-cleanup every 5 minutes
    setInterval(() => {
      this.cache.cleanup();
      this.cleanupPendingRequests();
    }, 5 * 60 * 1000);
  }
  /**
   * Fetch with caching and deduplication
   */
  async fetch<T>(
    url: string,
    options: RequestInit = {},
    cacheConfig?: Partial<ApiCacheConfig>
  ): Promise<T> {
    const mergedConfig = { ...this.config, ...cacheConfig };
    // Check cache first
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey) as T;
    }
    // Check if there's a pending request
    if (mergedConfig.deduplicate && this.pendingRequests.has(cacheKey)) {
      const pending = this.pendingRequests.get(cacheKey);
      if (pending && Date.now() - pending.timestamp < 30000) {
        // Reuse pending request if less than 30 seconds old
        return pending.promise as Promise<T>;
      }
    }
    // Create new request with retry logic
    const requestPromise = this.fetchWithRetry<T>(
      url,
      options,
      mergedConfig.maxRetries,
      mergedConfig.retryDelay
    );
    // Store pending request
    if (mergedConfig.deduplicate) {
      this.pendingRequests.set(cacheKey, {
        promise: requestPromise,
        timestamp: Date.now()
      });
    }
    try {
      const data = await requestPromise;
      // Cache successful response
      this.cache.set(cacheKey, data, mergedConfig.ttl);
      return data;
    } finally {
      // Clean up pending request
      this.pendingRequests.delete(cacheKey);
    }
  }
  /**
   * Fetch with retry logic
   */
  private async fetchWithRetry<T>(
    url: string,
    options: RequestInit,
    maxRetries: number,
    retryDelay: number,
    attempt = 1
  ): Promise<T> {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        // Retry on 5xx errors and 429 (rate limit)
        if (
          (response.status >= 500 || response.status === 429) &&
          attempt < maxRetries
        ) {
          await this.delay(retryDelay * attempt); // Exponential backoff
          return this.fetchWithRetry<T>(
            url,
            options,
            maxRetries,
            retryDelay,
            attempt + 1
          );
        }
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      return data as T;
    } catch (error) {
      // Retry on network errors
      if (attempt < maxRetries) {
        await this.delay(retryDelay * attempt);
        return this.fetchWithRetry<T>(
          url,
          options,
          maxRetries,
          retryDelay,
          attempt + 1
        );
      }
      throw error;
    }
  }
  /**
   * Invalidate cache entries matching a pattern
   */
  invalidate(pattern: string | RegExp): number {
    return this.cache.invalidate(pattern);
  }
  /**
   * Clear entire cache
   */
  clear(): void {
    this.cache.clear();
    this.pendingRequests.clear();
  }
  /**
   * Get cache statistics
   */
  getStats() {
    return {
      ...this.cache.stats(),
      pendingRequests: this.pendingRequests.size
    };
  }
  /**
   * Prefetch data
   */
  async prefetch<T>(
    url: string,
    options: RequestInit = {},
    cacheConfig?: Partial<ApiCacheConfig>
  ): Promise<void> {
    try {
      await this.fetch<T>(url, options, cacheConfig);
    } catch (error) {
      // Silent fail for prefetch
      }
  }
  /**
   * Generate cache key from URL and options
   */
  private getCacheKey(url: string, options: RequestInit): string {
    const method = options.method || 'GET';
    const body = options.body ? JSON.stringify(options.body) : '';
    return `${method}:${url}:${body}`;
  }
  /**
   * Delay helper
   */
  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  /**
   * Clean up old pending requests
   */
  private cleanupPendingRequests(): void {
    const now = Date.now();
    const timeout = 60000; // 1 minute
    for (const [key, pending] of this.pendingRequests.entries()) {
      if (now - pending.timestamp > timeout) {
        this.pendingRequests.delete(key);
      }
    }
  }
}
/**
 * Default API cache instance
 */
export const defaultApiCache = new ApiCache({
  ttl: 5 * 60 * 1000, // 5 minutes
  maxRetries: 3,
  retryDelay: 1000,
  deduplicate: true
});
/**
 * Cached fetch helper
 */
export async function cachedFetch<T>(
  url: string,
  options?: RequestInit,
  cacheConfig?: Partial<ApiCacheConfig>
): Promise<T> {
  return defaultApiCache.fetch<T>(url, options, cacheConfig);
}
/**
 * Create a cached API client
 */
export function createCachedApi(baseUrl: string, defaultOptions: RequestInit = {}) {
  const cache = new ApiCache();
  return {
    get: <T>(path: string, options?: RequestInit) =>
      cache.fetch<T>(`${baseUrl}${path}`, { ...defaultOptions, ...options, method: 'GET' }),
    post: <T>(path: string, body: unknown, options?: RequestInit) =>
      cache.fetch<T>(`${baseUrl}${path}`, {
        ...defaultOptions,
        ...options,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(defaultOptions.headers || {}),
          ...(options?.headers || {})
        },
        body: JSON.stringify(body)
      }),
    put: <T>(path: string, body: unknown, options?: RequestInit) =>
      cache.fetch<T>(`${baseUrl}${path}`, {
        ...defaultOptions,
        ...options,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...(defaultOptions.headers || {}),
          ...(options?.headers || {})
        },
        body: JSON.stringify(body)
      }),
    delete: <T>(path: string, options?: RequestInit) =>
      cache.fetch<T>(`${baseUrl}${path}`, { ...defaultOptions, ...options, method: 'DELETE' }),
    invalidate: (pattern: string | RegExp) => cache.invalidate(pattern),
    clear: () => cache.clear(),
    stats: () => cache.getStats(),
    prefetch: <T>(path: string, options?: RequestInit) =>
      cache.prefetch<T>(`${baseUrl}${path}`, { ...defaultOptions, ...options })
  };
}
export default ApiCache;