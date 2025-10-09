/**
 * Application Type Definitions
 * Centralized type definitions for the application
 */
/**
 * Performance Metrics Interface
 * Defines the structure for performance monitoring data
 */
export interface PerformanceMetrics {
fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
  fmp?: number; // First Meaningful Paint
  customMetrics?: Record
          
          
          
          
          
          
          
          
          <string, number>
}
/**
 * Performance Report Interface
 * Complete performance report structure
 */
export interface PerformanceReport {
    // TODO: Add content
  }
  webVitals: Partial
          
          
          
          
          
          
          
          
          <PerformanceMetrics>;,
    resources: ResourceStats;,
    memory: MemoryStats | null;,
    timestamp: number
}
/**
 * Resource Statistics Interface
 * Tracks resource loading statistics
 */
export interface ResourceStats {
    // TODO: Add content
  }
  total: number;,
    scripts: number;,
    styles: number;,
    images: number;,
    fonts: number
}
/**
 * Memory Statistics Interface
 * Browser memory usage statistics
 */
export interface MemoryStats {
    // TODO: Add content
  }
  usedJSHeapSize: number;,
    totalJSHeapSize: number;,
    jsHeapSizeLimit: number
}
/**
 * Performance Alert Interface
 * Structure for performance alerts and warnings
 */
export interface PerformanceAlert {
    // TODO: Add content
  }
  type: 'warning' | 'error' | 'info';,
    message: string;,
    metric: keyof PerformanceMetrics;,
    value: number;,
    threshold: number;,
    timestamp: number
}
/**
 * Layout Shift Interface
 * Extends PerformanceEntry for layout shift tracking
 */
export interface LayoutShift extends PerformanceEntry {
    // TODO: Add content
  }
  value: number;,
    hadRecentInput: boolean
}
/**
 * Performance with Memory Interface
 * Extends Performance API with memory information
 */
export interface PerformanceWithMemory extends Performance {
    // TODO: Add content
  }
  memory: {
    // TODO: Add content
  }
  usedJSHeapSize: number;,
    totalJSHeapSize: number;,
    jsHeapSizeLimit: number
  }
}