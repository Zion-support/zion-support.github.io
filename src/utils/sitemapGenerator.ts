import { SitemapConfig } from './types';

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
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
    const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    const urlsetClose = '</urlset>';
    
    const urlElements = urls.map(url => {
      const urlElement = `<url>
        <loc>${baseUrl}${url.url}</loc>
        ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
        ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
        ${url.priority ? `<priority>${url.priority}</priority>` : ''}
      </url>`;
      return urlElement.replace(/\s+/g, ' ').trim();
    }).join('');
    
    return `${xmlHeader}\n${urlsetOpen}\n${urlElements}\n${urlsetClose}`;
  }

  /**
   * Generate sitemap index for large sites
   */
  generateIndex(sitemaps: string[]): string {
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
    const sitemapindexOpen = '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    const sitemapindexClose = '</sitemapindex>';
    
    const sitemapElements = sitemaps.map(sitemap => {
      return `<sitemap>
        <loc>${sitemap}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </sitemap>`;
    }).join('');
    
    return `${xmlHeader}\n${sitemapindexOpen}\n${sitemapElements}\n${sitemapindexClose}`;
  }

  /**
   * Generate robots.txt content
   */
  generateRobotsTxt(): string {
    const { baseUrl } = this.config;
    return `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/

# Allow important pages
Allow: /
Allow: /services/
Allow: /solutions/
Allow: /about/
Allow: /contact/
Allow: /blog/
Allow: /careers/

# Crawl delay (optional)
Crawl-delay: 1`;
  }

  /**
   * Generate JSON sitemap for JavaScript applications
   */
  generateJSON(): string {
    const { baseUrl, urls } = this.config;
    const jsonSitemap = {
      baseUrl,
      urls: urls.map(url => ({
        ...url,
        fullUrl: `${baseUrl}${url.url}`,
        lastmod: url.lastmod || new Date().toISOString()
      }))
    };
    return JSON.stringify(jsonSitemap, null, 2);
  }

  /**
   * Generate HTML sitemap for users
   */
  generateHTML(): string {
    const { baseUrl, urls } = this.config;
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sitemap - Zion Tech Group</title>
    <meta name="description" content="Complete sitemap of Zion Tech Group website">
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
        .container { max-width: 1200px; margin: 0 auto; }
        h1 { color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px; }
        .sitemap-section { margin: 30px 0; }
        .sitemap-section h2 { color: #555; margin-bottom: 15px; }
        .sitemap-links { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .sitemap-link { padding: 15px; border: 1px solid #ddd; border-radius: 5px; text-decoration: none; color: #333; transition: all 0.3s ease; }
        .sitemap-link:hover { background-color: #f8f9fa; border-color: #007bff; transform: translateY(-2px); box-shadow: 0 4px 8px rgba(0,123,255,0.1); }
        .sitemap-link h3 { margin: 0 0 10px 0; color: #007bff; }
        .sitemap-link p { margin: 0; color: #666; font-size: 14px; }
        .footer { margin-top: 50px; padding-top: 20px; border-top: 1px solid #ddd; text-align: center; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Zion Tech Group - Website Sitemap</h1>
        
        <div class="sitemap-section">
            <h2>Main Pages</h2>
            <div class="sitemap-links">
                <a href="/" class="sitemap-link">
                    <h3>Home</h3>
                    <p>Welcome to Zion Tech Group - Revolutionary Technology Solutions</p>
                </a>
                <a href="/about" class="sitemap-link">
                    <h3>About Us</h3>
                    <p>Learn about our mission, vision, and innovative approach to technology</p>
                </a>
                <a href="/contact" class="sitemap-link">
                    <h3>Contact</h3>
                    <p>Get in touch with our team for technology consulting and solutions</p>
                </a>
            </div>
        </div>
        
        <div class="sitemap-section">
            <h2>Services</h2>
            <div class="sitemap-links">
                <a href="/services" class="sitemap-link">
                    <h3>All Services</h3>
                    <p>Comprehensive overview of our technology services and solutions</p>
                </a>
                <a href="/services/ai-autonomous-systems" class="sitemap-link">
                    <h3>AI Autonomous Systems</h3>
                    <p>Intelligent automation and AI-powered business solutions</p>
                </a>
                <a href="/services/quantum-technology" class="sitemap-link">
                    <h3>Quantum Technology</h3>
                    <p>Next-generation quantum computing and quantum solutions</p>
                </a>
                <a href="/services/cybersecurity" class="sitemap-link">
                    <h3>Cybersecurity</h3>
                    <p>Advanced security solutions and threat protection</p>
                </a>
                <a href="/services/it-infrastructure" class="sitemap-link">
                    <h3>IT Infrastructure</h3>
                    <p>Robust and scalable technology infrastructure solutions</p>
                </a>
                <a href="/services/micro-saas-solutions" class="sitemap-link">
                    <h3>Micro SaaS Solutions</h3>
                    <p>Innovative software-as-a-service platforms for modern businesses</p>
                </a>
            </div>
        </div>
        
        <div class="sitemap-section">
            <h2>Solutions</h2>
            <div class="sitemap-links">
                <a href="/solutions/enterprise" class="sitemap-link">
                    <h3>Enterprise Solutions</h3>
                    <p>Large-scale technology solutions for enterprise organizations</p>
                </a>
                <a href="/solutions/healthcare" class="sitemap-link">
                    <h3>Healthcare Technology</h3>
                    <p>Secure and compliant IT solutions for the healthcare industry</p>
                </a>
            </div>
        </div>
        
        <div class="sitemap-section">
            <h2>Resources</h2>
            <div class="sitemap-links">
                <a href="/blog" class="sitemap-link">
                    <h3>Blog</h3>
                    <p>Technology insights, industry trends, and expert analysis</p>
                </a>
                <a href="/careers" class="sitemap-link">
                    <h3>Careers</h3>
                    <p>Join our team of technology experts and innovators</p>
                </a>
                <a href="/pricing" class="sitemap-link">
                    <h3>Pricing</h3>
                    <p>Transparent pricing for our technology services and solutions</p>
                </a>
            </div>
        </div>
        
        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Zion Tech Group. All rights reserved.</p>
            <p>For technical support or questions about this sitemap, please contact our team.</p>
        </div>
    </div>
</body>
</html>`;
    
    return html;
  }

  /**
   * Generate structured data for SEO
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