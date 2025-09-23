<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react',
import Image from 'next/image',
import { cn } from '@/lib/utils',

interface OptimizedImageProps {
  src: string,
  alt: string,
  width?: number,
  height?: number,
  className?: string,
  priority?: boolean,
  placeholder?: 'blur' | 'empty',
  blurDataURL?: string,
  quality?: number,
  sizes?: string,
  onLoad?: () => void,
  onError?: () => void,
  fallbackSrc?: string,
  lazy?: boolean
=======
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  quality?: number;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
  fallbackSrc?: string;
  lazy?: boolean;
>>>>>>> origin/auto/autonomy-17186719616
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  placeholder = 'empty',
  blurDataURL,
  quality = 75,
  sizes,
  onLoad,
  onError,
  fallbackSrc,
  lazy = true,
  ...props
}: OptimizedImageProps) {
<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(true),
  const [hasError, setHasError] = useState(false),
  const [isInView, setIsInView] = useState(!lazy || priority),
  const imgRef = useRef<HTMLDivElement>(null),

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || priority || isInView) return,
=======
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(!lazy || priority);
  const imgRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || priority || isInView) return;
>>>>>>> origin/auto/autonomy-17186719616

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
<<<<<<< HEAD
          setIsInView(true),
          observer.disconnect(),
=======
          setIsInView(true);
          observer.disconnect();
>>>>>>> origin/auto/autonomy-17186719616
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before the image enters viewport
      }
<<<<<<< HEAD
    ),

    if (imgRef.current) {
      observer.observe(imgRef.current),
    }

    return () => observer.disconnect(),
  }, [lazy, priority, isInView]),
=======
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, priority, isInView]);
>>>>>>> origin/auto/autonomy-17186719616

  // Generate WebP-compatible src
  const getOptimizedSrc = (originalSrc: string) => {
    // If it's already optimized or external, return as-is
    if (originalSrc.startsWith('http') || originalSrc.includes('/_next/image')) {
<<<<<<< HEAD
      return originalSrc,
    }
    
    // For internal images, Next.js will handle optimization
    return originalSrc,
  },

  const handleLoad = () => {
    setIsLoading(false),
    onLoad?.(),
  },

  const handleError = () => {
    setHasError(true),
    setIsLoading(false),
    onError?.(),
  },

  // Generate blur placeholder
  const generateBlurDataURL = () => {
    if (blurDataURL) return blurDataURL,
    
    // Generate a simple gray blur placeholder
    return `data: image/svg+xml,base64,${Buffer.from(
      `<svg width="${width || 400}" height="${height || 300}" xmlns="http: //www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f3f4f6,stop-opacity:1" />
            <stop offset="100%" style="stop-color:#e5e7eb,stop-opacity:1" />
=======
      return originalSrc;
    }
    
    // For internal images, Next.js will handle optimization
    return originalSrc;
  };

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  // Generate blur placeholder
  const generateBlurDataURL = () => {
    if (blurDataURL) return blurDataURL;
    
    // Generate a simple gray blur placeholder
    return `data:image/svg+xml;base64,${Buffer.from(
      `<svg width="${width || 400}" height="${height || 300}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f3f4f6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#e5e7eb;stop-opacity:1" />
>>>>>>> origin/auto/autonomy-17186719616
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)" />
      </svg>`
<<<<<<< HEAD
    ).toString('base64')}`,
  },

=======
    ).toString('base64')}`;
  };
>>>>>>> origin/auto/autonomy-17186719616

  return (
    <div
      ref={imgRef}
      className={cn('relative overflow-hidden', className)}
      style={{ width, height }}
    >
      {isInView && !hasError && (
        <Image
          src={getOptimizedSrc(src)}
<<<<<<< HEAD
  // Generate blur placeholder;
  const generateBlurDataURL = () =>: any {
    // Check condition
if (return blurDataURL) {
  $2
}
    // Generate a simple gray blur placeholder;
    return `data:image / svg + xml;base64, ${Buffer.from (
      `<svg width="${width || 400}" height="${height || 300}" xmlns="http://www.w3.org / 2000 / svg">;
        <defs>;
          <linear_gradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">;
            <stop offset="0%" style="stop - color:#f3f4f6;stop - opacity:1" />;
            <stop offset="100%" style="stop - color:#e5e7eb;stop - opacity:1" />;
          </linear_gradient>;
        </defs>;
        <rect width="100%" height="100%" fill="url (#grad)" />;
      </svg>`).to_string ('base64')}`;
  }
    >;
      {isInView && !has_error && (
        <Image;
          src={getOptimizedSrc (src)}
=======
>>>>>>> origin/auto/autonomy-17186719616
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          blurDataURL={placeholder === 'blur' ? generateBlurDataURL() : undefined}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100'
          )}
          {...props}
        />
      )}

      {/* Loading placeholder */}
<<<<<<< HEAD

      {isLoading && isInView && (
        <div className='absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 animate-pulse' />
=======
>>>>>>> origin/auto/autonomy-17186719616
      {(isLoading && isInView) && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 animate-pulse" />
      )}

      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          {fallbackSrc ? (
            <img
              src={fallbackSrc}
              alt={alt}
<<<<<<< HEAD
              className='max-w-full max-h-full object-contain'

              onLoad={handleLoad}            />
          ) : (
            <div className='text-gray-400 text-center'>
              <svg
                className='w-8 h-8 mx-auto mb-2'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z'
                  clipRule='evenodd'
                />;
              </svg>;
              <span className='text-xs'>Image not available</span>;
            </div>;

=======
>>>>>>> origin/auto/autonomy-17186719616
              className="max-w-full max-h-full object-contain"
              onLoad={handleLoad}
            />
          ) : (
            <div className="text-gray-400 text-center">
              <svg
                className="w-8 h-8 mx-auto mb-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs">Image not available</span>
            </div>
          )}
        </div>
      )}

      {/* Lazy loading placeholder */}
      {!isInView && lazy && !priority && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800" />
      )}
    </div>
<<<<<<< HEAD
  ),
}

// Higher-order component for easy migration from regular img tags
export function withImageOptimization<P extends { src: string, alt: string }>(
  Component: React.ComponentType<P>
) {
  return function OptimizedComponent(props: P) {
    const { src, alt, ...otherProps } = props,
=======
  );
}

// Higher-order component for easy migration from regular img tags
export function withImageOptimization<P extends { src: string; alt: string }>(
  Component: React.ComponentType<P>
) {
  return function OptimizedComponent(props: P) {
    const { src, alt, ...otherProps } = props;
>>>>>>> origin/auto/autonomy-17186719616
    
    return (
      <OptimizedImage
        src={src}
        alt={alt}
        {...(otherProps as any)}
      />
<<<<<<< HEAD
    ),
  },
=======
    );
  };
>>>>>>> origin/auto/autonomy-17186719616
}

// Utility to preload critical images
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
<<<<<<< HEAD
    const img = new window.Image(),
    img.onload = () => resolve(),
    img.onerror = reject,
    img.src = src,
  }),
}

// Utility to get image dimensions
export function getImageDimensions(src: string): Promise<{ width: number, height: number }> {
  return new Promise((resolve, reject) => {
    const img = new window.Image(),
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight }),
    img.onerror = reject,
    img.src = src,
  }),
} 
=======
    const img = new window.Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

// Utility to get image dimensions
export function getImageDimensions(src: string): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = reject;
    img.src = src;
  });
} 
>>>>>>> origin/auto/autonomy-17186719616
