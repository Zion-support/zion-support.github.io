// Bundle optimization utilities
export const bundleOptimizer = {
  // Preload critical resources
  preloadCriticalResources: () => {
    if (typeof window === 'undefined') return;

    const criticalResources = [
      '/assets/index.css',
      '/assets/index.js',
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  },

  // Lazy load non-critical resources
  lazyLoadResource: (url: string, type: 'script' | 'style' | 'image' = 'script') => {
    return new Promise((resolve, reject) => {
      if (type === 'script') {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        script.onload = () => resolve(script);
        script.onerror = reject;
        document.head.appendChild(script);
      } else if (type === 'style') {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        link.onload = () => resolve(link);
        link.onerror = reject;
        document.head.appendChild(link);
      } else if (type === 'image') {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve(img);
        img.onerror = reject;
      }
    });
  },

  // Optimize images
  optimizeImage: (src: string, options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'avif' | 'jpeg' | 'png';
  } = {}) => {
    const { width, height, quality = 80, format = 'webp' } = options;
    
    // For now, return the original src
    // In a real implementation, you'd use a service like Cloudinary or similar
    return src;
  },

  // Tree shake unused exports
  treeShakeExports: (moduleExports: Record<string, any>, usedExports: string[]) => {
    const unusedExports = Object.keys(moduleExports).filter(
      exportName => !usedExports.includes(exportName)
    );
    
    if (unusedExports.length > 0) {
      console.warn(`Unused exports detected: ${unusedExports.join(', ')}`);
    }
    
    return usedExports.reduce((acc, exportName) => {
      if (moduleExports[exportName]) {
        acc[exportName] = moduleExports[exportName];
      }
      return acc;
    }, {} as Record<string, any>);
  },

  // Analyze bundle composition
  analyzeBundle: () => {
    if (typeof window === 'undefined') return null;

    const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    const jsResources = resources.filter(r => r.name.includes('.js'));
    const cssResources = resources.filter(r => r.name.includes('.css'));
    
    const totalSize = resources.reduce((total, resource) => total + (resource.transferSize || 0), 0);
    const jsSize = jsResources.reduce((total, resource) => total + (resource.transferSize || 0), 0);
    const cssSize = cssResources.reduce((total, resource) => total + (resource.transferSize || 0), 0);

    return {
      totalSize,
      jsSize,
      cssSize,
      jsCount: jsResources.length,
      cssCount: cssResources.length,
      resources: resources.map(r => ({
        name: r.name,
        size: r.transferSize || 0,
        duration: r.duration,
        type: r.name.split('.').pop(),
      })),
    };
  },

  // Generate bundle report
  generateBundleReport: () => {
    const analysis = bundleOptimizer.analyzeBundle();
    if (!analysis) return null;

    console.group('📊 Bundle Analysis Report');
    console.log(`Total Size: ${(analysis.totalSize / 1024).toFixed(2)} KB`);
    console.log(`JS Size: ${(analysis.jsSize / 1024).toFixed(2)} KB (${analysis.jsCount} files)`);
    console.log(`CSS Size: ${(analysis.cssSize / 1024).toFixed(2)} KB (${analysis.cssCount} files)`);
    console.log('Resources:', analysis.resources);
    console.groupEnd();

    return analysis;
  },
};

// Initialize bundle optimization
if (typeof window !== 'undefined') {
  // Preload critical resources on page load
  window.addEventListener('load', () => {
    bundleOptimizer.preloadCriticalResources();
  });

  // Generate bundle report in development
  if (process.env.NODE_ENV === 'development') {
    setTimeout(() => {
      bundleOptimizer.generateBundleReport();
    }, 2000);
  }
}