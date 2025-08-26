import React from 'react';
import { Link } from 'react-router-dom';

export default function Sitemap() {
  const siteStructure = {
    main: [
      { name: 'Home', path: '/', description: 'Main landing page' },
      { name: 'About', path: '/about', description: 'Company information and team' },
      { name: 'Services', path: '/services', description: 'Main services overview' },
      { name: 'Contact', path: '/contact', description: 'Contact information and form' },
      { name: 'Blog', path: '/blog', description: 'Company blog and insights' },
      { name: 'Careers', path: '/careers', description: 'Job opportunities' },
      { name: 'Pricing', path: '/pricing', description: 'Service pricing information' },
      { name: 'Support', path: '/support', description: 'Customer support and help' },
      { name: 'Team', path: '/team', description: 'Our team members' },
      { name: 'News', path: '/news', description: 'Company news and updates' },
      { name: 'Partners', path: '/partners', description: 'Partnership opportunities' },
      { name: 'Request Quote', path: '/request-quote', description: 'Get a custom quote' }
    ],
    services: [
      { name: 'AI Solutions', path: '/services/ai', description: 'Artificial Intelligence services' },
      { name: 'Cloud & DevOps', path: '/services/cloud', description: 'Cloud infrastructure and DevOps' },
      { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Security solutions' },
      { name: 'IT Infrastructure', path: '/services/infrastructure', description: 'Infrastructure management' },
      { name: 'Digital Transformation', path: '/services/transformation', description: 'Business transformation' },
      { name: 'Consulting', path: '/services/consulting', description: 'Technology advisory' },
      { name: 'AI Matcher', path: '/match', description: 'AI-powered service matching' },
      { name: 'Zion Hire AI', path: '/zion-hire-ai', description: 'AI hiring solutions' }
    ],
    solutions: [
      { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Enterprise-grade solutions' },
      { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare technology' },
      { name: 'Financial Solutions', path: '/solutions/financial', description: 'Financial technology' },
      { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', description: 'Manufacturing technology' },
      { name: 'Retail Solutions', path: '/solutions/retail', description: 'Retail technology' },
      { name: 'Government Solutions', path: '/solutions/government', description: 'Government technology' },
      { name: 'Space Technology', path: '/space-tech', description: 'Space and aerospace technology' },
      { name: 'Quantum Technology', path: '/quantum-technology', description: 'Quantum computing solutions' },
      { name: 'Green IT', path: '/green-it', description: 'Sustainable technology solutions' }
    ],
    resources: [
      { name: 'Case Studies', path: '/case-studies', description: 'Success stories and case studies' },
      { name: 'White Papers', path: '/white-papers', description: 'Technical white papers' },
      { name: 'Webinars', path: '/webinars', description: 'Educational webinars' },
      { name: 'Tutorials', path: '/tutorials', description: 'How-to guides and tutorials' },
      { name: 'Documentation', path: '/docs', description: 'Technical documentation' },
      { name: 'Research & Development', path: '/research-development', description: 'R&D initiatives' },
      { name: 'Zero Trust Architecture', path: '/zero-trust-network-architecture', description: 'Security architecture' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy', description: 'Privacy policy and data protection' },
      { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
      { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage policy' },
      { name: 'GDPR Compliance', path: '/gdpr', description: 'GDPR compliance information' },
      { name: 'Security', path: '/security', description: 'Security policies and practices' },
      { name: 'Compliance', path: '/compliance', description: 'Compliance certifications' }
    ],
    advanced: [
      { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', description: 'Autonomous AI systems' },
      { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', description: 'Quantum AI platform' },
      { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', description: 'SOC2 compliance automation' },
      { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', description: '5G enterprise technology' },
      { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', description: 'AI-powered asset management' },
      { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', description: 'Business automation' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Site Map
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete overview of all pages and sections available on Zion Tech Group website
          </p>
        </div>

        {/* Sitemap Content */}
        <div className="space-y-12">
          {Object.entries(siteStructure).map(([category, items]) => (
            <div key={category} className="bg-slate-800/50 rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6 capitalize">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item) => (
                  <div key={item.path} className="bg-slate-700/50 rounded-lg p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      <Link 
                        to={item.path} 
                        className="hover:text-blue-400 transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {item.description}
                    </p>
                    <Link 
                      to={item.path}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300 inline-flex items-center"
                    >
                      Visit Page
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Navigation */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/50 rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Navigation</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Back to Home
              </Link>
              <Link
                to="/services"
                className="border-2 border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View Services
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}