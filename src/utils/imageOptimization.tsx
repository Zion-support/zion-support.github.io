<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
const imgRef = useRef<HTMLDivElement>(null);



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
 const observer = new IntersectionObserver ( ([entry]) => {
=======





>>>>>>>  const observer = new IntersectionObserver ( ([entry]) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
    if (!lazy |priority |isInView) return
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    if (!lazy |priority |isInView) return
    if (!lazy || priority || isInView) return;
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    const observer = new IntersectionObserver(
      ([entry],) => {
        if (entry && entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React, { useState, useRef, useEffect } from 'react',;
import Image from 'next/image',;
import { cn } from '@/lib/utils',;
interface OptimizedImageProps {;
  src: string,;
  alt: string,;
  width?: number,;
  height?: number,;
  className?: string,;
  priority?: boolean,;
  placeholder?: 'blur' | 'empty',;
  blurDataURL?: string,;
  quality?: number,;
  sizes?: string,;
  onLoad?: () => void,;
  onError?: () => void,;
  fallbackSrc?: string,;
  lazy?: boolean;
=======
const observer = new IntersectionObserver ( ([entry]) => {
  // Check condition
if ( {) {
  $2
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
}
;
export function OptimizedImage({;
  src,;
  alt,;
  width,;
  height,;
  className,;
  priority = false,;
  placeholder = 'empty',;
  blurDataURL,;
  quality = 75,;
  sizes,;
  onLoad,;
  onError,;
  fallbackSrc,;
  lazy = true,;
  ...props;
}: OptimizedImageProps) {;
  const [isLoading, setIsLoading] = useState(true),;
  const [hasError, setHasError] = useState(false),;
  const [isInView, setIsInView] = useState(!lazy || priority),;
  const imgRef = useRef<HTMLDivElement>(null),;
  // Intersection Observer for lazy loading;
<<<<<<< HEAD

    return () => observer.disconnect ();
  }, [lazy, priority, isInView]);
  // Generate WebP - compatible src;
  const getOptimizedSrc = (original_src: string, ) =>: any {
    // If it's already optimized or external, return as - is;
    // Check condition
if (||) {
  $2
}
      original_src.includes ('/_next / image')) {
      return original_src;
    }
    // For internal images, Next.js will handle optimization;
    return original_src;

=======
  useEffect(() => {;
    if (!lazy || priority || isInView) return,;
    const observer = new IntersectionObserver(;
      ([entry]) => {;
        if (entry && entry.isIntersecting) {;
          setIsInView(true),;
          observer.disconnect();
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
  const getOptimizedSrc = (originalSrc: string,) => {
    // If it's already optimized or external, return as-is
    if (
      originalSrc.startsWith('http') |
      originalSrc.includes('/_next/image')
    ) {
      return originalSrc
    }
    // For internal images, Next.js will handle optimization
    return originalSrc
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

  useEffect(() => {;
    if (!lazy || priority || isInView) return,;
    const observer = new IntersectionObserver(;
      ([entry]) => {;
        if (entry && entry.isIntersecting) {;
          setIsInView(true),;
          observer.disconnect();
<<<<<<< HEAD

        }
      }

    )
    if (imgRef.current) {
      observer.observe(imgRef.current)
    }
    return () => observer.disconnect()
  }, [lazy, priority, isInView])
  // Generate WebP-compatible src
  const getOptimizedSrc = (originalSrc: string,) => {
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
<<<<<<< HEAD

=======
>>>>>>>         }
      }
    // Generate a simple gray blur placeholder
    return `data:image/svg+xml;base64,${Buffer.from(
      `<svg width="${width |400}" height="${height |300}" xmlns="http://www.w3.org/2000/svg">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  // Generate blur placeholder
  const generateBlurDataURL = () => {
    if (blurDataURL) return blurDataURL
<<<<<<< HEAD
    // Generate a simple gray blur placeholder
    return `data:image/svg+xml;base64,${Buffer.from(
      `<svg width="${width |400}" height="${height |300}" xmlns="http://www.w3.org/2000/svg">
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
    // Generate a simple gray blur placeholder
    return `data:image/svg+xml;base64,${Buffer.from(
      `<svg width="${width |400}" height="${height |300}" xmlns="http://www.w3.org/2000/svg">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    ),;
    if (imgRef.current) {;
      observer.observe(imgRef.current);
    }
;
    return () => observer.disconnect();
  }, [lazy, priority, isInView]),;
  // Generate WebP-compatible src;
  const getOptimizedSrc = (originalSrc: string) => {;
    // If it's already optimized or external, return as-is;
    if (originalSrc.startsWith('http') || originalSrc.includes('/_next/image')) {;
      return originalSrc;
    }
    
    // For internal images, Next.js will handle optimization
    return originalSrc
  },

<<<<<<< HEAD
=======
  const handleLoad = () => {
    setIsLoading(false),
    onLoad?.()
  },
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

  const handleError = () => {
    setHasError(true),
    setIsLoading(false),
    onError?.()
  },

  // Generate blur placeholder
  const generateBlurDataURL = () => {
    if (blurDataURL) return blurDataURL,
<<<<<<< HEAD
<<<<<<< HEAD

    // Generate a simple gray blur placeholder
    return `data: image/svg+xml,base64,${Buffer.from(
      `<svg width="${width || 400}" height="${height || 300}" xmlns="http: //www.w3.org/2000/svg">
<<<<<<< HEAD

=======
    
>>>>>>>     // Generate a simple gray blur placeholder
    return `data: image/svg+xml,base64,${Buffer.from(
      `<svg width="${width || 400}" height="${height || 300}" xmlns="http: //www.w3.org/2000/svg">
>>>>>>>         <defs>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <defs>
>>>>>>>           <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f3f4f6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#e5e7eb;stop-opacity:1" />
=======
    
    // Generate a simple gray blur placeholder
    return `data: image/svg+xml,base64,${Buffer.from(
      `<svg width="${width || 400}" height="${height || 300}" xmlns="http: //www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f3f4f6,stop-opacity:1" />
            <stop offset="100%" style="stop-color:#e5e7eb,stop-opacity:1" />
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)" />
      </svg>`
<<<<<<< HEAD

    ).toString('base64')}`
<<<<<<< HEAD

<<<<<<< HEAD
=======
  }
    >
      {isInView && !hasError && (
        <Image
>>>>>>>           src={getOptimizedSrc(src)}
    >
      {isInView && !hasError && (
=======
  },


  return (
    <div
      ref={imgRef}
      className={cn('relative overflow-hidden', className)}
      style={{ width, height }}
    ).toString('base64')}`
  }
    >
      {isInView && !hasError && (
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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
=======
    ).toString('base64')}`
  }
    >
      {isInView && !hasError && (
        <Image
  },

  return (
    <div
;
    // For internal images, Next.js will handle optimization;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return originalSrc;
  },;
  const handleLoad = () => {;
    setIsLoading(false),;
    onLoad?.();
  },;
  const handleError = () => {;
    setHasError(true),;
    setIsLoading(false),;
    onError?.();
  },;
  // Generate blur placeholder;
  const generateBlurDataURL = () => {;
    if (blurDataURL) return blurDataURL,;
    // Generate a simple gray blur placeholder;
    return `data: image/svg+xml,base64,${Buffer.from(;
      `<svg width="${width || 400}" height="${height || 300}" xmlns="http: //www.w3.org/2000/svg">;
        <defs>;
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">;
            <stop offset="0%" style="stop-color:#f3f4f6,stop-opacity:1" />;
            <stop offset="100%" style="stop-color:#e5e7eb,stop-opacity:1" />;
          </linearGradient>;
        </defs>;
        <rect width="100%" height="100%" fill="url(#grad)" />;
      </svg>`;
    ).toString('base64')}`;
  },;
  return (;
    <div;
      ref={imgRef}
      className={cn('relative overflow-hidden', className)}
      style={{ width, height }}
    >;
      {isInView && !hasError && (;
<<<<<<< HEAD

        <Image;


<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          src={getOptimizedSrc(src)}
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>>           alt={alt}
=======
        <Image;
          src={getOptimizedSrc(src)}
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          alt={alt}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          width={width}
          height={height}
          priority={priority}
          blurDataURL={
            placeholder === 'blur' ? generateBlurDataURL() : undefined
          }
          onLoad={handleLoad}
          onError={handleError}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

            isLoading ? 'opacity-0' : 'opacity-100'
          ),}

<<<<<<< HEAD
=======
          className={cn(            'transition-opacity duration-300'
=======

          className={cn(            'transition-opacity duration-300',

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
            isLoading ? 'opacity-0' : 'opacity-100'
          ),}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          className={cn(;
            'transition-opacity duration-300',;
            isLoading ? 'opacity-0' : 'opacity-100';
          )}
<<<<<<< HEAD

<<<<<<< HEAD
=======



>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          {...props}
        />
      )}
      {/* Loading placeholder */}

=======
>>>>>>>           {...props}
        />
      )}
      {/* Loading placeholder */}
      {isLoading && isInView && (
        <div className='absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 animate-pulse' />
>>>>>>>       )}
ursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          className={cn(            'transition-opacity duration-300'
          className={cn(            'transition-opacity duration-300',
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            isLoading ? 'opacity-0' : 'opacity-100'
          ),}
          className={cn(;
            'transition-opacity duration-300',;
            isLoading ? 'opacity-0' : 'opacity-100';
          )}
<<<<<<< HEAD
<<<<<<< HEAD




>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
          {...props}
        />
      )}
      {/* Loading placeholder */}
<<<<<<< HEAD
<<<<<<< HEAD


      {(isLoading && isInView) && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 animate-pulse" />


<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
      )}
>>>>>>>       {/* Error fallback */}
      {hasError && (;
        <div className='absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center'>;
          {fallbackSrc ? (;
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
      {isLoading && isInView && (
        <div className='absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 animate-pulse' />
      {(isLoading && isInView) && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 animate-pulse" />
      )}
      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          {fallbackSrc ? (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <img
              src={fallbackSrc}
              alt={alt}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
                />
              </svg>
              <span className='text-xs'>Image not available</span>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>>             </div>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            </div>
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>           )}
        </div>;
      )}
      {/* Lazy loading placeholder */}
      {!isInView && lazy && !priority && (

=======
                />;
              </svg>;
              <span className='text-xs'>Image not available</span>;
            </div>;

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
        </div>;
      )}
      {/* Lazy loading placeholder */}

    </div>;

  );
}


  )

// Higher-order component for easy migration from regular img tags
export function withImageOptimization<P extends { src: string; alt: string }>(
  Component: React.ComponentType<P>
) {
  return function OptimizedComponent(props: P) {

// Higher-order component for easy migration from regular img tags;
export function withImageOptimization<Pextends { src: string alt: string }>(;
  Component: React && React.ComponentType<P>;
) {;
  return function OptimizedComponent(): any (props: P) {;

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

// Utility to get image dimensions
export function getImageDimensions(
  src: string
): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new window.Image()
    img.onload = () =>

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


      {!isInView && lazy && !priority && (


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800" />
      )}
    </div>;
  );
}
;
// Higher-order component for easy migration from regular img tags;
export function withImageOptimization<P extends { src: string, alt: string }>(;
  Component: React.ComponentType<P>;
) {;
  return function OptimizedComponent(props: P) {;
    const { src, alt, ...otherProps } = props,;
    return (;
      <OptimizedImage;
        src={src}
        alt={alt}
        {...(otherProps as any)}
      />;
    );
  }
}
;
// Utility to preload critical images;
export function preloadImage(src: string): Promise<void> {;
  return new Promise((resolve, reject) => {;
    const img = new window.Image(),;
    img.onload = () => resolve(),;
    img.onerror = reject,;
    img.src = src;
  });
}
;
<<<<<<< HEAD
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
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


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
          on_load={handle_load}
          on_error={handle_error}
          className={cn (            'transition - opacity duration - 300',
            is_loading ? 'opacity - 0' : 'opacity - 100'), }
          {...props}
        />)}
      {/* Loading placeholder */}
      {is_loading && isInView && (
        <div className='absolute inset - 0 bg - gradient - to - br from - gray - 100 to - gray - 200 dark:from - gray - 800 dark:to - gray - 900 animate - pulse' />)}
      {/* Error fallback */}
      {has_error && (
        <div className='absolute inset - 0 bg - gray - 100 dark:bg - gray - 800 flex items - center justify - center'>;
          {fallback_src ? (
            <img;
              src={fallback_src}
              alt={alt}
              className='max - w-full max - h-full object - contain';
              on_load={handle_load}            />) : (
            <div className='text - gray - 400 text - center'>;
              <svg;
                className='w - 8 h - 8 mx - auto mb - 2';
                fill='current_color';
                view_box='0 0 20 20';
              >;
                <path;
                  fill_rule='evenodd';
                  d='M4 3a2 2 0 00 - 2 2v10a2 2 0 002 2h12a2 2 0 002 - 2V5a2 2 0 00 - 2-2H4zm12 12H4l4 - 8 3 6 2 - 4 3 6z';
                  clip_rule='evenodd';
                />;
              </svg>;
              <span className='text - xs'>Image not available</span>;
            </div>)}
        </div>)}
      {/* Lazy loading placeholder */}
      {!isInView && lazy && !priority && (
        <div className='absolute inset - 0 bg - gray - 100 dark:bg - gray - 800' />)}
    </div>);
// Higher - order component for easy migration from regular img tags;
export function withImageOptimization < P extends { src: string; alt: string }>(
  Component: React.ComponentType < P>) {
  return /**
 * OptimizedComponent - Function description
 */
function OptimizedComponent() {
    const { src, alt, ...other_props } = props;
    return <OptimizedImage src={src} alt={alt} {...(other_props as any)} />;
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
        <div className='absolute inset-0 bg-gray-100 dark:bg-gray-800' />
      )}
    </div>
  )
// Higher-order component for easy migration from regular img tags
export function withImageOptimization<P extends { src: string; alt: string }>(
  Component: React.ComponentType<P>
) {
  return function OptimizedComponent(props: P) {
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
// Utility to get image dimensions
export function getImageDimensions(;
  src: string;
): Promise<{ width: number; height: number }> {
  return new Promise((resolve, reject) => {
    const img = new window.Image()
    img.onload = () =>
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

        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800" />
      )}
    </div>;
  );
}
;
// Higher-order component for easy migration from regular img tags;
export function withImageOptimization<P extends { src: string, alt: string }>(;
  Component: React.ComponentType<P>;
) {;
  return function OptimizedComponent(props: P) {;
    const { src, alt, ...otherProps } = props,;
    return (;
      <OptimizedImage;
        src={src}
        alt={alt}
        {...(otherProps as any)}
      />;
    );
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
}
;
// Utility to preload critical images;
export function preloadImage(src: string): Promise<void> {;
  return new Promise((resolve, reject) => {;
    const img = new window.Image(),;
    img.onload = () => resolve(),;
    img.onerror = reject,;
    img.src = src;
  });
<<<<<<< HEAD
} ;
<<<<<<< HEAD

=======
>>>>>>> 

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}
;
// Utility to get image dimensions;
export function getImageDimensions(src: string): Promise<{ width: number, height: number }> {;
  return new Promise((resolve, reject) => {;
    const img = new window.Image(),;
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = reject;
    img.src = src;
  });
} ;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
=======
  }
// Utility to preload critical images;
export function preload_image (src: string): Promise < void> {
  return new Promise ((resolve, reject) => {
    const img = new window.Image ();
    img.onload = () => resolve ();
    img.onerror = reject;
    img.src = src;
  });
// Utility to get image dimensions;
export function getImageDimensions (
  src: string): Promise<{ width: number; height: number }> {
  return new Promise ((resolve, reject) => {
    const img = new window.Image ();
    img.onload = () =>;
      resolve ({ width: img.natural_width, height: img.natural_height });
    img.onerror = reject;
    img.src = src;
  });    img.src = src;
  });
}
    img.onerror = reject;
    img.src = src;
  });
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-eff2
