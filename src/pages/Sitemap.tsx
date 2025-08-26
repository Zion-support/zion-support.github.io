import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Shield, 
  Cloud, 
  Building, 
  Users, 
  Heart, 
  Rocket, 
  Code, 
  BarChart3, 
  Target, 
  Network, 
  Eye, 
  Clock, 
  Star, 
  Globe, 
  FileText, 
  Calendar, 
  Video, 
  Zap, 
  TrendingUp, 
  ShoppingCart,
  Lock,
  Database,
  Palette,
  Workflow,
  Home,
  Info,
  Phone,
  DollarSign,
  BookOpen,
  HelpCircle,
  Users as TeamIcon,
  Briefcase,
  Shield as SecurityIcon,
  Server,
  RefreshCw,
  MessageSquare
} from 'lucide-react';

const Sitemap = () => {
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', path: '/', description: 'Welcome to Zion Tech Group' },
        { name: 'About Us', path: '/about', description: 'Learn about our company' },
        { name: 'Team', path: '/team', description: 'Meet our team' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'Careers', path: '/careers', description: 'Join our team' },
        { name: 'Get Started', path: '/get-started', description: 'Start your journey with us' }
      ]
    },
    {
      title: 'Services',
      icon: Code,
      pages: [
        { name: 'AI Solutions', path: '/services/ai', description: 'AI-powered business solutions' },
        { name: 'Cloud & DevOps', path: '/services/cloud', description: 'Cloud infrastructure & automation' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Advanced security solutions' },
        { name: 'IT Infrastructure', path: '/services/infrastructure', description: 'Robust IT foundations' },
        { name: 'Digital Transformation', path: '/services/transformation', description: 'Business modernization' },
        { name: 'Consulting', path: '/services/consulting', description: 'Strategic technology guidance' }
      ]
    },
    {
      title: 'Solutions',
      icon: Building,
      pages: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Large-scale business solutions' },
        { name: 'Financial Solutions', path: '/solutions/financial', description: 'Fintech & banking solutions' },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare technology' },
        { name: 'Government Solutions', path: '/solutions/government', description: 'Public sector solutions' },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', description: 'Industry 4.0 solutions' },
        { name: 'Retail Solutions', path: '/solutions/retail', description: 'E-commerce & retail tech' }
      ]
    },
    {
      title: 'Resources',
      icon: BookOpen,
      pages: [
        { name: 'Blog', path: '/blog', description: 'Latest insights and updates' },
        { name: 'Events', path: '/events', description: 'Upcoming events and conferences' },
        { name: 'Webinars', path: '/webinars', description: 'Educational webinars' },
        { name: 'White Papers', path: '/white-papers', description: 'In-depth research papers' },
        { name: 'Tutorials', path: '/tutorials', description: 'Step-by-step guides' },
        { name: 'Research & Development', path: '/research-development', description: 'Our R&D initiatives' }
      ]
    },
    {
      title: 'Specialized Technologies',
      icon: Rocket,
      pages: [
        { name: 'Quantum Technology', path: '/quantum-technology', description: 'Quantum computing platforms' },
        { name: 'Space Tech', path: '/space-tech', description: 'Space technology solutions' },
        { name: 'Green IT', path: '/green-it', description: 'Sustainable technology solutions' }
      ]
    },
    {
      title: 'Support & Legal',
      icon: HelpCircle,
      pages: [
        { name: 'Help Center', path: '/help-center', description: 'Get help and support' },
        { name: 'Support', path: '/support', description: 'Technical support services' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Privacy Policy', path: '/privacy', description: 'Our privacy practices' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' }
      ]
    },
    {
      title: 'Business Tools',
      icon: BarChart3,
      pages: [
        { name: 'Pricing', path: '/pricing', description: 'Service pricing and plans' },
        { name: 'Service Comparison', path: '/service-comparison', description: 'Compare our services' },
        { name: 'Service Portfolio', path: '/service-portfolio', description: 'View our service portfolio' },
        { name: 'Service Recommendations', path: '/service-recommendations', description: 'Get personalized recommendations' },
        { name: 'Service Innovation Hub', path: '/service-innovation-hub', description: 'Innovation showcase' },
        { name: 'Services Showcase', path: '/services-showcase', description: 'Featured services' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Site Map
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore all the pages and resources available on the Zion Tech Group website. 
            Find exactly what you're looking for with our comprehensive site navigation.
          </p>
        </div>

        {/* Site Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {siteStructure.map((section) => (
            <div key={section.title} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg mr-3">
                  <section.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
              </div>
              
              <div className="space-y-3">
                {section.pages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    className="block p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
                  >
                    <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {page.name}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {page.description}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              to="/contact"
              className="flex flex-col items-center p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
            >
              <Phone className="h-8 w-8 text-blue-600 mb-2" />
              <span className="text-sm font-medium text-gray-900 group-hover:text-blue-600">Contact Us</span>
            </Link>
            
            <Link
              to="/get-started"
              className="flex flex-col items-center p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
            >
              <Rocket className="h-8 w-8 text-green-600 mb-2" />
              <span className="text-sm font-medium text-gray-900 group-hover:text-green-600">Get Started</span>
            </Link>
            
            <Link
              to="/pricing"
              className="flex flex-col items-center p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
            >
              <DollarSign className="h-8 w-8 text-purple-600 mb-2" />
              <span className="text-sm font-medium text-gray-900 group-hover:text-purple-600">Pricing</span>
            </Link>
            
            <Link
              to="/support"
              className="flex flex-col items-center p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
            >
              <HelpCircle className="h-8 w-8 text-orange-600 mb-2" />
              <span className="text-sm font-medium text-gray-900 group-hover:text-orange-600">Support</span>
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Finding Something?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help you navigate our website 
            and find the information you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Support
            </Link>
            <Link
              to="/help-center"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Visit Help Center
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;