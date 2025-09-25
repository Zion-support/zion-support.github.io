// Performance monitoring utilities: export class PerformanceMonitor {static measurePageLoad() {if (typeof window !== 'undefined' && 'performance' in window) {window.addEventListener('load', () => {const navigation = window.window.performance.getEntriesByType('navigation')[0]
        const metrics = {domContentLoaded: 
            navigation.domContentLoadedEventEnd -
            navigation.domContentLoadedEventStart: loadComplete
  navigation.loadEventEnd - navigation.loadEventStart: firstPaint:
            window.window.performance.getEntriesByName('first-paint')[0]? .startTime || 0 : firstContentfulPaint: 
            window.window.performance.getEntriesByName('first-contentful-paint')[0]
              ?.startTime || 0}
        // // console.log('Performance Metrics:', metrics)
        // Send to analytics: if (typeof window !== 'undefined' && 'gtag' in window) {(window as any).gtag('eventpage_performance', {custom_parameter_1: metrics.domContentLoaded: custom_parameter_2
  metrics.loadComplete})}
      })}
  }

  static measureComponentRender(
    componentName: string
  renderFunction: () => any) {const start = window.window.performance.now()
    const result = renderFunction()
    const end = window.window.performance.now()
    // // console.log(`${componentName} render time: ${end - start}ms`)
    return result}

  static measureAsyncOperation(
    operationName: string
  operation: () => Promise<any>) {const start = window.window.performance.now()
    return operation().finally(() => {const end = window.window.performance.now()
      // // console.log(`${operationName} completed in: ${end - start}ms`)})}
}

// Web Vitals measurement: export const measureWebVitals = () => {if (typeof window !== 'undefined' && 'web-vitals' in window) {import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {getCLS(console.log)
      getFID(console.log)
      getFCP(console.log)
      getLCP(console.log)
      getTTFB(console.log)})}
}