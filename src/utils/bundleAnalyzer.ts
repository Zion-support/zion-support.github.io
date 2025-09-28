/**
 * Bundle Analyzer and Optimization Utility
 * Provides insights into bundle size and optimization recommendations
 */

interface BundleAnalysis {
  totalSize: number;
  chunkSizes: Record<string, number>;
  duplicateModules: string[];
  largeModules: Array<{ name: string; size: number }>;
  unusedModules: string[];
  recommendations: string[];
}

interface ModuleInfo {
  name: string;
  size: number;
  type: "vendor" | "app" | "shared";
  isUsed: boolean;
  isDuplicate: boolean;
}

class BundleAnalyzer {
  private modules: ModuleInfo[] = [];
  private isAnalyzing = false;

  /**
   * Analyze current bundle
   */
  async analyzeBundle(): Promise<BundleAnalysis> {
    if (this.isAnalyzing) {
      throw new Error("Bundle analysis already in progress");
    }

    this.isAnalyzing = true;
    console.log("🔍 Starting bundle analysis...");

    try {
      await this.collectModuleInfo();
      const analysis = this.generateAnalysis();

      console.log("✅ Bundle analysis complete");
      return analysis;
    } catch (error) {
      console.error("❌ Bundle analysis failed:", error);
      throw error;
    } finally {
      this.isAnalyzing = false;
    }
  }

  /**
   * Collect module information
   */
  private async collectModuleInfo(): Promise<void> {
    // In a real implementation, this would analyze the actual bundle
    // For now, we'll simulate the analysis based on common patterns

    this.modules = [
      // React ecosystem
      {
        name: "react",
        size: 45000,
        type: "vendor",
        isUsed: true,
        isDuplicate: false,
      },
      {
        name: "react-dom",
        size: 135000,
        type: "vendor",
        isUsed: true,
        isDuplicate: false,
      },
      {
        name: "react-router-dom",
        size: 85000,
        type: "vendor",
        isUsed: true,
        isDuplicate: false,
      },

      // UI libraries
      {
        name: "framer-motion",
        size: 280000,
        type: "vendor",
        isUsed: true,
        isDuplicate: false,
      },
      {
        name: "lucide-react",
        size: 120000,
        type: "vendor",
        isUsed: true,
        isDuplicate: false,
      },

      // Utilities
      {
        name: "clsx",
        size: 2500,
        type: "vendor",
        isUsed: true,
        isDuplicate: false,
      },
      {
        name: "tailwind-merge",
        size: 3200,
        type: "vendor",
        isUsed: true,
        isDuplicate: false,
      },
      {
        name: "axios",
        size: 45000,
        type: "vendor",
        isUsed: true,
        isDuplicate: false,
      },

      // App modules
      {
        name: "src/pages/Home",
        size: 15000,
        type: "app",
        isUsed: true,
        isDuplicate: false,
      },
      {
        name: "src/pages/About",
        size: 12000,
        type: "app",
        isUsed: true,
        isDuplicate: false,
      },
      {
        name: "src/pages/Services",
        size: 18000,
        type: "app",
        isUsed: true,
        isDuplicate: false,
      },
      {
        name: "src/pages/Contact",
        size: 14000,
        type: "app",
        isUsed: true,
        isDuplicate: false,
      },
      {
        name: "src/pages/Blog",
        size: 20000,
        type: "app",
        isUsed: true,
        isDuplicate: false,
      },
      {
        name: "src/pages/Portfolio",
        size: 16000,
        type: "app",
        isUsed: true,
        isDuplicate: false,
      },

      // Components
      {
        name: "src/components/Header",
        size: 8000,
        type: "app",
        isUsed: true,
        isDuplicate: false,
      },
      {
        name: "src/components/Footer",
        size: 6000,
        type: "app",
        isUsed: true,
        isDuplicate: false,
      },
      {
        name: "src/components/HeroSection",
        size: 12000,
        type: "app",
        isUsed: true,
        isDuplicate: false,
      },

      // Utils
      {
        name: "src/utils/performance",
        size: 25000,
        type: "app",
        isUsed: true,
        isDuplicate: false,
      },
      {
        name: "src/utils/analytics",
        size: 18000,
        type: "app",
        isUsed: true,
        isDuplicate: false,
      },
      {
        name: "src/utils/seo",
        size: 15000,
        type: "app",
        isUsed: true,
        isDuplicate: false,
      },
    ];
  }

  /**
   * Generate analysis from collected module info
   */
  private generateAnalysis(): BundleAnalysis {
    const totalSize = this.modules.reduce(
      (sum, module) => sum + module.size,
      0,
    );

    // Group by chunks
    const chunkSizes = this.modules.reduce(
      (chunks, module) => {
        const chunkName = this.getChunkName(module);
        chunks[chunkName] = (chunks[chunkName] || 0) + module.size;
        return chunks;
      },
      {} as Record<string, number>,
    );

    // Find duplicate modules
    const duplicateModules = this.modules
      .filter((module) => module.isDuplicate)
      .map((module) => module.name);

    // Find large modules (>50KB)
    const largeModules = this.modules
      .filter((module) => module.size > 50000)
      .map((module) => ({ name: module.name, size: module.size }))
      .sort((a, b) => b.size - a.size);

    // Find unused modules
    const unusedModules = this.modules
      .filter((module) => !module.isUsed)
      .map((module) => module.name);

    // Generate recommendations
    const recommendations = this.generateRecommendations(
      totalSize,
      largeModules,
      duplicateModules,
      unusedModules,
    );

    return {
      totalSize,
      chunkSizes,
      duplicateModules,
      largeModules,
      unusedModules,
      recommendations,
    };
  }

  /**
   * Get chunk name for module
   */
  private getChunkName(module: ModuleInfo): string {
    if (module.type === "vendor") {
      if (module.name.includes("react")) return "vendor-react";
      if (module.name.includes("router")) return "vendor-router";
      if (module.name.includes("framer") || module.name.includes("lucide"))
        return "vendor-ui";
      return "vendor";
    }

    if (module.name.includes("src/pages/")) return "pages";
    if (module.name.includes("src/components/")) return "components";
    if (module.name.includes("src/utils/")) return "utils";

    return "main";
  }

  /**
   * Generate optimization recommendations
   */
  private generateRecommendations(
    totalSize: number,
    largeModules: Array<{ name: string; size: number }>,
    duplicateModules: string[],
    unusedModules: string[],
  ): string[] {
    const recommendations: string[] = [];

    // Size recommendations
    if (totalSize > 1000000) {
      // 1MB
      recommendations.push(
        "Bundle size is large (>1MB). Consider code splitting and lazy loading.",
      );
    }

    if (totalSize > 2000000) {
      // 2MB
      recommendations.push(
        "Bundle size is very large (>2MB). Implement aggressive code splitting.",
      );
    }

    // Large modules
    if (largeModules.length > 0) {
      recommendations.push(
        `Large modules detected: ${largeModules.map((m) => m.name).join(", ")}. Consider splitting or optimizing.`,
      );
    }

    // Duplicates
    if (duplicateModules.length > 0) {
      recommendations.push(
        `Duplicate modules found: ${duplicateModules.join(", ")}. Use webpack alias or dedupe.`,
      );
    }

    // Unused modules
    if (unusedModules.length > 0) {
      recommendations.push(
        `Unused modules detected: ${unusedModules.join(", ")}. Remove or tree-shake.`,
      );
    }

    // Specific recommendations
    if (largeModules.some((m) => m.name.includes("framer-motion"))) {
      recommendations.push(
        "Framer Motion is large. Consider using CSS animations for simple effects.",
      );
    }

    if (largeModules.some((m) => m.name.includes("lucide-react"))) {
      recommendations.push(
        "Lucide React is large. Import only needed icons to reduce bundle size.",
      );
    }

    // Performance recommendations
    recommendations.push("Enable gzip compression on your server.");
    recommendations.push("Consider using a CDN for static assets.");
    recommendations.push("Implement service worker for caching.");

    return recommendations;
  }

  /**
   * Get bundle size in human-readable format
   */
  static formatSize(bytes: number): string {
    const sizes = ["B", "KB", "MB", "GB"];
    if (bytes === 0) return "0 B";

    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`;
  }

  /**
   * Get compression ratio estimate
   */
  static getCompressionRatio(originalSize: number): number {
    // Typical gzip compression ratios
    return Math.round((1 - (originalSize * 0.3) / originalSize) * 100);
  }
}

// Create singleton instance
export const bundleAnalyzer = new BundleAnalyzer();

// Export class for custom instances
export { BundleAnalyzer };
export type { BundleAnalysis, ModuleInfo };
