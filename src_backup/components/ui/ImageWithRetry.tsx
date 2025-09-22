:src/components/ui/ImageWithRetry.tsx

src: string,
  alt?: string;
  /** Source to use if the main src fails */
<<<<<<< HEAD
  fallbackSrc?: string
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
}

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
:src/components/ui/ImageWithRetry.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  src,
  alt = '',
  fallbackSrc = '/images/image-placeholder.svg',
  className,
  retryClassName,
  ...props
}: ImageWithRetryProps) {
  const [currentSrc, setCurrentSrc] = useState(src),
  const [failed, setFailed] = useState(false),
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
:src/components/ui/ImageWithRetry.tsx
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
:src/components/ui/ImageWithRetry.tsx
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
=======
export default ImageWithRetry;
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ui/ImageWithRetry.tsx

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:src_backup/components/ui/ImageWithRetry.tsx
