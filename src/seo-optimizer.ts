// SEO Optimization Script
export const optimizeSEO = () => {
  // Add structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description: 'Advanced AI and IT Solutions',
    url: 'https://zion.app',
    logo: 'https://zion.app/logo.png',
    sameAs: [
      'https://twitter.com/ziontech',
      'https://linkedin.com/company/zion-tech'
    ]
  };
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
  // Optimize meta tags
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Zion Tech Group - Advanced AI and IT Solutions. Transform your business with cutting-edge artificial intelligence and technology solutions.');
  }
  // Add canonical URL
  const canonical = document.createElement('link');
  canonical.rel = 'canonical';
  canonical.href = window.location.href;
  document.head.appendChild(canonical);
};
// Auto-run on page load
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', optimizeSEO);
}
