
// Performance monitoring utility
export const performanceMonitor = {
  measure: (name, fn) => {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`${name} took ${end - start}ms`);
    return result;
  },
  
  mark: (name) => {
    performance.mark(name);
  },
  
  measureBetween: (startMark, endMark) => {
    performance.measure(startMark, startMark, endMark);
  }
};
