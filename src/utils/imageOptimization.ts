interface ImageOptimizationOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: "webp" | "avif" | "jpeg" | "png";
  blur?: boolean;
  placeholder?: "blur" | "empty";
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

  optimize(src: string, options: ImageOptimizationOptions = {}): string {
    const {
      width,
      height,
      quality = 80,
      format = "webp",
      blur = false,
      placeholder = "empty"
    } = options;

    // Check cache first
    const cacheKey = `${src}:${JSON.stringify(options)}`;
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }

    // Generate optimized URL (this would integrate with your image service)
    let optimizedUrl = src;
    
    if (src.includes('?')) {
      const params = new URLSearchParams(src.split('?')[1]);
      if (width) params.set("w", width.toString());
      if (height) params.set("h", height.toString());
      params.set("q", quality.toString());
      params.set("f", format);
      optimizedUrl = `${src.split('?')[0]}?${params.toString()}`;
    } else {
      const params = new URLSearchParams();
      if (width) params.set("w", width.toString());
      if (height) params.set("h", height.toString());
      params.set("q", quality.toString());
      params.set("f", format);
      optimizedUrl = `${src}?${params.toString()}`;
    }

    this.cache.set(cacheKey, optimizedUrl);
    return optimizedUrl;
  }

  generateResponsiveImages(
    src: string,
    sizes: number[],
    options: ImageOptimizationOptions = {}
  ): { src: string; width: number; media?: string }[] {
    return sizes.map((width, index) => ({
      src: this.generateOptimizedUrl(src, { ...options, width }),
      width,
      media: index === 0 ? undefined : `(min-width: ${sizes[index-1]}px)`
    }));
  }

  private generateOptimizedUrl(src: string, options: ImageOptimizationOptions): string {
    return this.optimize(src, options);
  }

  generateBlurPlaceholder(width: number = 10, height: number = 10): string {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#f3f4f6");
      gradient.addColorStop(1, "#e5e7eb");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }
    
    return canvas.toDataURL("image/jpeg", 0.1);
  }

  preloadImages(urls: string[]): void {
    urls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    });
  }

  setupLazyLoading(selector: string = "img[data-src]"): void {
    if (typeof window === "undefined") return;

    const images = document.querySelectorAll(selector) as NodeListOf<HTMLImageElement>;
    
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
      threshold: 0.01
    });

    images.forEach(img => imageObserver.observe(img));
  }

  detectWebPSupport(): boolean {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }

  detectAVIFSupport(): boolean {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
  }

  getOptimalFormat(): string {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    
    if (canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0) {
      return "avif";
    } else if (canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0) {
      return "webp";
    }
    
    return "jpeg";
  }

  calculateAspectRatio(width: number, height: number): { width: number; height: number } {
    const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
    const divisor = gcd(width, height);
    return {
      width: Math.round(width / divisor),
      height: Math.round(height / divisor)
    };
  }

  // Generate image alt text
  generateAltText(src: string, context?: string): string {
    const filename = src.split("/").pop()?.split(".")[0] || "";
    const words = filename.split(/[-_]/).map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    );
    const baseAlt = words.join(" ");
    return context ? `${baseAlt} - ${context}` : baseAlt;
  }
}

export const imageOptimizer = ImageOptimizer.getInstance();