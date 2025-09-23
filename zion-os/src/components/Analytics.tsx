"use client";

import { useEffect } from "react";

export default function Analytics() {
  useEffect(() => {
    try {
      if ("PerformanceObserver" in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            // minimal placeholder to avoid runtime errors
            void entry;
          }
        });
        observer.observe({ type: "layout-shift", buffered: true } as any);
      }
    } catch {}
  }, []);

  return null;
}
