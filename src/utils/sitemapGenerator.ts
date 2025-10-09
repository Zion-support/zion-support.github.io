export const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
    { url: '/team', priority: '0.7', changefreq: 'monthly' },
    { url: '/careers', priority: '0.7', changefreq: 'weekly' },
    { url: '/news', priority: '0.6', changefreq: 'weekly' },
    { url: '/privacy', priority: '0.5', changefreq: 'yearly' },
    { url: '/terms', priority: '0.5', changefreq: 'yearly' },
    { url: '/cookies', priority: '0.5', changefreq: 'yearly' },
    { url: '/docs', priority: '0.6', changefreq: 'weekly' },
    { url: '/api-docs', priority: '0.6', changefreq: 'weekly' },
    { url: '/support', priority: '0.7', changefreq: 'weekly' },
    { url: '/status', priority: '0.6', changefreq: 'daily' }
  ];

  const aiServices = [
    '/ai-services', '/ai-marketing', '/ai-automation', '/ai-healthcare',
    '/ai-fintech', '/ai-cybersecurity', '/ai-data-analytics', '/ai-customer-support',
    '/ai-sales-automation', '/ai-data-visualization', '/ai-workflow-automation',
    '/ai-mobile-app-development', '/ai-ecommerce-solutions', '/ai-lead-generation',
    '/ai-document-processing', '/ai-ml-platform', '/ai-computer-vision',
    '/ai-nlp', '/ai-robotics', '/ai-research-development', '/ai-edge-computing'
  ];

  const itServices = [
    '/it-services', '/it-infrastructure', '/cybersecurity', '/cloud-migration',
    '/devops-cicd', '/database-management', '/network-solutions', '/system-administration',
    '/it-consulting', '/it-support', '/it-training', '/it-infrastructure-design',
    '/it-performance-monitoring', '/it-disaster-recovery', '/it-automation', '/global-it-support'
  ];

  const microSaas = [
    '/ai-project-manager', '/ai-social-media-manager', '/ai-analytics-dashboard',
    '/ai-email-marketing', '/ai-customer-support-bot', '/ai-code-generation',
    '/ai-content-generation', '/ai-crm', '/ai-chatbot-builder', '/ai-writing-assistant',
    '/ai-mobile-app-builder', '/ai-design-studio', '/ai-seo-optimizer'
  ];

  const emergingTech = [
    '/quantum-computing', '/robotics', '/iot-edge-computing', '/blockchain-web3',
    '/business-intelligence', '/autonomous-systems', '/ar-vr-solutions', '/smart-cities',
    '/digital-transformation', '/innovation-labs', '/sustainability-tech', '/future-technologies'
  ];

  const allPages = [
    ...staticPages,
    ...aiServices.map(url => ({ url, priority: '0.8', changefreq: 'weekly' })),
    ...itServices.map(url => ({ url, priority: '0.8', changefreq: 'weekly' })),
    ...microSaas.map(url => ({ url, priority: '0.7', changefreq: 'weekly' })),
    ...emergingTech.map(url => ({ url, priority: '0.7', changefreq: 'monthly' }))
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

export const generateRobotsTxt = () => {
  return `User-agent: *
Allow: /

Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow important pages
Allow: /services/
Allow: /ai-*/
Allow: /it-*/
Allow: /quantum-computing
Allow: /robotics
Allow: /blockchain-web3`;
};