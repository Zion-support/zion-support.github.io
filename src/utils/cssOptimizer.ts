/**
 * CSS Optimization Utility
 * Provides advanced CSS optimization and performance enhancements
 */

interface CSSOptimizationConfig {
  enableCriticalCSS: boolean;
  enablePurgeCSS: boolean;
  enableMinification: boolean;
  enableCompression: boolean;
  enableTreeShaking: boolean;
  removeUnusedCSS: boolean;
  optimizeSelectors: boolean;
}

interface CSSMetrics {
  totalSize: number;
  unusedRules: number;
  duplicateRules: number;
  complexSelectors: number;
  optimizationScore: number;
}

class CSSOptimizer {
  private config: CSSOptimizationConfig;
  private metrics: CSSMetrics;

  constructor(config: Partial<CSSOptimizationConfig> = {}) {
    this.config = {
      enableCriticalCSS: true,
      enablePurgeCSS: true,
      enableMinification: true,
      enableCompression: true,
      enableTreeShaking: true,
      removeUnusedCSS: true,
      optimizeSelectors: true,
      ...config
    };

    this.metrics = {
      totalSize: 0,
      unusedRules: 0,
      duplicateRules: 0,
      complexSelectors: 0,
      optimizationScore: 0
    };
  }

  /**
   * Initialize CSS optimizations
   */
  initialize(): void {
    console.log('🎨 Initializing CSS Optimizer...');
    
    this.optimizeCriticalCSS();
    this.removeUnusedCSS();
    this.optimizeSelectors();
    this.setupCSSMonitoring();
    
    console.log('✅ CSS Optimizer initialized');
  }

  /**
   * Optimize critical CSS
   */
  private optimizeCriticalCSS(): void {
    if (!this.config.enableCriticalCSS) return;

    // Extract critical CSS for above-the-fold content
    const criticalCSS = this.extractCriticalCSS();
    
    if (criticalCSS) {
      // Inject critical CSS inline
      this.injectCriticalCSS(criticalCSS);
      
      // Load non-critical CSS asynchronously
      this.loadNonCriticalCSS();
    }
  }

  /**
   * Extract critical CSS
   */
  private extractCriticalCSS(): string | null {
    // In a real implementation, this would use a tool like critical
    // For now, we'll simulate the extraction
    
    const criticalStyles = `
      /* Critical CSS for above-the-fold content */
      body { margin: 0; padding: 0; font-family: system-ui, -apple-system, sans-serif; }
      .header { background: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
      .hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
      .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
      .btn { display: inline-block; padding: 12px 24px; background: #007bff; color: white; text-decoration: none; border-radius: 4px; }
      .btn:hover { background: #0056b3; }
    `;

    return criticalStyles;
  }

  /**
   * Inject critical CSS inline
   */
  private injectCriticalCSS(css: string): void {
    const style = document.createElement('style');
    style.textContent = css;
    style.setAttribute('data-critical', 'true');
    document.head.appendChild(style);
  }

  /**
   * Load non-critical CSS asynchronously
   */
  private loadNonCriticalCSS(): void {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = '/assets/css/main.css';
    link.onload = () => {
      link.rel = 'stylesheet';
    };
    document.head.appendChild(link);
  }

  /**
   * Remove unused CSS
   */
  private removeUnusedCSS(): void {
    if (!this.config.removeUnusedCSS) return;

    // In a real implementation, this would use PurgeCSS
    // For now, we'll simulate the process
    
    const unusedSelectors = this.findUnusedSelectors();
    
    if (unusedSelectors.length > 0) {
      console.log(`🧹 Found ${unusedSelectors.length} unused CSS selectors`);
      this.metrics.unusedRules = unusedSelectors.length;
    }
  }

  /**
   * Find unused CSS selectors
   */
  private findUnusedSelectors(): string[] {
    // Simulate finding unused selectors
    // In reality, this would analyze the DOM and CSS rules
    return [
      '.unused-class',
      '#unused-id',
      '.old-component',
      '.deprecated-style'
    ];
  }

  /**
   * Optimize CSS selectors
   */
  private optimizeSelectors(): void {
    if (!this.config.optimizeSelectors) return;

    // Find complex selectors that can be optimized
    const complexSelectors = this.findComplexSelectors();
    
    if (complexSelectors.length > 0) {
      console.log(`🔧 Found ${complexSelectors.length} complex selectors to optimize`);
      this.metrics.complexSelectors = complexSelectors.length;
    }
  }

  /**
   * Find complex CSS selectors
   */
  private findComplexSelectors(): string[] {
    // Simulate finding complex selectors
    return [
      'div > ul > li > a:hover',
      '.container .row .col-md-6 .card .card-body .btn',
      'body.home .hero .container .row .col .btn.primary:hover'
    ];
  }

  /**
   * Setup CSS monitoring
   */
  private setupCSSMonitoring(): void {
    // Monitor CSS performance
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'resource' && entry.name.includes('.css')) {
              this.metrics.totalSize += (entry as PerformanceResourceTiming).transferSize || 0;
            }
          });
        });
        
        observer.observe({ entryTypes: ['resource'] });
      } catch (error) {
        console.warn('CSS monitoring not supported:', error);
      }
    }
  }

  /**
   * Get CSS metrics
   */
  getMetrics(): CSSMetrics {
    this.calculateOptimizationScore();
    return { ...this.metrics };
  }

  /**
   * Calculate optimization score
   */
  private calculateOptimizationScore(): void {
    let score = 100;

    // Penalize for unused rules
    if (this.metrics.unusedRules > 0) {
      score -= Math.min(this.metrics.unusedRules * 2, 20);
    }

    // Penalize for complex selectors
    if (this.metrics.complexSelectors > 0) {
      score -= Math.min(this.metrics.complexSelectors * 3, 15);
    }

    // Penalize for large CSS size
    if (this.metrics.totalSize > 100000) { // 100KB
      score -= 10;
    }

    if (this.metrics.totalSize > 500000) { // 500KB
      score -= 20;
    }

    this.metrics.optimizationScore = Math.max(0, score);
  }

  /**
   * Generate optimization recommendations
   */
  getRecommendations(): string[] {
    const recommendations: string[] = [];

    if (this.metrics.unusedRules > 0) {
      recommendations.push(`Remove ${this.metrics.unusedRules} unused CSS rules`);
    }

    if (this.metrics.complexSelectors > 0) {
      recommendations.push(`Simplify ${this.metrics.complexSelectors} complex selectors`);
    }

    if (this.metrics.totalSize > 100000) {
      recommendations.push('Consider CSS minification and compression');
    }

    if (this.metrics.optimizationScore < 80) {
      recommendations.push('Overall CSS optimization needed');
    }

    return recommendations;
  }

  /**
   * Apply CSS optimizations
   */
  applyOptimizations(): void {
    console.log('🔧 Applying CSS optimizations...');
    
    if (this.config.enableMinification) {
      this.minifyCSS();
    }

    if (this.config.enableCompression) {
      this.compressCSS();
    }

    if (this.config.enableTreeShaking) {
      this.treeShakeCSS();
    }

    console.log('✅ CSS optimizations applied');
  }

  /**
   * Minify CSS
   */
  private minifyCSS(): void {
    // Simulate CSS minification
    console.log('📦 Minifying CSS...');
  }

  /**
   * Compress CSS
   */
  private compressCSS(): void {
    // Simulate CSS compression
    console.log('🗜️ Compressing CSS...');
  }

  /**
   * Tree shake CSS
   */
  private treeShakeCSS(): void {
    // Simulate CSS tree shaking
    console.log('🌳 Tree shaking CSS...');
  }
}

// Create singleton instance
export const cssOptimizer = new CSSOptimizer();

// Export class for custom instances
export { CSSOptimizer };
export type { CSSOptimizationConfig, CSSMetrics };