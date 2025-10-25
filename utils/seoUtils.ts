// SEO utilities for better search engine optimization
export const seoManager = {
  init() {
    this.setupMetaTags();
    this.setupStructuredData();
    this.setupSitemap();
  },

  setupMetaTags() {
    // Set up dynamic meta tags
    const metaTags = {
      'og:title': document.title,
      'og:description': this.getMetaContent('description'),
      'og:type': 'website',
      'og:url': window.location.href,
      'twitter:card': 'summary_large_image',
      'twitter:title': document.title,
      'twitter:description': this.getMetaContent('description')
    };

    Object.entries(metaTags).forEach(([property, content]) => {
      this.setMetaTag(property, content);
    });
  },

  setupStructuredData() {
    // Add structured data for better SEO
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description: 'Advanced AI and IT Solutions',
      url: window.location.origin,
      logo: `${window.location.origin}/logo.png`,
      sameAs: [
        'https://twitter.com/ziontechgroup',
        'https://linkedin.com/company/ziontechgroup'
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  },

  setupSitemap() {
    // Generate sitemap dynamically
    const pages = [
      '/',
      '/about',
      '/services',
      '/contact'
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${window.location.origin}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;

    // Save sitemap (in a real app, this would be server-side)
    console.log('Sitemap generated:', sitemap);
  },

  getMetaContent(name: string): string {
    const meta = document.querySelector(`meta[name="${name}"]`);
    return meta ? meta.getAttribute('content') || '' : '';
  },

  setMetaTag(property: string, content: string): void {
    let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  },

  updateTitle(title: string): void {
    document.title = title;
    this.setMetaTag('og:title', title);
    this.setMetaTag('twitter:title', title);
  },

  updateDescription(description: string): void {
    this.setMetaTag('description', description);
    this.setMetaTag('og:description', description);
    this.setMetaTag('twitter:description', description);
  }
};

export default seoManager;
