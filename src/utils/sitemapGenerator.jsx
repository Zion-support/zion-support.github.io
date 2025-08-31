export class SitemapGenerator {
    config;

    constructor(config) {
        this.config = {
<<<<<<< HEAD
            outputPath: './public/sitemap.xml',
            ...config
        };
    }

=======
  outputPath: './public/sitemap.xml',
  ...config
};
    }
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
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
<<<<<<< HEAD
    }

=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
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
<<<<<<< HEAD
    }

=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
    /**
     * Generate robots.txt content
     */
    generateRobotsTxt() {
        const { baseUrl } = this.config;
        return `User-agent: *
Allow: /
# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
<<<<<<< HEAD

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
    generateJSON() {
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
    generateHTML() {
        const { baseUrl, urls } = this.config;
        const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sitemap - Zion Tech Group</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        .sitemap { max-width: 800px; margin: 0 auto; }
        .category { margin-bottom: 30px; }
        .category h2 { color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px; }
        .url-list { list-style: none; padding: 0; }
        .url-list li { margin: 8px 0; }
        .url-list a { color: #007bff; text-decoration: none; }
        .url-list a:hover { text-decoration: underline; }
        .priority { font-size: 0.8em; color: #666; }
    </style>
</head>
<body>
    <div class="sitemap">
        <h1>Sitemap</h1>
        <p>Complete list of pages on our website.</p>
        
        <div class="category">
            <h2>Main Pages</h2>
            <ul class="url-list">
                ${urls.filter(url => ['/', '/about', '/contact', '/services'].includes(url.url))
                    .map(url => `<li><a href="${baseUrl}${url.url}">${url.url === '/' ? 'Home' : url.url.slice(1)}</a></li>`)
                    .join('')}
            </ul>
        </div>
        
        <div class="category">
=======
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
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
            <h2>Services</h2>
            <ul class="url-list">
                ${urls.filter(url => url.url.startsWith('/services/'))
                    .map(url => `<li><a href="${baseUrl}${url.url}">${url.url.split('/').pop().replace(/-/g, ' ')}</a></li>`)
                    .join('')}
            </ul>
        </div>
<<<<<<< HEAD
        
        <div class="category">
=======
        <div class="sitemap-section">
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
            <h2>Solutions</h2>
            <ul class="url-list">
                ${urls.filter(url => url.url.startsWith('/solutions/'))
                    .map(url => `<li><a href="${baseUrl}${url.url}">${url.url.split('/').pop().replace(/-/g, ' ')}</a></li>`)
                    .join('')}
            </ul>
        </div>
<<<<<<< HEAD
        
        <div class="category">
            <h2>Resources</h2>
            <ul class="url-list">
                ${urls.filter(url => ['/blog', '/news', '/case-studies', '/webinars', '/white-papers'].includes(url.url))
                    .map(url => `<li><a href="${baseUrl}${url.url}">${url.url.slice(1).replace(/-/g, ' ')}</a></li>`)
                    .join('')}
            </ul>
=======
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
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
        </div>
    </div>
</body>
</html>`;
        
        return html;
<<<<<<< HEAD
    }

    /**
     * Generate CSV sitemap for spreadsheet applications
     */
    generateCSV() {
        const { baseUrl, urls } = this.config;
        const headers = ['URL', 'Last Modified', 'Change Frequency', 'Priority'];
        const rows = urls.map(url => [
            `${baseUrl}${url.url}`,
            url.lastmod || new Date().toISOString(),
            url.changefreq || 'weekly',
            url.priority || '0.5'
        ]);
        
        return [headers, ...rows]
            .map(row => row.map(cell => `"${cell}"`).join(','))
            .join('\n');
    }

    /**
     * Validate sitemap configuration
     */
    validate() {
        const errors = [];
        
        if (!this.config.baseUrl) {
            errors.push('Base URL is required');
        }
        
        if (!this.config.urls || !Array.isArray(this.config.urls)) {
            errors.push('URLs array is required');
        }
        
        if (this.config.urls) {
            this.config.urls.forEach((url, index) => {
                if (!url.url) {
                    errors.push(`URL at index ${index} is missing url property`);
                }
                if (url.priority && (url.priority < 0 || url.priority > 1)) {
                    errors.push(`Priority at index ${index} must be between 0 and 1`);
                }
            });
        }
        
=======
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
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
        return {
            isValid: errors.length === 0,
            errors
        };
<<<<<<< HEAD
    }

    /**
     * Save sitemap to file
     */
    async saveToFile(content, filePath = null) {
        const path = filePath || this.config.outputPath;
        
        try {
            // In a browser environment, trigger download
            if (typeof window !== 'undefined') {
                const blob = new Blob([content], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = path.split('/').pop();
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
                return true;
            }
            
            // In Node.js environment, write to file
            if (typeof require !== 'undefined') {
                const fs = require('fs').promises;
                await fs.writeFile(path, content, 'utf8');
                return true;
            }
            
            return false;
        } catch (error) {
            console.error('Error saving sitemap:', error);
            return false;
        }
    }

    /**
     * Generate all sitemap formats
     */
    async generateAll() {
        const validation = this.validate();
        if (!validation.isValid) {
            throw new Error(`Sitemap validation failed: ${validation.errors.join(', ')}`);
        }
        
        const results = {
            xml: this.generateXML(),
            json: this.generateJSON(),
            html: this.generateHTML(),
            csv: this.generateCSV(),
            robots: this.generateRobotsTxt()
        };
        
        return results;
    }
}

export default SitemapGenerator;
=======
    catch (error) {
        // // // // // // // console.error('Error generating sitemaps:', error);
        throw error;
};
export default SitemapGenerator;
export default to;
export default to;
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
