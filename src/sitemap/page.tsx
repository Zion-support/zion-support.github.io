import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SitemapPage: React.FC = () => {
  const mainPages = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Services', url: '/services' },
    { name: 'Contact', url: '/contact' },
    { name: 'Blog', url: '/blog' },
    { name: 'Case Studies', url: '/case-studies' }
  ];

  const aiServices = [
    { name: 'AI Services', url: '/ai-services' },
    { name: 'AI Marketing', url: '/ai-marketing' },
    { name: 'AI Healthcare', url: '/ai-healthcare' },
    { name: 'AI Fintech', url: '/ai-fintech' },
    { name: 'AI Content Generation', url: '/ai-content-generation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity' },
    { name: 'AI Customer Support', url: '/ai-customer-support' },
    { name: 'AI CRM', url: '/ai-crm' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation' }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services' },
    { name: 'IT Infrastructure', url: '/it-infrastructure' },
    { name: 'Cybersecurity', url: '/cybersecurity' },
    { name: 'Cloud Services', url: '/cloud-services' },
    { name: 'DevOps', url: '/devops' },
    { name: 'Database', url: '/database' },
    { name: 'Networking', url: '/networking' }
  ];

  const companyPages = [
    { name: 'Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'News', url: '/news' },
    { name: 'Support', url: '/support' },
    { name: 'Pricing', url: '/pricing' },
    { name: 'Enterprise', url: '/enterprise' }
  ];

  const legalPages = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Security', url: '/security' },
    { name: 'Compliance', url: '/compliance' }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center neon-text">
              Sitemap
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Main Pages */}
              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">Main Pages</h2>
                <ul className="space-y-3">
                  {mainPages.map((page, index) => (
                    <li key={index}>
                      <a
                        href={page.url}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                      >
                        {page.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI Services */}
              <div>
                <h2 className="text-2xl font-bold text-purple-400 mb-6">AI Services</h2>
                <ul className="space-y-3">
                  {aiServices.map((service, index) => (
                    <li key={index}>
                      <a
                        href={service.url}
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* IT Services */}
              <div>
                <h2 className="text-2xl font-bold text-blue-400 mb-6">IT Services</h2>
                <ul className="space-y-3">
                  {itServices.map((service, index) => (
                    <li key={index}>
                      <a
                        href={service.url}
                        className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company & Legal */}
              <div>
                <h2 className="text-2xl font-bold text-green-400 mb-6">Company & Legal</h2>
                <ul className="space-y-3">
                  {companyPages.map((page, index) => (
                    <li key={index}>
                      <a
                        href={page.url}
                        className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                      >
                        {page.name}
                      </a>
                    </li>
                  ))}
                  {legalPages.map((page, index) => (
                    <li key={index}>
                      <a
                        href={page.url}
                        className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                      >
                        {page.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default SitemapPage;