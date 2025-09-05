<<<<<<< HEAD
"use client",

import { useEffect } from "react",
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number,
  processingEnd: number,
  target?: Element
}
=======
"use client";


interface FirstInputEntry extends PerformanceEntry {_processingStart: number;
  processingEnd: number;
  target?: Element;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export function Analytics() {_useEffect__(() => {
    // Performance monitoring
    if (typeof window !== "undefined") {
      // Core Web Vitals monitoring
      const _observer = new PerformanceObserver(_(list) => {
        for (const entry of list.getEntries()) {
<<<<<<< HEAD
          if (entry.entryType === "largest-contentful-paint") {
            // // // console.log("LCP:", entry.startTime)
          }
          if (entry.entryType === "first-input") {
            const firstInputEntry = entry as FirstInputEntry,
            // // // console.log("FID:", firstInputEntry.processingStart - firstInputEntry.startTime)
          }
=======
          if (entry.entryType === "largest-contentful-paint") {}
          if (entry.entryType === "first-input") {_const _firstInputEntry = entry as FirstInputEntry;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }
      }),

<<<<<<< HEAD
      observer.observe({ entryTypes: ["largest-contentful-paint", "first-input"] }),

      // Cumulative Layout Shift monitoring
      let cls = 0,
      const observer2 = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "layout-shift") {
            const layoutShiftEntry = entry as any,
            cls += layoutShiftEntry.value
          }
=======
      observer.observe({_entryTypes: ["largest-contentful-paint", _"first-input"]});

      // Cumulative Layout Shift monitoring
      let _cls = 0;
      const _observer2 = new PerformanceObserver(_(list) => {_for (const entry of list.getEntries()) {
          if (entry.entryType === "layout-shift") {
            const _layoutShiftEntry = entry as any;
            cls += layoutShiftEntry.value;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        }
      }),

<<<<<<< HEAD
      observer2.observe({ entryTypes: ["layout-shift"] }),

      // Report metrics on page unload
      window.addEventListener("beforeunload", () => {
        // // // console.log("CLS:", cls)
      }),

      // Cleanup
      return () => {
        observer.disconnect(),
        observer2.disconnect()
      }
=======
      observer2.observe({_entryTypes: ["layout-shift"]});

      // Report metrics on page unload
      window.addEventListener(_"beforeunload", _() => {});

      // Cleanup
      return () => {_observer.disconnect();
        observer2.disconnect();};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
  }, []),

  return null, // This component doesn't render anything
}