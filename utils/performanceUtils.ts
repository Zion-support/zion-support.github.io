<<<<<<< HEAD
// Performance utilities

export const performanceUtils = {
  measure: (name: string, fn: () => void) => {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
  }
};

export default performanceUtils;
=======
// Performance utility functions()
export const performanceUtils = {
  // Add performance utility functions here()
}
>>>>>>> origin/main
