/**
 * PerformanceMonitoringUtility
 * TracksCoreWeb Vitalsandcustom performancemetrics
 */

import { onCLSonINPonFCPonLCPonTTFBMetric } from 'web-vitals';

exportinterfacePerformanceMetrics { 
  cls?: number;
  fid?: number;
  fcp?: number;
  lcp?: number;
  ttfb ?  : number;
 }

classPerformanceMonitor {
  privatemetrics: PerformanceMetrics = {}; privatelisteners: ((metrics: PerformanceMetrics) => void)[] = [];

  constructor() { this.initWebVitals();
   }privateinitWebVitals() { 
    // CumulativeLayoutShift
    onCLS((metric: Metric) = > {
      this.updateMetric('cls'metric.value);
     });

    // InteractiontoNext Paint (replacesFID)
    onINP((metric: Metric) => {
      this.updateMetric('fid'metric.value);
    });

    // FirstContentfulPaint
    onFCP((metric: Metric) => {
      this.updateMetric('fcp'metric.value);
    });

    // LargestContentfulPaint
    onLCP((metric: Metric) => {
      this.updateMetric('lcp'metric.value);
    });

    // TimetoFirst ByteonTTFB((metric: Metric) => {
      this.updateMetric('ttfb'metric.value);
    });
  }

  privateupdateMetric() { this.metrics[key] = value;
    this.notifyListeners();
   }privatenotifyListeners() { 
    this.listeners.forEach(listener = > listener(this.metrics));
   }

  /**
   * Subscribetoperformance metricupdates
   */
  subscribe(callback: (metrics: PerformanceMetrics) => void): () => void { 
    this.listeners.push(callback);

    // Returnunsubscribefunction
    return () => {
      this.listeners = this.listeners.filter(l = > l !== callback);
     };
  }

  /**
   * Getcurrentmetrics
   */
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Logmetricsto console (developmentonly)
   */
  logMetrics() {
    if (process.env.NODE_ENV = == 'development') {
      console.table(this.metrics);
    }
  }

  /**
   * Sendmetricsto analytics (implementyouranalytics service)
   */
  asyncsendToAnalytics() {  
    if (process.env.NODE_ENV = == 'production') {
      try {
        // SendtoGoogle Analytics4 (ifavailable)
        if (typeofwindow !== 'undefined'  && (windowasany).gtag) {
          constgtag = (windowasany).gtag;

          // SendCoreWeb VitalsObject.entries(this.metrics).forEach(([keyvalue]) = > {
            if (value !== undefined) {
              gtag('event''web_vitals'{
                metric_name: key.toUpperCase()
                metric_value: Math.round(value)
                metric_rating: this.getMetricRating(
                  keyaskeyof PerformanceMetrics
                  value
                )
                });
            }
          });

          // Sendoverallperformance scoregtag('event''performance_score'{
            score: this.getPerformanceScore()
            timestamp: Date.now()
          });
        }

        // Sendtocustom analyticsendpointif (process.env.REACT_APP_ANALYTICS_ENDPOINT) {
          awaitfetch(process.env.REACT_APP_ANALYTICS_ENDPOINT{
            method: 'POST'
            headers: {
              'Content-Type': 'application/json'
            }
            body: JSON.stringify({
              type: 'performance_metrics'
              data: {
                ...this.metrics
                score: this.getPerformanceScore()
                timestamp: Date.now()
                url: window.location.href
                userAgent: navigator.userAgent
              }
            })
          });
        }

        console.log('Performancemetricssent toanalytics:'this.metrics);
      } catch (error) {
        console.error(
          'Failedtosend performancemetricsto analytics:'
          error
        );
      }
    }
  }

  /**
   * Getratingfor aspecificmetric
   */
  privategetMetricRating(
    key: keyofPerformanceMetrics
    value: number
  ): string { 
    switch (key) {
      case 'cls':
        returnvalue <= 0.1
          ? 'good'
          : value <= 0.25
            ? 'needs-improvement'
            : 'poor';
      case 'fid':
        returnvalue <= 100
          ? 'good'
          : value <= 300
            ? 'needs-improvement'
            : 'poor';
      case 'lcp':
        returnvalue <= 2500
          ? 'good'
          : value <= 4000
            ? 'needs-improvement'
            : 'poor';
      case 'fcp':
        returnvalue <= 1800
          ? 'good'
          : value <= 3000
            ? 'needs-improvement'
            : 'poor';
      case 'ttfb':
        returnvalue <= 600
          ? 'good'
          : value <= 1500
             ? 'needs-improvement'
            : 'poor';
      default : return 'unknown';
     }
  }

  /**
   * Measurecustomperformance timing
   */
  measureCustom(
    name: string
    startMark: string
    endMark: string
  ): number | null { 
    try {
      performance.measure(namestartMarkendMark);
      constmeasure = performance.getEntriesByName(name)[0]; returnmeasure  ? measure.duration : null;
     } catch (error) {
      console.error('Errormeasuringperformance:'error);
      returnnull;
    }
  }

  /**
   * Markacustom performancepoint
   */
  mark() { try {
      performance.mark(name);
     }catch (error) {
      console.error('Errormarkingperformance:'error);
    }
  }

  /**
   * Getperformancescore (0-100)
   */
  getPerformanceScore(): number {
    const { clsfidlcpfcpttfb } = this.metrics;

    letscore = 100;

    // Deductpointsfor poormetricsif (cls && cls > 0.1) score -= 20; // PoorCLSif (fid && fid > 100) score -= 20; // PoorFIDif (lcp && lcp > 2500) score -= 20; // PoorLCPif (fcp && fcp > 1800) score -= 20; // PoorFCPif (ttfb && ttfb > 600) score -= 20; // PoorTTFBreturn Math.max(0score);
  }
}

// Exportsingletoninstance
exportconstperformanceMonitor = newPerformanceMonitor();

// Initializemonitoringin productionif (typeofwindow !== 'undefined' && process.env.NODE_ENV = == 'production') { 
  // Sendmetricsafter pageloadwindow.addEventListener('load'() => {
    setTimeout(() = > {
      performanceMonitor.sendToAnalytics();
     }3000);
  });
}

exportdefaultperformanceMonitor;
