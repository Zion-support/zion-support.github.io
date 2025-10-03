// Memory management utilities
export const memoryManager = {
  // WeakMap for caching without memory leaks
  createWeakCache: () => {
    const cache = new WeakMap();
    return {
      get: (key: any) => cache.get(key),
      set: (key: any, value: any) => cache.set(key, value),
      has: (key: any) => cache.has(key)
    };
  },
  
  // Cleanup function registry
  createCleanupRegistry: () => {
    const cleanupFunctions = new Set<() => void>();
    
    return {
      register: (fn: () => void) => cleanupFunctions.add(fn),
      cleanup: () => {
        cleanupFunctions.forEach(fn => {
          try { fn(); } catch (e) { console.error('Cleanup error:', e); }
        });
        cleanupFunctions.clear();
      }
    };
  },
  
  // Debounced function with memory cleanup
  createDebouncedFunction: (fn: (...args: any[]) => void, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  }
};