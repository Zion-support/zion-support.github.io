import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Users, 
  Mail, 
  Heart, 
  Briefcase, 
  Settings, 
  Brain, 
  Shield, 
  Cloud, 
  TrendingUp, 
  ShoppingCart, 
  Package, 
  User, 
  FileText, 
  HelpCircle, 
  Map, 
  Activity, 
  Lock, 
  BookOpen, 
  Globe,
  ArrowRight
} from 'lucide-react';

const Sitemap = () => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { name: 'Home', path: '/', description: 'Welcome to Zion Tech Group' },
        { name: 'About', path: '/about', description: 'Learn about our company' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'Partners', path: '/partners', description: 'Our business partners' },
        { name: 'Careers', path: '/careers', description: 'Job opportunities' }
      ]
    },
    {
      title: 'Services',
      icon: Settings,
      links: [
        { name: 'All Services', path: '/services', description: 'Complete service catalog' },
        { name: 'AI Solutions', path: '/services/ai-solutions', description: 'Artificial intelligence services' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Security and compliance' },
        { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Quantum computing solutions' },
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', description: 'Cloud infrastructure' },
        { name: 'Digital Transformation', path: '/services/digital-transformation', description: 'Business transformation' }
      ]
    },
    {
      title: 'Solutions',
      icon: TrendingUp,
      links: [
        { name: 'Solutions Overview', path: '/solutions', description: 'Browse our solutions' },
        { name: 'AI Solutions', path: '/solutions/ai', description: 'AI-powered solutions' },
        { name: 'Quantum Solutions', path: '/solutions/quantum', description: 'Quantum computing solutions' },
        { name: 'IoT Solutions', path: '/solutions/iot', description: 'Internet of Things solutions' },
        { name: 'Blockchain Solutions', path: '/solutions/blockchain', description: 'Blockchain technology' }
      ]
    },
    {
      title: 'Marketplace',
      icon: ShoppingCart,
      links: [
        { name: 'Marketplace', path: '/marketplace', description: 'Browse our marketplace' },
        { name: 'Products', path: '/marketplace/products', description: 'Available products' },
        { name: 'Services', path: '/marketplace/services', description: 'Marketplace services' },
        { name: 'Talent', path: '/marketplace/talent', description: 'Find talent' }
      ]
    },
    {
      title: 'Support & Resources',
      icon: HelpCircle,
      links: [
        { name: 'Blog', path: '/blog', description: 'Latest insights and news' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Sitemap', path: '/sitemap', description: 'Complete site navigation' },
        { name: 'Help Center', path: '/help', description: 'Self-service support' },
        { name: 'System Status', path: '/status', description: 'Service status and uptime' },
        { name: 'Security', path: '/security', description: 'Security and compliance information' }
      ]
    },
    {
      title: 'Legal & Compliance',
      icon: Lock,
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy', description: 'Data protection and privacy' },
        { name: 'Terms of Service', path: '/terms-of-service', description: 'Terms and conditions' },
        { name: 'Cookie Policy', path: '/cookie-policy', description: 'Cookie usage information' },
        { name: 'GDPR Compliance', path: '/gdpr', description: 'Data protection compliance' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                <Map className="w-10 h-10" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Site Map
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Navigate through our comprehensive website structure and discover all the resources Zion Tech Group has to offer.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapSections.map((section, sectionIndex) => {
              const Icon = section.icon;
              return (
                <div key={sectionIndex} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                  </div>
                  
                  <div className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="border-l-2 border-gray-200 pl-4 hover:border-blue-500 transition-colors">
                        <Link
                          to={link.path}
                          className="block group"
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                {link.name}
                              </h3>
                              <p className="text-sm text-gray-600 mt-1">
                                {link.description}
                              </p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Navigation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get to the most important pages quickly with these direct links.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link
              to="/"
              className="group p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors text-center"
            >
              <Home className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-gray-900">Home</span>
            </Link>

            <Link
              to="/services"
              className="group p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors text-center"
            >
              <Settings className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-gray-900">Services</span>
            </Link>

            <Link
              to="/about"
              className="group p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors text-center"
            >
              <Users className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-gray-900">About</span>
            </Link>

            <Link
              to="/contact"
              className="group p-6 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors text-center"
            >
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-gray-900">Contact</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team is here to help you navigate our services and find the right solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sitemap;