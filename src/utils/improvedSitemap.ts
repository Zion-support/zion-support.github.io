/**
 * Improved Sitemap Generator with Priority and Change Frequency
 * Generates comprehensive sitemaps for better SEO
 */

export interface SitemapURL {
loc: string;
lastmod?: string;
changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
priority?: number;
images?: Array<{,
loc: string;
caption?: string;
title?: string;
}>;
}

export interface SitemapConfig {
baseUrl: string;
routes: Array<{,
path: string;
priority?: number;
changefreq?: SitemapURL['changefreq'];
dynamic?: boolean;
}>;
}

export class ImprovedSitemapGenerator {
private config: SitemapConfig;,
private urls: SitemapURL[] = [];,
constructor(config: SitemapConfig) {,
this.config = config;
}

  public addURL(url: SitemapURL): void {
    this.urls.push(url);
  }

  public addStaticRoutes(): void {
    this.config.routes.forEach(route => {
      if (!route.dynamic) {
        this.addURL({
          loc: `${this.config.baseUrl}${route.path}`,
          lastmod: new Date().toISOString(),
          changefreq: route.changefreq || 'weekly',
          priority: route.priority || 0.5,
        });
      }
    });
  }

  public addBlogPosts(posts: Array<{ slug: string; date: string; images?: string[] }>): void {
posts.forEach(post => {
const url: SitemapURL = {,
loc: `${this.config.baseUrl
}/blog/${post.slug}`,
        lastmod: post.date,
        changefreq: 'monthly',
        priority: 0.8,
      };

      if (post.images && post.images.length > 0) {
        url.images = post.images.map(img => ({
          loc: `${this.config.baseUrl}${img}`,
        }));
      }

      this.addURL(url);
    });
  }

  public addCaseStudies(caseStudies: Array<{ slug: string; date: string }>): void {
    caseStudies.forEach(study => {
      this.addURL({
        loc: `${this.config.baseUrl}/case-studies/${study.slug}`,
        lastmod: study.date,
        changefreq: 'monthly',
        priority: 0.7,
      });
    });
  }

  public addServices(services: Array<{ slug: string }>): void {
    services.forEach(service => {
      this.addURL({
        loc: `${this.config.baseUrl}/services/${service.slug}`,
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.9,
      });
    });
  }

  public generateXML(): string {
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"';,
xml += ' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';,
this.urls.forEach(url => {
xml += '  <url>\n';
xml += `    <loc>${this.escapeXML(url.loc)
}</loc>\n`;
      
      if (url.lastmod) {
        xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
      }
      
      if (url.changefreq) {
        xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
      }
      
      if (url.priority !== undefined) {
        xml += `    <priority>${url.priority.toFixed(1)}</priority>\n`;
      }

      if (url.images && url.images.length > 0) {
url.images.forEach(image => {
xml += '    <image:image>\n';,
xml += `      <image:loc>${this.escapeXML(image.loc)
}</image:loc>\n`;
          if (image.caption) {
            xml += `      <image:caption>${this.escapeXML(image.caption)}</image:caption>\n`;
          }
          if (image.title) {
            xml += `      <image:title>${this.escapeXML(image.title)}</image:title>\n`;
          }
          xml += '    </image:image>\n';
        });
      }

      xml += '  </url>\n';
    });

    xml += '</urlset>';
    return xml;
  }

  public generateSitemapIndex(sitemaps: Array<{ loc: string; lastmod?: string }>): string {
let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';,
sitemaps.forEach(sitemap => {
xml += '  <sitemap>\n';
xml += `    <loc>${this.escapeXML(sitemap.loc)
}</loc>\n`;
      if (sitemap.lastmod) {
        xml += `    <lastmod>${sitemap.lastmod}</lastmod>\n`;
      }
      xml += '  </sitemap>\n';
    });

    xml += '</sitemapindex>';
    return xml;
  }

  private escapeXML(str: string): string {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }

  public getURLCount(): number {
    return this.urls.length;
  }

  public clear(): void {
    this.urls = [];
  }
}

// Export a configured instance
export const createSitemapGenerator = (baseUrl: string): ImprovedSitemapGenerator => {
  const config: SitemapConfig = {
    baseUrl,
    routes: [
      { path: '/', priority: 1.0, changefreq: 'daily' }
      { path: '/about', priority: 0.8, changefreq: 'monthly' }
      { path: '/contact', priority: 0.9, changefreq: 'monthly' }
      { path: '/blog', priority: 0.9, changefreq: 'daily' }
      { path: '/case-studies', priority: 0.8, changefreq: 'weekly' }
      { path: '/services', priority: 0.9, changefreq: 'monthly' }
    ],
  };

  return new ImprovedSitemapGenerator(config);
};

export default ImprovedSitemapGenerator;