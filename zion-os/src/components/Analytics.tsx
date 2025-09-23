"use client";

import { useEffect } from "react";

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: Element;
}

export default function Analytics() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === "largest-contentful-paint") {
          console.log("LCP:", entry.startTime);
        }
        if (entry.entryType === "first-input") {
          const firstInputEntry = entry as FirstInputEntry;
          console.log("FID:", firstInputEntry.processingStart - firstInputEntry.startTime);
        }
      }
    });
    observer.observe({ entryTypes: ["largest-contentful-paint", "first-input"] });

    let cls = 0;
    const observer2 = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === "layout-shift") {
          const layoutShiftEntry = entry as any;
          cls += layoutShiftEntry.value;
        }
      }
    });
    observer2.observe({ entryTypes: ["layout-shift"] });

    const onBeforeUnload = () => {
      console.log("CLS:", cls);
    };
    window.addEventListener("beforeunload", onBeforeUnload);

    return () => {
      observer.disconnect();
      observer2.disconnect();
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, []);

  return null;
}
