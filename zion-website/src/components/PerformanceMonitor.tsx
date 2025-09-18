'use client'

import { useEffect } from 'react'

interface PerformanceMetrics {
  loadTime: number
  domContentLoaded: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  firstInputDelay: number
  cumulativeLayoutShift: number
  timeToInteractive: number
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production and when performance API is available
    if (process.env.NODE_ENV !== 'production' || typeof window === 'undefined' || !('performance' in window)) {
      return
    }

    const collectMetrics = () => {
      const metrics: PerformanceMetrics = {
        loadTime: 0,
        domContentLoaded: 0,
        firstContentfulPaint: 0,
        largestContentfulPaint: 0,
        firstInputDelay: 0,
        cumulativeLayoutShift: 0,
        timeToInteractive: 0
      }

      // Basic timing metrics
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        metrics.loadTime = navigation.loadEventEnd - navigation.fetchStart
        metrics.domContentLoaded = navigation.domContentLoadedEventEnd - navigation.fetchStart
      }

      // Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              metrics.firstContentfulPaint = entry.startTime
            }
          }
          
          if (entry.entryType === 'largest-contentful-paint') {
            metrics.largestContentfulPaint = entry.startTime
          }
          
          if (entry.entryType === 'first-input') {
            metrics.firstInputDelay = (entry as any).processingStart - entry.startTime
          }
          
          if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
            metrics.cumulativeLayoutShift += (entry as any).value
          }
        }
      })

      // Observe different types of performance entries
      try {
        observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] })
      } catch (error) {
        console.warn('Performance Observer not fully supported:', error)
      }

      // Send metrics to analytics endpoint
      const sendMetrics = () => {
        if (metrics.loadTime > 0 || metrics.firstContentfulPaint > 0) {
          fetch('/api/analytics/performance', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...metrics,
              url: window.location.href,
              timestamp: new Date().toISOString(),
              userAgent: navigator.userAgent,
              connection: (navigator as any).connection?.effectiveType || 'unknown'
            }),
          }).catch(err => console.error('Failed to send performance metrics:', err))
        }
      }

      // Send metrics after page load
      if (document.readyState === 'complete') {
        setTimeout(sendMetrics, 1000)
      } else {
        window.addEventListener('load', () => {
          setTimeout(sendMetrics, 1000)
        })
      }

      // Cleanup observer after 10 seconds
      setTimeout(() => {
        observer.disconnect()
      }, 10000)
    }

    // Start collecting metrics
    collectMetrics()
  }, [])

  return null // This component doesn't render anything
}