/**
 * SEO utility functions
 */

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

export class SEOUtils {
  static generateStructuredData(data: unknown): string {
    return JSON.stringify({
      '@context': 'https://schema.org',
      ...(data as Record<string, any>)
    });
  }

  static generateMetaTags(seoData: SEOData): string {
    return `
      <title>${seoData.title}</title>
      <meta name="description" content="${seoData.description}" />
      <meta name="keywords" content="${seoData.keywords.join(', ')}" />
      ${seoData.ogImage ? `<meta property="og:image" content="${seoData.ogImage}" />` : ''}
      ${seoData.canonicalUrl ? `<link rel="canonical" href="${seoData.canonicalUrl}" />` : ''}
    `;
  }

  static generateSitemap(pages: string[]): string {
    const baseUrl = process.env['NEXT_PUBLIC_BASE_URL'] || 'https://ziontechgroup.com';
    
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
    <url>
      <loc>${baseUrl}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('')}
</urlset>`;
  }
}
