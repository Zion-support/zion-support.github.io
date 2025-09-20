import React from "react";
/**
 * Performance Optimization Utilities
 * Advanced performance monitoring and optimization tools
 */
import { useState, useEffect } from "react";

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
}

class PerformanceOptimizer {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0
  };
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeObservers();
  }

  private initializeObservers(): void {
    // Observe navigation timing
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      const navObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === "navigation") {
            const navEntry = entry as PerformanceNavigationTiming;
            this.metrics.loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
            this.updateMemoryUsage();
          }
        });
      });

      try {
        navObserver.observe({ entryTypes: ["navigation"] });
        this.observers.push(navObserver);
      } catch (error) {
        console.warn("Navigation observer failed:", error);
      }
    }
  }

  debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  optimizeImages(): void {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = "lazy";
      }
      if (!img.decoding) {
        img.decoding = "async";
      }
    });
  }

  preloadCriticalResources(urls: string[]): void {
    if (typeof document === "undefined") return;

    urls.forEach((url) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = url;
      link.as = this.getResourceType(url);
      document.head.appendChild(link);
    });
  }

  private getResourceType(url: string): string {
    const extension = url.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'css':
        return 'style';
      case 'js':
        return 'script';
      case 'woff':
      case 'woff2':
      case 'ttf':
      case 'otf':
        return 'font';
      case 'png':
      case 'jpg':
      case 'jpeg':
      case 'webp':
      case 'svg':
        return 'image';
      default:
        return 'fetch';
    }
  }

  private updateMemoryUsage(): void {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      this.metrics.memoryUsage = memory.usedJSHeapSize;
    }
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// React hook for performance monitoring
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0
  });
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    const optimizer = new PerformanceOptimizer();
    
    const updateMetrics = () => {
      const currentMetrics = optimizer.getMetrics();
      setMetrics(currentMetrics);
      
      // Calculate performance score
      const score = calculatePerformanceScore(currentMetrics);
      setScore(score);
    };

    // Update metrics on load
    if (document.readyState === "complete") {
      updateMetrics();
    } else {
      window.addEventListener("load", updateMetrics);
    }

    // Update metrics periodically
    const interval = setInterval(updateMetrics, 5000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", updateMetrics);
      optimizer.cleanup();
    };
  }, []);

  return { metrics, score };
};

const calculatePerformanceScore = (metrics: PerformanceMetrics): number => {
  let score = 100;
  
  // Deduct points for poor performance
  if (metrics.loadTime > 3000) score -= 20;
  if (metrics.renderTime > 100) score -= 15;
  if (metrics.memoryUsage > 50 * 1024 * 1024) score -= 25; // 50MB
  if (metrics.bundleSize > 1000 * 1024) score -= 10; // 1MB
  
  return Math.max(0, score);
};

export default PerformanceOptimizer;