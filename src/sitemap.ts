<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-055f
interface SitemapEntry {
  url: string;
  lastModified: Date;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0468
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0522
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-055f

export default function sitemap(): SitemapEntry[] {
  const baseUrl = 'https://ziontechgroup.com'
  
  const routes = [
    '',
    '/about',
    '/contact',
    '/services',
    '/ai-services',
    '/ai-marketing',
    '/ai-automation',
    '/ai-healthcare',
    '/ai-fintech',
    '/quantum-computing',
    '/micro-saas',
    '/ai-content-generation',
    '/it-infrastructure',
    '/ai-cybersecurity',
    '/ai-data-analytics',
    '/ai-ecommerce-solutions',
    '/ai-customer-support',
    '/ai-sales-automation',
    '/ai-workflow-automation',
    '/ai-data-visualization',
    '/ai-lead-generation',
    '/ai-document-processing',
    '/robotics',
    '/iot-edge-computing',
    '/blockchain-web3',
    '/business-intelligence',
    '/devops',
    '/ai-mobile-app-development',
    '/database',
    '/enterprise',
    '/careers',
    '/privacy',
    '/terms',
    '/support',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
