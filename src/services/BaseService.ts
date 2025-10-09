/**
 * Base Service Class
 * Provides common functionality for all service classes
 */

export interface ServiceOptions {
  retries?: number;
  timeout?: number;
  cache?: boolean;
  cacheDuration?: number;
}

export interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

export class BaseService {
  protected baseUrl: string;
  protected options: ServiceOptions;
  private cache: Map<string, CacheEntry<unknown>> = new Map();

  constructor(baseUrl: string, options: ServiceOptions = {}) {
    this.baseUrl = baseUrl;
    this.options = {
      retries: 3,
      cache: false,
      cacheDuration: 300000, // 5 minutes
      ...options
    };
  }

  /**
   * Check if cached data is still valid
   */
  protected isCacheValid(key: string): boolean {
    const entry = this.cache.get(key);
    if (!entry) return false;
    const age = Date.now() - entry.timestamp;
    return age < (this.options.cacheDuration || 300000);
  }

  /**
   * Get data from cache
   */
  protected getFromCache<T>(key: string): T | null {
    if (!this.options.cache) return null;
    if (this.isCacheValid(key)) {
      // console.log(`Cache hit for key: ${key}`);
      return this.cache.get(key)?.data as T;
    }
    return null;
  }

  /**
   * Store data in cache
   */
  protected setCache<T>(key: string, data: T): void {
    if (!this.options.cache) return;
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  /**
   * Clear cache
   */
  protected clearCache(): void {
    this.cache.clear();
  }

  /**
   * Make HTTP request with retry logic
   */
  protected async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    let lastError: Error | null = null;

    for (let attempt = 0; attempt <= (this.options.retries || 3); attempt++) {
      try {
        const response = await fetch(url, {
          ...options,
          headers: {
            'Content-Type': 'application/json',
            ...options.headers
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        return await response.json();
      } catch (error) {
        lastError = error as Error;
        if (attempt < (this.options.retries || 3)) {
          // console.warn(`Request failed, retrying (${attempt + 1}/${this.options.retries})`);
          await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, attempt)));
        }
      }
    }

    throw lastError || new Error('Request failed after all retries');
  }

  /**
   * GET request
   */
  protected async get<T>(endpoint: string): Promise<T> {
    const cacheKey = `GET:${endpoint}`;
    const cached = this.getFromCache<T>(cacheKey);
    if (cached) return cached;

    const data = await this.request<T>(endpoint, { method: 'GET' });
    this.setCache(cacheKey, data);
    return data;
  }

  /**
   * POST request
   */
  protected async post<T>(endpoint: string, data: unknown): Promise<T> {
    return await this.request<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }

  /**
   * PUT request
   */
  protected async put<T>(endpoint: string, data: unknown): Promise<T> {
    return await this.request<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }

  /**
   * DELETE request
   */
  protected async delete<T>(endpoint: string): Promise<T> {
    return await this.request<T>(endpoint, { method: 'DELETE' });
  }
}

export default BaseService;