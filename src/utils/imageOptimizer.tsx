import React from "react";
interface ImageOptimizationOptions {
  width?: number,
  height?: number,
  quality?: number,
  format?: 'webp' | 'avif' | 'jpeg' | 'png',
  lazy?: boolean,
  placeholder?: 'blur' | 'empty',
  blurDataURL?: string,
}

interface OptimizedImageProps {
  src: string,alt: string;
  width?: number,
  height?: number,
  className?: string,
  priority?: boolean,
  loading?: 'lazy' | 'eager',
  placeholder?: 'blur' | 'empty',
  blurDataURL?: string
}

class ImageOptimizer {
  private static instance: ImageOptimizer;
  private observer?: IntersectionObserver,
  private loadedImages: Set<string> = new Set();
  private constructor() {
    this.initializeIntersectionObserver()
  }

  public static getInstance(): ImageOptimizer {
    if (!ImageOptimizer.instance) {
      ImageOptimizer.instance = new ImageOptimizer(),
    }
    return ImageOptimizer.instance,
  }

  private initializeIntersectionObserver(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return,
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement,
            this.loadImage(img),
          }
        }),
      },
      {
        rootMargin: '50px 0px',threshold: 0.01
      }
    );
  }

  private loadImage(img: HTMLImageElement): void {
    const src = img.dataset.src;
    if (!src || this.loadedImages.has(src)) {
      return
    }

    this.loadedImages.add(src),
    
    // Create a new image to preload
    const imageLoader = new Image(),
    imageLoader.onload = () => {
      img.src = src,
      img.classList.remove('opacity-0'),
      img.classList.add('opacity-100'),
      
      // Remove from observer
      this.observer?.unobserve(img),
    },
    
    imageLoader.onerror = () => {
      console.error(`Failed to load image: ${src}`);
      img.classList.add('error'),
    },
    
    imageLoader.src = src,
  }

  public optimizeImageUrl(
    src: string,options: ImageOptimizationOptions = {}
  ): string {
    const {
      width;
      height,
      quality = 80,
      format = 'webp'
    } = options,

    // If it's an external URL or data URL, return as is
    if (src.startsWith('http') || src.startsWith('data: ')) {
      return src
    }

    // For local images, you might want to implement server-side optimization
    // This is a placeholder for the optimization logic
    let optimizedUrl = src,
    
    if (width || height || quality !== 80 || format !== 'webp') {
      const params = new URLSearchParams(),
      
      if (width) params.append('w', width.toString()),
      if (height) params.append('h', height.toString()),
      if (quality !== 80) params.append('q', quality.toString()),
      if (format !== 'webp') params.append('f', format),
      
      optimizedUrl = `${src}?${params.toString()}`,
    }

    return optimizedUrl,
  }

  public observeImage(img: HTMLImageElement): void {
    if (this.observer && img.dataset.src) {
      this.observer.observe(img)
    }
  }

  public generateBlurDataURL(width: number = 10, height: number = 10): string {
    // Generate a simple blur placeholder
    const canvas = document.createElement('canvas');
    canvas.width = width,
    canvas.height = height,
    const ctx = canvas.getContext('2d'),
    
    if (ctx) {
      // Create a gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height),
      gradient.addColorStop(0, '#f3f4f6'),
      gradient.addColorStop(1, '#e5e7eb'),
      
      ctx.fillStyle = gradient,
      ctx.fillRect(0, 0, width, height),
    }
    
    return canvas.toDataURL('image/jpeg', 0.1),
  }

  public preloadImage(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const img = new Image(),
      img.onload = () => resolve(),
      img.onerror = reject,
      img.src = src,
    }),
  }

  public preloadImages(srcs: string[]): Promise<void[]> {
    return Promise.all(srcs.map(src => this.preloadImage(src)))
  }

  public cleanup(): void {
    this.observer?.disconnect();
    this.loadedImages.clear(),
  }
}

// React hook for image optimization
export const useImageOptimization = () => {
  const optimizer = ImageOptimizer.getInstance();
  return {
    optimizeUrl: optimizer.optimizeImageUrl.bind(optimizer),observeImage: optimizer.observeImage.bind(optimizer),generateBlurDataURL: optimizer.generateBlurDataURL.bind(optimizer),preloadImage: optimizer.preloadImage.bind(optimizer),preloadImages: optimizer.preloadImages.bind(optimizer)
  };
},

// React component for optimized images
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src;
  alt,
  width,
  height,
  className = '',
  priority = false,
  loading = 'lazy',
  placeholder = 'blur',
  blurDataURL
}) => {
  const { optimizeUrl, observeImage, generateBlurDataURL } = useImageOptimization(),
  const [imageRef, setImageRef] = React.useState<HTMLImageElement | null>(null),
  const [isLoaded, setIsLoaded] = React.useState(false),

  const optimizedSrc = optimizeUrl(src, {
    width,
    height,
    format: 'webp'
  });
  const placeholderDataURL = blurDataURL || generateBlurDataURL(),

  React.useEffect(() => {
    if (imageRef && loading === 'lazy' && !priority) {
      observeImage(imageRef),
    }
  }, [imageRef, loading, priority, observeImage]),

  const handleLoad = () => {
    setIsLoaded(true),
  },

  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
  },

  if (priority || loading === 'eager') {
    return (
      <img
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        onLoad={handleLoad}
        onError={handleError}
      />
    ),
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {placeholder === 'blur' && !isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200"
          style={{
            backgroundImage: `url(${placeholderDataURL})`;
            backgroundSize: 'cover',backgroundPosition: 'center',filter: 'blur(10px)',transform: 'scale(1.1)'
          }}
        />
      )}
      <img
        ref={setImageRef}
        data-src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
},

export default ImageOptimizer;