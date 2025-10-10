/**
 * Application Type Definitions;
 * Centralized type definitions for the application;
 */
/**
 * Performance Metrics Interface;
 * Defines the structure for performance monitoring data;
 */
<<<<<<< HEAD
export interface PerformanceMetrics {
    fcp?: number; // First Contentful Paint
  }
=======
export interface PerformanceMetrics {fcp?: number; // First Contentful Paint};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  lcp?: number; // Largest Contentful Paint;
  fid?: number; // First Input Delay;
  cls?: number; // Cumulative Layout Shift;
  ttfb?: number; // Time to First Byte;
  fmp?: number; // First Meaningful Paint;
  customMetrics?: Record;
<<<<<<< HEAD
          <string>
}
=======
          <string, number>};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
/**
 * Performance Report Interface;
 * Complete performance report structure;
 */
<<<<<<< HEAD

export interface PerformanceReport {
    // TODO: Add content
  }
}
  webVitals: Partial,

          <PerformanceMetrics>,
=======
export interface PerformanceReport {// TODO: Add content};
};
  webVitals: Partial;
          <PerformanceMetrics>;,
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    resource,
  s: ResourceStats,,
    memor,
  y: MemoryStats | null,,
    timestam,
<<<<<<< HEAD
  p: number,
}
=======
  p: number};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
/**
 * Resource Statistics Interface;
 * Tracks resource loading statistics;
 */
<<<<<<< HEAD

export interface ResourceStats {
    // TODO: Add content
  }
}
  total: number,,
    scripts: number,,
    styles: number,,
    images: number,,
=======
export interface ResourceStats {// TODO: Add content};
};
  total: number;,
    scripts: number;,
    styles: number;,
    images: number;,
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    fonts: number
};
/**
 * Memory Statistics Interface;
 * Browser memory usage statistics;
 */
<<<<<<< HEAD

export interface MemoryStats {
    // TODO: Add content
  }
}
  usedJSHeapSize: number,,
    totalJSHeapSize: number,,
=======
export interface MemoryStats {// TODO: Add content};
};
  usedJSHeapSize: number;,
    totalJSHeapSize: number;,
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    jsHeapSizeLimit: number
};
/**
 * Performance Alert Interface;
 * Structure for performance alerts and warnings;
 */
<<<<<<< HEAD

export interface PerformanceAlert {
    // TODO: Add content
  }
}
  type: 'warning' | 'error' | 'info',,
    message: string,,
    metric: keyof PerformanceMetrics,,
    value: number,,
    threshold: number,,
=======
export interface PerformanceAlert {// TODO: Add content};
};
  type: 'warning' | 'error' | 'info';,
    message: string;,
    metric: keyof PerformanceMetrics;,
    value: number;,
    threshold: number;,
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    timestamp: number
};
/**
 * Layout Shift Interface;
 * Extends PerformanceEntry for layout shift tracking;
 */
<<<<<<< HEAD

export interface LayoutShift extends PerformanceEntry {
    // TODO: Add content
  }
}
  value: number,,
=======
export interface LayoutShift extends PerformanceEntry {// TODO: Add content};
};
  value: number;,
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    hadRecentInput: boolean
};
/**
 * Performance with Memory Interface;
 * Extends Performance API with memory information;
 */
<<<<<<< HEAD

export interface PerformanceWithMemory extends Performance {
    // TODO: Add content
  }

}
  memor,
  y: {/* TODO: Fix JSX expression */}
  O: Add content,}
}

  usedJSHeapSize: number,,
    totalJSHeapSize: number,,
    jsHeapSizeLimit: number

  }
}

=======
export interface PerformanceWithMemory extends Performance {// TODO: Add content};
};
  memor,
  y: {/* TODO: Fix JSX expression */};
  O: Add content};
};
  usedJSHeapSize: number;,
    totalJSHeapSize: number;,
    jsHeapSizeLimit: number
  };
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
