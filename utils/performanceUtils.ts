// Performance utility functions
<<<<<<< HEAD
export const performanceUtils = {
  // Add performance utility functions here
=======

export const measurePerformance = (name: string, fn: () => void): void => {
  const start = performance.now()
  fn()
  const end = performance.now()
  console.log(`${name} took ${end - start} milliseconds`)
}

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => func(...args), wait)
  }
}

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

export const getPerformanceMetrics = (): PerformanceEntry[] => {
  if (typeof window === 'undefined' || !window.performance) {
    return []
  }
  
  return performance.getEntriesByType('measure')
}

export const markPerformance = (name: string): void => {
  if (typeof window !== 'undefined' && window.performance) {
    performance.mark(name)
  }
}

export const measurePerformanceBetween = (startMark: string, endMark: string, name: string): void => {
  if (typeof window !== 'undefined' && window.performance) {
    try {
      performance.measure(name, startMark, endMark)
    } catch (error) {
      console.warn(`Failed to measure performance between ${startMark} and ${endMark}:`, error)
    }
  }
>>>>>>> cursor/fix-errors-and-merge-to-main-f44d
}