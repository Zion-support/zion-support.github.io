<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  lazy?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  fallbackSrc?: string;
  onLoad?: () => void;
  onError?: () => void;
  className?: string;
  [key: string]: any;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  lazy = true,
  placeholder = 'blur',
  blurDataURL,
  fallbackSrc,
  onLoad,
  onError,
  className,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(!lazy || priority);
=======
import React from 'react';
 const observer = new IntersectionObserver ( ([entry]) => {;
  if (entry && entry.isIntersecting) {;
  return () => observer && observer.disconnect () ;
}, [lazy, priority, isInView]);
//Generate WebP-compatible src const getOptimizedSrc = (originalSrc: string) => {;
  //If it's already optimized or external,  return as-is if (originalSrc && originalSrc.startsWith ('http') || originalSrc && originalSrc.includes ('/ next/image') ) {;
  //For internal images, Next && Next.js will handle optimization return originalSrc;
};';
<defs> <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" style="stop-color:#f3f4f6, stop-opacity:1" /> <stop offset="100%" style="stop-color:#e5e7eb, stop-opacity:1" /> 100%"height=" 100%"fill=" url (#grad) "/> </svg>`) .toString ('base64') ;
}` ;
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  const imgRef = useRef<HTMLDivElement>(null);
=======
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a

<<<<<<< HEAD
 const observer = new IntersectionObserver ( ([entry]) => {
  if (entry && entry.isIntersecting) {
  return () => observer.disconnect ()
}, [lazy, priority, isInView])
//Generate WebP-compatible src const getOptimizedSrc = (originalSrc: string) => {
  //If it's already optimized or external,  return as-is if (originalSrc.startsWith ('http') |originalSrc.includes ('/ next/image') ) {
  //For internal images, Next.js will handle optimization return originalSrc
};'
<defs> <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" style="stop-color:#f3f4f6, stop-opacity:1" /> <stop offset="100%" style="stop-color:#e5e7eb, stop-opacity:1" /> 100%"height=" 100%"fill=" url (#grad) "/> </svg>`) .toString ('base64')
}`
}
  const imgRef = useRef<HTMLDivElement>(null)
  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy |priority |isInView) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      }
      {
        rootMargin: '50px', // Start loading 50px before the image enters viewport
      }
    )
    if (imgRef.current) {
      observer.observe(imgRef.current)
    }
    return () => observer.disconnect()
  }, [lazy, priority, isInView])
  // Generate WebP-compatible src
  const getOptimizedSrc = (originalSrc: string) => {
    // If it's already optimized or external, return as-is
    if (
      originalSrc.startsWith('http') |
      originalSrc.includes('/_next/image')
    ) {
      return originalSrc
    }
    // For internal images, Next.js will handle optimization
    return originalSrc
  }
  const handleLoad = () => {
    setIsLoading(false)
    onLoad?.()
  }
  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
    onError?.()
  }
  // Generate blur placeholder
  const generateBlurDataURL = () => {
    if (blurDataURL) return blurDataURL
    // Generate a simple gray blur placeholder
    return `data:image/svg+xml;base64,${Buffer.from(
      `<svg width="${width |400}" height="${height |300}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f3f4f6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#e5e7eb;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)" />
      </svg>`
<<<<<<< HEAD
    ).toString('base64')}`;
  };

  return (
    <div
      ref={imgRef}
      className={cn('relative overflow-hidden', className)}
      style={{ width, height }}
=======
    ).toString('base64')}`
  }
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
    >
      {isInView && !hasError && (
=======
  // Intersection Observer for lazy loading;
  useEffect(() => {;
    if (!lazy || priority || isInView) return;
    const observer = new IntersectionObserver(;
      ([entry],) => {;
        if (entry && entry.isIntersecting) {;
          setIsInView(true);
          observer && observer.disconnect();
        }
      },;
      {;
        rootMargin: '50px', // Start loading 50px before the image enters viewport;
      }
    );

    if (imgRef && imgRef.current) {;
      observer && observer.observe(imgRef && imgRef.current);
    }

    return () => observer && observer.disconnect();
  }, [lazy, priority, isInView]);

  // Generate WebP-compatible src;
  const getOptimizedSrc = (originalSrc: string,) => {;
    // If it's already optimized or external, return as-is;
    if (;
      originalSrc && originalSrc.startsWith('http') ||;
      originalSrc && originalSrc.includes('/_next/image');
    ) {;
      return originalSrc;
    }

    // For internal images, Next && Next.js will handle optimization;
    return originalSrc;
  };

  const handleLoad = () => {;
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {;
    setHasError(true);
    setIsLoading(false);
    onError?.();
  };

  // Generate blur placeholder;
  const generateBlurDataURL = () => {;
    if (blurDataURL) return blurDataURL;

    // Generate a simple gray blur placeholder;
    return `data:image/svg+xml;base64,${Buffer && Buffer.from(;
      `<svg width="${width || 400}" height="${height || 300}" xmlns="http://www && www.w3.org/2000/svg">;
        <defs>;
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">;
            <stopoffset="0%" style="stop-color:#f3f4f6stop-opacity:1" />;
            <stopoffset="100%" style="stop-color:#e5e7ebstop-opacity:1" />;
          </linearGradient>;
        </defs>;
        <rect width="100%" height="100%" fill="url(#grad)" />;
      </svg>`;
    ).toString('base64')}`;
  };


    >;
      {isInView && !hasError && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        <Image
          src={getOptimizedSrc(src)}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          blurDataURL={
            placeholder === 'blur' ? generateBlurDataURL() : undefined
          }
          onLoad={handleLoad}
          onError={handleError}
<<<<<<< HEAD
          className={cn(
            'transition-opacity duration-300',
=======
          className={cn(            'transition-opacity duration-300'
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
            isLoading ? 'opacity-0' : 'opacity-100'
          )}
          {...props}
        />;
      )}
      {/* Loading placeholder */}
      {isLoading && isInView && (;
        <div className='absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 animate-pulse' />;
      )}
      {/* Error fallback */}
      {hasError && (;
        <div className='absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center'>;
          {fallbackSrc ? (;
            <img
              src={fallbackSrc}
              alt={alt}
              className='max-w-full max-h-full object-contain'
<<<<<<< HEAD
              onLoad={handleLoad}
            />
          ) : (
            <div className='text-gray-400 text-center'>
=======
              onLoad={handleLoad}            />;
          ) : (;
            <div className='text-gray-400 text-center'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
              <svg
                className='w-8 h-8 mx-auto mb-2'
                fill='currentColor'
                viewBox='0 0 20 20'>;
                <path
                  fillRule='evenodd'
                  d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z'
                  clipRule='evenodd'
                />;
              </svg>;
              <span className='text-xs'>Image not available</span>;
            </div>;
          )}
        </div>;
      )}
      {/* Lazy loading placeholder */}
      {!isInView && lazy && !priority && (;
        <div className='absolute inset-0 bg-gray-100 dark:bg-gray-800' />;
      )}
<<<<<<< HEAD
    </div>
<<<<<<< HEAD
=======
    </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
}

<<<<<<< HEAD
=======
  )
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
// Higher-order component for easy migration from regular img tags
export function withImageOptimization<P extends { src: string; alt: string }>(
  Component: React.ComponentType<P>
) {
  return function OptimizedComponent(props: P) {
<<<<<<< HEAD
=======
// Higher-order component for easy migration from regular img tags;
export function withImageOptimization<Pextends { src: string alt: string }>(;
  Component: React && React.ComponentType<P>;
) {;
  return function OptimizedComponent(): any (props: P) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    const { src, alt, ...otherProps } = props;

    return <OptimizedImage src={src} alt={alt} {...(otherProps as any)} />;
  };
}

// Utility to preload critical images;
export function preloadImage(): any (src: string): Promise<void> {;
  return new Promise((resolve, reject) => {;
    const img = new window && window.Image();
    img && img.onload = () => resolve();
    img && img.onerror = reject;
    img && img.src = src;
  });
}

<<<<<<< HEAD
=======
    const { src, alt, ...otherProps } = props
    return <OptimizedImage src={src} alt={alt} {...(otherProps as any)} />
  }
// Utility to preload critical images
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new window.Image()
    img.onload = () => resolve()
    img.onerror = reject
    img.src = src
  })
>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
// Utility to get image dimensions
export function getImageDimensions(
  src: string
): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new window.Image()
    img.onload = () =>
<<<<<<< HEAD
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = reject;
    img.src = src;
  });
}
=======
      resolve({ width: img.naturalWidth, height: img.naturalHeight })
    img.onerror = reject
    img.src = src
  });    img.src = src
  })
}
    img.onerror = reject
    img.src = src
  })
}

>>>>>>> 6e144defc977c0ff385b5a01bd9a6867b3b2d30a
=======
// Utility to get image dimensions;
export function getImageDimensions(): any (;
  src: string;
): Promise<{ width: number; height: number }> {;
  return new Promise((resolve, reject) => {;
    const img = new window && window.Image();
    img && img.onload = () =>;
      resolve({ width: img && img.naturalWidth, height: img && img.naturalHeight });
    img && img.onerror = reject;
    img && img.src = src;
  });    img && img.src = src;
  });
} ;
    img && img.onerror = reject;
    img && img.src = src;
  });
} ;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
