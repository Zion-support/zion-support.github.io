<<<<<<< HEAD:src_backup/components/ui/safe-image.tsx
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
        style={{ width, height }}
        role="img"
        aria-label = {alt,}
      >
        <ImageIcon className='w-6 h-6' />      </div>
    )
  }
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/ui/safe-image.tsx

;
import { ImageIcon  } from 'lucide-react';
interface SafeImageProps  {interface SafeImageProps  {interface SafeImageProps  {src: string;
  alt: string;  width?: number;interface SafeImageProps  {}
  }// If we have an error and no fallback, show a placeholder;
  if (hasError && (!fallbackSrc |currentSrc === fallbackSrc)) {return (<div;
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
        style={{ width, height }}
        role="img";
        aria-label = {alt}
      >;
        <ImageIcon className='w-6 h-6' />      </div>;
    )}/>;)aria-label={alt}
'use client',import Image from 'next/image',import { useState } from 'react',interface SafeImageProps  {src: string;
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
<<<<<<< HEAD:src_backup/components/ui/safe-image.tsx


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
        style={{ width, height }}
        role="img"

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
        style={{ width, height }}
        role="img"
        aria-label={alt}

      >
        <ImageIcon className="w-6 h-6" />
      </div>
    )
  }





    />
  ); return (
        aria-label = {alt,}>;
=======
  quality?: number;
export function SafeImage() {const [hasError, setHasError] = useState(false)const [currentSrc, setCurrentSrc]  = useState(src)const handleError = () => {if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {setCurrentSrc(fallbackSrc)setHasError(true)} else if (!hasError && src.startsWith('/')) {// Try serving the image directly through our custom API route;
      const fallbackUrl = `/api/image${src}`;
      setCurrentSrc(fallbackUrl)setHasError(true)} else if (!hasError) {setHasError(true)setHasError(true)}
  }// If we have an error and no fallback, show a placeholder;
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {>;
        <ImageIcon className='w-6 h-6' />;
  // If we have an error and no fallback, show a placeholder;
  if (hasError && (!fallbackSrc |currentSrc === fallbackSrc)) {return (<div;
        className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
        style={{ width, height }}
        role="img";
        aria-label = {alt}
      >;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/ui/safe-image.tsx
        <ImageIcon className='w-6 h-6' />      </div>;
    )}
  )aria-label={alt}
'use client',quality?: number;
}export function SafeImage() {const [ hasError, setHasError ] = useState(false),const [ currentSrc, setCurrentSrc ] = useState(src),const handleError = () => {if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {setCurrentSrc(fallbackSrc)setHasError(true)} else if (!hasError && src.startsWith('/')) {// Try serving the image directly through our custom API route;
      const fallbackUrl = `/api/image${src}`,setCurrentSrc(fallbackUrl)setHasError(true)} else if (!hasError) {setHasError(true)}
  }// If we have an error and no fallback, show a placeholder;
  if (hasError && (!fallbackSrc || currentSrc === fallbackSrc)) {return (<div;className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}
        style={{ width, height }}
        role="img";
        aria-label={alt}>;
        <ImageIcon className="w-6 h-6" />;
      </div>;
    )}/>;
  )return (/>;
  )return (aria-label = {alt}>;
        <ImageIcon className='w-6 h-6' />      </div>;
    )}/>;
  )aria-label={alt}
      >;
        <ImageIcon className="w-6 h-6" />;
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
      unoptimized = {hasError}}
    />;
<<<<<<< HEAD:src_backup/components/ui/safe-image.tsx
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
=======
  )}}}
    />;
  )src: string,alt: string,interface SafeImageProps  {src: string,alt: string,width?: number;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/ui/safe-image.tsx
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
        role="img";
        aria - label = {alt }
      >;
        <ImageIcon className='w - 6 h - 6' />      </div>)}
    />)aria - label={alt}
      >;
        <ImageIcon className="w - 6 h - 6" />;
<<<<<<< HEAD:src_backup/components/ui/safe-image.tsx
      </div>);
  }
    />); return (

    <Image;
=======
      </div>)}
    />)return (<Image;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/ui/safe-image.tsx
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleError}
      priority={priority}
<<<<<<< HEAD:src_backup/components/ui/safe-image.tsx
      // Add unoptimized as fallback for problematic images;
      unoptimized = {has_error, }
    />);
}
} ;


/>
  );
origin/cursor/automate-test-improve-and-merge-code-2533
=======
      // Add unoptimized as fallback for problematic images;unoptimized={hasError}
    />;
  )}unoptimized = {has_error }
    />)}
}/>;
  )
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c:src/components/ui/safe-image.tsx
