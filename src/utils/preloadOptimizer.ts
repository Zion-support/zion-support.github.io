/**
 * Preload Optimizer;
 * Optimizes resource loading for better performance;
 */
export const _preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;
  // Preload critical fonts;
  const _fontPreloads = [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap'
  ];
  fontPreloads.forEach(href => {
      criticalImages.forEach(src => {
      const _resources = routeResources[route as keyof typeof routeResources]
  if (resources) {
    resources.forEach(resource => {
      const _link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = resource;
      document.head.appendChild(link)
    })
  }
}
export const _optimizeImages = () => {
  if (typeof window === 'undefined') return;
  // Add loading="lazy" to images below the fold;
  const _images = document.querySelectorAll('img[data-lazy]')
  images.forEach(img => {
    img.setAttribute('loading', 'lazy')
  })
  // Add intersection observer for lazy loading;
  if ('IntersectionObserver' in window) {
    const _imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const _img = entry.target as HTMLImageElement;
          if (img.dataset['src']) {
            img['src'] = img.dataset['src']
            img.removeAttribute('data-src')
            imageObserver.unobserve(img)
          }
        }
      })
    })
    const _lazyImages = document.querySelectorAll('img[data-src]')
    lazyImages.forEach(img => imageObserver.observe(img))
  }
}
export const _optimizeThirdPartyScripts = () => {
  if (typeof window === 'undefined') return;
  // Defer non-critical scripts;
  const _scripts = document.querySelectorAll('script[data-defer]')
  scripts.forEach(script => {
    script.setAttribute('defer', '')
  })
  // Load analytics after page load;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      loadAnalytics()
    })
  } else {
    loadAnalytics()
  }
}
const _loadAnalytics = () => {
  // Load Google Analytics after page load;
  const _gaScript = document.createElement('script')
  gaScript.async = true;
  gaScript['src'] = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID'
  document.head.appendChild(gaScript)
}