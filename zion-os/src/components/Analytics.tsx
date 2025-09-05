"use client&quot;;

import { useEffect } from &quot;react&quot;;

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: Element;
}

export function Analytics() {
  useEffect(() => {
    // Performance monitoring
    if (typeof window !== &quot;undefined&quot;) {
      // Core Web Vitals monitoring
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === &quot;largest-contentful-paint&quot;) {
            // console.log(&quot;LCP:&quot;, entry.startTime);
          }
          if (entry.entryType === &quot;first-input&quot;) {
            const firstInputEntry = entry as FirstInputEntry;
            // console.log(&quot;FID:&quot;, firstInputEntry.processingStart - firstInputEntry.startTime);
          }
        }
      });

      observer.observe({ entryTypes: [&quot;largest-contentful-paint&quot;, &quot;first-input&quot;] });

      // Cumulative Layout Shift monitoring
      let cls = 0;
      const observer2 = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === &quot;layout-shift&quot;) {
            const layoutShiftEntry = entry as any;
            cls += layoutShiftEntry.value;
          }
        }
      });

      observer2.observe({ entryTypes: [&quot;layout-shift&quot;] });

      // Report metrics on page unload
      window.addEventListener(&quot;beforeunload&quot;, () => {
        // console.log(&quot;CLS:", cls);
      });

      // Cleanup
      return () => {
        observer.disconnect();
        observer2.disconnect();
      };
    }
  }, []);

  return null; // This component doesn't render anything
}