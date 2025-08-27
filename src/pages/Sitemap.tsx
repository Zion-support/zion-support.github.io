import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Brain, Shield, Cloud, Rocket, Cpu, Lock, Heart, Users, Code, Truck, Building, ShoppingCart, BookOpen, MessageCircle, Target, Lightbulb, FileText, BarChart3, Network, Server, Eye, TestTube, Handshake, HelpCircle, TrendingUp, Award } from 'lucide-react';
import SEO from '../components/SEO';

const Sitemap = () => {
  const siteStructure = {
    main: [
      { name: 'Home', path: '/', description: 'Welcome to Zion Tech Group' },
      { name: 'About', path: '/about', description: 'Learn about our company and mission' },
      { name: 'Contact', path: '/contact', description: 'Get in touch with our team' },
      { name: 'News', path: '/news', description: 'Latest updates and announcements' },
      { name: 'Blog', path: '/blog', description: 'Insights and analysis articles' },
      { name: 'Partners', path: '/partners', description: 'Strategic partnerships and alliances' },
      { name: 'Careers', path: '/careers', description: 'Join our team of experts' },
      { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
      { name: 'Sitemap', path: '/sitemap', description: 'Complete site navigation' },
      { name: 'Green IT', path: '/green-it', description: 'Sustainability initiatives' },
      { name: 'Marketplace', path: '/marketplace', description: 'Browse our services and solutions' },
      { name: 'Request Quote', path: '/request-quote', description: 'Get a custom quote' },
      { name: 'Help Center', path: '/help-center', description: 'Support and resources' },
      { name: 'Dashboard', path: '/dashboard', description: 'Client portal and tools' },
      { name: 'Login', path: '/login', description: 'Access your account' },
      { name: 'Sign Up', path: '/signup', description: 'Create a new account' },
    ],
    services: [
      { name: 'Services Overview', path: '/services', description: 'All our technology services' },
      { name: 'AI & Analytics', path: '/services', description: 'Machine learning and data insights' },
      { name: 'Quantum Computing', path: '/services', description: 'Quantum AI and optimization' },
      { name: 'Cybersecurity', path: '/services', description: 'AI-powered security solutions' },
      { name: 'Cloud & DevOps', path: '/services/cloud-devops', description: 'Infrastructure and deployment' },
      { name: 'IoT & Edge', path: '/services', description: 'Connected devices and edge computing' },
      { name: 'Blockchain', path: '/services', description: 'Decentralized solutions' },
      { name: 'Digital Twin', path: '/services/digital-twin', description: 'Virtual replica technology' },
      { name: 'Data Analytics', path: '/services/data-analytics', description: 'Business intelligence and insights' },
      { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Enterprise infrastructure' },
      { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'AI-powered analytics' },
    ],
    enhancedServices: [
      { name: 'Enhanced Services', path: '/enhanced-services', description: 'Advanced service offerings' },
      { name: 'Services Overview 2027', path: '/services/overview', description: 'Comprehensive services overview' },
      { name: 'Pricing Guide 2027', path: '/services/pricing', description: 'Detailed pricing information' },
      { name: 'Services Showcase 2027', path: '/services/showcase', description: 'Innovative services showcase' },
      { name: 'Ultimate Services 2025', path: '/ultimate-services-2025', description: 'Ultimate service offerings' },
      { name: 'Comprehensive Services 2025', path: '/comprehensive-services-2025', description: 'Complete service portfolio' },
      { name: 'Enhanced Zion Services 2025', path: '/enhanced-zion-services-2025', description: 'Enhanced Zion services' },
      { name: 'Marketing 2025', path: '/zion-tech-group-marketing-2025', description: 'Marketing solutions' },
      { name: 'Innovative Services 2028', path: '/innovative-services-2028', description: 'Future service offerings' },
    ],
    solutions: [
      { name: 'Solutions Overview', path: '/solutions', description: 'All our technology solutions' },
      { name: 'Industry Solutions', path: '/solutions', description: 'Sector-specific solutions' },
      { name: 'Custom Solutions', path: '/solutions', description: 'Tailored technology solutions' },
      { name: 'Integration Solutions', path: '/solutions', description: 'System integration services' },
    ],
    research: [
      { name: 'Research & Development', path: '/research-development', description: 'R&D initiatives and projects' },
      { name: 'Innovation Labs', path: '/research-development', description: 'Cutting-edge research' },
      { name: 'Technology Research', path: '/research-development', description: 'Emerging technology research' },
    ],
    support: [
      { name: 'Help Center', path: '/help-center', description: 'Self-service support' },
      { name: 'Contact Support', path: '/contact', description: 'Get help from our team' },
      { name: 'Documentation', path: '/help-center', description: 'Technical guides and resources' },
      { name: 'Training', path: '/help-center', description: 'Skill development programs' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy', description: 'Data protection and privacy' },
      { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
      { name: 'Cookie Policy', path: '/privacy', description: 'Cookie usage information' },
      { name: 'Security', path: '/privacy', description: 'Security practices and measures' },
    ],
  };

  const iconMap = {
    main: Zap,
    services: Brain,
    enhancedServices: Rocket,
    solutions: Target,
    research: TestTube,
    support: MessageCircle,
    legal: Shield,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Sitemap - Zion Tech Group"
        description="Complete site navigation structure for Zion Tech Group's technology solutions and services."
      />
      
      <div className="container-responsive py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full mb-6">
            <Zap className="w-10 h-10 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-6">
            Site Navigation
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Complete overview of all pages and sections available on Zion Tech Group's website
          </p>
        </div>

        {/* Sitemap Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {Object.entries(siteStructure).map(([category, items]) => {
            const IconComponent = iconMap[category as keyof typeof iconMap];
            return (
              <div key={category} className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h2 className="text-xl font-semibold text-white capitalize">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h2>
                </div>
                
                <div className="space-y-3">
                  {items.map((item, index) => (
                    <div key={index} className="group">
                      <Link
                        to={item.path}
                        className="block p-3 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group-hover:translate-x-1 transform"
                      >
                        <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                          {item.name}
                        </div>
                        <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                          {item.description}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Navigation */}
        <div className="mt-16 bg-slate-800/30 border border-slate-700/50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">
            Quick Navigation
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {siteStructure.main.slice(0, 8).map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center justify-center p-4 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-all duration-200 text-white font-medium hover:text-cyan-400"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Need Help Finding Something?
          </h3>
          <p className="text-slate-300 mb-6">
            Can't find what you're looking for? Our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105"
            >
              Contact Us
            </Link>
            <Link
              to="/help-center"
              className="inline-flex items-center px-6 py-3 bg-slate-700/50 text-white font-medium rounded-lg hover:bg-slate-600/50 transition-all duration-200"
            >
              Help Center
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;