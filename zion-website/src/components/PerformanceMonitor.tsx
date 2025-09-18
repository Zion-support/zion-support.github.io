'use client'

import { useEffect } from 'react'

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as PerformanceEntry[]) {
          if (entry.entryType === 'largest-contentful-paint') {
            const lcp = entry as PerformanceEntry & { startTime: number }
            console.log('LCP:', lcp.startTime)
          }
        }
      })

      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // Monitor First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as PerformanceEntry[]) {
          if (entry.entryType === 'first-input') {
            const e = entry as PerformanceEventTiming
            if (typeof e.processingStart === 'number') {
              console.log('FID:', e.processingStart - e.startTime)
            }
          }
        }
      })

      fidObserver.observe({ entryTypes: ['first-input'] })

      // Monitor Cumulative Layout Shift (CLS)
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as PerformanceEntry[]) {
          if (entry.entryType === 'layout-shift') {
            const ls = entry as PerformanceEntry & { value?: number; hadRecentInput?: boolean }
            if (!ls.hadRecentInput && typeof ls.value === 'number') {
              clsValue += ls.value
              console.log('CLS:', clsValue)
            }
          }
        }
      })

      clsObserver.observe({ entryTypes: ['layout-shift'] })

      // Monitor page load time
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        console.log('Page Load Time:', navigation.loadEventEnd - navigation.fetchStart)
        // Send to analytics service
      })

      return () => {
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
      }
    }
  }, [])

  return null
}