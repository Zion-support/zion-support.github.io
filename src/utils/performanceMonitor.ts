// Performance monitoring utility
export const performanceMonitor = {
  measureRender: (componentName, renderFn) => {
    const start = performance.now();
    const result = renderFn();
    const end = performance.now();
    console.log(`${componentName} render time: ${end - start}ms`);
    return result;
  },
  
  measureAsync: async (name, asyncFn) => {
    const start = performance.now();
    const result = await asyncFn();
    const end = performance.now();
    console.log(`${name} execution time: ${end - start}ms`);
    return result;
  }
};