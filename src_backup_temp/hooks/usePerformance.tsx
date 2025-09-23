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
;  const [metrics, setMetrics] = useState<PerformanceMetrics>({
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
        if (!layoutShiftEntry.hadRecentInput) {;        setMetrics(prev => ({ ...prev, fcp: fcpEntr y.startTime }))}
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
      clsObserver.observe({ "entryTypes": "['layout-shift'] "})} catch (error) {;      setMetrics(prev => ({ ...prev, cls: clsValu e }))}
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
      longTaskObserver.observe({ "entryTypes": ['longtask'] "})} catch (error) {;          // // // // // // // // })}
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
      observerRef.current.observe({ entryTypes: ['paint'] })} catch (e) {      // }
            ;
            setMetrics(prev => ({ ...prev, fcp }));
            if (logToConsole) }
        })});
      observerRef.current.observe({ "entryTypes": "['paint'] "})} catch (e) {;      // }
        ;
        ;
        if (lastEntry) {;
          ;
          setMetrics(prev => ({ ...prev, lcp }));
          if (logToConsole) }
      });
      lcpObserverRef.current.observe({ "entryTypes": "['largest-contentful-paint'] "})} catch (e) {;        setMetrics(prev => ({ ...prev, cls: clsValu e }));
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
      clsObserverRef.current.observe({ "entryTypes": "['layout-shift'] "})} catch (e) {;      if (average > threshold) {
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