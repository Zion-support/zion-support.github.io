interface SitemapUrl {
  url: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
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

  generateXML(): string {
    const { baseUrl, urls } = this.config;
    const xmlUrls = urls.map(url => {
      const lastmod = url.lastmod || new Date().toISOString().split("T")[0];
      const changefreq = url.changefreq || "weekly";
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

  async writeToFile(): Promise<void> {
    const xml = this.generateXML();
    const outputPath = this.config.outputPath || './public/sitemap.xml';
    
    if (typeof window === 'undefined') {
      const fs = await import('fs');
      fs.writeFileSync(outputPath, xml, 'utf8');
    }
  }
}

export const defaultSitemapConfig: SitemapConfig = {
  baseUrl: 'https://ziontechgroup.com',
  urls: [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/about', priority: 0.8, changefreq: 'weekly' },
    { url: '/services', priority: 0.9, changefreq: 'weekly' },
    { url: '/ai-services', priority: 0.9, changefreq: 'weekly' },
    { url: '/it-services', priority: 0.9, changefreq: 'weekly' },
    { url: '/micro-saas', priority: 0.9, changefreq: 'weekly' },
    { url: '/contact', priority: 0.8, changefreq: 'monthly' },
    { url: '/pricing', priority: 0.7, changefreq: 'monthly' },
    { url: '/blog', priority: 0.6, changefreq: 'weekly' },
    { url: '/careers', priority: 0.6, changefreq: 'weekly' }
  ],
  outputPath: './public/sitemap.xml'
};

export function createSitemap(config: SitemapConfig = defaultSitemapConfig): SitemapGenerator {
  return new SitemapGenerator(config);
}