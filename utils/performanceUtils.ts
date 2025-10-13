// Performance monitoring utilities
export class PerformanceMonitor {
  static measurePageLoad() {
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      return {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        totalTime: navigation.loadEventEnd - navigation.fetchStart
      };
    }
    return null;
  }

  static measureResourceTiming() {
    if (typeof window !== 'undefined' && window.performance) {
      const resources = window.performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      return resources.map(resource => ({
        name: resource.name,
        duration: resource.duration,
        size: resource.transferSize || 0
      }));
    }
    return [];
  }

  static logWebVitals() {
    if (typeof window !== 'undefined' && (window as any).webVitals) {
      const webVitals = (window as any).webVitals;
      webVitals.getCLS(console.log);
      webVitals.getFID(console.log);
      webVitals.getFCP(console.log);
      webVitals.getLCP(console.log);
      webVitals.getTTFB(console.log);
    }
  }
}

export class SEOOptimizer {
  static updateMetaTags(title: string, description: string, keywords?: string) {
    if (typeof document !== 'undefined') {
      document.title = title;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = description;
        document.head.appendChild(meta);
      }

      if (keywords) {
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
          metaKeywords.setAttribute('content', keywords);
        } else {
          const meta = document.createElement('meta');
          meta.name = 'keywords';
          meta.content = keywords;
          document.head.appendChild(meta);
        }
      }
    }
  }

  static generateStructuredData(type: string, data: any) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    });
    document.head.appendChild(script);
  }
}