import React from 'react';

interface SitemapPage {
  url: string;
  title: string;
  description: string;
  lastModified: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  category: string;
}

interface SitemapGeneratorProps {
  baseUrl?: string;
  showControls?: boolean;
}

export function SitemapGenerator({ baseUrl = 'https://ziontechgroup.com', showControls = false }: SitemapGeneratorProps) {
  // Comprehensive sitemap data
  const sitemapPages: SitemapPage[] = [
    // Main pages
    {
      url: '/',
      title: 'Home',
      description: 'Zion Tech Group - Leading AI & Technology Solutions',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1.0,
      category: 'Main'
    },
    {
      url: '/about',
      title: 'About Us',
      description: 'Learn about Zion Tech Group and our mission',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
      category: 'Company'
    },
    {
      url: '/contact',
      title: 'Contact Us',
      description: 'Get in touch with our team',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9,
      category: 'Company'
    },
    {
      url: '/services',
      title: 'Services',
      description: 'Our comprehensive service offerings',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
      category: 'Services'
    },

    // AI Services
    {
      url: '/ai-services',
      title: 'AI Services',
      description: 'Artificial Intelligence solutions and services',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
      category: 'AI Services'
    },
    {
      url: '/services/ai-business-intelligence',
      title: 'AI Business Intelligence',
      description: 'Advanced analytics and ML insights',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
      category: 'AI Services'
    },
    {
      url: '/services/ai-compliance-assistant',
      title: 'AI Compliance Assistant',
      description: 'Automated regulatory compliance',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
      category: 'AI Services'
    },
    {
      url: '/services/ai-sales-copilot',
      title: 'AI Sales Copilot',
      description: 'Intelligent sales optimization',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
      category: 'AI Services'
    },

    // IT Services
    {
      url: '/it-services',
      title: 'IT Services',
      description: 'Information Technology solutions',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
      category: 'IT Services'
    },
    {
      url: '/services/cloud-devops',
      title: 'Cloud DevOps',
      description: 'Infrastructure automation and scaling',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
      category: 'IT Services'
    },
    {
      url: '/services/it-infrastructure',
      title: 'IT Infrastructure',
      description: 'Enterprise infrastructure solutions',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
      category: 'IT Services'
    },

    // Micro SAAS
    {
      url: '/micro-saas',
      title: 'Micro SAAS',
      description: 'Scalable software solutions',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.9,
      category: 'Micro SAAS'
    },
    {
      url: '/services/micro-crm',
      title: 'Micro CRM',
      description: 'Customer relationship management',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
      category: 'Micro SAAS'
    },

    // Cybersecurity
    {
      url: '/services/ai-cybersecurity-platform',
      title: 'AI Cybersecurity Platform',
      description: 'Advanced AI-powered security',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
      category: 'Cybersecurity'
    },
    {
      url: '/services/zero-trust-network-access',
      title: 'Zero Trust Network Access',
      description: 'Modern security architecture',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
      category: 'Cybersecurity'
    },

    // Quantum Computing
    {
      url: '/services/quantum-computing',
      title: 'Quantum Computing',
      description: 'Next-gen computational power',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
      category: 'Quantum'
    },
    {
      url: '/services/ai-quantum-hybrid-platform',
      title: 'AI Quantum Hybrid Platform',
      description: 'Quantum-AI integration',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
      category: 'Quantum'
    },

    // Digital Transformation
    {
      url: '/services/digital-transformation',
      title: 'Digital Transformation',
      description: 'Strategic technology consulting',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
      category: 'Digital'
    },
    {
      url: '/it-consulting',
      title: 'IT Consulting',
      description: 'Technology strategy & planning',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
      category: 'Digital'
    },

    // Additional pages
    {
      url: '/blog',
      title: 'Blog',
      description: 'Latest insights and updates',
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 0.7,
      category: 'Content'
    },
    {
      url: '/careers',
      title: 'Careers',
      description: 'Join our team',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.6,
      category: 'Company'
    },
    {
      url: '/partners',
      title: 'Partners',
      description: 'Strategic partnerships',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.6,
      category: 'Company'
    },
    {
      url: '/pricing',
      title: 'Pricing',
      description: 'Service pricing and plans',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
      category: 'Business'
    },
    {
      url: '/faq',
      title: 'FAQ',
      description: 'Frequently asked questions',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.5,
      category: 'Support'
    },
    {
      url: '/help',
      title: 'Help Center',
      description: 'Support and documentation',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.6,
      category: 'Support'
    },
    {
      url: '/privacy',
      title: 'Privacy Policy',
      description: 'Privacy and data protection',
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.3,
      category: 'Legal'
    },
    {
      url: '/terms',
      title: 'Terms of Service',
      description: 'Terms and conditions',
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 0.3,
      category: 'Legal'
    }
  ];

  // Generate XML sitemap
  const generateXMLSitemap = (): string => {
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
    const urlsetStart = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    const urlsetEnd = '</urlset>';

    const urls = sitemapPages.map(page => {
      return `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    }).join('\n');

    return `${xmlHeader}
${urlsetStart}
${urls}
${urlsetEnd}`;
  };

  // Generate HTML sitemap
  const generateHTMLSitemap = (): JSX.Element => {
    const categories = [...new Set(sitemapPages.map(page => page.category))];
    
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
          <p className="text-xl text-gray-600">
            Complete overview of all pages on Zion Tech Group
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(category => {
            const categoryPages = sitemapPages.filter(page => page.category === category);
            
            return (
              <div key={category} className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                  {category}
                </h2>
                <ul className="space-y-2">
                  {categoryPages.map(page => (
                    <li key={page.url}>
                      <a
                        href={page.url}
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-200 block py-1"
                      >
                        {page.title}
                      </a>
                      <p className="text-sm text-gray-600 mt-1">
                        {page.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <a
            href="/sitemap.xml"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Download XML Sitemap
          </a>
        </div>
      </div>
    );
  };

  // Download XML sitemap
  const downloadXMLSitemap = () => {
    const xmlContent = generateXMLSitemap();
    const blob = new Blob([xmlContent], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sitemap.xml';
    link.click();
    URL.revokeObjectURL(url);
  };

  // Copy XML sitemap to clipboard
  const copyXMLSitemap = async () => {
    const xmlContent = generateXMLSitemap();
    try {
      await navigator.clipboard.writeText(xmlContent);
      alert('XML sitemap copied to clipboard!');
    } catch (error) {
      console.error('Failed to copy sitemap:', error);
      alert('Failed to copy sitemap. Please download it instead.');
    }
  };

  if (!showControls) {
    return generateHTMLSitemap();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Sitemap Generator</h1>
        <p className="text-lg text-gray-600">
          Generate and manage your website sitemap
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Sitemap Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{sitemapPages.length}</div>
            <div className="text-sm text-gray-600">Total Pages</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {[...new Set(sitemapPages.map(page => page.category))].length}
            </div>
            <div className="text-sm text-gray-600">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {sitemapPages.filter(page => page.priority === 1.0).length}
            </div>
            <div className="text-sm text-gray-600">High Priority</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">
              {sitemapPages.filter(page => page.changeFrequency === 'daily').length}
            </div>
            <div className="text-sm text-gray-600">Daily Updates</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Actions</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={downloadXMLSitemap}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Download XML Sitemap
          </button>
          <button
            onClick={copyXMLSitemap}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
          >
            Copy XML to Clipboard
          </button>
          <a
            href="/sitemap"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 text-center"
          >
            View HTML Sitemap
          </a>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Sitemap Preview</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  URL
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Frequency
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sitemapPages.map((page, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600">
                    <a href={page.url} className="hover:underline">
                      {page.url}
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {page.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {page.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {page.priority}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {page.changeFrequency}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Export utility functions
export const sitemapUtils = {
  generateXMLSitemap: (baseUrl: string = 'https://ziontechgroup.com') => {
    const sitemapPages: SitemapPage[] = [
      // ... same pages as above
    ];
    
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
    const urlsetStart = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    const urlsetEnd = '</urlset>';

    const urls = sitemapPages.map(page => {
      return `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    }).join('\n');

    return `${xmlHeader}
${urlsetStart}
${urls}
${urlsetEnd}`;
  },

  getSitemapPages: () => sitemapPages,
  
  validateSitemap: (xml: string): boolean => {
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(xml, 'text/xml');
      const parseError = doc.querySelector('parsererror');
      return !parseError;
    } catch (error) {
      return false;
    }
  }
};