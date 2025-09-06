import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://ziontechgroup.com';
  
  const routes = [
    '',
    '/about',
    '/services',
    '/solutions',
    '/contact',
    '/privacy',
    '/terms',
    '/cookies',
    '/accessibility',
    '/news',
    '/events',
    '/research',
    '/case-studies',
    '/community',
    '/pricing',
    '/docs',
    '/api',
    '/dashboard',
    '/auth/signin',
    '/auth/signup',
    '/multiverse/launch',
    '/admin/instances',
    '/admin/deployments',
    '/admin/os-deploy',
    '/ai-services',
    '/ai-autonomous-research-assistant',
    '/ai-consciousness-evolution',
    '/quantum-services',
    '/space-tech',
    '/cybersecurity',
    '/enterprise-it',
    '/zion-os'
  ];

  const aiServices = [
    '/services/ai',
    '/services/ai-solutions',
    '/services/ai-automation',
    '/services/blockchain',
    '/services/blockchain-web3',
    '/services/it',
    '/services/it-solutions',
    '/services/saas',
    '/services/micro-saas'
  ];

  const quantumServices = [
    '/quantum-neural-network-platform',
    '/autonomous-business-operations-platform',
    '/ai-powered-it-asset-management',
    '/advanced-cybersecurity-suite',
    '/advanced-ai-automation-services'
  ];

  const networkServices = [
    '/network-optimization',
    '/cloud-infrastructure',
    '/edge-computing'
  ];

  const complianceServices = [
    '/soc2-compliance-automation'
  ];

  const allRoutes = [
    ...routes,
    ...aiServices,
    ...quantumServices,
    ...networkServices,
    ...complianceServices
  ];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8
  }));
}