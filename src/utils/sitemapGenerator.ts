// Sitemap Generator for Zion Tech Group
// Generates XML sitemap for better SEO

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
    this.config = {
      baseUrl: config.baseUrl.replace(/\/$/, ''),
      urls: config.urls,
      outputPath: config.outputPath || 'public/sitemap.xml'
    };
  }

  // Generate XML sitemap
  generateXML(): string {
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
    const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    const urlsetClose = '</urlset>';

    const urlElements = this.config.urls.map(url => {
      const fullUrl = `${this.config.baseUrl}${url.url}`;
      const lastmod = url.lastmod || new Date().toISOString().split('T')[0];
      const changefreq = url.changefreq || 'weekly';
      const priority = url.priority || 0.5;

      return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    }).join('\n');

    return `${xmlHeader}
${urlsetOpen}
${urlElements}
${urlsetClose}`;
  }

  // Generate robots.txt content
  generateRobotsTxt(): string {
    return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${this.config.baseUrl}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Crawl delay (optional)
Crawl-delay: 1`;
  }

  // Save sitemap to file
  async saveSitemap(): Promise<void> {
    const fs = await import('fs/promises');
    const xml = this.generateXML();
    await fs.writeFile(this.config.outputPath!, xml, 'utf-8');
    console.log(`Sitemap saved to ${this.config.outputPath}`);
  }

  // Save robots.txt to file
  async saveRobotsTxt(): Promise<void> {
    const fs = await import('fs/promises');
    const robots = this.generateRobotsTxt();
    await fs.writeFile('public/robots.txt', robots, 'utf-8');
    console.log('Robots.txt saved to public/robots.txt');
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
    { url: '/services', priority: 0.9, changefreq: 'weekly' },
    { url: '/solutions', priority: 0.9, changefreq: 'weekly' },
    { url: '/resources', priority: 0.7, changefreq: 'weekly' },
    { url: '/case-studies', priority: 0.7, changefreq: 'weekly' },
    { url: '/blog', priority: 0.8, changefreq: 'daily' },
    { url: '/pricing', priority: 0.8, changefreq: 'monthly' },
    { url: '/faq', priority: 0.6, changefreq: 'monthly' },
    { url: '/careers', priority: 0.6, changefreq: 'weekly' },
    { url: '/partners', priority: 0.6, changefreq: 'monthly' },
    { url: '/team', priority: 0.5, changefreq: 'monthly' },
    { url: '/news', priority: 0.7, changefreq: 'daily' },
    { url: '/help', priority: 0.6, changefreq: 'weekly' },
    { url: '/sitemap', priority: 0.3, changefreq: 'monthly' },

    // Service pages
    { url: '/services/ai-business-intelligence', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/cloud-devops', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/digital-twin', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/data-analytics', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/it-infrastructure', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-sales-copilot', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/cloud-finops-optimizer', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-compliance-assistant', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-auto-email-responder', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/mobile-feedback-surveys', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-compliance-copilot', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/llm-content-studio', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/finops-advisor', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/returns-management', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/email-sequencer', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/podcast-transcription', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/micro-crm', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/website-analytics', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/it-helpdesk', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/affiliate-tracking', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/mobile-survey', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-seo', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/interview-assessment', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/helpdesk', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/dsr-portal', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/security-headers-csp', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-project-management', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-customer-support-automation', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-financial-analytics', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-marketing-automation', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-quantum-financial-trading', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-predictive-maintenance', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-autonomous-supply-chain', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-cybersecurity-threat-intelligence', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-workflow-orchestrator', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-data-governance-platform', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-customer-experience-analytics', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-financial-risk-management', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-customer-feedback-analytics', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-inventory-management', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-employee-performance-analytics', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-financial-planning', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-autonomous-business-intelligence', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-quantum-computing-platform', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-code-review-security-scanner', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-devops-automation-platform', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-business-intelligence-analytics', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-customer-experience-support', priority: 0.8, changefreq: 'weekly' },
    { url: '/services/ai-marketing-automation-personalization', priority: 0.8, changefreq: 'weekly' },

    // Solution pages
    { url: '/solutions/enterprise', priority: 0.8, changefreq: 'weekly' },
    { url: '/solutions/healthcare', priority: 0.8, changefreq: 'weekly' },

    // Showcase pages
    { url: '/new-innovative-services-2025', priority: 0.7, changefreq: 'weekly' },
    { url: '/comprehensive-improvements-2025', priority: 0.7, changefreq: 'weekly' },
    { url: '/comprehensive-services-showcase-2029', priority: 0.7, changefreq: 'weekly' },
    { url: '/comprehensive-services-showcase-2031', priority: 0.7, changefreq: 'weekly' },
    { url: '/services/enhanced-services-showcase-2025', priority: 0.7, changefreq: 'weekly' },
    { url: '/zion-tech-group-2025-comprehensive-showcase', priority: 0.7, changefreq: 'weekly' },

    // Additional pages
    { url: '/marketplace', priority: 0.6, changefreq: 'weekly' },
    { url: '/it-consulting', priority: 0.7, changefreq: 'weekly' },
    { url: '/space-tech', priority: 0.6, changefreq: 'weekly' },
    { url: '/ai-services', priority: 0.8, changefreq: 'weekly' },
    { url: '/it-services', priority: 0.8, changefreq: 'weekly' },
    { url: '/micro-saas', priority: 0.8, changefreq: 'weekly' },
    { url: '/ai-solutions', priority: 0.8, changefreq: 'weekly' },
    { url: '/comprehensive-pricing-guide-2025', priority: 0.7, changefreq: 'monthly' },

    // Legal pages
    { url: '/privacy', priority: 0.3, changefreq: 'yearly' },
    { url: '/terms', priority: 0.3, changefreq: 'yearly' },
    { url: '/cookies', priority: 0.3, changefreq: 'yearly' },

    // Action pages
    { url: '/request-quote', priority: 0.9, changefreq: 'monthly' },
    { url: '/schedule-demo', priority: 0.9, changefreq: 'monthly' },
    { url: '/login', priority: 0.5, changefreq: 'monthly' },
    { url: '/dashboard', priority: 0.4, changefreq: 'monthly' }
  ]
};

// Generate sitemap function
export async function generateSitemap(): Promise<void> {
  try {
    const generator = new SitemapGenerator(defaultSitemapConfig);
    await generator.saveSitemap();
    await generator.saveRobotsTxt();
    console.log('Sitemap and robots.txt generated successfully');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

// Export for use in build scripts
export default SitemapGenerator;