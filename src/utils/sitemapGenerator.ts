export interface SitemapUrl {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export interface SitemapConfig {
  baseUrl: string;
  urls: SitemapUrl[];
  outputPath?: string;
}

export class SitemapGenerator {
  private readonly config: SitemapConfig;

  constructor(config: SitemapConfig) {
    this.config = config;
  }

  generateXML(): string {
    const { baseUrl, urls } = this.config;
    const xmlUrls = urls
      .map((url) => {
        const lastmod = url.lastmod || new Date().toISOString().split('T')[0];
        const changefreq = url.changefreq || 'weekly';
        const priority = url.priority ?? 0.5;
        return (
          `<url>` +
          `<loc>${baseUrl}${url.url}</loc>` +
          `<lastmod>${lastmod}</lastmod>` +
          `<changefreq>${changefreq}</changefreq>` +
          `<priority>${priority}</priority>` +
          `</url>`
        );
      })
      .join('\n');

    return (
      `<?xml version="1.0" encoding="UTF-8"?>` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
      xmlUrls +
      `</urlset>`
    );
  }
}










