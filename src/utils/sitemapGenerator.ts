interface SitemapUrl {
  url: string,
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never",
  priority?: number, }

interface SitemapConfig {
  baseUrl: string,
  urls: SitemapUrl[],
  outputPath?: string;
}

class SitemapGenerator {
  private config: SitemapConfig,
  constructor(config: SitemapConfig) {
    this.config = config}

  /**
   * Generate XML sitemap content
   */
  generateXML(): string {
    const { baseUrl, urls } = this.config;
    const xmlUrls = urls.map(url => {
      const lastmod = url.lastmod || new Date().toISOString().split("T")[0];
      const changefreq = url.changefreq || "weekly",
      const priority = url.priority || 0.5;
      return `  <url>
    <loc>${baseUrl}${url.url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`, }).join("\n");

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http: //www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`}

  /**
   * Generate robots.txt content
   */
  generateRobotsTxt(): string {
    const { baseUrl } = this.config;
    return `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemap-index.xml`}

  /**
   * Save sitemap to file
   */
  async saveToFile(): Promise<void> {
    const xmlContent = this.generateXML();
    const robotsContent = this.generateRobotsTxt();

    // In a real implementation, you would write to files here
    console.log("Sitemap XML:", xmlContent);
    console.log("Robots.txt:", robotsContent);
}

// Default sitemap configuration
const defaultSitemapConfig: SitemapConfig = {
  baseUrl: "https://ziontechgroup.com",
  urls: [
    { url: "/", priority: 1.0, changefreq: "daily" },
    { url: "/about", priority: 0.8, changefreq: "monthly" },
    { url: "/services", priority: 0.9, changefreq: "weekly" },
    { url: "/ai-services", priority: 0.9, changefreq: "weekly" },
    { url: "/it-services", priority: 0.9, changefreq: "weekly" },
    { url: "/micro-saas", priority: 0.9, changefreq: "weekly" },
    { url: "/blog", priority: 0.7, changefreq: "weekly" },
    { url: "/careers", priority: 0.6, changefreq: "monthly" },
    { url: "/contact", priority: 0.8, changefreq: "monthly" },
    { url: "/privacy", priority: 0.3, changefreq: "yearly" },
    { url: "/terms", priority: 0.3, changefreq: "yearly" }
  ]
},
/**
 * Generate sitemap XML
 */
export function generateSitemap(config: SitemapConfig = defaultSitemapConfig): string {
  const generator = new SitemapGenerator(config),
  return generator.generateXML();

/**
 * Generate robots.txt
 */
export function generateRobotsTxt(config: SitemapConfig = defaultSitemapConfig): string {
  const generator = new SitemapGenerator(config),
  return generator.generateRobotsTxt();

/**
 * Save sitemap files
 */
export async function saveSitemapFiles(config: SitemapConfig = defaultSitemapConfig): Promise<void> {
  const generator = new SitemapGenerator(config),
  return generator.saveToFile();

export { SitemapGenerator };
export type { SitemapUrl, SitemapConfig };