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

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /
Allow: /services
Allow: /about
Allow: /contact
Allow: /blog`;
  }

  /**
   * Save sitemap to file
   */
  async saveToFile(): Promise<void> {
    const fs = require('fs').promises;
    const path = require('path');
    
    const sitemapXML = this.generateXML();
    const robotsTxt = this.generateRobotsTxt();
    
    const outputPath = this.config.outputPath || './public';
    
    try {
      await fs.writeFile(path.join(outputPath, 'sitemap.xml'), sitemapXML);
      await fs.writeFile(path.join(outputPath, 'robots.txt'), robotsTxt);
      console.log('Sitemap and robots.txt generated successfully');
    } catch (error) {
      console.error('Error saving sitemap:', error);
      throw error;
    }
  }
}

// Default sitemap configuration
const defaultSitemapConfig: SitemapConfig = {
  baseUrl: 'https://ziontechgroup.com',
  urls: [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/services', priority: 0.9, changefreq: 'weekly' },
    { url: '/about', priority: 0.8, changefreq: 'monthly' },
    { url: '/contact', priority: 0.8, changefreq: 'monthly' },
    { url: '/blog', priority: 0.7, changefreq: 'weekly' },
    { url: '/careers', priority: 0.6, changefreq: 'weekly' },
    { url: '/ai-services', priority: 0.9, changefreq: 'weekly' },
    { url: '/it-services', priority: 0.9, changefreq: 'weekly' },
    { url: '/micro-saas', priority: 0.8, changefreq: 'weekly' },
    { url: '/pricing', priority: 0.8, changefreq: 'weekly' },
    { url: '/case-studies', priority: 0.7, changefreq: 'monthly' },
    { url: '/resources', priority: 0.6, changefreq: 'weekly' },
    { url: '/help', priority: 0.6, changefreq: 'weekly' },
    { url: '/privacy', priority: 0.3, changefreq: 'yearly' },
    { url: '/terms', priority: 0.3, changefreq: 'yearly' }
  ]
};

// Helper function to generate sitemap
export function generateSitemap(config: SitemapConfig = defaultSitemapConfig): string {
  const generator = new SitemapGenerator(config);
  return generator.generateXML();
}

// Helper function to generate robots.txt
export function generateRobotsTxt(config: SitemapConfig = defaultSitemapConfig): string {
  const generator = new SitemapGenerator(config);
  return generator.generateRobotsTxt();
}

// Helper function to save sitemap files
export async function saveSitemapFiles(config: SitemapConfig = defaultSitemapConfig): Promise<void> {
  const generator = new SitemapGenerator(config);
  return generator.saveToFile();
}

export default SitemapGenerator;