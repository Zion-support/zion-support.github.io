interface SafeImageProps {

  src: string;
  alt: string;  width?: number;interface SafeImageProps {


    }
  }

  // If we have an error and no fallback, show a placeholder
  if (hasError && (!fallbackSrc |currentSrc === fallbackSrc)) {
        return (
      <div
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
<<<<<<< HEAD
        style={ width, height }
        role='img'
=======
        style={{ width, height }}
        role="img"
>>>>>>> origin/resolved-merge-conflicts
        aria-label = {alt,}
      >
        <ImageIcon className='w-6 h-6' />      </div>
    )
  }

;
import { ImageIcon  } from 'lucide-react;
interface SafeImageProps  {interface SafeImageProps  {interface SafeImageProps  {src: string;
  alt: string;  width?: number;interface SafeImageProps  {}
  }// If we have an error and no fallback, show a placeholder;
  if (hasError && (!fallbackSrc |currentSrc === fallbackSrc)) {return (<div;
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
        style={{ width, height }}
        role="img;
        aria-label = {alt}
      >;
        <ImageIcon className=w-6 h-6' />      </div>;
    )}/>;)aria-label={alt}
'use client,import Image from next/image',import { useState } from 'react,interface SafeImageProps  {src: string;
  alt: string;  width?: number;interface SafeImageProps  {src: string,alt: string,interface SafeImageProps  {src: string,alt: string,interface SafeImageProps  {src: string,alt: string,width?: number;
  height?: number;
  className?: string;
  fallbackSrc?: string;
  priority?: boolean;
  sizes?: string;}
  }// If we have an error and no fallback, show a placeholder;
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {src: string;
  alt: string;
interface SafeImageProps  {src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackSrc?: string;
  priority?: boolean;
  sizes?: string;


    }
  }


  // If we have an error and no fallback, show a placeholder;
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {;

'use client',

import Image from 'next/image';
import { useState } from 'react';
import { ImageIcon } from 'lucide-react';

interface SafeImageProps {
  src: string
  alt: string;  width?: number;interface SafeImageProps {
  src: string
  alt: string
interface SafeImageProps {
quality?: number;

export function SafeImage({
  src,
  alt,
  width,
  height,
  className = '',
  fallbackSrc,
  priority = false,
  sizes,
  quality = 75,
origin/cursor/automate-test-improve-and-merge-code-2533
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError = () => {
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
setHasError(true);
    } else if (!hasError && src.startsWith('/')) {
      // Try serving the image directly through our custom API route
      const fallbackUrl = `/api/image${src}`;
      setCurrentSrc(fallbackUrl);
      setHasError(true);
    } else if (!hasError) {
      setHasError(true);
    }
  };

  // If we have an error and no fallback, show a placeholder
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {
    
      >
        <ImageIcon className='w-6 h-6' />
origin/cursor/automate-test-improve-and-merge-code-2533
  // If we have an error and no fallback, show a placeholder
  if (hasError && (!fallbackSrc |currentSrc === fallbackSrc)) {

        return (
      <div
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
<<<<<<< HEAD
        style={ width, height }
        role='img'
=======
        style={{ width, height }}
        role="img"
>>>>>>> origin/resolved-merge-conflicts

  quality?: number
}

export function SafeImage({
  src;
  alt;
  width;
  height;
  className = '',
  fallbackSrc;
  priority = false,
  sizes;
  quality = 75}: SafeImageProps) {

  const [ hasError, setHasError ] = useState(false),
  const [ currentSrc, setCurrentSrc ] = useState(src),


  const handleError = () => {
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(true)
    } else if (!hasError && src.startsWith('/')) {
      // Try serving the image directly through our custom API route
      const fallbackUrl = `/api/image${src}`,
      setCurrentSrc(fallbackUrl);
      setHasError(true)
    } else if (!hasError) {
      setHasError(true)
    }
  };
  // If we have an error and no fallback, show a placeholder;
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {;
    return (;
      <div;

        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
<<<<<<< HEAD
        style={ width, height }
        role='img'
        aria-label={alt}

      >
        <ImageIcon className='w-6 h-6' />
=======
        style={{ width, height }}
        role="img"
        aria-label={alt}

      >
        <ImageIcon className="w-6 h-6" />
>>>>>>> origin/resolved-merge-conflicts
      </div>
    )
  }





    />
  ); return (
        aria-label = {alt,}>;
        <ImageIcon className='w-6 h-6' />      </div>;
    )}
  )aria-label={alt}
'use client,quality?: number;
}export function SafeImage() {const [ hasError, setHasError ] = useState(false),const [ currentSrc, setCurrentSrc ] = useState(src),const handleError = () => {if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {setCurrentSrc(fallbackSrc)setHasError(true)} else if (!hasError && src.startsWith(/')) {// Try serving the image directly through our custom API route;
      const fallbackUrl = `/api/image${src}`,setCurrentSrc(fallbackUrl)setHasError(true)} else if (!hasError) {setHasError(true)}
  }// If we have an error and no fallback, show a placeholder;
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {return (<div;className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
        style={{ width, height }}
        role=img";
        aria-label={alt}>;
        <ImageIcon className="w-6 h-6 />;
      </div>;
    )}/>;
  )return (/>;
  )return (aria-label = {alt}>;
        <ImageIcon className='w-6 h-6 />      </div>;
    )}/>;
  )aria-label={alt}
      >;
        <ImageIcon className=w-6 h-6" />;
      </div>;
    )}/>;
  )return (<Image;
      src = {currentSrc}
      alt = {alt}
      width = {width}
      height = {height}
      className = {className}
      onError = {handleError}
      priority = {priority}
      // Add unoptimized as fallback for problematic images;
      unoptimized = {hasError}
    />;
  );  return (



    <Image
      src = {currentSrc,}
      alt = {alt,}
      width = {width,}
      height = {height,}
      className = {className,}
      onError = {handleError,}
      priority = {priority,}
      // Add unoptimized as fallback for problematic images
      unoptimized = {hasError,}


} 

}


}
    />;
  );


  src: string,
  alt: string,
interface SafeImageProps {
  src: string,
  alt: string,
  width?: number;
  height?: number;
  class_name?: string;
  fallback_src?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
export /**;
 * SafeImage - Function description;
 */;
function SafeImage() {const [has_error, setHasError] = useState (false)const [current_src, setCurrentSrc] = useState (src)const handle_error = () =>: any {// Check condition;
if ( {) {$2;
}
      setCurrentSrc (fallback_src)setHasError (true)// Try serving the image directly through our custom API route;
      const fallback_url = `/api / image${src}`;
      setCurrentSrc (fallback_url)setHasError (true)} else // Check condition;
if ( {) {$2;
}
      setHasError (true)}
  }
  // If we have an error and no fallback, show a placeholder;
  if () {) {$2;
}
        return (<div;
        className={`flex items - center justify - center bg - gray - 100 text - gray - 400 ${class_name}`}
        style={{ width, height }}
        role="img;
        aria - label = {alt }
      >;
        <ImageIcon className=w - 6 h - 6' />      </div>)}
    />)aria - label={alt}
      >;
        <ImageIcon className="w - 6 h - 6" />;
      </div>);
  }
    />); return (

    <Image;
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      priority={priority}
      // Add unoptimized as fallback for problematic images;
      unoptimized = {has_error, }
    />);
}
} ;


/>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
