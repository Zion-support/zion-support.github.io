/**
 * Application Type Definitions
 * Centralized type definitions for the application
 */
/**
 * Performance Metrics Interface
 * Defines the structure for performance monitoring data
 */
<<<<<<< HEAD
export interface PerformanceMetrics {
fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
  fmp?: number; // First Meaningful Paint
  customMetrics?: Record
          
          
          
          
          
          
          
          
          <string, number>
=======
export interface PerformanceMetrics {fcp?: number; // First Contentful Paint;}
  lcp?: number; // Largest Contentful Paint;
  fid?: number; // First Input Delay;
  cls?: number; // Cumulative Layout Shift;
  ttfb?: number; // Time to First Byte;
  fmp?: number; // First Meaningful Paint;
  customMetrics?: Record;
          <string, number>;
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
}
/**
 * Performance Report Interface
 * Complete performance report structure
 */
<<<<<<< HEAD
export interface PerformanceReport {
    // TODO: Add content
  }
  webVitals: Partial
          
          
          
          
          
          
          
          
=======
export interface PerformanceReport {// TODO: Add content;}
};
  webVitals: Partial;
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
          <PerformanceMetrics>;,
    resources: ResourceStats;,
    memory: MemoryStats | null;,
    timestamp: number
}
/**
 * Resource Statistics Interface
 * Tracks resource loading statistics
 */
<<<<<<< HEAD
export interface ResourceStats {
    // TODO: Add content
  }
=======
export interface ResourceStats {// TODO: Add content;}
};
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
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
<<<<<<< HEAD
export interface MemoryStats {
    // TODO: Add content
  }
=======
export interface MemoryStats {// TODO: Add content;}
};
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
  usedJSHeapSize: number;,
    totalJSHeapSize: number;,
    jsHeapSizeLimit: number
}
/**
 * Performance Alert Interface
 * Structure for performance alerts and warnings
 */
<<<<<<< HEAD
export interface PerformanceAlert {
    // TODO: Add content
  }
=======
export interface PerformanceAlert {// TODO: Add content;}
};
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
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
<<<<<<< HEAD
export interface LayoutShift extends PerformanceEntry {
    // TODO: Add content
  }
=======
export interface LayoutShift extends PerformanceEntry {// TODO: Add content;}
};
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
  value: number;,
    hadRecentInput: boolean
}
/**
 * Performance with Memory Interface
 * Extends Performance API with memory information
 */
<<<<<<< HEAD
export interface PerformanceWithMemory extends Performance {
    // TODO: Add content
  }
  memory: {
    // TODO: Add content
  }
=======
export interface PerformanceWithMemory extends Performance {// TODO: Add content;}
}
  memory: {// TODO: Add content;}
};
>>>>>>> cursor/fix-errors-and-merge-to-main-aee0
  usedJSHeapSize: number;,
    totalJSHeapSize: number;,
    jsHeapSizeLimit: number
  }
}