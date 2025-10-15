// SEO utilities and helpers
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
}

export const seoManager = {
  updatePageSEO(data: SEOData) {
    if (typeof document === 'undefined') return;

    // Update title
    document.title = data.title;

    // Update meta description
    this.updateMetaTag('description', data.description);

    // Update keywords
    this.updateMetaTag('keywords', data.keywords.join(', '));

    // Update canonical URL
    this.updateCanonical(data.canonical);

    // Update Open Graph tags
    if (data.ogTitle) this.updateMetaTag('og:title', data.ogTitle, 'property');
    if (data.ogDescription) this.updateMetaTag('og:description', data.ogDescription, 'property');
    if (data.ogImage) this.updateMetaTag('og:image', data.ogImage, 'property');
    if (data.ogType) this.updateMetaTag('og:type', data.ogType, 'property');

    // Update Twitter Card tags
    if (data.twitterCard) this.updateMetaTag('twitter:card', data.twitterCard);

    // Update robots meta
    if (data.noindex || data.nofollow) {
      const robots = [];
      if (data.noindex) robots.push('noindex');
      if (data.nofollow) robots.push('nofollow');
      this.updateMetaTag('robots', robots.join(', '));
    }

    // Add structured data
    if (data.structuredData) {
      this.addStructuredData(data.structuredData);
    }
  },

  updateMetaTag(name: string, content: string, attribute: string = 'name') {
    let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }
    meta.content = content;
  },

  updateCanonical(url: string) {
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  },

  addStructuredData(data: object) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }
};