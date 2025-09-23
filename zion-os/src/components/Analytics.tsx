import React, { useEffect } from 'react';

export default function Analytics() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      // Example: basic CLS logging without external dependencies
      let cls = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const anyEntry = entry;
          if ((anyEntry as any).hadRecentInput) continue;
          const layoutShiftEntry = anyEntry;
          if (typeof (layoutShiftEntry as any).value === 'number') {
            cls += (layoutShiftEntry as any).value;
          }
        }
        // eslint-disable-next-line no-console
        console.log('[analytics] cumulative layout shift', cls);
      });
      observer.observe({ type: 'layout-shift', buffered: true } as any);
      return () => observer.disconnect();
    } catch {
      // ignore unsupported browsers
    }
  }, []);
  return null;
}
