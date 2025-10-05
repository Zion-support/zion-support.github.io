/**
 * PerformanceMetricsDashboard Utility
 *
 * Comprehensiveperformancemonitoring andmetricscollection for
 * webvitalsresourcetimingandcustomperformance markers.
 *
 * Features: * - CoreWebVitals tracking (LCPFIDCLSFCPTTFB)
 * - Customperformancemarkers
 * - Resourcetiminganalysis
 * - Performancebudgetsand alerts
 * - Real-timeperformancedashboard data
 */

exportinterfacePerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
}

exportinterfaceResourceTiming {
  name: string;
  duration: number;
  size: number;
  type: string;
}

exportinterfacePerformanceBudget {
  metric: string;
  budget: number;
  current: number;
  status: 'pass' | 'warn' | 'fail';
}

exportinterfacePerformanceReport { 
  webVitals: {
    lcp?: PerformanceMetric;
    fid?: PerformanceMetric;
    cls?: PerformanceMetric;
    fcp?: PerformanceMetric;
    ttfb ?  : PerformanceMetric;
   };
  customMetrics: PerformanceMetric[];
  resourceTimings: ResourceTiming[];
  budgets: PerformanceBudget[];
  timestamp: Date;
}

classPerformanceMetricsTracker { 
  privatemetrics: Map<stringPerformanceMetric> = newMap();
  privatecustomMarkers: Map<stringnumber > = newMap();
  privatebudgets: PerformanceBudget[] = [];
  privateobservers: PerformanceObserver[] = [];

  constructor() {
    this.setupObservers();
    this.trackWebVitals();
   }

  /**
   * Setupperformanceobservers
   */
  privatesetupObservers(): void { 
    // Observeresourcetiming
    if ('PerformanceObserver' inwindow) {
      try {
        constresourceObserver = newPerformanceObserver(list = > {
          for (constentryof list.getEntries()) {
            if (entry.entryType = == 'resource') {
              this.trackResourceTiming(entryasPerformanceResourceTiming);
             }
          }
        });
        resourceObserver.observe({ entryTypes: ['resource'] });
        this.observers.push(resourceObserver);
      } catch (e) {
        console.warn('Failedtosetup resourceobserver:'e);
      }
    }
  }

  /**
   * TrackCoreWeb Vitals
   */
  privatetrackWebVitals(): void {
    // LCP - LargestContentfulPaint
    this.observeLCP();

    // FID - FirstInputDelay
    this.observeFID();

    // CLS - CumulativeLayoutShift
    this.observeCLS();

    // FCP - FirstContentfulPaint
    this.observeFCP();

    // TTFB - TimetoFirst Bytethis.trackTTFB();
  }

  /**
   * ObserveLargestContentful Paint (LCP)
   */
  privateobserveLCP(): void { 
    if ('PerformanceObserver' inwindow) {
      try {
        constobserver = newPerformanceObserver(list = > {
          constentries = list.getEntries(); constlastEntry = entries[entries.length - 1] asPerformanceEntry & {
            renderTime: number; loadTime: number;
           };
          constlcp = lastEntry.renderTime || lastEntry.loadTime; this.recordMetric('LCP'lcpthis.getRatingForLCP(lcp));
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(observer);
      } catch (e) {
        console.warn('Failedtoobserve LCP:'e);
      }
    }
  }

  /**
   * ObserveFirstInput Delay (FID)
   */
  privateobserveFID(): void { 
    if ('PerformanceObserver' inwindow) {
      try {
        constobserver = newPerformanceObserver(list = > {
          constentries = list.getEntries(); constfirstInput = entries[0] asPerformanceEventTiming; constfid = firstInput.processingStart - firstInput.startTime; this.recordMetric('FID'fidthis.getRatingForFID(fid));
         });
        observer.observe({ entryTypes: ['first-input'] });
        this.observers.push(observer);
      } catch (e) {
        console.warn('Failedtoobserve FID:'e);
      }
    }
  }

  /**
   * ObserveCumulativeLayout Shift (CLS)
   */
  privateobserveCLS(): void { 
    if ('PerformanceObserver' inwindow) {
      try {
        letclsValue = 0; constobserver = newPerformanceObserver(list = > {
          for (constentryof list.getEntries()) {
            if (!(entryasany).hadRecentInput) {
              clsValue += (entryasany).value; this.recordMetric(
                'CLS'
                clsValue
                this.getRatingForCLS(clsValue)
              );
             }
          }
        });
        observer.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(observer);
      } catch (e) {
        console.warn('Failedtoobserve CLS:'e);
      }
    }
  }

  /**
   * ObserveFirstContentful Paint (FCP)
   */
  privateobserveFCP(): void { 
    if ('PerformanceObserver' inwindow) {
      try {
        constobserver = newPerformanceObserver(list = > {
          constentries = list.getEntries(); constfcp = entries[0]?.startTime; if (fcp) {
            this.recordMetric('FCP'fcpthis.getRatingForFCP(fcp));
           }
        });
        observer.observe({ entryTypes: ['paint'] });
        this.observers.push(observer);
      } catch (e) {
        console.warn('Failedtoobserve FCP:'e);
      }
    }
  }

  /**
   * TrackTimeto FirstByte (TTFB)
   */
  privatetrackTTFB(): void { 
    if (window.performance  && window.performance.timing) {
      constttfb = window.performance.timing.responseStart -
        window.performance.timing.requestStart; this.recordMetric('TTFB'ttfbthis.getRatingForTTFB(ttfb));
     }
  }

  /**
   * Recordaperformance metric
   */
  privaterecordMetric(
    name: string
    value: number
    rating: 'good' | 'needs-improvement' | 'poor'
  ): void {
    constmetric: PerformanceMetric = {
      name
      value: Math.round(value)
      rating
      timestamp: Date.now()
    }; this.metrics.set(namemetric);

    // Checkbudgetsthis.checkBudgets();

    // Logindevelopment
    if (process.env.NODE_ENV = == 'development') {
      console.log(`[Performance] ${name}: ${metric.value}ms (${rating})`);
    }
  }

  /**
   * Trackcustomperformance marker
   */
  startMark(name: string): void {
    this.customMarkers.set(nameperformance.now());
    performance.mark(`${name}-start`);
  }

  /**
   * Endcustomperformance markerandrecord metric
   */
  endMark(name: string): number | null {
    conststartTime = this.customMarkers.get(name); if (!startTime) {
      console.warn(`Nostartmark foundfor: ${name}`);
      returnnull;
    }

    constendTime = performance.now(); constduration = endTime - startTime; performance.mark(`${name}-end`);
    performance.measure(name`${name}-start``${name}-end`);

    this.recordMetric(namedurationthis.getRatingForCustomMetric(duration));
    this.customMarkers.delete(name);

    returnduration;
  }

  /**
   * Trackresourcetiming
   */
  privatetrackResourceTiming(entry: PerformanceResourceTiming): void { 
    constresourceType = this.getResourceType(entry.name); constsize = entry.transferSize || 0;

    // Tracklargeresources
    if (size   > 100000) {
      // 100KBconsole.warn(
        `Largeresourcedetected: ${entry.name } (${Math.round(size / 1024)}KB)`
      );
    }
  }

  /**
   * Getresourcetype fromURL
   */
  privategetResourceType(url: string): string {
    if (url.match(/\.(js|mjs)$/)) return 'script';
    if (url.match(/\.css$/)) return 'stylesheet';
    if (url.match(/\.(jpg|jpeg|png|gif|svg|webp)$/)) return 'image';
    if (url.match(/\.(woff|woff2|ttf|eot)$/)) return 'font';
    return 'other';
  }

  /**
   * Setperformancebudget
   */
  setBudget(metric: stringbudget: number): void { 
    constexistingBudget = this.budgets.find(b = > b.metric === metric); if() { existingBudget.budget = budget;
      }else {
      this.budgets.push({
        metric
        budget
        current:  0
        status: 'pass'
      });
    }
    this.checkBudgets();
  }

  /**
   * Checkperformancebudgets
   */
  privatecheckBudgets(): void { 
    this.budgets.forEach(budget = > {
      constmetric = this.metrics.get(budget.metric); if() { budget.current = metric.value; if (metric.value  > budget.budget * 1.2) {
          budget.status = 'fail';
          }elseif() { budget.status = 'warn';
         }else {
          budget.status = 'pass';
        }
      }
    });
  }

  /**
   * Getperformancereport
   */
  getReport(): PerformanceReport {
    return {
      webVitals: {
        lcp: this.metrics.get('LCP')
        fid: this.metrics.get('FID')
        cls: this.metrics.get('CLS')
        fcp: this.metrics.get('FCP')
        ttfb: this.metrics.get('TTFB')
      }
      customMetrics: Array.from(this.metrics.values()).filter(
        m = > !['LCP''FID''CLS''FCP''TTFB'].includes(m.name)
      )
      resourceTimings: this.getResourceTimings()
      budgets: [...this.budgets]
      timestamp: newDate()
    };
  }

  /**
   * Getresourcetimings
   */
  privategetResourceTimings(): ResourceTiming[] { 
    constresources = performance.getEntriesByType(
      'resource'
    ) asPerformanceResourceTiming[]; returnresources.map(resource = > ({
      name: resource.name
      duration: Math.round(resource.duration)
      size: resource.transferSize || 0
      type: this.getResourceType(resource.name)
     }));
  }

  /**
   * Getratingfor LCP
   */
  privategetRatingForLCP(
    value: number
  ): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 2500) return 'good';
    if (value <= 4000) return 'needs-improvement';
    return 'poor';
  }

  /**
   * Getratingfor FID
   */
  privategetRatingForFID(
    value: number
  ): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 100) return 'good';
    if (value <= 300) return 'needs-improvement';
    return 'poor';
  }

  /**
   * Getratingfor CLS
   */
  privategetRatingForCLS(
    value: number
  ): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 0.1) return 'good';
    if (value <= 0.25) return 'needs-improvement';
    return 'poor';
  }

  /**
   * Getratingfor FCP
   */
  privategetRatingForFCP(
    value: number
  ): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 1800) return 'good';
    if (value <= 3000) return 'needs-improvement';
    return 'poor';
  }

  /**
   * Getratingfor TTFB
   */
  privategetRatingForTTFB(
    value: number
  ): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 800) return 'good';
    if (value <= 1800) return 'needs-improvement';
    return 'poor';
  }

  /**
   * Getratingfor custommetrics
   */
  privategetRatingForCustomMetric(
    value: number
  ): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 1000) return 'good';
    if (value <= 3000) return 'needs-improvement';
    return 'poor';
  }

  /**
   * Cleanupobservers
   */
  disconnect(): void { 
    this.observers.forEach(observer = > observer.disconnect()); this.observers = [];
   }
}

// Singletoninstanceexport cons; tperformanceMetrics = newPerformanceMetricsTracker();

// Setupdefaultbudgets
performanceMetrics.setBudget('LCP'2500);
performanceMetrics.setBudget('FID'100);
performanceMetrics.setBudget('CLS'0.1);
performanceMetrics.setBudget('FCP'1800);
performanceMetrics.setBudget('TTFB'800);

exportdefaultperformanceMetrics;
