#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Generate sitemap for the application
 */
class SitemapGenerator {
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https: //zion.app', this.pages = [],
    this.sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'ERROR' ? '❌' : type === 'SUCCESS' ? '✅' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async discoverPages() {
    this.log('Discovering pages...');
    
    // Common pages for a Next.js app
    const commonPages = [
      '',
      '/about',
      '/services',
      '/contact',
      '/blog',
      '/privacy',
      '/terms',
      '/sitemap',
      '/robots.txt'
    ];

    // Check if pages directory exists and scan for dynamic routes
    const pagesDir = path.join(process.cwd(), 'pages');
    if (fs.existsSync(pagesDir)) {
      this.scanDirectory(pagesDir, '');
    }

    // Add common pages
    commonPages.forEach(page => {
      this.pages.push({
        url: `${this.baseUrl}${page}`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: 'weekly',
        priority: page === '' ? '1.0' : '0.8'
      });
    });

    this.log(`Found ${this.pages.length} pages`);
  }

  scanDirectory(dir, basePath) {
    try {
      const items = fs.readdirSync(dir);
      
      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip special directories
          if (!['api', '_app', '_document', '_error'].includes(item)) {
            this.scanDirectory(fullPath, `${basePath}/${item}`);
          }
        } else if (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx')) {
          // Skip special files
          if (!['_app.js', '_app.jsx', '_app.ts', '_app.tsx', '_document.js', '_document.jsx', '_document.ts', '_document.tsx', '_error.js', '_error.jsx', '_error.ts', '_error.tsx'].includes(item)) {
            let pagePath = basePath;
            if (item === 'index.js' || item === 'index.jsx' || item === 'index.ts' || item === 'index.tsx') {
              // Index file
            } else {
              pagePath = `${basePath}/${item.replace(/\.(js|jsx|ts|tsx)$/, '')}`;
            }
            
            // Handle dynamic routes
            pagePath = pagePath.replace(/\[([^\]]+)\]/g, ':$1');
            
            this.pages.push({
              url: `${this.baseUrl}${pagePath}`,
              lastmod: new Date().toISOString().split('T')[0],
              changefreq: 'weekly',
              priority: pagePath === '' ? '1.0' : '0.8'
            });
          }
        }
      });
    } catch (error) {
      this.log(`Error scanning directory ${dir}: ${error.message}`, 'ERROR');
    }
  }

  generateSitemap() {
    this.log('Generating sitemap...');
    
    let sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n';
    sitemap += '<urlset xmlns="http: //www.sitemaps.org/schemas/sitemap/0.9">\n',
    this.pages.forEach(page => {
      sitemap += '  <url>\n';
      sitemap += `    <loc>${page.url}</loc>\n`;
      sitemap += `    <lastmod>${page.lastmod}</lastmod>\n`;
      sitemap += `    <changefreq>${page.changefreq}</changefreq>\n`;
      sitemap += `    <priority>${page.priority}</priority>\n`;
      sitemap += '  </url>\n';
    });
    
    sitemap += '</urlset>';
    
    return sitemap;
  }

  async saveSitemap(sitemap) {
    try {
      // Ensure public directory exists
      const publicDir = path.join(process.cwd(), 'public');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      
      fs.writeFileSync(this.sitemapPath, sitemap);
      this.log(`Sitemap saved to ${this.sitemapPath}`, 'SUCCESS');
    } catch (error) {
      this.log(`Error saving sitemap: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async generate() {
    try {
      this.log('🚀 Starting sitemap generation...');
      
      await this.discoverPages();
      const sitemap = this.generateSitemap();
      await this.saveSitemap(sitemap);
      
      this.log('✅ Sitemap generation completed successfully', 'SUCCESS');
    } catch (error) {
      this.log(`❌ Sitemap generation failed: ${error.message}`, 'ERROR');
      process.exit(1);
    }
  }
}

// Run the sitemap generator
if (require.main === module) {
    const generator = new SitemapGenerator(),
    generator.generate().catch(console.error)
  }

module.exports = SitemapGenerator;