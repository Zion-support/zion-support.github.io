declare module 'next/link' {
  import { ComponentType } from 'react';
  
  interface LinkProps {
    href: string;
    as?: string;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
    children: React.ReactNode;
  }
  
  const Link: ComponentType<LinkProps>;
  export default Link;
}

declare module 'next/dynamic' {
  import { ComponentType } from 'react';
  
  function dynamic<T = {}>(
    dynamicImport: () => Promise<{ default: ComponentType<T> }>,
    options?: {
      loading?: () => React.ReactNode;
      ssr?: boolean;
    }
  ): ComponentType<T>;
  
  export default dynamic;
}

declare module 'next/image' {
  import { ComponentType, ImgHTMLAttributes } from 'react';
  
  interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    priority?: boolean;
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
  }
  
  const Image: ComponentType<ImageProps>;
  export default Image;
}