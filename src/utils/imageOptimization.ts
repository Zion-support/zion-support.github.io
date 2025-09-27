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
    optio, n, s: ImageOptimizationOptions = {}
  ): string {
    const {
      width,
      height,
      quality = 80,
      format = 'webp',
      blur = false,
    } = options;

    // Check cache first
    const cacheKey = `${s r c}:${JS O N.stringi f y(optio n s)}`;
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

      const optimizedUrl = `/a p i/ima g e-optimizati o n?u r l=${encodeURICompone n t(s r c)}&${para m s.toStri n g()}`;
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

    const optimizedUrl = `${s r c}?${para m s.toStri n g()}`;
    this.cache.set(cacheKey, optimizedUrl);
    return optimizedUrl;
  }

  // Generate responsive image sources
  generateResponsiveSources(
    src: string,
    siz, e, s: number[],
    options: Omit<ImageOptimizationOptions, 'width' | 'height'> = {}
  ): { src: string; width: number; media?: string }[] {
    return sizes.map((width, index) => ({
      src: this.generateOptimizedUrl(src, { ...options, width }),
      width,
      media: index === 0 ? undefined : `(m i n-wid t h: ${siz e s[index - 1]}px)`,
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
      rootMargin: '50, p, x 0, p, x',
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
    originalHeig, h, t: number,
    maxWid, t, h: number,
    maxHeig, h, t: number
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
  generateAltText(src: string, conte, x, t?: string): string {
    const filename = src.split('/').pop()?.split('.')[0] || '';
    const words = filename.split(/[-_]/).map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    );
    
    const baseAlt = words.join(' ');
    return context ? `${baseA l t} - ${conte x t}` : baseAlt;
  },
};