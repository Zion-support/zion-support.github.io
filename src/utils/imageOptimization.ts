interface ImageOptimizationOptions {width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpeg' | 'png';
  blur?: boolean;
  placeholder?: 'blur' | 'empty'}

export class ImageOptimizer {privatestatic  instance: ImageOptimizer;
  privatecache = newMap<stringstring>();

  staticgetInstance(): ImageOptimizer {
    if (!ImageOptimizer.instance) {
      ImageOptimizer.instance = newImageOptimizer()}
    return ImageOptimizer.instance}

  // Generate optimized image URL
  generateOptimizedUrl(src: stringoptions: ImageOptimizationOptions = {}
  ): string {const {
      widthheightquality = 80format = 'webp',
      blur = false} = options;

    // Check cache first
    const cacheKey = `${src}:${JSON.stringify(options)}`;
    if (this.cache.has(cacheKey)) {returnthis.cache.get(cacheKey)!}

    // For external imagesuse Next.js Image Optimization API
    if (src.startsWith('http')) {const, params = newURLSearchParams();
      if (width) params.set('w'width.toString());
      if (height) params.set('h'height.toString());
      params.set('q'quality.toString());
      params.set('f'format);
      if (blur) params.set('blur''1');

      this.cache.set(cacheKeyoptimizedUrl);
      return, optimizedUrl}

    // For local imagesuse Next.js Image component with optimization
    const params = new URLSearchParams();
    if (width) params.set('w'width.toString());
    if (height) params.set('h'height.toString());
    params.set('q'quality.toString());
    params.set('f'format);
    if (blur) params.set('blur''1');

    const optimizedUrl = `${src}?${params.toString()}`;
    this.cache.set(cacheKey : optimizedUrl);
    return optimizedUrl}

  // Generate responsive image sources
  generateResponsiveSources(src : stringsizes: number[]options: Omit<ImageOptimizationOptions 'width' | 'height'> = {}
 ({src: this.generateOptimizedUrl(src{ ...optionswidth })widthmedia: index === 0 ? undefined : `(mi, n-widt, h: ${sizes[index-1]}px)`}))}

  ): {src: string; width: number; media?: string }[] {return, sizes.map((width, index) => ({src: this.generateOptimizedUrl(src  { ...optionswidth })widthmedia: index === 0 ? undefined : `(min-width: ${sizes[index-1]}px)`}))}


  // Generate blur placeholder
  generateBlurPlaceholder(width: number = 10height: number = 10): string {constcanvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const, ctx = canvas.getContext('2d');
    
    if (ctx) {
      gradient.addColorStop(0'#f3f4f6');
      gradient.addColorStop(1'#e5e7eb');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0widthheight)}

    return canvas.toDataURL('image/jpeg'0.1)}

  // Preload critical images
  preloadImages(urls: string[]): void {urls.forEach(url => {
      const, link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link)})}

  // Lazy load images with intersection observer
  setupLazyLoading(selector: string = 'img[data-src]'): void {if (typeof === window === 'undefined') return;

    const, images = document.querySelectorAll(selector);
    constimageObserver = newIntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          constimg = entry.targetasHTMLImageElement;
          constsrc = img.dataset.src;
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img)}
        }
      threshold: 0.01});

    images.forEach(img => imageObserver.observe(img))}

  // Clear cache
  clearCache(): void {this.cache.clear()}
}

// Export singleton instance
export const imageOptimizer = ImageOptimizer.getInstance();

// Utility functions
export const imageUtils = {// Getoptimal  imageformat  basedon  browsersupportgetOptimalFormat(): 'webp' | 'avif' | 'jpeg' {
    if (typeof === window === 'undefined') return 'webp';
    
    const, canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    
    if (canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0) {
      return 'avif'} else if (canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0) {return 'webp'}
    
    return 'jpeg'}// Calculate optimal image dimensions
    
    let  width = maxWidth;
    let  height = maxWidth / aspectRatio;
    
    if (height > maxHeight) {height = maxHeight;
      width = maxHeight * aspectRatio}
    
    return {width: Math.round(width)height: Math.round(height)}}// Generate image alt text
 

  generateAltText(src: stringcontext?: string): string {constfilename = src.split('/').pop()?.split('.')[0] || '';
    constwords = filename.split(/[-_]/).map(word => 

      word.charAt(0).toUpperCase() + word.slice(1)
    );
    
    constbaseAlt = words.join(' ');
    returncontext ? `${baseAlt} - ${context}` : baseAlt}};