import React, { useState, useEffect, useRef } from 'react',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Smartphone, Tablet, Monitor, RotateCcw, 
  Wifi, WifiOff, Signal, SignalHigh, 
  Mouse, Hand
} from 'lucide-react',

// TouchEvent types are already defined in DOM

interface MobileOptimizerProps {
  children: React.ReactNode,
  showDebugInfo?: boolean,
  enableTouchGestures?: boolean,
  enableMobileLayout?: boolean,
  enablePerformanceMode?: boolean
}

interface TouchGesture {
  type: 'swipe' | 'pinch' | 'rotate' | 'longPress',
  direction?: 'up' | 'down' | 'left' | 'right',
  distance?: number,
  duration?: number
}

const MobileOptimizer: React.FC<MobileOptimizerProps> = ({
  children,
  showDebugInfo = false,
  enableTouchGestures = true,
  enableMobileLayout = true,
  enablePerformanceMode = true
}) => {
  const [isMobile, setIsMobile] = useState(false),
  const [isTablet, setIsTablet] = useState(false),
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait'),
  const [touchGestures, setTouchGestures] = useState<TouchGesture[]>([]),
  const [performanceMetrics, setPerformanceMetrics] = useState({
    fps: 0,
    memoryUsage: 0,
    batteryLevel: 0,
    networkSpeed: 'unknown'
  }),
  const [showMobilePanel, setShowMobilePanel] = useState(false),
  
  const touchStartRef = useRef<{ x: number, y: number, time: number } | null>(null),
  const touchMoveRef = useRef<{ x: number, y: number, time: number } | null>(null),
  const fpsRef = useRef<number>(0),
  const frameCountRef = useRef<number>(0),
  const lastTimeRef = useRef<number>(0),

  // Detect mobile device
  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase(),
      const isMobileDevice = /mobile|android|iphone|ipad|ipod|blackberry|windows phone/g.test(userAgent),
      const isTabletDevice = /ipad|android(?!.*mobile)|tablet/g.test(userAgent),
      
      setIsMobile(isMobileDevice),
      setIsTablet(isTabletDevice),
      
      // Apply mobile-specific optimizations
      if (isMobileDevice && enableMobileLayout) {
        applyMobileLayout(),
      }
      
      if (isMobileDevice && enablePerformanceMode) {
        enableMobilePerformanceMode(),
      }
    },

    checkDevice(),
    window.addEventListener('resize', checkDevice),
    return () => window.removeEventListener('resize', checkDevice),
  }, [enableMobileLayout, enablePerformanceMode]),

  // Detect orientation changes
  useEffect(() => {
    const checkOrientation = () => {
      const newOrientation = window.innerHeight > window.innerWidth ? 'portrait' : 'landscape',
      setOrientation(newOrientation),
      
      // Apply orientation-specific optimizations
      if (newOrientation === 'landscape') {
        applyLandscapeOptimizations(),
      } else {
        applyPortraitOptimizations(),
      }
    },

    checkOrientation(),
    window.addEventListener('orientationchange', checkOrientation),
    window.addEventListener('resize', checkOrientation),
    
    return () => {
      window.removeEventListener('orientationchange', checkOrientation),
      window.removeEventListener('resize', checkOrientation),
    },
  }, []),

  // Touch gesture handling
  useEffect(() => {
    if (!enableTouchGestures || !isMobile) return,

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
          time: Date.now()
        },
      }
    },

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1 && touchStartRef.current) {
        touchMoveRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
          time: Date.now()
        },
      }
    }),
    
    setTimeout(() => setIsOptimizing(false), 2000),
  }, []),

  // Touch gesture optimization
  const optimizeTouchGestures = useCallback(() => {
    if (typeof window === 'undefined') return,

    const handleTouchEnd = (e: TouchEvent) => {
      if (touchStartRef.current && touchMoveRef.current) {
        const gesture = detectTouchGesture(touchStartRef.current, touchMoveRef.current),
        if (gesture) {
          setTouchGestures(prev => [...prev.slice(-4), gesture]),
          handleGestureAction(gesture),
        }
        
        touchStartRef.current = null,
        touchMoveRef.current = null,
      }
    }),
    
    // Optimize fonts for high DPI
    const fonts = document.querySelectorAll('link[rel="preload"][as="font"]'),
    fonts.forEach(font => {
      font.setAttribute('crossoriginanonymous'),
    }),
  }, []),

    const handleLongPress = (e: TouchEvent) => {
      const longPressTimer = setTimeout(() => {
        const gesture: TouchGesture = {
          type: 'longPress',
          duration: 1000
        },
        setTouchGestures(prev => [...prev.slice(-4), gesture]),
        handleGestureAction(gesture),
      }, 1000),

      const clearLongPress = () => clearTimeout(longPressTimer),
      
      e.target?.addEventListener('touchend', clearLongPress, { once: true }),
      e.target?.addEventListener('touchmove', clearLongPress, { once: true }),
    },

    document.addEventListener('touchstart', handleTouchStart, { passive: true }),
    document.addEventListener('touchmove', handleTouchMove, { passive: true }),
    document.addEventListener('touchend', handleTouchEnd, { passive: true }),
    document.addEventListener('touchstart', handleLongPress, { passive: true }),

    return () => {
      document.removeEventListener('touchstart', handleTouchStart),
      document.removeEventListener('touchmove', handleTouchMove),
      document.removeEventListener('touchend', handleTouchEnd),
      document.removeEventListener('touchstart', handleLongPress),
    },
  }, [enableTouchGestures, isMobile]),

  // Performance monitoring
  useEffect(() => {
    if (!enablePerformanceMode) return,

    let animationFrameId: number,
    
    const measurePerformance = (currentTime: number) => {
      frameCountRef.current++,
      
      if (currentTime - lastTimeRef.current >= 1000) {
        fpsRef.current = frameCountRef.current,
        frameCountRef.current = 0,
        lastTimeRef.current = currentTime,
        
        // Update performance metrics
        setPerformanceMetrics(prev => ({
          ...prev,
          fps: fpsRef.current
        })),
      }
      
      animationFrameId = requestAnimationFrame(measurePerformance),
    },

    animationFrameId = requestAnimationFrame(measurePerformance),

    // Monitor memory usage
    const memoryInterval = setInterval(() => {
      if ('memory' in performance) {
        const memory = (performance as any).memory,
        setPerformanceMetrics(prev => ({
          ...prev,
          memoryUsage: Math.round(memory.usedJSHeapSize / 1024 / 1024) // MB
        })),
      }
    }, 2000),

    // Monitor battery level
    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((battery: any) => {
        const updateBatteryLevel = () => {
          setPerformanceMetrics(prev => ({
            ...prev,
            batteryLevel: Math.round(battery.level * 100)
          })),
        },
        
        updateBatteryLevel(),
        battery.addEventListener('levelchange', updateBatteryLevel),
        
        return () => battery.removeEventListener('levelchange', updateBatteryLevel),
      }),
    }

    // Monitor network speed
    if ('connection' in navigator) {
      const connection = (navigator as any).connection,
      const updateNetworkSpeed = () => {
        let speed = 'unknown',
        if (connection.effectiveType) {
          speed = connection.effectiveType,
        } else if (connection.downlink) {
          speed = `${connection.downlink} Mbps`,
        }
        
        setPerformanceMetrics(prev => ({
          ...prev,
          networkSpeed: speed
        })),
      },
      
      updateNetworkSpeed(),
      connection.addEventListener('change', updateNetworkSpeed),
      
      return () => connection.removeEventListener('change', updateNetworkSpeed),
    }

    return () => {
      cancelAnimationFrame(animationFrameId),
      clearInterval(memoryInterval),
    },
  }, [enablePerformanceMode]),

  const detectTouchGesture = (start: { x: number, y: number, time: number }, end: { x: number, y: number, time: number }): TouchGesture | null => {
    const deltaX = end.x - start.x,
    const deltaY = end.y - start.y,
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY),
    const duration = end.time - start.time,
    
    // Minimum distance and duration thresholds
    if (distance < 50 || duration < 100) return null,
    
    // Determine direction
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      return {
        type: 'swipe',
        direction: deltaX > 0 ? 'right' : 'left',
        distance: Math.abs(deltaX),
        duration
      },
    } else {
      return {
        type: 'swipe',
        direction: deltaY > 0 ? 'down' : 'up',
        distance: Math.abs(deltaY),
        duration
      },
    }
  },

  const handleGestureAction = (gesture: TouchGesture) => {
    switch (gesture.type) {
      case 'swipe':
        if (gesture.direction === 'left') {
          // Navigate forward
          if (window.history.length > 1) {
            window.history.forward()
          }
        } else if (gesture.direction === 'right') {
          // Navigate back
          if (window.history.length > 1) {
            window.history.back(),
          }
        } else if (gesture.direction === 'up') {
          // Scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' }),
        } else if (gesture.direction === 'down') {
          // Scroll to bottom
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }),
        }
        break,
      case 'longPress':
        // Show context menu or additional options
        console.log('Long press detected'),
        break,
    }
  },

  const applyMobileLayout = () => {
    // Add mobile-specific CSS classes
    document.documentElement.classList.add('mobile-optimized'),
    
    // Optimize viewport
    const viewport = document.querySelector('meta[name="viewport"]'),
    if (viewport) {
      viewport.setAttribute('contentwidth=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'),
    }
    
    // Add touch-action CSS
    const style = document.createElement('style'),
    style.textContent = `
      .mobile-optimized * {
        touch-action: manipulation,
        -webkit-tap-highlight-color: transparent
      }
      
      .mobile-optimized button,
      .mobile-optimized a {
        min-height: 44px,
        min-width: 44px
      }
      
      .mobile-optimized input,
      .mobile-optimized select,
      .mobile-optimized textarea {
        font-size: 16px, /* Prevents zoom on iOS */
      }
    `,
    document.head.appendChild(style),
  },

  const enableMobilePerformanceMode = () => {
    // Reduce animations on mobile
    document.documentElement.classList.add('mobile-performance-mode'),
    
    // Optimize images
    const images = document.querySelectorAll('img'),
    images.forEach(img => {
      img.loading = 'lazy',
      img.decoding = 'async',
    }),
    
    // Reduce motion for better performance
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('reduced-motion')
    }
  },

  const applyLandscapeOptimizations = () => {
    // Landscape-specific optimizations
    document.documentElement.classList.add('landscape-mode'),
    
    // Adjust layout for landscape
    const style = document.createElement('style'),
    style.textContent = `
      .landscape-mode .mobile-panel {
        width: 300px,
        height: 100vh
      }
    `,
    document.head.appendChild(style),
  },

  const applyPortraitOptimizations = () => {
    // Portrait-specific optimizations
    document.documentElement.classList.remove('landscape-mode'),
  },

  const optimizeForMobile = useCallback(() => {
    if (!isMobile) return,

    // Optimize images
    const images = document.querySelectorAll('img'),
    images.forEach(img => {
      if (!img.loading) img.loading = 'lazy',
      if (!img.decoding) img.decoding = 'async',
    }),

    // Optimize fonts
    const fonts = document.querySelectorAll('link[rel="preload"][as="font"]'),
    fonts.forEach(font => {
      font.setAttribute('crossoriginanonymous'),
    }),

    // Add mobile-specific event listeners
    document.addEventListener('touchstart', () => {}, { passive: true }),
    document.addEventListener('touchmove', () => {}, { passive: true }),
  }, [isMobile]),

  useEffect(() => {
    optimizeForMobile(),
  }, [optimizeForMobile]),

  useEffect(() => {
    if (typeof window === 'undefined') return,

    // Set up event listeners
    window.addEventListener('orientationchange', handleOrientationChange),
    window.addEventListener('resize', handleResize),
    
    // Set up orientation change detection
    const mediaQuery = window.matchMedia('(orientation: portrait)'),
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setCurrentOrientation(e.matches ? 'portrait' : 'landscape')
    },
    
    mediaQuery.addEventListener('change', handleMediaQueryChange),
    
    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange),
      window.removeEventListener('resize', handleResize),
      mediaQuery.removeEventListener('change', handleMediaQueryChange),
    },
  }, [handleOrientationChange, handleResize]),

  if (!showPanel || !isVisible) return null,

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case 'mobile': return <Smartphone className="w-5 h-5" />,
      case 'tablet': return <Tablet className="w-5 h-5" />,
      default: return <Monitor className="w-5 h-5" />
    }
  },

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return <CheckCircle className="w-4 h-4 text-green-400" />,
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-400" />,
      case 'error': return <AlertTriangle className="w-4 h-4 text-red-400" />,
      default: return <CheckCircle className="w-4 h-4 text-gray-400" />
    }
  },

const MobileOptimizer: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">MobileOptimizer</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  )
},

export default MobileOptimizer,
