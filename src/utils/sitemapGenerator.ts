export interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export interface SitemapImage {
  loc: string;
  title?: string;
  caption?: string;
  geo_location?: string;
  license?: string;
}

export interface SitemapVideo {
  thumbnail_loc: string;
  title: string;
  description: string;
  content_loc?: string;
  player_loc?: string;
  duration?: number;
  publication_date?: string;
  family_friendly?: 'yes' | 'no';
  restriction?: string;
  price?: string;
  requires_subscription?: 'yes' | 'no';
  uploader?: string;
  live?: 'yes' | 'no';
}

export class SitemapGenerator {
  private baseUrl: string;
  private urls: SitemapUrl[] = [];

  constructor(baseUrl: string = 'https://ziontechgroup.com') {
    this.baseUrl = baseUrl;
  }

  addUrl(url: Omit<SitemapUrl, 'lastmod'> & { lastmod?: string }) {
    this.urls.push({
      ...url,
      lastmod: url.lastmod || new Date().toISOString().split('T')[0]
    });
  }

  addPage(path: string, options: Partial<SitemapUrl> = {}) {
    this.addUrl({
      loc: `${this.baseUrl}${path}`,
      changefreq: 'weekly',
      priority: 0.8,
      ...options
    });
  }

  addServicePage(path: string, priority: number = 0.9) {
    this.addPage(path, {
      changefreq: 'monthly',
      priority
    });
  }

  addBlogPost(path: string, lastmod?: string) {
    this.addPage(path, {
      changefreq: 'monthly',
      priority: 0.7,
      lastmod
    });
  }

  generateSitemap(): string {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${this.urls.map(url => this.generateUrlEntry(url)).join('\n')}
</urlset>`;

    return sitemap;
  }

  private generateUrlEntry(url: SitemapUrl): string {
    return `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`;
  }

  generateRobotsTxt(): string {
    return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${this.baseUrl}/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important pages
Allow: /ai-services
Allow: /it-services
Allow: /about
Allow: /contact
Allow: /pricing
Allow: /blog
Allow: /case-studies

# Block specific file types
Disallow: /*.json$
Disallow: /*.xml$
Disallow: /*.txt$
Disallow: /*.log$

# Allow CSS and JS for proper rendering
Allow: /*.css$
Allow: /*.js$

# Block duplicate content
Disallow: /?*
Disallow: /#*

# Block search parameters
Disallow: /*?utm_*
Disallow: /*?ref=*
Disallow: /*?source=*

# Block AI training crawlers
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: Claude-Web
Disallow: /`;
  }

  generateSitemapIndex(sitemaps: string[]): string {
    const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(sitemap => `  <sitemap>
    <loc>${this.baseUrl}/${sitemap}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;

    return sitemapIndex;
  }
}

// Generate sitemap for Zion Tech Group
export function generateZionTechSitemap(): string {
  const generator = new SitemapGenerator();

  // Main pages
  generator.addPage('/', { priority: 1.0, changefreq: 'daily' });
  generator.addPage('/about', { priority: 0.9, changefreq: 'monthly' });
  generator.addPage('/contact', { priority: 0.9, changefreq: 'monthly' });
  generator.addPage('/pricing', { priority: 0.9, changefreq: 'weekly' });
  generator.addPage('/blog', { priority: 0.8, changefreq: 'weekly' });
  generator.addPage('/case-studies', { priority: 0.8, changefreq: 'monthly' });

  // AI Services
  generator.addServicePage('/ai-services', 0.9);
  generator.addServicePage('/ai-project-manager', 0.8);
  generator.addServicePage('/ai-social-media-manager', 0.8);
  generator.addServicePage('/ai-analytics-dashboard', 0.8);
  generator.addServicePage('/ai-email-marketing', 0.8);
  generator.addServicePage('/ai-customer-support-bot', 0.8);
  generator.addServicePage('/ai-code-generation', 0.8);
  generator.addServicePage('/ai-content-generation', 0.8);
  generator.addServicePage('/ai-lead-generation', 0.8);
  generator.addServicePage('/ai-document-processing', 0.8);
  generator.addServicePage('/ai-seo-optimizer', 0.8);
  generator.addServicePage('/ai-ecommerce-solutions', 0.8);
  generator.addServicePage('/ai-financial-analyzer', 0.8);
  generator.addServicePage('/machine-learning', 0.8);
  generator.addServicePage('/nlp', 0.8);
  generator.addServicePage('/computer-vision', 0.8);
  generator.addServicePage('/ai-automation', 0.8);
  generator.addServicePage('/quantum-ai', 0.8);
  generator.addServicePage('/ai-cybersecurity', 0.8);

  // IT Services
  generator.addServicePage('/it-services', 0.9);
  generator.addServicePage('/cloud-services', 0.8);
  generator.addServicePage('/cybersecurity', 0.8);
  generator.addServicePage('/devops', 0.8);
  generator.addServicePage('/database-services', 0.8);
  generator.addServicePage('/network-infrastructure', 0.8);
  generator.addServicePage('/it-support', 0.8);

  // Specialized Services
  generator.addServicePage('/quantum-computing', 0.8);
  generator.addServicePage('/autonomous-systems', 0.8);
  generator.addServicePage('/blockchain', 0.8);
  generator.addServicePage('/iot-edge', 0.8);
  generator.addServicePage('/business-intelligence', 0.8);
  generator.addServicePage('/robotics', 0.8);

  // Blog posts (example - you would add actual blog posts)
  generator.addBlogPost('/blog/ai-enterprise-transformation-2025');
  generator.addBlogPost('/blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough');
  generator.addBlogPost('/blog/ai-2026-enterprise-breakthrough');
  generator.addBlogPost('/blog/ai-2026-february-ultimate-consciousness-breakthrough');
  generator.addBlogPost('/blog/ai-2026-consensus-intelligence-breakthrough');

  return generator.generateSitemap();
}
