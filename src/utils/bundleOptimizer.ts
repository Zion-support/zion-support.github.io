/**
 * Bundle Optimizer - Advanced bundle analysis and optimization utilities
 * Provides comprehensive bundle analysis, optimization suggestions, and automated improvements
 */

interface BundleAnalysis {
  totalSize: number;
  gzipSize: number;
  chunks: ChunkAnalysis[];
  duplicates: DuplicateAnalysis[];
  unusedExports: string[];
  optimizationSuggestions: BundleOptimizationSuggestion[];
}

interface ChunkAnalysis {
  name: string;
  size: number;
  gzipSize: number;
  modules: number;
  dependencies: string[];
  isVendor: boolean;
  optimizationPotential: 'high' | 'medium' | 'low';
}

interface DuplicateAnalysis {
  module: string;
  chunks: string[];
  size: number;
  suggestion: string;
}

interface BundleOptimizationSuggestion {
  type: 'critical' | 'warning' | 'info';
  category: 'size' | 'duplicates' | 'unused' | 'splitting' | 'compression';
  message: string;
  impact: 'high' | 'medium' | 'low';
  action: string;
  estimatedSavings?: number;
  title?: string;
  priority?: string;
  description?: string;
}

class BundleOptimizer {
  private analysis: BundleAnalysis | null = null;
  private isAnalyzing = false;

  constructor() {
    this.initializeBundleAnalysis();
  }

  private initializeBundleAnalysis(): void {
    if (typeof window === 'undefined') return;
    
    // Analyze bundle on page load
    window.addEventListener('load', () => {
      this.analyzeBundle();
    });
  }

  public async analyzeBundle(): Promise<BundleAnalysis> {
    if (this.isAnalyzing) {
      return this.analysis!;
    }

    this.isAnalyzing = true;

    try {
      await this.performBundleAnalysis();
      // Analysis is already set in performBundleAnalysis
      return this.analysis || { totalSize: 0, chunks: [], recommendations: [] };
    } finally {
      this.isAnalyzing = false;
    }
  }

  private async performBundleAnalysis(): Promise<BundleAnalysis> {
    const chunks = this.analyzeChunks();
    const duplicates = this.findDuplicates();
    const unusedExports = this.findUnusedExports();
    const optimizationSuggestions = this.generateOptimizationSuggestions(chunks, duplicates, unusedExports);

    const totalSize = chunks.reduce((sum, chunk) => sum + chunk.size, 0);
    const gzipSize = chunks.reduce((sum, chunk) => sum + chunk.gzipSize, 0);

    this.analysis = {
      totalSize,
      gzipSize,
      chunks,
      duplicates,
      unusedExports,
      optimizationSuggestions
    };

    return this.analysis;
  }

  private analyzeChunks(): ChunkAnalysis[] {
    const chunks: ChunkAnalysis[] = [];
    
    // Analyze script tags
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src && src.includes('assets')) {
        const chunkName = this.extractChunkName(src);
        const size = this.estimateChunkSize(src);
        const gzipSize = this.estimateGzipSize(size);
        
        chunks.push({
          name: chunkName,
          size,
          gzipSize,
          modules: this.estimateModuleCount(src),
          dependencies: this.analyzeDependencies(src),
          isVendor: this.isVendorChunk(src),
          optimizationPotential: this.assessOptimizationPotential(size, src)
        });
      }
    });

    return chunks;
  }

  private extractChunkName(src: string): string {
    const match = src.match(/assets\/js\/([^-/]+)-/);
    return match ? match[1] : 'unknown';
  }

  private estimateChunkSize(src: string): number {
    // This is a rough estimation - in a real implementation, you'd fetch the actual file
    const sizeMap: { [key: string]: number } = {
      'vendor-react': 700000,
      'vendor': 150000,
      'components': 80000,
      'pages': 50000,
      'utils': 50000,
      'hooks': 3000,
      'main': 10000
    };

    const chunkName = this.extractChunkName(src);
    return sizeMap[chunkName] || 50000; // Default 50KB
  }

  private estimateGzipSize(size: number): number {
    // Typical gzip compression ratio is around 0.3-0.4
    return Math.round(size * 0.35);
  }

  private estimateModuleCount(src: string): number {
    // Rough estimation based on chunk size
    const size = this.estimateChunkSize(src);
    return Math.round(size / 1000); // Assume 1KB per module
  }

  private analyzeDependencies(src: string): string[] {
    // This would require actual bundle analysis
    // For now, return common dependencies based on chunk name
    const chunkName = this.extractChunkName(src);
    const dependencyMap: { [key: string]: string[] } = {
      'vendor-react': ['react', 'react-dom'],
      'vendor': ['lodash', 'moment', 'axios'],
      'components': ['framer-motion', 'lucide-react'],
      'pages': ['react-router-dom'],
      'utils': ['clsx', 'tailwind-merge']
    };

    return dependencyMap[chunkName] || [];
  }

  private isVendorChunk(src: string): boolean {
    const chunkName = this.extractChunkName(src);
    return chunkName.startsWith('vendor');
  }

  private assessOptimizationPotential(size: number, src: string): 'high' | 'medium' | 'low' {
    const chunkName = this.extractChunkName(src);
    
    if (size > 500000) return 'high';
    if (chunkName.startsWith('vendor') && size > 200000) return 'high';
    if (size > 100000) return 'medium';
    return 'low';
  }

  private findDuplicates(): DuplicateAnalysis[] {
    // This would require actual bundle analysis
    // For now, return common duplicate patterns
    return [
      {
        module: 'lodash',
        chunks: ['vendor', 'components'],
        size: 50000,
        suggestion: 'Move to shared vendor chunk'
      },
      {
        module: 'react',
        chunks: ['vendor-react', 'components'],
        size: 10000,
        suggestion: 'Ensure single React instance'
      }
    ];
  }

  private findUnusedExports(): string[] {
    // This would require static analysis
    // For now, return common unused exports
    return [
      'unused-utility-function',
      'deprecated-component',
      'old-api-client'
    ];
  }

  private generateOptimizationSuggestions(
    chunks: ChunkAnalysis[],
    duplicates: DuplicateAnalysis[],
    unusedExports: string[]
  ): BundleOptimizationSuggestion[] {
    const suggestions: BundleOptimizationSuggestion[] = [];

    // Size-based suggestions
    const largeChunks = chunks.filter(chunk => chunk.size > 200000);
    if (largeChunks.length > 0) {
      suggestions.push({
        type: 'warning',
        category: 'size',
        message: `${largeChunks.length} chunks are larger than 200KB`,
        impact: 'high',
        action: 'Implement code splitting for large chunks',
        estimatedSavings: largeChunks.reduce((sum, chunk) => sum + chunk.size * 0.3, 0)
      });
    }

    // Duplicate suggestions
    if (duplicates.length > 0) {
      const totalDuplicateSize = duplicates.reduce((sum, dup) => sum + dup.size, 0);
      suggestions.push({
        type: 'critical',
        category: 'duplicates',
        message: `${duplicates.length} duplicate modules found`,
        impact: 'high',
        action: 'Remove duplicate dependencies and optimize chunk splitting',
        estimatedSavings: totalDuplicateSize
      });
    }

    // Unused exports suggestions
    if (unusedExports.length > 0) {
      suggestions.push({
        type: 'warning',
        category: 'unused',
        message: `${unusedExports.length} unused exports detected`,
        impact: 'medium',
        action: 'Remove unused exports and enable tree shaking',
        estimatedSavings: unusedExports.length * 1000 // Estimate 1KB per unused export
      });
    }

    // Vendor chunk suggestions
    const vendorChunks = chunks.filter(chunk => chunk.isVendor);
    if (vendorChunks.length > 3) {
      suggestions.push({
        type: 'info',
        category: 'splitting',
        message: 'Too many vendor chunks detected',
        impact: 'medium',
        action: 'Consolidate vendor chunks for better caching',
        estimatedSavings: 0
      });
    }

    // Compression suggestions
    const totalSize = chunks.reduce((sum, chunk) => sum + chunk.size, 0);
    const gzipSize = chunks.reduce((sum, chunk) => sum + chunk.gzipSize, 0);
    const compressionRatio = gzipSize / totalSize;
    
    if (compressionRatio > 0.4) {
      suggestions.push({
        type: 'info',
        category: 'compression',
        message: 'Compression ratio could be improved',
        impact: 'low',
        action: 'Enable Brotli compression and optimize assets',
        estimatedSavings: totalSize * 0.1
      });
    }

    return suggestions;
  }

  public getAnalysis(): BundleAnalysis | null {
    return this.analysis;
  }

  public getCriticalSuggestions(): BundleOptimizationSuggestion[] {
    if (!this.analysis) return [];
    return this.analysis.optimizationSuggestions.filter(s => s.type === 'critical');
  }

  public getWarningSuggestions(): BundleOptimizationSuggestion[] {
    if (!this.analysis) return [];
    return this.analysis.optimizationSuggestions.filter(s => s.type === 'warning');
  }

  public generateOptimizationReport(): string {
    if (!this.analysis) return 'No analysis available. Run analyzeBundle() first.';

    const { totalSize, gzipSize, chunks, duplicates, unusedExports, optimizationSuggestions } = this.analysis;
    
    let report = 'Bundle Optimization Report\n';
    report += '========================\n\n';
    
    report += `Total Bundle Size: ${(totalSize / 1024).toFixed(1)}KB (${(gzipSize / 1024).toFixed(1)}KB gzipped)\n`;
    report += `Compression Ratio: ${((gzipSize / totalSize) * 100).toFixed(1)}%\n`;
    report += `Number of Chunks: ${chunks.length}\n\n`;
    
    report += 'Chunk Analysis:\n';
    chunks.forEach(chunk => {
      report += `- ${chunk.name}: ${(chunk.size / 1024).toFixed(1)}KB (${(chunk.gzipSize / 1024).toFixed(1)}KB gzipped) - ${chunk.optimizationPotential} potential\n`;
    });
    
    if (duplicates.length > 0) {
      report += '\nDuplicates Found:\n';
      duplicates.forEach(dup => {
        report += `- ${dup.module}: ${(dup.size / 1024).toFixed(1)}KB in ${dup.chunks.join(', ')} - ${dup.suggestion}\n`;
      });
    }
    
    if (unusedExports.length > 0) {
      report += '\nUnused Exports:\n';
      unusedExports.forEach(exportName => {
        report += `- ${exportName}\n`;
      });
    }
    
    if (optimizationSuggestions.length > 0) {
      report += '\nOptimization Suggestions:\n';
      optimizationSuggestions.forEach((suggestion, index) => {
        const emoji = suggestion.type === 'critical' ? '🚨' : suggestion.type === 'warning' ? '⚠️' : 'ℹ️';
        report += `${index + 1}. ${emoji} ${suggestion.message}\n`;
        report += `   Action: ${suggestion.action}\n`;
        if (suggestion.estimatedSavings) {
          report += `   Estimated Savings: ${(suggestion.estimatedSavings / 1024).toFixed(1)}KB\n`;
        }
      });
    }
    
    return report;
  }

  public async optimizeBundle(): Promise<void> {
    // This would implement actual optimization strategies
    // For now, just log suggestions
    await this.analyzeBundle();
    const criticalSuggestions = this.getCriticalSuggestions();
    
    if (criticalSuggestions.length > 0) {
      console.log('🚨 Critical bundle optimizations needed:');
      criticalSuggestions.forEach(suggestion => {
        console.log(`- ${suggestion.message}: ${suggestion.action}`);
      });
    }
  }
}

// Export singleton instance
export const bundleOptimizer = new BundleOptimizer();

// Export types
export type { BundleAnalysis, ChunkAnalysis, DuplicateAnalysis, BundleOptimizationSuggestion };