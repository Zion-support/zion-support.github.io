/**
 * SEO Optimization Utilities
 */

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl?: string;
  ogType?: 'website' | 'article';
  ogUrl?: string;
  ogImage?: string;
}

// Update meta tags dynamically
export const updateMetaTags = (data: SEOData) => {
  if (typeof document === 'undefined') return;

  document.title = data.title;

  const metaTags = [
    { name: 'description', content: data.description },
    { name: 'keywords', content: data.keywords.join(', ') },
    { property: 'og:title', content: data.title },
    { property: 'og:description', content: data.description },
    { property: 'og:type', content: data.ogType || 'website' },
    { property: 'og:url', content: data.ogUrl || window.location.href },
    { property: 'og:image', content: data.ogImage || '/og-image.png' }
  ];

  metaTags.forEach(({ name, property, content }) => {
    const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
    let metaTag = document.querySelector(selector) as HTMLMetaElement;
    
    if (!metaTag) {
      metaTag = document.createElement('meta');
      if (name) metaTag.name = name;
      if (property) metaTag.setAttribute('property', property);
      document.head.appendChild(metaTag);
    }
    
    metaTag.content = content;
  });
};

// Generate structured data
export const generateStructuredData = (data: any) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    ...data
  });
  document.head.appendChild(script);
};

export const seoOptimizer = { updateMetaTags, generateStructuredData };

export default { updateMetaTags, generateStructuredData };