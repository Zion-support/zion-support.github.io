/**
 * Sitemap Generator for Zion Tech Group
 * Generates dynamic sitemap for better SEO
 */

export interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export const generateSitemap = (): string => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString().split('T')[0];

  const sitemapEntries: SitemapEntry[] = [
    // Main pages
    { url: '/', lastmod: currentDate, changefreq: 'daily', priority: 1.0 },
    { url: '/about', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { url: '/services', lastmod: currentDate, changefreq: 'weekly', priority: 0.9 },
    { url: '/contact', lastmod: currentDate, changefreq: 'monthly', priority: 0.8 },
    { url: '/blog', lastmod: currentDate, changefreq: 'daily', priority: 0.8 },
    { url: '/pricing', lastmod: currentDate, changefreq: 'weekly', priority: 0.9 },
    { url: '/case-studies', lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { url: '/team', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/careers', lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { url: '/demo', lastmod: currentDate, changefreq: 'monthly', priority: 0.7 },
    { url: '/news', lastmod: currentDate, changefreq: 'daily', priority: 0.6 },
    { url: '/privacy', lastmod: currentDate, changefreq: 'yearly', priority: 0.3 },
    { url: '/terms', lastmod: currentDate, changefreq: 'yearly', priority: 0.3 },
    { url: '/cookies', lastmod: currentDate, changefreq: 'yearly', priority: 0.3 },
    { url: '/gdpr', lastmod: currentDate, changefreq: 'yearly', priority: 0.3 },
    { url: '/security', lastmod: currentDate, changefreq: 'monthly', priority: 0.5 },
    { url: '/compliance', lastmod: currentDate, changefreq: 'monthly', priority: 0.5 },
    { url: '/support', lastmod: currentDate, changefreq: 'weekly', priority: 0.6 },
    { url: '/docs', lastmod: currentDate, changefreq: 'weekly', priority: 0.6 },
    { url: '/api-docs', lastmod: currentDate, changefreq: 'weekly', priority: 0.6 },
    { url: '/status', lastmod: currentDate, changefreq: 'hourly', priority: 0.4 },
    { url: '/system-status', lastmod: currentDate, changefreq: 'hourly', priority: 0.4 },

    // AI Services
    { url: '/ai-services', lastmod: currentDate, changefreq: 'weekly', priority: 0.9 },
    { url: '/ai-analytics-dashboard', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-chatbot-builder', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-content-generation', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-crm', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-customer-support', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-cybersecurity', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-data-analytics', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-data-visualization', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-document-processing', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-ecommerce-solutions', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-email-assistant', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-fintech', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-healthcare', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-lead-generation', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-marketing', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-mobile-app-development', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-sales-automation', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-scheduler', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-workflow-automation', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-writing-assistant', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-project-manager', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-social-media-manager', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-email-marketing', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-customer-support-bot', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-seo-optimizer', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-financial-analyzer', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-video-generation', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-voice-cloning', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-music-composition', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-fashion-design', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-fitness-coach', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-3d-generation', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/machine-learning', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/nlp', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/computer-vision', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/ai-automation', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/quantum-ai', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },

    // IT Services
    { url: '/it-services', lastmod: currentDate, changefreq: 'weekly', priority: 0.9 },
    { url: '/cloud-services', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/cybersecurity', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/devops', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/database-services', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/network-infrastructure', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/it-support', lastmod: currentDate, changefreq: 'weekly', priority: 0.8 },
    { url: '/analytics-tools', lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { url: '/api-docs', lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { url: '/api', lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { url: '/autonomous-systems', lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { url: '/blockchain', lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { url: '/blockchain-web3', lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { url: '/business-apps', lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { url: '/business-intelligence', lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { url: '/developer-tools', lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { url: '/enterprise', lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { url: '/expense-tracker', lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { url: '/iot-edge-computing', lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { url: '/iot-edge', lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { url: '/it-infrastructure', lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { url: '/marketing-tools', lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { url: '/micro-saas', lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { url: '/networking', lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { url: '/offline', lastmod: currentDate, changefreq: 'monthly', priority: 0.3 },
    { url: '/productivity', lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { url: '/quantum-computing', lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { url: '/robotics', lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { url: '/security', lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { url: '/services-advertising', lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { url: '/sitemap', lastmod: currentDate, changefreq: 'daily', priority: 0.5 },
    { url: '/smart-analytics', lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },
    { url: '/task-manager-pro', lastmod: currentDate, changefreq: 'weekly', priority: 0.7 },

    // Blog posts (add more as needed)
    { url: '/blog/agent-release-runbooks-v2-2026', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-2025-2026-mega-trends-breakthrough', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-2025-january-advanced-ai-revolution', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-2025-january-cutting-edge-trends-breakthrough', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-2025-march-autonomous-enterprise-operations-revolution', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-2025-sept-30-operational-trust-scorecards-v3', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-2026-adaptive-neural-architectures-breakthrough', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-2026-advanced-neural-optimization-revolution', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-2026-april-revolutionary-breakthrough', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-2026-april-ultimate-breakthrough-revolution', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-2026-autonomous-agent-factories', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-2026-autonomous-business-intelligence-breakthrough', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-2026-autonomous-business-intelligence-mega-breakthrough', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-2026-autonomous-enterprise-architecture', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-2026-consensus-intelligence-breakthrough', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-2026-enterprise-automation-revolutionary-breakthrough', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-2026-enterprise-breakthrough', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-2026-february-mega-breakthrough-revolution', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-2026-february-ultimate-consciousness-breakthrough', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-2026-hyperconscious-computing-revolution', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-autonomous-business-systems-2026', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-cost-optimization-breakthrough-2026', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-enterprise-transformation-2025', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-enterprise-transformation-ultimate-guide-2025', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-innovation-labs-product-development-2025', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-powered-autonomous-business-processes-2026', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 },
    { url: '/blog/ai-trends-2026-future-enterprise-transformation', lastmod: currentDate, changefreq: 'monthly', priority: 0.6 }
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map(entry => `  <url>
    <loc>${baseUrl}${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemapXml;
};

export const generateRobotsTxt = (): string => {
  return `User-agent: *
Allow: /

# Sitemap
Sitemap: https://ziontechgroup.com/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/
Disallow: /temp/
Disallow: /test/

# Allow important pages
Allow: /
Allow: /about
Allow: /services
Allow: /contact
Allow: /blog
Allow: /pricing
Allow: /case-studies

# AI Services
Allow: /ai-*
Allow: /machine-learning
Allow: /nlp
Allow: /computer-vision
Allow: /quantum-ai

# IT Services
Allow: /cloud-services
Allow: /cybersecurity
Allow: /devops
Allow: /database-services
Allow: /network-infrastructure
Allow: /it-support

# Specialized Services
Allow: /blockchain
Allow: /autonomous-systems
Allow: /iot-edge
Allow: /business-intelligence
Allow: /robotics
Allow: /enterprise

# Blog posts
Allow: /blog/*

# Static assets
Allow: /css/
Allow: /js/
Allow: /images/
Allow: /icons/
Allow: /fonts/

# Files
Allow: /*.css
Allow: /*.js
Allow: /*.png
Allow: /*.jpg
Allow: /*.jpeg
Allow: /*.gif
Allow: /*.svg
Allow: /*.webp
Allow: /*.ico
Allow: /*.woff
Allow: /*.woff2
Allow: /*.ttf
Allow: /*.eot`;
};