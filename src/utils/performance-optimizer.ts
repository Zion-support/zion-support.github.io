interface Service {
id: string;,
name: string;
}

// Performance optimization utilities,
export const optimizeImages = () => {;
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.loading) {
      img.loading = 'lazy'
    }
    if (!img.decoding) {
      img.decoding = 'async'
    }
  });
  }
  return { loadComponent }
};
    link.rel = 'preload';
    link.href = resource, link.as = resource.endsWith('.css') ? 'style' : 'font';