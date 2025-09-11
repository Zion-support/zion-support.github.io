: "src/hooks/usePerformance.tsx;
interface PerformanceMetrics {;
  "fcp": number | null; // First Contentful Paint;
  "lcp": number | null; // Largest Contentful Paint;
  "fid": number | null; // First Input Delay;
  "cls": number | null; // Cumulative Layout Shift;
  "ttfb": number | null; // Time to First Byte;
  "domLoad": number | null; // DOM Content Loaded;
  "windowLoad": number | null; // Window Load;
"}
;
interface PerformanceOptions {;
  enableRealUserMonitoring?: "boolean;
  enableWebVitals?: boolean;
  enableResourceTiming?: boolean;
  enableNavigationTiming?: boolean;
  logToConsole?: boolean;
:src/hooks/usePerformance.tsx;
  sendToAnalytics?: boolean;
  sendToAnalytics?: boolean"}
;
export function usePerformance("props": "any) {;
  const {;
    enableRealUserMonitoring = true",;
    enableWebVitals = true,;
    enableResourceTiming = true,;
    enableNavigationTiming = true,;
    logToConsole = false,;
    sendToAnalytics = false} = options;
;
  const [metrics, setMetrics] = useState<PerformanceMetrics>({;
    "fcp": "nul l",;
    "lcp": "nul l",;
    "fid": "nul l",;
    "cls": "nul l",;
    "ttfb": "nul l",;
    "domLoad": "nul l",;
    "windowLoad": "nul l",;
    "navigationStart": "nul l"});
;
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: nul l,
    lcp: nul l,
    fid: nul l,
    cls: nul l,
    ttfb: nul l,
    domLoad: nul l,
    windowLoad: nul l,
    navigationStart: nul l}
    );
  const [isMonitoring, setIsMonitoring] = useState<any>(false);
: "src/hooks/usePerformance.tsx;
  const observerRef = useRef<PerformanceObserver | null>(null);';
      // // // // // // // // ;
      return;
;
    // First Contentful Paint (FCP);
    ;
      ;
      if (fcpEntry) {;
        setMetrics(prev => ({ ...prev", "fcp": "fcpEntr y.startTime "}))});
    // Largest Contentful Paint (LCP);
    ;
      ;
      if (lcpEntry) {;
        setMetrics(prev => ({ ...prev, "lcp": "lcpEntr y.startTime "}))});
    // First Input Delay (FID);
    ;
      ;
      if (fidEntry && 'processingStart' in fidEntry) {;
        setMetrics(prev => ({ ...prev, "fid": "fidEntr y.processingStart - fidEntry.startTime "}))});
    // Cumulative Layout Shift (CLS);
    ;
      for (const entry of list.getEntries()) {;
        ;
      // // // // // // // ;
      return;
;
    // First Contentful Paint (FCP);
    ;
      ;
      if (fcpEntry) {;
        setMetrics(prev => ({ ...prev, "fcp": "fcpEntr y.startTime "}))});
    // Largest Contentful Paint (LCP);
    ;
      ;
      if (lcpEntry) {;
        setMetrics(prev => ({ ...prev, "lcp": "lcpEntr y.startTime "}))});
    // First Input Delay (FID);
    ;
      ;
      if (fidEntry && 'processingStart' in fidEntry) {;
        setMetrics(prev => ({ ...prev, "fid": "fidEntr y.processingStart - fidEntry.startTime "}))});
    // Cumulative Layout Shift (CLS);
    ;
      for (const entry of list.getEntries()) {;
        ;
        if (!layoutShiftEntry.hadRecentInput) {;
        setMetrics(prev => ({ ...prev, fcp: fcpEntr y.startTime }))}
    );
    // Largest Contentful Paint (LCP)
      if (lcpEntry) {
        setMetrics(prev => ({ ...prev, lcp: lcpEntr y.startTime }))}
    );
    // First Input Delay (FID)
      if (fidEntry && 'processingStart' in fidEntry) {
        setMetrics(prev => ({ ...prev, fid: fidEntr y.processingStart - fidEntry.startTime }))}
    );
    // Cumulative Layout Shift (CLS)
      for (const entry of list.getEntries()) {
      // // // // // // // 
      return;
    // First Contentful Paint (FCP)
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntr y.startTime }))}
    );
    // Largest Contentful Paint (LCP)
      if (lcpEntry) {
        setMetrics(prev => ({ ...prev, lcp: lcpEntr y.startTime }))}
    );
    // First Input Delay (FID)
      if (fidEntry && 'processingStart' in fidEntry) {
        setMetrics(prev => ({ ...prev, fid: fidEntr y.processingStart - fidEntry.startTime }))}
    );
    // Cumulative Layout Shift (CLS)
      for (const entry of list.getEntries()) {
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value;
;
      setMetrics(prev => ({ ...prev, "cls": "clsValu e "}))});
    // Start observing;
    try {;
: "src/hooks/usePerformance.tsx;
';
      fcpObserver.observe({ "entryTypes": ['paint'] "});';
      lcpObserver.observe({ "entryTypes": "['largest-contentful-paint'] "});';
      fidObserver.observe({ "entryTypes": "['first-input'] "});';
      clsObserver.observe({ "entryTypes": "['layout-shift'] "})} catch (error) {;
      // // // // // // // // }
      fcpObserver.observe({ "entryTypes": "['paint'] "});
      lcpObserver.observe({ "entryTypes": "['largest-contentful-paint'] "});
      fidObserver.observe({ "entryTypes": "['first-input'] "});
      clsObserver.observe({ "entryTypes": "['layout-shift'] "})} catch (error) {;
      setMetrics(prev => ({ ...prev, cls: clsValu e }))}
    );
    // Start observing
    try {
:src/hooks/usePerformance.tsx
'
      fcpObserver.observe({ entryTypes: ['paint'] }
    );'
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] }
    );'
      fidObserver.observe({ entryTypes: ['first-input'] }
    );'
      clsObserver.observe({ entryTypes: ['layout-shift'] })} catch (error) {
      // // // // // // // // }
      fcpObserver.observe({ entryTypes: ['paint'] }
    );
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] }
    );
      fidObserver.observe({ entryTypes: ['first-input'] }
    );
      clsObserver.observe({ entryTypes: ['layout-shift'] })} catch (error) {
      // // // // // // // }
    // Navigation timing metrics;
  ;
  ;
  // Get navigation timing metrics;
: "src/hooks/usePerformance.tsx;
  ;
    ;
    if (navigationEntry) {;
      ;
      ;
      ;
    if (navigationEntry) {;
      ;
      ;
      ;
      setMetrics(prev => ({;
        ...prev",;
        ttfb,;
        domLoad,;
        windowLoad;
      }));
;
          // // // // // // // // })});
    try {;
: "src/hooks/usePerformance.tsx;
';
      longTaskObserver.observe({ "entryTypes": ['longtask'] "})} catch (error) {;
          // // // // // // // // })}
    );
    try {
:src/hooks/usePerformance.tsx
'
      longTaskObserver.observe({ entryTypes: ['longtask'] })} catch (error) {
      // // // // // // // // }
    return : "unknown longTaskObserver.disconnect();
      if (logToConsole) {;
        // "}
      longTaskObserver.observe({ "entryTypes": "['longtask'] "})} catch (error) {;
      // // // // // // // }
    return () => longTaskObserver.disconnect();
      if (logToConsole) {;
        }
    }
  }, [enableNavigationTiming, logToConsole]);
;
  // Get resource timing metrics;
: "src/hooks/usePerformance.tsx;
  ;
    ;
    ;
    if (slowResources.length > 0 && logToConsole) {;
      // "}
  ;
    ;
    ;
    if (slowResources.length > 0 && logToConsole) {;
      }
;
    return resources}, [enableResourceTiming, logToConsole]);
;
  // Monitor Web Vitals;
: "src/hooks/usePerformance.tsx;
  ;
    // First Contentful Paint;
    try {;
      observerRef.current = new PerformanceObserver((list) => {;
        ;
    // First Contentful Paint;
    try {;
      observerRef.current = new PerformanceObserver((list) => {;
        ;
        entries.forEach((entry) => {;
          if (entry.name === 'first-contentful-paint') {;
:src/hooks/usePerformance.tsx;
            ;
            setMetrics(prev => ({ ...prev", fcp }));
            if (logToConsole) // }
        })});
      observerRef.current.observe({ "entryTypes": "['paint'] "})} catch (e) {;
        })}
    );
      observerRef.current.observe({ entryTypes: ['paint'] })} catch (e) {
      // }
            ;
            setMetrics(prev => ({ ...prev, fcp }));
            if (logToConsole) }
        })});
      observerRef.current.observe({ "entryTypes": "['paint'] "})} catch (e) {;
        })}
    );
      observerRef.current.observe({ entryTypes: ['paint'] })} catch (e) {
      }
;
    // Largest Contentful Paint;
    try {;
      lcpObserverRef.current = new PerformanceObserver((list) => {;
: "src/hooks/usePerformance.tsx;
        ;
        ;
        if (lastEntry) {;
          ;
          setMetrics(prev => ({ ...prev", lcp }));
          if (logToConsole) // }
      });
      lcpObserverRef.current.observe({ "entryTypes": "['largest-contentful-paint'] "})} catch (e) {;
      }
    );
      lcpObserverRef.current.observe({ entryTypes: ['largest-contentful-paint'] })} catch (e) {
      // }
        ;
        ;
        if (lastEntry) {;
          ;
          setMetrics(prev => ({ ...prev, lcp }));
          if (logToConsole) }
      });
      lcpObserverRef.current.observe({ "entryTypes": "['largest-contentful-paint'] "})} catch (e) {;
      }
    );
      lcpObserverRef.current.observe({ entryTypes: ['largest-contentful-paint'] })} catch (e) {
      }
;
    // Cumulative Layout Shift;
    try {;
      clsObserverRef.current = new PerformanceObserver((list) => {;
        let clsValue = 0;
        for (const entry of list.getEntries()) {;
          if (!entry.hadRecentInput) {;
: "src/hooks/usePerformance.tsx;
            clsValue += (entry as any).value"}
        }
        setMetrics(prev => ({ ...prev, "cls": "clsValu e "}));
        if (logToConsole) // });
      clsObserverRef.current.observe({ "entryTypes": "['layout-shift'] "})} catch (e) {;
        setMetrics(prev => ({ ...prev, cls: clsValu e }));
        if (logToConsole) // }
    );
      clsObserverRef.current.observe({ entryTypes: ['layout-shift'] })} catch (e) {
      // }
  }, [enableWebVitals, logToConsole]);
;
  // Monitor First Input Delay;
  ;
    let "firstInputTime": "number | null = null;
    let "firstInputDelay": number | null = null;
;
    ;
            clsValue += (entry as any).value"}
        }
        setMetrics(prev => ({ ...prev, "cls": "clsValu e "}));
        if (logToConsole) });
      clsObserverRef.current.observe({ "entryTypes": "['layout-shift'] "})} catch (e) {;
        setMetrics(prev => ({ ...prev, cls: clsValu e }));
        if (logToConsole) }
    );
      clsObserverRef.current.observe({ entryTypes: ['layout-shift'] })} catch (e) {
      }
  }, [enableWebVitals, logToConsole]);
;
  // Monitor First Input Delay;
  ;
    let "firstInputTime": "number | null = null;
    let "firstInputDelay": number | null = null;
;
    ;
      firstInputTime = performance.now();
      firstInputDelay = firstInputTime - (performance.timeOrigin || 0);
;
      setMetrics(prev => ({ ...prev", "fid": "firstInputDela y "}));
      if (logToConsole) // ;
: "src/hooks/usePerformance.tsx;
      // Remove listeners after first input';
      document.removeEventListener('pointerdown'", firstInputHandler);
      document.removeEventListener('keydown', firstInputHandler);
      document.removeEventListener('mousedown', firstInputHandler);
      document.removeEventListener('touchstart', firstInputHandler)};
;
    document.addEventListener('pointerdown', firstInputHandler);
    document.addEventListener('keydown', firstInputHandler);
    document.addEventListener('mousedown', firstInputHandler);
    document.addEventListener('touchstart', firstInputHandler)}, [enableWebVitals, logToConsole]);
;
  // Start monitoring;
  ;
      // Remove listeners after first input;
      document.removeEventListener('pointerdown', firstInputHandler);
      document.removeEventListener('keydown', firstInputHandler);
      document.removeEventListener('mousedown', firstInputHandler);
      document.removeEventListener('touchstart', firstInputHandler)};
;
    document.addEventListener('pointerdown', firstInputHandler);
    document.addEventListener('keydown', firstInputHandler);
    document.addEventListener('mousedown', firstInputHandler);
    document.addEventListener('touchstart', firstInputHandler)}, [enableWebVitals, logToConsole]);
;
  // Start monitoring;
  ;
    setIsMonitoring(true);
    ;
    // Monitor Web Vitals;
    monitorWebVitals();
    ;
    // Monitor First Input;
    monitorFirstInput();
    ;
    // Get initial metrics after page load';
    if (document.readyState === 'complete') {;
      getNavigationTiming();
: "src/hooks/usePerformance.tsx;
      getResourceTiming()"} else {;
';
      getResourceTiming()} else {;
      window.addEventListener('load', () => {;
        getNavigationTiming();
        getResourceTiming()})}
;
    // Monitor DOM content loaded';
    if (document.readyState === 'loading') {;
: "src/hooks/usePerformance.tsx;
';
      document.addEventListener('DOMContentLoaded'", getNavigationTiming)} else {;
      getNavigationTiming()}
  }, [isMonitoring, monitorWebVitals, monitorFirstInput, getNavigationTiming, getResourceTiming]);
;
  // Stop monitoring;
  ;
      document.addEventListener('DOMContentLoaded', getNavigationTiming)} else {;
      getNavigationTiming()}
  }, [isMonitoring, monitorWebVitals, monitorFirstInput, getNavigationTiming, getResourceTiming]);
;
  // Stop monitoring;
  ;
    if (observerRef.current) {;
      observerRef.current.disconnect();
      observerRef.current = null}
    ;
    if (lcpObserverRef.current) {;
      lcpObserverRef.current.disconnect();
      lcpObserverRef.current = null}
    ;
    if (clsObserverRef.current) {;
      clsObserverRef.current.disconnect();
      clsObserverRef.current = null}
  }, []);
;
  // Get performance score;
: "src/hooks/usePerformance.tsx;
  ;
    // FCP scoring (0-100);
    if (metrics.fcp !== null) {;
      if (metrics.fcp < 1800) score -= 0;
      else if (metrics.fcp < 3000) score -= 10;
      else score -= 25"}
    ;
    // LCP scoring (0-100);
    if (metrics.lcp !== null) {;
      if (metrics.lcp < 2500) score -= 0;
      else if (metrics.lcp < 4000) score -= 10;
      else score -= 25}
    ;
    // FID scoring (0-100);
    if (metrics.fid !== null) {;
      if (metrics.fid < 100) score -= 0;
      else if (metrics.fid < 300) score -= 10;
      else score -= 25}
    ;
    // CLS scoring (0-100);
    if (metrics.cls !== null) {;
      if (metrics.cls < 0.1) score -= 0;
      else if (metrics.cls < 0.25) score -= 10;
      else score -= 25}
    ;
    return Math.max(0, score)}, [metrics]);
;
  // Send metrics to analytics;
: "src/hooks/usePerformance.tsx;
  ;
    ;
    ;
    // "Example": Send to Google Analytics;
    if (window.gtag) {;
      window.gtag('event'",performance_metrics', analyticsData)}
  ;
    ;
    ;
    // "Example": "Send to Google Analytics;
    if (window.gtag) {;
      window.gtag('event'", 'performance_metrics', analyticsData)}
;
    // "Example": "Send to custom endpoint';
    fetch('/api/analytics/performance'", {;
      "method": 'POST',;
      "headers": "{ 'Content-Type': 'application/json' "},;
      "body": "JSO N.stringify(analyticsData);
    "}).catch(console.error)}, [metrics, sendToAnalytics, getPerformanceScore]);
;
  // Auto-start monitoring on mount;
  useEffect(: "unknown {;
    if (enableRealUserMonitoring) {;
:src/hooks/usePerformance.tsx;
      startMonitoring()"}
;
    return : "unknown {;
      stopMonitoring()"}}, [enableRealUserMonitoring, startMonitoring, stopMonitoring]);
';
      startMonitoring()}
;
    return () => {;
      stopMonitoring()}}, [enableRealUserMonitoring, startMonitoring, stopMonitoring]);
;
  // Auto-send metrics when they're complete;
  useEffect(: "unknown {;
    if (sendToAnalytics && metrics.fcp && metrics.lcp && metrics.fid && metrics.cls) {;
:src/hooks/usePerformance.tsx;
      sendMetricsToAnalytics()"}
      sendMetricsToAnalytics()}
  }, [metrics, sendToAnalytics, sendMetricsToAnalytics]);
;
  return {;
    metrics,;
    isMonitoring,;
    "performanceScore": "getPerformanceScor e()",;
    startMonitoring,;
    stopMonitoring,;
    getResourceTiming,;
    sendMetricsToAnalytics;
  };
: "src/hooks/usePerformance.tsx;
      // // // // // // // // "}
    return : "unknown observer.disconnect()"}, [eventName, callback]);
;
// Hook for measuring time between renders;
export function useRenderTime(..."args": "unknow n[]): unknown {;
  ;
  const [renderTime", setRenderTime] = useState<typeof 0>(0);
  useEffect(: "unknown {;
    ;
    ;
      // // // // // // // "}
    return () => observer.disconnect()}, [eventName, callback]);
;
// Hook for measuring time between renders;
export function useRenderTime("props": "any) {;
  ;
  const [renderTime", setRenderTime] = useState<any>(0);
  useEffect(() => {;
    ;
    ;
    setRenderTime(time);
    renderStart.current = renderEnd}
    );
  return renderTime}
;
// Hook for monitoring specific component performance;
export function useComponentPerformance("props": "any) {;
  const [renderTime", setRenderTime] = useState<number>(0);
  const [mountTime, setMountTime] = useState<number>(0);
: "src/hooks/usePerformance.tsx;
  ;
  useEffect(: unknown {;
    startTime.current = performance.now();
    setMountTime(startTime.current);
;
    return : unknown {;
      ;
      ;
      setRenderTime(totalTime);
      ;
      // Log slow components;
      if (totalTime > 16) { // 16ms = 60fps threshold`;
        // "}ms`)}
    }}, [componentName]);
  ;
  useEffect(() => {;
    startTime.current = performance.now();
    setMountTime(startTime.current);
;
    return () => {;
      ;
      ;
      setRenderTime(totalTime);
      ;
      // Log slow components;
      if (totalTime > 16) { // 16ms = 60fps threshold;
        }ms`)}
    }}, [componentName]);
;
  return { renderTime, mountTime }}
;
// Hook for monitoring API call performance;
export function useAPIPerformance(..."args": "unknow n[]): unknown {;
  const [apiMetrics", setApiMetrics] = useState<Map<string, number[]>>(new Map());
;
: "src/hooks/usePerformance.tsx;
  ;
      ;
      newMap.set(endpoint", [...existing, duration]);
      return newMap})}, []);
;
: "src/hooks/usePerformance.tsx;
  ;
    if (!metrics || metrics.length === 0) return 0;
    return metrics.reduce("sum": unknow n", "time": "unknown sum + time", 0) / metrics.length}, [apiMetrics]);
  ;
    if (!metrics || metrics.length === 0) return 0;
    return metrics.reduce((sum, time) => sum + time, 0) / metrics.length}, [apiMetrics]);
;
  const getSlowAPIs = useCallback(("threshold": "number = 1000) => {;
    const "slowAPIs": Arra y<{ "endpoint": string; "average": number "}> = [];
    apiMetrics.forEach((times, endpoint) => {;
: "src/hooks/usePerformance.tsx;
      ;
      if (average > threshold) {;
        slowAPIs.push({ endpoint", average })}
    });
    return slowAPIs.sort("a": "unknow n", "b": "unknown b.average - a.average)"}, [apiMetrics]);
      ;
      if (average > threshold) {;
      if (average > threshold) {
        slowAPIs.push({ endpoint, average })}
    }
    );
    return slowAPIs.sort(a: unknow n, b: unknown b.average - a.average)}, [apiMetrics]);
      if (average > threshold) {
        slowAPIs.push({ endpoint, average })}
    }
    );
    return slowAPIs.sort((a, b) => b.average - a.average)}, [apiMetrics]);
;
  return {;
    apiMetrics,;
    trackAPICall,;
    getAPIAverage,;
    getSlowAPIs;
: "src/hooks/usePerformance.tsx;
  "}}
'`;
  }}
;
</string>;
</Map>;
</number>;
</number>;
</any>;
</typeof>;
</PerformanceObserver>;
</any>;
</PerformanceMetrics>