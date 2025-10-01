/**
 * Code Optimizer Utility
 * Provides runtime optimizations and performance improvements
 */

/**
 * Debounce function to limit execution rate
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function to limit execution frequency
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false;
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Memoization for expensive computations
 */
export function memoize<T extends (...args: any[]) => any>(
  func: T,
  keyGenerator?: (...args: Parameters<T>) => string
): T {
  const cache = new Map<string, ReturnType<T>>();
  
  return ((...args: Parameters<T>) => {
    const key = keyGenerator ? keyGenerator(...args) : JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key)!;
    }
    
    const result = func(...args);
    cache.set(key, result);
    return result;
  }) as T;
}

/**
 * Async operation queue to prevent overwhelming the browser
 */
export class AsyncQueue {
  private queue: Array<() => Promise<any>> = [];
  private running: boolean = false;
  private concurrency: number;

  constructor(concurrency: number = 3) {
    this.concurrency = concurrency;
  }

  /**
   * Add task to queue
   */
  add<T>(task: () => Promise<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.queue.push(async () => {
        try {
          const result = await task();
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
      
      this.process();
    });
  }

  /**
   * Process queued tasks
   */
  private async process(): Promise<void> {
    if (this.running || this.queue.length === 0) {
      return;
    }

    this.running = true;

    const tasks: Array<Promise<any>> = [];
    
    while (this.queue.length > 0 && tasks.length < this.concurrency) {
      const task = this.queue.shift();
      if (task) {
        tasks.push(task());
      }
    }

    await Promise.allSettled(tasks);

    this.running = false;

    if (this.queue.length > 0) {
      this.process();
    }
  }
}

/**
 * Request animation frame helper
 */
export function rafThrottle<T extends (...args: any[]) => any>(
  func: T
): (...args: Parameters<T>) => void {
  let rafId: number | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    if (rafId) {
      cancelAnimationFrame(rafId);
    }
    
    rafId = requestAnimationFrame(() => {
      func(...args);
      rafId = null;
    });
  };
}

/**
 * Batch updates to reduce re-renders
 */
export class BatchUpdater {
  private updates: Map<string, any> = new Map();
  private scheduled: boolean = false;
  private callback: (updates: Map<string, any>) => void;

  constructor(callback: (updates: Map<string, any>) => void) {
    this.callback = callback;
  }

  /**
   * Schedule an update
   */
  update(key: string, value: any): void {
    this.updates.set(key, value);
    
    if (!this.scheduled) {
      this.scheduled = true;
      requestAnimationFrame(() => {
        this.flush();
      });
    }
  }

  /**
   * Flush all pending updates
   */
  private flush(): void {
    this.callback(new Map(this.updates));
    this.updates.clear();
    this.scheduled = false;
  }
}

/**
 * Efficient array operations
 */
export const arrayUtils = {
  /**
   * Remove duplicates from array
   */
  unique<T>(array: T[]): T[] {
    return Array.from(new Set(array));
  },

  /**
   * Chunk array into smaller arrays
   */
  chunk<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  },

  /**
   * Flatten nested arrays
   */
  flatten<T>(array: any[]): T[] {
    return array.reduce(
      (acc, val) => acc.concat(Array.isArray(val) ? arrayUtils.flatten(val) : val),
      []
    );
  },
};

/**
 * Object utilities
 */
export const objectUtils = {
  /**
   * Deep clone an object
   */
  deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  },

  /**
   * Check if two objects are equal
   */
  isEqual(obj1: any, obj2: any): boolean {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  },

  /**
   * Pick specific properties from object
   */
  pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const result = {} as Pick<T, K>;
    keys.forEach(key => {
      if (key in obj) {
        result[key] = obj[key];
      }
    });
    return result;
  },
};

/**
 * Performance measurement utility
 */
export function measurePerformance<T>(
  fn: () => T,
  label: string = 'Operation'
): T {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  
  console.log(`${label} took ${(end - start).toFixed(2)}ms`);
  
  return result;
}

/**
 * Async performance measurement
 */
export async function measureAsyncPerformance<T>(
  fn: () => Promise<T>,
  label: string = 'Async Operation'
): Promise<T> {
  const start = performance.now();
  const result = await fn();
  const end = performance.now();
  
  console.log(`${label} took ${(end - start).toFixed(2)}ms`);
  
  return result;
}
