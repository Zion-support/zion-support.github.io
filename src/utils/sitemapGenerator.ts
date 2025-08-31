interface SitemapUrl {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

interface SitemapConfig {
  baseUrl: string;
  urls: SitemapUrl[];
}

export class SitemapGenerator {
  private config: SitemapConfig;

  constructor(baseUrl: string) {
    this.config = {
      baseUrl: baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl,
      urls: []
    };
  }

  addUrl(url: string, options: Partial<Omit<SitemapUrl, 'url'>> = {}) {
    const fullUrl = url.startsWith('/') ? `${this.config.baseUrl}${url}` : `${this.config.baseUrl}/${url}`;
    
    this.config.urls.push({
      url: fullUrl,
      lastmod: options.lastmod || new Date().toISOString(),
      changefreq: options.changefreq || 'weekly',
      priority: options.priority || 0.5
    });
  }

  addUrls(urls: string[], options: Partial<Omit<SitemapUrl, 'url'>> = {}) {
    urls.forEach(url => this.addUrl(url, options));
  }

  generateSitemap(): string {
    const xmlUrls = this.config.urls
      .map(url => {
        const lastmod = url.lastmod ? `\n    <lastmod>${url.lastmod}</lastmod>` : '';
        const changefreq = url.changefreq ? `\n    <changefreq>${url.changefreq}</changefreq>` : '';
        const priority = url.priority !== undefined ? `\n    <priority>${url.priority}</priority>` : '';
        
        return `  <url>
    <loc>${url.url}</loc>${lastmod}${changefreq}${priority}
  </url>`;
      })
      .join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;
  }

  generateRobotsTxt(): string {
    return `User-agent: *
Allow: /

Sitemap: ${this.config.baseUrl}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important resources
Allow: /css/
Allow: /js/
Allow: /images/
Allow: /fonts/

# Crawl delay (optional)
Crawl-delay: 1`;
  }

  // Generate comprehensive sitemap for Zion Tech Group
  static generateZionTechGroupSitemap(): SitemapGenerator {
    const generator = new SitemapGenerator('https://ziontechgroup.com');
    
    // Core pages
    generator.addUrl('', { priority: 1.0, changefreq: 'daily' });
    generator.addUrl('about', { priority: 0.8, changefreq: 'monthly' });
    generator.addUrl('contact', { priority: 0.8, changefreq: 'monthly' });
    generator.addUrl('services', { priority: 0.9, changefreq: 'weekly' });
    generator.addUrl('solutions', { priority: 0.9, changefreq: 'weekly' });
    generator.addUrl('leadership', { priority: 0.7, changefreq: 'monthly' });
    generator.addUrl('careers', { priority: 0.7, changefreq: 'weekly' });
    generator.addUrl('news', { priority: 0.8, changefreq: 'daily' });
    generator.addUrl('events', { priority: 0.7, changefreq: 'weekly' });
    generator.addUrl('partners', { priority: 0.7, changefreq: 'monthly' });
    generator.addUrl('help', { priority: 0.6, changefreq: 'monthly' });
    generator.addUrl('pricing', { priority: 0.8, changefreq: 'monthly' });
    generator.addUrl('blog', { priority: 0.8, changefreq: 'weekly' });
    generator.addUrl('docs', { priority: 0.6, changefreq: 'weekly' });
    generator.addUrl('white-papers', { priority: 0.7, changefreq: 'monthly' });
    generator.addUrl('webinars', { priority: 0.7, changefreq: 'weekly' });
    generator.addUrl('training', { priority: 0.6, changefreq: 'monthly' });
    generator.addUrl('research-development', { priority: 0.7, changefreq: 'monthly' });
    generator.addUrl('case-studies', { priority: 0.8, changefreq: 'monthly' });

    // AI Services
    const aiServices = [
      'ai-enterprise-automation-platform',
      'ai-enterprise-intelligence-platform',
      'ai-data-analytics-platform',
      'ai-business-intelligence',
      'ai-cybersecurity-platform',
      'ai-autonomous-research-assistant',
      'ai-financial-trading-platform',
      'ai-healthcare-platform',
      'ai-quantum-hybrid-platform',
      'ai-quantum-neural-network-platform',
      'ai-supply-chain-optimization',
      'ai-sales-copilot',
      'ai-compliance-assistant',
      'ai-customer-success-automation',
      'ai-supply-chain-optimization-enhanced',
      'ai-financial-risk-management-enhanced',
      'ai-business-intelligence-dashboard',
      'ai-customer-support-automation',
      'ai-project-management-platform',
      'ai-workflow-orchestrator',
      'ai-predictive-maintenance',
      'ai-hr-platform',
      'ai-financial-trading-risk-management',
      'ai-marketing-automation-platform',
      'ai-legal-document-analysis',
      'ai-real-estate-investment-platform',
      'ai-ecommerce-optimization-platform'
    ];

    aiServices.forEach(service => {
      generator.addUrl(`services/${service}`, { priority: 0.8, changefreq: 'monthly' });
    });

    // IT & Infrastructure Services
    const itServices = [
      'it-infrastructure-management',
      'cloud-devops',
      'cybersecurity',
      'digital-transformation',
      'quantum-computing-solutions',
      'edge-computing-solutions',
      'blockchain-enterprise-solutions',
      'iot-edge',
      'cloud-finops-optimizer'
    ];

    itServices.forEach(service => {
      generator.addUrl(`services/${service}`, { priority: 0.8, changefreq: 'monthly' });
    });

    // Industry Solutions
    const industrySolutions = [
      'healthcare',
      'financial',
      'manufacturing',
      'government',
      'retail',
      'enterprise'
    ];

    industrySolutions.forEach(solution => {
      generator.addUrl(`solutions/${solution}`, { priority: 0.8, changefreq: 'monthly' });
    });

    // Technology Solutions
    const techSolutions = [
      'quantum-edge-computing',
      'ai-autonomous-business',
      'blockchain-web3',
      'iot-edge-computing',
      'space-tech'
    ];

    techSolutions.forEach(solution => {
      generator.addUrl(`solutions/${solution}`, { priority: 0.8, changefreq: 'monthly' });
    });

    // Showcase Pages
    generator.addUrl('innovative-services-showcase-2025', { priority: 0.9, changefreq: 'weekly' });
    generator.addUrl('innovative-services-showcase-2026', { priority: 0.9, changefreq: 'weekly' });
    generator.addUrl('innovative-services-showcase-2032', { priority: 0.9, changefreq: 'weekly' });
    generator.addUrl('innovative-services-showcase-2033', { priority: 0.9, changefreq: 'weekly' });
    generator.addUrl('comprehensive-pricing-guide-2032', { priority: 0.8, changefreq: 'monthly' });
    generator.addUrl('comprehensive-pricing-guide-2033', { priority: 0.8, changefreq: 'monthly' });

    // Legal and Policy Pages
    generator.addUrl('privacy', { priority: 0.5, changefreq: 'yearly' });
    generator.addUrl('terms', { priority: 0.5, changefreq: 'yearly' });
    generator.addUrl('cookies', { priority: 0.5, changefreq: 'yearly' });
    generator.addUrl('accessibility', { priority: 0.5, changefreq: 'yearly' });
    generator.addUrl('security', { priority: 0.6, changefreq: 'monthly' });
    generator.addUrl('compliance', { priority: 0.6, changefreq: 'monthly' });

    return generator;
  }

  // Export sitemap to file (for build process)
  exportToFile(filename: string, content: string): void {
    if (typeof window === 'undefined') {
      // Node.js environment
      const fs = require('fs');
      const path = require('path');
      fs.writeFileSync(path.join(process.cwd(), filename), content);
    } else {
      // Browser environment - trigger download
      const blob = new Blob([content], { type: 'text/xml' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  }
}

// Utility function to generate and export sitemap
export function generateAndExportSitemap(): void {
  const generator = SitemapGenerator.generateZionTechGroupSitemap();
  
  // Generate sitemap.xml
  const sitemapXml = generator.generateSitemap();
  generator.exportToFile('sitemap.xml', sitemapXml);
  
  // Generate robots.txt
  const robotsTxt = generator.generateRobotsTxt();
  generator.exportToFile('robots.txt', robotsTxt);
  
  console.log('Sitemap and robots.txt generated successfully!');
  console.log(`Total URLs: ${generator.config.urls.length}`);
}