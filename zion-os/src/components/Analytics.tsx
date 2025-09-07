"use client",

import { useEffect } from "react";
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number,
  processingEnd: number,
  target?: Element
}

export function Analytics() {
  useEffect(() => {
    // Performance monitoring
    if (typeof window !== "undefined") {
      // Core Web Vitals monitoring
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "largest-contentful-paint") {
            console.log("LCP:", entry.startTime)
          }
          if (entry.entryType = $2;
            console.log("FID:", firstInputEntry.processingStart - firstInputEntry.startTime)
          }
        }
      }),

      observer.observe($2);
      // Cumulative Layout Shift monitoring
      let cls = $2;
      const observer2 = $2;
            cls += layoutShiftEntry.value
          }
        }
      }),

      observer2.observe($2);
      // Report metrics on page unload
      window.addEventListener("beforeunload", () => {
        console.log("CLS:", cls)
      }),

      // Cleanup
      return () => {
        observer.disconnect($2);
        observer2.disconnect()
      }
    }
  }, []),

  return null, // This component doesn't render anything
}