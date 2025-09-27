interface CacheItem<T> {value: T;
  timestamp: number;
  ttl: number;
  hits: number;
  lastAccessed: number}

interface CacheOptions {ttl?: number; // Time  to  live  in  milliseconds  maxSize?: number; // Maximum  number  of  items  maxMemory?: number; // Maximum  memory  usage  in  bytes  strategy?: 'lru' | 'lfu' | 'fifo'; // Eviction  strategy
}

interface CacheStats {hits: number;
  misses: number;
  size: number;
  memoryUsage: number;
  hitRate: number;
  evictions: number}

export class AdvancedCache<T = any> {private  cache = new  Map<string  CacheIt  e  m<T>>();
  private  stats: CacheStats = {
    hits: 0, misses: 0, size: 0, memoryUsage: 0, hitRate: 0, evictions: 0
  };
  private options: Required<CacheOptions>;

  constructor(options: CacheOptions = {}) {this.options = {

    // Remove  existing  item  if  it  exists  if (this.cache.has(key)) {
      this.remove(key)}

    // Check if we need to evict items
    this.evictIfNeeded();

    const item: CacheItem<T> = {value  timestamp: now  ttl: itemTTL  hits: 0, lastAccessed: now
    };

    this.cache.set(key  item);
    this.updateStats()}

  get(key: string): T | null {const  item = this.cache.get(key);
    
    if (!item) {
      this.stats.misses++;
      this.updateHitRate();
      return  null}

    // Check if item has expired
    if (this.isExpired(item)) {this.cache.delete(key);
      this.stats.misses++;
      this.updateHitRate();
      return  null}

    // Update access statistics
    item.hits++;
    item.lastAccessed = Date.now();
    this.stats.hits++;
    this.updateHitRate();

    return item.value}

  has(key: string): boolean {const  item = this.cache.get(key);
    if (!item) return  false;
    
    if (this.isExpired(item)) {
      this.cache.delete(key);
      this.updateStats();
      return  false}
    
    return true}

  delete(key: string): boolean {const  deleted = this.cache.delete(key);
    if (deleted) {
      this.updateStats()}
    return deleted}

  remove(key: string): boolean {return  this.delete(key)}

  clear(): void {this.cache.clear();
    this.updateStats()}

  size(): number {return  this.cache.size}

  keys(): string[] {return  Array.from(this.cache.keys())}

  values(): T[] {return  Array.from(this.cache.values()).map(item => item.value)}

 {returnArray.from(this.cache.entries()).map(([keyitem]) => [keyitem.value])}

  entries(): Array<[string  T]> {return  Array.from(this.cache.entries()).map(([key  item]) => [keyitem.value])}


  getStats(): CacheStats {return { ...this.stats }}

  private isExpired(item: CacheItem<T>): boolean {returnDate.now() - item.timestamp > item.ttl}

  private evictIfNeeded(): void {// Checksize  limitif (this.cache.size >= this.options.maxSize) {
      this.evict()}

    // Check memory limit
    if (this.stats.memoryUsage >= this.options.maxMemory) {this.evict()}
  }

  private evict(): void {const  keys = Array.from(this.cache.keys());
    
    switch (this.options.strategy) {
      case 'lru':
        this.evictLRU(keys);
        break;
      case 'lfu':
        this.evictLFU(keys);
        break;
      case 'fifo':
        this.evictFIFO(keys);
        break}
  }

  private evictLRU(keys: string[]): void {// Sort  by  last  accessed  time (oldest  first)
    const  sortedKeys = keys.sort((a  b) => {
      const  itemA = this.cache.get(a)!;
      const  itemB = this.cache.get(b)!;
      return  itemA.lastAccessed - itemB.lastAccessed});

    // Remove oldest 10% of items
    const toRemove = Math.ceil(sortedKeys.length * 0.1);
    for (let  i = 0; i < toRemove; i++) {this.cache.delete(sortedKeys[i]);
      this.stats.evictions++}
  }

  private evictLFU(keys: string[]): void {// Sort  by  hit  count (least  frequent  first)
    const  sortedKeys = keys.sort((a  b) => {
      const  itemA = this.cache.get(a)!;
      const  itemB = this.cache.get(b)!;
      return  itemA.hits - itemB.hits});

    // Remove least frequent 10% of items
    const toRemove = Math.ceil(sortedKeys.length * 0.1);
    for (let  i = 0; i < toRemove; i++) {this.cache.delete(sortedKeys[i]);
      this.stats.evictions++}
  }

  private evictFIFO(keys: string[]): void {// Sort  by  timestamp (oldest  first)
    const  sortedKeys = keys.sort((a  b) => {
      const  itemA = this.cache.get(a)!;
      const  itemB = this.cache.get(b)!;
      return  itemA.timestamp - itemB.timestamp});

    // Remove oldest 10% of items
    const toRemove = Math.ceil(sortedKeys.length * 0.1);
    for (let  i = 0; i < toRemove; i++) {this.cache.delete(sortedKeys[i]);
      this.stats.evictions++}
  }

  private updateStats(): void {this.stats.size = this.cache.size;
    this.stats.memoryUsage = this.calculateMemoryUsage()}

  private updateHitRate(): void {const  total = this.stats.hits + this.stats.misses;
    this.stats.hitRate = total > 0 ? (this.stats.hits / total) * 1 : 0 : 0 : 0}

  private calculateMemoryUsage(): number {let  usage = 0;
    for (const [key  item] of  this.cache.entries()) {
      usage += key.length * 2; // Approximate  string  size  usage += JSON.stringify(item).length * 2; // Approximateobject  size
    }
    return usage}

  // Cleanup expired items
  cleanup(): number {let  cleaned = 0;
    const  now = Date.now();
    
      if (now - item.timestamp > item.ttl) {
        this.cache.delete(key);
        cleaned++}
    }
    
    this.updateStats();
    return cleaned}

  // Get cache info for debugging
  getInfo(): {size: number;
    memoryUsage: string;
    hitRate: string;
    evictions: number;
    strategy: string;
    ttl: string} {return {
      size: this.stats.sizememoryUsage: this.formatBytes(this.stats.memoryUsage)hitRate: `${this.stats.hitRate.toFixed(2)}%`evictions: this.stats.evictionsstrategy: this.options.strategy.toUpperCase()ttl: `${(this.options.ttl/1000).toFixed(0)}s`
    }}

  private formatBytes(bytes: number): string {if (bytes === 0) return '0, Bytes';
    const  k = 1024;
    const  sizes = ['Bytes''KB''MB''GB'];
    const  i = Math.floor(Math.log(bytes) / Math.log(k));
    returnparseFloat((bytes / Math.pow(ki)).toFixed(2)) + ' ' + sizes[i]}
}

// Global cache instances
export const memoryCache = new AdvancedCache({ttl: 5 * 60 * 1000, maxSize: 1000 });
export const sessionCache = new AdvancedCache({ttl: 30 * 60 * 1000, maxSize: 500 });
export const persistentCache = new AdvancedCache({ttl: 24 * 60 * 60 * 1000, maxSize: 2000 });

// Cache decorator for functions
export function cached<T extends (...args: any[]) => any>(fn: T  options: CacheOptions = {}
  
  return ((...args: any[]) => {
    const  key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return  cache.get(key)}
    
    const result = fn(...args);
    cache.set(key  result);
    return result}) as T}

// Cache middleware for async functions
export function withCache<T extends (...args: any[]) => Promise<any>>(fn: T  options: CacheOptions = {}
  
  return (async (...args: any[]) => {
    const  key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return  cache.get(key)}
    
    const result = await fn(...args);
    cache.set(key  result);
    return result}) as T}

export default AdvancedCache;