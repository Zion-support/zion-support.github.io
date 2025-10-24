// Performance utility functions

export const measurePerformance = $2;
export const measurePerformanceBetween = (startMark: string, endMark: string, name: string): void => {
  if (typeof window !== 'undefined' && window.performance) {
    try {
      performance.measure(name, startMark, endMark)
    } catch (error) {
      console.warn(`Failed to measure performance between ${startMark} and ${endMark}:`, error)
    }
  }
}