declare module 'react-lazy-load-image-component' {
  import { ComponentType, ImgHTMLAttributes } from 'react';

  interface LazyLoadImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    effect?: string;
    placeholder?: React.ReactNode;
    placeholderSrc?: string | undefined;
    threshold?: number;
    visibleByDefault?: boolean;
    wrapperClassName?: string;
    wrapperProps?: any;
    beforeLoad?: () => void;
    afterLoad?: () => void;
    onError?: () => void;
    delayMethod?: string;
    delayTime?: number;
    useIntersectionObserver?: boolean;
    scrollPosition?: { x: number; y: number };
    onLoad?: () => void;
    onVisible?: () => void;
  }

  const LazyLoadImage: ComponentType<LazyLoadImageProps>;
  export default LazyLoadImage;
}