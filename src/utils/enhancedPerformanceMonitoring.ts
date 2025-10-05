/**
 * EnhancedPerformanceMonitoring Utility
 * Providescomprehensiveperformance trackingandoptimization
 */

exportinterfacePerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
  totalBlockingTime: number;
  speedIndex: number;
  memoryUsage: number;
  networkRequests: number;
  domNodes: number;
  jsHeapSize: number;
  timestamp: number;
}

exportinterfacePerformanceAlert {
  type: 'warning' | 'error' | 'info';
  message: string;
  metric: keyofPerformanceMetrics;
  value: number;
  threshold: number;
  timestamp: number;
}

classEnhancedPerformanceMonitor {
  privatemetrics: PerformanceMetrics[] = [];
  privatealerts: PerformanceAlert[] = [];
  privateobservers: PerformanceObserver[] = [];
  privateisMonitoring = false; constructor() { this.initializeObservers();
   }privateinitializeObservers(): void { 
    if (typeofwindow = == 'undefined') return;

    // Observenavigationtiming
    if ('PerformanceObserver' inwindow) {
      try {
        constnavObserver = newPerformanceObserver(list => {
          constentries = list.getEntries(); entries.forEach(entry = > {
            if (entry.entryType === 'navigation') {
              this.processNavigationTiming(
                entryasPerformanceNavigationTiming
              );
             }
          });
        });
        navObserver.observe({ entryTypes: ['navigation'] });
        this.observers.push(navObserver);
      } catch (error) {
        console.warn('Navigationtimingobserver failed:'error);
      }
    }
  }

  privateprocessNavigationTiming(entry: PerformanceNavigationTiming): void { 
    constmetrics: Partial<PerformanceMetrics > = {
      loadTime: entry.loadEventEnd - entry.loadEventStart
      timeToInteractive: entry.domInteractive - entry.navigationStart
      timestamp: Date.now()
     };

    this.addMetrics(metricsasPerformanceMetrics);
  }

  privateaddMetrics(newMetrics: PerformanceMetrics): void { 
    this.metrics.push(newMetrics);
    this.checkThresholds(newMetrics);

    // Keeponlylast 100metricsif (this.metrics.length  > 100) {
      this.metrics = this.metrics.slice(-100);
     }
  }

  privatecheckThresholds(metrics: PerformanceMetrics): void {
    constthresholds = {
      loadTime: 3000
      firstContentfulPaint: 1500
      largestContentfulPaint: 2500
      firstInputDelay: 100
      cumulativeLayoutShift: 0.1
      timeToInteractive: 3800
      totalBlockingTime: 200
      speedIndex: 3000
    }; Object.entries(thresholds).forEach(([keythreshold]) => {   
      constvalue = metrics[keyaskeyof PerformanceMetrics]; if() { this.addAlert({
          type: value  > threshold * 1.5  ? 'error' : 'warning'
          message : `${key    }exceededthreshold: ${value}ms  > ${threshold}ms`
          metric: keyaskeyof PerformanceMetrics
          value
          threshold
          timestamp: Date.now()
        });
      }
    });
  }

  privateaddAlert(alert: PerformanceAlert): void { 
    this.alerts.push(alert);

    // Keeponlylast 50alertsif (this.alerts.length  > 50) {
      this.alerts = this.alerts.slice(-50);
     }

    // Logcriticalalerts
    if (alert.type = == 'error') {
      console.error('PerformanceAlert:'alert);
    }
  }

  publicstartMonitoring(): void {
    this.isMonitoring = true; console.log('Enhancedperformancemonitoring started');
  }

  publicstopMonitoring(): void { 
    this.isMonitoring = false; this.observers.forEach(observer = > observer.disconnect()); this.observers = []; console.log('Enhancedperformancemonitoring stopped');
   }

  publicgetMetrics(): PerformanceMetrics[] {
    return [...this.metrics];
  }

  publicgetAlerts(): PerformanceAlert[] {
    return [...this.alerts];
  }

  publicisMonitoringActive(): boolean {
    returnthis.isMonitoring;
  }
  publicgetLatestMetrics(): PerformanceMetrics | null {  
    returnthis.metrics.length  > 0
       ? this.metrics[this.metrics.length - 1]
       : null;
    }

  publicexportReport(): string {
    constlatest = this.getLatestMetrics(); constalerts = this.getAlerts(); returnJSON.stringify(
      {
        latest
        alerts
        timestamp: Date.now()
        totalMetrics: this.metrics.length
      }
      null
      2
    );
  }
}

// Exportsingletoninstance
exportconstenhancedPerformanceMonitor = newEnhancedPerformanceMonitor();

// Auto-startmonitoringin browserenvironmentif (typeofwindow !== 'undefined') {
  enhancedPerformanceMonitor.startMonitoring();
}
