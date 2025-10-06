
// Performance monitoring utility
export const performanceMonitor = {
  measureRender: (componentName, renderFn) => {
    const start = performance.now();
    const result = renderFn();
    const end = performance.now();
    console.log(`${componentName} render time: ${end - start}ms`);
    return result;
  },
  
  measureAsync: async (operationName, asyncFn) => {
    const start = performance.now();
    const result = await asyncFn();
    const end = performance.now();
    console.log(`${operationName} execution time: ${end - start}ms`);
    return result;
  },
  
  measureWebVitals: () => {
    if (typeof window !== 'undefined' && 'web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }
  }
};
