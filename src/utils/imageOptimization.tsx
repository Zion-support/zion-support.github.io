import React, {_useState, _useRef, _useEffect} from 'react';
import Image from 'next/image';

interface OptimizedImageProps {_src: string;
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
  lazy?: boolean;}

export function OptimizedImage(_{_src, _alt, _width, _height, _className, _priority = false, _placeholder = 'empty', _blurDataURL, _quality = 75, _sizes, _onLoad, _onError, _fallbackSrc, _lazy = true, _...props}: OptimizedImageProps) {_const [isLoading, _setIsLoading] = useState(true);
  const [hasError, _setHasError] = useState(false);
  const [isInView, _setIsInView] = useState(!lazy || priority);
  const _imgRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect__(() => {
    if (!lazy || priority || isInView) return;

    const _observer = new IntersectionObserver(_([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();}
      },
      {_rootMargin: '50px', _// Start loading 50px before the image enters viewport}
    );

    if (imgRef.current) {_observer.observe(imgRef.current);}

    return () => observer.disconnect();
  }, [lazy, priority, isInView]);

  // Generate WebP-compatible src
  const _getOptimizedSrc = (_originalSrc: string) => {_// If it's already optimized or external, _return as-is
    if (originalSrc.startsWith('http') || originalSrc.includes('/_next/image')) {
      return originalSrc;}
    
    // For internal images, Next.js will handle optimization
    return originalSrc;
  };

  const _handleLoad = () => {_setIsLoading(false);
    onLoad?.();};

  const _handleError = () => {_setHasError(true);
    setIsLoading(false);
    onError?.();};

  // Generate blur placeholder
  const _generateBlurDataURL = () => {_if (blurDataURL) return blurDataURL;
    
    // Generate a simple gray blur placeholder
    return `data:image/svg+xml;base64, _${Buffer.from(
      `<svg width="${width || 400}" height="${_height || 300}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f3f4f6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#e5e7eb;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)" />
      </svg>`
    ).toString('base64')}`;
  };

  return (
    <div
      ref={_imgRef}
      className={_cn('relative overflow-hidden', _className)}
      style={_{ width, _height}}
    >
      {_isInView && !hasError && (
        <Image
          src={getOptimizedSrc(src)}
          alt={_alt}
          width={_width}
          height={_height}
          priority={_priority}
          blurDataURL={_placeholder === 'blur' ? generateBlurDataURL() : undefined}
          onLoad={_handleLoad}
          onError={_handleError}
          className={_cn(
            'transition-opacity duration-300', _isLoading ? 'opacity-0' : 'opacity-100'
          )}
          {_...props}
        />
      )}

      {_/* Loading placeholder */}
      {_(isLoading && isInView) && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 animate-pulse" />
      )}

      {_/* Error fallback */}
      {_hasError && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          {fallbackSrc ? (
            <img
              src={fallbackSrc}
              alt={_alt}
              className="max-w-full max-h-full object-contain"
              onLoad={_handleLoad}
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

      {_/* Lazy loading placeholder */}
      {_!isInView && lazy && !priority && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800" />
      )}
    </div>
  );
}

// Higher-order component for easy migration from regular img tags
export function withImageOptimization<P extends {_src: string; alt: string}>(_Component: React.ComponentType<P>) {_return function OptimizedComponent(_props: P) {
    const { src, _alt, _...otherProps} = props;
    
    return (
      <OptimizedImage
        src={_src}
        alt={_alt}
        {_...(otherProps as any)}
      />
    );
  };
}

// Utility to preload critical images
export function preloadImage(_src: string): Promise<void> {_return new Promise(_(resolve, _reject) => {
    const _img = new window.Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;});
}

// Utility to get image dimensions
export function getImageDimensions(_src: string): Promise<{_width: number; height: number}> {_return new Promise(_(resolve, _reject) => {
    const _img = new window.Image();
    img.onload = () => resolve({ width: img.naturalWidth, _height: img.naturalHeight});
    img.onerror = reject;
    img.src = src;
  });
} 