// Enhanced SEO optimization utilities
export class SEOOptimizer {
  private static instance: SEOOptimizer;

  public static getInstance(): SEOOptimizer {
    if (!SEOOptimizer.instance) {
      SEOOptimizer.instance = new SEOOptimizer();
    }
    return SEOOptimizer.instance;
  }

  public generateMetaTags(pageData: {
    title: string;
    description: string;
    keywords?: string[];
    image?: string;
    url?: string;
    type?: string;
  }): string {
    const {
      title,
      description,
      keywords = [],
      image = '/og-image.jpg',
      url = window.location.href,
      type = 'website'
    } = pageData;

    return `
      <title>${this.escapeHtml(title)}</title>
      <meta name="description" content="${this.escapeHtml(description)}">
      <meta name="keywords" content="${keywords.join(', ')}">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="${type}">
      <meta property="og:url" content="${url}">
      <meta property="og:title" content="${this.escapeHtml(title)}">
      <meta property="og:description" content="${this.escapeHtml(description)}">
      <meta property="og:image" content="${image}">
      
      <!-- Twitter -->
      <meta property="twitter:card" content="summary_large_image">
      <meta property="twitter:url" content="${url}">
      <meta property="twitter:title" content="${this.escapeHtml(title)}">
      <meta property="twitter:description" content="${this.escapeHtml(description)}">
      <meta property="twitter:image" content="${image}">
      
      <!-- Additional SEO -->
      <meta name="robots" content="index, follow">
      <meta name="author" content="Zion Tech Group">
      <link rel="canonical" href="${url}">
    `;
  }

  public generateStructuredData(data: any): string {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "logo": "https://ziontechgroup.com/logo.png",
      "description": "Leading AI and technology solutions provider",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "364 E Main St STE 1008",
        "addressLocality": "Middletown",
        "addressRegion": "DE",
        "postalCode": "19709",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-302-464-0950",
        "contactType": "customer service",
        "email": "kleber@ziontechgroup.com"
      },
      "sameAs": [
        "https://github.com/Zion-Holdings",
        "https://linkedin.com/company/zion-tech-group"
      ],
      ...data
    };

    return `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`;
  }

  public optimizeImages(images: string[]): string[] {
    return images.map(img => {
      const baseName = img.replace(/\.[^/.]+$/, '');
      return `
        <picture>
          <source srcset="${baseName}.webp" type="image/webp">
          <source srcset="${baseName}.jpg" type="image/jpeg">
          <img src="${img}" alt="Optimized image" loading="lazy">
        </picture>
      `;
    });
  }

  public generateSitemap(pages: Array<{url: string, lastmod?: string, priority?: number}>): string {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod || new Date().toISOString()}</lastmod>
    <priority>${page.priority || 0.8}</priority>
  </url>
`).join('')}
</urlset>`;

    return sitemap;
  }

  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}