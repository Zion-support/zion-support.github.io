import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Briefcase, 
  Users, 
  Phone, 
  FileText, 
  Shield, 
  Brain, 
  Cpu,
  Cloud,
  Globe,
  Rocket,
  Heart,
  Building,
  ShoppingCart,
  DollarSign,
  Factory,
  Award,
  Mail,
  ArrowRight
} from 'lucide-react';

export default function Sitemap() {
  const mainPages = [
    { path: '/', title: 'Home', description: 'Welcome to Zion Tech Group', icon: Home },
    { path: '/about', title: 'About Us', description: 'Learn about our company and mission', icon: Users },
    { path: '/team', title: 'Our Team', description: 'Meet our talented team members', icon: Users },
    { path: '/mission', title: 'Our Mission', description: 'Discover our mission and vision', icon: Award },
    { path: '/contact', title: 'Contact Us', description: 'Get in touch with our team', icon: Phone },
    { path: '/careers', title: 'Careers', description: 'Join our growing team', icon: Users }
  ];

  const servicePages = [
    { path: '/services', title: 'All Services', description: 'Comprehensive service overview', icon: Briefcase },
    { path: '/services/ai-autonomous-systems', title: 'AI Autonomous Systems', description: 'Advanced AI solutions', icon: Brain },
    { path: '/services/ai-business-intelligence', title: 'AI Business Intelligence', description: 'Data-driven insights', icon: Brain },
    { path: '/services/cybersecurity', title: 'Cybersecurity Services', description: 'Security and compliance', icon: Shield },
    { path: '/services/quantum-technology', title: 'Quantum Technology', description: 'Next-gen computing', icon: Cpu },
    { path: '/services/it-infrastructure', title: 'IT Infrastructure', description: 'Complete IT solutions', icon: Cloud },
    { path: '/micro-saas-services', title: 'Micro SAAS Solutions', description: 'Custom software development', icon: Cpu }
  ];

  const solutionPages = [
    { path: '/solutions/enterprise', title: 'Enterprise Solutions', description: 'Large-scale business transformation', icon: Building },
    { path: '/solutions/healthcare', title: 'Healthcare Solutions', description: 'Medical technology innovation', icon: Heart },
    { path: '/solutions/financial', title: 'Financial Solutions', description: 'Fintech and banking solutions', icon: DollarSign },
    { path: '/solutions/manufacturing', title: 'Manufacturing Solutions', description: 'Smart manufacturing', icon: Factory },
    { path: '/solutions/retail', title: 'Retail Solutions', description: 'Digital retail transformation', icon: ShoppingCart }
  ];

  const technologyPages = [
    { path: '/quantum-neural-network-platform', title: 'Quantum Neural Networks', description: 'Quantum-powered AI', icon: Brain },
    { path: '/ai-autonomous-business-manager', title: 'AI Business Manager', description: 'Autonomous business operations', icon: Brain },
    { path: '/ai-autonomous-research-assistant', title: 'AI Research Assistant', description: 'Research automation', icon: Brain },
    { path: '/autonomous-business-operations-platform', title: 'Autonomous Business Platform', description: 'Self-operating systems', icon: Rocket },
    { path: '/ai-powered-it-asset-management', title: 'AI Asset Management', description: 'Intelligent IT management', icon: Cloud }
  ];

  const resourcePages = [
    { path: '/pricing', title: 'Pricing', description: 'Transparent pricing plans', icon: DollarSign },
    { path: '/case-studies', title: 'Case Studies', description: 'Success stories and results', icon: FileText },
    { path: '/blog', title: 'Blog', description: 'Latest insights and updates', icon: FileText },
    { path: '/help', title: 'Help Center', description: 'Support and documentation', icon: FileText },
    { path: '/docs', title: 'Documentation', description: 'Technical documentation', icon: FileText },
    { path: '/support', title: 'Support', description: 'Technical support services', icon: Phone }
  ];

  const legalPages = [
    { path: '/privacy', title: 'Privacy Policy', description: 'Data protection and privacy', icon: Shield },
    { path: '/terms', title: 'Terms of Service', description: 'Service terms and conditions', icon: FileText },
    { path: '/cookies', title: 'Cookie Policy', description: 'Cookie usage information', icon: Shield },
    { path: '/accessibility', title: 'Accessibility', description: 'Accessibility commitment', icon: Users }
  ];

  const renderPageSection = (title: string, pages: any[], IconComponent: any) => (
    <div key={title} className="mb-8">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <IconComponent className="w-5 h-5 mr-2 text-cyan-400" />
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map((page) => (
          <Link
            key={page.path}
            to={page.path}
            className="block p-4 bg-gray-800/30 border border-gray-700 rounded-lg hover:border-cyan-500/50 transition-all duration-200 group"
          >
            <h4 className="font-medium text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200">
              {page.title}
            </h4>
            <p className="text-sm text-gray-400">{page.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Sitemap
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Navigate through all the pages and sections of our website to find exactly 
            what you're looking for.
          </p>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              {renderPageSection('Main Pages', mainPages, Home)}
              {renderPageSection('Services', servicePages, Briefcase)}
              {renderPageSection('Solutions', solutionPages, Building)}
            </div>

            {/* Right Column */}
            <div>
              {renderPageSection('Technology Platforms', technologyPages, Rocket)}
              {renderPageSection('Resources', resourcePages, FileText)}
              {renderPageSection('Legal & Support', legalPages, Shield)}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Quick Navigation
            </h2>
            <p className="text-gray-400">
              Popular destinations and frequently accessed pages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              to="/services"
              className="group p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Our Services</h3>
              <p className="text-sm text-gray-400">Explore our comprehensive service offerings</p>
            </Link>

            <Link
              to="/pricing"
              className="group p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Pricing Plans</h3>
              <p className="text-sm text-gray-400">Transparent pricing for all our services</p>
            </Link>

            <Link
              to="/contact"
              className="group p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Get in Touch</h3>
              <p className="text-sm text-gray-400">Contact our team for inquiries</p>
            </Link>

            <Link
              to="/careers"
              className="group p-6 bg-gray-800/50 border border-gray-700 rounded-xl hover:border-cyan-500/50 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Join Our Team</h3>
              <p className="text-sm text-gray-400">Career opportunities at Zion Tech Group</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Help Finding Something?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Can't find what you're looking for? Our team is here to help you navigate 
            our website and find the information you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <span>Contact Support</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/help"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              <span>Visit Help Center</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}