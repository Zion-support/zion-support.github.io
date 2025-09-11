export interface BundleMetrics {
  totalSize: number;
  jsSize: number;
  cssSize: number;
  imageSize: number;
  fontSize: number;
  otherSize: number;
  chunkCount: number;
  largestChunks: Array<{
    name: string;
    size: number;
    percentage: number;
  }>;
}

export class BundleAnalyzer {
  private static instance: BundleAnalyzer;
  private metrics: BundleMetrics | null = null;

  static getInstance(): BundleAnalyzer {
    if (!BundleAnalyzer.instance) {
      BundleAnalyzer.instance = new BundleAnalyzer();
    }
    return BundleAnalyzer.instance;
  }

  /**
   * Analyze bundle size from performance entries
   */
  analyzeBundle(): BundleMetrics {
    if (this.metrics) {
      return this.metrics;
    }

    const entries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    const jsFiles = entries.filter(entry => entry.name.endsWith('.js'));
    const cssFiles = entries.filter(entry => entry.name.endsWith('.css'));
    const imageFiles = entries.filter(entry => 
      /\.(png|jpg|jpeg|gif|svg|webp|avif)$/i.test(entry.name)
    );
    const fontFiles = entries.filter(entry => 
      /\.(woff|woff2|eot|ttf|otf)$/i.test(entry.name)
    );

    const jsSize = jsFiles.reduce((total, entry) => total + (entry.transferSize || 0), 0);
    const cssSize = cssFiles.reduce((total, entry) => total + (entry.transferSize || 0), 0);
    const imageSize = imageFiles.reduce((total, entry) => total + (entry.transferSize || 0), 0);
    const fontSize = fontFiles.reduce((total, entry) => total + (entry.transferSize || 0), 0);
    const otherSize = entries
      .filter(entry => 
        !entry.name.endsWith('.js') && 
        !entry.name.endsWith('.css') && 
        !/\.(png|jpg|jpeg|gif|svg|webp|avif|woff|woff2|eot|ttf|otf)$/i.test(entry.name)
      )
      .reduce((total, entry) => total + (entry.transferSize || 0), 0);

    const totalSize = jsSize + cssSize + imageSize + fontSize + otherSize;

    // Analyze largest chunks
    const chunkSizes = jsFiles.map(entry => ({
      name: entry.name.split('/').pop() || entry.name,
      size: entry.transferSize || 0,
    }));

    const largestChunks = chunkSizes
      .sort((a, b) => b.size - a.size)
      .slice(0, 10)
      .map(chunk => ({
        ...chunk,
        percentage: (chunk.size / totalSize) * 100,
      }));

    this.metrics = {
      totalSize,
      jsSize,
      cssSize,
      imageSize,
      fontSize,
      otherSize,
      chunkCount: jsFiles.length,
      largestChunks,
    };

    return this.metrics;
  }

  /**
   * Get performance recommendations
   */
  getRecommendations(): string[] {
    const metrics = this.analyzeBundle();
    const recommendations: string[] = [];

    // Check total bundle size
    if (metrics.totalSize > 1024 * 1024) { // 1MB
      recommendations.push('Consider code splitting to reduce initial bundle size');
    }

    // Check JavaScript size
    if (metrics.jsSize > 512 * 1024) { // 512KB
      recommendations.push('JavaScript bundle is large, consider lazy loading non-critical code');
    }

    // Check CSS size
    if (metrics.cssSize > 100 * 1024) { // 100KB
      recommendations.push('CSS bundle is large, consider purging unused styles');
    }

    // Check image size
    if (metrics.imageSize > 500 * 1024) { // 500KB
      recommendations.push('Images are large, consider optimizing or lazy loading');
    }

    // Check for large chunks
    const largeChunks = metrics.largestChunks.filter(chunk => chunk.size > 100 * 1024);
    if (largeChunks.length > 0) {
      recommendations.push(`Large chunks detected: ${largeChunks.map(c => c.name).join(', ')}`);
    }

    // Check chunk count
    if (metrics.chunkCount > 20) {
      recommendations.push('High number of chunks, consider consolidating smaller chunks');
    }

    return recommendations;
  }

  /**
   * Format bytes to human readable string
   */
  formatBytes(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  /**
   * Get performance score based on bundle metrics
   */
  getPerformanceScore(): number {
    const metrics = this.analyzeBundle();
    let score = 100;

    // Deduct points for large bundle size
    if (metrics.totalSize > 1024 * 1024) score -= 20;
    else if (metrics.totalSize > 512 * 1024) score -= 10;

    // Deduct points for large JS bundle
    if (metrics.jsSize > 512 * 1024) score -= 20;
    else if (metrics.jsSize > 256 * 1024) score -= 10;

    // Deduct points for large CSS bundle
    if (metrics.cssSize > 100 * 1024) score -= 15;
    else if (metrics.cssSize > 50 * 1024) score -= 5;

    // Deduct points for too many chunks
    if (metrics.chunkCount > 20) score -= 10;
    else if (metrics.chunkCount > 10) score -= 5;

    // Deduct points for large individual chunks
    const largeChunks = metrics.largestChunks.filter(chunk => chunk.size > 100 * 1024);
    score -= largeChunks.length * 5;

    return Math.max(0, score);
  }

  /**
   * Reset metrics
   */
  reset(): void {
    this.metrics = null;
  }
}

export const bundleAnalyzer = BundleAnalyzer.getInstance();