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
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const imgRef = useRef<HTMLDivElement>(null);

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
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba
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

 const observer = new IntersectionObserver ( ([entry]) => {
  if (entry && entry.isIntersecting) {

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

  // Intersection Observer for lazy loading
  useEffect(() => {

    if (!lazy || priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {}
        if (entry && entry.isIntersecting) {}
          setIsInView(true)
          observer.disconnect()

}
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

  useEffect(() => {;
    if (!lazy || priority || isInView) return,;
    const observer = new IntersectionObserver(;
      ([entry]) => {;
        if (entry && entry.isIntersecting) {;
          setIsInView(true),;
          observer.disconnect();

        }
      }

    // Generate a simple gray blur placeholder
    return `data: image/svg+xml,base64,${Buffer.from(
      `<svg width="${width || 400}" height="${height || 300}" xmlns="http: //www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#f3f4f6;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#e5e7eb;stop-opacity:1" />

          </linearGradient>
        </defs>"
        <rect width="100%" height="100%" fill="url(#grad)" />`
      </svg>`

    ).toString('base64')}`

  },

  return (

      className={cn('relative overflow-hidden', className)}
      style={ width, height }'`
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
      });

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
    return originalSrc
};

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
    ).toString('base64')}`
};

    >;
      {isInView && !hasError && (;
        <Image;

          src={getOptimizedSrc(src)}

          alt={alt}
          width={width}
          height={height}
          priority={priority}

          }
'
          className={cn(            'transition-opacity duration-300'

          className={cn(            'transition-opacity duration-300',
'
            isLoading ? 'opacity-0' : 'opacity-100'
          ),}

            isLoading ? 'opacity-0' : 'opacity-100';
          )}

          {...props}
        />;
      )}
;
      {/* Loading placeholder */}

      {(isLoading && isInView) && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 animate-pulse" />

      )}
;
      {/* Error fallback */}
      {hasError && (;
        <div className='absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center'>;
          {fallbackSrc ? (;            <img
              src={fallbackSrc}
              alt={alt}

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

    const { src, alt, ...otherProps } = props
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = reject;
    img.src = src;
  });
origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/cursor/delete-old-data-records-6bba

      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    img.onerror = reject;
    img.src = src;
  });