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
  generateOptimizedUrl(src: string, options: ImageOptimizationOptions = {}): string {
    const {
      width,
      height,
      quality = 80,
      format = 'webp',
      blur = false
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

    // For local images, return as-is (Next.js will handle optimization)
    this.cache.set(cacheKey, src);
    return src;
  }

  // Generate responsive image sources
  generateResponsiveSources(src: string, sizes: number[]): string[] {
    return sizes.map(size => this.generateOptimizedUrl(src, { width: size }));
  }

  // Generate srcSet for responsive images
  generateSrcSet(src: string, sizes: number[]): string {
    return sizes
      .map(size => `${this.generateOptimizedUrl(src, { width: size })} ${size}w`)
      .join(', ');
  }

  // Preload critical images
  preloadImage(src: string, options: ImageOptimizationOptions = {}): void {
    if (typeof window === 'undefined') return;

    const optimizedSrc = this.generateOptimizedUrl(src, options);
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = optimizedSrc;
    document.head.appendChild(link);
  }

  // Lazy load images with intersection observer
  lazyLoadImage(img: HTMLImageElement, src: string, options: ImageOptimizationOptions = {}): void {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const optimizedSrc = this.generateOptimizedUrl(src, options);
          img.src = optimizedSrc;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    observer.observe(img);
  }

  // Generate blur placeholder
  generateBlurPlaceholder(width: number = 10, height: number = 10): string {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      // Create a simple gradient placeholder
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#f0f0f0');
      gradient.addColorStop(1, '#e0e0e0');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }

    return canvas.toDataURL();
  }

  // Check if WebP is supported
  isWebPSupported(): boolean {
    if (typeof window === 'undefined') return false;
    
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }

  // Check if AVIF is supported
  isAVIFSupported(): boolean {
    if (typeof window === 'undefined') return false;
    
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
  }

  // Get best format based on browser support
  getBestFormat(): 'avif' | 'webp' | 'jpeg' {
    if (this.isAVIFSupported()) return 'avif';
    if (this.isWebPSupported()) return 'webp';
    return 'jpeg';
  }

  // Optimize image dimensions
  calculateOptimalDimensions(
    originalWidth: number,
    originalHeight: number,
    maxWidth: number,
    maxHeight: number
  ): { width: number; height: number } {
    const aspectRatio = originalWidth / originalHeight;
    
    let width = originalWidth;
    let height = originalHeight;

    if (width > maxWidth) {
      width = maxWidth;
      height = width / aspectRatio;
    }

    if (height > maxHeight) {
      height = maxHeight;
      width = height * aspectRatio;
    }

    return {
      width: Math.round(width),
      height: Math.round(height)
    };
  }

  // Clear cache
  clearCache(): void {
    this.cache.clear();
  }

  // Get cache size
  getCacheSize(): number {
    return this.cache.size;
  }
}

// Create singleton instance
export const imageOptimizer = ImageOptimizer.getInstance();

// Utility functions
export const imageUtils = {
  // Generate optimized image props for Next.js Image component
  generateImageProps: (src: string, options: ImageOptimizationOptions = {}) => {
    const optimizedSrc = imageOptimizer.generateOptimizedUrl(src, options);
    const { width, height } = options;
    
    return {
      src: optimizedSrc,
      ...(width && { width }),
      ...(height && { height }),
      alt: '', // Should be provided by the caller
      loading: 'lazy' as const,
      placeholder: options.placeholder || 'blur',
      blurDataURL: options.placeholder === 'blur' ? imageOptimizer.generateBlurPlaceholder() : undefined
    };
  },

  // Generate responsive image props
  generateResponsiveImageProps: (src: string, sizes: number[]) => {
    const srcSet = imageOptimizer.generateSrcSet(src, sizes);
    const optimizedSrc = imageOptimizer.generateOptimizedUrl(src, { width: sizes[0] });
    
    return {
      src: optimizedSrc,
      srcSet,
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    };
  },

  // Preload critical images
  preloadCriticalImages: (images: Array<{ src: string; options?: ImageOptimizationOptions }>) => {
    images.forEach(({ src, options }) => {
      imageOptimizer.preloadImage(src, options);
    });
  },

  // Lazy load images in a container
  lazyLoadImagesInContainer: (container: HTMLElement) => {
    const images = container.querySelectorAll('img[data-src]');
    images.forEach(img => {
      const src = img.getAttribute('data-src');
      if (src) {
        imageOptimizer.lazyLoadImage(img as HTMLImageElement, src);
      }
    });
  }
};