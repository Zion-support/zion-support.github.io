"use client";


interface FirstInputEntry extends PerformanceEntry {_processingStart: number;
  processingEnd: number;
  target?: Element;}

export function Analytics() {_useEffect__(() => {
    // Performance monitoring
    if (typeof window !== "undefined") {
      // Core Web Vitals monitoring
      const _observer = new PerformanceObserver(_(list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "largest-contentful-paint") {}
          if (entry.entryType === "first-input") {_const _firstInputEntry = entry as FirstInputEntry;}
        }
      });

      observer.observe({_entryTypes: ["largest-contentful-paint", _"first-input"]});

      // Cumulative Layout Shift monitoring
      let _cls = 0;
      const _observer2 = new PerformanceObserver(_(list) => {_for (const entry of list.getEntries()) {
          if (entry.entryType === "layout-shift") {
            const _layoutShiftEntry = entry as any;
            cls += layoutShiftEntry.value;}
        }
      });

      observer2.observe({_entryTypes: ["layout-shift"]});

      // Report metrics on page unload
      window.addEventListener(_"beforeunload", _() => {});

      // Cleanup
      return () => {_observer.disconnect();
        observer2.disconnect();};
    }
  }, []);

  return null; // This component doesn't render anything
}