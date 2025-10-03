
// Image optimization utilities
export const optimizeImage = (src, width, quality = 80) => {
  if (src.includes('placeholder.com')) return src;
  
  const params = new URLSearchParams({
    w: width.toString(),
    q: quality.toString(),
    f: 'auto'
  });
  
  return `${src}?${params.toString()}`;
};

export const getResponsiveImage = (src, sizes = [320, 640, 1024, 1920]) => {
  return sizes.map(size => ({
    src: optimizeImage(src, size),
    width: size
  }));
};
