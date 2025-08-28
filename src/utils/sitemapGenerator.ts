export interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
  title?: string;
  description?: string;
  image?: string;
}

export interface SitemapConfig {
  baseUrl: string;
  entries: SitemapEntry[];
  outputPath?: string;
}

export class SitemapGenerator {
  private config: SitemapConfig;

  constructor(config: SitemapConfig) {
    this.config = config;
  }

  /**
   * Generate XML sitemap
   */
  generateXML(): string {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${this.config.entries.map(entry => this.generateXMLEntry(entry)).join('\n')}
</urlset>`;

    return xml;
  }

  /**
   * Generate JSON sitemap
   */
  generateJSON(): string {
    const json = {
      baseUrl: this.config.baseUrl,
      pages: this.config.entries.map(entry => ({
        url: entry.url,
        lastmod: entry.lastmod || new Date().toISOString(),
        changefreq: entry.changefreq || 'weekly',
        priority: entry.priority || 0.5,
        title: entry.title,
        description: entry.description,
        image: entry.image
      }))
    };

    return JSON.stringify(json, null, 2);
  }

  /**
   * Generate HTML sitemap
   */
  generateHTML(): string {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sitemap - Zion Tech Group</title>
    <meta name="description" content="Complete sitemap of Zion Tech Group website">
    <meta name="robots" content="noindex, nofollow">
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
        .container { max-width: 1200px; margin: 0 auto; }
        h1 { color: #06b6d4; border-bottom: 2px solid #06b6d4; padding-bottom: 10px; }
        .sitemap-section { margin: 30px 0; }
        .sitemap-section h2 { color: #374151; margin-bottom: 15px; }
        .sitemap-links { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .sitemap-link { padding: 15px; border: 1px solid #e5e7eb; border-radius: 8px; text-decoration: none; color: #374151; transition: all 0.2s; }
        .sitemap-link:hover { border-color: #06b6d4; box-shadow: 0 2px 8px rgba(6, 182, 212, 0.1); }
        .sitemap-link h3 { margin: 0 0 8px 0; color: #06b6d4; }
        .sitemap-link p { margin: 0; color: #6b7280; font-size: 14px; }
        .priority-high { border-left: 4px solid #10b981; }
        .priority-medium { border-left: 4px solid #f59e0b; }
        .priority-low { border-left: 4px solid #6b7280; }
        @media (max-width: 768px) { .sitemap-links { grid-template-columns: 1fr; } }
    </style>
</head>
<body>
    <div class="container">
        <h1>Sitemap - Zion Tech Group</h1>
        <p>Complete list of all pages on our website.</p>
        
        <div class="sitemap-section">
            <h2>Main Pages</h2>
            <div class="sitemap-links">
${this.generateHTMLLinks('main')}
            </div>
        </div>
        
        <div class="sitemap-section">
            <h2>Services</h2>
            <div class="sitemap-links">
${this.generateHTMLLinks('services')}
            </div>
        </div>
        
        <div class="sitemap-section">
            <h2>Resources</h2>
            <div class="sitemap-links">
${this.generateHTMLLinks('resources')}
            </div>
        </div>
        
        <div class="sitemap-section">
            <h2>Company</h2>
            <div class="sitemap-links">
${this.generateHTMLLinks('company')}
            </div>
        </div>
    </div>
</body>
</html>`;

    return html;
  }

  /**
   * Generate robots.txt content
   */
  generateRobotsTxt(): string {
    return `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${this.config.baseUrl}/sitemap.xml
Sitemap: ${this.config.baseUrl}/sitemap.json

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow important resources
Allow: /images/
Allow: /fonts/
Allow: /css/
Allow: /js/

# Crawl delay (optional)
Crawl-delay: 1`;
  }

  /**
   * Generate manifest.json for PWA
   */
  generateManifest(): string {
    const manifest = {
      name: "Zion Tech Group",
      short_name: "Zion Tech",
      description: "AI-powered business solutions and comprehensive IT services",
      start_url: "/",
      display: "standalone",
      background_color: "#020617",
      theme_color: "#06b6d4",
      icons: [
        {
          src: "/images/icon-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "/images/icon-512x512.png",
          sizes: "512x512",
          type: "image/png"
        }
      ],
      categories: ["business", "productivity", "technology"],
      lang: "en-US",
      orientation: "portrait-primary"
    };

    return JSON.stringify(manifest, null, 2);
  }

  private generateXMLEntry(entry: SitemapEntry): string {
    let xml = `  <url>
    <loc>${this.config.baseUrl}${entry.url}</loc>`;
    
    if (entry.lastmod) {
      xml += `\n    <lastmod>${entry.lastmod}</lastmod>`;
    }
    
    if (entry.changefreq) {
      xml += `\n    <changefreq>${entry.changefreq}</changefreq>`;
    }
    
    if (entry.priority) {
      xml += `\n    <priority>${entry.priority}</priority>`;
    }
    
    if (entry.image) {
      xml += `\n    <image:image>
      <image:loc>${this.config.baseUrl}${entry.image}</image:loc>`;
      if (entry.title) {
        xml += `\n      <image:title>${entry.title}</image:title>`;
      }
      if (entry.description) {
        xml += `\n      <image:caption>${entry.description}</image:caption>`;
      }
      xml += `\n    </image:image>`;
    }
    
    xml += `\n  </url>`;
    return xml;
  }

  private generateHTMLLinks(category: string): string {
    const categoryEntries = this.config.entries.filter(entry => {
      if (category === 'main') {
        return ['/', '/about', '/contact', '/services', '/solutions'].includes(entry.url);
      } else if (category === 'services') {
        return entry.url.startsWith('/services');
      } else if (category === 'resources') {
        return ['/blog', '/resources', '/case-studies', '/white-papers', '/webinars', '/documentation'].some(path => entry.url.startsWith(path));
      } else if (category === 'company') {
        return ['/about', '/careers', '/partners', '/privacy', '/terms', '/cookies'].some(path => entry.url.startsWith(path));
      }
      return false;
    });

    return categoryEntries.map(entry => {
      const priorityClass = entry.priority && entry.priority > 0.7 ? 'priority-high' : 
                           entry.priority && entry.priority > 0.4 ? 'priority-medium' : 'priority-low';
      
      return `                <a href="${entry.url}" class="sitemap-link ${priorityClass}">
                    <h3>${entry.title || entry.url.replace('/', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h3>
                    <p>${entry.description || 'Page description'}</p>
                </a>`;
    }).join('\n');
  }

  /**
   * Save sitemap files
   */
  async saveFiles(): Promise<void> {
    try {
      // Save XML sitemap
      const xmlContent = this.generateXML();
      await this.saveFile('sitemap.xml', xmlContent);
      
      // Save JSON sitemap
      const jsonContent = this.generateJSON();
      await this.saveFile('sitemap.json', jsonContent);
      
      // Save HTML sitemap
      const htmlContent = this.generateHTML();
      await this.saveFile('sitemap.html', htmlContent);
      
      // Save robots.txt
      const robotsContent = this.generateRobotsTxt();
      await this.saveFile('robots.txt', robotsContent);
      
      // Save manifest.json
      const manifestContent = this.generateManifest();
      await this.saveFile('manifest.json', manifestContent);
      
      console.log('Sitemap files generated successfully!');
    } catch (error) {
      console.error('Error generating sitemap files:', error);
    }
  }

  private async saveFile(filename: string, content: string): Promise<void> {
    // In a browser environment, you might want to trigger a download
    // In a Node.js environment, you would use fs.writeFile
    if (typeof window !== 'undefined') {
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  }
}

// Default sitemap configuration for Zion Tech Group
export const defaultSitemapConfig: SitemapConfig = {
  baseUrl: 'https://ziontechgroup.com',
  entries: [
    // Main pages
    {
      url: '/',
      changefreq: 'daily',
      priority: 1.0,
      title: 'Home',
      description: 'AI-powered business solutions and comprehensive IT services'
    },
    {
      url: '/about',
      changefreq: 'monthly',
      priority: 0.8,
      title: 'About Us',
      description: 'Learn about Zion Tech Group and our mission'
    },
    {
      url: '/contact',
      changefreq: 'monthly',
      priority: 0.8,
      title: 'Contact Us',
      description: 'Get in touch with our team'
    },
    {
      url: '/services',
      changefreq: 'weekly',
      priority: 0.9,
      title: 'Services',
      description: 'Our comprehensive range of IT services'
    },
    {
      url: '/solutions',
      changefreq: 'weekly',
      priority: 0.9,
      title: 'Solutions',
      description: 'Tailored solutions for your business needs'
    },
    
    // Service pages
    {
      url: '/services/ai-business-intelligence',
      changefreq: 'weekly',
      priority: 0.8,
      title: 'AI Business Intelligence',
      description: 'Transform your data into actionable insights'
    },
    {
      url: '/services/cloud-devops',
      changefreq: 'weekly',
      priority: 0.8,
      title: 'Cloud & DevOps',
      description: 'Enterprise-grade cloud infrastructure solutions'
    },
    {
      url: '/services/data-analytics',
      changefreq: 'weekly',
      priority: 0.8,
      title: 'Data Analytics',
      description: 'Advanced data analysis and visualization'
    },
    
    // Resource pages
    {
      url: '/blog',
      changefreq: 'daily',
      priority: 0.7,
      title: 'Blog',
      description: 'Latest insights and updates from our team'
    },
    {
      url: '/resources',
      changefreq: 'weekly',
      priority: 0.7,
      title: 'Resources',
      description: 'Helpful resources and tools'
    },
    {
      url: '/case-studies',
      changefreq: 'monthly',
      priority: 0.6,
      title: 'Case Studies',
      description: 'Real-world examples of our work'
    },
    
    // Company pages
    {
      url: '/careers',
      changefreq: 'weekly',
      priority: 0.5,
      title: 'Careers',
      description: 'Join our team of technology experts'
    },
    {
      url: '/partners',
      changefreq: 'monthly',
      priority: 0.5,
      title: 'Partners',
      description: 'Strategic partnerships and collaborations'
    },
    {
      url: '/privacy',
      changefreq: 'yearly',
      priority: 0.3,
      title: 'Privacy Policy',
      description: 'Our privacy and data protection policies'
    },
    {
      url: '/terms',
      changefreq: 'yearly',
      priority: 0.3,
      title: 'Terms of Service',
      description: 'Terms and conditions of use'
    }
  ]
};

// Export a default instance
export const sitemapGenerator = new SitemapGenerator(defaultSitemapConfig);