'use client';
/**
 * Base Service Class
 * Provides common functionality for all service classes
 */
import { apiClient } from '../utils/apiClient';
import { logger } from '../utils/logger';
export interface ServiceOptions {}
  baseUrl?: string;
  timeout?: number;
  retries?: number;
  cache?: boolean;
  cacheDuration?: number;
}
export interface CacheEntry<T> {}
  data: T;,
  timestamp: number;
}
export class BaseService {}
  protected baseUrl: string;,
  protected options: ServiceOptions;,
  private cache: Map<string, CacheEntry<unknown>> = new Map();
  constructor(baseUrl: string, options: ServiceOptions = {}) {}
    this.baseUrl = baseUrl;
    this.options = {}
      timeout: 30000,
      retries: 3,
      cache: false,
      cacheDuration: 300000, // 5 minutes
      ...options
    };
  }
  /**
   * Check if cached data is still valid
   */
  protected isCacheValid(key: string): boolean {}
    const _entry = this.cache.get(key);
    if (!_entry) return false;
    const age = Date.now() - _entry.timestamp;
    return age < (this.options.cacheDuration || 300000);
  }
  /**
   * Get data from cache
   */
  protected getFromCache<T>(key: string): T | null {}
    if (!this.options.cache) return null;
    if (this.isCacheValid(key)) {}
      logger.debug(`Cache hit for key: ${key}""
    const _cacheKey = `GET: ${endpoint}""
      logger.debug(`GET request to ${endpoint}""
      const response = await apiClient.get<T>(`${this.baseUrl}${endpoint}""
      logger.debug(`POST request to ${endpoint}""
      const response = await apiClient.post<T>(`${this.baseUrl}${endpoint}""
      logger.debug(`PUT request to ${endpoint}""
      const response = await apiClient.put<T>(`${this.baseUrl}${endpoint}""
      logger.debug(`PATCH request to ${endpoint}""
      const response = await apiClient.patch<T>(`${this.baseUrl}${endpoint}""
      logger.debug(`DELETE request to ${endpoint}""
      const response = await apiClient.delete<T>(`${this.baseUrl}${endpoint}"";)