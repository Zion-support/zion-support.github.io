export const performanceUtils = {
  optimizeImages: () => {
    const images = document.querySelectorAll('img');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement;
          if (image.dataset.src) {
            image.src = image.dataset.src;
            observer.unobserve(image);
          }
        }
      });
    });
    
    images.forEach(img => observer.observe(img));
  }
};
