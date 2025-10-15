// SEO performance monitoring
export const seoMetrics = {
  // Core Web Vitals monitoring
  measureCoreWebVitals: () => {
    // LCP - Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const LastEntry = entries[entries.length - 1];
      // LCP: ${LastEntry.startTime}
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // FID - First Input Delay
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(_entry => {
        // FID: ${_entry.processingStart - _entry.startTime}
      });
    }).observe({ entryTypes: ['first-input'] });

    // CLS - Cumulative Layout Shift
    let ClsValue = 0;
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        if (!entry.hadRecentInput) {
          ClsValue += entry.value;
        }
      });
        // CLS: ${ClsValue}
    }).observe({ entryTypes: ['layout-shift'] });
  },

  // Page load time monitoring
  measurePageLoad: () => {
    window.addEventListener('load', () => {
      const LoadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      // Page Load Time: ${LoadTime}ms
    });
  },

  // SEO element presence check
  checkSEOElements: () => {
    const checks = {
      title: !!document.querySelector('title'),
      metaDescription: !!document.querySelector('meta[name="description"]'),
      h1: !!document.querySelector('h1'),
      canonical: !!document.querySelector('link[rel="canonical"]'),
      ogTags: !!document.querySelector('meta[property="og:title"]'),
      structuredData: !!document.querySelector('script[type="application/ld+json"]')
    };
    
    // SEO Elements Check: ${checks}
    return checks;
  },

  // Image optimization check
  checkImageOptimization: () => {
    const images = document.querySelectorAll('img');
    const issues = [];
    
    images.forEach(img => {
      if (!img.alt) issues.push('Missing alt text');
      if (!img.loading) issues.push('Missing lazy loading');
      if (img.width && img.height && img.naturalWidth && img.naturalHeight) {
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        const displayRatio = img.width / img.height;
        if (Math.abs(aspectRatio - displayRatio) > 0.1) {
          issues.push('Aspect ratio mismatch');
        }
      }
    });
    
    // Image Optimization Issues: ${issues}
    return issues;
  }
};

// Initialize SEO monitoring
export const initSEOMonitoring = () => {
  seoMetrics.measureCoreWebVitals();
  seoMetrics.measurePageLoad();
  seoMetrics.checkSEOElements();
  seoMetrics.checkImageOptimization();
};
