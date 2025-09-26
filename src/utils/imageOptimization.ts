interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png';
  blur?: boolean;
  placeholder?: 'blur' | 'empty';
}

export class ImageOptimizer {
  private static instance: ImageOptimizer;
  private cache = new Map<string, string>();

  static getInstance(): ImageOptimizer {
    if (!ImageOptimizer.instance) {
      ImageOptimizer.instance = new ImageOptimizer();
    }
    return ImageOptimizer.instance;
  }

  // Generate optimized image URL
  generateOptimizedUrl(
    src: string,
    options: ImageOptimizationOptions = {}
  ): string {
    const {
      width,
      height,
      quality = 80,
      format = 'webp',
      blur = false,
    } = options;

    // Check cache first
    const cacheKey = `${src}:${JSON.stringify(options)}`;
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }

    // For external images, use Next.js Image Optimization API
    if (src.startsWith('http')) {
      const params = new URLSearchParams();
      if (width) params.set('w', width.toString());
      if (height) params.set('h', height.toString());
      params.set('q', quality.toString());
      params.set('f', format);
      if (blur) params.set('blur', '1');

      const optimizedUrl = `/api/image-optimization?url=${encodeURIComponent(src)}&${params.toString()}`;
      this.cache.set(cacheKey, optimizedUrl);
      return optimizedUrl;
    }

    // For local images, use Next.js Image component with optimization
    const params = new URLSearchParams();
    if (width) params.set('w', width.toString());
    if (height) params.set('h', height.toString());
    params.set('q', quality.toString());
    params.set('f', format);
    if (blur) params.set('blur', '1');

    const optimizedUrl = `${src}?${params.toString()}`;
    this.cache.set(cacheKey, optimizedUrl);
    return optimizedUrl;
  }

  // Generate responsive image sources
  generateResponsiveSources(
    src: string,
    sizes: number[],
    options: Omit<ImageOptimizationOptions, 'width' | 'height'> = {}
  ): { src: string; width: number; media?: string }[] {
    return sizes.map((width, index) => ({
      src: this.generateOptimizedUrl(src, { ...options, width }),
      width,
      media: index === 0 ? undefined : `(min-width: ${sizes[index - 1]}px)`,
    }));
  }

  // Generate blur placeholder
  generateBlurPlaceholder(width: number = 10, height: number = 10): string {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#f3f4f6');
      gradient.addColorStop(1, '#e5e7eb');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    return canvas.toDataURL('image/jpeg', 0.1);
  }

  // Preload critical images
  preloadImages(urls: string[]): void {
    urls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    });
  }

  // Lazy load images with intersection observer
  setupLazyLoading(selector: string = 'img[data-src]'): void {
    if (typeof window === 'undefined') return;

    const images = document.querySelectorAll(selector);
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01,
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // Clear cache
  clearCache(): void {
    this.cache.clear();
  }
}

// Export singleton instance
export const imageOptimizer = ImageOptimizer.getInstance();

// Utility functions
export const imageUtils = {
  // Get optimal image format based on browser support
  getOptimalFormat(): 'webp' | 'avif' | 'jpeg' {
    if (typeof window === 'undefined') return 'webp';
    
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    
    if (canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0) {
      return 'avif';
    } else if (canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0) {
      return 'webp';
    }
    
    return 'jpeg';
  },

  // Calculate optimal image dimensions
  calculateOptimalDimensions(
    originalWidth: number,
    originalHeight: number,
    maxWidth: number,
    maxHeight: number
  ): { width: number; height: number } {
    const aspectRatio = originalWidth / originalHeight;
    
    let width = maxWidth;
    let height = maxWidth / aspectRatio;
    
    if (height > maxHeight) {
      height = maxHeight;
      width = maxHeight * aspectRatio;
    }
    
    return {
      width: Math.round(width),
      height: Math.round(height),
    };
  },

  // Generate image alt text
  generateAltText(src: string, context?: string): string {
    const filename = src.split('/').pop()?.split('.')[0] || '';
    const words = filename.split(/[-_]/).map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    );
    
    const baseAlt = words.join(' ');
    return context ? `${baseAlt} - ${context}` : baseAlt;
  },
};