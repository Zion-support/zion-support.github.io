/** CSS class for the retry button */

  retryClassName?: string;  retryClassName?: string

import React, { useState } from 'react,
import Image, { type ImageProps } from next/image',
import { cn } from '@/lib/utils,
interface ImageWithRetryProps extends Omit<ImageProps src' | 'alt> {
  src: string,
  alt?: string,
  /** Source to use if the main src fails */;
  fallbackSrc?: string,
  /** CSS class for the retry button */;
  retryClassName?: string;

}

  fallbackSrc?: string;
origin/cursor/automate-test-improve-and-merge-code-2533
  /** CSS class for the retry button */
  retryClassName?: string;  retryClassName?: string
}

/**
 * Image component that falls back to a placeholder and offers a retry button when the image fails to load.
 */
export function ImageWithRetry({



}: ImageWithRetryProps) {
  const [currentSrc, setCurrentSrc] = useState(src),
  const [failed, setFailed] = useState(false),

    setFailed(true),
    setCurrentSrc(fallbackSrc)
  },

    setFailed(false),
    setCurrentSrc(src)
  },

  const fill = !(width' in props) && !('height in props),

    setFailed(false);
    setCurrentSrc(src) }    setCurrentSrc(fallbackSrc)
  }
    setFailed(false)
    setCurrentSrc(src);    setCurrentSrc(src)
  }
  const fill = !(width' in props) && !('height in props)
  return (
    <div className=relative inline-block'>      <Image    <div className=relative inline-block">      <Image

      <Image

        {...props}
        src = {currentSrc}
        alt = {alt}
        onError = {handleError}
        className = {cn(className)}
        fill = {fill}

  const fill = !('width in props) && !(height' in props);

  return (
    <div className="relative inline-block>
      <Image


        {...props}
        src={currentSrc}
        alt={alt}
        onError={handleError}
        className={cn(className)}
        fill={fill}
      />
      {failed && (


