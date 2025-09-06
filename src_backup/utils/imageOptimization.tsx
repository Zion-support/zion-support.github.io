<<<<<<< HEAD:src/utils/imageOptimization.tsx
<<<<<<< HEAD
<<<<<<< HEAD
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
const imgRef = useRef<HTMLDivElement>(null);

=======
const imgRef = useRef<HTMLDivElement>(null);





<<<<<<< HEAD:src_backup/utils/imageOptimization.tsx
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/utils/imageOptimization.tsx
import React, { useState, useRef, useEffect } from 'react',
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
  lazy?: boolean
}

export function OptimizedImage({
  src;
  alt;
  width;
  height;
  className;
  priority;
    img.src = src
  })
} 
<<<<<<< HEAD:src/utils/imageOptimization.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/utils/imageOptimization.tsx
 const observer = new IntersectionObserver ( ([entry]) => {
  if (entry && entry.isIntersecting) {
=======
 const observer = new IntersectionObserver ( ([entry]) => {}
  if (entry && entry.isIntersecting) {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/utils/imageOptimization.tsx
  return () => observer.disconnect ()
}, [lazy, priority, isInView])
//Generate WebP-compatible src const getOptimizedSrc = (originalSrc: string) => {}
  //If it's already optimized or external,  return as-is if (originalSrc.startsWith ('http') |originalSrc.includes ('/ next/image') ) {}
  //For internal images, Next.js will handle optimization return originalSrc'
};''
<defs> <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" style="stop-color:#f3f4f6, stop-opacity:1" /> <stop offset="100%" style="stop-color:#e5e7eb, stop-opacity:1" /> 100%"height=" 100%"fill=" url (#grad) "/> </svg>`) .toString ('base64')`
}`
}

export function OptimizedImage({}
  src,
  alt,
  width,
  height,
  className,
  priority = false,'
  placeholder = 'empty',
  blurDataURL,
  quality = 75,
  sizes,
  onLoad,
  onError,
  fallbackSrc,
  lazy = true,;
  ...props;
}: OptimizedImageProps) {}
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [isInView, setIsInView] = useState(!lazy || priority)
  const imgRef = useRef<HTMLDivElement>(null)

<<<<<<< HEAD:src_backup/utils/imageOptimization.tsx
  // Intersection Observer for lazy loading
  useEffect(() => {

=======
  // Intersection Observer for lazy loading;
  useEffect(() => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/utils/imageOptimization.tsx
    if (!lazy || priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {}
        if (entry && entry.isIntersecting) {}
          setIsInView(true)
          observer.disconnect()
<<<<<<< HEAD:src_backup/utils/imageOptimization.tsx
const observer = new IntersectionObserver ( ([entry]) => {
  // Check condition
if ( {) {
  $2
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
const observer = new IntersectionObserver ( ([entry]) => {}
  // Check condition;
if ( {) {}
  $2;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/utils/imageOptimization.tsx
}
<<<<<<< HEAD:src/utils/imageOptimization.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/utils/imageOptimization.tsx
;
<<<<<<< HEAD:src_backup/utils/imageOptimization.tsx
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
<<<<<<< HEAD:src/utils/imageOptimization.tsx
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/utils/imageOptimization.tsx
  // Intersection Observer for lazy loading;
=======
  return () => observer.disconnect ();
}, [lazy, priority, isInView]);
//Generate WebP - compatible src const getOptimizedSrc = (original_src: string) =>: any {
  //If it's already optimized or external,  return as - is if (|| original_src.includes ('/ next / image') ) {) {
  $2
}
  //For internal images, Next.js will handle optimization return original_src;
}';
<defs> <linear_gradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" style="stop - color:#f3f4f6, stop - opacity:1" /> <stop offset="100%" style="stop - color:#e5e7eb, stop - opacity:1" /> 100%"height=" 100%"fill=" url (#grad) "/> </svg>`) .to_string ('base64');
}`;
}
  const img_ref = useRef < HTMLDivElement>(null);  // Intersection Observer for lazy loading;

    return () => observer.disconnect ();
=======
export function OptimizedImage() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/utils/imageOptimization.tsx
  }, [lazy, priority, isInView]);
  // Generate WebP - compatible src;
  const getOptimizedSrc = (original_src: string, ) =>: any {'
    // If it's already optimized or external, return as - is;
    // Check condition;
if (||) {}
  $2;
}'
      original_src.includes ('/_next / image')) {}
      return original_src;
    }
    // For internal images, Next.js will handle optimization;
    return original_src;

  }

  const handleLoad = () => {}
    setIsLoading(false)
    onLoad?.()
  }

  const handleError = () => {}
    setHasError(true)
    setIsLoading(false)
    onError?.()
  }

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  useEffect(() => {;
    if (!lazy || priority || isInView) return,;
    const observer = new IntersectionObserver(;
      ([entry]) => {;
        if (entry && entry.isIntersecting) {;
          setIsInView(true),;
          observer.disconnect();
<<<<<<< HEAD
        }
      },;
      {;
        rootMargin: '50px', // Start loading 50px before the image enters viewport;
      }
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
  const handleLoad = () => {
    setIsLoading(false),
    onLoad?.()
  },

  const handleError = () => {
    setHasError(true),
    setIsLoading(false),
    onError?.()
  },

  // Generate blur placeholder
  const generateBlurDataURL = () => {
    if (blurDataURL) return blurDataURL,
    
=======

        }
      }

<<<<<<< HEAD

<<<<<<< HEAD:src_backup/utils/imageOptimization.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
        }
      }

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    // Generate a simple gray blur placeholder
    return `data: image/svg+xml,base64,${Buffer.from(
      `<svg width="${width || 400}" height="${height || 300}" xmlns="http: //www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f3f4f6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#e5e7eb;stop-opacity:1" />
=======
    // Generate a simple gray blur placeholder;`
    return `data: image/svg+xml,base64,${Buffer.from("`
      `<svg width="${width || 400}" height="${height || 300}" xmlns="http: //www.w3.org/2000/svg">
        <defs>"
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">"
            <stop offset="0%" style="stop-color:#f3f4f6,stop-opacity:1" />"
            <stop offset="100%" style="stop-color:#e5e7eb,stop-opacity:1" />
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/utils/imageOptimization.tsx
          </linearGradient>
        </defs>"
        <rect width="100%" height="100%" fill="url(#grad)" />`
      </svg>`
<<<<<<< HEAD:src_backup/utils/imageOptimization.tsx
=======
'`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/utils/imageOptimization.tsx
    ).toString('base64')}`
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  },

  return (
<<<<<<< HEAD:src_backup/utils/imageOptimization.tsx
    <div
<<<<<<< HEAD
;
    // For internal images, Next.js will handle optimization;
=======
      ref={imgRef}
=======
    <div;
      ref={imgRef}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/utils/imageOptimization.tsx
      className={cn('relative overflow-hidden', className)}
      style={{ width, height }}'`
    ).toString('base64')}`
  }
    >
      {isInView && !hasError && (
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
      {;'
        rootMargin: '50px', // Start loading 50px before the image enters viewport;
      }
    );

    if (imgRef && imgRef.current) {;
      observer && observer.observe(imgRef && imgRef.current);
    }

    return () => observer && observer.disconnect();
  }, [lazy, priority, isInView]);

  // Generate WebP-compatible src;
  const getOptimizedSrc = (originalSrc: string,) => {;'
    // If it's already optimized or external, return as-is;
    if (;'
      originalSrc && originalSrc.startsWith('http') ||;'
      originalSrc && originalSrc.includes('/_next/image');
    ) {;
      return originalSrc;
    }

    // For internal images, Next && Next.js will handle optimization;
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return originalSrc;
  },;
=======
    return originalSrc
};

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const handleLoad = () => {;
    setIsLoading(false);
    onLoad?.()
};

  const handleError = () => {;
    setHasError(true);
    setIsLoading(false);
    onError?.()
};

  // Generate blur placeholder;
  const generateBlurDataURL = () => {;
<<<<<<< HEAD:src_backup/utils/imageOptimization.tsx
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
<<<<<<< HEAD
    ).toString('base64')}`
};
=======
    ).toString('base64')}`;
  };
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

=======
    if (blurDataURL) return blurDataURL,;
    // Generate a simple gray blur placeholder;`
    return `data: image/svg+xml,base64,${Buffer.from(;"`
      `<svg width="${width || 400}" height="${height || 300}" xmlns="http: //www.w3.org/2000/svg">;
        <defs>;"
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">;"
            <stop offset="0%" style="stop-color:#f3f4f6,stop-opacity:1" />;"
            <stop offset="100%" style="stop-color:#e5e7eb,stop-opacity:1" />;
          </linearGradient>;
        </defs>;"
        <rect width="100%" height="100%" fill="url(#grad)" />;`
      </svg>`;'`
    ).toString('base64')}`;
  },;
  return (;
    <div;
      ref={imgRef}'
      className={cn('relative overflow-hidden', className)}
      style={{ width, height }}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/utils/imageOptimization.tsx
    >;
      {isInView && !hasError && (;
        <Image;
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          src={getOptimizedSrc(src)}
<<<<<<< HEAD:src_backup/utils/imageOptimization.tsx
=======
  // Generate blur placeholder;
  const generateBlurDataURL = () =>: any {}
    // Check condition;
if (return blurDataURL) {}
  $2;
}
    // Generate a simple gray blur placeholder;`
    return `data:image / svg + xml;base64, ${Buffer.from ("`
      `<svg width="${width || 400}" height="${height || 300}" xmlns="http://www.w3.org / 2000 / svg">;
        <defs>;"
          <linear_gradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">;"
            <stop offset="0%" style="stop - color:#f3f4f6;stop - opacity:1" />;"
            <stop offset="100%" style="stop - color:#e5e7eb;stop - opacity:1" />;
          </linear_gradient>;
        </defs>;"
        <rect width="100%" height="100%" fill="url (#grad)" />;'`
      </svg>`).to_string ('base64')}`;
  }
    >;
      {isInView && !has_error && (
        <Image;
          src={getOptimizedSrc (src)}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/utils/imageOptimization.tsx
          alt={alt}
          width={width}
          height={height}
          priority={priority}
<<<<<<< HEAD:src_backup/utils/imageOptimization.tsx
<<<<<<< HEAD
          blurDataURL={placeholder === 'blur' ? generateBlurDataURL() : undefined}
          onLoad={handleLoad}
          onError={handleError}
=======
          blurDataURL={
            placeholder === 'blur' ? generateBlurDataURL() : undefined
=======
          blurDataURL={'
            placeholder === 'blur' ? generateBlurDataURL() : undefined;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/utils/imageOptimization.tsx
          }
'
          className={cn(            'transition-opacity duration-300'

<<<<<<< HEAD:src_backup/utils/imageOptimization.tsx
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/utils/imageOptimization.tsx
          className={cn(            'transition-opacity duration-300',
'
            isLoading ? 'opacity-0' : 'opacity-100'
          ),}
<<<<<<< HEAD:src_backup/utils/imageOptimization.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          className={cn(;
            'transition-opacity duration-300',;
=======
          className={cn(;'
            'transition-opacity duration-300',;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/utils/imageOptimization.tsx
            isLoading ? 'opacity-0' : 'opacity-100';
          )}
<<<<<<< HEAD
=======

<<<<<<< HEAD

<<<<<<< HEAD


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          {...props}
        />;
      )}
;
      {/* Loading placeholder */}
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD:src_backup/utils/imageOptimization.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {(isLoading && isInView) && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 animate-pulse" />
=======
      {(isLoading && isInView) && (
=======
      {(isLoading && isInView) && ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/utils/imageOptimization.tsx
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 animate-pulse" />

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
      {(isLoading && isInView) && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 animate-pulse" />

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      )}
;
      {/* Error fallback */}
<<<<<<< HEAD:src_backup/utils/imageOptimization.tsx
<<<<<<< HEAD:src/utils/imageOptimization.tsx
<<<<<<< HEAD
      {hasError && (;
        <div className='absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center'>;
          {fallbackSrc ? (;            <img
=======
=======
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          {fallbackSrc ? (
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/utils/imageOptimization.tsx

            <img
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
      {hasError && ("
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          {fallbackSrc ? (
            <img;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/utils/imageOptimization.tsx
              src={fallbackSrc}
              alt={alt}
<<<<<<< HEAD
=======

              onLoad={handleLoad}            />;
          ) : (;'
            <div className='text-gray-400 text-center'>;

              <svg'
                className='w-8 h-8 mx-auto mb-2''
                fill='currentColor''
                viewBox='0 0 20 20'
              >
                <path'
                  fillRule='evenodd''
                  d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z''
                  clipRule='evenodd'
                />;
              </svg>;'
              <span className='text-xs'>Image not available</span>;
            </div>;
<<<<<<< HEAD:src_backup/utils/imageOptimization.tsx

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/utils/imageOptimization.tsx
              className="max-w-full max-h-full object-contain"
              onLoad={handleLoad}
            />
          ) : ("
            <div className="text-gray-400 text-center">
              <svg"
                className="w-8 h-8 mx-auto mb-2""
                fill="currentColor""
                viewBox="0 0 20 20"
              >
                <path"
                  fillRule="evenodd""
                  d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z""
                  clipRule="evenodd"
                />
              </svg>"
              <span className="text-xs">Image not available</span>
            </div>
          )}
        </div>;
      )}
;
      {/* Lazy loading placeholder */}
<<<<<<< HEAD
      {!isInView && lazy && !priority && (
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
// Utility to get image dimensions;
export function getImageDimensions(src: string): Promise<{ width: number, height: number }> {;
  return new Promise((resolve, reject) => {;
    const img = new window.Image(),;
    img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = reject;
    img.src = src;
  });
} ;
=======

    </div>;

  );
}

  )

// Higher-order component for easy migration from regular img tags;
export function withImageOptimization<P extends { src: string; alt: string }>(
  Component: React.ComponentType<P>
) {}
  return function OptimizedComponent(props: P) {}
// Higher-order component for easy migration from regular img tags;
export function withImageOptimization<Pextends { src: string alt: string }>(;
  Component: React && React.ComponentType<P>;
) {;
  return function OptimizedComponent(): any (props: P) {;

    const { src, alt, ...otherProps } = props;

    return <OptimizedImage src={src} alt={alt} {...(otherProps as any)} />
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

<<<<<<< HEAD:src_backup/utils/imageOptimization.tsx
    const { src, alt, ...otherProps } = props
=======

    const { src, alt, ...otherProps } = props;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/utils/imageOptimization.tsx
    return <OptimizedImage src={src} alt={alt} {...(otherProps as any)} />
  }
}

// Utility to preload critical images;
export function preloadImage(src: string): Promise<void> {}
  return new Promise((resolve, reject) => {}
    const img = new window.Image()
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  })

// Utility to get image dimensions;
export function getImageDimensions(;
  src: string;
): Promise<{ width: number; height: number }> {}
  return new Promise((resolve, reject) => {}
    const img = new window.Image()
    img.onload = () =>
<<<<<<< HEAD:src/utils/imageOptimization.tsx
<<<<<<< HEAD

      resolve({ width: img.naturalWidth, height: img.naturalHeight })
    img.onerror = reject;
    img.src = src;
  })
}
    img.onerror = reject;
    img.src = src;
  })
<<<<<<< HEAD:src_backup/utils/imageOptimization.tsx
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/utils/imageOptimization.tsx
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = reject;
    img.src = src;
  });
<<<<<<< HEAD:src/utils/imageOptimization.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/utils/imageOptimization.tsx
=======
}'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:src/utils/imageOptimization.tsx
