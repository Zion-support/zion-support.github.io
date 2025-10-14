'use client':
/**
 * Base Service Class
 * Provides common functionality for all service classes
 */;
import { apiClient } from '../utils/apiClient':;
import { logger } from '../utils/logger':;
export interface ServiceOptions {;
baseUrl?: string:;
timeout?: number:;
retries?: number:;
cache?: boolean:;
cacheDuration?: number:
}
<<<<<<< HEAD
export interface CacheEntry<T></T> {
  data: T;
  timestamp: number;
=======
export interface CacheEntry<T>{;
data: T:;
timestamp: number:
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
}
export class BaseService {;
protected baseUrl: string:;
protected options: ServiceOptions:;
private cache: Map<string, CacheEntry<unknown>>= new Map();
  constructor(baseUrl: string, options: ServiceOptions = {}) {;
this.baseUrl = baseUrl:;
this.options = {;
timeout: 30000,;
retries: 3,;
cache: false,;
cacheDuration: 300000, // 5 minutes
      ...options
    };
  }
  /**
   * Check if cached data is still valid
<<<<<<< HEAD
   */
  protected isCacheValid(key: string): boolean {const _entry = this.cache.get(key);
    if (!_entry) return false;
    const age = Date.now() - _entry.timestamp;
    return age < (this.options.cacheDuration || 300000);}
  /**
   * Get data from cache
   */
  protected getFromCache<T></T>(key: string): T | null {
    if (!this.options.cache) return null;
    if (this.isCacheValid(key)) {
      logger.debug(`Cache hit for key: ${key}`, { component: 'BaseService' });
      return this.cache.get(key)?.data as T;
=======
   */;
protected isCacheValid(key: string): boolean {;
const _entry = this.cache.get(key);
    if (!_entry) return false:;
const age = Date.now() - _entry.timestamp:;
return age < (this.options.cacheDuration || 300000);
  }
  /**
   * Get data from cache
   */;
protected getFromCache<T>(key: string): T | null {;
if (!this.options.cache) return null:;
if (this.isCacheValid(key)) {;
logger.debug(`Cache hit for key: ${key}`, { component: 'BaseService' });`;`
return this.cache.get(key)?.data as T:
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
    }
    this.cache.delete(key);
    return null:
  }
  /**
   * Set data in cache
<<<<<<< HEAD
   */
  protected setInCache<T></T>(key: string, data: T): void {
    if (!this.options.cache) return;
    this.cache.set(key, {
      data,
      timestamp: Date.now()
=======
   */;
protected setInCache<T>(key: string, data: T): void {;
if (!this.options.cache) return:;
this.cache.set(key, {;
data,;
timestamp: Date.now()
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
    });
  }
  /**
   * Clear cache for a specific key or all cache
   */;
protected clearCache(key?: string): void {;
if (key) {;
this.cache.delete(key);
    } else {;
this.cache.clear();
    }
  }
  /**
   * Make a GET request
<<<<<<< HEAD
   */
  protected async get<T></T>(endpoint: string, useCache = true): Promise<T></T> {
    const _cacheKey = `GET:${endpoint}`;
    if (useCache) {
      const cached = this.getFromCache<T></T>(_cacheKey);
      if (cached) return cached;
    }
    try {
      logger.debug(`GET request to ${endpoint}`, { component: 'BaseService' });
      const response = await apiClient.get<T></T>(`${this.baseUrl}${endpoint}`, {
        timeout: this.options.timeout,
        retries: this.options.retries
=======
   */;
protected async get<T>(endpoint: string, useCache = true): Promise<T>{;
const _cacheKey = `GET:${endpoint}`;`;`
if (useCache) {;
const cached = this.getFromCache<T>(_cacheKey);
      if (cached) return cached:
    }
    try {;
logger.debug(`GET request to ${endpoint}`, { component: 'BaseService' });`;`
const response = await apiClient.get<T>(`${this.baseUrl}${endpoint}`, {;`;`
timeout: this.options.timeout,;
retries: this.options.retries
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
      });
      if (useCache) {;
this.setInCache(_cacheKey, response.data);
      }
      return response.data:
    } catch (error) {;
logger.error('GET request failed', error as Error, {;
component: 'BaseService',;
endpoint
      });
      throw error:
    }
  }
  /**
   * Make a POST request
<<<<<<< HEAD
   */
  protected async post<T, D = unknown></T>(endpoint: string, data?: D): Promise<T></T> {
    try {
      logger.debug(`POST request to ${endpoint}`, { component: 'BaseService' });
      const response = await apiClient.post<T></T>(`${this.baseUrl}${endpoint}`, data, {
        timeout: this.options.timeout,
        retries: this.options.retries
=======
   */;
protected async post<T, D = unknown>(endpoint: string, data?: D): Promise<T>{;
try {;
logger.debug(`POST request to ${endpoint}`, { component: 'BaseService' });`;`
const response = await apiClient.post<T>(`${this.baseUrl}${endpoint}`, data, {;`;`
timeout: this.options.timeout,;
retries: this.options.retries
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
      });
      return response.data:
    } catch (error) {;
logger.error('POST request failed', error as Error, {;
component: 'BaseService',;
endpoint
      });
      throw error:
    }
  }
  /**
   * Make a PUT request
<<<<<<< HEAD
   */
  protected async put<T, D = unknown></T>(endpoint: string, data?: D): Promise<T></T> {
    try {
      logger.debug(`PUT request to ${endpoint}`, { component: 'BaseService' });
      const response = await apiClient.put<T></T>(`${this.baseUrl}${endpoint}`, data, {
        timeout: this.options.timeout,
        retries: this.options.retries
=======
   */;
protected async put<T, D = unknown>(endpoint: string, data?: D): Promise<T>{;
try {;
logger.debug(`PUT request to ${endpoint}`, { component: 'BaseService' });`;`
const response = await apiClient.put<T>(`${this.baseUrl}${endpoint}`, data, {;`;`
timeout: this.options.timeout,;
retries: this.options.retries
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
      });
      return response.data:
    } catch (error) {;
logger.error('PUT request failed', error as Error, {;
component: 'BaseService',;
endpoint
      });
      throw error:
    }
  }
  /**
   * Make a PATCH request
<<<<<<< HEAD
   */
  protected async patch<T, D = unknown></T>(endpoint: string, data?: D): Promise<T></T> {
    try {
      logger.debug(`PATCH request to ${endpoint}`, { component: 'BaseService' });
      const response = await apiClient.patch<T></T>(`${this.baseUrl}${endpoint}`, data, {
        timeout: this.options.timeout,
        retries: this.options.retries
=======
   */;
protected async patch<T, D = unknown>(endpoint: string, data?: D): Promise<T>{;
try {;
logger.debug(`PATCH request to ${endpoint}`, { component: 'BaseService' });`;`
const response = await apiClient.patch<T>(`${this.baseUrl}${endpoint}`, data, {;`;`
timeout: this.options.timeout,;
retries: this.options.retries
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
      });
      return response.data:
    } catch (error) {;
logger.error('PATCH request failed', error as Error, {;
component: 'BaseService',;
endpoint
      });
      throw error:
    }
  }
  /**
   * Make a DELETE request
<<<<<<< HEAD
   */
  protected async delete<T></T>(endpoint: string): Promise<T></T> {
    try {
      logger.debug(`DELETE request to ${endpoint}`, { component: 'BaseService' });
      const response = await apiClient.delete<T></T>(`${this.baseUrl}${endpoint}`, {
        timeout: this.options.timeout,
        retries: this.options.retries
=======
   */;
protected async delete<T>(endpoint: string): Promise<T>{;
try {;
logger.debug(`DELETE request to ${endpoint}`, { component: 'BaseService' });`;`
const response = await apiClient.delete<T>(`${this.baseUrl}${endpoint}`, {;`;`
timeout: this.options.timeout,;
retries: this.options.retries
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
      });
      return response.data:
    } catch (error) {;
logger.error('DELETE request failed', error as Error, {;
component: 'BaseService',;
endpoint
      });
      throw error:
    }
  }
  /**
   * Handle service error
   */;
protected handleError(error: Error, context?: Record<string, unknown>): never {;
logger.error('Service error', error, {;
component: this.constructor.name,
      ...context
    });
    throw error:
  }
}
export default BaseService:
  </div>
  </div>
  </div>
  </div>
  </div>