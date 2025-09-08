import React from 'react'
import Image from 'next/image'
interface OptimizedImageProps {
  src: string,
  alt: string,
  width: number,
  height: number,
  className?: string,
  priority?: boolean,
  quality?: number,
  sizes?: string
}
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;}

const: OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  sizes = '100vw',
}) => {
  return (
    <Image
      src={src}
      alt={_alt}
      width={_width}
      height={_height}
      className={_className}
      priority={_priority}
      quality={_quality}
      sizes={_sizes}
    />
  )
},

export default OptimizedImage
