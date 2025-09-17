import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ziontechgroup.com';
  
  const routes = [
    '',
    '/about',
    '/services',
    '/services/ai',
    '/services/blockchain',
    '/services/it',
    '/ai-services',
    '/quantum-services',
    '/cybersecurity',
    '/enterprise-it',
    '/research',
    '/space-tech',
    '/case-studies',
    '/news',
    '/events',
    '/docs',
    '/contact',
    '/privacy',
    '/terms',
    '/pricing',
    '/careers',
    '/blog'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}