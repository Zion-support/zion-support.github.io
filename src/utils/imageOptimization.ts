export interface ImageOptimizationOptions {
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png' | 'avif';
  width?: number;
  height?: number;
  lazy?: boolean;
  placeholder?: string;
}

export class ImageOptimizer {
  private static instance: ImageOptimizer;
  private imageCache = new Map<string, HTMLImageElement>();
  private loadingPromises = new Map<string, Promise<HTMLImageElement>>();

  static getInstance(): ImageOptimizer {
    if (!ImageOptimizer.instance) {
      ImageOptimizer.instance = new ImageOptimizer();
    }
    return ImageOptimizer.instance;
  }

  /**
   * Preload an image and cache it
   */
  async preloadImage(src: string): Promise<HTMLImageElement> {
    if (this.imageCache.has(src)) {
      return this.imageCache.get(src)!;
    }

    if (this.loadingPromises.has(src)) {
      return this.loadingPromises.get(src)!;
    }

    const promise = new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        this.imageCache.set(src, img);
        this.loadingPromises.delete(src);
        resolve(img);
      };
      img.onerror = () => {
        this.loadingPromises.delete(src);
        reject(new Error(`Failed to load image: ${src}`));
      };
      img.src = src;
    });

    this.loadingPromises.set(src, promise);
    return promise;
  }

  /**
   * Generate optimized image URL with parameters
   */
  generateOptimizedUrl(
    src: string,
    options: ImageOptimizationOptions = {}
  ): string {
    const {
      quality = 80,
      format = 'webp',
      width,
      height,
    } = options;

    // For external images, you might want to use a service like Cloudinary or ImageKit
    // For now, we'll return the original src
    if (src.startsWith('http') && !src.includes('your-image-service.com')) {
      return src;
    }

    // Add optimization parameters
    const url = new URL(src, window.location.origin);
    
    if (quality !== 80) {
      url.searchParams.set('q', quality.toString());
    }
    
    if (format !== 'webp') {
      url.searchParams.set('f', format);
    }
    
    if (width) {
      url.searchParams.set('w', width.toString());
    }
    
    if (height) {
      url.searchParams.set('h', height.toString());
    }

    return url.toString();
  }

  /**
   * Check if WebP is supported
   */
  isWebPSupported(): Promise<boolean> {
    return new Promise((resolve) => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        resolve(webP.height === 2);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });
  }

  /**
   * Generate responsive image sources
   */
  generateResponsiveSources(
    baseSrc: string,
    sizes: number[],
    options: ImageOptimizationOptions = {}
  ): { src: string; width: number; media?: string }[] {
    return sizes.map((width, index) => ({
      src: this.generateOptimizedUrl(baseSrc, { ...options, width }),
      width,
      media: index === sizes.length - 1 ? undefined : `(max-width: ${width}px)`,
    }));
  }

  /**
   * Create a blur placeholder
   */
  createBlurPlaceholder(width: number, height: number, color = '#f3f4f6'): string {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, width, height);
    }
    
    return canvas.toDataURL('image/jpeg', 0.1);
  }

  /**
   * Lazy load images with intersection observer
   */
  observeImage(img: HTMLImageElement, src: string, options: ImageOptimizationOptions = {}) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const optimizedSrc = this.generateOptimizedUrl(src, options);
            img.src = optimizedSrc;
            observer.unobserve(img);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(img);
    return observer;
  }

  /**
   * Clear cache
   */
  clearCache(): void {
    this.imageCache.clear();
    this.loadingPromises.clear();
  }

  /**
   * Get cache size
   */
  getCacheSize(): number {
    return this.imageCache.size;
  }
}

export const imageOptimizer = ImageOptimizer.getInstance();