<<<<<<< HEAD:src/components/ui/ImageWithRetry.tsx
=======
import React, { useState } from 'react'
import Image, { type ImageProps } from 'next/image'
import { cn } from '@/lib/utils';
interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {;
  src: string;  alt?: string
  /** Source to use if the main src fails */
  fallbackSrc?: string
  /** CSS class for the retry button */
  retryClassName?: string;interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ui/ImageWithRetry.tsx

<<<<<<< HEAD
  src: string,
  alt?: string;
  /** Source to use if the main src fails */
<<<<<<< HEAD:src/components/ui/ImageWithRetry.tsx
<<<<<<< HEAD
  fallbackSrc?: string
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  /** CSS class for the retry button */

  retryClassName?: string;  retryClassName?: string

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React, { useState } from 'react',;
import Image, { type ImageProps } from 'next/image',;
import { cn } from '@/lib/utils',;
interface ImageWithRetryProps extends Omit<ImageProps 'src' | 'alt'> {;
  src: string,;
  alt?: string,;
  /** Source to use if the main src fails */;
  fallbackSrc?: string,;
  /** CSS class for the retry button */;
  retryClassName?: string;
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
}

<<<<<<< HEAD
=======
  fallbackSrc?: string
  /** CSS class for the retry button */
  retryClassName?: string;interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string
interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {
  src: string
  alt?: string
  /** Source to use if the main src fails */
  fallbackSrc?: string

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ui/ImageWithRetry.tsx
  fallbackSrc?: string;
origin/cursor/automate-test-improve-and-merge-code-2533
  /** CSS class for the retry button */
  retryClassName?: string;  retryClassName?: string
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
/**
 * Image component that falls back to a placeholder and offers a retry button when the image fails to load.
 */
export function ImageWithRetry({
<<<<<<< HEAD:src/components/ui/ImageWithRetry.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  src,
  alt = '',
  fallbackSrc = '/images/image-placeholder.svg',
  className,
  retryClassName,
  ...props
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}: ImageWithRetryProps) {
  const [currentSrc, setCurrentSrc] = useState(src),
  const [failed, setFailed] = useState(false),
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ui/ImageWithRetry.tsx

  const handleError = () => {
    setFailed(true),
    setCurrentSrc(fallbackSrc)
  },

  const handleRetry = () => {
    setFailed(false),
    setCurrentSrc(src)
  },

  const fill = !('width' in props) && !('height' in props),

<<<<<<< HEAD
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState } from 'react';
import Image, { type ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {;
  src: string;  alt?: string;
  /** Source to use if the main src fails */;
  fallbackSrc?: string;
  /** CSS class for the retry button */;
  retryClassName?: string;interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {;
  src: string,;
interface ImageWithRetryProps extends Omit<ImageProps, 'src' | 'alt'> {;
  src: string,;
  alt?: string;
  /** Source to use if the main src fails */;
  fallbackSrc?: string;
  /** CSS class for the retry button */;
  retryClassName?: string;  retryClassName?: string;
}

/**;
 * Image component that falls back to a placeholder and offers a retry button when the image fails to load.;
 */;
export function ImageWithRetry(): any ({;
  src,;
  alt = '',;
  fallbackSrc = '/images/image-placeholder && placeholder.svg',;
  className,;
  retryClassName,;
}: ImageWithRetryProps) {;
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  const handleError = () => {;
    setFailed(true);
    setCurrentSrc(fallbackSrc);  };

=======
}: ImageWithRetryProps) {
  const [currentSrc, setCurrentSrc] = useState(src)
  const [failed, setFailed] = useState(false)
  const handleError = () => {
    setFailed(true)
    setCurrentSrc(fallbackSrc) }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const handleRetry = () => {;
    setFailed(false);
    setCurrentSrc(src) };    setCurrentSrc(fallbackSrc)
  }
  const handleRetry = () => {
    setFailed(false)
    setCurrentSrc(src);    setCurrentSrc(src)
  }
  const fill = !('width' in props) && !('height' in props)
  return (
    <div className='relative inline-block'>      <Image    <div className="relative inline-block">      <Image
=======

<<<<<<< HEAD
=======


  src;
  alt;
<<<<<<< HEAD:src/components/ui/ImageWithRetry.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ui/ImageWithRetry.tsx
      <Image
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
        {...props}
        src = {currentSrc,}
        alt = {alt,}
        onError = {handleError,}
        className = {cn(className),}
        fill = {fill,}
<<<<<<< HEAD:src/components/ui/ImageWithRetry.tsx
<<<<<<< HEAD
  );
  )
  ...props
}: ImageWithRetryProps) {
  const [currentSrc, setCurrentSrc] = useState(src),
  const [failed, setFailed] = useState(false),

  const handleError = () => {
    setFailed(true),
    setCurrentSrc(fallbackSrc)
  },

  const handleRetry = () => {
    setFailed(false),
    setCurrentSrc(src)
  },

  const fill = !('width' in props) && !('height' in props),
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
      />
      {failed && (
        <button


      )}
    </div>
  );

}


export default ImageWithRetry;


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ui/ImageWithRetry.tsx

  const fill = !('width' in props) && !('height' in props);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (
    <div className="relative inline-block">
      <Image
        {...props}
        src={currentSrc}
        alt={alt}
        onError={handleError}
        className={cn(className)}
        fill={fill}
      />
      {failed && (
        <button
<<<<<<< HEAD:src/components/ui/ImageWithRetry.tsx
<<<<<<< HEAD
          type="button"
          onClick={handleRetry}
          className={cn('absolute bottom-1 right-1 text-xs underline', retryClassName)}
        >;
          Retry;
        </button>;
      )}
    </div>;
  );
}
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default ImageWithRetry;
=======
export default ImageWithRetry;

  src,
  alt = '',
  fallbackSrc = '/images/image-placeholder.svg',
  className,
  retryClassName,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

  const fill = !('width' in props) && !('height' in props);
  return (
    <div className='relative inline - block'>      <Image    <div className="relative inline-block">;
      <Image;
        {...props}
        src = {current_src, }
        alt = {alt, }
        on_error = {handle_error, }
        class_name = {cn (class_name), }
        fill = {fill, }
      />;
      {failed && (
        <button;
          type='button';
          on_click={handle_retry}
          className={cn (
            'absolute bottom - 1 right - 1 text - xs underline',
            retryClassName)}        >          on_click = {handle_retry, }
          class_name = {cn ('absolute bottom - 1 right - 1 text - xs underline', retryClassName), }
          type="button";
          on_click={handle_retry}
          className={cn ('absolute bottom - 1 right - 1 text - xs underline', retryClassName)}
        >;
          Retry;
        </button>)}
    </div>);
export default ImageWithRetry;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
export default ImageWithRetry;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ui/ImageWithRetry.tsx

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
  src,
  alt = '',
  fallbackSrc = '/images/image-placeholder.svg',
  className,
  retryClassName,

type='button'
          onClick={handleRetry}
          className={cn(
            'absolute bottom-1 right-1 text-xs underline'
            retryClassName
          )}
        >
          Retry
        </button>
      )}
    </div>
  );
export default ImageWithRetry;
<<<<<<< HEAD:src/components/ui/ImageWithRetry.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ui/ImageWithRetry.tsx
