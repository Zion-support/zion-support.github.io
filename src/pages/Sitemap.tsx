import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function Sitemap() {
  const sitemapData = {
    mainPages: [
      { name: 'Home', path: '/', description: 'Zion Tech Group - AI, Cloud, and Technology Solutions' },
      { name: 'About Us', path: '/about', description: 'Learn about our company and mission' },
      { name: 'Contact', path: '/contact', description: 'Get in touch with our team' },
      { name: 'Services', path: '/services', description: 'Overview of all our services' },
      { name: 'Solutions', path: '/solutions', description: 'Industry and technology solutions' },
      { name: 'Company', path: '/company', description: 'Company information and resources' },
      { name: 'Resources', path: '/resources', description: 'Educational and informational resources' },
      { name: 'Support', path: '/help', description: 'Get help and support' },
      { name: 'Pricing', path: '/pricing', description: 'Service pricing and packages' },
      { name: 'Get Started', path: '/signup', description: 'Start your journey with Zion Tech Group' },
      { name: 'Request Quote', path: '/request-quote', description: 'Get a custom quote for your needs' },
      { name: 'Marketplace', path: '/marketplace', description: 'AI and technology marketplace' }
    ],
    aiServices: [
      { name: 'AI Enterprise Automation Platform', path: '/services/ai-enterprise-automation-platform' },
      { name: 'AI Enterprise Intelligence Platform', path: '/services/ai-enterprise-intelligence-platform' },
      { name: 'AI Data Analytics Platform', path: '/services/ai-data-analytics-platform' },
      { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence' },
      { name: 'AI Cybersecurity Platform', path: '/services/ai-cybersecurity-platform' },
      { name: 'AI Autonomous Research Assistant', path: '/services/ai-autonomous-research-assistant' },
      { name: 'AI Financial Trading Platform', path: '/services/ai-financial-trading-platform' },
      { name: 'AI Healthcare Platform', path: '/services/ai-healthcare-platform' },
      { name: 'AI Quantum Hybrid Platform', path: '/services/ai-quantum-hybrid-platform' },
      { name: 'AI Quantum Neural Network Platform', path: '/services/ai-quantum-neural-network-platform' },
      { name: 'AI Supply Chain Optimization', path: '/services/ai-supply-chain-optimization' },
      { name: 'AI Sales Copilot', path: '/services/ai-sales-copilot' },
      { name: 'AI Compliance Assistant', path: '/services/ai-compliance-assistant' },
      { name: 'AI Project Management Platform', path: '/services/ai-project-management-platform' },
      { name: 'AI Workflow Orchestrator', path: '/services/ai-workflow-orchestrator' },
      { name: 'AI Predictive Maintenance', path: '/services/ai-predictive-maintenance' },
      { name: 'AI HR Platform', path: '/services/ai-hr-platform' },
      { name: 'AI Financial Risk Management', path: '/services/ai-financial-trading-risk-management' },
      { name: 'AI Business Intelligence Dashboard', path: '/services/ai-business-intelligence-dashboard' },
      { name: 'AI Customer Support Automation', path: '/services/ai-customer-support-automation' },
      { name: 'AI Marketing Automation Platform', path: '/services/ai-marketing-automation-platform' },
      { name: 'AI Content Creation Studio', path: '/services/ai-content-creation-studio' },
      { name: 'AI Customer Experience Analytics', path: '/services/ai-customer-experience-analytics-platform' },
      { name: 'AI Autonomous Business Operations', path: '/services/ai-autonomous-business-operations-platform' },
      { name: 'AI Content Intelligence Platform', path: '/services/ai-content-intelligence-platform' },
      { name: 'AI Enterprise Resource Planning', path: '/services/ai-enterprise-resource-planning' },
      { name: 'AI Customer Success Platform', path: '/services/ai-customer-success-platform' },
      { name: 'AI Supply Chain Intelligence', path: '/services/ai-supply-chain-intelligence' }
    ],
    itServices: [
      { name: 'Infrastructure Management', path: '/services/it-infrastructure-management' },
      { name: 'Cloud & DevOps', path: '/services/cloud-devops' },
      { name: 'Cybersecurity', path: '/services/cybersecurity' },
      { name: 'Digital Transformation', path: '/services/digital-transformation' },
      { name: 'Quantum Computing', path: '/services/quantum-computing-solutions' },
      { name: 'Edge Computing', path: '/services/edge-computing-solutions' },
      { name: 'Blockchain Solutions', path: '/services/blockchain-enterprise-solutions' },
      { name: 'IoT & Edge Computing', path: '/services/iot-edge' },
      { name: 'Cloud FinOps', path: '/services/cloud-finops-optimizer' }
    ],
    solutions: [
      { name: 'Healthcare Solutions', path: '/solutions/healthcare' },
      { name: 'Financial Solutions', path: '/solutions/financial' },
      { name: 'Manufacturing Solutions', path: '/solutions/manufacturing' },
      { name: 'Government Solutions', path: '/solutions/government' },
      { name: 'Retail Solutions', path: '/solutions/retail' },
      { name: 'Enterprise Solutions', path: '/enterprise' },
      { name: 'Digital Transformation', path: '/digital-transformation' },
      { name: 'Cloud Solutions', path: '/cloud-solutions' },
      { name: 'Emerging Technology', path: '/emerging-tech' },
      { name: 'Quantum Edge Computing', path: '/solutions/quantum-edge-computing' },
      { name: 'AI Autonomous Business', path: '/solutions/ai-autonomous-business' },
      { name: 'Blockchain & Web3', path: '/solutions/blockchain-web3' },
      { name: 'IoT Edge Computing', path: '/solutions/iot-edge-computing' },
      { name: 'Space Technology', path: '/solutions/space-tech' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Leadership', path: '/leadership' },
      { name: 'Careers', path: '/careers' },
      { name: 'News', path: '/news' },
      { name: 'Events', path: '/events' },
      { name: 'Partners', path: '/partners' },
      { name: 'Contact', path: '/contact' }
    ],
    resources: [
      { name: 'Blog', path: '/blog' },
      { name: 'Documentation', path: '/docs' },
      { name: 'White Papers', path: '/white-papers' },
      { name: 'Webinars', path: '/webinars' },
      { name: 'Training', path: '/training' },
      { name: 'Research & Development', path: '/research-development' },
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Innovative Services Showcase 2026', path: '/innovative-services-showcase-2026' },
      { name: 'Comprehensive Services Showcase 2025', path: '/comprehensive-services-showcase-2025' },
      { name: 'Innovative AI Services Showcase 2025', path: '/innovative-ai-services-showcase-2025' },
      { name: 'Advanced Services Showcase 2025', path: '/advanced-services-showcase-2025' },
      { name: 'Comprehensive Pricing Guide 2025', path: '/comprehensive-pricing-guide-2025' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
      { name: 'Accessibility', path: '/accessibility' },
      { name: 'Security', path: '/security' },
      { name: 'Compliance', path: '/compliance' }
    ],
    showcases: [
      { name: 'Innovation Showcase 2026', path: '/innovative-services-showcase-2026' },
      { name: 'Comprehensive Showcase 2025', path: '/comprehensive-services-showcase-2025' },
      { name: 'AI Services Showcase 2025', path: '/innovative-ai-services-showcase-2025' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our services, solutions, and resources organized by category." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/sitemap" />
      </Helmet>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Website Sitemap
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Complete navigation guide to all pages, services, and resources on the Zion Tech Group website
          </p>
        </div>

        {/* Main Pages */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zion-cyan mb-6">Main Pages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sitemapData.mainPages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="block p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-700/50 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                  {page.name}
                </h3>
                <p className="text-sm text-zinc-400 mt-2">{page.description}</p>
                <span className="text-xs text-zion-cyan mt-2 block">{page.path}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* AI Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zion-cyan mb-6">AI & Automation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sitemapData.aiServices.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="block p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-700/50 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                  {service.name}
                </h3>
                <span className="text-xs text-zion-cyan mt-2 block">{service.path}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* IT Services */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zion-cyan mb-6">IT & Infrastructure Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sitemapData.itServices.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="block p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-700/50 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                  {service.name}
                </h3>
                <span className="text-xs text-zion-cyan mt-2 block">{service.path}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zion-cyan mb-6">Industry & Technology Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sitemapData.solutions.map((solution) => (
              <Link
                key={solution.path}
                to={solution.path}
                className="block p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-700/50 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                  {solution.name}
                </h3>
                <span className="text-xs text-zion-cyan mt-2 block">{solution.path}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Company */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zion-cyan mb-6">Company Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sitemapData.company.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="block p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-700/50 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                  {page.name}
                </h3>
                <span className="text-xs text-zion-cyan mt-2 block">{page.path}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zion-cyan mb-6">Resources & Documentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sitemapData.resources.map((resource) => (
              <Link
                key={resource.path}
                to={resource.path}
                className="block p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-700/50 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                  {resource.name}
                </h3>
                <span className="text-xs text-zion-cyan mt-2 block">{resource.path}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Legal */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zion-cyan mb-6">Legal & Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sitemapData.legal.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="block p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-700/50 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                  {page.name}
                </h3>
                <span className="text-xs text-zion-cyan mt-2 block">{page.path}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Showcases */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-zion-cyan mb-6">Innovation Showcases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sitemapData.showcases.map((showcase) => (
              <Link
                key={showcase.path}
                to={showcase.path}
                className="block p-4 bg-zinc-800/50 border border-zinc-700 rounded-lg hover:bg-zinc-700/50 transition-colors group"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                  {showcase.name}
                </h3>
                <span className="text-xs text-zion-cyan mt-2 block">{showcase.path}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-zinc-700">
          <p className="text-zinc-400 mb-4">
            Total Pages: {Object.values(sitemapData).flat().length}
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}