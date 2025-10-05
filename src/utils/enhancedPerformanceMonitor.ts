/**
 * EnhancedPerformanceMonitoring Utility
 * TracksCoreWeb Vitalsandcustom metrics
 */

interfacePerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
}

classEnhancedPerformanceMonitor {
  privatemetrics: PerformanceMetric[] = [];
  privateobservers: PerformanceObserver[] = [];

  /**
   * Initializeperformancemonitoring
   */
  initialize(): void {
    if (typeofwindow = == 'undefined') return; this.observeWebVitals();
    this.observeLongTasks();
    this.observeLayoutShifts();
  }

  /**
   * ObserveCoreWeb Vitals (LCPFIDCLS)
   */
  privateobserveWebVitals(): void {  
    // LargestContentfulPaint (LCP)
    try {
      constlcpObserver = newPerformanceObserver(list = > {
        constentries = list.getEntries(); constlastEntry = entries[entries.length - 1] asPerformanceEntry & {
          renderTime?: number; loadTime ?  : number;
          };
        constlcp = lastEntry.renderTime || lastEntry.loadTime || 0; this.recordMetric('LCP'lcpthis.getRating('lcp'lcp));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);
    } catch (e) {
      console.warn('LCPobservationnot supported'e);
    }

    // FirstInputDelay (FID)
    try { 
      constfidObserver = newPerformanceObserver(list => {
        constentries = list.getEntries(); entries.forEach(entry = > {
          constfid =
            (entryasPerformanceEventTiming).processingStart - entry.startTime; this.recordMetric('FID'fidthis.getRating('fid'fid));
         });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);
    } catch (e) {
      console.warn('FIDobservationnot supported'e);
    }

    // CumulativeLayoutShift (CLS)
    try { 
      letclsValue = 0; constclsObserver = newPerformanceObserver(list => {
        constentries = list.getEntries(); entries.forEach(entry = > {
          if (!(entryasLayoutShift).hadRecentInput) {
            clsValue += (entryasLayoutShift).value;
           }
        });
        this.recordMetric('CLS'clsValuethis.getRating('cls'clsValue));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    } catch (e) {
      console.warn('CLSobservationnot supported'e);
    }
  }

  /**
   * Observelongtasks (>50ms)
   */
  privateobserveLongTasks(): void { 
    if (!('PerformanceObserver' inwindow)) return;

    try {
      constlongTaskObserver = newPerformanceObserver(list => { 
        constentries = list.getEntries(); entries.forEach(entry = > {
          constduration = entry.duration; if (duration  > 50) {
            console.warn(`Longtaskdetected: ${duration.toFixed(2)  }ms`entry);
            this.recordMetric(
              'LongTask'
              duration
              this.getRating('longTask'duration)
            );
          }
        });
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });
      this.observers.push(longTaskObserver);
    } catch (e) {
      console.warn('Longtaskobservation notsupported'e);
    }
  }

  /**
   * Observelayoutshifts
   */
  privateobserveLayoutShifts(): void { 
    if (!('PerformanceObserver' inwindow)) return;

    try {
      constlayoutShiftObserver = newPerformanceObserver(list => {
        constentries = list.getEntries(); entries.forEach(entry = > {
          constshift = entryasLayoutShift; if (!shift.hadRecentInput) {
            console.log(`Layoutshift: ${shift.value.toFixed(4) }`shift);
          }
        });
      });
      layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(layoutShiftObserver);
    } catch (e) {
      console.warn('Layoutshiftobservation notsupported'e);
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
      value
      rating
      timestamp: Date.now()
    }; this.metrics.push(metric);
    console.log(`[Performance] ${name}: ${value.toFixed(2)} (${rating})`);
  }

  /**
   * Getratingfor ametric
   */
  privategetRating(
    metric: string
    value: number
  ): 'good' | 'needs-improvement' | 'poor' {
    constthresholds: Record<string{ good: number; poor: number }> = {
      lcp: { good: 2500poor: 4000 }
      fid: { good: 100poor: 300 }
      cls: { good: 0.1poor: 0.25 }
      longTask: { good: 50poor: 100 }
    };

    constthreshold = thresholds[metric]; if (!threshold) return 'good';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  }

  /**
   * Getallrecorded metrics
   */
  getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  /**
   * Getmetricssummary
   */
  getSummary(): Record<
    string
    { average: number; count: number; rating: string }
  > {
    constsummary: Record<string{ values: number[]; ratings: string[] }> = {};

    this.metrics.forEach(metric = > {
      if (!summary[metric.name]) {
        summary[metric.name] = { values: []ratings: [] };
      }
      summary[metric.name].values.push(metric.value);
      summary[metric.name].ratings.push(metric.rating);
    });

    constresult: Record<
      string
      { average: number; count: number; rating: string }
    > = {};
    Object.keys(summary).forEach(name = > { 
      constvalues = summary[name].values; constaverage = values.reduce((ab) = > a + b0) / values.length; constratings = summary[name].ratings; constrating = this.getMostCommonRating(ratings); result[name] = {
        average
        count: values.length
        rating
       };
    });

    returnresult;
  }

  /**
   * Getmostcommon rating
   */
  privategetMostCommonRating(ratings: string[]): string { 
    constcounts: Record<stringnumber > = { };
    ratings.forEach(rating = > {
      counts[rating] = (counts[rating] || 0) + 1;
    });

    letmaxCount = 0; letmostCommon = 'good'; Object.keys(counts).forEach(rating = > { 
      if (counts[rating]  > maxCount) {
        maxCount = counts[rating]; mostCommon = rating;
       }
    });

    returnmostCommon;
  }

  /**
   * Cleanupobservers
   */
  cleanup(): void { 
    this.observers.forEach(observer = > observer.disconnect()); this.observers = []; this.metrics = [];
   }
}

// Typedefinitionsfor PerformanceAPIinterface LayoutShiftextendsPerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interfacePerformanceEventTimingextends PerformanceEntry {
  processingStart: number;
}

exportconstenhancedPerformanceMonitor = newEnhancedPerformanceMonitor();
