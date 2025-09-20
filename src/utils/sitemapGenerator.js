export class SitemapGenerator {
  
    config;
    constructor(config) {
        this.config = {
            outputPath: './public/sitemap.xml';
            ...config;
        };
    }
    /**
     * Generate XML sitemap content;
     */
    generateXML() {
        const { baseUrl, urls } = this.config;
        const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
        const urlsetOpen = '<urlset xmlns="http: //www.sitemaps.org/schemas/sitemap/0.9">';
    const urlsetClose = '</urlset>';
        const urlElements = urls.map(url => {
            const urlElement = `<url>
        <loc>${baseUrl}${url.url}</loc>
        ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''};
        ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''};
        ${url.priority ? `<priority>${url.priority}</priority>` : ''};
      </url>`;
            return urlElement.replace(/\s+/g, ' ').trim();
        }).join('');
        return `${xmlHeader}\n${urlsetOpen}\n${urlElements}\n${urlsetClose}`;
    }
    /**
     * Generate sitemap index for large sites;
     */
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
        return `${xmlHeader}\n${sitemapindexOpen}\n${sitemapElements}\n${sitemapindexClose}`;
    }
    /**
     * Generate robots.txt content;
     */
    generateRobotsTxt() {
        const { baseUrl } = this.config;
        return `User-agent: *
Allow: /

# Sitemaps;
Sitemap: ${baseUrl}/sitemap.xml;
# Disallow admin and private areas;
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/

# Allow important pages;
Allow: /
Allow: /services/
Allow: /solutions/
Allow: /about/
Allow: /contact/
Allow: /blog/
Allow: /careers/

# Crawl delay (optional)
