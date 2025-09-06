// Performance optimization utilities
export const optimizeImages = () => {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.loading) {
      img.loading = 'lazy'
    }
    if (!img.decoding) {
      img.decoding = 'async'
    }

};

  const loadComponent = componentName => {
    return import(`./components/${componentName}`);
  };

  return { loadComponent };
};

