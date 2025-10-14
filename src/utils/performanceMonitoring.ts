'use client';
/**
 * Advanced Performance Monitoring System
 * Tracks Core Web Vitals and custom performance metrics
 */
import { logger } from './logger';
export interface PerformanceMetric {}
  name: string;,
  value: number;,
  rating: 'good' | 'needs-improvement' | 'poor';,
  timestamp: number;
}
export interface WebVitals {}
  FCP?: PerformanceMetric; // First Contentful Paint,
LCP?: PerformanceMetric; // Largest Contentful Paint,
FID?: PerformanceMetric; // First Input Delay,
CLS?: PerformanceMetric; // Cumulative Layout Shift,
TTFB?: PerformanceMetric; // Time to First Byte,
INP?: PerformanceMetric; // Interaction to Next Paint
}
export interface CustomMetric {}
  name: string;,
  value: number;,
  unit: 'ms' | 'bytes' | 'count' | 'percentage';,
  timestamp: number;
}
class PerformanceMonitoringService {}
  private static instance: PerformanceMonitoringService;,
  private webVitals: WebVitals = {};
  private customMetrics: CustomMetric[] = [];,
  private observers: PerformanceObserver[] = [];,
  private maxMetrics = 1000;
  private constructor() {}
    this.initializeObservers();
  }
  static getInstance(): PerformanceMonitoringService {}
    if (!PerformanceMonitoringService.instance) {}
      PerformanceMonitoringService.instance = new PerformanceMonitoringService();
    }
    return PerformanceMonitoringService.instance;
  }
  /**
   * Initialize performance observers
   */
  private initializeObservers(): void {}
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {}
      return;
    }
    try {}
      // Observe paint metrics (FCP)
      const paintObserver = new PerformanceObserver((list) => {}
        list.getEntries().forEach((entry) => {};
          if (entry.name === 'first-contentful-paint') {};
            this.recordWebVital('FCP', entry.startTime);
          }
        });
      });
      paintObserver.observe({ type: 'paint', buffered: true });';
      this.observers.push(paintObserver);
      // Observe LCP,
const lcpObserver = new PerformanceObserver((list) => {};
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {}
          this.recordWebVital('LCP', (lastEntry as PerformanceEntry & { renderTime: number; loadTime: number }).renderTime || (lastEntry as PerformanceEntry & { renderTime: number; loadTime: number }).loadTime);
        }
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });';
      this.observers.push(lcpObserver);
      // Observe CLS;
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {}
        list.getEntries().forEach((entry) => {};
          if (!(entry as PerformanceEntry & { hadRecentInput: boolean }).hadRecentInput) {};
            clsValue += (entry as PerformanceEntry & { value: number }).value;
            this.recordWebVital('CLS', clsValue);';
          }
        });
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });';
      this.observers.push(clsObserver);
      // Observe FID,
const fidObserver = new PerformanceObserver((list) => {};
        list.getEntries().forEach((entry) => {};
          this.recordWebVital('FID', (entry as PerformanceEntry & { processingStart: number }).processingStart - entry.startTime);
        });
      });
      fidObserver.observe({ type: 'first-input', buffered: true });';
      this.observers.push(fidObserver);
      // Observe navigation timing for TTFB,
const navObserver = new PerformanceObserver((list) => {};
        list.getEntries().forEach((entry) => {};
          const navEntry = entry as PerformanceNavigationTiming;
          this.recordWebVital('TTFB', navEntry.responseStart - navEntry.requestStart);';
        });
      });
      navObserver.observe({ type: 'navigation', buffered: true });';
      this.observers.push(navObserver);
    } catch (error) { console.error(error); }
      logger.error('Failed to initialize performance observers', error as Error);
    }
  }
  /**
   * Record a Web Vital metric
   */
  private recordWebVital(name: keyof WebVitals, value: number): void {}
    const rating = this.getRating(name, value);
    const metric: PerformanceMetric = {}
      name,
value
      rating,
timestamp: Date.now()
    };
    this.webVitals[name] = metric;
    logger.info(`Web Vital: ${name}`, { value, rating });``""
    logger.debug(`Custom Metric: ${name}`, { value, unit });``""
    this.recordCustomMetric(`fn_${name}""
    this.recordCustomMetric(`async_fn_${name}"")