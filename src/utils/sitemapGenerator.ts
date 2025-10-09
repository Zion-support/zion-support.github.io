// Sitemap generator utility
export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export class SitemapGenerator {
  private baseUrl: string;
  private urls: SitemapUrl[] = [];

  constructor(baseUrl: string = 'https://ziontechgroup.com') {
    this.baseUrl = baseUrl;
  }

  public addUrl(url: SitemapUrl): void {
    this.urls.push({
      ...url,
      loc: url.loc.startsWith('http') ? url.loc : `${this.baseUrl}${url.loc}`,
      lastmod: url.lastmod || new Date().toISOString().split('T')[0],
      changefreq: url.changefreq || 'monthly',
      priority: url.priority || 0.5
    });
  }

  public addUrls(urls: SitemapUrl[]): void {
    urls.forEach(url => this.addUrl(url));
  }

  public generateSitemap(): string {
    const urlsXml = this.urls.map(url => {
      return `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`;
    }).join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`;
  }

  public generateRobotsTxt(): string {
    return `User-agent: *
Allow: /

Sitemap: ${this.baseUrl}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow important pages
Allow: /
Allow: /about
Allow: /services
Allow: /contact
Allow: /blog
Allow: /case-studies
Allow: /pricing

# Crawl delay
Crawl-delay: 1`;
  }

  public getUrls(): SitemapUrl[] {
    return [...this.urls];
  }

  public clear(): void {
    this.urls = [];
  }
}

// Default sitemap configuration
export const generateDefaultSitemap = (): SitemapGenerator => {
  const sitemap = new SitemapGenerator();
  
  // Main pages
  sitemap.addUrls([
    { loc: '/', priority: 1.0, changefreq: 'weekly' },
    { loc: '/about', priority: 0.8, changefreq: 'monthly' },
    { loc: '/services', priority: 0.9, changefreq: 'weekly' },
    { loc: '/contact', priority: 0.8, changefreq: 'monthly' },
    { loc: '/blog', priority: 0.7, changefreq: 'weekly' },
    { loc: '/case-studies', priority: 0.7, changefreq: 'monthly' },
    { loc: '/pricing', priority: 0.8, changefreq: 'monthly' },
    { loc: '/privacy', priority: 0.3, changefreq: 'yearly' },
    { loc: '/terms', priority: 0.3, changefreq: 'yearly' }
  ]);

  // AI Services
  sitemap.addUrls([
    { loc: '/ai-services', priority: 0.9, changefreq: 'weekly' },
    { loc: '/ai-project-manager', priority: 0.8, changefreq: 'monthly' },
    { loc: '/ai-social-media-manager', priority: 0.8, changefreq: 'monthly' },
    { loc: '/ai-analytics-dashboard', priority: 0.8, changefreq: 'monthly' },
    { loc: '/ai-email-marketing', priority: 0.8, changefreq: 'monthly' },
    { loc: '/ai-customer-support-bot', priority: 0.8, changefreq: 'monthly' },
    { loc: '/ai-code-generation', priority: 0.8, changefreq: 'monthly' },
    { loc: '/ai-content-generation', priority: 0.8, changefreq: 'monthly' },
    { loc: '/ai-lead-generation', priority: 0.8, changefreq: 'monthly' },
    { loc: '/ai-document-processing', priority: 0.8, changefreq: 'monthly' },
    { loc: '/ai-seo-optimizer', priority: 0.8, changefreq: 'monthly' },
    { loc: '/ai-ecommerce-solutions', priority: 0.8, changefreq: 'monthly' },
    { loc: '/ai-financial-analyzer', priority: 0.8, changefreq: 'monthly' },
    { loc: '/machine-learning', priority: 0.8, changefreq: 'monthly' },
    { loc: '/nlp', priority: 0.8, changefreq: 'monthly' },
    { loc: '/computer-vision', priority: 0.8, changefreq: 'monthly' },
    { loc: '/ai-automation', priority: 0.8, changefreq: 'monthly' },
    { loc: '/quantum-ai', priority: 0.8, changefreq: 'monthly' }
  ]);

  // IT Services
  sitemap.addUrls([
    { loc: '/it-services', priority: 0.9, changefreq: 'weekly' },
    { loc: '/cloud-services', priority: 0.8, changefreq: 'monthly' },
    { loc: '/cybersecurity', priority: 0.8, changefreq: 'monthly' },
    { loc: '/devops', priority: 0.8, changefreq: 'monthly' },
    { loc: '/database-services', priority: 0.8, changefreq: 'monthly' },
    { loc: '/network-infrastructure', priority: 0.8, changefreq: 'monthly' },
    { loc: '/it-support', priority: 0.8, changefreq: 'monthly' }
  ]);

  // Specialized Services
  sitemap.addUrls([
    { loc: '/quantum-computing', priority: 0.8, changefreq: 'monthly' },
    { loc: '/autonomous-systems', priority: 0.8, changefreq: 'monthly' },
    { loc: '/blockchain', priority: 0.8, changefreq: 'monthly' },
    { loc: '/blockchain-web3', priority: 0.8, changefreq: 'monthly' },
    { loc: '/iot-edge-computing', priority: 0.8, changefreq: 'monthly' },
    { loc: '/business-intelligence', priority: 0.8, changefreq: 'monthly' },
    { loc: '/robotics', priority: 0.8, changefreq: 'monthly' }
  ]);

  // Blog posts (example - you would dynamically generate these)
  sitemap.addUrls([
    { loc: '/blog/ai-2025-2026-mega-trends-breakthrough', priority: 0.6, changefreq: 'monthly' },
    { loc: '/blog/ai-2025-january-advanced-ai-revolution', priority: 0.6, changefreq: 'monthly' },
    { loc: '/blog/ai-2025-january-cutting-edge-trends-breakthrough', priority: 0.6, changefreq: 'monthly' },
    { loc: '/blog/ai-2025-march-autonomous-enterprise-operations-revolution', priority: 0.6, changefreq: 'monthly' },
    { loc: '/blog/ai-2025-sept-30-operational-trust-scorecards-v3', priority: 0.6, changefreq: 'monthly' },
    { loc: '/blog/ai-2026-adaptive-neural-architectures-breakthrough', priority: 0.6, changefreq: 'monthly' },
    { loc: '/blog/ai-2026-advanced-neural-optimization-revolution', priority: 0.6, changefreq: 'monthly' },
    { loc: '/blog/ai-2026-april-revolutionary-breakthrough', priority: 0.6, changefreq: 'monthly' },
    { loc: '/blog/ai-2026-april-ultimate-breakthrough-revolution', priority: 0.6, changefreq: 'monthly' },
    { loc: '/blog/ai-2026-autonomous-agent-factories', priority: 0.6, changefreq: 'monthly' },
    { loc: '/blog/ai-2026-autonomous-business-intelligence-breakthrough', priority: 0.6, changefreq: 'monthly' },
    { loc: '/blog/ai-2026-autonomous-business-intelligence-mega-breakthrough', priority: 0.6, changefreq: 'monthly' },
    { loc: '/blog/ai-2026-autonomous-enterprise-architecture', priority: 0.6, changefreq: 'monthly' },
    { loc: '/blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough', priority: 0.6, changefreq: 'monthly' },
    { loc: '/blog/ai-2026-consensus-intelligence-breakthrough', priority: 0.6, changefreq: 'monthly' },
    { loc: '/blog/ai-2026-enterprise-automation-revolutionary-breakthrough', priority: 0.6, changefreq: 'monthly' },
    { loc: '/blog/ai-2026-enterprise-breakthrough', priority: 0.6, changefreq: 'monthly' },
    { loc: '/blog/ai-2026-february-mega-breakthrough-revolution', priority: 0.6, changefreq: 'monthly' },
    { loc: '/blog/ai-2026-february-ultimate-consciousness-breakthrough', priority: 0.6, changefreq: 'monthly' },
    { loc: '/blog/ai-2026-hyperconscious-computing-revolution', priority: 0.6, changefreq: 'monthly' },
    { loc: '/blog/ai-autonomous-business-systems-2026', priority: 0.6, changefreq: 'monthly' },
    { loc: '/blog/ai-cost-optimization-breakthrough-2026', priority: 0.6, changefreq: 'monthly' },
    { loc: '/blog/ai-enterprise-transformation-2025', priority: 0.6, changefreq: 'monthly' },
    { loc: '/blog/ai-enterprise-transformation-ultimate-guide-2025', priority: 0.6, changefreq: 'monthly' },
    { loc: '/blog/ai-innovation-labs-product-development-2025', priority: 0.6, changefreq: 'monthly' },
    { loc: '/blog/ai-powered-autonomous-business-processes-2026', priority: 0.6, changefreq: 'monthly' },
    { loc: '/blog/ai-trends-2026-future-enterprise-transformation', priority: 0.6, changefreq: 'monthly' }
  ]);

  return sitemap;
};

export default SitemapGenerator;