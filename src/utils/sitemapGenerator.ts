interface SitemapUrl {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

interface SitemapConfig {
  baseUrl: string;
  urls: SitemapUrl[];
  outputPath?: string;
}

export class SitemapGenerator {
  private config: SitemapConfig;

  constructor(config: SitemapConfig) {
    this.config = config;
  }

  /**
   * Generate XML sitemap content
   */
  generateXML(): string {
    const { baseUrl, urls } = this.config;
    const xmlUrls = urls.map(url => {
      const lastmod = url.lastmod || new Date().toISOString().split('T')[0];
      const changefreq = url.changefreq || 'weekly';
      const priority = url.priority || 0.5;
      return `  <url>
    <loc>${baseUrl}${url.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    }).join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;
  }

  /**
   * Generate robots.txt content
   */
  generateRobotsTxt(): string {
    const { baseUrl } = this.config;
    return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemap-index.xml`;
  }

  /**
   * Save sitemap to file
   */
  async saveSitemap(): Promise<void> {
    const xml = this.generateXML();
    const outputPath = this.config.outputPath || './public/sitemap.xml';
    
    // In a real implementation, you would write to file system
    // For now, we'll just return the content
    console.log('Sitemap generated:', outputPath);
  }
}

// Default sitemap configuration
export const defaultSitemapConfig: SitemapConfig = {
  baseUrl: 'https://ziontechgroup.com',
  urls: [
    // Main pages
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/about', priority: 0.8, changefreq: 'monthly' },
    { url: '/services', priority: 0.9, changefreq: 'weekly' },
    { url: '/contact', priority: 0.7, changefreq: 'monthly' },
    { url: '/pricing', priority: 0.8, changefreq: 'weekly' },
    
    // Service pages
    { url: '/services/ai-automation', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/cloud-solutions', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/cybersecurity', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/data-analytics', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/devops', priority: 0.8, changefreq: 'weekly' },
    
    // Solution pages
    { url: '/solutions/enterprise', priority: 0.7, changefreq: 'monthly' },
    { url: '/solutions/healthcare', priority: 0.7, changefreq: 'monthly' },
    
    // Additional pages
    { url: '/blog', priority: 0.6, changefreq: 'weekly' },
    { url: '/careers', priority: 0.6, changefreq: 'weekly' },
    { url: '/partners', priority: 0.5, changefreq: 'monthly' },
    { url: '/news', priority: 0.5, changefreq: 'weekly' },
    { url: '/case-studies', priority: 0.6, changefreq: 'monthly' },
    { url: '/help-center', priority: 0.5, changefreq: 'monthly' },
    { url: '/faq', priority: 0.5, changefreq: 'monthly' },
    { url: '/pricing', priority: 0.6, changefreq: 'monthly' },
    { url: '/marketplace', priority: 0.7, changefreq: 'weekly' },
  ]
};

// Utility function to generate sitemap
export function generateSitemap(config: SitemapConfig = defaultSitemapConfig): string {
  const generator = new SitemapGenerator(config);
  return generator.generateXML();
}

// Utility function to generate robots.txt
export function generateRobotsTxt(config: SitemapConfig = defaultSitemapConfig): string {
  const generator = new SitemapGenerator(config);
  return generator.generateRobotsTxt();
}