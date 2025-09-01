import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Code, 
  Shield, 
  Brain, 
  Cloud, 
  Users, 
  FileText, 
  Mail,
  MapPin,
  Phone,
  Globe,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Search,
  Layers,
  BookOpen,
  Settings,
  Zap,
  Target,
  Palette,
  Database,
  Smartphone,
  Network,
  Lock,
  BarChart3,
  Rocket,
  Cpu,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  Star,
  CheckCircle,
  ArrowRight,
  Atom,
  Eye,
  Heart,
  Factory,
  ShoppingCart,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Truck,
  MessageCircle,
  HelpCircle,
  Gauge,
  Workflow
} from 'lucide-react';

const ComprehensiveSitemap: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['main-pages', 'core-services']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const mainPages = [
    { name: 'Home', path: '/', icon: Home, description: 'Main landing page' },
    { name: 'About Us', path: '/about', icon: Users, description: 'Company information and team' },
    { name: 'Services', path: '/services', icon: Code, description: 'Overview of all services' },
    { name: 'Solutions', path: '/solutions', icon: Target, description: 'Technology solutions showcase' },
    { name: 'Blog', path: '/blog', icon: FileText, description: 'Latest insights and articles' },
    { name: 'Contact', path: '/contact', icon: Mail, description: 'Get in touch with us' },
    { name: 'Pricing', path: '/pricing', icon: DollarSign, description: 'Service pricing and plans' },
    { name: 'Sitemap', path: '/sitemap', icon: MapPin, description: 'Complete website structure' }
  ];

  const coreServices = [
    {
      name: 'Custom Software Development',
      path: '/services/custom-software',
      description: 'Tailored software solutions',
      category: 'Development'
    },
    {
      name: 'AI & Machine Learning',
      path: '/services/ai-ml',
      description: 'Intelligent AI solutions',
      category: 'AI'
    },
    {
      name: 'Cybersecurity',
      path: '/services/cybersecurity',
      description: 'Security and compliance',
      category: 'Security'
    },
    {
      name: 'Cloud Solutions',
      path: '/services/cloud',
      description: 'Cloud infrastructure and DevOps',
      category: 'Cloud'
    },
    {
      name: 'Mobile Development',
      path: '/services/mobile',
      description: 'iOS and Android apps',
      category: 'Development'
    },
    {
      name: 'Data Analytics',
      path: '/services/analytics',
      description: 'Business intelligence and insights',
      category: 'Analytics'
    }
  ];

  const advancedServices = [
    {
      name: 'Quantum Computing Solutions',
      path: '/services/quantum',
      description: 'Next-generation quantum technology',
      category: 'Emerging Tech'
    },
    {
      name: 'Blockchain & Web3',
      path: '/services/blockchain',
      description: 'Decentralized applications',
      category: 'Emerging Tech'
    },
    {
      name: 'IoT & Edge Computing',
      path: '/services/iot',
      description: 'Internet of Things solutions',
      category: 'Emerging Tech'
    },
    {
      name: 'Space Technology',
      path: '/services/space-tech',
      description: 'Satellite and space solutions',
      category: 'Emerging Tech'
    },
    {
      name: 'Sustainable Technology',
      path: '/services/sustainable',
      description: 'Green technology solutions',
      category: 'Emerging Tech'
    }
  ];

  const industrySolutions = [
    {
      name: 'Healthcare Technology',
      path: '/solutions/healthcare',
      description: 'Healthcare IT solutions',
      category: 'Healthcare'
    },
    {
      name: 'Financial Services',
      path: '/solutions/financial',
      description: 'Fintech and banking solutions',
      category: 'Finance'
    },
    {
      name: 'Manufacturing & Logistics',
      path: '/solutions/manufacturing',
      description: 'Industrial automation',
      category: 'Manufacturing'
    },
    {
      name: 'Retail & E-commerce',
      path: '/solutions/retail',
      description: 'Digital retail transformation',
      category: 'Retail'
    },
    {
      name: 'Education Technology',
      path: '/solutions/education',
      description: 'EdTech platforms',
      category: 'Education'
    },
    {
      name: 'Government Solutions',
      path: '/solutions/government',
      description: 'Public sector technology',
      category: 'Government'
    }
  ];

  const marketingServices = [
    {
      name: 'AI-Powered Marketing Automation',
      path: '/services/marketing-automation',
      description: 'Intelligent marketing automation',
      category: 'Marketing'
    },
    {
      name: 'Customer Analytics Platform',
      path: '/services/customer-analytics',
      description: 'Advanced customer insights',
      category: 'Analytics'
    },
    {
      name: 'SEO & Content Optimization',
      path: '/services/seo-optimization',
      description: 'Search engine optimization',
      category: 'Marketing'
    },
    {
      name: 'Social Media Management',
      path: '/services/social-media',
      description: 'Social media automation',
      category: 'Marketing'
    },
    {
      name: 'Email Marketing Platform',
      path: '/services/email-marketing',
      description: 'Advanced email automation',
      category: 'Marketing'
    }
  ];

  const supportServices = [
    {
      name: 'Technical Support',
      path: '/support',
      description: '24/7 technical assistance',
      category: 'Support'
    },
    {
      name: 'Training & Consulting',
      path: '/training',
      description: 'Staff training and consulting',
      category: 'Support'
    },
    {
      name: 'Helpdesk Platform',
      path: '/helpdesk',
      description: 'Customer support system',
      category: 'Support'
    },
    {
      name: 'Documentation',
      path: '/docs',
      description: 'Technical documentation',
      category: 'Support'
    },
    {
      name: 'API Reference',
      path: '/api',
      description: 'API documentation and guides',
      category: 'Support'
    }
  ];

  const resources = [
    {
      name: 'Case Studies',
      path: '/case-studies',
      description: 'Success stories and examples',
      category: 'Resources'
    },
    {
      name: 'White Papers',
      path: '/white-papers',
      description: 'Industry research and insights',
      category: 'Resources'
    },
    {
      name: 'Webinars',
      path: '/webinars',
      description: 'Educational webinars and events',
      category: 'Resources'
    },
    {
      name: 'Video Tutorials',
      path: '/tutorials',
      description: 'Step-by-step video guides',
      category: 'Resources'
    },
    {
      name: 'Blog & Insights',
      path: '/blog',
      description: 'Latest industry insights',
      category: 'Resources'
    }
  ];

  const companyPages = [
    {
      name: 'About Zion Tech Group',
      path: '/about',
      description: 'Company overview and mission',
      category: 'Company'
    },
    {
      name: 'Our Team',
      path: '/about/team',
      description: 'Meet our leadership and experts',
      category: 'Company'
    },
    {
      name: 'Company History',
      path: '/about/history',
      description: 'Our journey and milestones',
      category: 'Company'
    },
    {
      name: 'Mission & Vision',
      path: '/about/mission',
      description: 'Our goals and values',
      category: 'Company'
    },
    {
      name: 'Careers',
      path: '/careers',
      description: 'Job opportunities and culture',
      category: 'Company'
    },
    {
      name: 'News & Press',
      path: '/news',
      description: 'Company updates and announcements',
      category: 'Company'
    },
    {
      name: 'Partners',
      path: '/partners',
      description: 'Strategic partnerships',
      category: 'Company'
    }
  ];

  const legalPages = [
    {
      name: 'Privacy Policy',
      path: '/privacy-policy',
      description: 'Data privacy and protection',
      category: 'Legal'
    },
    {
      name: 'Terms of Service',
      path: '/terms-of-service',
      description: 'Service terms and conditions',
      category: 'Legal'
    },
    {
      name: 'Cookie Policy',
      path: '/cookie-policy',
      description: 'Cookie usage and management',
      category: 'Legal'
    },
    {
      name: 'GDPR Compliance',
      path: '/gdpr',
      description: 'Data protection regulations',
      category: 'Legal'
    },
    {
      name: 'Accessibility',
      path: '/accessibility',
      description: 'Accessibility statement',
      category: 'Legal'
    }
  ];

  const contactInfo = [
    { name: 'Phone', value: '+1 (302) 464-0950', icon: Phone, link: 'tel:+13024640950' },
    { name: 'Email', value: 'kleber@ziontechgroup.com', icon: Mail, link: 'mailto:kleber@ziontechgroup.com' },
    { name: 'Address', value: '364 E Main St STE 1008, Middletown DE 19709', icon: MapPin, link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709' },
    { name: 'Website', value: 'https://ziontechgroup.com', icon: Globe, link: 'https://ziontechgroup.com' }
  ];

  const renderSection = (
    sectionId: string,
    title: string,
    icon: any,
    items: any[],
    isExpanded: boolean
  ) => (
    <div key={sectionId} className="bg-slate-800 rounded-xl border border-slate-600 overflow-hidden">
      <button
        onClick={() => toggleSection(sectionId)}
        className="w-full p-6 flex items-center justify-between hover:bg-slate-700 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
            <icon className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <span className="text-gray-400 text-sm">({items.length})</span>
        </div>
        {isExpanded ? (
          <ChevronDown className="w-6 h-6 text-gray-400" />
        ) : (
          <ChevronRight className="w-6 h-6 text-gray-400" />
        )}
      </button>
      
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
              >
                <Link
                  to={item.path}
                  className="block group"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {item.name}
                    </h4>
                    <span className="px-2 py-1 bg-slate-600 text-cyan-400 text-xs rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300">
                    {item.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              {' '}Sitemap
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Navigate through our complete website structure. Find all services, solutions, 
            and resources organized by category for easy discovery.
          </p>
        </motion.div>

        {/* Quick Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Quick Navigation</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {mainPages.map((page, index) => (
                <motion.div
                  key={page.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    to={page.path}
                    className="block p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-all duration-300 group text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <page.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {page.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      {page.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Content Sections */}
        <div className="space-y-8 mb-16">
          {/* Main Pages */}
          {renderSection('main-pages', 'Main Pages', Layers, mainPages, expandedSections.includes('main-pages'))}

          {/* Core Services */}
          {renderSection('core-services', 'Core Services', Code, coreServices, expandedSections.includes('core-services'))}

          {/* Advanced Services */}
          {renderSection('advanced-services', 'Advanced Services', Rocket, advancedServices, expandedSections.includes('advanced-services'))}

          {/* Industry Solutions */}
          {renderSection('industry-solutions', 'Industry Solutions', Target, industrySolutions, expandedSections.includes('industry-solutions'))}

          {/* Marketing Services */}
          {renderSection('marketing-services', 'Marketing Services', TrendingUp, marketingServices, expandedSections.includes('marketing-services'))}

          {/* Support Services */}
          {renderSection('support-services', 'Support Services', HelpCircle, supportServices, expandedSections.includes('support-services'))}

          {/* Resources */}
          {renderSection('resources', 'Resources & Content', BookOpen, resources, expandedSections.includes('resources'))}

          {/* Company Information */}
          {renderSection('company', 'Company Information', Users, companyPages, expandedSections.includes('company'))}

          {/* Legal Pages */}
          {renderSection('legal', 'Legal & Policies', Shield, legalPages, expandedSections.includes('legal'))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-slate-600">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{info.name}</h3>
                  <a
                    href={info.link}
                    target={info.name === 'Website' ? '_blank' : '_self'}
                    rel={info.name === 'Website' ? 'noopener noreferrer' : ''}
                    className="text-cyan-400 hover:text-cyan-300 transition-colors break-words"
                  >
                    {info.value}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Help Finding Something?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Our comprehensive sitemap should help you navigate our website easily. 
              If you still can't find what you're looking for, our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Website Navigation Help"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                Send Email
                <Mail className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComprehensiveSitemap;