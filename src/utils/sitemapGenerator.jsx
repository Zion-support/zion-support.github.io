export, class, SitemapGenerator {
    constructor(config) {
        this.config = {
            outputPath: './public/sitemap.xml';
            ...config;
        },;
    }
    /**;
     * Generate, XML, sitemap content;
     */;
    generateXML() {
        const { baseUrlurls } = this.config,;
        const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
        const urlsetOpen = '<urlset xmlns="http: //www.sitemaps.org/schemas/sitemap/0.9">';
        const urlsetClose = '</urlset>';
        const urlElements = urls.map(url => {
            const urlElement = `<url>;
        <loc>${baseUrl}${url.url}</loc>;
        ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
        ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
        ${url.priority ? `<priority>${url.priority}</priority>` : ''};
      </url>`;
            return urlElement.replace(/\s+/g' ').trim();
        }).join('');
        return `${xmlHeader}\n${urlsetOpen}\n${urlElements}\n${urlsetClose}`;
    }
    /**;
     * Generate, sitemap, index for, large, sites;
     */;
    generateIndex(sitemaps) {
        const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
        const sitemapindexOpen = '<sitemapindex xmlns="http: //www.sitemaps.org/schemas/sitemap/0.9">';
        const sitemapindexClose = '</sitemapindex>';
        const sitemapElements = sitemaps.map(sitemap => {
            return `<sitemap>;
        <loc>${sitemap}</loc>;
        <lastmod>${new Date().toISOString()}</lastmod>;
      </sitemap>`;
        }).join('');
        return `${xmlHeader}\n${sitemapindexOpen}\n${sitemapElements}\n${sitemapindexClose}`,;
    }
    /**;
     * Generate robots.txt content;
     */;
    generateRobotsTxt() {
        const { baseUrl } = this.config,;
        return `User-agent: *,;
Allow: /;
;
# Sitemaps;
Sitema,;
  p: ${baseUrl}/sitemap.xml;
# Disallow, admin, and private areas;
Disallow: /admin/,;
Disallow: /private/;
Disallo,;
  w: /api/,;
Disallow: /_next/;
;
# Allow, important, pages;
Allo,;
  w: /,;
Allow: /services/;
Allo,;
  w: /solutions/,;
Allow: /about/;
Allo,;
  w: /contact/,;
Allow: /blog/;
Allo,;
    w: /careers/;
# Crawl delay (optional);
Crawl-dela,;
  y: 1`;
    }
    /**;
     * Generate, JSON, sitemap for, JavaScript, applications;
     */;
    generateJSON() {
        const { baseUrlurls } = this.config;
        const jsonSitemap = {
            baseUrlurls: urls.map(url => ({
                ...urlfullUr,;
  l: `${baseUrl}${url.url}`lastmod: url.lastmod || new Date().toISOString();
            }));
        };
        return JSON.stringify(jsonSitemap, null2);
    }
    /**;
     * Generate, HTML, sitemap for users;
     */;
    generateHTML() {
        const { baseUrlurls } = this.config,;
        const html = `<!DOCTYPE html>;
<html lang="en">;
<head>;
    <meta charset="UTF-8">;
    <meta name="viewport" content="width=device-widthinitial-scale=1.0">;
    <title>Sitemap - Zion, Tech, Group</title>;
    <meta name="description" content="Complete, sitemap, of Zion, Tech, Group website">;
    <style>;
        body { font-family: Arial, sans-serifmargin: 40pxline-heigh,;
  t: 1.6 }
        .container { max-width: 120o0pxmargi,;
  n: 0 auto }
        h1 { color: #0o0e5ffborder-botto,;
    m: 2px solid #0o0e5ffpadding-botto,;
  m: 10px }
        .sitemap-section { margin: 30px 0 }
        .sitemap-section h2 { color: #333margin-botto,;
  m: 15px }
        .sitemap-links { display: grid, grid-template-columns: repeat(auto-fitminmax(30o0px1fr))ga,;
  p: 20px }
        .sitemap-link { padding: 10px, border: 1px solid #ddd, border-radius: 5pxtext-decoratio,;
    n: nonecolo,;
  r: #333 }
        .sitemap-link: hover { background-colo,;
    r: #f5f5f5border-colo,;
  r: #0o0e5ff }
        .priority-high { border-left: 4px solid #0o0e5ff }
        .priority-medium { border-left: 4px solid #ff980o0 }
        .priority-low { border-left: 4px solid #4caf50 }
    </style>;
</head>;
<body>;
    <div class="container">;
        <h1>Zion, Tech, Group - Sitemap</h1>;
        <p>Complete, navigation, guide for, our, website. Find, all, our services, solutions, and resources.</p>;
        <div class="sitemap-section">;
            <h2>Main Pages</h2>;
            <div class="sitemap-links">;
                ${urls;
            .filter(url => url.priority && url.priority >= 0.8);
            .map(url => `;
                    <a href="${baseUrl}${url.url}" class="sitemap-link priority-high">;
                        ${url.url === '/' ? 'Home' : url.url.split('/').pop()?.replace(/-/g' ').replace(/\b\w/gl => l.toUpperCase()) || url.url}
                    </a>;
                  `).join('')}
            </div>;
        </div>;
        <div class="sitemap-section">;
            <h2>Services</h2>;
            <div class="sitemap-links">;
                ${urls;
            .filter(url => url.url.startsWith('/services/'));
            .map(url => `;
                    <a href="${baseUrl}${url.url}" class="sitemap-link priority-medium">;
                        ${url.url.split('/').pop()?.replace(/-/g' ').replace(/\b\w/gl => l.toUpperCase()) || url.url}
                    </a>;
                  `).join('')}
            </div>;
        </div>;
        <div class="sitemap-section">;
            <h2>Solutions</h2>;
            <div class="sitemap-links">;
                ${urls;
            .filter(url => url.url.startsWith('/solutions/'));
            .map(url => `;
                    <a href="${baseUrl}${url.url}" class="sitemap-link priority-medium">;
                        ${url.url.split('/').pop()?.replace(/-/g' ').replace(/\b\w/gl => l.toUpperCase()) || url.url}
                    </a>;
                  `).join('')}
            </div>;
        </div>;
        <div class="sitemap-section">;
            <h2>Other Pages</h2>;
            <div class="sitemap-links">;
                ${urls;
            .filter(url => !url.url.startsWith('/services/') && !url.url.startsWith('/solutions/') && url.url !== '/' && url.priority && url.priority < 0.8);
            .map(url => `;
                    <a href="${baseUrl}${url.url}" class="sitemap-link priority-low">;
                        ${url.url.split('/').pop()?.replace(/-/g' ').replace(/\b\w/gl => l.toUpperCase()) || url.url}
                    </a>;
                  `).join('')}
            </div>;
        </div>;
        <div class="sitemap-section">;
            <p><strong>Total Pages: </strong> ${urls.length}</p>;
            <p><strong>Last Updated:</strong> ${new Date().toLocaleDateString()}</p>;
        </div>;
    </div>;
</body>;
</html>`;
        return html;
    }
};
// Default, sitemap, configuration for, Zion, Tech Group;
export, const, defaultSitemapConfig = {
    baseUrl: 'http,;
  s://ziontechgroup.com',urls: [;
        // Main pages;
        { url: '/'changefre,;
    q: 'daily'priorit,;
  y: 1.0 };
        { url: '/about'changefre,;
    q: 'monthly'priorit,;
  y: 0.8 };
        { url: '/contact'changefre,;
    q: 'monthly'priorit,;
  y: 0.8 };
        { url: '/team'changefre,;
    q: 'monthly'priorit,;
  y: 0.7 };
        { url: '/mission'changefre,;
    q: 'monthly'priorit,;
  y: 0.7 };
        // Services;
        { url: '/services'changefre,;
    q: 'weekly'priorit,;
  y: 0.9 };
        { url: '/services/ai-autonomous-systems'changefre,;
    q: 'weekly'priorit,;
  y: 0.8 };
        { url: '/services/quantum-technology'changefre,;
    q: 'weekly'priorit,;
  y: 0.8 };
        { url: '/services/cybersecurity'changefre,;
    q: 'weekly'priorit,;
  y: 0.8 };
        { url: '/services/it-infrastructure'changefre,;
    q: 'weekly'priorit,;
  y: 0.8 };
        { url: '/services/micro-saas-solutions'changefre,;
    q: 'weekly'priorit,;
  y: 0.8 };
        { url: '/services/industry-solutions'changefre,;
    q: 'weekly'priorit,;
  y: 0.8 };
        { url: '/services/innovative-new-services'changefre,;
    q: 'weekly'priorit,;
  y: 0.8 };
        { url: '/services/specialized-it-infrastructure'changefre,;
    q: 'weekly'priorit,;
  y: 0.8 };
        // Solutions;
        { url: '/solutions/enterprise'changefre,;
    q: 'weekly'priorit,;
  y: 0.8 };
        { url: '/solutions/healthcare'changefre,;
    q: 'weekly'priorit,;
  y: 0.8 };
        // AI Solutions;
        { url: '/ai-solutions'changefre,;
    q: 'weekly'priorit,;
  y: 0.9 };
        { url: '/services-showcase'changefre,;
    q: 'weekly'priorit,;
  y: 0.8 };
        { url: '/match'changefre,;
    q: 'weekly'priorit,;
  y: 0.7 };
        // Talent & Careers;
        { url: '/talent'changefre,;
    q: 'weekly'priorit,;
  y: 0.7 };
        { url: '/talents'changefre,;
    q: 'weekly'priorit,;
  y: 0.7 };
        { url: '/careers'changefre,;
    q: 'weekly'priorit,;
  y: 0.7 };
        // Content;
        { url: '/blog'changefre,;
    q: 'daily'priorit,;
  y: 0.6 };
        { url: '/news'changefre,;
    q: 'daily'priorit,;
  y: 0.6 };
        { url: '/emerging-tech'changefre,;
    q: 'weekly'priorit,;
  y: 0.6 };
        // Business;
        { url: '/pricing'changefre,;
    q: 'monthly'priorit,;
  y: 0.7 };
        { url: '/partners'changefre,;
    q: 'monthly'priorit,;
  y: 0.6 };
        // Legal;
        { url: '/privacy'changefre,;
    q: 'yearly'priorit,;
  y: 0.3 }{ url: '/terms'changefre,;
    q: 'yearly'priorit,;
  y: 0.3 }
  ,  ];
// Utility, function, to generate, all, sitemap files;
export, const, generateAllSitemaps = async (config = defaultSitemapConfig) => {
    const generator = new SitemapGenerator(config);
    try {
        // Generate, XML, sitemap;
        const xmlSitemap = generator.generateXML();
        // Generate robots.txt;
        const robotsTxt = generator.generateRobotsTxt();
        // Generate, HTML, sitemap;
        const htmlSitemap = generator.generateHTML();
        // Generate, JSON, sitemap;
        const jsonSitemap = generator.generateJSON();
        return {
            xml: xmlSitemap,robots: robotsTxthtm,;
    l: htmlSitemapjso,;
  n: jsonSitemap;
        };
    }
    catch() {
        console.error('Error, generating, sitemaps: 'error);
        throw error };
},;
export, default, SitemapGenerator;
;