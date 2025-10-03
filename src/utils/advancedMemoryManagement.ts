// Advanced memory management
export const memoryManager = {
  // Cleanup intervals
  cleanupIntervals: new Set<NodeJS.Timeout>(),
  
  // Add interval for cleanup
  addInterval: (interval: NodeJS.Timeout) => {
    memoryManager.cleanupIntervals.add(interval);
  },
  
  // Clear all intervals
  clearAllIntervals: () => {
    memoryManager.cleanupIntervals.forEach(interval => {
      clearInterval(interval);
    });
    memoryManager.cleanupIntervals.clear();
  },
  
  // Memory usage monitoring
  getMemoryUsage: () => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      return (performance as any).memory;
    }
    return null;
  },
  
  // Garbage collection hint
  suggestGC: () => {
    if (typeof window !== 'undefined' && 'gc' in window) {
      (window as any).gc();
    }
  }
};

export default memoryManager;