/**
 * Enhanced Performance Monitoring System
 * Comprehensive performance tracking and optimization
 */

export interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  type:
    | "navigation"
    | "paint"
    | "largest-contentful-paint"
    | "first-input"
    | "cumulative-layout-shift"
    | "custom";
  metadata?: Record<string, unknown>;
}

export interface PerformanceReport {
  metrics: PerformanceMetric[];
  summary: {
    averageLoadTime: number;
    averageRenderTime: number;
    totalMetrics: number;
    performanceScore: number;
  };
  recommendations: string[];
}

class EnhancedPerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private observers: PerformanceObserver[] = [];
  private isMonitoring = false;
  private maxMetrics = 1000;

  /**
   * Initialize performance monitoring
   */
  initialize(): void {
    if (this.isMonitoring) return;

    this.setupPerformanceObservers();
    this.startCustomMetrics();
    this.isMonitoring = true;

    console.log("✅ Enhanced Performance Monitor initialized");
  }

  /**
   * Setup Performance Observer for various metrics
   */
  private setupPerformanceObservers(): void {
    const supportedEntryTypes = [
      "navigation",
      "paint",
      "largest-contentful-paint",
      "first-input",
      "cumulative-layout-shift",
    ].filter((type) => PerformanceObserver.supportedEntryTypes.includes(type));

    supportedEntryTypes.forEach((entryType) => {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            this.recordMetric({
              name: entry.name,
              value:
                entryType === "cumulative-layout-shift"
                  ? (entry as PerformanceEntry & { value: number }).value
                  : entry.duration,
              timestamp: entry.startTime,
              type: entryType as PerformanceMetric["type"],
              metadata: {
                entryType: entry.entryType,
                startTime: entry.startTime,
                duration: entry.duration,
              },
            });
          }
        });

        observer.observe({ entryTypes: [entryType] });
        this.observers.push(observer);
      } catch (error) {
        console.warn(`Failed to setup observer for ${entryType}:`, error);
      }
    });
  }

  /**
   * Start custom performance metrics
   */
  private startCustomMetrics(): void {
    // Monitor memory usage
    this.startMemoryMonitoring();

    // Monitor network performance
    this.startNetworkMonitoring();

    // Monitor frame rate
    this.startFrameRateMonitoring();

    // Monitor user interactions
    this.startInteractionMonitoring();
  }

  /**
   * Monitor memory usage
   */
  private startMemoryMonitoring(): void {
    if ("memory" in performance) {
      setInterval(() => {
        const memory = (
          performance as Performance & {
            memory: {
              usedJSHeapSize: number;
              totalJSHeapSize: number;
              jsHeapSizeLimit: number;
            };
          }
        ).memory;
        this.recordMetric({
          name: "memory-usage",
          value: memory.usedJSHeapSize,
          timestamp: performance.now(),
          type: "custom",
          metadata: {
            totalJSHeapSize: memory.totalJSHeapSize,
            jsHeapSizeLimit: memory.jsHeapSizeLimit,
            usagePercentage:
              (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100,
          },
        });
      }, 5000);
    }
  }

  /**
   * Monitor network performance
   */
  private startNetworkMonitoring(): void {
    if ("connection" in navigator) {
      const connection = (
        navigator as Navigator & {
          connection: {
            effectiveType: string;
            downlink: number;
            rtt: number;
            saveData: boolean;
          };
        }
      ).connection;

      this.recordMetric({
        name: "network-connection",
        value: connection.downlink || 0,
        timestamp: performance.now(),
        type: "custom",
        metadata: {
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          saveData: connection.saveData,
        },
      });
    }
  }

  /**
   * Monitor frame rate
   */
  private startFrameRateMonitoring(): void {
    let lastTime = performance.now();
    let frameCount = 0;

    const measureFrameRate = () => {
      frameCount++;
      const currentTime = performance.now();

      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));

        this.recordMetric({
          name: "frame-rate",
          value: fps,
          timestamp: currentTime,
          type: "custom",
          metadata: { frameCount },
        });

        frameCount = 0;
        lastTime = currentTime;
      }

      requestAnimationFrame(measureFrameRate);
    };

    requestAnimationFrame(measureFrameRate);
  }

  /**
   * Monitor user interactions
   */
  private startInteractionMonitoring(): void {
    let interactionCount = 0;
    let lastInteractionTime = 0;

    const trackInteraction = () => {
      interactionCount++;
      lastInteractionTime = performance.now();
    };

    ["click", "keydown", "scroll", "touchstart"].forEach((eventType) => {
      document.addEventListener(eventType, trackInteraction, { passive: true });
    });

    // Record interaction metrics every 10 seconds
    setInterval(() => {
      if (interactionCount > 0) {
        this.recordMetric({
          name: "user-interactions",
          value: interactionCount,
          timestamp: performance.now(),
          type: "custom",
          metadata: {
            lastInteractionTime,
            timeSinceLastInteraction: performance.now() - lastInteractionTime,
          },
        });
        interactionCount = 0;
      }
    }, 10000);
  }

  /**
   * Record a performance metric
   */
  recordMetric(metric: PerformanceMetric): void {
    this.metrics.unshift(metric);

    // Keep only the most recent metrics
    if (this.metrics.length > this.maxMetrics) {
      this.metrics = this.metrics.slice(0, this.maxMetrics);
    }

    // Log significant performance issues
    this.checkForPerformanceIssues(metric);
  }

  /**
   * Check for performance issues and log warnings
   */
  private checkForPerformanceIssues(metric: PerformanceMetric): void {
    const thresholds = {
      "largest-contentful-paint": 2500,
      "first-input": 100,
      "cumulative-layout-shift": 0.1,
      "frame-rate": 30,
      "memory-usage": 50 * 1024 * 1024, // 50MB
    };

    const threshold = thresholds[metric.name as keyof typeof thresholds];
    if (threshold && metric.value > threshold) {
      console.warn(
        `Performance issue detected: ${metric.name} = ${metric.value} (threshold: ${threshold})`,
      );
    }
  }

  /**
   * Mark a performance milestone
   */
  markMilestone(name: string): void {
    if (performance.mark) {
      performance.mark(name);

      this.recordMetric({
        name: `milestone-${name}`,
        value: performance.now(),
        timestamp: performance.now(),
        type: "custom",
        metadata: { milestone: name },
      });
    }
  }

  /**
   * Measure performance between two marks
   */
  measurePerformance(
    name: string,
    startMark: string,
    endMark?: string,
  ): number | null {
    if (performance.measure) {
      try {
        const measureName = endMark
          ? `${startMark}-to-${endMark}`
          : `${startMark}-duration`;
        performance.measure(measureName, startMark, endMark);

        const measures = performance.getEntriesByName(measureName, "measure");
        if (measures.length > 0) {
          const duration = measures[measures.length - 1].duration;

          this.recordMetric({
            name: `measure-${name}`,
            value: duration,
            timestamp: performance.now(),
            type: "custom",
            metadata: { measureName, startMark, endMark },
          });

          return duration;
        }
      } catch (error) {
        console.warn("Failed to measure performance:", error);
      }
    }

    return null;
  }

  /**
   * Get performance report
   */
  getPerformanceReport(): PerformanceReport {
    const navigationMetrics = this.metrics.filter(
      (m) => m.type === "navigation",
    );
    const paintMetrics = this.metrics.filter((m) => m.type === "paint");
    const lcpMetrics = this.metrics.filter(
      (m) => m.type === "largest-contentful-paint",
    );
    const frameRateMetrics = this.metrics.filter(
      (m) => m.name === "frame-rate",
    );

    const averageLoadTime =
      navigationMetrics.length > 0
        ? navigationMetrics.reduce((sum, m) => sum + m.value, 0) /
          navigationMetrics.length
        : 0;

    const averageRenderTime =
      paintMetrics.length > 0
        ? paintMetrics.reduce((sum, m) => sum + m.value, 0) /
          paintMetrics.length
        : 0;

    const averageFrameRate =
      frameRateMetrics.length > 0
        ? frameRateMetrics.reduce((sum, m) => sum + m.value, 0) /
          frameRateMetrics.length
        : 60;

    // Calculate performance score (0-100)
    const lcpScore =
      lcpMetrics.length > 0 ? Math.max(0, 100 - lcpMetrics[0].value / 25) : 100;
    const frameRateScore = Math.min(100, (averageFrameRate / 60) * 100);
    const performanceScore = Math.round((lcpScore + frameRateScore) / 2);

    const recommendations = this.generateRecommendations();

    return {
      metrics: this.metrics.slice(0, 50), // Return recent metrics
      summary: {
        averageLoadTime,
        averageRenderTime,
        totalMetrics: this.metrics.length,
        performanceScore,
      },
      recommendations,
    };
  }

  /**
   * Generate performance recommendations
   */
  private generateRecommendations(): string[] {
    const recommendations: string[] = [];

    const lcpMetrics = this.metrics.filter(
      (m) => m.type === "largest-contentful-paint",
    );
    const frameRateMetrics = this.metrics.filter(
      (m) => m.name === "frame-rate",
    );
    const memoryMetrics = this.metrics.filter((m) => m.name === "memory-usage");

    if (lcpMetrics.length > 0 && lcpMetrics[0].value > 2500) {
      recommendations.push(
        "Consider optimizing Largest Contentful Paint - currently above 2.5s",
      );
    }

    if (frameRateMetrics.length > 0) {
      const avgFrameRate =
        frameRateMetrics.reduce((sum, m) => sum + m.value, 0) /
        frameRateMetrics.length;
      if (avgFrameRate < 30) {
        recommendations.push(
          "Frame rate is below 30fps - consider optimizing animations and rendering",
        );
      }
    }

    if (memoryMetrics.length > 0) {
      const latestMemory = memoryMetrics[0].value;
      if (latestMemory > 50 * 1024 * 1024) {
        recommendations.push(
          "Memory usage is high - consider implementing memory optimization strategies",
        );
      }
    }

    if (recommendations.length === 0) {
      recommendations.push("Performance is within acceptable ranges");
    }

    return recommendations;
  }

  /**
   * Clear all metrics
   */
  clearMetrics(): void {
    this.metrics = [];

    // Clear performance marks and measures
    if (performance.clearMarks) {
      performance.clearMarks();
    }
    if (performance.clearMeasures) {
      performance.clearMeasures();
    }
  }

  /**
   * Stop monitoring
   */
  stopMonitoring(): void {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
    this.isMonitoring = false;
  }
}

// Export singleton instance
export const enhancedPerformanceMonitor = new EnhancedPerformanceMonitor();

// Auto-initialize
if (typeof window !== "undefined") {
  enhancedPerformanceMonitor.initialize();
}
