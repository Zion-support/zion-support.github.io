// Sitemap generator for Zion Tech Group
export const generateSitemap = () => {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.9', changefreq: 'monthly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/pricing', priority: '0.8', changefreq: 'weekly' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    { url: '/case-studies', priority: '0.7', changefreq: 'monthly' },
    { url: '/team', priority: '0.6', changefreq: 'monthly' },
    { url: '/careers', priority: '0.6', changefreq: 'weekly' },
    { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
    { url: '/terms', priority: '0.3', changefreq: 'yearly' },
    { url: '/cookies', priority: '0.3', changefreq: 'yearly' },
    { url: '/gdpr', priority: '0.3', changefreq: 'yearly' },
    { url: '/security', priority: '0.4', changefreq: 'monthly' },
    { url: '/compliance', priority: '0.4', changefreq: 'monthly' },
    { url: '/support', priority: '0.5', changefreq: 'monthly' },
    { url: '/docs', priority: '0.5', changefreq: 'weekly' },
    { url: '/api-docs', priority: '0.5', changefreq: 'weekly' },
    { url: '/status', priority: '0.4', changefreq: 'daily' },
    { url: '/system-status', priority: '0.4', changefreq: 'daily' },
    { url: '/demo', priority: '0.7', changefreq: 'monthly' },
    { url: '/news', priority: '0.6', changefreq: 'weekly' },
    { url: '/offline', priority: '0.1', changefreq: 'yearly' }
  ];

  const aiServices = [
    '/ai-services', '/ai-analytics-dashboard', '/ai-chatbot-builder', '/ai-content-generation',
    '/ai-crm', '/ai-customer-support', '/ai-cybersecurity', '/ai-data-analytics',
    '/ai-data-visualization', '/ai-document-processing', '/ai-ecommerce-solutions',
    '/ai-email-assistant', '/ai-fintech', '/ai-healthcare', '/ai-lead-generation',
    '/ai-marketing', '/ai-mobile-app-development', '/ai-sales-automation', '/ai-scheduler',
    '/ai-workflow-automation', '/ai-writing-assistant', '/ai-project-manager',
    '/ai-social-media-manager', '/ai-email-marketing', '/ai-customer-support-bot',
    '/ai-seo-optimizer', '/ai-financial-analyzer', '/ai-video-generation', '/ai-voice-cloning',
    '/ai-music-composition', '/ai-fashion-design', '/ai-fitness-coach', '/ai-3d-generation',
    '/machine-learning', '/nlp', '/computer-vision', '/ai-automation', '/quantum-ai'
  ];

  const itServices = [
    '/it-services', '/cloud-services', '/cybersecurity', '/devops', '/database-services',
    '/network-infrastructure', '/it-support', '/it-infrastructure', '/it-consulting',
    '/analytics-tools', '/api-docs', '/api', '/autonomous-systems', '/blockchain',
    '/blockchain-web3', '/business-apps', '/business-intelligence', '/careers',
    '/compliance', '/consultation', '/cookies', '/database', '/demo', '/developer-tools',
    '/enterprise', '/expense-tracker', '/gdpr', '/iot-edge-computing', '/iot-edge',
    '/marketing-tools', '/micro-saas', '/networking', '/news', '/offline', '/productivity',
    '/quantum-computing', '/robotics', '/security', '/services-advertising', '/sitemap',
    '/smart-analytics', '/status', '/support', '/system-status', '/task-manager-pro',
    '/team', '/terms'
  ];

  const blogPosts = [
    '/blog/agent-release-runbooks-v2-2026',
    '/blog/ai-2025-2026-mega-trends-breakthrough',
    '/blog/ai-2025-january-advanced-ai-revolution',
    '/blog/ai-2025-january-cutting-edge-trends-breakthrough',
    '/blog/ai-2025-march-autonomous-enterprise-operations-revolution',
    '/blog/ai-2025-sept-30-operational-trust-scorecards-v3',
    '/blog/ai-2026-adaptive-neural-architectures-breakthrough',
    '/blog/ai-2026-advanced-neural-optimization-revolution',
    '/blog/ai-2026-april-revolutionary-breakthrough',
    '/blog/ai-2026-april-ultimate-breakthrough-revolution',
    '/blog/ai-2026-autonomous-agent-factories',
    '/blog/ai-2026-autonomous-business-intelligence-breakthrough',
    '/blog/ai-2026-autonomous-business-intelligence-mega-breakthrough',
    '/blog/ai-2026-autonomous-enterprise-architecture',
    '/blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough',
    '/blog/ai-2026-consensus-intelligence-breakthrough',
    '/blog/ai-2026-enterprise-automation-revolutionary-breakthrough',
    '/blog/ai-2026-enterprise-breakthrough',
    '/blog/ai-2026-february-mega-breakthrough-revolution',
    '/blog/ai-2026-february-ultimate-consciousness-breakthrough',
    '/blog/ai-2026-hyperconscious-computing-revolution',
    '/blog/ai-autonomous-business-systems-2026',
    '/blog/ai-cost-optimization-breakthrough-2026',
    '/blog/ai-enterprise-transformation-2025',
    '/blog/ai-enterprise-transformation-ultimate-guide-2025',
    '/blog/ai-innovation-labs-product-development-2025',
    '/blog/ai-powered-autonomous-business-processes-2026',
    '/blog/ai-trends-2026-future-enterprise-transformation'
  ];

  const allPages = [
    ...staticPages,
    ...aiServices.map(url => ({ url, priority: '0.7', changefreq: 'monthly' })),
    ...itServices.map(url => ({ url, priority: '0.6', changefreq: 'monthly' })),
    ...blogPosts.map(url => ({ url, priority: '0.5', changefreq: 'weekly' }))
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
Allow: /ai-services/
Allow: /it-services/
Allow: /blog/
Allow: /case-studies/
Allow: /about/
Allow: /contact/
Allow: /pricing/

# Block common bot traps
Disallow: /*?*
Disallow: /*&*
Disallow: /*#
Disallow: /*.json$
Disallow: /*.xml$
Disallow: /*.txt$
Disallow: /*.pdf$
Disallow: /*.doc$
Disallow: /*.docx$
Disallow: /*.xls$
Disallow: /*.xlsx$
Disallow: /*.ppt$
Disallow: /*.pptx$`;
};