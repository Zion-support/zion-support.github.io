import React from 'react';

const Sitemap: React.FC = (): JSX.Element => {
  const mainPages = [
    { name: 'Home', href: '/', description: 'Main landing page' },
    { name: 'About', href: '/about', description: 'Company information and team' },
    { name: 'Contact', href: '/contact', description: 'Get in touch with us' },
  ];

  const servicePages = [
    { name: 'All Services 2029', href: '/comprehensive-services-2029', description: 'Complete portfolio of AI, IT & Micro SAAS' },
    { name: 'Pricing Guide', href: '/comprehensive-pricing-guide-2029', description: 'Transparent pricing with market comparisons' },
    { name: 'Innovative Services', href: '/innovative-services-showcase-2029', description: 'Cutting-edge technology solutions' },
    { name: 'Legacy Services', href: '/services', description: 'Traditional IT & development services' },
  ];

  const legalPages = [
    { name: 'Privacy Policy', href: '/privacy', description: 'How we handle your data' },
    { name: 'Terms of Service', href: '/terms', description: 'Legal terms and conditions' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            Sitemap
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Main Pages */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Main Pages</h2>
              <ul className="space-y-3">
                {mainPages.map((page) => (
                  <li key={page.href}>
                    <a 
                      href={page.href} 
                      className="text-blue-400 hover:text-blue-300 transition-colors block"
                    >
                      {page.name}
                    </a>
                    <p className="text-sm text-gray-400 mt-1">{page.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Pages */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Services</h2>
              <ul className="space-y-3">
                {servicePages.map((page) => (
                  <li key={page.href}>
                    <a 
                      href={page.href} 
                      className="text-blue-400 hover:text-blue-300 transition-colors block"
                    >
                      {page.name}
                    </a>
                    <p className="text-sm text-gray-400 mt-1">{page.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Pages */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Legal</h2>
              <ul className="space-y-3">
                {legalPages.map((page) => (
                  <li key={page.href}>
                    <a 
                      href={page.href} 
                      className="text-blue-400 hover:text-blue-300 transition-colors block"
                    >
                      {page.name}
                    </a>
                    <p className="text-sm text-gray-400 mt-1">{page.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">
              Can't find what you're looking for? Contact us for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Email Us
              </a>
              <a 
                href="tel:+13024640950"
                className="inline-flex items-center px-6 py-3 border border-blue-400 text-blue-400 font-medium rounded-lg hover:bg-blue-400 hover:text-white transition-colors"
              >
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;