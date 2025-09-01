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
  Palette as DesignIcon,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Sitemap: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['main-pages', 'services']);

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
    { name: 'Contact', path: '/contact', icon: Mail, description: 'Get in touch with us' }
  ];

  const serviceCategories = [
    {
      name: 'Development Services',
      icon: Code,
      services: [
        { name: 'Custom Software Development', path: '/services/custom-software', description: 'Tailored software solutions' },
        { name: 'Mobile App Development', path: '/services/mobile-apps', description: 'iOS and Android applications' },
        { name: 'Web Application Development', path: '/services/web-apps', description: 'Modern web applications' },
        { name: 'API Development & Integration', path: '/services/api-development', description: 'RESTful APIs and integrations' },
        { name: 'Database Design & Optimization', path: '/services/database', description: 'Database architecture and performance' }
      ]
    },
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      services: [
        { name: 'AI-Powered Analytics Platform', path: '/services/ai-analytics', description: 'Intelligent data analysis' },
        { name: 'Machine Learning Model Development', path: '/services/ml-models', description: 'Custom ML solutions' },
        { name: 'Data Analytics & Business Intelligence', path: '/services/data-analytics', description: 'Data insights and reporting' },
        { name: 'Predictive Analytics', path: '/services/predictive-analytics', description: 'Future trend predictions' }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      services: [
        { name: 'Cybersecurity Assessment', path: '/services/security-assessment', description: 'Security evaluation' },
        { name: 'Network Security Implementation', path: '/services/network-security', description: 'Network protection' },
        { name: 'Compliance & Governance', path: '/services/compliance', description: 'Regulatory compliance' },
        { name: 'Incident Response', path: '/services/incident-response', description: 'Security incident handling' }
      ]
    },
    {
      name: 'Cloud Solutions',
      icon: Cloud,
      services: [
        { name: 'Cloud Migration', path: '/services/cloud-migration', description: 'Infrastructure migration' },
        { name: 'DevOps & CI/CD', path: '/services/devops', description: 'Development operations' },
        { name: 'Performance Optimization', path: '/services/performance', description: 'System optimization' },
        { name: 'Infrastructure as Code', path: '/services/infrastructure', description: 'Automated infrastructure' }
      ]
    }
  ];

  const solutionAreas = [
    {
      name: 'Industry Solutions',
      icon: Target,
      solutions: [
        { name: 'Healthcare Technology', path: '/solutions/healthcare', description: 'Healthcare IT solutions' },
        { name: 'Financial Services', path: '/solutions/financial', description: 'Fintech and banking solutions' },
        { name: 'E-commerce Platforms', path: '/solutions/ecommerce', description: 'Online retail solutions' },
        { name: 'Manufacturing & Logistics', path: '/solutions/manufacturing', description: 'Industrial automation' },
        { name: 'Education Technology', path: '/solutions/education', description: 'EdTech platforms' }
      ]
    },
    {
      name: 'Technology Solutions',
      icon: Cpu,
      solutions: [
        { name: 'IoT & Edge Computing', path: '/solutions/iot', description: 'Internet of Things solutions' },
        { name: 'Blockchain & Web3', path: '/solutions/blockchain', description: 'Decentralized applications' },
        { name: 'Quantum Computing', path: '/solutions/quantum', description: 'Quantum technology applications' },
        { name: 'Augmented Reality', path: '/solutions/ar', description: 'AR/VR experiences' }
      ]
    }
  ];

  const blogCategories = [
    {
      name: 'Technology Trends',
      icon: TrendingUp,
      posts: [
        { name: 'AI in 2024', path: '/blog/ai-trends-2024', description: 'Latest AI developments' },
        { name: 'Cybersecurity Best Practices', path: '/blog/cybersecurity-best-practices', description: 'Security guidelines' },
        { name: 'Cloud Computing Future', path: '/blog/cloud-computing-future', description: 'Cloud technology trends' }
      ]
    },
    {
      name: 'Industry Insights',
      icon: BookOpen,
      posts: [
        { name: 'Digital Transformation', path: '/blog/digital-transformation', description: 'Business transformation' },
        { name: 'Startup Technology', path: '/blog/startup-technology', description: 'Tech for startups' },
        { name: 'Enterprise Solutions', path: '/blog/enterprise-solutions', description: 'Large-scale implementations' }
      ]
    },
    {
      name: 'Technical Guides',
      icon: Code,
      posts: [
        { name: 'React Best Practices', path: '/blog/react-best-practices', description: 'React development tips' },
        { name: 'API Design Principles', path: '/blog/api-design', description: 'API development guide' },
        { name: 'Database Optimization', path: '/blog/database-optimization', description: 'Performance tuning' }
      ]
    }
  ];

  const companyPages = [
    { name: 'About Zion Tech Group', path: '/about', icon: Users, description: 'Company overview' },
    { name: 'Our Team', path: '/about/team', icon: Users, description: 'Meet our experts' },
    { name: 'Company History', path: '/about/history', icon: Clock, description: 'Our journey' },
    { name: 'Mission & Vision', path: '/about/mission', icon: Target, description: 'Our goals' },
    { name: 'Careers', path: '/careers', icon: Award, description: 'Join our team' },
    { name: 'News & Press', path: '/news', icon: FileText, description: 'Company updates' }
  ];

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy', icon: Lock, description: 'Data protection' },
    { name: 'Terms of Service', path: '/terms', icon: FileText, description: 'Service terms' },
    { name: 'Cookie Policy', path: '/cookies', icon: Settings, description: 'Cookie usage' },
    { name: 'GDPR Compliance', path: '/gdpr', icon: Shield, description: 'Data regulations' }
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
                  <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                    {item.name}
                  </h4>
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
            Site
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              {' '}Map
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Navigate through all pages and sections of our website. 
            Find exactly what you're looking for with our comprehensive site structure.
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

          {/* Services */}
          {renderSection('services', 'Services', Code, serviceCategories.flatMap(cat => cat.services), expandedSections.includes('services'))}

          {/* Solutions */}
          {renderSection('solutions', 'Solutions', Target, solutionAreas.flatMap(area => area.solutions), expandedSections.includes('solutions'))}

          {/* Blog */}
          {renderSection('blog', 'Blog & Insights', FileText, blogCategories.flatMap(cat => cat.posts), expandedSections.includes('blog'))}

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
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Our team is here to help you navigate our website and find the information you need.
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

export default Sitemap;