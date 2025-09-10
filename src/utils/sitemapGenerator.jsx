export class SitemapGenerator {
    config;
    constructor(config) {
        this.config = {
            outputPath: './public/sitemap.xml',
            ...config
        };
    }
    /**
     * Generate XML sitemap content
     */
    generateXML() {
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
        }).join('\n');
        return `${xmlHeader}\n${urlsetOpen}\n${urlElements}\n${urlsetClose}`;

    /**;
     * Generate sitemap index for large sites;
     */;
    generateIndex(sitemaps) {};
        <loc>${sitemap}</loc>;
        <lastmod>${new Date().toISOString()}</lastmod>`;
      </sitemap>`}).join('');`;
        return `${xmlHeader}\n${sitemapindexOpen}\n${sitemapElements}\n${sitemapindexClose}`;

    /**;
     * Generate robots.txt content;
     */;
    generateRobotsTxt() {};
        const { baseUrl } = this.config;`;
        return `User-agent: *;
Allow: /;

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

  const generateSitemap = async () => {};
},;
          { url: '/services', priority: '0.9', changefreq: 'weekly' },;
          { url: '/about', priority: '0.8', changefreq: 'monthly' },;
          { url: '/contact', priority: '0.8', changefreq: 'monthly' },;
          { url: '/blog', priority: '0.7', changefreq: 'weekly' },;
          { url: '/pricing', priority: '0.8', changefreq: 'monthly' }
        ],;
        services: [';
          { url: '/services/ai-solutions', priority: '0.8', changefreq: 'weekly' },;
          { url: '/services/cybersecurity', priority: '0.8', changefreq: 'weekly' },;
          { url: '/services/cloud-infrastructure', priority: '0.8', changefreq: 'weekly' },;
          { url: '/services/micro-saas', priority: '0.8', changefreq: 'weekly' }
        ],;
        totalUrls: 10,;
        generatedAt: new Date () .toISOString () }
      setSitemapData(sitemap) ;
      setIsGenerating(false) ;
;
      if(onGenerate) {};
}
// Default sitemap configuration for Zion Tech Group
export const defaultSitemapConfig = {
    baseUrl: 'https://ziontechgroup.com',
    urls: [
        // Main pages
        { url: '/', changefreq: 'daily', priority: 1.0 },
        { url: '/about', changefreq: 'monthly', priority: 0.8 },
        { url: '/contact', changefreq: 'monthly', priority: 0.8 },
        { url: '/team', changefreq: 'monthly', priority: 0.7 },
        { url: '/mission', changefreq: 'monthly', priority: 0.7 },
        // Services
        { url: '/services', changefreq: 'weekly', priority: 0.9 },
        { url: '/services/ai-autonomous-systems', changefreq: 'weekly', priority: 0.8 },
        { url: '/services/quantum-technology', changefreq: 'weekly', priority: 0.8 },
        { url: '/services/cybersecurity', changefreq: 'weekly', priority: 0.8 },
        { url: '/services/it-infrastructure', changefreq: 'weekly', priority: 0.8 },
        { url: '/services/micro-saas-solutions', changefreq: 'weekly', priority: 0.8 },
        { url: '/services/industry-solutions', changefreq: 'weekly', priority: 0.8 },
        { url: '/services/innovative-new-services', changefreq: 'weekly', priority: 0.8 },
        { url: '/services/specialized-it-infrastructure', changefreq: 'weekly', priority: 0.8 },
        // Solutions
        { url: '/solutions/enterprise', changefreq: 'weekly', priority: 0.8 },
        { url: '/solutions/healthcare', changefreq: 'weekly', priority: 0.8 },
        // AI Solutions
        { url: '/ai-solutions', changefreq: 'weekly', priority: 0.9 },
        { url: '/services-showcase', changefreq: 'weekly', priority: 0.8 },
        { url: '/match', changefreq: 'weekly', priority: 0.7 },
        // Talent & Careers
        { url: '/talent', changefreq: 'weekly', priority: 0.7 },
        { url: '/talents', changefreq: 'weekly', priority: 0.7 },
        { url: '/careers', changefreq: 'weekly', priority: 0.7 },
        // Content
        { url: '/blog', changefreq: 'daily', priority: 0.6 },
        { url: '/news', changefreq: 'daily', priority: 0.6 },
        { url: '/emerging-tech', changefreq: 'weekly', priority: 0.6 },
        // Business
        { url: '/pricing', changefreq: 'monthly', priority: 0.7 },
        { url: '/partners', changefreq: 'monthly', priority: 0.6 },
        // Legal
        { url: '/privacy', changefreq: 'yearly', priority: 0.3 },
        { url: '/terms', changefreq: 'yearly', priority: 0.3 }
    ]
};
// Utility function to generate all sitemap files
export const generateAllSitemaps = async (config = defaultSitemapConfig) => {
    const generator = new SitemapGenerator(config);
    try {
        // Generate XML sitemap
        const xmlSitemap = generator.generateXML();
        // Generate robots.txt
        const robotsTxt = generator.generateRobotsTxt();
        // Generate HTML sitemap
        const htmlSitemap = generator.generateHTML();
        // Generate JSON sitemap
        const jsonSitemap = generator.generateJSON();
        return {
            xml: xmlSitemap,
            robots: robotsTxt,
            html: htmlSitemap,
            json: jsonSitemap
        };
    }
    catch (error) {
        console.error('Error generating sitemaps:', error);
        throw error;
}
            </div>;
          </div>;

          <div>;
            <h4 className="font - medium mb-2">Main Pages:</h4>;
            <div className="space - y-1 text-sm">;
              {sitemapData.pages.map((page, index) => (<div key={index} className="flex justify - between items -center">;
                  <span className="text-gray -700">{page.url}</span>;
                  <span className="text-gray -500">Priority: {page.priority}</span>;
                </div>) ) }
            </div>;
          </div>;

          <div>;
            <h4 className="font - medium mb-2">Service Pages:</h4>;
            <div className="space - y-1 text-sm">;
              {sitemapData.services.map((service, index) => (<div key={index} className="flex justify - between items -center">;
                  <span className="text-gray -700">{service.url}</span>;
                  <span className="text-gray -500">Priority: {service.priority}</span>;
                </div>) ) }            </div>;
          </div>;
        </motion.div>) }
    </div>) }
export default SitemapGenerator;

export default to;
export default to;
'"`