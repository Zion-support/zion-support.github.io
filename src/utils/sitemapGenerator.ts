<<<<<<< HEAD
// Sitemap Generator for Zion Website;
import { writeFileSync } from 'fs';
import { join } from 'path';

export interface SitemapUrl {}
=======
interface SitemapUrl {

<<<<<<< HEAD













=======
>>>>>>> cursor/add-new-services-and-advertise-them-971c
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
<<<<<<< HEAD
}

export interface SitemapConfig {}
  baseUrl: string;
  urls: SitemapUrl[];
  outputPath?: string;
}

export class SitemapGenerator {}
  private config: SitemapConfig;

  constructor(config: SitemapConfig) {}
    this.config = config;
  }

  generateXML(): string {}
    const { baseUrl, urls } = this.config;
    
    const xmlUrls: any = urls.map(url => {}
      const lastmod: any = url.lastmod || new Date().toISOString().split('T')[0];
      const changefreq: any = url.changefreq || 'weekly';
      const priority: any = url.priority || 0.8;
=======
<<<<<<< HEAD













}

interface SitemapConfig {

  baseUrl: string;
  urls: SitemapUrl[];
  outputPath?: string;













=======
}

interface SitemapConfig {

  baseUrl: string;
  urls: SitemapUrl[];
  outputPath?: string;
>>>>>>> cursor/add-new-services-and-advertise-them-971c
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
    
    const xmlUrls = urls.map(url => {;
      const lastmod = url.lastmod || new Date().toISOString().split('T')[0];
      const changefreq = url.changefreq || 'weekly';
      const priority = url.priority || 0.5;
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
      
      return `  <url>
    <loc>${baseUrl}${url.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    }).join('\n');

<<<<<<< HEAD
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;
  }

  generateRobotsTxt(): string {}
=======
    return `<?xml version = "1.0" encoding="UTF-8"?>;
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">;
${xmlUrls};
</urlset>`;
  }

  /**
   * Generate robots.txt content
   */
  generateRobotsTxt(): string {

>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
    const { baseUrl } = this.config;
    
    return `User-agent: *
Allow: /

<<<<<<< HEAD
# Sitemaps;
Sitemap: ${baseUrl}/sitemap.xml;
# Disallow admin and private areas;
=======
# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Disallow admin and private areas
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /server/

<<<<<<< HEAD
# Allow important pages;
Allow: /
Allow: /about;
Allow: /services;
Allow: /contact;
Allow: /blog;
Allow: /careers;
=======
# Allow important pages
Allow: /
Allow: /about
Allow: /services
Allow: /contact
Allow: /blog
Allow: /careers

>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
# Crawl delay (optional)
Crawl-delay: 1`;
  }

<<<<<<< HEAD
  generateSitemapIndex(): string {}
    const { baseUrl } = this.config;
    const lastmod: any = new Date().toISOString().split('T')[0];
    
    const sitemaps: any = []
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap-pages.xml`,
      `${baseUrl}/sitemap-blog.xml`
    ];

    const xmlSitemaps: any = sitemaps.map(sitemap => `  <sitemap>
    <loc>${sitemap}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`).join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlSitemaps}
</sitemapindex>`;
  }

  generateStructuredData(): string {}
    const { baseUrl } = this.config;
    
    return JSON.stringify({}
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Technology Solutions",
      "url": baseUrl,
      "description": "Advanced AI, quantum computing, and cybersecurity solutions",
      "potentialAction": {}
        "@type": "SearchAction",
        "target": {}
          "@type": "EntryPoint",
          "urlTemplate": `${baseUrl}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string""
      }
    }, null, 2);
  }

  async generateAll(): Promise<{ xml: string; robots: string; index: string; structuredData: string }> {}
    try {}
      const xml: any = this.generateXML();
      const robots: any = this.generateRobotsTxt();
      const index: any = this.generateSitemapIndex();
      const structuredData: any = this.generateStructuredData();

      return {}
        xml,
        robots,
        index,
        structuredData;
      };
    } catch (error) {}
      console.error('Error generating sitemaps:', error);
      throw error;
    }
  }
}

// Default configuration;
const defaultUrls: SitemapUrl[] = []
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/team', changefreq: 'monthly', priority: 0.7 },
  { url: '/mission', changefreq: 'monthly', priority: 0.7 },
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/services/ai-autonomous-systems', changefreq: 'weekly', priority: 0.8 },
  { url: '/services/quantum-technology', changefreq: 'weekly', priority: 0.8 },
  { url: '/services/cybersecurity', changefreq: 'weekly', priority: 0.8 },
  { url: '/services/it-infrastructure', changefreq: 'weekly', priority: 0.8 },
  { url: '/services/micro-saas-solutions', changefreq: 'weekly', priority: 0.8 },
  { url: '/services/industry-solutions', changefreq: 'weekly', priority: 0.8 },
  { url: '/services/innovative-new-services', changefreq: 'weekly', priority: 0.8 },
  { url: '/services/specialized-it-infrastructure', changefreq: 'weekly', priority: 0.8 },
  { url: '/solutions/enterprise', changefreq: 'weekly', priority: 0.8 },
  { url: '/solutions/healthcare', changefreq: 'weekly', priority: 0.8 },
  { url: '/ai-solutions', changefreq: 'weekly', priority: 0.9 },
  { url: '/services-showcase', changefreq: 'weekly', priority: 0.8 },
  { url: '/match', changefreq: 'weekly', priority: 0.7 },
  { url: '/talent', changefreq: 'weekly', priority: 0.7 },
  { url: '/talents', changefreq: 'weekly', priority: 0.7 },
  { url: '/careers', changefreq: 'weekly', priority: 0.7 },
  { url: '/blog', changefreq: 'daily', priority: 0.6 },
  { url: '/news', changefreq: 'daily', priority: 0.6 },
  { url: '/emerging-tech', changefreq: 'weekly', priority: 0.6 },
  { url: '/pricing', changefreq: 'monthly', priority: 0.7 },
  { url: '/partners', changefreq: 'monthly', priority: 0.6 },
  { url: '/privacy', changefreq: 'yearly', priority: 0.3 },
  { url: '/terms', changefreq: 'yearly', priority: 0.3 }
];

export function createSitemapGenerator(baseUrl: string, customUrls?: SitemapUrl[]): SitemapGenerator {}
  const config: SitemapConfig = {}
    baseUrl,
    urls: customUrls || defaultUrls;
  };
  
  return new SitemapGenerator(config);
}

export default SitemapGenerator;
=======
  /**
   * Generate sitemap index for large sites
   */
  generateSitemapIndex(sitemaps: string[]): string {

    const sitemapEntries = sitemaps.map(sitemap => {;
      const lastmod = new Date().toISOString().split('T')[0];
      
      return `  <sitemap>
    <loc>${sitemap}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`;
    }).join('\n');

    return `<?xml version = "1.0" encoding="UTF-8"?>;
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">;
${sitemapEntries};
</sitemapindex>`;
  }

  /**
   * Generate JSON-LD structured data for sitemap
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
  "urlTemplate": `${baseUrl






}/search?q={search_term_string}`
        },;
        "query-input": "required name=search_term_string";
      },;
      "sameAs": [;
        "https://linkedin.com/company/zion-tech-group",;
        "https://twitter.com/ziontechgroup";
      ];
    };

    return JSON.stringify(structuredData, null, 2);
  }
}

// Default sitemap configuration for Zion Tech Group
export const defaultSitemapConfig: SitemapConfig = {

  baseUrl: 'https://ziontechgroup.com',
  urls: [
    // Main pages
    { url: '/', priority: 1.0,
  changefreq: 'daily' 






},
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
    { url: '/news', priority: 0.5, changefreq: 'weekly' },;
    { url: '/case-studies', priority: 0.6, changefreq: 'monthly' },;
    { url: '/help-center', priority: 0.5, changefreq: 'monthly' },;
    { url: '/faq', priority: 0.5, changefreq: 'monthly' },;
    { url: '/pricing', priority: 0.6, changefreq: 'monthly' },;
    { url: '/marketplace', priority: 0.7, changefreq: 'weekly' };
  ];
};

// Utility function to generate sitemap
export function generator = new SitemapGenerator(config);
  return generator.generateXML();
}

// Utility function to generate robots.txt
export function generator = new SitemapGenerator(config);
  return generator.generateRobotsTxt();
}
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
