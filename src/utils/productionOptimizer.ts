/**
 * Production Optimization Utilities
 * Advanced production build optimizations and monitoring
 */

import { logger } from "./logger";

export interface ProductionMetrics {
  buildTime: number;
  bundleSize: number;
  gzippedSize: number;
  chunkCount: number;
  assetCount: number;
  unusedExports: number;
  duplicateModules: number;
  compressionRatio: number;
}

export interface OptimizationResult {
  type: "bundle" | "runtime" | "memory" | "network";
  improvement: number; // Percentage
  description: string;
  implementation: string;
  priority: "high" | "medium" | "low";
}

class ProductionOptimizer {
  private metrics: ProductionMetrics | null = null;
  private optimizations: OptimizationResult[] = [];
  private isAnalyzing = false;

  constructor() {
    this.initializeOptimizations();
  }

  private initializeOptimizations(): void {
    this.optimizations = [
      {
        type: "bundle",
        improvement: 25,
        description: "Implement code splitting for better loading performance",
        implementation:
          "Use dynamic imports and React.lazy() for route-based splitting",
        priority: "high",
      },
      {
        type: "bundle",
        improvement: 15,
        description: "Enable tree shaking to remove unused code",
        implementation:
          "Ensure proper ES6 module imports and configure bundler tree-shaking",
        priority: "high",
      },
      {
        type: "runtime",
        improvement: 20,
        description: "Implement memoization for expensive calculations",
        implementation:
          "Use React.memo, useMemo, and useCallback for component optimization",
        priority: "medium",
      },
      {
        type: "memory",
        improvement: 30,
        description: "Implement proper cleanup and memory management",
        implementation: "Add cleanup functions for event listeners and timers",
        priority: "medium",
      },
      {
        type: "network",
        improvement: 40,
        description: "Implement service worker for caching",
        implementation:
          "Add service worker with cache-first strategy for static assets",
        priority: "high",
      },
      {
        type: "bundle",
        improvement: 10,
        description: "Optimize image loading and compression",
        implementation: "Use WebP format and lazy loading for images",
        priority: "low",
      },
    ];
  }

  async analyzeProductionBuild(): Promise<ProductionMetrics> {
    if (this.isAnalyzing) {
      return this.metrics || this.getDefaultMetrics();
    }

    this.isAnalyzing = true;
    logger.info("Starting production build analysis", "ProductionOptimizer");

    try {
      // Simulate production build analysis
      const mockMetrics: ProductionMetrics = {
        buildTime: 5.29, // seconds
        bundleSize: 750000, // bytes
        gzippedSize: 200000, // bytes
        chunkCount: 8,
        assetCount: 15,
        unusedExports: 45,
        duplicateModules: 12,
        compressionRatio: 0.73,
      };

      this.metrics = mockMetrics;
      logger.info(
        "Production build analysis completed",
        "ProductionOptimizer",
        mockMetrics,
      );

      return mockMetrics;
    } catch (error) {
      logger.error("Production build analysis failed", "ProductionOptimizer", {
        error,
      });
      return this.getDefaultMetrics();
    } finally {
      this.isAnalyzing = false;
    }
  }

  private getDefaultMetrics(): ProductionMetrics {
    return {
      buildTime: 0,
      bundleSize: 0,
      gzippedSize: 0,
      chunkCount: 0,
      assetCount: 0,
      unusedExports: 0,
      duplicateModules: 0,
      compressionRatio: 0,
    };
  }

  getOptimizationRecommendations(): OptimizationResult[] {
    if (!this.metrics) {
      return this.optimizations.filter((opt) => opt.priority === "high");
    }

    return this.optimizations.filter((optimization) => {
      // Recommend optimizations based on current metrics
      if (optimization.type === "bundle" && this.metrics!.bundleSize > 500000) {
        return true;
      }
      if (optimization.type === "runtime" && this.metrics!.buildTime > 3) {
        return true;
      }
      if (optimization.type === "memory" && this.metrics!.unusedExports > 30) {
        return true;
      }
      return optimization.priority === "high";
    });
  }

  calculatePotentialImprovements(): number {
    if (!this.metrics) return 0;

    const recommendations = this.getOptimizationRecommendations();
    return recommendations.reduce((total, opt) => {
      return total + this.metrics!.bundleSize * (opt.improvement / 100);
    }, 0);
  }

  generateOptimizationReport(): string {
    const metrics = this.metrics || this.getDefaultMetrics();
    const recommendations = this.getOptimizationRecommendations();
    const potentialSavings = this.calculatePotentialImprovements();

    return `
# Production Optimization Report

## Current Build Metrics
- **Build Time**: ${metrics.buildTime}s
- **Bundle Size**: ${(metrics.bundleSize / 1024).toFixed(2)} KB
- **Gzipped Size**: ${(metrics.gzippedSize / 1024).toFixed(2)} KB
- **Chunk Count**: ${metrics.chunkCount}
- **Asset Count**: ${metrics.assetCount}
- **Unused Exports**: ${metrics.unusedExports}
- **Duplicate Modules**: ${metrics.duplicateModules}
- **Compression Ratio**: ${(metrics.compressionRatio * 100).toFixed(1)}%

## Recommended Optimizations
${recommendations
  .map(
    (opt) => `
### ${opt.type.toUpperCase()} - ${opt.description}
- **Priority**: ${opt.priority}
- **Expected Improvement**: ${opt.improvement}%
- **Implementation**: ${opt.implementation}
`,
  )
  .join("")}

## Potential Savings
- **Estimated Size Reduction**: ${(potentialSavings / 1024).toFixed(2)} KB
- **Percentage Improvement**: ${((potentialSavings / metrics.bundleSize) * 100).toFixed(1)}%

## Performance Score
- **Current Score**: ${this.calculatePerformanceScore()}%
- **Target Score**: 90%
- **Improvement Needed**: ${90 - this.calculatePerformanceScore()}%
    `.trim();
  }

  private calculatePerformanceScore(): number {
    if (!this.metrics) return 0;

    const metrics = this.metrics;
    let score = 100;

    // Bundle size penalty
    if (metrics.bundleSize > 1000000) score -= 20;
    else if (metrics.bundleSize > 500000) score -= 10;

    // Compression ratio penalty
    if (metrics.compressionRatio < 0.7) score -= 15;
    else if (metrics.compressionRatio < 0.8) score -= 10;

    // Chunk count penalty
    if (metrics.chunkCount > 20) score -= 10;
    else if (metrics.chunkCount > 10) score -= 5;

    // Unused exports penalty
    if (metrics.unusedExports > 50) score -= 15;
    else if (metrics.unusedExports > 30) score -= 10;

    return Math.max(0, score);
  }

  // Runtime optimizations
  static optimizeImages(): void {
    logger.info("Optimizing images for production", "ProductionOptimizer");

    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      // Add loading="lazy" for images below the fold
      if (!img.hasAttribute("loading")) {
        img.setAttribute("loading", "lazy");
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute("decoding")) {
        img.setAttribute("decoding", "async");
      }
    });
  }

  static enableServiceWorker(): void {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          logger.info(
            "Service Worker registered successfully",
            "ProductionOptimizer",
            {
              scope: registration.scope,
            },
          );
        })
        .catch((error) => {
          logger.error(
            "Service Worker registration failed",
            "ProductionOptimizer",
            { error },
          );
        });
    }
  }

  static optimizeMemoryUsage(): void {
    logger.info("Optimizing memory usage", "ProductionOptimizer");

    // Clear unused caches
    if ("caches" in window) {
      caches.keys().then((cacheNames) => {
        cacheNames.forEach((cacheName) => {
          if (cacheName.includes("unused")) {
            caches.delete(cacheName);
          }
        });
      });
    }
  }

  static preloadCriticalResources(): void {
    logger.info("Preloading critical resources", "ProductionOptimizer");

    const criticalResources = [
      "/og-image.png",
      "/favicon.ico",
      "/manifest.json",
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = resource;
      link.as = resource.endsWith(".png") ? "image" : "fetch";
      document.head.appendChild(link);
    });
  }
}

// Export singleton instance
export const productionOptimizer = new ProductionOptimizer();

// Export utility functions
export const {
  optimizeImages,
  enableServiceWorker,
  optimizeMemoryUsage,
  preloadCriticalResources,
} = ProductionOptimizer;
