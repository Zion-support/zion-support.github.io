import React, { useState, useEffect, useCallback, useRef } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Activity, Zap, Clock, TrendingUp, TrendingDown, 
  AlertTriangle, CheckCircle, X, Settings, RefreshCw,
  BarChart3, Gauge, HardDrive, Wifi, Cpu
} from 'lucide-react',

interface PerformanceMetrics {
  loadTime: number,
  firstContentfulPaint: number,
  largestContentfulPaint: number,
  cumulativeLayoutShift: number,
  firstInputDelay: number,
  timeToInteractive: number,
  memoryUsage?: number,
  networkLatency?: number
}

interface PerformanceMonitorProps {
  showUI?: boolean,
  autoRefresh?: boolean,
  refreshInterval?: number,
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  showUI = false,
  autoRefresh = false,
  refreshInterval = 30000
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToInteractive: 0
  }),
  const [isVisible, setIsVisible] = useState(showUI),
  const [isExpanded, setIsExpanded] = useState(false),
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date()),
  const [isLoading, setIsLoading] = useState(false),
  const [alerts, setAlerts] = useState<string[]>([]),

  const getPerformanceMetrics = useCallback(async (): Promise<PerformanceMetrics> => {
    return new Promise((resolve) => {
      if (typeof window !== 'undefined' && 'performance' in window) {
        // Wait for page to be fully loaded
        if (document.readyState === 'complete') {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming,
          const paintEntries = performance.getEntriesByType('paint'),
          
          const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint'),
          const lcp = performance.getEntriesByType('largest-contentful-paint')[0],
          
          const metrics: PerformanceMetrics = {
            loadTime: navigation.loadEventEnd - navigation.loadEventStart,
            firstContentfulPaint: fcp ? fcp.startTime : 0,
            largestContentfulPaint: lcp ? lcp.startTime : 0,
            cumulativeLayoutShift: 0, // Would need to be calculated from LayoutShift API
            firstInputDelay: 0, // Would need to be calculated from FirstInput API
            timeToInteractive: navigation.domInteractive - navigation.fetchStart
          },

          // Add memory usage if available
          if ('memory' in performance) {
            const memory = (performance as any).memory,
            metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024, // Convert to MB
          }

          resolve(metrics),
        } else {
          // Wait for page to load
          window.addEventListener('load', () => {
            setTimeout(() => getPerformanceMetrics().then(resolve), 100),
          }),
        }
      } else {
        resolve({
          loadTime: 0,
          firstContentfulPaint: 0,
          largestContentfulPaint: 0,
          cumulativeLayoutShift: 0,
          firstInputDelay: 0,
          timeToInteractive: 0
        }),
      }
    }),
  }, []),

  const refreshMetrics = useCallback(async () => {
    setIsLoading(true),
    try {
      const newMetrics = await getPerformanceMetrics(),
      setMetrics(newMetrics),
      setLastUpdate(new Date()),
      
      // Check for performance issues and add alerts
      const newAlerts: string[] = [],
      if (newMetrics.loadTime > 3000) {
        newAlerts.push('Page load time is slow (>3s)')
      }
      if (newMetrics.firstContentfulPaint > 2000) {
        newAlerts.push('First contentful paint is slow (>2s)'),
      }
      if (newMetrics.largestContentfulPaint > 4000) {
        newAlerts.push('Largest contentful paint is slow (>4s)'),
      }
      
      setAlerts(newAlerts),
    } catch (error) {
      console.error('Failed to get performance metrics:', error),
    } finally {
      setIsLoading(false),
    }
  }, [getPerformanceMetrics]),

  // Auto-refresh functionality
  useEffect(() => {
    if (showUI) {
      refreshMetrics(),
    }
  }, [showUI, refreshMetrics]),

  useEffect(() => {
    if (autoRefresh && showUI) {
      const interval = setInterval(refreshMetrics, refreshInterval),
      return () => clearInterval(interval),
    }
  }, [autoRefresh, showUI, refreshInterval, refreshMetrics]),

  const getPerformanceScore = (): number => {
    let score = 100,
    
    if (metrics.loadTime > 3000) score -= 20,
    if (metrics.firstContentfulPaint > 2000) score -= 15,
    if (metrics.largestContentfulPaint > 4000) score -= 15,
    if (metrics.timeToInteractive > 5000) score -= 20,
    
    return Math.max(0, score),
  },

  const getScoreColor = (score: number): string => {
    if (score >= 90) return 'text-green-400',
    if (score >= 70) return 'text-yellow-400',
    return 'text-red-400'
  },

  const getScoreIcon = (score: number) => {
    if (score >= 90) return <CheckCircle className="w-5 h-5 text-green-400" />,
    if (score >= 70) return <AlertTriangle className="w-5 h-5 text-yellow-400" />,
    return <AlertTriangle className="w-5 h-5 text-red-400" />
  },

  const formatTime = (ms: number): string => {
    if (ms < 1000) return `${Math.round(ms)}ms`,
    return `${(ms / 1000).toFixed(2)}s`,
  },

  // Format time values
  const formatTime = (ms: number): string => {
    if (ms === 0) return 'N/A',
    if (ms < 1000) return `${Math.round(ms)}ms`,
    return `${(ms / 1000).toFixed(2)}s`,
  },

  // Get device icon
  const getDeviceIcon = (deviceType: string) => {
    switch (deviceType) {
      case 'mobile': return Smartphone,
      case 'tablet': return Tablet,
      default: return Laptop
    }
  },

  const getPerformanceScore = () => {
    let score = 0,
    let totalMetrics = 0,

    // FCP scoring (0-100)
    if (metrics.fcp !== null) {
      totalMetrics++,
      if (metrics.fcp < 1800) score += 100,
      else if (metrics.fcp < 3000) score += 75,
      else if (metrics.fcp < 4000) score += 50,
      else score += 25,
    }

    // LCP scoring (0-100)
    if (metrics.lcp !== null) {
      totalMetrics++,
      if (metrics.lcp < 2500) score += 100,
      else if (metrics.lcp < 4000) score += 75,
      else if (metrics.lcp < 6000) score += 50,
      else score += 25,
    }

    // FID scoring (0-100)
    if (metrics.fid !== null) {
      totalMetrics++,
      if (metrics.fid < 100) score += 100,
      else if (metrics.fid < 300) score += 75,
      else if (metrics.fid < 500) score += 50,
      else score += 25,
    }

    // CLS scoring (0-100)
    if (metrics.cls !== null) {
      totalMetrics++,
      if (metrics.cls < 0.1) score += 100,
      else if (metrics.cls < 0.25) score += 75,
      else if (metrics.cls < 0.4) score += 50,
      else score += 25,
    }

    return totalMetrics > 0 ? Math.round(score / totalMetrics) : 0,
  },

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null,
  }

  const performanceScore = getPerformanceScore(),

  const performanceStatus = metrics ? getPerformanceStatus(performanceScore) : null,
  const StatusIcon = performanceStatus?.icon || Activity,

const PerformanceMonitor: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">PerformanceMonitor</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  )
},

export default PerformanceMonitor,
