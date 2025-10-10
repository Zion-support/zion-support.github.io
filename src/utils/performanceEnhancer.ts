// PerformanceEnhancer utility
// This file contains utility functions and configurations for performance enhancement

export default class PerformanceEnhancer {
  constructor() {
    this.init();
  }

  init() {
    if (typeof window !== 'undefined') {
      this.optimizeImages();
      this.enableLazyLoading();
      this.optimizeAnimations();
    }
  }

  optimizeImages() {
    // Convert images to WebP format if supported
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img.src && !img.src.includes('.webp')) {
        const webpSrc = img.src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        img.src = webpSrc;
      }
    });
  }

  enableLazyLoading() {
    // Enable native lazy loading for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
    });
  }

  optimizeAnimations() {
    // Reduce animations on low-end devices
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
    }
  }
}
