export interface ImageOptimizationOptions {
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

  // Generate optimized image URL
  generateOptimizedUrl(src: string, options: ImageOptimizationOptions = {}): string {
    const {
      width,
      height,
      quality = 80,
      format = "webp",
      blur = false
    } = options;

    // Check cache first
    const cacheKey = `${src}:${JSON.stringify(options)}`;
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey)!;
    }

    // For external images, use Next.js Image Optimization API
    if (src.startsWith("http")) {
      const params = new URLSearchParams();
      if (width) params.set("w", width.toString());
      if (height) params.set("h", height.toString());
      params.set("q", quality.toString());
      params.set("f", format);
      if (blur) params.set("blur", "1");

      const optimizedUrl = `/api/image-optimization?url=${encodeURIComponent(src)}&${params.toString()}`;
      this.cache.set(cacheKey, optimizedUrl);
      return optimizedUrl;
    }

    // For local images, use Next.js Image component optimization
    const optimizedUrl = src;
    this.cache.set(cacheKey, optimizedUrl);
    return optimizedUrl;
  }

  // Generate responsive image sources
  generateResponsiveSources(src: string, options: ImageOptimizationOptions = {}): {
    src: string;
    width: number;
    media?: string;
  }[] {
    const sizes = [320, 640, 768, 1024, 1280, 1920];
    return sizes.map((width, index) => ({
      src: this.generateOptimizedUrl(src, { ...options, width }),
      width,
      media: index === 0 ? undefined : `(min-width: ${sizes[index - 1]}px)`
    }));
  }

  // Generate blur placeholder
  generateBlurPlaceholder(width: number = 10, height: number = 10): string {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    
    if (ctx) {
      // Create a simple gradient placeholder
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#f0f0f0");
      gradient.addColorStop(1, "#e0e0e0");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }
    
    return canvas.toDataURL("image/jpeg", 0.1);
  }

  // Generate alt text from filename
  generateAltText(filename: string, context?: string): string {
    const words = filename
      .replace(/[^a-zA-Z0-9\s]/g, " ")
      .split(/\s+/)
      .filter(word => word.length > 0)
      .map(word => word.toLowerCase());
    
    const baseAlt = words.join(" ");
    return context ? `${baseAlt} - ${context}` : baseAlt;
  }

  // Preload critical images
  preloadImage(src: string, options: ImageOptimizationOptions = {}): Promise<void> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = this.generateOptimizedUrl(src, options);
    });
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

// Export singleton instance
export const imageOptimizer = ImageOptimizer.getInstance();