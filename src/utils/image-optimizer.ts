
// Image optimization utility
export const optimizeImage = (src, options = {}) => {
  const {
    width = 800,
    height = 600,
    quality = 80,
    format = 'webp',
    lazy = true
  } = options;
  
  const optimizedSrc = `${src}?w=${width}&h=${height}&q=${quality}&f=${format}`;
  
  return {
    src: optimizedSrc,
    loading: lazy ? 'lazy' : 'eager',
    decoding: 'async',
    ...options
  };
};

// Lazy image component
export const LazyImage = ({ src, alt, ...props }) => {
  const optimizedProps = optimizeImage(src, props);
  
  return (
    <img
      {...optimizedProps}
      alt={alt}
      onLoad={(e) => {
        e.target.classList.add('loaded');
      }}
      className={`transition-opacity duration-300 opacity-0 ${props.className || ''}`}
    />
  );
};
