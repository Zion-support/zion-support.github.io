
// Performance monitoring utilities
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start} milliseconds`);
};

export const lazyLoad = (importFn: () => Promise<any>) => {
  return React.lazy(importFn);
};

export const memo = React.memo;
