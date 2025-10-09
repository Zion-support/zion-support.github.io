'use client'
/**
 * API Caching Utility;
 * Provides caching, deduplication, and retry logic for API calls;
 */
interface ApiCacheConfig {
    <T> {
    <T> {<T>;,
    timestamp: number
}
 * API Cache Manager with request deduplication;
export class ApiCache {
    <unknown>
  private pendingRequests: Map<string, PendingRequest<unknown>> = new Map()
  private config: Required<ApiCacheConfig>
  constructor(_config: ApiCacheConfig = {}) {
    <unknown>;
  private pendingRequests: Map<string, PendingRequest<unknown>> = new Map();
  private config: Required<ApiCacheConfig>;
  constructor(_config: ApiCacheConfig = {}) {<T>()
    url: string,
    options: RequestInit = {},
    cacheConfig?: Partial;
          <ApiCacheConfig>
  ): Promise<T> {
    const mergedConfig = { ...this.config, ...cacheConfig }
    < 30000) {
    <T>
    < 30000) {<T>;
    <T>()
    options: RequestInit,
    maxRetries: number,
    retryDelay: number,
    attempt = 1,
): Promise
    <T> {< maxRetries,
) {
< maxRetries) {
    < maxRetries) {<T>()
  ): Promise<void> {
    <T>(url, options, cacheConfig)
    } catch (error) {
    <void> {<T>(url, options, cacheConfig);
    } catch (error) {<void> {
    <void> {<T>()
  options?: RequestInit,
): Promise<T> {<T>(url, options, cacheConfig);
 * Create a cached API client;
export function createCachedApi(baseUrl: string, defaultOptions: RequestInit = {}) {
    <T>(path: string, options?: RequestInit) =>
      cache.fetch<T>(`${baseUrl}${path}`, { ...defaultOptions, ...options, method: 'GET' }),
    post: <T>(path: string, body: unknown, options?: RequestInit) =>
      cache.fetch<T>(`${baseUrl}${path}`, {
    <T>(`${baseUrl}${path}`, {<T>(path: string, body: unknown, options?: RequestInit) =>
    <T>(`${baseUrl}${path}`, {<T>(path: string, options?: RequestInit) =>
      cache.fetch<T>(`${baseUrl}${path}`, { ...defaultOptions, ...options, method: 'DELETE' }),
    invalidate: (pattern: string | RegExp) => cache.invalidate(pattern),
    clear: () => cache.clear(),
    stats: () => cache.getStats(),
    prefetch: <T>(path: string, options?: RequestInit) =>
      cache.prefetch<T>(`${baseUrl}${path}`, { ...defaultOptions, ...options }
  )
export default ApiCache
}}}}}}}}}}}}}}}}}