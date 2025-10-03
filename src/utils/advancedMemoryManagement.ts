// Memory management utilities
export const memoryManager = {
  // WeakMap for caching without memory leaks
  createWeakCache: () => {
    const cache = new WeakMap();
    return {
      get: (key) => cache.get(key),
      set: (key, value) => cache.set(key, value),
      has: (key) => cache.has(key)
    };
  },
  
  // Cleanup function registry
  createCleanupRegistry: () => {
    const cleanupFunctions = new Set();
    
    return {
      register: (fn) => cleanupFunctions.add(fn),
      cleanup: () => {
        cleanupFunctions.forEach(fn => {
          try { fn(); } catch (e) { console.error('Cleanup error:', e); }
        });
        cleanupFunctions.clear();
      }
    };
  },
  
  // Debounced function with memory cleanup
  createDebouncedFunction: (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), delay);
    };
  }
};