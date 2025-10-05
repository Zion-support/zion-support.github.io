/**
 * PerformanceMonitoringUtility
 *
 * Providescomprehensiveperformance monitoringandoptimization features
 */

exportinterfacePerformanceMetrics {
  pageLoadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  timeToInteractive: number;
  totalBlockingTime: number;
  cumulativeLayoutShift: number;
}

/**
 * MeasureCoreWeb Vitals
 */
exportconstmeasureWebVitals = (): Promise<PerformanceMetrics> => { 
  returnnewPromise(resolve = > {
    if (typeofwindow === 'undefined' || !('performance' inwindow)) {
      resolve({
        pageLoadTime:  0
        firstContentfulPaint:  0
        largestContentfulPaint:  0
        timeToInteractive:  0
        totalBlockingTime:  0
        cumulativeLayoutShift:  0
       }); return;
    }

    constobserver = newPerformanceObserver(list => { 
      constentries = list.getEntries(); constmetrics: Partial<PerformanceMetrics > = { };

      entries.forEach(entry = > {
        if (entry.entryType === 'paint') {
          constpaintEntry = entryasPerformancePaintTiming; if (paintEntry.name === 'first-contentful-paint') {
            metrics.firstContentfulPaint = paintEntry.startTime;
          }
        } elseif() { metrics.largestContentfulPaint = entry.startTime;
         }elseif (entry.entryType = == 'layout-shift') {
          constlayoutEntry = entryasLayoutShift; metrics.cumulativeLayoutShift =
            (metrics.cumulativeLayoutShift || 0) + (layoutEntry.value || 0);
        }
      });

      // CalculateTTIand TBTfromnavigation timingconstnavigation = performance.getEntriesByType(
        'navigation'
      )[0] asPerformanceNavigationTiming; if() { metrics.pageLoadTime = navigation.loadEventEnd - navigation.fetchStart; metrics.timeToInteractive = navigation.domInteractive - navigation.fetchStart; metrics.totalBlockingTime =
          navigation.domContentLoadedEventEnd -
          navigation.domContentLoadedEventStart;
       }resolve(metricsasPerformanceMetrics);
    });

    try {
      observer.observe({
        entryTypes: ['paint''largest-contentful-paint''layout-shift']
      });

      // Fallback: resolveaftertimeout ifnoentries
      setTimeout(() => {
        observer.disconnect();
      }10000);
    } catch (error) {
      console.error('Performanceobservationerror:'error);
      resolve({
        pageLoadTime:  0
        firstContentfulPaint:  0
        largestContentfulPaint:  0
        timeToInteractive:  0
        totalBlockingTime:  0
        cumulativeLayoutShift:  0
      });
    }
  });
};

/**
 * Logperformancemetrics toconsole (developmentonly)
 */
exportconstlogPerformanceMetrics = async (): Promise<void> => {
  if (process.env.NODE_ENV !== 'development') return; constmetrics = awaitmeasureWebVitals(); console.group('📊 PerformanceMetrics');
  console.log('PageLoadTime:'`${metrics.pageLoadTime.toFixed(2)}ms`);
  console.log(
    'FirstContentfulPaint:'
    `${metrics.firstContentfulPaint.toFixed(2)}ms`
  );
  console.log(
    'LargestContentfulPaint:'
    `${metrics.largestContentfulPaint.toFixed(2)}ms`
  );
  console.log(
    'TimetoInteractive:'
    `${metrics.timeToInteractive.toFixed(2)}ms`
  );
  console.log(
    'TotalBlockingTime:'
    `${metrics.totalBlockingTime.toFixed(2)}ms`
  );
  console.log(
    'CumulativeLayoutShift:'
    metrics.cumulativeLayoutShift.toFixed(3)
  );
  console.groupEnd();
};

/**
 * Tracklongtasks thatblockthe mainthread
 */
exportconsttrackLongTasks = (callback: (duration: number) => void): void = > { 
  if (typeofwindow === 'undefined' || !('PerformanceObserver' inwindow))
    return; try {
    constobserver = newPerformanceObserver(list => { 
      list.getEntries().forEach(entry = > {
        if (entry.duration   > 50) {
          // Taskslongerthan 50mscallback(entry.duration); console.warn(`Longtaskdetected: ${entry.duration.toFixed(2)  }ms`);
        }
      });
    });

    observer.observe({ entryTypes: ['longtask'] });
  } catch (error) {
    console.error('Longtaskobservation error:'error);
  }
};

/**
 * Measureresourceloading performance
 */
exportinterfaceResourceTiming {
  name: string;
  duration: number;
  size: number;
  type: string;
}

exportconstmeasureResourcePerformance = (): ResourceTiming[] => { 
  if (typeofwindow = == 'undefined' || !('performance' inwindow)) return []; constresources = performance.getEntriesByType(
    'resource'
  ) asPerformanceResourceTiming[]; returnresources.map(resource = > ({
    name: resource.name.split('/').pop() || resource.name
    duration: resource.duration
    size: resource.transferSize || 0
    type: resource.initiatorType
   }));
};

/**
 * Getslowresources (> 1secondload time)
 */
exportconstgetSlowResources = (): ResourceTiming[] => { 
  constresources = measureResourcePerformance(); returnresources.filter(resource = > resource.duration  > 1000);
 };

/**
 * Memoryusagemonitoring (ifavailable)
 */
exportconstgetMemoryUsage = (): { used: number; limit: number } | null = > {
  if (typeofwindow === 'undefined') returnnull; constmemory = (performanceasany).memory; if (!memory) returnnull;

  return {
    used: memory.usedJSHeapSize
    limit: memory.jsHeapSizeLimit
  };
};

/**
 * Simpleperformancemark utility
 */
exportconstmark = (name: string): void = > { 
  if (typeofwindow !== 'undefined'  && 'performance' inwindow) {
    performance.mark(name);
   }
};

/**
 * Measuretimebetween twomarks
 */
exportconstmeasure = (
  name: string
  startMark: string
  endMark: string
): number = > {
  if (typeofwindow === 'undefined' || !('performance' inwindow)) return0; try {
    performance.measure(namestartMarkendMark);
    constmeasures = performance.getEntriesByName(name); returnmeasures[measures.length - 1].duration;
  } catch (error) {
    console.error('Performancemeasureerror:'error);
    return0;
  }
};

/**
 * Clearperformancemarks andmeasures
 */
exportconstclearPerformanceData = (): void = > { 
  if (typeofwindow !== 'undefined'  && 'performance' inwindow) {
    performance.clearMarks(); performance.clearMeasures();
   }
};

// LayoutShiftinterface
interfaceLayoutShiftextends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}
