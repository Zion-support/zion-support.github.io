'use client';
}
}
}
export interface WebVitalsMetrics {
  FCP?: number // First Contentful Paint
LCP?: number // Largest Contentful Paint
FID?: number // First Input Delay
CLS?: number // Cumulative Layout Shift
TTFB?: number // Time to First Byte
INP?: number // Interaction to Next, Paint
}
}
}
  }
static getInstance(): PerformanceMetrics{
if(!PerformanceMetrics.instance) {
PerformanceMetrics.instance = new PerformanceMetrics();,}
    }
        this.observers.push(paintObserver)
        // Largest Contentful Paint;
const lcpObserver = new PerformanceObserver(list =>{);
const entries = list.getEntries();
const
;        // Layout Shift;
const clsObserver = new PerformanceObserver(list => {);
let
;   */";'"
getMetricsByCategory(category: "PerformanceMetric['category']): PerformanceMetric[] {",return this.metrics.filter(m => m.category === category    )
}
  /**
   * Get Web Vitals
   */
getWebVitals(): WebVitalsMetrics{}
return { ...this.webVitals }
  }
  /**
   * Calculate performance score (0-100)
   */
calculatePerformanceScore(): number{;
let
;export default PerformanceMetrics