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

    // Generate optimized URL (simplified implementation)
    let optimizedUrl = src;
    
    if (width || height || quality !== 80) {
      const params = new URLSearchParams();
      if (width) params.append('w', width.toString());
      if (height) params.append('h', height.toString());
      if (quality !== 80) params.append('q', quality.toString());
      if (format !== "webp") params.append('f', format);
      if (blur) params.append('blur', '1');
      
      optimizedUrl = `${src}?${params.toString()}`;
    }

    // Cache the result
    this.cache.set(cacheKey, optimizedUrl);
    return optimizedUrl;
  }

  // Generate responsive image sources
  generateResponsiveSources(src: string, options: ImageOptimizationOptions = {}): { src: string; width: number; media?: string }[] {
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
      ctx.fillStyle = "#f0f0f0";
      ctx.fillRect(0, 0, width, height);
    }
    
    return canvas.toDataURL("image/jpeg", 0.1);
  }

  // Generate alt text from image context
  generateAltText(src: string, context?: string): string {
    // Extract filename and create descriptive alt text
    const filename = src.split('/').pop()?.split('.')[0] || 'image';
    const words = filename.split(/[-_]/);
    const baseAlt = words.join(' ');
    
    return context ? `${baseAlt} - ${context}` : baseAlt;
  }
}

// Export singleton instance
export const imageOptimizer = ImageOptimizer.getInstance();