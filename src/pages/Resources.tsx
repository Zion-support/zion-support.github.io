import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Newspaper, 
  HelpCircle, 
  GraduationCap, 
  FileText, 
  Video,
  ExternalLink,
  Search,
  TrendingUp,
  Users,
  Target,
  Brain,
  Cloud,
  Shield,
  Atom,
  ShoppingCart,
  Building,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const ResourcesPage: React.FC = () => {
  const resourceCategories = [
    {
      title: 'Knowledge Base',
      icon: <BookOpen className="w-8 h-8" />,
      description: 'Comprehensive guides and documentation',
      items: [
        { name: 'Blog', href: '/blog', icon: <Newspaper className="w-5 h-5" />, description: 'Latest insights and industry updates' },
        { name: 'FAQ', href: '/faq', icon: <HelpCircle className="w-5 h-5" />, description: 'Frequently asked questions and answers' },
        { name: 'Help Center', href: '/help', icon: <HelpCircle className="w-5 h-5" />, description: 'Comprehensive help and support resources' },
        { name: 'Training', href: '/training', icon: <GraduationCap className="w-5 h-5" />, description: 'Professional development and skill building' }
      ]
    },
    {
      title: 'Research & Insights',
      icon: <FileText className="w-8 h-8" />,
      description: 'In-depth research and thought leadership',
      items: [
        { name: 'White Papers', href: '/white-papers', icon: <FileText className="w-5 h-5" />, description: 'Detailed research and analysis reports' },
        { name: 'Webinars', href: '/webinars', icon: <Video className="w-5 h-5" />, description: 'Live and recorded educational sessions' },
        { name: 'Case Studies', href: '/case-studies', icon: <FileText className="w-5 h-5" />, description: 'Real-world implementation examples' },
        { name: 'News', href: '/news', icon: <Newspaper className="w-5 h-5" />, description: 'Company and industry news updates' }
      ]
    },
    {
      title: 'Services Overview',
      icon: <Target className="w-8 h-8" />,
      description: 'Comprehensive service information',
      items: [
        { name: 'AI & Machine Learning', href: '/services/ai', icon: <Brain className="w-5 h-5" />, description: 'Advanced AI solutions and services' },
        { name: 'Cloud & Infrastructure', href: '/services/cloud-devops', icon: <Cloud className="w-5 h-5" />, description: 'Cloud computing and DevOps solutions' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: <Shield className="w-5 h-5" />, description: 'Security and compliance services' },
        { name: 'Emerging Technologies', href: '/services/quantum-computing', icon: <Atom className="w-5 h-5" />, description: 'Quantum computing and cutting-edge tech' }
      ]
    },
    {
      title: 'Solutions & Industries',
      icon: <Building className="w-8 h-8" />,
      description: 'Industry-specific solutions and expertise',
      items: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: <Building className="w-5 h-5" />, description: 'Large-scale enterprise implementations' },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: <Target className="w-5 h-5" />, description: 'Healthcare technology solutions' },
        { name: 'Financial Solutions', href: '/solutions/financial', icon: <TrendingUp className="w-5 h-5" />, description: 'Financial services technology' },
        { name: 'Micro SaaS Solutions', href: '/services/micro-saas', icon: <ShoppingCart className="w-5 h-5" />, description: 'Small business software solutions' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Search', href: '/search', icon: <Search className="w-5 h-5" /> },
    { name: 'Contact Support', href: '/contact', icon: <Phone className="w-5 h-5" /> },
    { name: 'Pricing', href: '/pricing', icon: <TrendingUp className="w-5 h-5" /> },
    { name: 'About Us', href: '/about', icon: <Users className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Resources & Knowledge Hub
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Access comprehensive resources, documentation, and insights to help you make the most of Zion Tech Group's services and solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="flex flex-col items-center p-4 bg-slate-700/50 hover:bg-slate-600/50 rounded-xl transition-all duration-200 group"
              >
                <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200 mb-2">
                  {link.icon}
                </div>
                <span className="text-white font-medium text-sm">{link.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Resource Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {resourceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-cyan-400">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  <p className="text-slate-400 text-sm">{category.description}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {category.items.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center space-x-3 p-3 bg-slate-700/30 hover:bg-slate-600/50 rounded-lg transition-all duration-200 group"
                  >
                    <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium group-hover:text-cyan-300 transition-colors duration-200">
                        {item.name}
                      </div>
                      <div className="text-slate-400 text-sm">{item.description}</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors duration-200" />
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl p-8 border border-cyan-500/30 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Need More Help?</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team is here to help you navigate our resources and find the information you need.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/contact"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Contact Support</span>
            </Link>
            <Link
              to="/help"
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors duration-200 flex items-center space-x-2"
            >
              <HelpCircle className="w-5 h-5" />
              <span>Help Center</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-slate-400">
          <p className="mb-2">© 2024 Zion Tech Group. All rights reserved.</p>
          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>123 Tech Street, Digital City</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
