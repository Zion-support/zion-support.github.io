'use client'

import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  lcp: number
  fid: number
  cls: number
  loadTime: number
  memoryUsage?: number
  connectionType?: string
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)

  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      let lcpValue = 0
      let fidValue = 0
      let clsValue = 0

      // Monitor Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as PerformanceEntry[]) {
          if (entry.entryType === 'largest-contentful-paint') {
            const lcp = entry as PerformanceEntry & { startTime: number }
            lcpValue = lcp.startTime
            console.log('LCP:', lcpValue)
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
              fidValue = e.processingStart - e.startTime
              console.log('FID:', fidValue)
            }
          }
        }
      })

      fidObserver.observe({ entryTypes: ['first-input'] })

      // Monitor Cumulative Layout Shift (CLS)
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

      // Monitor page load time and connection
      const collectMetrics = () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        const loadTime = navigation.loadEventEnd - navigation.fetchStart
        
        // Get connection info
        const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
        
        // Get memory usage if available
        const memory = (performance as any).memory
        
        const performanceData: PerformanceMetrics = {
          lcp: lcpValue,
          fid: fidValue,
          cls: clsValue,
          loadTime,
          connectionType: connection?.effectiveType || 'unknown',
          memoryUsage: memory ? memory.usedJSHeapSize : undefined
        }
        
        setMetrics(performanceData)
        console.log('Performance Metrics:', performanceData)
        
        // Send to analytics service
        if (process.env.NODE_ENV === 'production') {
          fetch('/api/analytics/performance', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(performanceData),
          }).catch(err => console.error('Failed to send performance metrics:', err))
        }
      }

      window.addEventListener('load', collectMetrics)
      
      // Also collect after a delay to ensure all metrics are captured
      setTimeout(collectMetrics, 3000)

      return () => {
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
        window.removeEventListener('load', collectMetrics)
      }
    }
  }, [])

  // Performance debug panel (development only)
  if (process.env.NODE_ENV === 'development' && metrics) {
    return (
      <div style={{
        position: 'fixed',
        bottom: 0,
        right: 0,
        background: 'rgba(0,0,0,0.9)',
        color: 'white',
        padding: '12px',
        fontSize: '11px',
        fontFamily: 'monospace',
        zIndex: 9999,
        borderTopLeftRadius: '8px',
        minWidth: '200px'
      }}>
        <div style={{ fontWeight: 'bold', marginBottom: '8px', color: '#60a5fa' }}>
          Performance Metrics
        </div>
        <div>LCP: {metrics.lcp.toFixed(0)}ms</div>
        <div>FID: {metrics.fid.toFixed(0)}ms</div>
        <div>CLS: {metrics.cls.toFixed(3)}</div>
        <div>Load: {metrics.loadTime.toFixed(0)}ms</div>
        <div>Connection: {metrics.connectionType}</div>
        {metrics.memoryUsage && (
          <div>Memory: {(metrics.memoryUsage / 1024 / 1024).toFixed(1)}MB</div>
        )}
      </div>
    )
  }

  return null
}