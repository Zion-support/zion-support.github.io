// SEO Optimizer utility functions
export const seoOptimizer = {
  updateTitle: (title: string) => {
    document.title = title;
  },
  
  updateMeta: (name: string, content: string) => {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  },
  
  updateDescription: (description: string) => {
    seoOptimizer.updateMeta('description', description);
  },
  
  updateKeywords: (keywords: string) => {
    seoOptimizer.updateMeta('keywords', keywords);
  },
  
  trackPageView: (page: string) => {
    // Basic analytics tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }
};