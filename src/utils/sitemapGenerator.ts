// Sitemap Generator for Zion Tech Group
export interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export class SitemapGenerator {
  private baseUrl: string;
  private entries: SitemapEntry[] = [];

  constructor(baseUrl: string = 'https://ziontechgroup.com') {
    this.baseUrl = baseUrl;
  }

  addEntry(entry: Omit<SitemapEntry, 'url'> & { path: string }): this {
    this.entries.push({
      url: `${this.baseUrl}${entry.path}`,
      lastmod: entry.lastmod,
      changefreq: entry.changefreq,
      priority: entry.priority
    });
    return this;
  }

  addEntries(entries: Array<Omit<SitemapEntry, 'url'> & { path: string }>): this {
    entries.forEach(entry => this.addEntry(entry));
    return this;
  }

  generateXML(): string {
    const header = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    const footer = `</urlset>`;

    const urlEntries = this.entries.map(entry => `
  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('');

    return header + urlEntries + footer;
  }

  generateRobotsTxt(): string {
    return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${this.baseUrl}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow important pages
Allow: /ai-services/
Allow: /it-services/
Allow: /contact/
Allow: /about/
Allow: /blog/
Allow: /pricing/`;
  }

  // Generate sitemap for all pages
  static generateFullSitemap(baseUrl: string = 'https://ziontechgroup.com'): string {
    const generator = new SitemapGenerator(baseUrl);
    const now = new Date().toISOString().split('T')[0];

    // Main pages
    generator.addEntries([
      { path: '/', lastmod: now, changefreq: 'daily', priority: 1.0 },
      { path: '/about', lastmod: now, changefreq: 'monthly', priority: 0.8 },
      { path: '/contact', lastmod: now, changefreq: 'monthly', priority: 0.9 },
      { path: '/services', lastmod: now, changefreq: 'weekly', priority: 0.9 },
      { path: '/pricing', lastmod: now, changefreq: 'weekly', priority: 0.8 },
      { path: '/blog', lastmod: now, changefreq: 'daily', priority: 0.7 },
      { path: '/case-studies', lastmod: now, changefreq: 'weekly', priority: 0.7 }
    ]);

    // AI Services
    const aiServices = [
      'ai-project-manager', 'ai-social-media-manager', 'ai-analytics-dashboard',
      'ai-email-marketing', 'ai-customer-support-bot', 'ai-code-generation',
      'ai-content-generation', 'ai-lead-generation', 'ai-video-generation',
      'ai-voice-cloning', 'ai-music-composition', 'ai-fashion-design',
      'ai-fitness-coach', 'ai-workflow-automation', 'ai-sales-automation',
      'ai-data-visualization', 'ai-3d-generation', 'ai-fraud-detection',
      'ai-content-writer', 'ai-seo-optimizer', 'ai-financial-analyzer',
      'machine-learning', 'nlp', 'computer-vision', 'ai-automation',
      'quantum-ai', 'ai-cybersecurity', 'ai-healthcare', 'ai-fintech',
      'ai-mobile-app-development', 'ai-crm', 'ai-email-assistant',
      'ai-scheduler', 'ai-services'
    ];

    aiServices.forEach(service => {
      generator.addEntry({
        path: `/${service}`,
        lastmod: now,
        changefreq: 'weekly',
        priority: 0.8
      });
    });

    // IT Services
    const itServices = [
      'cloud-services', 'cybersecurity', 'devops', 'database-services',
      'network-infrastructure', 'it-support', 'it-consulting',
      'cloud-migration', 'compliance', 'developer-tools',
      'marketing-tools', 'productivity', 'it-services'
    ];

    itServices.forEach(service => {
      generator.addEntry({
        path: `/${service}`,
        lastmod: now,
        changefreq: 'weekly',
        priority: 0.8
      });
    });

    // Specialized Services
    const specializedServices = [
      'quantum-computing', 'autonomous-systems', 'blockchain',
      'iot-edge', 'business-intelligence', 'robotics',
      'enterprise', 'analytics-tools', 'business-apps',
      'expense-tracker', 'task-manager-pro', 'smart-analytics'
    ];

    specializedServices.forEach(service => {
      generator.addEntry({
        path: `/${service}`,
        lastmod: now,
        changefreq: 'weekly',
        priority: 0.7
      });
    });

    // Blog posts (example - would be dynamic in real implementation)
    const blogPosts = [
      'ai-2025-2026-mega-trends-breakthrough',
      'ai-2025-january-advanced-ai-revolution',
      'ai-2026-adaptive-neural-architectures-breakthrough',
      'ai-enterprise-transformation-2025',
      'ai-trends-2026-future-enterprise-transformation'
    ];

    blogPosts.forEach(post => {
      generator.addEntry({
        path: `/blog/${post}`,
        lastmod: now,
        changefreq: 'monthly',
        priority: 0.6
      });
    });

    return generator.generateXML();
  }
}

// Utility function to generate sitemap
export const generateSitemap = (baseUrl?: string): string => {
  return SitemapGenerator.generateFullSitemap(baseUrl);
};

// Utility function to generate robots.txt
export const generateRobotsTxt = (baseUrl?: string): string => {
  const generator = new SitemapGenerator(baseUrl);
  return generator.generateRobotsTxt();
};