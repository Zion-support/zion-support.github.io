// Sitemap generator utility
export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const _generateSitemap = (urls: SitemapUrl[]): string => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString().split('T')[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => {
    const fullUrl = url.loc.startsWith('http') ? url.loc : `${baseUrl}${url.loc}`;
    return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${url.lastmod || currentDate}</lastmod>
    <changefreq>${url.changefreq || 'weekly'}</changefreq>
    <priority>${url.priority || 0.8}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return sitemap;
};

// Define all the pages for the sitemap
export const getAllPages = (): SitemapUrl[] => {
  const currentDate = new Date().toISOString().split('T')[0];
  
  return [
    // Main pages
    { loc: '/', priority: 1.0, changefreq: 'daily' },
    { loc: '/about', priority: 0.9, changefreq: 'monthly' },
    { loc: '/contact', priority: 0.9, changefreq: 'monthly' },
    { loc: '/services', priority: 0.9, changefreq: 'weekly' },
    { loc: '/blog', priority: 0.8, changefreq: 'weekly' },
    { loc: '/case-studies', priority: 0.8, changefreq: 'monthly' },
    { loc: '/pricing', priority: 0.8, changefreq: 'monthly' },
    { loc: '/team', priority: 0.7, changefreq: 'monthly' },
    { loc: '/careers', priority: 0.7, changefreq: 'weekly' },
    
    // AI Services
    { loc: '/ai-services', priority: 0.9, changefreq: 'weekly' },
    { loc: '/ai-marketing', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-automation', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-healthcare', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-fintech', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-data-analytics', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-cybersecurity', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-workflow-automation', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-customer-support', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-sales-automation', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-data-visualization', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-email-marketing', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-social-media-manager', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-project-manager', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-content-generation', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-code-generation', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-voice-cloning', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-video-generation', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-music-composition', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-fashion-design', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-fitness-coach', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-3d-generation', priority: 0.8, changefreq: 'weekly' },
    
    // IT Services
    { loc: '/it-services', priority: 0.9, changefreq: 'weekly' },
    { loc: '/cloud-migration', priority: 0.8, changefreq: 'weekly' },
    { loc: '/cybersecurity', priority: 0.8, changefreq: 'weekly' },
    { loc: '/devops-cicd', priority: 0.8, changefreq: 'weekly' },
    { loc: '/database-management', priority: 0.8, changefreq: 'weekly' },
    { loc: '/it-consulting', priority: 0.8, changefreq: 'weekly' },
    { loc: '/it-infrastructure', priority: 0.8, changefreq: 'weekly' },
    
    // Micro SAAS
    { loc: '/micro-saas', priority: 0.9, changefreq: 'weekly' },
    { loc: '/ai-crm', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-analytics-dashboard', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-chatbot-builder', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-email-marketing', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-mobile-app-builder', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-design-studio', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-seo-optimizer', priority: 0.8, changefreq: 'weekly' },
    { loc: '/ai-writing-assistant', priority: 0.8, changefreq: 'weekly' },
    
    // Specialized Solutions
    { loc: '/quantum-computing', priority: 0.8, changefreq: 'monthly' },
    { loc: '/autonomous-systems', priority: 0.8, changefreq: 'monthly' },
    { loc: '/blockchain-web3', priority: 0.8, changefreq: 'monthly' },
    { loc: '/iot-edge-computing', priority: 0.8, changefreq: 'monthly' },
    { loc: '/business-intelligence', priority: 0.8, changefreq: 'monthly' },
    { loc: '/digital-transformation', priority: 0.8, changefreq: 'monthly' },
    
    // Legal pages
    { loc: '/privacy', priority: 0.5, changefreq: 'yearly' },
    { loc: '/terms', priority: 0.5, changefreq: 'yearly' },
    { loc: '/cookies', priority: 0.5, changefreq: 'yearly' },
    { loc: '/gdpr', priority: 0.5, changefreq: 'yearly' },
    { loc: '/accessibility', priority: 0.5, changefreq: 'yearly' },
  ];
};