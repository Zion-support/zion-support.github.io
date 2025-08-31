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
        }).join('');
        
        return `${xmlHeader}\n${urlsetOpen}\n${urlElements}\n${urlsetClose}`;
    /**
     * Generate sitemap index for large sites
     */
    generateIndex(sitemaps) {
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
    /**
     * Generate robots.txt content
     */
    generateRobotsTxt() {
        const { baseUrl } = this.config;
        return `User-agent: *
Allow: /
# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
  const generateSitemap = async () => {
    setIsGenerating(true);
    // Simulate sitemap generation
    setTimeout(() => {
      const sitemap = {
  pages: [
          { url: '/', priority: '1.0',
  changefreq: 'daily' 
},
          { url: '/services', priority: '0.9', changefreq: 'weekly' },
          { url: '/about', priority: '0.8', changefreq: 'monthly' },
          { url: '/contact', priority: '0.8', changefreq: 'monthly' },
          { url: '/blog', priority: '0.7', changefreq: 'weekly' },
          { url: '/pricing', priority: '0.8', changefreq: 'monthly' }
        ],
        services: [
          { url: '/services/ai-solutions', priority: '0.8', changefreq: 'weekly' },
          { url: '/services/cybersecurity', priority: '0.8', changefreq: 'weekly' },
          { url: '/services/cloud-infrastructure', priority: '0.8', changefreq: 'weekly' },
          { url: '/services/micro-saas', priority: '0.8', changefreq: 'weekly' }
        ],
        totalUrls: 10,
        generatedAt: new Date().toISOString()
      };
      setSitemapData(sitemap);
      setIsGenerating(false);
      if (onGenerate) {
        onGenerate(sitemap);
      }
    }, 2000);
  };
  return (
    <div className="space-y-4">
      <button
        onClick={generateSitemap}
        disabled={isGenerating}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"
      >
        {isGenerating ? 'Generating...' : 'Generate Sitemap'}
      </button>
      {sitemapData && (
        <motion.div
          initial = {
  { opacity: 0,
  y: 20 
}}
          animate = {
  { opacity: 1,
  y: 0 
}}
          className="space-y-4"
        >
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Sitemap Generated Successfully!</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Total URLs:</span> {sitemapData.totalUrls}
              </div>
              <div>
                <span className="font-medium">Generated:</span> {new Date(sitemapData.generatedAt).toLocaleDateString()}
              </div>
            </div>
        </div>
        <div class="sitemap-section">
            <h2>Services</h2>
            <ul class="url-list">
                ${urls.filter(url => url.url.startsWith('/services/'))
                    .map(url => `<li><a href="${baseUrl}${url.url}">${url.url.split('/').pop().replace(/-/g, ' ')}</a></li>`)
                    .join('')}
            </ul>
        </div>
        <div class="sitemap-section">
            <h2>Solutions</h2>
            <ul class="url-list">
                ${urls.filter(url => url.url.startsWith('/solutions/'))
                    .map(url => `<li><a href="${baseUrl}${url.url}">${url.url.split('/').pop().replace(/-/g, ' ')}</a></li>`)
                    .join('')}
            </ul>
        </div>
        <div class="sitemap-section">
            <h2>Other Pages</h2>
            <div class="sitemap-links">
                ${urls
            .filter(url => !url.url.startsWith('/services/') && !url.url.startsWith('/solutions/') && url.url !== '/' && url.priority && url.priority < 0.8)
            .map(url => `
                    <a href="${baseUrl}${url.url}" class="sitemap-link priority-low">
                        ${url.url.split('/').pop()?.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || url.url}
                    </a>
                  `).join('')}
            </div>
        </div>
        <div class="sitemap-section">
            <p><strong>Total Pages:</strong> ${urls.length}</p>
            <p><strong>Last Updated:</strong> ${new Date().toLocaleDateString()}</p>
        </div>
    </div>
</body>
</html>`;
        
        return html;
// Default sitemap configuration for Zion Tech Group
export const defaultSitemapConfig = {
  baseUrl: 'https://ziontechgroup.com',
    urls: [
        // Main pages
        { url: '/', changefreq: 'daily',
  priority: 1.0 
},
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
export const generator = new SitemapGenerator(config);
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
            isValid: errors.length === 0,
            errors
        };
    catch (error) {
        // // // // // // // console.error('Error generating sitemaps:', error);
        throw error;
};
export default SitemapGenerator;
export default to;
export default to;
