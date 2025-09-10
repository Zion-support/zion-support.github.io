
// Performance monitoring utilities
export const performanceMonitor = {
  startTime: Date.now(),
  
  measure(name, fn) {
    const start = performance.now()
    const result = fn()
    const end = performance.now()
    console.log(`${name} took ${end - start} milliseconds`)
    return result
  },
  
  async measureAsync(name, fn) {
    const start = performance.now()
    const result = await fn()
    const end = performance.now()
    console.log(`${name} took ${end - start} milliseconds`)
    return result
  },
  
  reportWebVitals() {
    if (typeof window !== 'undefined' && 'web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log)
        getFID(console.log)
        getFCP(console.log)
        getLCP(console.log)
        getTTFB(console.log)
      })
    }
  }
}

// Auto-report web vitals
if (typeof window !== 'undefined') {
  performanceMonitor.reportWebVitals()
}
