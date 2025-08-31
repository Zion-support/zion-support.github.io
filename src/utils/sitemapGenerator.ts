<<<<<<< HEAD
import { SitemapConfig, SitemapUrl } from '../types/sitemap';
=======
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
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894

export class SitemapGenerator {
  private config: SitemapConfig;

  constructor(config: SitemapConfig) {
    this.config = config;
  }

  /**
   * Generate XML sitemap
   */
  generateXML(): string {
    const { baseUrl, urls } = this.config;
    
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    urls.forEach(url => {
      xml += '  <url>\n';
      xml += `    <loc>${baseUrl}${url.url}</loc>\n`;
      if (url.lastmod) {
        xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
      }
      if (url.changefreq) {
        xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
      }
      if (url.priority) {
        xml += `    <priority>${url.priority}</priority>\n`;
      }
      xml += '  </url>\n';
    });
    
    xml += '</urlset>';
    return xml;
  }

  /**
   * Generate robots.txt content
   */
  generateRobotsTxt(): string {
    const { baseUrl } = this.config;
    
    let robots = `User-agent: *\n`;
    robots += `Allow: /\n\n`;
    robots += `Sitemap: ${baseUrl}/sitemap.xml\n`;
    robots += `Host: ${baseUrl}\n`;
    
    return robots;
  }

  /**
   * Generate JSON-LD structured data
   */
  generateStructuredData(): string {
    const { baseUrl } = this.config;
    
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Zion Tech Group",
      "url": baseUrl,
      "description": "Empowering the future through innovative technology solutions",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${baseUrl}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      },
      "sameAs": [
        "https://linkedin.com/company/zion-tech-group",
        "https://twitter.com/ziontechgroup"
      ]
    };

    return JSON.stringify(structuredData, null, 2);
  }
}

// Default sitemap configuration for Zion Tech Group
export const defaultSitemapConfig: SitemapConfig = {
  baseUrl: 'https://ziontechgroup.com',
  urls: [
    // Main pages
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/about', priority: 0.8, changefreq: 'monthly' },
    { url: '/contact', priority: 0.8, changefreq: 'monthly' },
    { url: '/sitemap', priority: 0.6, changefreq: 'weekly' },
    
    // Service pages
    { url: '/services', priority: 0.9, changefreq: 'weekly' },
    { url: '/ai-services', priority: 0.9, changefreq: 'weekly' },
    { url: '/it-services', priority: 0.9, changefreq: 'weekly' },
    { url: '/micro-saas', priority: 0.8, changefreq: 'weekly' },
    
    // Service showcases
    { url: '/new-innovative-services-2025', priority: 0.8, changefreq: 'weekly' },
    { url: '/ultimate-services-showcase-2026', priority: 0.8, changefreq: 'weekly' },
    { url: '/comprehensive-services-showcase-2027', priority: 0.8, changefreq: 'weekly' },
    { url: '/zion-cutting-edge-services-2029', priority: 0.8, changefreq: 'weekly' },
    
    // Individual service pages
    { url: '/services/ai-workflow-orchestrator', priority: 0.7, changefreq: 'monthly' },
    { url: '/services/ai-data-governance-platform', priority: 0.7, changefreq: 'monthly' },
    { url: '/services/ai-customer-experience-analytics', priority: 0.7, changefreq: 'monthly' },
    { url: '/services/cloud-devops', priority: 0.7, changefreq: 'monthly' },
    { url: '/services/it-infrastructure', priority: 0.7, changefreq: 'monthly' },
    { url: '/services/ai-sales-copilot', priority: 0.7, changefreq: 'monthly' },
    
    // Solution pages
    { url: '/ai-solutions', priority: 0.8, changefreq: 'weekly' },
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
    { url: '/marketplace', priority: 0.7, changefreq: 'weekly' }
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