export const optimizeImages = () => {
  if (typeof window === 'undefined') return;
  
  const images = document.querySelectorAll('img[loading="lazy"]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          imageObserver.unobserve(img);
        }
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
};

export const prefetchResources = (urls: string[]) => {
  if (typeof window === 'undefined') return;
  
  urls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  });
};

export const deferNonCriticalCSS = () => {
  if (typeof window === 'undefined') return;
  
  const links = document.querySelectorAll('link[rel="stylesheet"]');
  links.forEach((link) => {
    const href = link.getAttribute('href');
    if (href && !href.includes('critical')) {
      link.setAttribute('media', 'print');
      link.addEventListener('load', () => {
        link.setAttribute('media', 'all');
      });
    }
  });
};
